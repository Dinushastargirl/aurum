import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { SERVICES } from '../constants';

// Fix: Casting motion to any to resolve property 'initial', 'whileInView', etc. not existing on motion components in this environment.
const motion = motionLib as any;

const ServicesPreview: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-gold-accent text-sm tracking-[0.6em] uppercase">Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Our Signature Services</h3>
          </div>
          <button className="px-8 py-3 border border-gold-accent text-gold-accent text-xs tracking-widest uppercase hover:bg-gold-accent hover:text-black transition-all">
            Full Service Menu
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 hover:border-gold-accent/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{service.icon}</div>
              <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold-accent transition-colors">{service.title}</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="/services" className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 group-hover:text-gold-accent transition-colors">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;