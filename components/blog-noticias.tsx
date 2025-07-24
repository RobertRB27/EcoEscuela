'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { 
  Globe,
  Sun, 
  TreePine, 
  Wind, 
  Factory, 
  Droplets, 
  Recycle, 
  Leaf, 
  Rss, 
  Clock, 
  Search, 
  Filter, 
  TrendingUp, 
  Newspaper, 
  Calendar, 
  BookOpen, 
  Eye, 
  User,
  Users, 
  Heart, 
  Share2, 
  ExternalLink, 
  AlertCircle,
  Mail,
  Phone
} from 'lucide-react';

interface NoticiaAmbiental {
  id: string;
  titulo: string;
  fuente: string;
  fechaPublicacion: string;
  resumen: string;
  categoria: string;
  tiempoLectura: string;
  visualizaciones: number;
  likes: number;
  imagenUrl: string;
  url: string;
  destacada: boolean;
  idioma: string;
  autor?: string;
}

interface CategoriaNoticia {
  id: string;
  nombre: string;
  icono: React.ComponentType<any>;
  color: string;
}

export function BlogNoticias() {
  const [noticias, setNoticias] = useState<NoticiaAmbiental[]>([]);
  const [loading, setLoading] = useState(true);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todas');
  const [ultimaActualizacion, setUltimaActualizacion] = useState<Date>(new Date());

  const categoriasNoticias: CategoriaNoticia[] = [
    { id: 'todas', nombre: 'Todas', icono: Globe, color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' },
    { id: 'clima', nombre: 'Cambio Climático', icono: Sun, color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' },
    { id: 'conservacion', nombre: 'Conservación', icono: TreePine, color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' },
    { id: 'renovable', nombre: 'Energías Renovables', icono: Wind, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' },
    { id: 'contaminacion', nombre: 'Contaminación', icono: Factory, color: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' },
    { id: 'agua', nombre: 'Recursos Hídricos', icono: Droplets, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400' },
    { id: 'reciclaje', nombre: 'Reciclaje', icono: Recycle, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' },
    { id: 'sostenibilidad', nombre: 'Sostenibilidad', icono: Leaf, color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400' }
  ];

  // Simulación de feed RSS/API con noticias ambientales dinámicas
  const noticiasSimuladas: NoticiaAmbiental[] = [
    {
      id: '1',
      titulo: 'Récord histórico: Energía solar supera al carbón por primera vez a nivel mundial',
      fuente: 'Agencia Internacional de Energía Renovable',
      fechaPublicacion: '2025-01-16T08:30:00Z',
      resumen: 'La capacidad de energía solar instalada globalmente ha superado oficialmente a la del carbón, marcando un momento histórico en la transición energética mundial y acelerando el camino hacia la neutralidad de carbono.',
      categoria: 'renovable',
      tiempoLectura: '4 min',
      visualizaciones: 15420,
      likes: 892,
      imagenUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      url: '#',
      destacada: true,
      idioma: 'Español',
      autor: 'Dr. Elena Martínez'
    },
    {
      id: '2',
      titulo: 'Nueva tecnología de captura de carbono promete reducir emisiones industriales en un 40%',
      fuente: 'MIT Technology Review',
      fechaPublicacion: '2025-01-16T06:15:00Z',
      resumen: 'Científicos del MIT desarrollan una innovadora tecnología que puede capturar CO2 directamente del aire de instalaciones industriales y convertirlo en combustibles útiles, representando un avance significativo en la lucha contra el cambio climático.',
      categoria: 'clima',
      tiempoLectura: '6 min',
      visualizaciones: 12080,
      likes: 654,
      imagenUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
      url: '#',
      destacada: true,
      idioma: 'Español',
      autor: 'Equipo de Investigación MIT'
    },
    {
      id: '3',
      titulo: 'Amazonas registra la menor deforestación en 15 años gracias a nuevas políticas de conservación',
      fuente: 'Instituto Nacional de Investigaciones Espaciales (INPE)',
      fechaPublicacion: '2025-01-15T14:45:00Z',
      resumen: 'Los datos satelitales revelan una reducción del 35% en la deforestación amazónica durante 2024, resultado de políticas ambientales más estrictas y programas de reforestación comunitaria implementados por los países de la cuenca amazónica.',
      categoria: 'conservacion',
      tiempoLectura: '5 min',
      visualizaciones: 9870,
      likes: 543,
      imagenUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'Dr. Carlos Nobre'
    },
    {
      id: '4',
      titulo: 'Microplásticos: Breakthrough en tecnología de filtración marina alcanza 99.9% de eficiencia',
      fuente: 'The Ocean Cleanup Foundation',
      fechaPublicacion: '2025-01-15T11:20:00Z',
      resumen: 'Investigadores holandeses presentan un sistema revolucionario capaz de filtrar microplásticos del agua marina con una eficiencia sin precedentes, ofreciendo esperanza para la limpieza de los océanos más contaminados del planeta.',
      categoria: 'contaminacion',
      tiempoLectura: '7 min',
      visualizaciones: 8430,
      likes: 478,
      imagenUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'Boyan Slat'
    },
    {
      id: '5',
      titulo: 'Europa lidera el mundo en ciudades carbono-neutrales con 50 urbes certificadas',
      fuente: 'Red Europea de Ciudades Sostenibles',
      fechaPublicacion: '2025-01-14T16:30:00Z',
      resumen: 'Barcelona, Copenhague y Ámsterdam encabezan la lista de ciudades europeas que han alcanzado la neutralidad de carbono, implementando modelos innovadores de urbanismo sostenible que incluyen transporte eléctrico, edificios verdes y gestión circular de residuos.',
      categoria: 'sostenibilidad',
      tiempoLectura: '5 min',
      visualizaciones: 7210,
      likes: 389,
      imagenUrl: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'Red de Ciudades Sostenibles'
    },
    {
      id: '6',
      titulo: 'Crisis hídrica global: Nuevas tecnologías de desalinización reducen costos en 60%',
      fuente: 'Instituto Mundial del Agua',
      fechaPublicacion: '2025-01-14T09:45:00Z',
      resumen: 'Avances tecnológicos en desalinización por ósmosis inversa y energía solar prometen agua potable más accesible y económica para las 2 mil millones de personas que carecen de acceso a agua limpia, especialmente en regiones áridas de África y Asia.',
      categoria: 'agua',
      tiempoLectura: '4 min',
      visualizaciones: 6850,
      likes: 321,
      imagenUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'Dr. Rajesh Patel'
    },
    {
      id: '7',
      titulo: 'Economía circular: Startup chilena convierte residuos plásticos en combustible de aviación',
      fuente: 'Mongabay Latam',
      fechaPublicacion: '2025-01-13T13:15:00Z',
      resumen: 'Una empresa emergente de Santiago desarrolla un proceso innovador que transforma desechos plásticos en combustible sostenible para aeronaves, cerrando el ciclo de vida del plástico y ofreciendo una alternativa limpia para la industria aeronáutica.',
      categoria: 'reciclaje',
      tiempoLectura: '6 min',
      visualizaciones: 5990,
      likes: 267,
      imagenUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'María José González'
    },
    {
      id: '8',
      titulo: 'Biodiversidad marina: Expedición científica descubre 30 nuevas especies en el Pacífico',
      fuente: 'National Geographic',
      fechaPublicacion: '2025-01-13T07:30:00Z',
      resumen: 'Una expedición internacional revela la increíble diversidad de vida marina en las profundidades inexploradas del Océano Pacífico, descubriendo especies únicas que podrían tener aplicaciones médicas y destacando la urgente necesidad de proteger estos ecosistemas.',
      categoria: 'conservacion',
      tiempoLectura: '8 min',
      visualizaciones: 11240,
      likes: 695,
      imagenUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      url: '#',
      destacada: false,
      idioma: 'Español',
      autor: 'Dra. Sylvia Earle'
    }
  ];

  // Simular carga de datos con efecto de loading
  useEffect(() => {
    const cargarNoticias = async () => {
      setLoading(true);
      
      // Simular delay de API/RSS feed
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular actualización diaria de contenido
      const hoy = new Date();
      const noticiasActualizadas = noticiasSimuladas.map(noticia => ({
        ...noticia,
        visualizaciones: noticia.visualizaciones + Math.floor(Math.random() * 200),
        likes: noticia.likes + Math.floor(Math.random() * 50)
      }));
      
      setNoticias(noticiasActualizadas);
      setUltimaActualizacion(hoy);
      setLoading(false);
    };

    cargarNoticias();
    
    // Simular actualizaciones periódicas
    const intervalo = setInterval(cargarNoticias, 300000); // 5 minutos
    
    return () => clearInterval(intervalo);
  }, []);

  // Filtrar noticias según búsqueda y categoría
  const noticiasFiltradas = noticias.filter(noticia => {
    const coincideBusqueda = noticia.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                             noticia.resumen.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                             noticia.fuente.toLowerCase().includes(terminoBusqueda.toLowerCase());
    
    const coincideCategoria = categoriaSeleccionada === 'todas' || noticia.categoria === categoriaSeleccionada;
    
    return coincideBusqueda && coincideCategoria;
  });

  const noticiasDestacadas = noticiasFiltradas.filter(noticia => noticia.destacada);
  const noticiasRegulares = noticiasFiltradas.filter(noticia => !noticia.destacada);

  const formatearFecha = (fechaString: string) => {
    const fecha = new Date(fechaString);
    const ahora = new Date();
    const diferenciaTiempo = Math.abs(ahora.getTime() - fecha.getTime());
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    if (diferenciaDias === 1) return 'Hace 1 día';
    if (diferenciaDias < 7) return `Hace ${diferenciaDias} días`;
    
    return fecha.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const obtenerInfoCategoria = (categoriaId: string) => {
    return categoriasNoticias.find(cat => cat.id === categoriaId) || categoriasNoticias[0];
  };

  const manejarLike = (noticiaId: string) => {
    setNoticias(prev => prev.map(noticia => 
      noticia.id === noticiaId 
        ? { ...noticia, likes: noticia.likes + 1 }
        : noticia
    ));
  };

  const manejarCompartir = (noticia: NoticiaAmbiental) => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.resumen,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${noticia.titulo} - ${window.location.href}`);
      alert('Enlace copiado al portapapeles');
    }
  };

  const abrirNoticia = (url: string) => {
    if (url === '#') {
      alert('Esta noticia es una demostración. En la versión real, se abriría el artículo completo.');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog Ambiental</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Mantente informado con las últimas noticias sobre medio ambiente y sostenibilidad
          </p>
        </div>

        {/* Loading Skeletons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="eco-card">
              <CardHeader>
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="eco-card">
              <CardHeader>
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog Ambiental</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Mantente informado con las últimas noticias sobre medio ambiente y sostenibilidad
        </p>
        <div className="flex items-center space-x-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <Rss className="h-4 w-4" aria-hidden="true" />
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>Última actualización: {ultimaActualizacion.toLocaleDateString('es-ES')} a las {ultimaActualizacion.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <Input
            placeholder="Buscar noticias ambientales..."
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            className="pl-10 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Filtrar por:</span>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2">
        {categoriasNoticias.map((categoria) => {
          const IconoComponente = categoria.icono;
          const estaActiva = categoriaSeleccionada === categoria.id;
          
          return (
            <Button
              key={categoria.id}
              variant={estaActiva ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              className={`${
                estaActiva 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
              } transition-all duration-200`}
            >
              <IconoComponente className="mr-2 h-4 w-4" aria-hidden="true" />
              {categoria.nombre}
            </Button>
          );
        })}
      </div>

      {/* Noticias Destacadas */}
      {noticiasDestacadas.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-emerald-600" aria-hidden="true" />
            Noticias Destacadas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {noticiasDestacadas.map((noticia) => {
              const infoCategoria = obtenerInfoCategoria(noticia.categoria);
              const IconoComponente = infoCategoria.icon;
              
              return (
                <Card key={noticia.id} className="eco-card group hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => abrirNoticia(noticia.url)}>
                  <div className="relative overflow-hidden">
                    <img
                      src={noticia.imagenUrl}
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 hover:bg-red-600 text-white">
                        Destacada
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={infoCategoria.color}>
                        <IconoComponente className="mr-1 h-3 w-3" aria-hidden="true" />
                        {infoCategoria.nombre}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center space-x-2">
                        <Newspaper className="h-4 w-4" aria-hidden="true" />
                        <span>{noticia.fuente}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{formatearFecha(noticia.fechaPublicacion)}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {noticia.titulo}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {noticia.resumen}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" aria-hidden="true" />
                          <span>{noticia.tiempoLectura}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" aria-hidden="true" />
                          <span>{noticia.visualizaciones.toLocaleString()}</span>
                        </div>
                        {noticia.autor && (
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" aria-hidden="true" />
                            <span>{noticia.autor}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            manejarLike(noticia.id);
                          }}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                        >
                          <Heart className="h-4 w-4 mr-1" aria-hidden="true" />
                          {noticia.likes}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            manejarCompartir(noticia);
                          }}
                          className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                        >
                          <Share2 className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            abrirNoticia(noticia.url);
                          }}
                        >
                          Leer más
                          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Noticias Regulares */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-emerald-600" aria-hidden="true" />
          Últimas Noticias
        </h2>
        
        {noticiasRegulares.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticiasRegulares.map((noticia) => {
              const infoCategoria = obtenerInfoCategoria(noticia.categoria);
              const IconoComponente = infoCategoria.icon;
              
              return (
                <Card key={noticia.id} className="eco-card group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => abrirNoticia(noticia.url)}>
                  <div className="relative overflow-hidden">
                    <img
                      src={noticia.imagenUrl}
                      alt={noticia.titulo}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={infoCategoria.color}>
                        <IconoComponente className="mr-1 h-3 w-3" aria-hidden="true" />
                        {infoCategoria.nombre}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>{noticia.fuente}</span>
                      <span>{formatearFecha(noticia.fechaPublicacion)}</span>
                    </div>
                    
                    <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {noticia.titulo}
                    </CardTitle>
                    
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {noticia.resumen}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <span>{noticia.tiempoLectura}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" aria-hidden="true" />
                          <span>{noticia.visualizaciones.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            manejarLike(noticia.id);
                          }}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200 p-1"
                        >
                          <Heart className="h-3 w-3" aria-hidden="true" />
                          <span className="ml-1 text-xs">{noticia.likes}</span>
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            manejarCompartir(noticia);
                          }}
                          className="text-gray-500 hover:text-blue-500 transition-colors duration-200 p-1"
                        >
                          <Share2 className="h-3 w-3" aria-hidden="true" />
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 hover:border-emerald-300 transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            abrirNoticia(noticia.url);
                          }}
                        >
                          Leer más
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="eco-card">
            <CardContent className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No se encontraron noticias
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Suscripción a newsletter */}
      <Card className="eco-card bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rss className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            ¡Mantente siempre informado!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín semanal y recibe las noticias ambientales más importantes 
            directamente en tu correo electrónico. ¡No te pierdas las últimas actualizaciones!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder="tu@email.com"
              className="flex-1 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Suscribirse
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Enviamos un máximo de 1 email por semana. Sin spam, solo contenido de calidad.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}