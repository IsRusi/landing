import logo from "../assets/vite.svg";
import { useState } from "react";
import {MenuItemWithDropdown} from "./MenuItemWithDropDown"
import { MobileMenu } from "./MobileMenu";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 sm:h-20 w-full flex items-center px-4 bg-white shadow-sm z-50">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-[auto_1fr_auto] sm:grid-cols-3 items-center gap-4">
          <div className="flex items-center gap-4 justify-start">
            <img
              width={60}
              height={60}
              alt="logo"
              src={logo}
              className="flex-none"
            />
            <button
            onClick={() => setIsMobileMenuOpen(true)}
              className="w-6 h-6 sm:hidden cursor-pointer flex-none"
              aria-label="Открыть меню"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          
          <nav className="hidden sm:flex justify-center items-center gap-8 whitespace-nowrap">
            <a className="cursor-pointer">Главная</a>
            <MenuItemWithDropdown></MenuItemWithDropdown>
            <a className="cursor-pointer">Контакты</a>
            <a className="cursor-pointer">О нас</a>
          </nav>
          <div className="hidden sm:flex justify-end items-center gap-4">
            <div className="hidden md:flex flex-col text-right text-xs text-gray-500 leading-tight">
              <p>Работаем: 8:00–23:00</p>
              <p className="font-medium text-gray-400">пн–вс</p>
            </div>

            <a
              href="tel:+375251234567"
              className="bg-orange-600 rounded-xl p-[6.5px] animate-pulse text-white w-44 text-center h-10"
            >
              +375 (25) 123-45-67
            </a>
          </div>
        </div>
      </header>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
