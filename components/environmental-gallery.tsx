import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const environmentalImages = [
  {
    src: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=600&h=400&fit=crop&crop=center',
    alt: 'Grupo de jóvenes voluntarios plantando árboles en un parque comunitario',
    caption: 'Jóvenes plantando árboles',
    description: 'Construyendo un futuro más verde, árbol por árbol'
  },
  {
    src: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop&crop=center',
    alt: 'Voluntarios trabajando juntos para limpiar un río contaminado',
    caption: 'Voluntarios limpiando ríos',
    description: 'Protegiendo nuestras fuentes de vida'
  },
  {
    src: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop&crop=center',
    alt: 'Estudiantes separando materiales reciclables en contenedores de colores',
    caption: 'Estudiantes reciclando',
    description: 'Cada acción cuenta para nuestro planeta'
  },
  {
    src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center',
    alt: 'Comunidad local trabajando para proteger la biodiversidad en un bosque',
    caption: 'Comunidades protegiendo la biodiversidad',
    description: 'Unidos por la conservación de la naturaleza'
  }
];

export function EnvironmentalGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white" role="region" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Acciones que Transforman el Mundo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo personas de todas las edades están marcando la diferencia en la protección 
            del medio ambiente. Cada pequeña acción suma para crear un gran impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {environmentalImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2"
              role="article"
              aria-labelledby={`image-caption-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 id={`image-caption-${index}`} className="text-lg font-semibold text-gray-900 mb-2">
                  {image.caption}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 text-center">
          <blockquote className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-4xl mx-auto border-l-4 border-emerald-500">
            <p className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 italic">
              "No heredamos la Tierra de nuestros ancestros, la tomamos prestada de nuestros hijos."
            </p>
            <cite className="text-emerald-600 font-semibold">
              — Proverbio Nativo Americano
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}