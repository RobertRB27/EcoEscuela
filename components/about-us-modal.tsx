'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Leaf, BookOpen, Users, Target } from 'lucide-react';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Leaf className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Sobre EcoEscuela
              </DialogTitle>
              <DialogDescription className="text-emerald-600 font-medium">
                Educación Ambiental para Todos
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Main Description */}
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              EcoEscuela es una plataforma educativa digital dedicada a promover la conciencia ambiental y el desarrollo sostenible. Nuestro objetivo es brindar información actualizada, accesible y confiable sobre cómo cuidar el medio ambiente en la vida diaria. A través de guías educativas, actividades interactivas y herramientas prácticas, ofrecemos a estudiantes, docentes y comunidades los recursos necesarios para aprender, actuar y generar un impacto positivo. EcoEscuela fomenta una educación inclusiva y continua, conectando el conocimiento con la acción para proteger nuestro planeta de forma colaborativa y responsable.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Educación Accesible</h3>
                <p className="text-sm text-gray-600">Recursos diseñados para todos los niveles y capacidades de aprendizaje.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="h-4 w-4 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Comunidad Global</h3>
                <p className="text-sm text-gray-600">Conectamos educadores y estudiantes de todo el mundo.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Impacto Real</h3>
                <p className="text-sm text-gray-600">Herramientas prácticas para generar cambios positivos en el medio ambiente.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Target className="h-4 w-4 text-purple-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Objetivos Claros</h3>
                <p className="text-sm text-gray-600">Rutas de aprendizaje estructuradas con metas medibles.</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Democratizar la educación ambiental y hacer que el conocimiento sobre sostenibilidad sea accesible para todas las personas, sin importar su edad, ubicación o capacidades. Creemos que cada individuo tiene el poder de contribuir a la protección de nuestro planeta.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              ¿Listo para comenzar tu viaje de aprendizaje ambiental?
            </p>
            <button
              onClick={onClose}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
            >
              Explorar recursos
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}