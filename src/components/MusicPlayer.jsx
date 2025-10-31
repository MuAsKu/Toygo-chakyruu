import React, { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";
import music from "../../public/music.webm";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(false);
  const audioRef = useRef(null);

  // Определяем мобильное устройство
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Загрузка состояния из localStorage при монтировании
  useEffect(() => {
    const savedState = localStorage.getItem("musicState");
    if (savedState === "playing" && !isMobile) {
      setIsPlaying(true);
    }
  }, [isMobile]);

  // Сохранение состояния в localStorage
  useEffect(() => {
    localStorage.setItem("musicState", isPlaying ? "playing" : "paused");
  }, [isPlaying]);

  // Автоматическое воспроизведение для десктопов
  useEffect(() => {
    if (!isMobile && isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play failed:", error);
      });
    }
  }, [isPlaying, isMobile]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // На мобильных показываем подсказку
        if (isMobile) {
          setShowMobileHint(true);
          setTimeout(() => setShowMobileHint(false), 3000);
        }

        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio play failed:", error);
      if (isMobile) {
        setShowMobileHint(true);
        setTimeout(() => setShowMobileHint(false), 3000);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-rose-900/50 rounded-2xl">
      {/* Аудио элемент */}
      <audio ref={audioRef} loop preload="metadata" controls={false}>
        <source src={music} type="audio/webm" />
        <source src="/music/wedding-music.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>

      {/* Подсказка для мобильных */}
      {showMobileHint && (
        <div className="bg-amber-500/90 text-white text-xs p-2 rounded-lg text-center animate-pulse">
          🎵 Музыканы баштоо үчүн "Жаздыруу" баскычын басыңыз
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Иконка музыки */}
        <div className="flex-shrink-0">
          <Music className="w-6 h-6 text-rose-200" />
        </div>

        {/* Кнопка воспроизведения/паузы */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-3 px-4 py-3 bg-rose-700 hover:bg-rose-600 rounded-xl transition-all duration-300 group flex-1 min-h-[48px] active:scale-95"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-rose-100" />
          ) : (
            <Play className="w-5 h-5 text-rose-100" />
          )}
          <span className="text-rose-100 text-sm font-medium">
            {isPlaying ? "Токтотуу" : "Жаздыруу"}
          </span>
        </button>

        {/* Кнопка mute/unmute */}
        <button
          onClick={toggleMute}
          className="p-3 bg-rose-800 hover:bg-rose-700 rounded-xl transition-all duration-300 group min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-95"
          aria-label={isMuted ? "Үндү кошуу" : "Үндү өчүрүү"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-rose-300" />
          ) : (
            <Volume2 className="w-5 h-5 text-rose-300" />
          )}
        </button>
      </div>

      {/* Постоянная подсказка для мобильных */}
      {isMobile && !showMobileHint && (
        <p className="text-rose-300/70 text-xs text-center">
          Музыканы угуу үчүн "Жаздыруу" баскычын басыңыз
        </p>
      )}
    </div>
  );
}
