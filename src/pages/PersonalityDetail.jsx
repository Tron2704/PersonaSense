import { useParams, Link } from "react-router-dom";

export default function PersonalityDetail() {
  const { id } = useParams();

  return (
    <section className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">
        {id.toUpperCase()} Personality Type
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Detailed personality insights for {id.toUpperCase()} will appear here.
      </p>
      <Link to="/personality-types" className="text-blue-400 hover:underline">
        ← Back to Personality Types
      </Link>
    </section>
  );
}
