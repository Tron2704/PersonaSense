// src/pages/Result.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve result data passed from the Test page
  const { resultData } = location.state || {};

  // Fallback if user directly opens /result without taking the test
  if (!resultData) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-gray-100">
        <div className="bg-gray-900/70 border border-gray-800 p-8 rounded-2xl shadow-xl text-center">
          <h1 className="text-2xl font-bold text-blue-400 mb-4">
            Oops! No Result Found 😅
          </h1>
          <p className="text-gray-400 mb-6">
            Please complete the personality test before viewing your result.
          </p>
          <button
            onClick={() => navigate("/test")}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Take the Test
          </button>
        </div>
      </section>
    );
  }

  // Destructure result data
  const { personalityType, description, traits } = resultData;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-gray-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-gray-900/70 border border-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-4 text-center">
          Your Personality Result
        </h1>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {personalityType}
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>

        <div className="bg-gray-800/70 p-5 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-3">Key Traits:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/personality-types")}
            className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-gray-200"
          >
            View All Types
          </button>
          <button
            onClick={() => navigate("/test")}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Retake Test
          </button>
        </div>
      </div>
    </section>
  );
}
