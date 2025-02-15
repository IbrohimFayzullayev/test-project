import React from "react";
import LanguageSelector from "./language.selector";

const Header = () => {
  return (
    <div className="border-b-[1px] border-gray py-5">
      <div className="c_container">
        <div className="flex justify-between">
          <ul className="flex gap-5 items-center">
            <li className="text-dark font-gilroy font-semibold text-[18px] leading-[18px]">
              Reja
            </li>
            <li className="text-dark font-gilroy font-semibold text-[18px] leading-[18px]">
              Qabul qilish talablari
            </li>
            <li className="text-dark font-gilroy font-semibold text-[18px] leading-[18px]">
              Ko'rsatmalar
            </li>
            <li className="text-dark font-gilroy font-semibold text-[18px] leading-[18px]">
              Saralash
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button className="px-[20px] py-[14px] bg-dark rounded-[8px] text-white font-gilroy font-bold text-[15px] leading-[15px]">
              Sinovdan o'ting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
