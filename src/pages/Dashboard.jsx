import { students } from "../data/student";
import StudentCard from "../components/cards/StudentCards";
import Filters from "../components/filters/Filters";
import { useFilters } from "../hooks/useFilters";
import Loading from "../components/feedback/Loading";
import EmptyState from "../components/feedback/EmptyState";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { filtered, loading, filters, setFilters } = useFilters(students);

  if (loading) return <Loading />;
  if (!filtered.length) return <EmptyState />;

  return (
    <div className="p-8">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-between items-center mb-6"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          Students Overview
        </h3>
        <Filters filters={filters} setFilters={setFilters} />
      </motion.div>

      {/* CARD GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filtered.map((s) => (
          <motion.div key={s.id} variants={cardVariants}>
            <StudentCard student={s} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* 🔹 Animation Variants */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
