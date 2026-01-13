export const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "https://i.pravatar.cc/256?img=11",
    class: "JEE - Batch A",
    scores: { Math: 90, Chem: 85, Phy: 88 },
    history: [
      { month: "Jan", score: 82 },
      { month: "Feb", score: 86 },
      { month: "Mar", score: 88 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 75 + (i % 10), // 75–84
    })),
  },

  {
    id: 2,
    name: "Neha Verma",
    image: "https://i.pravatar.cc/256?img=12",
    class: "JEE - Batch B",
    scores: { Math: 45, Chem: 50, Phy: 55 },
    history: [
      { month: "Jan", score: 52 },
      { month: "Feb", score: 50 },
      { month: "Mar", score: 48 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 40 + (i % 8), // 40–47
    })),
  },

  {
    id: 3,
    name: "Rohan Mehta",
    image: "https://i.pravatar.cc/256?img=13",
    class: "JEE - Batch A",
    scores: { Math: 78, Chem: 74, Phy: 80 },
    history: [
      { month: "Jan", score: 72 },
      { month: "Feb", score: 75 },
      { month: "Mar", score: 78 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 65 + (i % 10), // 65–74
    })),
  },

  {
    id: 4,
    name: "Priya Singh",
    image: "https://i.pravatar.cc/256?img=14",
    class: "NEET - Batch C",
    scores: { Math: 88, Chem: 90, Phy: 92 },
    history: [
      { month: "Jan", score: 85 },
      { month: "Feb", score: 88 },
      { month: "Mar", score: 90 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 85 + (i % 10), // 85–94
    })),
  },

  {
    id: 5,
    name: "Aditya Kumar",
    image: "https://i.pravatar.cc/256?img=15",
    class: "NEET - Batch C",
    scores: { Math: 60, Chem: 58, Phy: 62 },
    history: [
      { month: "Jan", score: 55 },
      { month: "Feb", score: 58 },
      { month: "Mar", score: 60 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 55 + (i % 8), // 55–62
    })),
  },

  {
    id: 6,
    name: "Simran Kaur",
    image: "https://i.pravatar.cc/256?img=16",
    class: "+2 Boards - Batch A",
    scores: { Math: 95, Chem: 93, Phy: 90 },
    history: [
      { month: "Jan", score: 90 },
      { month: "Feb", score: 92 },
      { month: "Mar", score: 94 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 90 + (i % 10), // 90–99
    })),
  },

  {
    id: 7,
    name: "Kunal Gupta",
    image: "https://i.pravatar.cc/256?img=17",
    class: "+2 Boards - Batch B",
    scores: { Math: 48, Chem: 52, Phy: 50 },
    history: [
      { month: "Jan", score: 50 },
      { month: "Feb", score: 49 },
      { month: "Mar", score: 48 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 42 + (i % 7), // 42–48
    })),
  },

  {
    id: 8,
    name: "Ananya Joshi",
    image: "https://i.pravatar.cc/256?img=18",
    class: "10th boards - Batch A",
    scores: { Math: 82, Chem: 85, Phy: 80 },
    history: [
      { month: "Jan", score: 78 },
      { month: "Feb", score: 80 },
      { month: "Mar", score: 82 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 75 + (i % 8), // 75–82
    })),
  },

  {
    id: 9,
    name: "Rahul Malhotra",
    image: "https://i.pravatar.cc/256?img=19",
    class: "10th boards - Batch B",
    scores: { Math: 70, Chem: 68, Phy: 72 },
    history: [
      { month: "Jan", score: 65 },
      { month: "Feb", score: 68 },
      { month: "Mar", score: 70 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 60 + (i % 10), // 60–69
    })),
  },

  {
    id: 10,
    name: "Pooja Nair",
    image: "https://i.pravatar.cc/256?img=20",
    class: "JEE - Batch B",
    scores: { Math: 92, Chem: 89, Phy: 91 },
    history: [
      { month: "Jan", score: 88 },
      { month: "Feb", score: 90 },
      { month: "Mar", score: 92 },
    ],
    exams: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: 85 + (i % 10), // 85–94
    })),
  },
];
