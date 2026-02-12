
import React, { useEffect } from 'react';
import { motion as motionLib } from 'framer-motion';
import { SERVICES_DETAILED } from '../constants';

const motion = motionLib as any;

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-gold-accent text-xs tracking-[0.6em] uppercase mb-4 block">The Menu</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white">Signature Services</h1>
          <p className="mt-6 text-white/50 max-w-xl mx-auto font-light italic">All prices are base rates and may vary depending on hair length, density, and specific client needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          {SERVICES_DETAILED.map((category, catIdx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-serif text-gold-accent italic">{category.category}</h2>
                <div className="flex-1 h-[1px] bg-gold-accent/20"></div>
              </div>

              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <div key={item.name} className="group flex justify-between items-start gap-8">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl text-white group-hover:text-gold-accent transition-colors">{item.name}</h4>
                        <span className="text-gold-accent font-serif tracking-widest text-lg">{item.price}</span>
                      </div>
                      <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for consultation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-white/5 border border-white/5 text-center space-y-6"
        >
          <h3 className="text-2xl font-serif text-white italic">Unsure what you need?</h3>
          <p className="text-white/60 font-light max-w-xl mx-auto">Book a complimentary 15-minute consultation with one of our masters to discuss your vision and goals.</p>
          <button className="px-10 py-4 bg-primary-blue text-white text-xs font-bold tracking-widest uppercase hover:bg-gold-accent hover:text-black transition-all">Schedule Consultation</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
