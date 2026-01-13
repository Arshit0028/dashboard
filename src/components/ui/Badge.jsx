export default function Badge({ value }) {
  const color =
    value < 50 ? "bg-red-500" : value < 75 ? "bg-yellow-500" : "bg-green-500";

  return (
    <span className={`block text-white text-center mt-2 py-1 rounded ${color}`}>
      Avg: {value.toFixed(1)}
    </span>
  );
}
