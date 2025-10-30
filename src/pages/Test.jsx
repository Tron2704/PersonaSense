import { useState } from "react";
import LikertQuestion from "../components/LikertQuestion";
import YesNoQuestion from "../components/YesNoQuestion";
import NavigationButtons from "../components/NavigationButtons";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();

  // Step control: "likert" → "yesno"
  const [step, setStep] = useState("likert");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Likert Scale Questions
  const likertQuestions = [
    "I enjoy being the center of attention.",
    "I make decisions based on logic rather than feelings.",
    "I prefer to plan things rather than be spontaneous.",
  ];

  // Yes/No Questions
  const yesNoQuestions = [
    "Do you often feel confident in social situations?",
    "Do you enjoy trying new things?",
    "Do you prefer working alone?",
  ];

  // Store answers
  const [answers, setAnswers] = useState({
    likert: Array(likertQuestions.length).fill(null),
    yesno: Array(yesNoQuestions.length).fill(null),
  });

  // Handle Likert Answer
  const handleLikertAnswer = (questionIndex, value) => {
    const updated = [...answers.likert];
    updated[questionIndex] = value;
    setAnswers({ ...answers, likert: updated });
  };

  // Handle Yes/No Answer
  const handleYesNoAnswer = (questionIndex, value) => {
    const updated = [...answers.yesno];
    updated[questionIndex] = value;
    setAnswers({ ...answers, yesno: updated });
  };

  // Navigation Logic
  const handleNext = () => {
    if (step === "likert") {
      if (currentIndex < likertQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setStep("yesno");
        setCurrentIndex(0);
      }
    } else if (step === "yesno") {
      if (currentIndex < yesNoQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // All questions completed → analyze result
        analyzeResults();
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (step === "yesno") {
      setStep("likert");
      setCurrentIndex(likertQuestions.length - 1);
    }
  };

  // Simple Personality Analysis Logic
  const analyzeResults = () => {
    let score = 0;

    // Scoring for Likert (based on positive/neutral/negative choices)
    answers.likert.forEach((ans) => {
      if (ans === "Strongly Agree") score += 2;
      else if (ans === "Agree") score += 1;
      else if (ans === "Disagree") score -= 1;
      else if (ans === "Strongly Disagree") score -= 2;
    });

    // Scoring for Yes/No
    answers.yesno.forEach((ans) => {
      if (ans === "Yes") score += 1;
      else if (ans === "No") score -= 1;
    });

    // Determine personality type
    let personalityType = "";
    let description = "";
    let traits = [];

    if (score >= 4) {
      personalityType = "The Extrovert";
      description =
        "You are outgoing, energetic, and thrive in social situations.";
      traits = ["Confident", "Sociable", "Expressive", "Adventurous"];
    } else if (score >= 0) {
      personalityType = "The Ambivert";
      description =
        "You balance social interaction with personal reflection and independence.";
      traits = ["Adaptable", "Balanced", "Thoughtful", "Friendly"];
    } else {
      personalityType = "The Introvert";
      description =
        "You are introspective, reserved, and recharge best in calm environments.";
      traits = ["Reflective", "Calm", "Analytical", "Independent"];
    }

    // Navigate to Result page with data
    navigate("/result", {
      state: {
        resultData: { personalityType, description, traits },
      },
    });
  };

  return (
    <section className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-800">
        <h1 className="text-2xl font-bold text-center text-blue-400 mb-6">
          {step === "likert" ? "Likert Scale Section" : "Yes/No Section"}
        </h1>

        {/* Render current question */}
        {step === "likert" ? (
          <LikertQuestion
            question={likertQuestions[currentIndex]}
            name={`likert-${currentIndex}`}
            value={answers.likert[currentIndex]}
            onChange={(name, value) => handleLikertAnswer(currentIndex, value)}
          />
        ) : (
          <YesNoQuestion
            question={yesNoQuestions[currentIndex]}
            name={`yesno-${currentIndex}`}
            value={answers.yesno[currentIndex]}
            onChange={(name, value) => handleYesNoAnswer(currentIndex, value)}
          />
        )}

        {/* Navigation Buttons */}
        <NavigationButtons
          onNext={handleNext}
          onPrevious={handlePrevious}
          disablePrevious={step === "likert" && currentIndex === 0}
          disableNext={
            (step === "likert" &&
              answers.likert[currentIndex] === null) ||
            (step === "yesno" && answers.yesno[currentIndex] === null)
          }
        />
      </div>
    </section>
  );
}
