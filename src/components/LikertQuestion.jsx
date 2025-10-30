// src/components/LikertQuestion.jsx
import React from "react";

export default function LikertQuestion({ question, name, value, onChange }) {
  const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];

  return (
    <div className="mb-6 p-4 bg-gray-900/60 border border-gray-800 rounded-lg">
      <p className="mb-3 text-gray-200">{question}</p>
      <div className="flex justify-between">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(name, opt)}
              className="accent-blue-400"
            />
            <span className="text-sm text-gray-300">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
