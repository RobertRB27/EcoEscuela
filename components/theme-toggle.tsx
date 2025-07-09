'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        disabled
        aria-label="Cargando tema"
      >
        <div className="h-4 w-4 animate-pulse bg-gray-300 rounded" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 hover:bg-emerald-100 dark:hover:bg-emerald-900 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <Moon className="h-4 w-4 text-emerald-600" />
      )}
    </Button>
  );
}