'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Recycle, 
  Zap, 
  CloudRain, 
  Leaf,
  BookOpen,
  Users,
  MessageCircle,
  Award,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Target,
  Heart,
  School
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
  badge?: string;
  defaultOpen?: boolean;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
  path: string;
  badge?: string;
  isNew?: boolean;
}

export function EcoSidebarAccordion({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    main: true,
    learning: true,
    community: false,
    blog: false
  });

  const navigationSections: NavigationSection[] = [
    {
      id: 'main',
      title: 'Principal',
      icon: Home,
      color: 'text-blue-600 dark:text-blue-400',
      defaultOpen: true,
      items: [
        {
          id: 'inicio',
          label: 'Inicio',
          icon: Home,
          description: 'Panel principal',
          color: 'text-blue-600 dark:text-blue-400',
          path: '/'
        }
      ]
    },
    {
      id: 'learning',
      title: 'Aprendizaje',
      icon: GraduationCap,
      color: 'text-emerald-600 dark:text-emerald-400',
      badge: '4',
      defaultOpen: true,
      items: [
        {
          id: 'reciclaje',
          label: 'Reciclaje',
          icon: Recycle,
          description: 'Aprende a reciclar',
          color: 'text-green-600 dark:text-green-400',
          path: '/reciclaje',
          isNew: true
        },
        {
          id: 'energia',
          label: 'Energía',
          icon: Zap,
          description: 'Energías renovables',
          color: 'text-yellow-600 dark:text-yellow-400',
          path: '/energia'
        },
        {
          id: 'clima',
          label: 'Clima',
          icon: CloudRain,
          description: 'Cambio climático',
          color: 'text-cyan-600 dark:text-cyan-400',
          path: '/clima'
        },
        {
          id: 'sostenibilidad',
          label: 'Sostenibilidad',
          icon: Leaf,
          description: 'Vida sostenible',
          color: 'text-emerald-600 dark:text-emerald-400',
          path: '/sostenibilidad'
        }
      ]
    },
    {
      id: 'community',
      title: 'Comunidad',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      badge: '3',
      defaultOpen: false,
      items: [
        {
          id: 'foro',
          label: 'Foro',
          icon: MessageCircle,
          description: 'Discusiones comunitarias',
          color: 'text-purple-600 dark:text-purple-400',
          path: '/comunidad/foro',
          badge: '12'
        },
        {
          id: 'testimonios',
          label: 'Testimonios',
          icon: Heart,
          description: 'Historias inspiradoras',
          color: 'text-pink-600 dark:text-pink-400',
          path: '/comunidad/testimonios'
        },
        {
          id: 'proyectos',
          label: 'Proyectos Escolares',
          icon: School,
          description: 'Iniciativas educativas',
          color: 'text-indigo-600 dark:text-indigo-400',
          path: '/comunidad/proyectos',
          isNew: true
        }
      ]
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: BookOpen,
      color: 'text-orange-600 dark:text-orange-400',
      defaultOpen: false,
      items: [
        {
          id: 'blog',
          label: 'Artículos y Noticias',
          icon: BookOpen,
          description: 'Contenido actualizado',
          color: 'text-orange-600 dark:text-orange-400',
          path: '/blog'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Inicializar secciones abiertas por defecto
  React.useEffect(() => {
    const defaultOpen: Record<string, boolean> = {};
    navigationSections.forEach(section => {
      defaultOpen[section.id] = section.defaultOpen || false;
    });
    setOpenSections(defaultOpen);
  }, []);

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
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-80 transform bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex h-full flex-col">
          {/* Welcome Section */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">¡Hola, Eco-Estudiante!</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Aprende y protege el planeta 🌱</p>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-3 overflow-y-auto" role="menu">
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
                        className="w-full justify-between h-12 px-4 text-left font-medium transition-all duration-200 group hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
                        aria-expanded={isOpen}
                        aria-controls={`section-${section.id}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                            <SectionIcon 
                              className={`h-4 w-4 ${section.color}`} 
                              aria-hidden="true" 
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                            {section.title}
                          </span>
                          {section.badge && (
                            <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                              {section.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:text-emerald-600" aria-hidden="true" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:text-emerald-600" aria-hidden="true" />
                          )}
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent 
                      id={`section-${section.id}`}
                      className="animate-in slide-in-from-top-2 duration-300"
                    >
                      <div className="ml-6 mt-2 space-y-1 border-l-2 border-emerald-100 dark:border-emerald-800 pl-4">
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = activeSection === item.id;
                          
                          return (
                            <Button
                              key={item.id}
                              variant="ghost"
                              onClick={() => setActiveSection(item.id)}
                              className={cn(
                                "w-full justify-start h-14 px-3 text-left font-medium transition-all duration-200 group rounded-xl relative",
                                isActive
                                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 shadow-sm border-l-3 border-emerald-600 dark:border-emerald-400"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
                              )}
                              role="menuitem"
                              aria-current={isActive ? 'page' : undefined}
                            >
                              <div className="flex items-center space-x-3 w-full">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                                  isActive 
                                    ? 'bg-emerald-200 dark:bg-emerald-800 scale-110' 
                                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800 group-hover:scale-105'
                                }`}>
                                  <ItemIcon 
                                    className={cn(
                                      "h-4 w-4 transition-colors",
                                      isActive 
                                        ? item.color
                                        : "text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                                    )} 
                                    aria-hidden="true" 
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium truncate">{item.label}</span>
                                    {item.isNew && (
                                      <Badge className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white animate-pulse">
                                        Nuevo
                                      </Badge>
                                    )}
                                    {item.badge && (
                                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                        {item.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 truncate">
                                    {item.description}
                                  </div>
                                </div>
                                {isActive && (
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                )}
                              </div>
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
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-emerald-500" aria-hidden="true" />
                  Progreso del día
                </span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: '75%' }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>3 de 4 lecciones</span>
                <span className="flex items-center">
                  <Award className="h-3 w-3 mr-1 text-yellow-500" aria-hidden="true" />
                  ¡Casi listo!
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Leaf className="h-4 w-4 text-emerald-500 animate-bounce" aria-hidden="true" />
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">EcoEscuela</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Cuidando el planeta juntos 🌍
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