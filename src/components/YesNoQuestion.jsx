// src/components/YesNoQuestion.jsx
import React from "react";

export default function YesNoQuestion({ question, name, value, onChange }) {
  return (
    <div className="mb-6 p-4 bg-gray-900/60 border border-gray-800 rounded-lg">
      <p className="mb-3 text-gray-200">{question}</p>
      <div className="flex gap-6">
        {["Yes", "No"].map((opt) => (
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
