'use client';

import React, { useState } from 'react';
import { EcoSidebar } from '@/components/eco-sidebar';
import { EcoHeader } from '@/components/eco-header';
import { EcoMainContent } from '@/components/eco-main-content';

export function EcoLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
    </div>
  );
}