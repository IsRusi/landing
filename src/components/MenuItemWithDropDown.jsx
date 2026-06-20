import { useState } from "react";
export function MenuItemWithDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col sm:flex-row sm:items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 cursor-pointer py-2 "
      >
        Наши услуги
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`
        ${isOpen ? "block opacity-100" : "hidden opacity-0"}
        sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2 
        w-full sm:w-56 bg-white sm:rounded-xl sm:shadow-xl sm:border sm:border-gray-100 p-2 
        transition-all duration-200 z-50
      `}
      >
        <ul className="flex flex-col gap-1 pl-4 sm:pl-0">
          <li>
            <a className="block px-4 py-2 text-sm rounded-lg">
              Грузоперевозки
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 text-sm rounded-lg">
              Вывоз мусора
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 text-sm rounded-lg">
              Переезд
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}