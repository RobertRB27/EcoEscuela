'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  FileText, 
  Image, 
  BookOpen,
  Search,
  Filter,
  Eye,
  Heart,
  Share2,
  Calendar,
  User,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Recurso {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'PDF' | 'Infografía' | 'Guía' | 'Presentación';
  categoria: string;
  tamaño: string;
  descargas: number;
  valoracion: number;
  fechaPublicacion: string;
  autor: string;
  imagen: string;
  idioma: string;
  paginas?: number;
  premium: boolean;
}

export function RecursosDescargables() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [recursoDescargado, setRecursoDescargado] = useState<string | null>(null);
  const [detallesExpandidos, setDetallesExpandidos] = useState<Record<string, boolean>>({});

  const recursos: Recurso[] = [
    {
      id: '1',
      titulo: 'Guía Completa de Reciclaje Doméstico',
      descripcion: 'Manual completo de 24 páginas con instrucciones paso a paso para implementar un sistema de reciclaje eficiente en casa. Incluye: clasificación por colores de contenedores, tabla de materiales reciclables, calendario de recolección, consejos para reducir residuos y proyectos DIY con materiales reciclados.',
      tipo: 'PDF',
      categoria: 'Reciclaje',
      tamaño: '2.5 MB',
      descargas: 15420,
      valoracion: 4.8,
      fechaPublicacion: '2025-01-10',
      autor: 'Dra. María Fernández - Especialista en Gestión de Residuos',
      imagen: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 24,
      premium: false
    },
    {
      id: '2',
      titulo: 'Infografía: Energías Renovables 2025',
      descripcion: 'Infografía educativa de alta resolución que presenta el estado actual de las energías renovables a nivel mundial. Contiene: mapas interactivos de instalaciones, gráficos comparativos de eficiencia, línea de tiempo de innovaciones tecnológicas, estadísticas de inversión por país, y proyecciones hasta 2030.',
      tipo: 'Infografía',
      categoria: 'Energía',
      tamaño: '8.2 MB',
      descargas: 8930,
      valoracion: 4.9,
      fechaPublicacion: '2025-01-08',
      autor: 'Instituto de Energías Renovables - Universidad Tecnológica',
      imagen: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop',
      idioma: 'Español/Inglés',
      premium: false
    },
    {
      id: '3',
      titulo: 'Plan de Acción Climática Personal',
      descripcion: 'Plantilla interactiva de 16 páginas para desarrollar tu estrategia personal contra el cambio climático. Incluye: calculadora de huella de carbono, metas SMART mensuales, tracker de progreso, lista de 50 acciones específicas, enlaces a herramientas digitales y comunidades locales de acción climática.',
      tipo: 'Guía',
      categoria: 'Clima',
      tamaño: '1.8 MB',
      descargas: 12100,
      valoracion: 4.7,
      fechaPublicacion: '2025-01-05',
      autor: 'Dr. Carlos Mendoza - Especialista en Políticas Climáticas',
      imagen: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 16,
      premium: false
    },
    {
      id: '4',
      titulo: 'Kit de Educación Ambiental para Docentes',
      descripcion: 'Paquete educativo integral de 85 páginas diseñado para educadores de primaria y secundaria. Contiene: 12 presentaciones PowerPoint, 25 actividades prácticas, 8 experimentos científicos, rúbricas de evaluación, guías de discusión grupal, recursos multimedia y enlaces a videos educativos. Alineado con estándares curriculares internacionales.',
      tipo: 'Presentación',
      categoria: 'Educación',
      tamaño: '45.2 MB',
      descargas: 5670,
      valoracion: 4.9,
      fechaPublicacion: '2025-01-03',
      autor: 'Red Internacional de Educadores Ambientales - UNESCO',
      imagen: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 85,
      premium: true
    },
    {
      id: '5',
      titulo: 'Calendario Ambiental 2025',
      descripcion: 'Calendario anual interactivo de 12 páginas con enfoque educativo ambiental. Incluye: fechas clave (Día de la Tierra, Semana del Medio Ambiente), datos curiosos mensuales, desafíos familiares, recetas eco-friendly estacionales, actividades para cada época del año y QR codes que conectan a recursos adicionales online.',
      tipo: 'PDF',
      categoria: 'Sostenibilidad',
      tamaño: '12.5 MB',
      descargas: 9840,
      valoracion: 4.6,
      fechaPublicacion: '2024-12-28',
      autor: 'Fundación EcoVida - Especialistas en Educación Familiar',
      imagen: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 12,
      premium: false
    },
    {
      id: '6',
      titulo: 'Biodiversidad: Atlas Visual Interactivo',
      descripcion: 'Atlas digital premium de biodiversidad mundial con más de 200 especies documentadas. Contiene: fichas detalladas de animales en peligro, mapas de biodiversidad por continente, casos de éxito en conservación, fotografías de alta calidad, datos de población actualizada y enlaces a programas de adopción simbólica de especies.',
      tipo: 'Infografía',
      categoria: 'Biodiversidad',
      tamaño: '25.8 MB',
      descargas: 7230,
      valoracion: 4.8,
      fechaPublicacion: '2024-12-25',
      autor: 'WWF International - Departamento de Educación y Conservación',
      imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      idioma: 'Español/Inglés',
      premium: true
    },
    {
      id: '7',
      titulo: 'Manual de Huertos Urbanos Sostenibles',
      descripcion: 'Guía práctica de 32 páginas para crear y mantener huertos en espacios urbanos reducidos. Incluye: selección de plantas por clima, técnicas de compostaje casero, sistemas de riego eficiente, control natural de plagas, calendario de siembra anual y recetas con productos cosechados. Ideal para balcones, terrazas y patios pequeños.',
      tipo: 'PDF',
      categoria: 'Agricultura',
      tamaño: '4.2 MB',
      descargas: 11200,
      valoracion: 4.7,
      fechaPublicacion: '2025-01-12',
      autor: 'Ing. Ana Botánica - Especialista en Agricultura Urbana',
      imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 32,
      premium: false
    },
    {
      id: '8',
      titulo: 'Guía de Construcción Sostenible',
      descripcion: 'Manual técnico de 45 páginas sobre materiales y técnicas de construcción ecológica. Contiene: materiales alternativos (bambú, adobe, materiales reciclados), técnicas de aislamiento natural, sistemas de captación de agua lluvia, energía solar básica para hogares, normativas ambientales de construcción y presupuestos comparativos.',
      tipo: 'Guía',
      categoria: 'Construcción',
      tamaño: '6.8 MB',
      descargas: 6450,
      valoracion: 4.5,
      fechaPublicacion: '2025-01-01',
      autor: 'Arq. Roberto Eco - Certificado en Construcción Verde',
      imagen: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 45,
      premium: true
    }
  ];

  const categorias = ['Todas', 'Reciclaje', 'Energía', 'Clima', 'Educación', 'Sostenibilidad', 'Biodiversidad', 'Agricultura', 'Construcción'];

  const recursosFiltrados = recursos.filter(recurso => {
    const coincideBusqueda = recurso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                            recurso.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
                            recurso.autor.toLowerCase().includes(busqueda.toLowerCase());
    
    const coincideCategoria = categoriaSeleccionada === 'Todas' || recurso.categoria === categoriaSeleccionada;
    
    return coincideBusqueda && coincideCategoria;
  });

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'PDF':
        return FileText;
      case 'Infografía':
        return Image;
      case 'Guía':
        return BookOpen;
      case 'Presentación':
        return FileText;
      default:
        return FileText;
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'PDF':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'Infografía':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Guía':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Presentación':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Reciclaje':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Energía':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'Clima':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Educación':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Sostenibilidad':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300';
      case 'Biodiversidad':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
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

  const formatearDescargas = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const manejarDescarga = (recurso: Recurso) => {
    if (recurso.premium) {
      alert(`"${recurso.titulo}" es un recurso premium. Por favor, registrate para acceder a contenido exclusivo.`);
      return;
    }

    // Simular descarga
    setRecursoDescargado(recurso.id);
    setTimeout(() => {
      setRecursoDescargado(null);
      alert(`¡"${recurso.titulo}" se ha descargado exitosamente!`);
    }, 2000);
  };

  const toggleDetalles = (recursoId: string) => {
    setDetallesExpandidos(prev => ({
      ...prev,
      [recursoId]: !prev[recursoId]
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Recursos Descargables
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Accede a nuestra biblioteca de guías, infografías y materiales educativos sobre medio ambiente y sostenibilidad
        </p>
      </div>

      {/* Búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <Input
            placeholder="Buscar recursos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Categoría:</span>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2">
        {categorias.map((categoria) => (
          <Button
            key={categoria}
            variant={categoriaSeleccionada === categoria ? "default" : "outline"}
            size="sm"
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={
              categoriaSeleccionada === categoria 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
            }
          >
            {categoria}
          </Button>
        ))}
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Recursos Disponibles</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{recursos.length}</p>
              </div>
              <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Especialistas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12+</p>
              </div>
              <User className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>


      </div>

      {/* Alertas informativas */}
      {recursoDescargado && (
        <Alert className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
          <Download className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <AlertDescription className="text-emerald-800 dark:text-emerald-200">
            Descargando recurso... Por favor espera.
          </AlertDescription>
        </Alert>
      )}

      {/* Grid de recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recursosFiltrados.map((recurso) => {
          const TipoIcon = getTipoIcon(recurso.tipo);
          const mostrarDetalles = detallesExpandidos[recurso.id];
          
          return (
            <Card key={recurso.id} className="eco-card group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Imagen de preview */}
              <div className="relative overflow-hidden">
                <img
                  src={recurso.imagen}
                  alt={`Preview de ${recurso.titulo}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges superiores */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge className={getTipoColor(recurso.tipo)}>
                    <TipoIcon className="mr-1 h-3 w-3" aria-hidden="true" />
                    {recurso.tipo}
                  </Badge>
                  {recurso.premium && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Valoración */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" aria-hidden="true" />
                  <span className="text-xs font-semibold">{recurso.valoracion}</span>
                </div>

                {/* Botón de descarga hover */}
              {/* Información detallada del recurso */}
              <div className="space-y-3 mb-4">
                {/* Contenido y características */}
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-emerald-600" aria-hidden="true" />
                    Contenido incluido:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {recurso.descripcion.split('.').slice(1, 2).join('.').trim() || 'Contenido educativo especializado'}
                  </p>
                </div>

                    {/* Información del autor */}
                    <div className="flex items-start space-x-2 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-medium text-emerald-800 dark:text-emerald-200">
                          {recurso.autor.split(' - ')[0]}
                        </p>
                        {recurso.autor.includes(' - ') && (
                          <p className="text-xs text-emerald-600 dark:text-emerald-400">
                            {recurso.autor.split(' - ')[1]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Botón de más detalles */}
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleDetalles(recurso.id)}
                    className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 p-2 text-xs"
                  >
                    {mostrarDetalles ? (
                      <>
                        <ChevronUp className="mr-1 h-3 w-3" aria-hidden="true" />
                        Menos detalles
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-1 h-3 w-3" aria-hidden="true" />
                        Más detalles
                      </>
                    )}
                  </Button>
                </div>

                {/* Acciones */}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mensaje si no hay resultados */}
      {recursosFiltrados.length === 0 && (
        <Card className="eco-card">
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron recursos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente.
            </p>
            <Button
              onClick={() => {
                setBusqueda('');
                setCategoriaSeleccionada('Todas');
              }}
              variant="outline"
            >
              Limpiar filtros
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Call to Action */}
      <Card className="eco-card bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            ¿Necesitas algún recurso específico?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Si no encuentras lo que buscas, contáctanos y trabajaremos en crear el recurso 
            educativo que necesitas para tu proyecto o clase.
          </p>
          <Button className="eco-button">
            Solicitar Recurso
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        {recurso.autor.split(' - ')[1]}
                      </p>
                    )}
                  </div>
                </div>
              </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                    onClick={() => manejarDescarga(recurso)}
                    disabled={recursoDescargado === recurso.id}
                  >
                    {recursoDescargado === recurso.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Descargando...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        Descargar
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge className={getCategoriaColor(recurso.categoria)}>
                    {recurso.categoria}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  {recurso.titulo}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                  {mostrarDetalles 
                    ? recurso.descripcion 
                    : `${recurso.descripcion.substring(0, 120)}${recurso.descripcion.length > 120 ? '...' : ''}`
                  }
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Información del archivo */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" aria-hidden="true" />
                    <span>{recurso.tamaño}</span>
                  </div>
                  {recurso.paginas && (
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-3 w-3" aria-hidden="true" />
                      <span>{recurso.paginas} páginas</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" aria-hidden="true" />
                    <span>{formatearDescargas(recurso.descargas)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" aria-hidden="true" />
                    <span>{recurso.idioma}</span>
                  </div>
                </div>

                {/* Información básica del autor y fecha */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" aria-hidden="true" />
                      <span className="truncate">{recurso.autor.split(' - ')[0]}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      <span>{formatearFecha(recurso.fechaPublicacion)}</span>
                    </div>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 eco-button"
                    onClick={() => manejarDescarga(recurso)}
                    disabled={recursoDescargado === recurso.id}
                  >
                    {recursoDescargado === recurso.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Descargando...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        Descargar
                {/* Información detallada (desplegable) */}
                {mostrarDetalles && (
                  <div className="space-y-3 mb-4 animate-in slide-in-from-top-2 duration-300">
                    {/* Contenido y características */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-emerald-600" aria-hidden="true" />
                        Contenido incluido:
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {recurso.descripcion.split('.').slice(1, 2).join('.').trim() || 'Contenido educativo especializado'}
                      </p>
                    </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mensaje si no hay resultados */}
      {recursosFiltrados.length === 0 && (
        <Card className="eco-card">
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron recursos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente.
            </p>
            <Button
              onClick={() => {
                setBusqueda('');
                setCategoriaSeleccionada('Todas');
              }}
              variant="outline"
            >
              Limpiar filtros
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Call to Action */}
      <Card className="eco-card bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            ¿Necesitas algún recurso específico?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Si no encuentras lo que buscas, contáctanos y trabajaremos en crear el recurso 
            educativo que necesitas para tu proyecto o clase.
          </p>
          <Button className="eco-button">
            Solicitar Recurso
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}