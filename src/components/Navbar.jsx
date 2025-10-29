import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-400">
        Personality AI
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/test" className="hover:text-blue-400">Test</Link>
        <Link to="/result" className="hover:text-blue-400">Results</Link>
        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
          Login
        </Link>
      </div>
    </nav>
  );
}
