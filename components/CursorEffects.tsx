
import React, { useState, useEffect, useCallback } from 'react';
import { motion as motionLib, AnimatePresence } from 'framer-motion';

const motion = motionLib as any;

interface Splash {
  id: number;
  x: number;
  y: number;
  color: string;
}

const CursorEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
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
      const color = Math.random() > 0.5 ? '#D4AF37' : '#1E7A8A';
      const newSplash = { id: Date.now(), x: e.clientX, y: e.clientY, color };
      
      setSplashes((prev) => [...prev, newSplash]);
      
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
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Paint Splashes */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <div key={splash.id} className="absolute" style={{ left: splash.x, top: splash.y }}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0.8 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 120, 
                  y: (Math.random() - 0.5) * 120,
                  scale: [0, 1.5, 0],
                  opacity: 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-full"
                style={{ backgroundColor: splash.color }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>

      {/* Brush Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          rotate: isClicking ? -20 : 0,
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.5 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gold-accent drop-shadow-lg">
          <path 
            d="M18 11l-5-5m5 5l-8 8H5v-5l8-8m5 5l-5-5m0 0L7 11m6-5l2 2" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <motion.path 
            d="M5 19l2-2" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            animate={{ opacity: isClicking ? 1 : 0.4 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CursorEffects;
