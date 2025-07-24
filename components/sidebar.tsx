'use client';

import React, { useState } from 'react';
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
  Sparkles,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Users,
  Settings,
  HelpCircle,
  Newspaper,
  Download
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  items: NavigationItem[];
  color: string;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}

const navigationSections: NavigationSection[] = [
  {
    id: 'main',
    title: 'Principal',
    icon: Home,
    color: 'text-blue-600 dark:text-blue-400',
    items: [
      {
        id: 'inicio',
        label: 'Inicio',
        icon: Home,
        description: 'Panel principal',
        color: 'text-blue-600 dark:text-blue-400'
      }
    ]
  },
  {
    id: 'learning',
    title: 'Aprendizaje',
    icon: GraduationCap,
    color: 'text-emerald-600 dark:text-emerald-400',
    items: [
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
      }
    ]
  },
  {
    id: 'resources',
    title: 'Recursos',
    icon: BookOpen,
    color: 'text-purple-600 dark:text-purple-400',
    items: [
      {
        id: 'blog',
        label: 'Blog Ambiental',
        icon: BookOpen,
        description: 'Noticias actualizadas',
        color: 'text-purple-600 dark:text-purple-400'
      },
      {
        id: 'revistas',
        label: 'Revistas',
        icon: Newspaper,
        description: 'Publicaciones especializadas',
        color: 'text-indigo-600 dark:text-indigo-400'
      },
      {
        id: 'recursos',
        label: 'Descargas',
        icon: Download,
        description: 'PDFs e infografías',
        color: 'text-teal-600 dark:text-teal-400'
      }
    ]
  },
  {
    id: 'community',
    title: 'Comunidad',
    icon: Users,
    color: 'text-orange-600 dark:text-orange-400',
    items: [
      {
        id: 'contacto',
        label: 'Contacto',
        icon: Mail,
        description: 'Contáctanos',
        color: 'text-pink-600 dark:text-pink-400'
      }
    ]
  },
  {
    id: 'settings',
    title: 'Configuración',
    icon: Settings,
    color: 'text-gray-600 dark:text-gray-400',
    items: [
      {
        id: 'configuracion',
        label: 'Configuración',
        icon: Settings,
        description: 'Ajustes de la aplicación',
        color: 'text-gray-600 dark:text-gray-400'
      }
    ]
  },
  {
    id: 'support',
    title: 'Soporte',
    icon: HelpCircle,
    color: 'text-gray-600 dark:text-gray-400',
    items: [
      {
        id: 'contacto',
        label: 'Contacto',
        icon: Mail,
        description: 'Contáctanos',
        color: 'text-pink-600 dark:text-pink-400'
      }
    ]
  }
];

export function Sidebar({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    main: true,
    learning: true,
    community: false,
    support: false
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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
            {navigationSections.map((section) => {
              const SectionIcon = section.icon;
              const isOpen = openSections[section.id];
              
              return (
                <div key={section.id} className="space-y-1">
                  <Collapsible
                    open={isOpen}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-10 px-3 text-left font-medium transition-all duration-200 group hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                        aria-expanded={isOpen}
                        aria-controls={`section-${section.id}`}
                      >
                        <div className="flex items-center space-x-3">
                          <SectionIcon 
                            className={`h-4 w-4 ${section.color}`} 
                            aria-hidden="true" 
                          />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {section.title}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200" aria-hidden="true" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-200" aria-hidden="true" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent 
                      id={`section-${section.id}`}
                      className="animate-in slide-in-from-top-2 duration-200"
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 pl-4">
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = activeSection === item.id;
                          
                          return (
                            <Button
                              key={item.id}
                              variant="ghost"
                              onClick={() => setActiveSection(item.id)}
                              className={cn(
                                "w-full justify-start h-12 px-3 text-left font-medium transition-all duration-200 group rounded-lg",
                                isActive
                                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 shadow-sm border-l-2 border-emerald-600 dark:border-emerald-400"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
                              )}
                              role="menuitem"
                              aria-current={isActive ? 'page' : undefined}
                            >
                              <ItemIcon 
                                className={cn(
                                  "mr-3 h-4 w-4 transition-colors",
                                  isActive 
                                    ? item.color
                                    : "text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                                )} 
                                aria-hidden="true" 
                              />
                              <div className="flex-1">
                                <div className="text-sm font-medium">{item.label}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                                  {item.description}
                                </div>
                              </div>
                              {isActive && (
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                              )}
                            </Button>
                          );
                        })}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              );
            })}
          </nav>

          {/* Progress Section */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progreso del día
                </span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>3 de 4 lecciones</span>
                <span>🎯 ¡Casi listo!</span>
              </div>
            </div>
          </div>

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