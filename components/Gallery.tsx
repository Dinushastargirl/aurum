
import React, { useState } from 'react';
import { motion as motionLib } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from './Lightbox';

const motion = motionLib as any;

const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-accent text-xs tracking-[0.6em] uppercase block mb-4"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white tracking-tight"
          >
            The Art of <span className="italic text-gold-accent">Aurum</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-[1px] w-24 bg-gold-accent/50 mx-auto mt-8"
          ></motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative group cursor-pointer overflow-hidden bg-dark-bg break-inside-avoid"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="space-y-2"
                  >
                    <span className="text-gold-accent text-[10px] tracking-[0.3em] uppercase">Featured Work</span>
                    <h3 className="text-white font-serif text-xl">{image.title}</h3>
                  </motion.div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button 
            className="group relative inline-flex items-center gap-4 text-white/50 hover:text-gold-accent transition-colors tracking-widest uppercase text-xs"
          >
            <span className="w-12 h-[1px] bg-white/10 group-hover:bg-gold-accent transition-colors"></span>
            Follow us @aurum_studio
            <span className="w-12 h-[1px] bg-white/10 group-hover:bg-gold-accent transition-colors"></span>
          </button>
        </motion.div>
      </div>

      <Lightbox 
        isOpen={selectedIdx !== null}
        onClose={closeLightbox}
        images={GALLERY_IMAGES}
        currentIndex={selectedIdx || 0}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default Gallery;
