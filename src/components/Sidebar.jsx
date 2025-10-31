import React from "react";
import MusicPlayer from "./MusicPlayer";
import { X, Heart, Sparkles, Home, Calendar, Clock, Users } from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const handleLinkClick = (sectionId) => {
    onClose(); // Закрываем сайдбар

    // Небольшая задержка для анимации закрытия сайдбара
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  const menuItems = [
    { id: "home", label: "Баштапкы бет", icon: Home },
    { id: "invite", label: "Чакыруу", icon: Heart },
    { id: "time", label: "Убакыты", icon: Clock },
    { id: "program", label: "Той программасы", icon: Users },
  ];

  return (
    <>
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Сайдбар */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 transform transition-all duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "75vw",
          maxWidth: "320px",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%)",
          boxShadow: "0 0 50px rgba(225, 29, 72, 0.3)",
        }}
      >
        <div className="flex flex-col h-full text-white p-6 relative overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-4 left-4">
            <Sparkles
              className="w-5 h-5 text-rose-400 floating"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <Heart
              className="w-6 h-6 text-rose-500/60 floating"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Заголовок и кнопка закрытия */}
          <div className="flex items-center justify-between mb-12 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-rose-200 hover:text-white hover:bg-rose-800/50 rounded-xl transition-all duration-300 group relative overflow-hidden"
              aria-label="Close menu"
            >
              <X size={24} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="mb-6 fade-in-up">
            <MusicPlayer />
          </div>

          {/* Навигация */}
          <nav className="flex flex-col gap-3 flex-1">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="flex items-center gap-4 p-4 text-left rounded-2xl hover:bg-rose-900/50 hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Фоновый градиент при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-900/0 via-rose-800/30 to-rose-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Иконка */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-700 to-rose-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-rose-200" />
                    </div>
                  </div>

                  {/* Текст */}
                  <div className="relative z-10 flex-1">
                    <span className="text-lg font-medium text-rose-100 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>

                  {/* Декоративная стрелка */}
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Футер сайдбара */}
          <div className="mt-8 pt-6 border-t border-rose-800/50">
            <div className="text-center">
              <p className="text-rose-400/80 text-sm mb-2">
                Нүрдөөлөт & Самаргүл
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map((i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-rose-500/60"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
