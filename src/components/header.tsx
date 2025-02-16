import React, { useState } from "react";
import LanguageSelector from "./language.selector";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray py-4">
      <div className="c_container">
        <div className="flex justify-between items-center">
          <button
            className="md:hidden text-2xl text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          <ul
            className={`md:flex gap-5 items-center ${
              isOpen ? "block" : "hidden"
            } absolute top-16 left-0 z-10 w-full bg-white shadow-md md:static md:w-auto md:bg-transparent md:shadow-none md:flex`}
          >
            <li className="text-dark cursor-pointer font-gilroy font-semibold text-[16px] md:text-[18px] leading-[18px] py-3 px-5 md:p-0">
              Reja
            </li>
            <li className="text-dark cursor-pointer font-gilroy font-semibold text-[16px] md:text-[18px] leading-[18px] py-3 px-5 md:p-0">
              Qabul qilish talablari
            </li>
            <li className="text-dark cursor-pointer font-gilroy font-semibold text-[16px] md:text-[18px] leading-[18px] py-3 px-5 md:p-0">
              Ko'rsatmalar
            </li>
            <li className="text-dark cursor-pointer font-gilroy font-semibold text-[16px] md:text-[18px] leading-[18px] py-3 px-5 md:p-0">
              Saralash
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button className="px-[16px] md:px-[20px] py-[10px] md:py-[14px] bg-dark rounded-[8px] text-white font-gilroy font-bold text-[14px] md:text-[15px] leading-[15px]">
              Sinovdan o'ting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
