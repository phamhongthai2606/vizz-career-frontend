export default function Pagination({ totalPages }: { totalPages: number }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2">

        <button className="px-3 py-1 border bg-white rounded">‹</button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              i === 0
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button className="px-3 py-1 border bg-white rounded">›</button>
      </div>
    </div>
  );
}
