import React, { useState, useMemo } from "react";
import { thousandSeperate } from "../utils/funcs";

type UserProps = {
  avatar: string;
  first_name: string;
  id: number;
  last_name: string;
};

type CategoryProps = {
  id: number;
  name: string;
};

type CountProps = {
  category_id: number;
  count: number;
  user_id: number;
};

type SortKey = "name" | "total" | number;

type Props = {
  categories: CategoryProps[];
  users: UserProps[];
  counts: CountProps[];
};

const ParticipantsTable: React.FC<Props> = ({ categories, users, counts }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: "asc" | "desc";
  } | null>(null);

  const participants = useMemo(() => {
    return users.map((user) => {
      const userCounts = counts.filter((c) => c.user_id === user.id);
      const categoryData: Record<number, number> = {};

      userCounts.forEach((c) => {
        categoryData[c.category_id] = c.count;
      });

      return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        avatar: user.avatar,
        categories: categoryData,
      };
    });
  }, [users, counts]);

  const getRowTotal = (p: any) => {
    return categories.reduce(
      (sum, cat) => sum + (p.categories[cat.id] ?? 0),
      0
    );
  };

  const getColumnTotal = (category_id: number) => {
    return participants.reduce(
      (sum, p) => sum + (p.categories[category_id] ?? 0),
      0
    );
  };

  const getGrandTotal = () => {
    return categories.reduce((sum, cat) => sum + getColumnTotal(cat.id), 0);
  };

  const handleSort = (key: SortKey) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedParticipants = useMemo(() => {
    return [...participants].sort((a, b) => {
      let aVal: number | string =
        sortConfig?.key === "name"
          ? a.name
          : sortConfig?.key === "total"
          ? getRowTotal(a)
          : typeof sortConfig?.key === "number"
          ? a.categories[sortConfig.key] ?? 0
          : 0;
      let bVal: number | string =
        sortConfig?.key === "name"
          ? b.name
          : sortConfig?.key === "total"
          ? getRowTotal(b)
          : typeof sortConfig?.key === "number"
          ? b.categories[sortConfig.key] ?? 0
          : 0;

      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      } else {
        return (aVal as number) - (bVal as number);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participants, sortConfig]);

  return (
    <div className="c_container">
      <h2 className="font-bold text-[28px] md:text-[32px] leading-[34px] md:leading-[38px] mb-8">
        Рейтинг участников
      </h2>
      <div className="overflow-x-auto scroll__bar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F3F7F9]">
              <th
                className="py-2 md:py-3 px-2 md:px-3 border border-white"
                style={{ width: "40px" }}
              ></th>
              <th
                className="py-2 md:py-3 px-2 md:px-3 border border-white cursor-pointer text-[14px] md:text-[16px]"
                onClick={() => handleSort("name")}
              >
                Участник
              </th>
              {categories.map((cat) => (
                <th
                  key={cat.id}
                  className="py-2 md:py-3 px-2 md:px-3 border border-white cursor-pointer text-center text-[14px] md:text-[16px]"
                  onClick={() => handleSort(cat.id)}
                >
                  {cat.name}
                </th>
              ))}
              <th
                className="py-2 md:py-3 px-2 md:px-3 border border-white cursor-pointer text-center text-[14px] md:text-[16px]"
                onClick={() => handleSort("total")}
              >
                Итого
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedParticipants.map((p, index) => (
              <tr key={p.id} className="odd:bg-white even:bg-[#F3F7F9]">
                <td className="py-2 md:py-3 px-2 md:px-3 border border-white text-center text-[14px] md:text-[16px]">
                  {index + 1}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-3 border border-white flex items-center gap-2 text-[14px] md:text-[16px]">
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                  />
                  {p.name}
                </td>
                {categories.map((cat) => (
                  <td
                    key={cat.id}
                    className={`py-2 md:py-3 ${
                      p.categories[cat.id] < 0 && "bg-[#EB575726]"
                    } ${
                      (p.categories[cat.id] === 0 || !p.categories[cat.id]) &&
                      "bg-[#14C7A726]"
                    } px-2 md:px-3 border border-white text-center text-[14px] md:text-[16px]`}
                  >
                    {thousandSeperate(p.categories[cat.id] ?? 0)}
                  </td>
                ))}
                <td className="py-2 md:py-3 px-2 md:px-3 border border-white text-center font-semibold text-[14px] md:text-[16px]">
                  {getRowTotal(p)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#F3F7F9] font-semibold">
              <td
                className="py-2 md:py-3 px-2 md:px-3 border border-white text-center text-[14px] md:text-[16px]"
                colSpan={2}
              >
                Общее
              </td>
              {categories.map((cat) => (
                <td
                  key={cat.id}
                  className="py-2 md:py-3 px-2 md:px-3 border border-white text-center text-[14px] md:text-[16px]"
                >
                  {thousandSeperate(getColumnTotal(cat.id))}
                </td>
              ))}
              <td className="py-2 md:py-3 px-2 md:px-3 border border-white text-center text-[14px] md:text-[16px]">
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
