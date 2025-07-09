'use client';

import React from 'react';
import { useState } from 'react';
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
import { CourseQuiz } from '@/components/course-quiz';
import { ClimateInteractiveSection } from '@/components/climate-interactive-section';

interface MainContentProps {
  activeSection: string;
  sidebarOpen: boolean;
}

export function MainContent({ activeSection, sidebarOpen }: MainContentProps) {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [showClimateSection, setShowClimateSection] = useState(false);

  const handleStartCourse = (courseId: string) => {
    setActiveQuiz(courseId);
  };

  const handleCloseQuiz = () => {
    setActiveQuiz(null);
  };

  // Course data for quizzes
  const courseData = {
    reciclaje: {
      id: 'reciclaje',
      title: 'Reciclaje Básico',
      description: 'Aprende los fundamentos del reciclaje y la separación correcta de residuos',
      questions: [
        {
          id: 1,
          question: '¿En qué contenedor debes depositar las botellas de plástico?',
          image: 'https://images.unsplash.com/photo-1572012335275-86b4b0c7b6b6?w=400&h=250&fit=crop',
          options: [
            'Contenedor verde (vidrio)',
            'Contenedor amarillo (plástico y latas)',
            'Contenedor azul (papel y cartón)',
            'Contenedor gris (residuos generales)'
          ],
          correctAnswer: 1,
          explanation: 'Las botellas de plástico van en el contenedor amarillo, junto con latas y envases de plástico.'
        },
        {
          id: 2,
          question: '¿Cuál de estos materiales NO es reciclable?',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
          options: [
            'Papel de periódico',
            'Botellas de vidrio',
            'Pañales usados',
            'Latas de aluminio'
          ],
          correctAnswer: 2,
          explanation: 'Los pañales usados no son reciclables debido a su composición y contaminación. Van en residuos generales.'
        }
      ]
    },
    energia: {
      id: 'energia',
      title: 'Energías Renovables',
      description: 'Descubre las diferentes fuentes de energía limpia y sostenible',
      questions: [
        {
          id: 1,
          question: '¿Cuál es la fuente de energía renovable más abundante en la Tierra?',
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop',
          options: [
            'Energía eólica',
            'Energía solar',
            'Energía hidroeléctrica',
            'Energía geotérmica'
          ],
          correctAnswer: 1,
          explanation: 'La energía solar es la más abundante, ya que el sol proporciona más energía en una hora de la que el mundo consume en un año.'
        },
        {
          id: 2,
          question: '¿Qué ventaja tienen las energías renovables sobre los combustibles fósiles?',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
          options: [
            'Son más baratas de instalar',
            'No producen emisiones de CO2',
            'Están disponibles en todos los países',
            'No requieren mantenimiento'
          ],
          correctAnswer: 1,
          explanation: 'Las energías renovables no producen emisiones de CO2 durante su funcionamiento, ayudando a combatir el cambio climático.'
        }
      ]
    },
    clima: {
      id: 'clima',
      title: 'Cambio Climático',
      description: 'Comprende las causas, efectos y soluciones del cambio climático global',
      questions: [
        {
          id: 1,
          question: '¿Cuál es la principal causa del cambio climático actual?',
          image: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=400&h=250&fit=crop',
          options: [
            'Variaciones naturales del clima',
            'Actividad volcánica',
            'Emisiones de gases de efecto invernadero por actividades humanas',
            'Cambios en la órbita terrestre'
          ],
          correctAnswer: 2,
          explanation: 'Las actividades humanas, especialmente la quema de combustibles fósiles, son la principal causa del cambio climático actual.'
        },
        {
          id: 2,
          question: '¿Cuál de estos efectos NO está relacionado con el cambio climático?',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop',
          options: [
            'Aumento del nivel del mar',
            'Derretimiento de glaciares',
            'Terremotos más frecuentes',
            'Eventos climáticos extremos'
          ],
          correctAnswer: 2,
          explanation: 'Los terremotos no están relacionados con el cambio climático. Son causados por movimientos tectónicos.'
        }
      ]
    }
  };

  const renderContent = () => {
    // Show quiz if one is active
    if (activeQuiz && courseData[activeQuiz as keyof typeof courseData]) {
      return (
        <CourseQuiz
          course={courseData[activeQuiz as keyof typeof courseData]}
          onClose={handleCloseQuiz}
        />
      );
    }

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
                    id: 'reciclaje',
                    title: 'Reciclaje Básico', 
                    icon: Recycle, 
                    description: 'Aprende los fundamentos del reciclaje y cómo separar correctamente los residuos', 
                    color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
                    difficulty: 'Principiante',
                    duration: '30 min',
                    questions: 2
                  },
                  { 
                    id: 'energia',
                    title: 'Energías Renovables', 
                    icon: Zap, 
                    description: 'Descubre las energías del futuro: solar, eólica e hidroeléctrica', 
                    color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
                    difficulty: 'Intermedio',
                    duration: '45 min',
                    questions: 2
                  },
                  { 
                    id: 'clima',
                    title: 'Cambio Climático', 
                    icon: CloudRain, 
                    description: 'Comprende las causas y efectos del cambio climático global', 
                    color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
                    difficulty: 'Avanzado',
                    duration: '60 min',
                    questions: 2
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
                          <span>{course.questions} preguntas</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full eco-button group"
                          onClick={() => handleStartCourse(course.id)}
                        >
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
            
            {!showClimateSection ? (
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
                  <Button 
                    className="eco-button"
                    onClick={() => setShowClimateSection(true)}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                    Estudiar clima
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <Button
                  variant="ghost"
                  onClick={() => setShowClimateSection(false)}
                  className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
                  <span>Volver a la introducción</span>
                </Button>
                <ClimateInteractiveSection />
              </div>
            )}
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