
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

// Fix: Casting motion to any to resolve property 'initial', 'whileInView', etc. not existing on motion components in this environment.
const motion = motionLib as any;

const AppointmentCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-primary-blue">
      {/* Decorative texture/pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Ready for a Transformation?</h2>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Book your visit today and step into a world of elegance. Our experts are waiting to bring your vision to life.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => window.open(CONTACT_INFO.bookingLink, '_blank')}
              className="px-16 py-6 bg-white text-primary-blue text-sm font-bold tracking-[0.4em] uppercase shadow-2xl hover:bg-gold-accent hover:text-black transition-all"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
