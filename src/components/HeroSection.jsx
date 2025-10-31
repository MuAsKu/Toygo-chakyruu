import React from "react";
import { Heart, Sparkles } from "lucide-react";

export default function HeroSection({ data }) {
  return (
    <section
      id="home"
      className="pt-16 pb-16 px-6 text-center animated-bg relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div
        className="absolute top-10 left-10 w-6 h-6 rose-petal floating"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-20 right-16 w-4 h-4 rose-petal floating"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-5 h-5 rose-petal floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-3 h-3 rose-petal floating"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-screen-sm mx-auto relative z-10">
        {/* Анимированное появление */}
        <div className="fade-in-up">
          <Sparkles className="w-8 h-8 icon-gold mx-auto mb-4 pulse-glow" />
        </div>

        <h1 className="calligraphy-large text-5xl sm:text-6xl leading-tight fade-in-up">
          <div className="text-6xl sm:text-7xl fade-in-up">{data.title}</div>
          <div className="text-4xl mt-2 fade-in-up delay-100 flex items-center justify-center gap-4">
            <Heart className="w-6 h-6 icon-rose pulse-glow" />
            {data.subtitle}
            <Heart className="w-6 h-6 icon-rose pulse-glow" />
          </div>
          <div className="text-6xl sm:text-7xl mt-2 fade-in-up delay-200">
            {data.name2}
          </div>
        </h1>

        <div className="mt-8 text-xl italic text-rose-700 fade-in-up delay-300">
          {data.date}
        </div>

        {/* Декоративная линия с сердечками */}
        <div className="mt-8 flex justify-center items-center fade-in-up delay-400">
          <div className="decorative-line w-48"></div>
        </div>

        <p className="mt-8 italic text-lg px-4 text-gray-700 leading-relaxed fade-in-up delay-500 wedding-card rounded-2xl p-6 mx-auto max-w-md">
          Аттанышып түбөлүккө бир болууга, <br />
          Алоолонуп сүйүүбүз нур болууга <br />
          Акбатаны бериниз деп чакырабыз <br />
          <span className="text-rose-600 font-semibold">
            Нүрдөөлөт менен Самаргүлдүн бул тоюна
          </span>
        </p>

        {/* Анимированные сердечки внизу */}
        <div className="mt-8 flex justify-center gap-3 fade-in-up delay-600">
          {[1, 2, 3].map((i) => (
            <Heart
              key={i}
              className="w-5 h-5 icon-rose floating"
              style={{ animationDelay: `${i * 0.5}s` }}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
