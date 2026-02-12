
import React, { useEffect } from 'react';
import { motion as motionLib } from 'framer-motion';
import { ABOUT_IMAGES } from '../constants';

const motion = motionLib as any;

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-gold-accent text-xs tracking-[0.6em] uppercase mb-4 block">The Heritage</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">The Essence of <span className="italic">Aurum</span></h1>
          <div className="w-24 h-[1px] bg-gold-accent mx-auto"></div>
        </motion.div>

        <article className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-gold-accent italic">Our Beginnings</h2>
            <p>
              The name <strong>Aurum</strong> comes from the Latin word for gold. Just as gold represents the highest standard of value and purity, our studio was founded on the principle that beauty services should be nothing less than exceptional. 
            </p>
            <p>
              Started in 2018, Aurum Studio began as a small boutique with a singular vision: to create a sanctuary where artistry meets luxury. We believe that a trip to the salon shouldn't just be an appointment—it should be an experience that rejuvenates your spirit and elevates your confidence.
            </p>
          </section>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 items-center"
          >
            <div className="relative overflow-hidden group">
              <img 
                src={ABOUT_IMAGES[0]} 
                alt="Salon Interior" 
                className="w-full h-[450px] object-cover border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 border border-gold-accent/10 pointer-events-none translate-x-4 translate-y-4 -z-10"></div>
            </div>
            <div className="flex flex-col justify-center space-y-4 px-4">
              <p className="italic text-gold-accent font-serif text-2xl">"Luxury must be comfortable, otherwise it is not luxury."</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">— Our Philosophy</p>
            </div>
          </motion.div>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-gold-accent italic">Our Commitment to Quality</h2>
            <p>
              At Aurum Studio, we prioritize your hair and skin health above all else. We exclusively use premium, sustainable products that provide lasting results without compromising the integrity of your natural beauty. Our team undergoes continuous training to stay at the absolute forefront of global trends and techniques.
            </p>
            <p>
              Every service begins with a detailed consultation. We listen to your desires, analyze your unique features, and craft a bespoke plan that complements your lifestyle. Whether you are seeking a subtle refresh or a dramatic transformation, our masters are here to guide you with precision and care.
            </p>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-20 relative"
          >
            <img 
              src={ABOUT_IMAGES[1]} 
              alt="Beauty Detail" 
              className="w-full h-[550px] object-cover border border-white/5" 
            />
            <div className="absolute bottom-10 left-10 p-8 bg-black/40 backdrop-blur-md border-l-2 border-gold-accent max-w-sm hidden md:block">
              <p className="text-white text-sm font-light italic">Every tool we use and every product we select meets the gold standard of the beauty industry.</p>
            </div>
          </motion.div>

          <section className="space-y-6 pb-20">
            <h2 className="text-3xl font-serif text-gold-accent italic">A Sanctuary of Elegance</h2>
            <p>
              Step into our studio and leave the noise of the outside world behind. Our space is designed with minimalist elegance, warm lighting, and private suites to ensure your comfort. We invite you to enjoy a selection of curated beverages and relax in an environment tailored to your well-being.
            </p>
            <p>
              We are honored to be part of your beauty journey. Thank you for choosing Aurum Studio, where every client is treated with the gold standard of care.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
