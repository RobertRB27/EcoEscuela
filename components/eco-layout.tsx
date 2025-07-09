'use client';

import React, { useState } from 'react';
import { EcoSidebar } from '@/components/eco-sidebar';
import { EcoHeader } from '@/components/eco-header';
import { EcoMainContent } from '@/components/eco-main-content';
import { EcoFooter } from '@/components/eco-footer';

export function EcoLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <EcoHeader 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex">
        <EcoSidebar 
          isOpen={sidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <EcoMainContent 
          activeSection={activeSection}
          sidebarOpen={sidebarOpen}
        />
      </div>
      
      <EcoFooter />
    </div>
  );
}