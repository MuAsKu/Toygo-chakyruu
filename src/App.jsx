import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import SectionWithImage from "./components/SectionWithImage";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import { Calendar, Clock, MapPin, Heart, Users, Sparkles } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
  }, [sidebarOpen]);

  const sections = [
    {
      title: "Нүрдөөлөт",
      subtitle: "&",
      name2: "Самаргүл",
      date: "22.11.2025ж",
      text: "Ырчыктан мээрман жана жылуу тилектер менен толгон тойго чакырабыз.",
    },
    {
      title: "Той",
      text: "Нүрдөөлөт & Самаргүл <br> Сиздерди балдарыбыздын үйлөнүү тоюна чакырабыз!",
    },
    {
      title: "СИЗДЕРДИ БАЛДАРЫБЫЗДЫН ҮЙЛӨНҮҮ ТОЮНА ЧАКЫРАБЫЗ!",
      text: "",
    },
  ];

  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen animated-bg">
      <Header onBurger={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="max-w-screen-sm mx-auto">
        {/* Первое фото */}
        <div className="fade-in-up">
          <SectionWithImage imgSrc={photos[0]} height="70vh" />
        </div>

        {/* Hero секция */}
        <div id="home" className="fade-in-up delay-100">
          <HeroSection data={sections[0]} />
        </div>

        {/* Секция приглашения */}
        <section
          id="invite"
          className="py-20 px-6 bg-gradient-to-br from-rose-50/80 to-pink-50/80 pattern-dots relative overflow-hidden"
        >
          <div className="absolute top-5 right-5">
            <Sparkles className="w-8 h-8 icon-rose floating" />
          </div>

          <div className="text-center max-w-2xl mx-auto fade-in-up">
            <div className="flex justify-center mb-6">
              <Heart
                className="w-10 h-10 icon-rose pulse-glow"
                fill="currentColor"
              />
            </div>

            <h2 className="text-4xl font-light italic mb-8 text-rose-800">
              {sections[1].title}
            </h2>

            <div className="wedding-card rounded-3xl p-8 mb-12 fade-in-up delay-200">
              <div
                className="text-xl leading-relaxed text-gray-700 mb-8"
                dangerouslySetInnerHTML={{ __html: sections[1].text }}
              />

              <div className="space-y-6 text-lg">
                <div className="flex items-center justify-center gap-4 p-4 bg-white/50 rounded-2xl wedding-card">
                  <Calendar className="w-8 h-8 icon-rose" />
                  <div className="text-left">
                    <strong className="text-rose-700">Дата:</strong>
                    <p className="text-gray-800">2025-жылдын 22-ноябрь</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-4 bg-white/50 rounded-2xl wedding-card">
                  <Clock className="w-8 h-8 icon-gold" />
                  <div className="text-left">
                    <strong className="text-rose-700">Убакыт:</strong>
                    <p className="text-gray-800">16:00</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-4 bg-white/50 rounded-2xl wedding-card">
                  <MapPin className="w-8 h-8 icon-rose" />
                  <div className="text-left">
                    <strong className="text-rose-700">Дарек:</strong>
                    <p className="text-gray-800">"Айкокул" рестораны, Гулчо</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Второе фото */}
        <div className="fade-in-up delay-300">
          <SectionWithImage imgSrc={photos[1]} height="60vh" />
        </div>

        {/* Секция программы */}
        <section
          id="program"
          className="py-20 px-6 bg-gradient-to-br from-white to-rose-50/30 relative overflow-hidden"
        >
          <div className="text-center mb-16 fade-in-up">
            <div className="flex justify-center mb-4">
              <Users className="w-10 h-10 icon-gold pulse-glow" />
            </div>
            <h2 className="text-4xl font-light italic mb-4 text-rose-800">
              Программа
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Тойдун жүрүшү
            </p>
          </div>

          <div className="max-w-2xl mx-auto fade-in-up delay-200">
            <div className="wedding-card rounded-3xl p-8 shadow-2xl">
              <div className="space-y-10">
                {/* Первое событие */}
                <div className="flex items-start gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-rose-800 font-bold text-xl">
                        15:30
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-5 h-5 icon-gold" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-medium text-gray-800 mb-3 group-hover:text-rose-700 transition-colors">
                      Коноктордун чогулушу
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Коноктор тоюнун башталышына чейин чогулушат
                    </p>
                  </div>
                </div>

                {/* Разделительная линия */}
                <div className="flex justify-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-rose-200 to-gold-200 rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Heart
                        className="w-4 h-4 icon-rose"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                {/* Второе событие */}
                <div className="flex items-start gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-white font-bold text-xl">
                        16:00
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-medium text-gray-800 mb-3 group-hover:text-rose-700 transition-colors">
                      Тойдун башталышы
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Үйлөнүү тою расмий түрдө башталат
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Декоративный элемент */}
          <div className="text-center mt-12 fade-in-up delay-400">
            <div className="inline-flex items-center gap-6 text-rose-700 text-lg">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
              <span className="italic font-light">
                Келгиле, бирге майрамдайлы!
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
          </div>
        </section>

        {/* Третье фото */}
        <div className="fade-in-up delay-400">
          <SectionWithImage imgSrc={photos[2]} height="60vh" />
        </div>

        {/* Секция приглашения */}
        <section className="py-24 px-6 bg-gradient-to-br from-white via-rose-50/50 to-gold-50/30 relative overflow-hidden">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 icon-gold pulse-glow" />
            </div>

            <h2 className="text-5xl font-light italic mb-8 text-rose-800 leading-tight">
              {sections[2].title}
            </h2>

            <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed wedding-card rounded-3xl p-8">
              Сиздин катышууңуз биз үчүн чоң{" "}
              <span className="text-rose-600 font-semibold">баалуулук!</span>
            </p>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed wedding-card rounded-3xl p-8">
              Урматтоо менен Муканбет и Уркуя
            </p>

            <div className="mt-12 flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 icon-rose floating"
                  style={{ animationDelay: `${i * 0.3}s` }}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Четвертое фото */}
        <div className="fade-in-up delay-500">
          <SectionWithImage imgSrc={photos[3]} height="60vh" />
        </div>

        {/* Секция календаря */}
        <section
          id="time"
          className="py-20 px-6 bg-gradient-to-br from-rose-50/80 to-white relative overflow-hidden"
        >
          <div className="text-center mb-16 fade-in-up">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 icon-rose pulse-glow" />
            </div>
            <h2 className="text-4xl font-light italic mb-4 text-rose-800">
              Биз күтөбүз!
            </h2>
            <p className="text-xl text-gray-600 wedding-card rounded-full px-6 py-3 inline-block">
              22-ноябрь, 2025-жыл
            </p>
          </div>

          <div className="max-w-md mx-auto fade-in-up delay-200">
            <div className="wedding-card rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif text-rose-800 mb-2">
                  Ноябрь
                </h3>
                <p className="text-gray-500 text-lg">2025</p>
              </div>

              <div className="grid grid-cols-7 gap-3 text-center">
                {/* Заголовки дней недели */}
                {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => (
                  <div
                    key={day}
                    className="text-sm font-semibold text-rose-600 py-3"
                  >
                    {day}
                  </div>
                ))}

                {/* Дни месяца */}
                {[3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`calendar-day py-3 rounded-xl ${
                      day === 22 ? "wedding-day" : "hover:bg-rose-50"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        day === 22 ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                ))}

                {[10, 11, 12, 13, 14, 15, 16].map((day) => (
                  <div
                    key={day}
                    className={`calendar-day py-3 rounded-xl ${
                      day === 22 ? "wedding-day" : "hover:bg-rose-50"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        day === 22 ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                ))}

                {[17, 18, 19, 20, 21, 22, 23].map((day) => (
                  <div
                    key={day}
                    className={`calendar-day py-3 rounded-xl ${
                      day === 22 ? "wedding-day" : "hover:bg-rose-50"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        day === 22 ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                ))}

                {[24, 25, 26, 27, 28, 29, 30].map((day) => (
                  <div
                    key={day}
                    className={`calendar-day py-3 rounded-xl ${
                      day === 22 ? "wedding-day" : "hover:bg-rose-50"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        day === 22 ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-3 rounded-full shadow-lg">
                  <div className="w-4 h-4 bg-gradient-to-r from-rose-600 to-rose-700 rounded-full pulse-glow"></div>
                  <span className="text-rose-800 font-semibold text-sm">
                    22 - Биздин майрам күнү
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-24"></div>
      </main>
    </div>
  );
}
