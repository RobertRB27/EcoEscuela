'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Lightbulb, 
  Car, 
  Recycle,
  Utensils,
  Home,
  ShoppingBag,
  Leaf
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Habit {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  tips: string[];
  impact: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  category: string;
}

export function DailyHabitsAccordion() {
  const habits: Habit[] = [
    {
      id: 'water-conservation',
      title: 'Conservación del Agua',
      description: 'Reduce tu consumo de agua con pequeños cambios diarios',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
      tips: [
        'Cierra el grifo mientras te cepillas los dientes',
        'Toma duchas más cortas (máximo 5 minutos)',
        'Repara las fugas inmediatamente',
        'Usa la lavadora y lavavajillas solo con carga completa',
        'Recoge agua de lluvia para regar las plantas'
      ],
      impact: 'Ahorra hasta 200 litros de agua por día',
      difficulty: 'Fácil',
      category: 'Hogar'
    },
    {
      id: 'energy-saving',
      title: 'Ahorro de Energía',
      description: 'Reduce tu consumo energético y las emisiones de CO2',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      tips: [
        'Cambia a bombillas LED',
        'Desconecta aparatos electrónicos cuando no los uses',
        'Usa la luz natural siempre que sea posible',
        'Ajusta el termostato 1-2 grados',
        'Seca la ropa al aire libre en lugar de usar secadora'
      ],
      impact: 'Reduce hasta 30% tu factura eléctrica',
      difficulty: 'Fácil',
      category: 'Energía'
    },
    {
      id: 'sustainable-transport',
      title: 'Transporte Sostenible',
      description: 'Opciones de movilidad que cuidan el medio ambiente',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      tips: [
        'Camina o usa bicicleta para distancias cortas',
        'Usa transporte público cuando sea posible',
        'Comparte viajes con amigos o familiares',
        'Planifica tus salidas para hacer múltiples tareas',
        'Considera vehículos eléctricos o híbridos'
      ],
      impact: 'Reduce 2.3 kg de CO2 por cada 10 km no conducidos',
      difficulty: 'Medio',
      category: 'Transporte'
    },
    {
      id: 'waste-reduction',
      title: 'Reducción de Residuos',
      description: 'Minimiza la cantidad de basura que generas',
      icon: Recycle,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop',
      tips: [
        'Usa bolsas reutilizables para las compras',
        'Evita productos con exceso de empaque',
        'Repara objetos en lugar de desecharlos',
        'Dona o vende cosas que ya no uses',
        'Compostea residuos orgánicos'
      ],
      impact: 'Reduce hasta 500 kg de residuos al año',
      difficulty: 'Medio',
      category: 'Residuos'
    },
    {
      id: 'sustainable-eating',
      title: 'Alimentación Sostenible',
      description: 'Elige alimentos que respeten el planeta',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
      tips: [
        'Consume más frutas y verduras locales',
        'Reduce el consumo de carne procesada',
        'Evita el desperdicio de alimentos',
        'Elige productos orgánicos cuando sea posible',
        'Cultiva tus propias hierbas y vegetales'
      ],
      impact: 'Reduce 73% las emisiones relacionadas con alimentación',
      difficulty: 'Medio',
      category: 'Alimentación'
    },
    {
      id: 'green-home',
      title: 'Hogar Verde',
      description: 'Convierte tu casa en un espacio más sostenible',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
      tips: [
        'Usa productos de limpieza ecológicos',
        'Instala plantas purificadoras de aire',
        'Mejora el aislamiento de tu hogar',
        'Usa materiales reciclados en decoración',
        'Implementa un sistema de compostaje'
      ],
      impact: 'Mejora 40% la calidad del aire interior',
      difficulty: 'Difícil',
      category: 'Hogar'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Difícil':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center">
            <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              Hábitos Sostenibles Diarios
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Pequeños cambios que generan un gran impacto ambiental
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {habits.map((habit) => {
            const IconComponent = habit.icon;
            return (
              <AccordionItem 
                key={habit.id} 
                value={habit.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {habit.title}
                        </h3>
                        <Badge className={getDifficultyColor(habit.difficulty)}>
                          {habit.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {habit.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                    {/* Imagen */}
                    <div className="relative">
                      <img
                        src={habit.image}
                        alt={`Imagen ilustrativa de ${habit.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {habit.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" aria-hidden="true" />
                          Consejos prácticos
                        </h4>
                        <ul className="space-y-2">
                          {habit.tips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {tip}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center">
                            <Leaf className="h-4 w-4 mr-2" aria-hidden="true" />
                            Impacto ambiental
                          </h4>
                          <p className="text-sm text-emerald-800 dark:text-emerald-200">
                            {habit.impact}
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                            💡 ¿Sabías que...?
                          </h4>
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            {habit.category === 'Hogar' && 'Los hogares consumen el 29% de la energía global. Pequeños cambios pueden marcar una gran diferencia.'}
                            {habit.category === 'Energía' && 'La iluminación LED usa 75% menos energía que las bombillas incandescentes tradicionales.'}
                            {habit.category === 'Transporte' && 'El transporte representa el 24% de las emisiones globales de CO2 relacionadas con la energía.'}
                            {habit.category === 'Residuos' && 'Cada persona genera aproximadamente 2 kg de residuos por día. ¡Podemos reducir esta cifra!'}
                            {habit.category === 'Alimentación' && 'La producción de alimentos es responsable del 26% de las emisiones globales de gases de efecto invernadero.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}