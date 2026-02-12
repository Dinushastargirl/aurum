
import React from 'react';
import { motion as motionLib } from 'framer-motion';

const motion = motionLib as any;

interface AboutPreviewProps {
  onNavigate?: (href: string) => void;
}

const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative z-10"
        >
          <h2 className="text-gold-accent font-serif text-4xl md:text-5xl">Our Story</h2>
          <div className="space-y-6">
            <p className="text-white/70 text-lg leading-relaxed font-light">
              AURUM STUDIO is a place where we make you look and feel your absolute best. 
              We use the finest products and the latest techniques to ensure you walk out glowing.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Located in the heart of luxury, we provide a sanctuary for those who seek 
              quality, comfort, and exceptional results every time they visit.
            </p>
          </div>
          <button 
            onClick={() => onNavigate?.('/about')}
            className="text-gold-accent tracking-widest uppercase text-xs font-bold border-b border-gold-accent/30 pb-2 hover:border-gold-accent transition-all group inline-flex items-center gap-2"
          >
            Read More About Us
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div 
            onClick={() => onNavigate?.('/about')}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gold-accent/20 rounded-full blur-3xl group-hover:bg-gold-accent/40 transition-all"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black/40 border border-gold-accent/20 rounded-full flex items-center justify-center p-12 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
               <div className="flex flex-col items-center">
                 <span className="text-7xl font-serif font-bold text-gold-accent">A</span>
                 <span className="text-[10px] tracking-[0.5em] text-white/50 uppercase">Aurum Studio</span>
               </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary-blue text-[10px] text-white px-4 py-2 rounded-full tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-4">
              Click to Visit
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
