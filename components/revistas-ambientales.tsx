'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Calendar, 
  Globe,
  Eye,
  BookOpen,
  Leaf,
  Users,
  Star,
  ArrowRight
} from 'lucide-react';

interface Revista {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  url: string;
  categoria: string;
  popularidad: number;
  ultimaActualizacion: string;
  idioma: string;
  puntuacion: number;
}

export function RevistasAmbientales() {
  const revistas: Revista[] = [
    {
      id: '1',
      nombre: 'National Geographic - Medio Ambiente',
      descripcion: 'Explora historias fascinantes sobre conservación, cambio climático y biodiversidad con la calidad periodística de National Geographic.',
      imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      url: 'https://www.nationalgeographic.com/environment',
      categoria: 'Conservación',
      popularidad: 2800000,
      ultimaActualizacion: '2025-01-15',
      idioma: 'Español/Inglés',
      puntuacion: 4.9
    },
    {
      id: '2',
      nombre: 'Mongabay Latam',
      descripcion: 'Periodismo ambiental independiente enfocado en bosques tropicales, vida silvestre y comunidades indígenas de América Latina.',
      imagen: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      url: 'https://es.mongabay.com',
      categoria: 'Periodismo',
      popularidad: 450000,
      ultimaActualizacion: '2025-01-16',
      idioma: 'Español',
      puntuacion: 4.7
    },
    {
      id: '3',
      nombre: 'ONU Medio Ambiente',
      descripcion: 'Noticias oficiales, informes y iniciativas globales del Programa de las Naciones Unidas para el Medio Ambiente.',
      imagen: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop',
      url: 'https://www.unep.org/es',
      categoria: 'Institucional',
      popularidad: 1200000,
      ultimaActualizacion: '2025-01-14',
      idioma: 'Español',
      puntuacion: 4.6
    },
    {
      id: '4',
      nombre: 'WWF News',
      descripción: 'Últimas noticias sobre conservación de la naturaleza, especies en peligro y esfuerzos de protección ambiental mundial.',
      imagen: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
      url: 'https://www.worldwildlife.org/stories',
      categoria: 'Conservación',
      popularidad: 980000,
      ultimaActualizacion: '2025-01-15',
      idioma: 'Inglés',
      puntuacion: 4.8
    },
    {
      id: '5',
      nombre: 'Revista Ambiente',
      descripcion: 'Publicación científica y divulgativa sobre investigaciones ambientales, sostenibilidad y políticas públicas ecológicas.',
      imagen: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=400&h=300&fit=crop',
      url: '#',
      categoria: 'Científica',
      popularidad: 125000,
      ultimaActualizacion: '2025-01-12',
      idioma: 'Español',
      puntuacion: 4.4
    },
    {
      id: '6',
      nombre: 'Climate Central',
      descripcion: 'Organización independiente que analiza datos climáticos y comunica los impactos del cambio climático de forma accesible.',
      imagen: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=400&h=300&fit=crop',
      url: 'https://www.climatecentral.org',
      categoria: 'Ciencia',
      popularidad: 750000,
      ultimaActualizacion: '2025-01-16',
      idioma: 'Inglés',
      puntuacion: 4.5
    }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Conservación':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Periodismo':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Institucional':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Científica':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      case 'Ciencia':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatearPopularidad = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  const handleVisitar = (url: string, nombre: string) => {
    if (url === '#') {
      alert(`${nombre} - Próximamente disponible`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Revistas Ambientales
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Mantente informado con las mejores publicaciones sobre medio ambiente, conservación y sostenibilidad
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revistas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{revistas.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Idiomas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Lectores</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">6.3M+</p>
              </div>
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid de Revistas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {revistas.map((revista) => (
          <Card 
            key={revista.id} 
            className="eco-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            onClick={() => handleVisitar(revista.url, revista.nombre)}
          >
            {/* Imagen de portada */}
            <div className="relative overflow-hidden">
              <img
                src={revista.imagen}
                alt={`Portada de ${revista.nombre}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Badge de categoría */}
              <div className="absolute top-4 left-4">
                <Badge className={getCategoriaColor(revista.categoria)}>
                  {revista.categoria}
                </Badge>
              </div>

              {/* Puntuación */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" aria-hidden="true" />
                <span className="text-xs font-semibold">{revista.puntuacion}</span>
              </div>

              {/* Overlay hover con botón */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVisitar(revista.url, revista.nombre);
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  Visitar
                </Button>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {revista.nombre}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                {revista.descripcion}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" aria-hidden="true" />
                  <span>{formatearPopularidad(revista.popularidad)} lectores</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-3 w-3" aria-hidden="true" />
                  <span>{revista.idioma}</span>
                </div>
              </div>

              {/* Fecha de actualización */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  <span>Actualizado: {formatearFecha(revista.ultimaActualizacion)}</span>
                </div>
              </div>

              {/* Botón de acción */}
              <div className="mt-4">
                <Button 
                  className="w-full eco-button group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVisitar(revista.url, revista.nombre);
                  }}
                >
                  Leer Revista
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="eco-card bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            ¿Conoces alguna revista que debería estar aquí?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Ayúdanos a expandir nuestra colección de recursos ambientales recomendando 
            publicaciones de calidad que promuevan la educación y conciencia ecológica.
          </p>
          <Button className="eco-button">
            Sugerir Revista
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}