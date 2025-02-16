import React, { FC, useState } from "react";

type CategoryProps = {
  id: number;
  name: string;
};

type CountProps = {
  user_id: number;
  category_id: number;
  count: number;
};

type UserProps = {
  id: number;
  first_name: string;
  last_name: string;
};

type Props = {
  categories: CategoryProps[];
  counts: CountProps[];
  users: UserProps[];
  setCounts: React.Dispatch<React.SetStateAction<CountProps[]>>;
};

const ApplicationForm: FC<Props> = ({
  categories,
  counts,
  users,
  setCounts,
}) => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);

  const selectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(e.target.value);
    setSelectedUser(userId);
    findCount(userId, selectedCategory);
  };

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = Number(e.target.value);
    setSelectedCategory(categoryId);
    findCount(selectedUser, categoryId);
  };

  const findCount = (user_id: number | null, category_id: number | null) => {
    if (user_id === null || category_id === null) {
      setCount(null);
      return;
    }
    setCount(
      counts.find((c) => c.user_id === user_id && c.category_id === category_id)
        ?.count ?? 0
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedUser === null || selectedCategory === null || count === null) {
      return;
    }
    const newCounts = counts.map((c) => {
      if (c.user_id === selectedUser && c.category_id === selectedCategory) {
        return { ...c, count };
      }
      return c;
    });
    setCounts(newCounts);
  };

  return (
    <div className="bg-white flex flex-col items-center">
      <div className="w-full h-24 md:h-32 bg-[#F6F8FB] rounded-t-[50%]" />
      <div className="bg-[#F6F8FB] pb-10 md:pb-20 w-full flex justify-center">
        <div className="w-[90%] max-w-md bg-[#F6F8FB]">
          <h1 className="text-center text-[28px] md:text-[36px] font-bold leading-[42px] md:leading-[54px] mb-4 md:mb-6">
            Форма заявки
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <select
                required
                defaultValue=""
                onChange={selectUser}
                className="w-full px-4 py-3 text-[16px] md:text-[18px] text-secondary leading-[24px] md:leading-[27px] font-medium rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select user</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.first_name} {user.last_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                required
                defaultValue=""
                onChange={selectCategory}
                className="w-full px-4 py-3 text-[16px] md:text-[18px] text-secondary leading-[24px] md:leading-[27px] font-medium rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                required
                type="number"
                placeholder="Count"
                value={count !== null ? String(count) : ""}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full px-4 py-3 text-[16px] md:text-[18px] text-secondary leading-[24px] md:leading-[27px] font-medium rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[8px] bg-primary text-white text-[16px] md:text-[20px] font-semibold py-3 md:py-[18px] px-6 md:px-[30px]"
            >
              SET
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
