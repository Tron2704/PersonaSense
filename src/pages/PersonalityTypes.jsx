import { Link } from "react-router-dom";

const personalityTypes = [
  { id: "intj", name: "INTJ – The Architect", desc: "Imaginative and strategic thinkers with a plan for everything." },
  { id: "intp", name: "INTP – The Thinker", desc: "Innovative inventors with an unquenchable thirst for knowledge." },
  { id: "entj", name: "ENTJ – The Commander", desc: "Bold, imaginative leaders, always finding a way or making one." },
  { id: "entp", name: "ENTP – The Debater", desc: "Smart, curious thinkers who love an intellectual challenge." },
  { id: "infj", name: "INFJ – The Advocate", desc: "Quiet and mystical, yet very inspiring and idealistic." },
  { id: "infp", name: "INFP – The Mediator", desc: "Poetic, kind, and altruistic people, always eager to help a good cause." },
  { id: "enfj", name: "ENFJ – The Protagonist", desc: "Charismatic leaders who inspire others to grow and do good." },
  { id: "enfp", name: "ENFP – The Campaigner", desc: "Enthusiastic, creative, and sociable free spirits." },
  { id: "istj", name: "ISTJ – The Logistician", desc: "Practical and fact-minded individuals, whose reliability cannot be doubted." },
  { id: "isfj", name: "ISFJ – The Defender", desc: "Dedicated and warm protectors, always ready to defend loved ones." },
  { id: "estj", name: "ESTJ – The Executive", desc: "Excellent administrators, unsurpassed at managing things—or people." },
  { id: "esfj", name: "ESFJ – The Consul", desc: "Extraordinarily caring, social, and popular people, always eager to help." },
  { id: "istp", name: "ISTP – The Virtuoso", desc: "Bold and practical experimenters, masters of all kinds of tools." },
  { id: "isfp", name: "ISFP – The Adventurer", desc: "Flexible and charming artists, always ready to explore and experience new things." },
  { id: "estp", name: "ESTP – The Entrepreneur", desc: "Smart, energetic, and perceptive people who enjoy living on the edge." },
  { id: "esfp", name: "ESFP – The Entertainer", desc: "Spontaneous, energetic, and enthusiastic performers who love to entertain others." },
];

export default function PersonalityTypes() {
  return (
    <section className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Explore the 16 Personality Types</h1>
        <p className="text-gray-400 text-lg">
          Each type offers a unique perspective on how people interact, think, and feel. 
          Discover which type resonates with you the most.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {personalityTypes.map((type) => (
          <div
            key={type.id}
            className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition"
          >
            <h2 className="text-xl font-semibold text-blue-300 mb-2">{type.name}</h2>
            <p className="text-gray-400 mb-4 text-sm">{type.desc}</p>
            <Link
              to={`/personality/${type.id}`}
              className="inline-block text-blue-400 hover:underline font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
