import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100 px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
          Discover Your Personality Type
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Unlock insights into your unique personality traits and behaviors
          through our scientifically inspired test. Learn what drives you,
          connects you, and defines who you truly are.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/test"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Start Your Test
          </Link>

          <Link
            to="/personality-types"
            className="border border-blue-500 hover:bg-blue-600/10 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Explore Personality Types
          </Link>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">
          The 16 Personality Types
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Our test is inspired by the Myers–Briggs Type Indicator (MBTI) model,
          which categorizes personalities into 16 distinct types based on how
          people perceive the world and make decisions. Each type has its own
          strengths, weaknesses, and ideal environments.
        </p>
        <Link
          to="/personality-types"
          className="inline-block mt-6 text-blue-400 hover:underline"
        >
          Learn more about all 16 types →
        </Link>
      </div>
    </section>
  );
}
