
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { HERO_IMAGE, CONTACT_INFO } from '../constants';
import SafeImage from './SafeImage';

const motion = motionLib as any;

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <SafeImage 
          src={HERO_IMAGE} 
          alt="AURUM STUDIO Interior" 
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold-accent text-xs md:text-sm tracking-[0.8em] uppercase font-semibold mb-8 block">
            The Gold Standard
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-10 leading-[0.85]">
            AURUM <br />
            <span className="italic text-gold-accent ml-4 md:ml-12">STUDIO</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-14 max-w-lg mx-auto leading-relaxed">
            Where heritage meets high-fashion. Experience the ultimate in bespoke beauty artistry.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(CONTACT_INFO.bookingLink, '_blank')}
            className="px-14 py-5 bg-primary-blue text-white text-[10px] font-bold tracking-[0.4em] uppercase transition-all shadow-2xl border border-white/10"
          >
            Request Ritual
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};

export default Hero;
