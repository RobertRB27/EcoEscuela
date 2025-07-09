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
  ArrowRight,
  Heart,
  Globe,
  Lightbulb,
  Target
} from 'lucide-react';
import { RecyclingInteractiveCards } from '@/components/recycling-interactive-cards';

interface MainContentProps {
  activeSection: string;
  sidebarOpen: boolean;
}

export function MainContent({ activeSection, sidebarOpen }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-8 fade-in">
            {/* Welcome Header */}
            <div className="eco-gradient rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-3">¡Bienvenido a EcoEscuela!</h1>
                  <p className="text-emerald-100 text-lg sm:text-xl max-w-2xl">
                    Tu plataforma de educación ambiental interactiva. Aprende, explora y ayuda a proteger nuestro planeta.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-bounce-gentle">
                    <Leaf className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, label: 'Lecciones', value: '50+', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/20' },
                { icon: Users, label: 'Estudiantes', value: '1,200+', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/20' },
                { icon: Award, label: 'Certificados', value: '300+', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
                { icon: TrendingUp, label: 'Progreso', value: '85%', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/20' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="eco-card hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                          <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                          <IconComponent className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Featured Courses */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Cursos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'Reciclaje Básico', 
                    icon: Recycle, 
                    description: 'Aprende los fundamentos del reciclaje y cómo separar correctamente los residuos', 
                    color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
                    difficulty: 'Principiante',
                    duration: '30 min'
                  },
                  { 
                    title: 'Energías Renovables', 
                    icon: Zap, 
                    description: 'Descubre las energías del futuro: solar, eólica e hidroeléctrica', 
                    color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
                    difficulty: 'Intermedio',
                    duration: '45 min'
                  },
                  { 
                    title: 'Cambio Climático', 
                    icon: CloudRain, 
                    description: 'Comprende las causas y efectos del cambio climático global', 
                    color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
                    difficulty: 'Avanzado',
                    duration: '60 min'
                  }
                ].map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <Card key={index} className="eco-card group">
                      <CardHeader>
                        <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <CardTitle className="dark:text-white text-lg">{course.title}</CardTitle>
                        <CardDescription className="dark:text-gray-400 text-responsive">
                          {course.description}
                        </CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{course.difficulty}</span>
                          <span>{course.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full eco-button group">
                          <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                          Comenzar Curso
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Fun Facts */}
            <Card className="eco-gradient text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6" aria-hidden="true" />
                  ¿Sabías que...?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Reciclaje Global</p>
                      <p className="text-emerald-100 text-sm">Una botella de plástico puede tardar hasta 450 años en descomponerse naturalmente.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Energía Limpia</p>
                      <p className="text-emerald-100 text-sm">La energía solar que llega a la Tierra en una hora podría abastecer al mundo entero por un año.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'reciclaje':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Reciclaje</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Aprende todo sobre el reciclaje y cómo reducir los residuos para cuidar nuestro planeta
              </p>
            </div>
            
            {/* Tarjetas Interactivas */}
            <RecyclingInteractiveCards />
          </div>
        );

      case 'energia':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Energía</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Explora las energías renovables y su impacto positivo en nuestro planeta
              </p>
            </div>
            <Card className="eco-card">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white text-xl">Energías Renovables</CardTitle>
                <CardDescription className="dark:text-gray-400 text-responsive">
                  Aprende sobre energía solar, eólica, hidroeléctrica y otras fuentes limpias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="eco-button">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Explorar energías
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'clima':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Clima</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Comprende el cambio climático y sus efectos en nuestro planeta
              </p>
            </div>
            <Card className="eco-card">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
                  <CloudRain className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white text-xl">Cambio Climático</CardTitle>
                <CardDescription className="dark:text-gray-400 text-responsive">
                  Estudia las causas, efectos y soluciones del cambio climático global
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="eco-button">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Estudiar clima
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'sostenibilidad':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Sostenibilidad</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Descubre cómo vivir de manera más sostenible y responsable con el medio ambiente
              </p>
            </div>
            <Card className="eco-card">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white text-xl">Vida Sostenible</CardTitle>
                <CardDescription className="dark:text-gray-400 text-responsive">
                  Aprende hábitos y prácticas para un estilo de vida más sostenible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="eco-button">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Vivir sostenible
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'blog':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                Artículos, noticias y recursos sobre educación ambiental
              </p>
            </div>
            <Card className="eco-card">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white text-xl">Artículos Recientes</CardTitle>
                <CardDescription className="dark:text-gray-400 text-responsive">
                  Mantente actualizado con las últimas noticias ambientales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="eco-button">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Leer artículos
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'contacto':
        return (
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Contacto</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                ¿Tienes preguntas? Estamos aquí para ayudarte en tu viaje de aprendizaje ambiental
              </p>
            </div>
            <Card className="eco-card">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-pink-600 dark:text-pink-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white text-xl">Contáctanos</CardTitle>
                <CardDescription className="dark:text-gray-400 text-responsive">
                  Envíanos un mensaje y te responderemos lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="eco-button">
                  <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12 fade-in">
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
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 sm:p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}