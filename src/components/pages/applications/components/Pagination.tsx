export default function Pagination({ totalPages }: { totalPages: number }) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex items-center gap-2">
        <button className="rounded border bg-white px-3 py-1">‹</button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`rounded border px-3 py-1 ${
              i === 0
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button className="rounded border bg-white px-3 py-1">›</button>
      </div>
    </div>
  );
}
