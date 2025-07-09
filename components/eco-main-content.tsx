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
  Target,
  ChevronDown,
  ChevronRight,
  Trash2,
  Wine as Bottle,
  Newspaper,
  Battery,
  Lightbulb,
  Clock,
  PlayCircle,
  Star
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

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
            
            {/* Tarjeta 1: Guía Completa de Reciclaje */}
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
              <CardContent className="space-y-4">
                {/* Desplegable 1: Separación de residuos */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      aria-expanded="false"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                        </div>
                        <span className="font-medium">Separación de residuos</span>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Leaf className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Orgánicos</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Restos de comida, hojas</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Bottle className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Plásticos</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Botellas, envases</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Newspaper className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Papel</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Periódicos, cartón</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <Trash2 className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">No reciclables</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Residuos mixtos</p>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Desplegable 2: Tipos de materiales reciclables */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      aria-expanded="false"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                          <Recycle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        </div>
                        <span className="font-medium">Tipos de materiales reciclables</span>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Bottle className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Plástico</h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                          <li>• Botellas de agua y refrescos</li>
                          <li>• Envases de yogur</li>
                          <li>• Bolsas de plástico</li>
                          <li>• Contenedores de alimentos</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Newspaper className="h-5 w-5 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Papel</h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                          <li>• Periódicos y revistas</li>
                          <li>• Cajas de cartón</li>
                          <li>• Papel de oficina</li>
                          <li>• Libros y cuadernos</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Bottle className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Vidrio</h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                          <li>• Botellas de vidrio</li>
                          <li>• Frascos de conservas</li>
                          <li>• Envases de perfumes</li>
                          <li>• Cristalería doméstica</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Battery className="h-5 w-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Electrónicos</h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                          <li>• Pilas y baterías</li>
                          <li>• Teléfonos móviles</li>
                          <li>• Cables y cargadores</li>
                          <li>• Electrodomésticos pequeños</li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Desplegable 3: Proceso de reciclaje */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      aria-expanded="false"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                          <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                        </div>
                        <span className="font-medium">Proceso de reciclaje</span>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recolección</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Los residuos se recogen y transportan a centros de reciclaje</p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clasificación</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Los materiales se separan por tipo y calidad</p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Transformación</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Se procesan para crear nuevos productos</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                        <div className="flex items-center space-x-3 mb-3">
                          <PlayCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Video Educativo</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Mira este video para entender mejor el proceso completo de reciclaje
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                          <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                          Ver Video (5 min)
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Tarjeta 2: Actividades Prácticas */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <CardTitle className="dark:text-white">Actividades Prácticas</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Pon a prueba tus conocimientos con actividades interactivas y divertidas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Actividad 1: Quiz */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                      aria-expanded="false"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Quiz: Separación de residuos</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">15 preguntas • 10 min</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Duración: 10 minutos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" aria-hidden="true" />
                          ))}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">Fácil</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                          <span className="text-gray-600 dark:text-gray-400">1,234 estudiantes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                          <span className="text-gray-600 dark:text-gray-400">+150 puntos</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Demuestra tus conocimientos sobre la separación correcta de residuos. 
                        Incluye preguntas sobre contenedores, tipos de materiales y buenas prácticas.
                      </p>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                        <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                        Comenzar Quiz
                      </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Actividad 2: Juego interactivo */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200"
                      aria-expanded="false"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <Zap className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Juego: Clasificador de basura</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Interactivo • 20 min</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Duración: 20 minutos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" aria-hidden="true" />
                          ))}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">Medio</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                          <span className="text-gray-600 dark:text-gray-400">856 jugadores</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                          <span className="text-gray-600 dark:text-gray-400">+200 puntos</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Arrastra y suelta diferentes objetos en los contenedores correctos. 
                        Recibe retroalimentación inmediata y compite con otros estudiantes.
                      </p>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                        <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                        Jugar Ahora
                      </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Desafío del día */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700 text-white p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Desafío del día</h4>
                        <p className="text-emerald-100 text-sm">Separa 5 tipos de residuos en casa</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-100 text-sm">Recompensa</p>
                      <p className="font-bold">+50 pts</p>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    Aceptar Desafío
                  </Button>
                </div>
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
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 sm:p-8">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}