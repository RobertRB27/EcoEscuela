'use client';

import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Leaf, 
  Globe, 
  Lightbulb,
  Shield,
  Target
} from 'lucide-react';
import { RegistrationForm } from '@/components/registration-form';

const benefits = [
  {
    icon: Heart,
    title: 'Educación Inclusiva',
    description: 'Recursos diseñados para todos los estudiantes, sin importar sus capacidades o necesidades especiales.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: BookOpen,
    title: 'Contenido Accesible',
    description: 'Materiales educativos adaptados con múltiples formatos: visual, auditivo y táctil.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Comunidad Colaborativa',
    description: 'Conecta con educadores y estudiantes de todo el mundo para compartir experiencias.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad Real',
    description: 'Aprende sobre prácticas ambientales que realmente impactan positivamente el planeta.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Globe,
    title: 'Perspectiva Global',
    description: 'Comprende los desafíos ambientales desde una perspectiva mundial e intercultural.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovación Educativa',
    description: 'Metodologías de enseñanza innovadoras que hacen el aprendizaje más efectivo y divertido.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Entorno Seguro',
    description: 'Plataforma segura y confiable para el aprendizaje, con moderación y protección de datos.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Target,
    title: 'Objetivos Claros',
    description: 'Rutas de aprendizaje estructuradas con metas claras y medibles para cada estudiante.',
    color: 'bg-orange-100 text-orange-600'
  }
];

export function BenefitsSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" role="region" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir EcoEscuela?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestros valores y beneficios están diseñados para crear un ambiente de aprendizaje 
            inclusivo, accesible y efectivo para todos los estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="h-full hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2"
                role="article"
                aria-labelledby={`benefit-title-${index}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <CardTitle id={`benefit-title-${index}`} className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto shadow-lg border border-emerald-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Únete a nuestra comunidad educativa
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Más de 10,000 educadores y estudiantes ya están transformando la educación ambiental. 
              ¿Te unes a nosotros?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Comenzar ahora
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </section>
  );
}