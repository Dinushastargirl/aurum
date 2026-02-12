
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { HERO_IMAGE, CONTACT_INFO } from '../constants';

const motion = motionLib as any;

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay and Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={HERO_IMAGE} 
          alt="AURUM STUDIO Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-accent text-xs md:text-sm tracking-[0.6em] uppercase font-medium mb-6 block"
        >
          The Gold Standard of Beauty
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif text-white tracking-tight mb-8 leading-none"
        >
          AURUM <span className="italic text-gold-accent">STUDIO</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-12 max-w-xl mx-auto"
        >
          Experience luxury redefined through world-class hair artistry and premium wellness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button 
            onClick={() => window.open(CONTACT_INFO.bookingLink, '_blank')}
            className="px-12 py-5 bg-primary-blue text-white text-sm font-bold tracking-[0.3em] uppercase transition-all hover:bg-opacity-90 hover:scale-105 active:scale-95 shadow-2xl shadow-primary-blue/30 border border-transparent hover:border-gold-accent"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};

export default Hero;
