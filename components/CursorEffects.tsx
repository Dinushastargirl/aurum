
import React, { useState, useEffect, useCallback } from 'react';
import { motion as motionLib, AnimatePresence } from 'framer-motion';

const motion = motionLib as any;

interface Splash {
  id: number;
  x: number;
  y: number;
}

const CursorEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newSplash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSplashes((prev) => [...prev, newSplash]);
      
      // Cleanup splash after animation
      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
      }, 1000);
    };

    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Custom Brush Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 flex items-center justify-center text-gold-accent"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isClicking ? 0.8 : 1,
          rotate: isClicking ? -15 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path d="M18 11l-5-5m5 5l-8 8H5v-5l8-8m5 5l-5-5m0 0L7 11m6-5l2 2" />
          <path d="M13 6l2 2" />
        </svg>
      </motion.div>

      {/* Paint Splashes */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
            className="absolute"
            style={{ left: splash.x, top: splash.y }}
          >
            {/* Artistic Radiating Drops */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 100, 
                  y: (Math.random() - 0.5) * 100,
                  scale: 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-gold-accent' : 'bg-primary-blue'}`}
              />
            ))}
            {/* Core Splash */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              className="w-4 h-4 bg-gold-accent/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorEffects;
