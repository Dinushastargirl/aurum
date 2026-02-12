
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: 'https://www.fresha.com/a/aurum-studio-sri-jayawardenepura-kotte-atigala-garden-road-tvknpalf' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
  address: '425/7 Atigala Gdn Rd, Sri Jayawardenepura Kotte 10001',
  phone: '071 222 9182',
  email: 'hello@aurumstudio.com',
  instagram: 'https://www.instagram.com/aurumltd/',
  facebook: 'https://www.facebook.com/aurumltd/',
  bookingLink: 'https://www.fresha.com/a/aurum-studio-sri-jayawardenepura-kotte-atigala-garden-road-tvknpalf'
};

export const BRAND_COLORS = {
  primaryBlue: '#1E7A8A',
  darkBg: '#2E2E2E',
  goldAccent: '#D4AF37',
  white: '#FFFFFF',
};

// Direct image links extracted from the provided ibb.co viewer links
export const LOGO_URL = 'https://i.ibb.co/7Tz8WwT/aurum-logo.png';
export const HERO_IMAGE = 'https://i.ibb.co/SwZsqDFb/hero-bg.jpg';

export const NILUSHA_IMAGE = 'https://i.ibb.co/Md8p4kY/nilusha.jpg';
export const ROHAN_IMAGE = 'https://i.ibb.co/0pRZvdWN/rohan.jpg';

export const ABOUT_IMAGES = [
  'https://i.ibb.co/0pPpyNCB/about-1.jpg',
  'https://i.ibb.co/nqnq3RFT/about-2.jpg'
];

export const GALLERY_IMAGES = [
  { url: 'https://i.ibb.co/cXSM2FVb/gallery-1.jpg', title: 'Signature Styling' },
  { url: 'https://i.ibb.co/2002jqYm/gallery-2.jpg', title: 'Radiant Color' },
  { url: 'https://i.ibb.co/svH3bj1D/gallery-3.jpg', title: 'Precision Cut' },
  { url: 'https://i.ibb.co/C3CY6Mys/gallery-4.jpg', title: 'Luxury Spa' },
  { url: 'https://i.ibb.co/WNc5nLFX/gallery-5.jpg', title: 'Gold Treatment' },
  { url: 'https://i.ibb.co/hRD5M5NN/gallery-6.jpg', title: 'Artisan Finish' },
  { url: 'https://i.ibb.co/D2c1QYF/gallery-7.jpg', title: 'Ethereal Glow' },
  { url: 'https://i.ibb.co/s9h0R6ws/gallery-8.jpg', title: 'Modern Waves' },
  { url: 'https://i.ibb.co/3m5Hh6NZ/gallery-9.jpg', title: 'Studio Details' },
  { url: 'https://i.ibb.co/4cbc7Zp/gallery-10.jpg', title: 'Final Polish' },
];

// Reusing gallery images for carousel
export const CAROUSEL_IMAGES = [
  GALLERY_IMAGES[0].url,
  GALLERY_IMAGES[2].url,
  GALLERY_IMAGES[4].url,
  GALLERY_IMAGES[6].url,
];

export const SERVICES_DETAILED = [
  {
    category: 'Hair Color',
    items: [
      { name: 'Single Process Color', price: 'from $120', desc: 'Full coverage root to tip.' },
      { name: 'Signature Balayage', price: 'from $280', desc: 'Hand-painted sun-kissed dimension.' },
      { name: 'Highlighting (Full)', price: 'from $220', desc: 'Complete brightness across the crown.' },
      { name: 'Gloss & Tone', price: 'from $85', desc: 'Refresh and add shine between colors.' }
    ]
  },
  {
    category: 'Hair Treatment',
    items: [
      { name: 'Signature Blowout', price: 'from $65', desc: 'Wash, scalp massage, and sleek style.' },
      { name: 'Deep Condition', price: 'from $45', desc: 'Intensive moisture for dry hair.' },
      { name: 'Keratin Smoothing', price: 'from $350', desc: 'Eliminate frizz for up to 3 months.' },
      { name: 'Scalp Detox', price: 'from $90', desc: 'Clarifying treatment for scalp health.' }
    ]
  },
  {
    category: 'Facials',
    items: [
      { name: 'Aurum Signature Facial', price: 'from $150', desc: 'Our gold-standard 60-min treatment.' },
      { name: 'Hydra-Infusion', price: 'from $180', desc: 'Deep hydration and pore cleaning.' },
      { name: 'Anti-Aging Lift', price: 'from $210', desc: 'Collagen-boosting restorative facial.' },
      { name: 'Glow Express', price: 'from $95', desc: 'Quick 30-min skin pick-me-up.' }
    ]
  },
  {
    category: 'Mani & Pedi',
    items: [
      { name: 'Luxury Gel Manicure', price: 'from $75', desc: 'Long-lasting high shine color.' },
      { name: 'Spa Pedicure', price: 'from $90', desc: 'Aromatherapy soak and massage.' },
      { name: 'Nail Artistry', price: 'from $30', desc: 'Custom designs by our nail experts.' },
      { name: 'Paraffin Treatment', price: 'from $25', desc: 'Extra moisture for hands and feet.' }
    ]
  }
];

export const SERVICES = [
  { title: 'Hair Color', description: 'Transformative coloring from expert stylists.', icon: '✨' },
  { title: 'Hair Treatment', description: 'Restorative care for radiant, healthy hair.', icon: '💆' },
  { title: 'Facials', description: 'Revitalizing skin treatments for a natural glow.', icon: '🌿' },
  { title: 'Mani & Pedi', description: 'Impeccable nail care and luxury spa finishes.', icon: '💅' },
];
