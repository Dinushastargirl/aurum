import React from 'react';
import './globals.css';

export const metadata = {
  title: 'AURUM STUDIO | Premium Salon',
  description: 'The Gold Standard of Beauty and Hair Artistry.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Fixed: Changed 'class' to 'className' as required by React for specifying CSS classes.
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-bg text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
