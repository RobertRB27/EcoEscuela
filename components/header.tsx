'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, ChevronDown, Leaf, BookOpen, Users, FileText, Mail } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-lg">
              <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">EcoEscuela</span>
              <span className="text-xs text-gray-600 hidden sm:block">Educación Ambiental</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-1 py-1"
            >
              Inicio
            </a>
            
            <a
              href="#sobre-nosotros"
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-1 py-1"
            >
              Sobre Nosotros
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Recursos
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Guías Educativas</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Actividades</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Herramientas</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Comunidad
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Foro</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Blog</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-emerald-50">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Eventos</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contacto"
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-1 py-1"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú de navegación">
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-6 mt-8">
                <a
                  href="#inicio"
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-2"
                >
                  Inicio
                </a>
                
                <a
                  href="#sobre-nosotros"
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-2"
                >
                  Sobre Nosotros
                </a>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Recursos</h3>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#guias"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Guías Educativas
                    </a>
                    <a
                      href="#actividades"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Actividades
                    </a>
                    <a
                      href="#herramientas"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Herramientas
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Comunidad</h3>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#foro"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Foro
                    </a>
                    <a
                      href="#blog"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Blog
                    </a>
                    <a
                      href="#eventos"
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      Eventos
                    </a>
                  </div>
                </div>

                <a
                  href="#contacto"
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm px-2 py-2"
                >
                  Contacto
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}