// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-primarydark bg-[url('../../assets/topography.svg')] overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
