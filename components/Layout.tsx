
import React from 'react';
import Navbar from './Navbar';
import CursorEffects from './CursorEffects';

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (href: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-gold-accent selection:text-dark-bg overflow-x-hidden">
      <CursorEffects />
      <Navbar activeView={activeView} onNavigate={onNavigate} />
      <main className="relative">
        {children}
      </main>
      
      {/* Scroll Progress Bar placeholder */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent pointer-events-none"></div>
    </div>
  );
};

export default Layout;
