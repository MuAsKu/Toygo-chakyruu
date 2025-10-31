import React from "react";
import { Heart, Sparkles } from "lucide-react";

export default function SectionWithImage({ imgSrc, height = "50vh" }) {
  return (
    <div className="section-image relative group">
      {/* Декоративные элементы */}
      <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="w-6 h-6 icon-gold floating" />
      </div>
      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
        <Heart className="w-5 h-5 icon-rose floating" fill="currentColor" />
      </div>

      {/* Основное изображение */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl wedding-card">
        <img
          src={imgSrc}
          alt="section"
          style={{
            height: height,
            width: "100%",
            objectFit: "cover",
          }}
          className="transition-all duration-700 group-hover:scale-105"
        />

        {/* Градиентная маска для плавного слияния */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none"></div>

        {/* Блестящий эффект при наведении */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      {/* Декоративные уголки */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-rose-400 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold-400 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold-400 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-rose-400 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>

      {/* Анимированная рамка */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-rose-200/50 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}
