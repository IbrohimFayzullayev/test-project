import React, { useState } from "react";
import { categories, initialParticipants, Participant } from "./example.data";

type SortKey = "name" | "total" | string; // string for category keys (e.g. "Category 1")

const ParticipantsTable: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>(() => [
    ...initialParticipants,
  ]);

  // Track which column is currently sorted and in which direction
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: "asc" | "desc";
  } | null>(null);

  /**
   * Calculate row total for a participant.
   */
  const getRowTotal = (p: Participant) => {
    return categories.reduce((sum, cat) => {
      const val = p.categories[cat] ?? 0; // if missing, use 0
      return sum + val;
    }, 0);
  };

  /**
   * Calculate column total for a category.
   */
  const getColumnTotal = (cat: string) => {
    return participants.reduce((sum, p) => {
      const val = p.categories[cat] ?? 0;
      return sum + val;
    }, 0);
  };

  /**
   * Calculate grand total (sum of all values).
   */
  const getGrandTotal = () => {
    return categories.reduce((catSum, cat) => catSum + getColumnTotal(cat), 0);
  };

  /**
   * Sort participants by a given key (category name, "name", or "total").
   */
  const handleSort = (key: SortKey) => {
    // Determine the next direction
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });

    // Sort logic
    setParticipants((prev) => {
      const sorted = [...prev].sort((a, b) => {
        let aVal: number | string;
        let bVal: number | string;

        if (key === "name") {
          aVal = a.name;
          bVal = b.name;
        } else if (key === "total") {
          aVal = getRowTotal(a);
          bVal = getRowTotal(b);
        } else {
          // Sorting by category name (vertical sort)
          aVal = a.categories[key] ?? 0;
          bVal = b.categories[key] ?? 0;
        }

        // Compare
        if (typeof aVal === "string" && typeof bVal === "string") {
          // String comparison
          return aVal.localeCompare(bVal, "ru", { sensitivity: "base" });
        } else {
          // Numeric comparison
          return (aVal as number) - (bVal as number);
        }
      });

      // If direction is desc, reverse the array
      if (direction === "desc") {
        sorted.reverse();
      }

      return sorted;
    });
  };

  return (
    <div className="c_container py-20">
      <h2 className="font-bold text-[32px] leading-[38px] mb-8">
        Рейтинг участников
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F3F7F9]">
              <th
                className="py-3 px-3 border border-white"
                style={{ width: "40px" }}
              ></th>
              <th
                className="py-2 px-3 border border-white cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Участник
                {sortConfig?.key === "name" &&
                  (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </th>
              {categories.map((cat) => (
                <th
                  key={cat}
                  className="py-2 px-3 border border-white cursor-pointer text-center"
                  onClick={() => handleSort(cat)}
                >
                  {cat}
                  {sortConfig?.key === cat &&
                    (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                </th>
              ))}
              <th
                className="py-2 px-3 border border-white cursor-pointer text-center"
                onClick={() => handleSort("total")}
              >
                Итого
                {sortConfig?.key === "total" &&
                  (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </th>
            </tr>
          </thead>

          <tbody>
            {participants.map((p, index) => {
              const rowTotal = getRowTotal(p);
              return (
                <tr key={p.id} className="odd:bg-white even:bg-[#F3F7F9]">
                  <td className="py-3 px-3 border border-white text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-3 border border-white">{p.name}</td>

                  {categories.map((cat) => {
                    const val = p.categories[cat] ?? 0;
                    return (
                      <td
                        key={cat}
                        className="py-2 px-3 border border-white text-center"
                      >
                        {val}
                      </td>
                    );
                  })}

                  {/* Row total */}
                  <td className="py-2 px-3 border border-white text-center font-semibold">
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>

          {/* Footer row with column totals + grand total */}
          <tfoot>
            <tr className="bg-[#F3F7F9] font-semibold">
              <td
                className="py-3 px-3 border border-white text-center"
                colSpan={2}
              >
                Общее
              </td>
              {categories.map((cat) => (
                <td
                  key={cat}
                  className="py-2 px-3 border border-white text-center"
                >
                  {getColumnTotal(cat)}
                </td>
              ))}
              <td className="py-2 px-3 border border-white text-center">
                {getGrandTotal()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsTable;
