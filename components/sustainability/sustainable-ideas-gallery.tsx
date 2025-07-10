'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter,
  Heart,
  Share2,
  ExternalLink,
  Lightbulb,
  Home,
  Utensils,
  Car,
  Recycle,
  Droplets,
  Leaf,
  ShoppingBag,
  Zap
} from 'lucide-react';

interface SustainableIdea {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  timeToImplement: string;
  impact: string;
  likes: number;
  tags: string[];
  steps: string[];
}

export function SustainableIdeasGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [likedIdeas, setLikedIdeas] = useState<Set<string>>(new Set());

  const categories = [
    { name: 'Todas', icon: Lightbulb, color: 'text-gray-600' },
    { name: 'Hogar', icon: Home, color: 'text-blue-600' },
    { name: 'Alimentación', icon: Utensils, color: 'text-green-600' },
    { name: 'Transporte', icon: Car, color: 'text-purple-600' },
    { name: 'Residuos', icon: Recycle, color: 'text-emerald-600' },
    { name: 'Agua', icon: Droplets, color: 'text-cyan-600' },
    { name: 'Energía', icon: Zap, color: 'text-yellow-600' },
    { name: 'Compras', icon: ShoppingBag, color: 'text-pink-600' }
  ];

  const sustainableIdeas: SustainableIdea[] = [
    {
      id: '1',
      title: 'Jardín Vertical con Botellas Recicladas',
      description: 'Crea un hermoso jardín vertical usando botellas de plástico recicladas para cultivar hierbas y plantas pequeñas.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      category: 'Hogar',
      difficulty: 'Medio',
      timeToImplement: '2-3 horas',
      impact: 'Reduce residuos plásticos y mejora la calidad del aire',
      likes: 234,
      tags: ['DIY', 'Reciclaje', 'Plantas', 'Decoración'],
      steps: [
        'Recolecta botellas de plástico de 2L',
        'Corta ventanas rectangulares en las botellas',
        'Haz agujeros para drenaje en la parte inferior',
        'Monta las botellas en una estructura vertical',
        'Llena con tierra y planta hierbas o plantas pequeñas'
      ]
    },
    {
      id: '2',
      title: 'Compostaje Casero en Apartamento',
      description: 'Sistema de compostaje compacto perfecto para espacios pequeños que convierte residuos orgánicos en fertilizante.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      category: 'Residuos',
      difficulty: 'Fácil',
      timeToImplement: '30 minutos',
      impact: 'Reduce 30% de residuos domésticos',
      likes: 189,
      tags: ['Compost', 'Residuos orgánicos', 'Fertilizante'],
      steps: [
        'Consigue un contenedor con tapa',
        'Haz agujeros para ventilación',
        'Agrega capas de residuos orgánicos y material seco',
        'Mezcla regularmente',
        'Usa el compost en 2-3 meses'
      ]
    },
    {
      id: '3',
      title: 'Productos de Limpieza Naturales',
      description: 'Recetas simples para hacer productos de limpieza efectivos usando ingredientes naturales y seguros.',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
      category: 'Hogar',
      difficulty: 'Fácil',
      timeToImplement: '15 minutos',
      impact: 'Elimina químicos tóxicos del hogar',
      likes: 156,
      tags: ['Limpieza', 'Natural', 'Salud', 'Económico'],
      steps: [
        'Mezcla vinagre blanco con agua para limpiavidrios',
        'Combina bicarbonato con limón para desinfectar',
        'Usa aceites esenciales para aromatizar',
        'Guarda en botellas reutilizadas',
        'Etiqueta cada producto claramente'
      ]
    },
    {
      id: '4',
      title: 'Huerto de Hierbas en la Cocina',
      description: 'Cultiva hierbas frescas en tu cocina usando contenedores reciclados y luz natural.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      category: 'Alimentación',
      difficulty: 'Fácil',
      timeToImplement: '1 hora',
      impact: 'Reduce compras y empaque de hierbas',
      likes: 298,
      tags: ['Hierbas', 'Cocina', 'Cultivo', 'Fresco'],
      steps: [
        'Elige contenedores con buen drenaje',
        'Selecciona hierbas fáciles como albahaca y perejil',
        'Coloca cerca de una ventana con luz',
        'Riega regularmente pero sin encharcar',
        'Cosecha regularmente para estimular crecimiento'
      ]
    },
    {
      id: '5',
      title: 'Sistema de Recolección de Agua de Lluvia',
      description: 'Instala un sistema simple para recolectar agua de lluvia y usarla para regar plantas.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'Agua',
      difficulty: 'Medio',
      timeToImplement: '2 horas',
      impact: 'Ahorra hasta 50L de agua por lluvia',
      likes: 167,
      tags: ['Agua', 'Lluvia', 'Riego', 'Ahorro'],
      steps: [
        'Instala canaletas en el techo',
        'Conecta un barril o contenedor grande',
        'Agrega un filtro básico',
        'Instala una llave en la parte inferior',
        'Cubre para evitar mosquitos'
      ]
    },
    {
      id: '6',
      title: 'Bolsas Reutilizables de Camisetas Viejas',
      description: 'Transforma camisetas viejas en bolsas de compras resistentes sin necesidad de coser.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      category: 'Compras',
      difficulty: 'Fácil',
      timeToImplement: '10 minutos',
      impact: 'Evita uso de bolsas plásticas',
      likes: 203,
      tags: ['Reutilización', 'Bolsas', 'DIY', 'Compras'],
      steps: [
        'Corta las mangas de la camiseta',
        'Corta el cuello para hacer la abertura',
        'Haz flecos en la parte inferior',
        'Ata los flecos para cerrar el fondo',
        'Refuerza los nudos para mayor resistencia'
      ]
    },
    {
      id: '7',
      title: 'Estación de Carga Solar Portátil',
      description: 'Crea una estación de carga para dispositivos usando un panel solar pequeño y una batería.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      category: 'Energía',
      difficulty: 'Difícil',
      timeToImplement: '3-4 horas',
      impact: 'Reduce dependencia de electricidad de red',
      likes: 145,
      tags: ['Solar', 'Energía', 'Tecnología', 'Portátil'],
      steps: [
        'Consigue un panel solar pequeño (10-20W)',
        'Conecta a un controlador de carga',
        'Agrega una batería recargable',
        'Instala puertos USB para carga',
        'Monta todo en una caja resistente'
      ]
    },
    {
      id: '8',
      title: 'Meal Prep Sostenible',
      description: 'Planifica y prepara comidas semanales para reducir desperdicios y usar ingredientes locales.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      category: 'Alimentación',
      difficulty: 'Medio',
      timeToImplement: '2 horas/semana',
      impact: 'Reduce desperdicio de comida en 40%',
      likes: 276,
      tags: ['Meal prep', 'Planificación', 'Desperdicio', 'Local'],
      steps: [
        'Planifica menús semanales',
        'Compra ingredientes locales y de temporada',
        'Prepara porciones en contenedores reutilizables',
        'Congela porciones extras',
        'Usa sobras creativamente'
      ]
    }
  ];

  const filteredIdeas = sustainableIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todas' || idea.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleLike = (ideaId: string) => {
    setLikedIdeas(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(ideaId)) {
        newLiked.delete(ideaId);
      } else {
        newLiked.add(ideaId);
      }
      return newLiked;
    });
  };

  const handleShare = (idea: SustainableIdea) => {
    if (navigator.share) {
      navigator.share({
        title: idea.title,
        text: idea.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${idea.title} - ${idea.description}`);
      alert('Idea copiada al portapapeles');
    }
  };

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
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
            <Lightbulb className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              Galería de Ideas Sostenibles
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Proyectos prácticos para un estilo de vida más sostenible
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
            <Input
              placeholder="Buscar ideas sostenibles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.name;
            
            return (
              <Button
                key={category.name}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`${
                  isActive 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                    : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                } transition-all duration-200`}
              >
                <IconComponent className={`mr-2 h-4 w-4 ${isActive ? 'text-white' : category.color}`} aria-hidden="true" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Grid de ideas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => {
            const isLiked = likedIdeas.has(idea.id);
            
            return (
              <Card key={idea.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getDifficultyColor(idea.difficulty)}>
                      {idea.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 text-gray-800">
                      {idea.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                    {idea.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {idea.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Información rápida */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <div>
                      <span className="font-medium">Tiempo:</span> {idea.timeToImplement}
                    </div>
                    <div>
                      <span className="font-medium">Impacto:</span> {idea.impact}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {idea.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {idea.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{idea.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleLike(idea.id)}
                        className={`flex items-center space-x-1 text-sm transition-colors duration-200 ${
                          isLiked 
                            ? 'text-red-500 hover:text-red-600' 
                            : 'text-gray-500 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} aria-hidden="true" />
                        <span>{idea.likes + (isLiked ? 1 : 0)}</span>
                      </button>
                      
                      <button
                        onClick={() => handleShare(idea)}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200"
                      >
                        <Share2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>

                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Ver pasos
                      <ExternalLink className="ml-2 h-3 w-3" aria-hidden="true" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron ideas
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente.
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            ¿Tienes una idea sostenible?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Comparte tus proyectos con la comunidad y ayuda a otros a vivir de manera más sostenible.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Lightbulb className="mr-2 h-4 w-4" aria-hidden="true" />
            Compartir mi idea
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}