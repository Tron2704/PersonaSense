// src/components/NavigationButtons.jsx
export default function NavigationButtons({
  onNext,
  onPrevious,
  disableNext,
  disablePrevious,
}) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className={`px-6 py-2 rounded-lg font-semibold transition ${
          disablePrevious
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 hover:bg-gray-700 text-gray-200"
        }`}
      >
        Previous
      </button>

      <button
        onClick={onNext}
        disabled={disableNext}
        className={`px-6 py-2 rounded-lg font-semibold transition ${
          disableNext
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
}
