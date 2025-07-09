'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Recycle, 
  Zap, 
  CloudRain, 
  Leaf,
  BookOpen,
  Mail,
  Home,
  Users,
  Award,
  TrendingUp,
  Play,
  ArrowRight
} from 'lucide-react';

interface EcoMainContentProps {
  activeSection: string;
  sidebarOpen: boolean;
}

export function EcoMainContent({ activeSection, sidebarOpen }: EcoMainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-8">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">¡Bienvenido a EcoEscuela!</h1>
                  <p className="text-emerald-100 text-lg">
                    Tu plataforma de educación ambiental interactiva
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, label: 'Lecciones', value: '50+', color: 'text-emerald-600 dark:text-emerald-400' },
                { icon: Users, label: 'Estudiantes', value: '1,200+', color: 'text-blue-600 dark:text-blue-400' },
                { icon: Award, label: 'Certificados', value: '300+', color: 'text-yellow-600 dark:text-yellow-400' },
                { icon: TrendingUp, label: 'Progreso', value: '85%', color: 'text-green-600 dark:text-green-400' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        </div>
                        <IconComponent className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Featured Courses */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cursos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Reciclaje Básico', icon: Recycle, description: 'Aprende los fundamentos del reciclaje', color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' },
                  { title: 'Energías Renovables', icon: Zap, description: 'Descubre las energías del futuro', color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' },
                  { title: 'Cambio Climático', icon: CloudRain, description: 'Comprende el clima global', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' }
                ].map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center mb-4`}>
                          <IconComponent className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <CardTitle className="dark:text-white">{course.title}</CardTitle>
                        <CardDescription className="dark:text-gray-400">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                          <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                          Comenzar
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'reciclaje':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reciclaje</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Aprende todo sobre el reciclaje y cómo reducir los residuos
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Guía Completa de Reciclaje</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Descubre cómo separar correctamente los residuos y contribuir al cuidado del medio ambiente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Comenzar lección
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'energia':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Energía</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explora las energías renovables y su impacto en el planeta
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Energías Renovables</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Aprende sobre energía solar, eólica, hidroeléctrica y otras fuentes limpias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Explorar energías
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'clima':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Clima</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprende el cambio climático y sus efectos en nuestro planeta
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Cambio Climático</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Estudia las causas, efectos y soluciones del cambio climático global
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Estudiar clima
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'sostenibilidad':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sostenibilidad</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Descubre cómo vivir de manera más sostenible y responsable
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Vida Sostenible</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Aprende hábitos y prácticas para un estilo de vida más sostenible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Vivir sostenible
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'blog':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Blog</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Artículos, noticias y recursos sobre educación ambiental
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Artículos Recientes</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Mantente actualizado con las últimas noticias ambientales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Leer artículos
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'contacto':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contacto</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
            </div>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Contáctanos</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Envíanos un mensaje y te responderemos lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sección en desarrollo</h2>
            <p className="text-gray-600 dark:text-gray-400">Esta sección estará disponible pronto.</p>
          </div>
        );
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
      <div className="h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="p-6 sm:p-8">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}