
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

// Fix: Casting motion to any to resolve property 'initial', 'whileInView', etc. not existing on motion components in this environment.
const motion = motionLib as any;

const ContactPreview: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-white/5 bg-white/[0.01]"
          >
            <h4 className="text-gold-accent text-xs tracking-widest uppercase mb-6 font-bold">Location</h4>
            <p className="text-white text-lg font-serif">425/7 Atigala Gdn Rd,</p>
            <p className="text-white/50 text-sm mt-2">Sri Jayawardenepura Kotte 10001</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 border border-white/5 bg-white/[0.01]"
          >
            <h4 className="text-gold-accent text-xs tracking-widest uppercase mb-6 font-bold">Contact</h4>
            <p className="text-white text-lg font-serif">{CONTACT_INFO.phone}</p>
            <p className="text-white/50 text-sm mt-2 underline cursor-pointer hover:text-gold-accent">{CONTACT_INFO.email}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 border border-white/5 bg-white/[0.01]"
          >
            <h4 className="text-gold-accent text-xs tracking-widest uppercase mb-6 font-bold">Hours</h4>
            <div className="flex justify-between text-sm text-white/70 font-light mb-1">
              <span>Mon - Fri</span>
              <span className="text-white font-medium italic">9am - 8pm</span>
            </div>
            <div className="flex justify-between text-sm text-white/70 font-light">
              <span>Sat</span>
              <span className="text-white font-medium italic">10am - 6pm</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
