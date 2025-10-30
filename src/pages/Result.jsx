import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userInfo, resultData } = location.state || {};

  if (!userInfo || !resultData) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100">
        <p className="mb-4 text-gray-300">No data found. Please take the test again.</p>
        <button
          onClick={() => navigate("/test")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Retake Test
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-800">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Your Personality Result
        </h1>

        {/* User Info */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-300">Your Details</h2>
          <div className="space-y-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <p><span className="text-blue-400 font-semibold">Name:</span> {userInfo.name}</p>
            <p><span className="text-blue-400 font-semibold">Age:</span> {userInfo.age}</p>
            <p><span className="text-blue-400 font-semibold">Gender:</span> {userInfo.gender}</p>
          </div>
        </div>

        {/* Personality Result */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-300">Personality Type</h2>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 space-y-3">
            <p className="text-2xl font-bold text-blue-400">{resultData.type}</p>
            <p className="text-gray-300">{resultData.description}</p>
            <ul className="list-disc list-inside text-gray-300">
              {resultData.traits.map((trait, idx) => (
                <li key={idx}>{trait}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
