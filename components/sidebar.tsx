'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Recycle, 
  Zap, 
  CloudRain, 
  Leaf,
  BookOpen,
  Mail,
  Sparkles
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
    description: 'Panel principal',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'reciclaje',
    label: 'Reciclaje',
    icon: Recycle,
    description: 'Aprende a reciclar',
    color: 'text-green-600 dark:text-green-400'
  },
  {
    id: 'energia',
    label: 'Energía',
    icon: Zap,
    description: 'Energías renovables',
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    id: 'clima',
    label: 'Clima',
    icon: CloudRain,
    description: 'Cambio climático',
    color: 'text-cyan-600 dark:text-cyan-400'
  },
  {
    id: 'sostenibilidad',
    label: 'Sostenibilidad',
    icon: Leaf,
    description: 'Vida sostenible',
    color: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: BookOpen,
    description: 'Artículos y noticias',
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    icon: Mail,
    description: 'Contáctanos',
    color: 'text-pink-600 dark:text-pink-400'
  }
];

export function Sidebar({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => {}}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-72 transform bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex h-full flex-col">
          {/* Welcome Section */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">¡Hola, Eco-Estudiante!</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Aprende y protege el planeta</p>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto" role="menu">
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Explora y Aprende
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
                      "w-full justify-start h-14 px-4 text-left font-medium transition-all duration-200 group rounded-xl",
                      isActive
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 shadow-md border-l-4 border-emerald-600 dark:border-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-sm"
                    )}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent 
                      className={cn(
                        "mr-4 h-5 w-5 transition-colors",
                        isActive 
                          ? item.color
                          : "text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      )} 
                      aria-hidden="true" 
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                        {item.description}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Leaf className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">EcoEscuela</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Cuidando el planeta juntos
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Versión 1.0.0
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}