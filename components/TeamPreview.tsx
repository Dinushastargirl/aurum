
import React from 'react';
import { motion as motionLib } from 'framer-motion';
import { NILUSHA_IMAGE, ROHAN_IMAGE } from '../constants';

const motion = motionLib as any;

const TeamPreview: React.FC = () => {
  const team = [
    { name: 'Nilusha', role: 'Hair Stylist', img: NILUSHA_IMAGE },
    { name: 'Rohan', role: 'Beautician', img: ROHAN_IMAGE },
  ];

  return (
    <section id="team" className="py-24 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-accent text-xs tracking-[0.6em] uppercase mb-4"
        >
          The Masters
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-white"
        >
          Our Creative Team
        </motion.h3>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden bg-dark-bg border border-white/5"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-gold-accent text-[10px] tracking-widest uppercase block mb-2">{member.role}</span>
              <h4 className="text-3xl font-serif text-white mb-6">{member.name}</h4>
              <button className="px-8 py-3 border border-white/20 text-[10px] text-white tracking-widest uppercase hover:bg-gold-accent hover:text-black hover:border-gold-accent transition-all">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="/team" className="text-white/40 hover:text-gold-accent transition-colors tracking-widest uppercase text-[10px] border-b border-white/10 pb-1">
          Explore All Artisans
        </a>
      </div>
    </section>
  );
};

export default TeamPreview;
