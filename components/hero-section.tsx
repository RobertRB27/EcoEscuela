import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, BookOpen, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-emerald-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Educación Ambiental
                <span className="block text-emerald-600">para Todos</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Descubre recursos educativos accesibles e inclusivos para aprender sobre el medio ambiente, 
                la sostenibilidad y cómo podemos cuidar nuestro planeta juntos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 group"
                aria-describedby="cta-description"
              >
                Comienza ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-6 text-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
              >
                Explorar recursos
              </Button>
            </div>

            <div id="cta-description" className="sr-only">
              Inicia tu viaje de aprendizaje ambiental con nuestros recursos educativos accesibles
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Recursos educativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">10k+</div>
                <div className="text-sm sm:text-base text-gray-600">Estudiantes activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm sm:text-base text-gray-600">Accesible</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative z-10">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-md">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sostenibilidad</h3>
                    <p className="text-sm text-gray-600">Aprende sobre el cuidado del planeta</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Educación</h3>
                    <p className="text-sm text-gray-600">Recursos pedagógicos inclusivos</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comunidad</h3>
                    <p className="text-sm text-gray-600">Conecta con otros educadores</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}