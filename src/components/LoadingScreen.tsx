import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        // Sleek "drop down and fade" exit animation
        exit={{ opacity: 0, y: 50, filter: "blur(12px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Deep Bottle Green Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Glassmorphism Container */}
        <motion.div 
          className="relative z-10 flex flex-col items-center p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md"
          style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title Animation */}
          <motion.h1
            className="font-display text-5xl sm:text-7xl font-black mb-2 text-center tracking-tight uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-zinc-100">Bottle</span>
            <span 
              className="text-transparent bg-clip-text ml-3"
              style={{ 
                backgroundImage: "linear-gradient(to right, #10b981, #34d399)",
                filter: "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.5))"
              }}
            >
              House
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-10 text-[10px] sm:text-xs tracking-[0.5em] text-[#34d399] font-semibold uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Sip • Vibe • Satya Niketan
          </motion.p>

          {/* "Liquid" Progress Bar */}
          <div className="w-56 sm:w-72 h-2 rounded-full bg-black/50 overflow-hidden relative border border-white/10 shadow-inner">
            <motion.div
              className="h-full rounded-full relative"
              style={{
                background: "linear-gradient(90deg, #047857, #10b981, #34d399)",
                boxShadow: "0 0 12px rgba(16, 185, 129, 0.8)"
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Subtle shine effect on the progress bar to make it look like liquid/glass */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
            </motion.div>
          </div>

          {/* Percentage Counter */}
          <motion.div
            className="mt-5 text-zinc-400 text-sm font-mono tracking-widest font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;