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
        className="h-10 w-10 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
        disabled
        aria-label="Cargando tema"
      >
        <div className="h-5 w-5 animate-pulse bg-gray-300 dark:bg-gray-600 rounded" />
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
      className="h-10 w-10 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/20 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-emerald-600 transition-transform duration-200 rotate-0 scale-100" />
      )}
    </Button>
  );
}