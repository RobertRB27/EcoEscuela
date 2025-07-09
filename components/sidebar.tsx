'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BookOpen, 
  Activity, 
  Users, 
  Mail,
  Leaf,
  Award,
  Settings
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: Home,
    description: 'Panel principal'
  },
  {
    id: 'guias',
    label: 'Guías Educativas',
    icon: BookOpen,
    description: 'Recursos de aprendizaje'
  },
  {
    id: 'actividades',
    label: 'Actividades',
    icon: Activity,
    description: 'Ejercicios interactivos'
  },
  {
    id: 'comunidad',
    label: 'Comunidad',
    icon: Users,
    description: 'Conecta con otros'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    icon: Mail,
    description: 'Soporte y ayuda'
  }
];

const secondaryItems = [
  {
    id: 'logros',
    label: 'Mis Logros',
    icon: Award,
    description: 'Progreso y certificados'
  },
  {
    id: 'configuracion',
    label: 'Configuración',
    icon: Settings,
    description: 'Ajustes de cuenta'
  }
];

export function Sidebar({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setActiveSection(activeSection)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 transform bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex h-full flex-col">
          {/* Welcome Section */}
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-green-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">¡Bienvenido!</p>
                <p className="text-xs text-gray-600">Aprende y protege el planeta</p>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-2" role="menu">
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Navegación
              </h3>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full justify-start h-12 px-3 text-left font-medium transition-all duration-200 group",
                      isActive
                        ? "bg-emerald-100 text-emerald-700 border-r-2 border-emerald-600"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    )}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent 
                      className={cn(
                        "mr-3 h-5 w-5 transition-colors",
                        isActive ? "text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"
                      )} 
                      aria-hidden="true" 
                    />
                    <div className="flex-1">
                      <div className="text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 group-hover:text-emerald-500">
                        {item.description}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Secondary Navigation */}
            <div className="pt-6 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Personal
              </h3>
              {secondaryItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full justify-start h-12 px-3 text-left font-medium transition-all duration-200 group",
                      isActive
                        ? "bg-emerald-100 text-emerald-700 border-r-2 border-emerald-600"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    )}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent 
                      className={cn(
                        "mr-3 h-5 w-5 transition-colors",
                        isActive ? "text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"
                      )} 
                      aria-hidden="true" 
                    />
                    <div className="flex-1">
                      <div className="text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 group-hover:text-emerald-500">
                        {item.description}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                Versión 1.0.0
              </p>
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                <Leaf className="h-3 w-3" aria-hidden="true" />
                <span>Cuidando el planeta juntos</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}