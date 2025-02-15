import React from "react";

const ApplicationForm: React.FC = () => {
  return (
    <div className=" bg-white flex flex-col items-center">
      <div className="w-full h-32 bg-[#F6F8FB] rounded-t-[50%]" />
      <div className=" bg-[#F6F8FB] pb-20 top-36 w-full flex justify-center">
        <div className="w-[90%] max-w-md bg-[#F6F8FB]">
          <h1 className="text-center text-[36px] font-bold leading-[54px] mb-6">
            Форма заявки
          </h1>
          <form action="#" className="space-y-4">
            <div>
              <select
                className="w-full px-4 text-[18px] text-secondary leading-[27px] font-medium py-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  User
                </option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
              </select>
            </div>
            <div>
              <select
                className="w-full px-4 text-[18px] text-secondary leading-[27px] font-medium py-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                className="w-full px-4 text-[18px] text-secondary leading-[27px] font-medium py-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Count"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[8px] bg-primary text-white text-[20px] leading-[20px] font-semibold py-[18px] px-[30px]"
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
