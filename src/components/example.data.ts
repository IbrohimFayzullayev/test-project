// exampleData.ts
export interface Participant {
  id: number;
  name: string;
  categories: {
    [category: string]: number | undefined;
  };
}

// 5 categories
export const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

// Sample data
export const initialParticipants: Participant[] = [
  {
    id: 1,
    name: "Алиев Аха",
    categories: {
      "Category 1": 100,
      "Category 2": 500,
      "Category 3": -500,
      "Category 4": 0,
      "Category 5": 800,
    },
  },
  {
    id: 2,
    name: "Рахимов Рахматулло",
    categories: {
      "Category 1": 0,
      "Category 2": 300,
      "Category 3": 100,
      "Category 4": 500,
      // Category 5 missing => treat as 0
    },
  },
  {
    id: 3,
    name: "Халилова Лязза",
    categories: {
      "Category 1": 500,
      "Category 2": 500,
      "Category 3": 500,
      // Category 4 missing => treat as 0
      "Category 5": 1000,
    },
  },
  // ... Add as many rows as you need
];
