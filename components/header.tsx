'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo and Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 lg:hidden"
            aria-label={sidebarOpen ? 'Cerrar menú lateral' : 'Abrir menú lateral'}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
              <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">EcoEscuela</h1>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Educación Ambiental para Todos</p>
            </div>
          </div>
        </div>

        {/* Right side - Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}