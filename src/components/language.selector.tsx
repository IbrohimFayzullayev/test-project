import { useState } from "react";
import ArrowIcon from "../img/icons/arrow.svg";
import Flag from "../img/icons/flag.svg";

const languages = [
  { code: "uz", name: "O'zbek Tili", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2.5 rounded-md hover:bg-gray-100 transition"
      >
        <img src={Flag} alt="flag" className="w-5 h-5" />
        <span className="font-semibold text-dark">{selectedLang.name}</span>
        <span className="text-dark">
          <img src={ArrowIcon} alt="arrow" className="w-3 h-3" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-3 font-semibold w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
            >
              <img src={Flag} alt="flag" className="w-5 h-5" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
