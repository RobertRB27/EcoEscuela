'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { MainContent } from '@/components/main-content';
import { Footer } from '@/components/footer';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <MainContent 
          activeSection={activeSection}
          sidebarOpen={sidebarOpen}
        />
      </div>
      
      <Footer />
    </div>
  );
}