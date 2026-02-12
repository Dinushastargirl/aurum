
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import TeamPreview from '../components/TeamPreview';
import Gallery from '../components/Gallery';
import AppointmentCTA from '../components/AppointmentCTA';
import ContactPreview from '../components/ContactPreview';

import AboutPage from '../components/AboutPage';
import TeamPage from '../components/TeamPage';
import ServicesPage from '../components/ServicesPage';
import BookingPage from '../components/BookingPage';

export default function Page() {
  const [view, setView] = useState('/');

  const handleNavigate = (path: string) => {
    setView(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (view) {
      case '/about': return <AboutPage />;
      case '/team': return <TeamPage />;
      case '/services': return <ServicesPage />;
      case '/book': return <BookingPage />;
      default: return (
        <>
          <Hero />
          <AboutPreview onNavigate={handleNavigate} />
          <ServicesPreview />
          <TeamPreview />
          <Gallery />
          <AppointmentCTA />
          <ContactPreview />
        </>
      );
    }
  };

  return (
    <Layout activeView={view} onNavigate={handleNavigate}>
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Layout>
  );
}
