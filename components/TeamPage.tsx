
import React, { useEffect } from 'react';
import { motion as motionLib } from 'framer-motion';
import { NILUSHA_IMAGE, ROHAN_IMAGE, GALLERY_IMAGES } from '../constants';

const motion = motionLib as any;

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Nilusha',
      role: 'Master Hair Stylist & Creative Director',
      img: NILUSHA_IMAGE,
      bio: 'With over 12 years of experience in high-fashion editorial and boutique salon environments, Nilusha specializes in precision dry-cutting and advanced color correction. Her philosophy centers on "wearable luxury"—hair that looks spectacular in the salon and effortless at home.',
      specialties: ['Precision Cutting', 'Balayage Mastery', 'Bridal Artistry']
    },
    {
      name: 'Rohan',
      role: 'Lead Medical Aesthetician',
      img: ROHAN_IMAGE,
      bio: 'Rohan brings a scientific approach to beauty. Certified in advanced dermal therapies, he focuses on restorative skin treatments that deliver visible results. Known for his "Glow Protocol," Rohan combines traditional massage techniques with modern technology to rejuvenate any skin type.',
      specialties: ['Dermal Therapy', 'Lymphatic Drainage', 'Chemical Peels']
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-gold-accent text-xs tracking-[0.6em] uppercase mb-4 block">Meet The Masters</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white">Our Experts</h1>
        </motion.div>

        <div className="space-y-40">
          {teamMembers.map((member, idx) => (
            <div key={member.name} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden border border-gold-accent/10 relative group"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gold-accent/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-5xl font-serif text-white">{member.name}</h2>
                  <p className="text-gold-accent tracking-[0.4em] uppercase text-xs font-bold">{member.role}</p>
                </div>
                <p className="text-white/70 text-lg leading-relaxed font-light">{member.bio}</p>
                <div className="pt-6 space-y-6">
                  <h4 className="text-white text-sm tracking-widest uppercase border-b border-white/5 pb-2 w-max">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-4">
                    {member.specialties.map(spec => (
                      <span key={spec} className="px-5 py-3 bg-white/[0.03] text-gold-accent text-[10px] tracking-widest uppercase border border-white/5">{spec}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Improved Carousel using the actual Gallery Images */}
        <div className="mt-48 space-y-12 overflow-hidden">
          <div className="text-center">
            <h3 className="text-3xl font-serif text-white italic">Studio Reflections</h3>
          </div>
          
          <div className="relative">
            <motion.div 
              className="flex gap-8 py-10"
              animate={{ x: [0, -1600] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                <div key={i} className="min-w-[400px] h-[500px] overflow-hidden border border-white/5 shadow-2xl">
                  <img src={img.url} alt="Studio Details" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
