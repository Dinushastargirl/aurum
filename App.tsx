
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import ServicesPreview from './components/ServicesPreview';
import TeamPreview from './components/TeamPreview';
import Gallery from './components/Gallery';
import AppointmentCTA from './components/AppointmentCTA';
import ContactPreview from './components/ContactPreview';

// Internal pages
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import ServicesPage from './components/ServicesPage';
import BookingPage from './components/BookingPage';

const App: React.FC = () => {
  const [view, setView] = useState('/');

  // Simple "routing" based on path for this specific environment
  const handleNavigate = (path: string) => {
    setView(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (view) {
      case '/about':
        return <AboutPage />;
      case '/team':
        return <TeamPage />;
      case '/services':
        return <ServicesPage />;
      case '/book':
        return <BookingPage />;
      case '/':
      default:
        return (
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
      {renderView()}
      <Footer />
    </Layout>
  );
};

export default App;
