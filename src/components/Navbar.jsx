import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-900/70 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          PersonaSense
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/test" className="hover:text-blue-400">
            Know Yourself
          </Link>
          <Link to="/personality-types" className="hover:text-blue-400">
            Personality Types
          </Link>
          <Link
            to="/test"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
          >
            Take Your Test
          </Link>
        </div>
      </div>
    </nav>
  );
}
