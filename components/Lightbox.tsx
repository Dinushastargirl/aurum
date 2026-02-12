
import React, { useEffect } from 'react';
import { motion as motionLib, AnimatePresence } from 'framer-motion';

const motion = motionLib as any;

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onNext, onPrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 z-[110] text-white/50 hover:text-gold-accent transition-colors"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-8 z-[110] p-4 text-white/30 hover:text-gold-accent transition-colors hidden md:block"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-8 z-[110] p-4 text-white/30 hover:text-gold-accent transition-colors hidden md:block"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full px-6 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full relative aspect-[16/9] md:aspect-video flex items-center justify-center"
            >
              <img 
                src={images[currentIndex].url} 
                alt={images[currentIndex].title}
                className="max-h-[80vh] w-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
              />
            </motion.div>
            
            <div className="mt-8 text-center space-y-2">
              <h4 className="text-gold-accent font-serif text-2xl tracking-wide">{images[currentIndex].title}</h4>
              <p className="text-white/40 text-xs tracking-[0.4em] uppercase">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
