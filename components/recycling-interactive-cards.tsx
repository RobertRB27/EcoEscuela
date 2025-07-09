'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Target, ChevronDown, ChevronRight, Trash2, PillBottle as Bottle, Newspaper, Battery, Lightbulb, Play, Clock, Users, Award, ArrowRight, PlayCircle, Star, Zap } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function RecyclingInteractiveCards() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openActivities, setOpenActivities] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleActivity = (activityId: string) => {
    setOpenActivities(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

  const recyclingMaterials = [
    {
      type: 'Plástico',
      color: 'bg-blue-500',
      icon: Bottle,
      items: ['Botellas PET', 'Envases de yogur', 'Bolsas plásticas', 'Tapas de botellas'],
      tip: 'Lava los envases antes de reciclar'
    },
    {
      type: 'Papel',
      color: 'bg-green-500',
      icon: Newspaper,
      items: ['Periódicos', 'Revistas', 'Cartón', 'Papel de oficina'],
      tip: 'Evita papel con cinta adhesiva'
    },
    {
      type: 'Vidrio',
      color: 'bg-emerald-500',
      icon: Lightbulb,
      items: ['Botellas', 'Frascos', 'Envases de vidrio'],
      tip: 'Retira tapas y etiquetas metálicas'
    },
    {
      type: 'Electrónicos',
      color: 'bg-purple-500',
      icon: Battery,
      items: ['Pilas', 'Celulares', 'Computadoras', 'Electrodomésticos'],
      tip: 'Lleva a puntos especializados'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Tarjeta 1: Guía Completa de Reciclaje */}
      <Card className="eco-card">
        <CardHeader>
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
            <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" aria-hidden="true" />
          </div>
          <CardTitle className="dark:text-white text-xl">Guía Completa de Reciclaje</CardTitle>
          <CardDescription className="dark:text-gray-400 text-responsive">
            Descubre cómo separar correctamente los residuos y contribuir al cuidado del medio ambiente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Desplegable 1: Separación de residuos */}
          <Collapsible 
            open={openSections.separation} 
            onOpenChange={() => toggleSection('separation')}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-4 h-auto bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200"
                aria-expanded={openSections.separation}
                aria-controls="separation-content"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">Separación de residuos</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aprende a clasificar correctamente</p>
                  </div>
                </div>
                {openSections.separation ? (
                  <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 transition-transform duration-200" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-green-600 dark:text-green-400 transition-transform duration-200" aria-hidden="true" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="separation-content"
              className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200"
            >
              <div className="pl-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-6 h-6 bg-green-500 rounded-full mb-2"></div>
                    <p className="text-sm font-medium">Orgánicos</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Restos de comida</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
                    <p className="text-sm font-medium">Reciclables</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Plástico, papel, vidrio</p>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium mb-1">💡 Consejo:</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Usa contenedores diferentes para cada tipo de residuo y etiquétalos claramente.
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Desplegable 2: Tipos de materiales reciclables */}
          <Collapsible 
            open={openSections.materials} 
            onOpenChange={() => toggleSection('materials')}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-4 h-auto bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                aria-expanded={openSections.materials}
                aria-controls="materials-content"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                    <Bottle className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">Tipos de materiales reciclables</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Colores e íconos por categoría</p>
                  </div>
                </div>
                {openSections.materials ? (
                  <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform duration-200" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform duration-200" aria-hidden="true" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="materials-content"
              className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200"
            >
              <div className="pl-4 space-y-3">
                {recyclingMaterials.map((material, index) => {
                  const IconComponent = material.icon;
                  return (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-6 h-6 ${material.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-3 w-3 text-white" aria-hidden="true" />
                        </div>
                        <p className="font-medium text-sm">{material.type}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-1 mb-2">
                        {material.items.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-xs text-gray-600 dark:text-gray-400">• {item}</p>
                        ))}
                      </div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        💡 {material.tip}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Desplegable 3: Proceso de reciclaje */}
          <Collapsible 
            open={openSections.process} 
            onOpenChange={() => toggleSection('process')}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-4 h-auto bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg transition-all duration-200"
                aria-expanded={openSections.process}
                aria-controls="process-content"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-800 rounded-lg flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">Proceso de reciclaje</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Infografía y video explicativo</p>
                  </div>
                </div>
                {openSections.process ? (
                  <ChevronDown className="h-5 w-5 text-yellow-600 dark:text-yellow-400 transition-transform duration-200" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-yellow-600 dark:text-yellow-400 transition-transform duration-200" aria-hidden="true" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="process-content"
              className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200"
            >
              <div className="pl-4 space-y-4">
                {/* Infografía del proceso */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-sm mb-3 text-gray-900 dark:text-white">Pasos del reciclaje:</h4>
                  <div className="space-y-2">
                    {[
                      { step: 1, text: 'Recolección y separación', icon: '🗂️' },
                      { step: 2, text: 'Limpieza y clasificación', icon: '🧽' },
                      { step: 3, text: 'Procesamiento y transformación', icon: '⚙️' },
                      { step: 4, text: 'Fabricación de nuevos productos', icon: '🏭' }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                        <span className="text-sm">{item.icon} {item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Video placeholder */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
                  <PlayCircle className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" aria-hidden="true" />
                  <p className="font-medium text-sm mb-1">Video: "El viaje del reciclaje"</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Duración: 5 minutos</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    <Play className="mr-2 h-3 w-3" aria-hidden="true" />
                    Ver video
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Button className="w-full mt-6 eco-button">
            <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
            Comenzar lección completa
          </Button>
        </CardContent>
      </Card>

      {/* Tarjeta 2: Actividades Prácticas */}
      <Card className="eco-card">
        <CardHeader>
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <CardTitle className="dark:text-white text-xl">Actividades Prácticas</CardTitle>
          <CardDescription className="dark:text-gray-400 text-responsive">
            Ejercicios interactivos para poner en práctica lo aprendido sobre reciclaje
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Actividad 1: Quiz */}
          <Collapsible 
            open={openActivities.quiz} 
            onOpenChange={() => toggleActivity('quiz')}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-4 h-auto bg-purple-50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
                aria-expanded={openActivities.quiz}
                aria-controls="quiz-content"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">Quiz: Separación de residuos</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pon a prueba tus conocimientos</p>
                  </div>
                </div>
                {openActivities.quiz ? (
                  <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-transform duration-200" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-transform duration-200" aria-hidden="true" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="quiz-content"
              className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200"
            >
              <div className="pl-4 space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                      <span className="text-sm">15 preguntas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                      <span className="text-sm">10 minutos</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Dificultad:</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                        {[4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-gray-300" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Puntos:</span>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-bold">+150 pts</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                  Comenzar Quiz
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Actividad 2: Juego interactivo */}
          <Collapsible 
            open={openActivities.game} 
            onOpenChange={() => toggleActivity('game')}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-4 h-auto bg-orange-50 dark:bg-orange-900/10 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-200"
                aria-expanded={openActivities.game}
                aria-controls="game-content"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-800 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">Juego: Clasificador de basura</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Arrastra y clasifica correctamente</p>
                  </div>
                </div>
                {openActivities.game ? (
                  <ChevronDown className="h-5 w-5 text-orange-600 dark:text-orange-400 transition-transform duration-200" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-orange-600 dark:text-orange-400 transition-transform duration-200" aria-hidden="true" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="game-content"
              className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200"
            >
              <div className="pl-4 space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                      <span className="text-sm">20 minutos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                      <span className="text-sm">Interactivo</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium mb-2">Características del juego:</p>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• Arrastra objetos a los contenedores correctos</li>
                      <li>• Recibe puntos por clasificaciones correctas</li>
                      <li>• Aprende con retroalimentación inmediata</li>
                      <li>• Compite con otros estudiantes</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                  Jugar ahora
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Desafío del día */}
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" aria-hidden="true" />
                <span className="font-semibold">Desafío del día</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+50 pts extra</span>
            </div>
            <p className="text-sm mb-3 text-emerald-100">
              Encuentra 5 objetos en tu casa que puedas reciclar y clasifícalos correctamente.
            </p>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Aceptar desafío
            </Button>
          </div>

          <Button className="w-full mt-4 eco-button">
            <Play className="mr-2 h-4 w-4" aria-hidden="true" />
            Ver todas las actividades
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}