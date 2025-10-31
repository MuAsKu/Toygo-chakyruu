import React, { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";
import music from "../../public/music.webm";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const tryAutoPlay = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.1;
          await audioRef.current.play();
          setIsPlaying(true);

          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.volume = 1.0;
            }
          }, 1000);
        }
      } catch (error) {
        console.log("Auto-play blocked on mobile");
      }
    };

    tryAutoPlay();
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Play after interaction failed"));
      }
    };

    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-gradient-to-br from-rose-900/60 to-pink-900/40 rounded-2xl backdrop-blur-sm border border-rose-800/30">
      <audio ref={audioRef} loop preload="auto" controls={false}>
        <source src={music} type="audio/webm" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>

      <div className="flex items-center justify-between">
        {/* Левая часть - иконка и статус */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Music
              className={`w-7 h-7 ${
                isPlaying ? "text-green-400" : "text-rose-200"
              }`}
            />
            {isPlaying && (
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-rose-100 text-sm font-medium">
              {isPlaying ? "Музыка жаздырылууда" : "Музыка токтоп турат"}
            </span>
            <span className="text-rose-300/70 text-xs">
              {isMuted ? "Үн өчүрүлгөн" : "Үн кошулган"}
            </span>
          </div>
        </div>

        {/* Правая часть - кнопка mute */}
        <button
          onClick={toggleMute}
          className="p-3 bg-gradient-to-br from-rose-800 to-rose-700 hover:from-rose-700 hover:to-rose-600 rounded-xl transition-all duration-300 group min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-95 shadow-lg hover:shadow-xl"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-rose-100 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-5 h-5 text-rose-100 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {!isPlaying && (
        <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-2">
          <p className="text-amber-200 text-xs text-center">
            📱 Музыканы кошуу үчүн экранды басыңыз
          </p>
        </div>
      )}
    </div>
  );
}
