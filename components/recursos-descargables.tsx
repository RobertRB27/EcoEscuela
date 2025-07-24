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
  CheckCircle
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

  const recursos: Recurso[] = [
    {
      id: '1',
      titulo: 'Guía Completa de Reciclaje Doméstico',
      descripcion: 'Manual práctico con instrucciones detalladas para separar y reciclar residuos en el hogar, incluyendo consejos específicos por tipo de material.',
      tipo: 'PDF',
      categoria: 'Reciclaje',
      tamaño: '2.5 MB',
      descargas: 15420,
      valoracion: 4.8,
      fechaPublicacion: '2025-01-10',
      autor: 'Dra. María Ecológica',
      imagen: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 24,
      premium: false
    },
    {
      id: '2',
      titulo: 'Infografía: Energías Renovables 2025',
      descripcion: 'Visualización completa del panorama actual de las energías renovables, con estadísticas globales, tecnologías emergentes y proyecciones futuras.',
      tipo: 'Infografía',
      categoria: 'Energía',
      tamaño: '8.2 MB',
      descargas: 8930,
      valoracion: 4.9,
      fechaPublicacion: '2025-01-08',
      autor: 'Equipo EcoEscuela',
      imagen: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop',
      idioma: 'Español/Inglés',
      premium: false
    },
    {
      id: '3',
      titulo: 'Plan de Acción Climática Personal',
      descripcion: 'Template editable para crear tu propio plan de reducción de huella de carbono, con metas mensuales, seguimiento y consejos prácticos.',
      tipo: 'Guía',
      categoria: 'Clima',
      tamaño: '1.8 MB',
      descargas: 12100,
      valoracion: 4.7,
      fechaPublicacion: '2025-01-05',
      autor: 'Dr. Carlos Verde',
      imagen: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 16,
      premium: false
    },
    {
      id: '4',
      titulo: 'Kit de Educación Ambiental para Docentes',
      descripcion: 'Conjunto completo de recursos educativos: presentaciones, actividades, juegos y evaluaciones para enseñar sostenibilidad en el aula.',
      tipo: 'Presentación',
      categoria: 'Educación',
      tamaño: '45.2 MB',
      descargas: 5670,
      valoracion: 4.9,
      fechaPublicacion: '2025-01-03',
      autor: 'Red de Educadores Ambientales',
      imagen: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 85,
      premium: true
    },
    {
      id: '5',
      titulo: 'Calendario Ambiental 2025',
      descripcion: 'Calendario imprimible con fechas importantes del medio ambiente, consejos mensuales y desafíos sostenibles para todo el año.',
      tipo: 'PDF',
      categoria: 'Sostenibilidad',
      tamaño: '12.5 MB',
      descargas: 9840,
      valoracion: 4.6,
      fechaPublicacion: '2024-12-28',
      autor: 'Fundación EcoVida',
      imagen: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=200&fit=crop',
      idioma: 'Español',
      paginas: 12,
      premium: false
    },
    {
      id: '6',
      titulo: 'Biodiversidad: Atlas Visual Interactivo',
      descripcion: 'Guía visual de especies en peligro de extinción, ecosistemas amenazados y proyectos de conservación exitosos alrededor del mundo.',
      tipo: 'Infografía',
      categoria: 'Biodiversidad',
      tamaño: '25.8 MB',
      descargas: 7230,
      valoracion: 4.8,
      fechaPublicacion: '2024-12-25',
      autor: 'WWF Educational',
      imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      idioma: 'Español/Inglés',
      premium: true
    }
  ];

  // Inicializar recursos al cargar el componente
  React.useEffect(() => {
    setRecursos(recursosIniciales);
  }, []);

  const categorias = ['Todas', 'Reciclaje', 'Energía', 'Clima', 'Educación', 'Sostenibilidad', 'Biodiversidad'];

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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Recursos</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Descargas Totales</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">59K+</p>
              </div>
              <Download className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Valoración Promedio</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4.8</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Idiomas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              </div>
              <Eye className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
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
                  {recurso.descripcion}
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

                {/* Autor y fecha */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    <span>{recurso.autor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <span>{formatearFecha(recurso.fechaPublicacion)}</span>
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
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
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