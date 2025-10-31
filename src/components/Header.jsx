import React from "react";
import { Heart, Sparkles } from "lucide-react";

export default function Header({ onBurger }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-30 shadow-lg shadow-rose-100/50 border-b border-rose-100">
      <div className="max-w-screen-sm mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип с анимацией */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-3 h-3 text-amber-400 pulse-glow" />
            </div>
          </div>
          <div className="text-xl font-serif text-rose-800 font-medium tracking-wide">
            Тойго чакыруу
          </div>
        </div>

        {/* Кнопка бургер меню */}
        <button
          onClick={onBurger}
          className="burger flex items-center justify-center rounded-2xl p-3 focus:outline-none wedding-button group relative overflow-hidden"
          aria-label="Open menu"
        >
          {/* Анимированный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Иконка меню */}
          <div className="relative z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-rose-700 group-hover:text-white transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>

          {/* Блестящий эффект */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      </div>

      {/* Декоративная линия под хедером */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full"></div>
    </header>
  );
}
