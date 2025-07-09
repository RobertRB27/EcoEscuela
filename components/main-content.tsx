'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { InicioContent } from '@/components/content/inicio-content';
import { GuiasContent } from '@/components/content/guias-content';
import { ActividadesContent } from '@/components/content/actividades-content';
import { ComunidadContent } from '@/components/content/comunidad-content';
import { ContactoContent } from '@/components/content/contacto-content';
import { LogrosContent } from '@/components/content/logros-content';
import { ConfiguracionContent } from '@/components/content/configuracion-content';

interface MainContentProps {
  activeSection: string;
  sidebarOpen: boolean;
}

export function MainContent({ activeSection, sidebarOpen }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioContent />;
      case 'guias':
        return <GuiasContent />;
      case 'actividades':
        return <ActividadesContent />;
      case 'comunidad':
        return <ComunidadContent />;
      case 'contacto':
        return <ContactoContent />;
      case 'logros':
        return <LogrosContent />;
      case 'configuracion':
        return <ConfiguracionContent />;
      default:
        return <InicioContent />;
    }
  };

  return (
    <main
      className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        sidebarOpen ? "lg:ml-0" : "lg:ml-0"
      )}
      role="main"
    >
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 sm:p-8">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}