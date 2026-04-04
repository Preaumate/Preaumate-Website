import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogo = ({ isCompact = false, onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(isCompact ? 3 : 0);

  useEffect(() => {
    if (isCompact) return;
    
    const stage1Timer = setTimeout(() => setAnimationStage(1), 1000);
    const stage2Timer = setTimeout(() => setAnimationStage(2), 2000);
    const stage3Timer = setTimeout(() => {
      setAnimationStage(3);
      onAnimationComplete?.();
    }, 3000);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
    };
  }, [isCompact, onAnimationComplete]);

  // Stage 0-1: Text appearance
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    morphing: { opacity: 0, scale: 1.2, rotateZ: 180 }
  };

  // Stage 2-3: Logo mark (geometric hexagon/circuit)
  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: isCompact ? 0.6 : 1 },
    compact: { opacity: 1, scale: 0.6, y: isCompact ? 0 : -200 }
  };

  return (
    <div className={`flex items-center justify-center ${isCompact ? 'h-12' : 'h-auto'}`}>
      <AnimatePresence mode="wait">
        {animationStage < 2 && !isCompact && (
          <motion.div
            key="text"
            variants={textVariants}
            initial="hidden"
            animate={animationStage === 0 ? "visible" : "morphing"}
            exit="morphing"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Preaumate
          </motion.div>
        )}
        
        {animationStage >= 1 && (
          <motion.div
            key="logo"
            variants={logoVariants}
            initial="hidden"
            animate={animationStage === 3 || isCompact ? "compact" : "visible"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative"
          >
            {/* Hexagon/Circuit Logo Mark */}
            <svg 
              width={isCompact ? "48" : "120"} 
              height={isCompact ? "48" : "120"} 
              viewBox="0 0 120 120" 
              className="drop-shadow-lg"
            >
              {/* Outer hexagon */}
              <path 
                d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z" 
                fill="none" 
                stroke="url(#gradient1)" 
                strokeWidth="3"
                className="animate-pulse"
              />
              {/* Inner circuit pattern */}
              <circle cx="60" cy="60" r="20" fill="url(#gradient2)" opacity="0.6" />
              <path 
                d="M40 60 L50 60 M70 60 L80 60 M60 40 L60 50 M60 70 L60 80" 
                stroke="url(#gradient1)" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
              {/* Corner nodes */}
              <circle cx="60" cy="30" r="4" fill="#10b981" />
              <circle cx="82" cy="45" r="4" fill="#06b6d4" />
              <circle cx="82" cy="75" r="4" fill="#10b981" />
              <circle cx="60" cy="90" r="4" fill="#06b6d4" />
              <circle cx="38" cy="75" r="4" fill="#10b981" />
              <circle cx="38" cy="45" r="4" fill="#06b6d4" />
              
              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <radialGradient id="gradient2">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            
            {/* Text label for compact version */}
            {(animationStage === 3 || isCompact) && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent absolute left-full top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                Preaumate
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;