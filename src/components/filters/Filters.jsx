import SortSelect from "./SortSelect";

export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex gap-4 mb-6">
      <SortSelect filters={filters} setFilters={setFilters} />
    </div>
  );
}
