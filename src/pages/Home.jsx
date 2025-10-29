import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] text-center bg-gray-950 text-white">
      <h1 className="text-5xl font-bold mb-4 text-blue-400">Personality Prediction System</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        Discover your personality traits using AI-based facial and psychological analysis.
      </p>
      <Link
        to="/test"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition"
      >
        Start Test
      </Link>
    </div>
  );
}
