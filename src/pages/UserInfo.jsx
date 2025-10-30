import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  // personality result passed from Test.jsx
  const { resultData } = location.state || {};

  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.age || !userInfo.gender) {
      alert("Please fill all the fields before proceeding!");
      return;
    }

    // navigate to result with user + personality data
    navigate("/result", {
      state: {
        userInfo,
        resultData,
      },
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 px-4 py-10">
      <div className="max-w-md w-full bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-800">
        <h1 className="text-2xl font-bold text-center text-blue-400 mb-6">
          Tell Us About Yourself
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Age</label>
            <input
              type="number"
              name="age"
              value={userInfo.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Gender</label>
            <select
              name="gender"
              value={userInfo.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            View My Result
          </button>
        </form>
      </div>
    </section>
  );
}
