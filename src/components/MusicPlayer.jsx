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

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio play failed:", error);
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
      <audio ref={audioRef} loop preload="auto" controls={false}>
        <source src={music} type="audio/webm" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>

      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Music className="w-6 h-6 text-rose-200" />
        </div>

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

        <button
          onClick={toggleMute}
          className="p-3 bg-rose-800 hover:bg-rose-700 rounded-xl transition-all duration-300 group min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-95"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-rose-300" />
          ) : (
            <Volume2 className="w-5 h-5 text-rose-300" />
          )}
        </button>
      </div>

      {!isPlaying && (
        <p className="text-rose-300/70 text-xs text-center animate-pulse">
          📱 Музыканы кошуу үчүн экранды басыңыз
        </p>
      )}
    </div>
  );
}
