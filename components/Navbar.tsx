
import React, { useState, useEffect } from 'react';
import { motion as motionLib, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT_INFO, LOGO_URL } from '../constants';

const motion = motionLib as any;

interface NavbarProps {
  onNavigate: (href: string) => void;
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('http')) {
      // Allow default behavior for external links
      return;
    }
    
    if (href.startsWith('#')) {
      // It's an anchor, only if we are on home we scroll, otherwise we navigate home first
      if (activeView === '/') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      } else {
        onNavigate('/');
        // After navigating home, scroll to the section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      e.preventDefault();
      onNavigate(href);
      setMobileMenuOpen(false);
    }
  };

  const handleBookClick = () => {
    window.open(CONTACT_INFO.bookingLink, '_blank');
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-bg/80 backdrop-blur-md py-3 shadow-2xl border-b border-gold-accent/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <div className="h-12 w-12 relative overflow-hidden flex items-center justify-center">
             <img 
               src={LOGO_URL} 
               alt="Aurum Studio Logo" 
               className="h-full w-full object-contain"
             />
             <div className="absolute inset-0 border border-gold-accent/10 rounded-full scale-110 pointer-events-none"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-widest text-salon-white uppercase leading-none">Aurum</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent">Studio</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative px-2 py-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold-accent group"
            >
              <span className={activeView === item.href ? 'text-gold-accent' : 'text-salon-white/80'}>
                {item.label}
              </span>
              
              {activeView === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
          
          <motion.button
            onClick={handleBookClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-6 py-2 bg-primary-blue text-white rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-opacity-90 transition-all border border-transparent hover:border-gold-accent/50 shadow-lg shadow-primary-blue/20"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-salon-white p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gold-accent transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gold-accent transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gold-accent transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-gold-accent/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-lg font-serif tracking-widest uppercase ${
                    activeView === item.href ? 'text-gold-accent' : 'text-salon-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={handleBookClick}
                className="mt-4 w-full py-4 bg-primary-blue text-white text-sm font-bold tracking-widest uppercase rounded-sm"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
