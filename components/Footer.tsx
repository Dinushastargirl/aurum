
import React from 'react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-gold-accent/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="h-12 w-12 flex items-center justify-center">
               <img 
                 src={LOGO_URL} 
                 alt="Aurum Studio Logo" 
                 className="h-full w-full object-contain"
               />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-serif font-bold tracking-widest text-salon-white uppercase">Aurum</span>
               <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent -mt-1">Studio</span>
             </div>
          </div>
          <p className="text-salon-white/40 text-sm leading-relaxed font-light">
            Crafting elegance and radiance through expert hair artistry and premium beauty treatments in a sanctuary of luxury.
          </p>
        </div>
        
        <div>
          <h4 className="text-gold-accent font-serif text-lg tracking-widest uppercase mb-6">Contact</h4>
          <ul className="space-y-3 text-salon-white/60 text-sm font-light">
            <li>425/7 Atigala Gdn Rd,</li>
            <li>Sri Jayawardenepura Kotte 10001</li>
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-accent font-serif text-lg tracking-widest uppercase mb-6">Hours</h4>
          <ul className="space-y-3 text-salon-white/60 text-sm font-light">
            <li>Mon - Fri: 9am - 8pm</li>
            <li>Sat: 10am - 6pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-accent font-serif text-lg tracking-widest uppercase mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-accent transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 fill-white/60" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-accent transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-white/60" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-salon-white/20">
        <p>&copy; {new Date().getFullYear()} Aurum Studio. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
