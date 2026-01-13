export default function SortSelect({ filters, setFilters }) {
  return (
    <select
      value={filters.sort}
      onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      className="px-4 py-2 rounded-lg border text-sm bg-white shadow-sm focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">Sort by score</option>
      <option value="asc">Low → High</option>
      <option value="desc">High → Low</option>
    </select>
  );
}
