import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/vite.svg";
export function MobileMenu({ isOpen, onClose }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 sm:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <img width={50} height={50} alt="logo" src={logo} />
            <button
              onClick={onClose}
              className="w-6 h-6 text-gray-800 cursor-pointer flex items-center justify-center"
              aria-label="Закрыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={onClose} className="text-lg font-medium text-gray-800 hover:text-orange-600 py-2 border-b border-gray-100">
              Главная
            </Link>
            
           
            <div className="flex flex-col border-b border-gray-100 py-2">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-gray-800 hover:text-orange-600 focus:outline-none"
              >
                <span>Наши услуги</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

             
              <div className={`grid transition-all duration-300 ease-in-out ${isServicesOpen ? "grid-rows-[1fr] opacity-100 mt-2 gap-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}>
                <div className="overflow-hidden flex flex-col gap-2 pl-4">
                  <Link to="/services/web-development" onClick={onClose} className="text-base text-gray-600 hover:text-orange-600 py-1">— Разработка сайтов</Link>
                  <Link to="/services/seo" onClick={onClose} className="text-base text-gray-600 hover:text-orange-600 py-1">— Продвижение</Link>
                </div>
              </div>
            </div>

            <Link to="/contacts" onClick={onClose} className="text-lg font-medium text-gray-800 hover:text-orange-600 py-2 border-b border-gray-100">Контакты</Link>
            <Link to="/about" onClick={onClose} className="text-lg font-medium text-gray-800 hover:text-orange-600 py-2">О нас</Link>
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
          <div className="text-xs text-gray-500">
            <p>Работаем: 8:00–23:00</p>
            <p>Понедельник — Воскресенье</p>
          </div>
          <a href="tel:+375251234567" className="bg-orange-600 rounded-xl text-white w-full h-12 flex items-center justify-center font-medium shadow-md">
            +375 (25) 123-45-67
          </a>
        </div>
      </div>
    </div>
  );
}