
import React, { useState } from 'react';
import { motion as motionLib, AnimatePresence } from 'framer-motion';
import { BookingFormData, BookingResponse } from '../types';
import { CONTACT_INFO } from '../constants';

const motion = motionLib as any;

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate latency
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.6em] uppercase block">Reservations</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white">Book Your <span className="italic">Radiance</span></h1>
          </div>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
            Complete the form below to request an appointment, or book instantly using our preferred partner Fresha.
          </p>
          
          <div className="pt-4">
            <a 
              href={CONTACT_INFO.bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold-accent text-black text-xs font-bold tracking-[0.3em] uppercase transition-all hover:bg-gold-light hover:scale-105"
            >
              Book Instantly on Fresha
            </a>
          </div>

          <div className="pt-8 space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold-accent/20 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Direct Line</p>
                <p className="text-white font-serif text-xl">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold-accent/20 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Our Studio</p>
                <p className="text-white font-serif text-lg">425/7 Atigala Gdn Rd, Sri Jayawardenepura Kotte</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-white">Request Received</h3>
                <p className="text-white/60 font-light">Thank you for choosing Aurum Studio. Our concierge will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white/5 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gold-accent text-[10px] tracking-[0.3em] uppercase font-bold">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-accent transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gold-accent text-[10px] tracking-[0.3em] uppercase font-bold">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-accent transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gold-accent text-[10px] tracking-[0.3em] uppercase font-bold">Phone Number</label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 71 222 9182"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-accent transition-colors font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gold-accent text-[10px] tracking-[0.3em] uppercase font-bold">Desired Service & Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the services you're interested in..."
                    className="w-full bg-transparent border border-white/10 p-4 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-accent transition-colors font-light resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs tracking-wider">{errorMessage}</p>
                )}

                <div className="pt-4">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full py-5 bg-primary-blue text-white text-xs font-bold tracking-[0.4em] uppercase shadow-2xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      'Request Appointment'
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-white/20 text-center tracking-widest leading-relaxed">
                  Alternatively, use Fresha for instant confirmation and easy booking.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 blur-[60px] pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
