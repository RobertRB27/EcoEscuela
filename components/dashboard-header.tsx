'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf, Bell, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo and Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
            aria-label={sidebarOpen ? 'Cerrar menú lateral' : 'Abrir menú lateral'}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-lg">
              <Leaf className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">EcoEscuela</h1>
              <p className="text-xs text-gray-600">Educación Ambiental</p>
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Notificaciones"
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
                aria-label="Menú de usuario"
              >
                <User className="h-5 w-5" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="focus:bg-emerald-50">
                Mi perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-emerald-50">
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-emerald-50">
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}