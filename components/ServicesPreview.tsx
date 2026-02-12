
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { SERVICES } from '../constants';

const motion = motionLib as any;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const ServicesPreview: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.5em] uppercase font-bold">Curated Menu</span>
            <h3 className="text-5xl md:text-6xl font-serif text-white">Bespoke Rituals</h3>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 text-gold-accent text-xs tracking-[0.3em] uppercase border-b border-gold-accent/20 pb-2"
          >
            Explore the Menu
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-10 bg-white/[0.02] border border-white/5 hover:border-gold-accent/30 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:bg-gold-accent/10 transition-colors"></div>
              <div className="text-5xl mb-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">{service.icon}</div>
              <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-accent transition-colors">{service.title}</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <a href="/services" className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20 group-hover:text-gold-accent transition-colors">
                Discover
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
