import { useEffect, useState } from "react";

export function useFilters(data) {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ sort: "" });
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let result = [...data];

      if (filters.sort) {
        result.sort((a, b) => {
          const avgA = Object.values(a.scores).reduce((x, y) => x + y) / 3;
          const avgB = Object.values(b.scores).reduce((x, y) => x + y) / 3;
          return filters.sort === "asc" ? avgA - avgB : avgB - avgA;
        });
      }

      setFiltered(result);
      setLoading(false);
    }, 600);
  }, [data, filters]);

  return { filtered, loading, filters, setFilters };
}
