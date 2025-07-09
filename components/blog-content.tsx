'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  ExternalLink, 
  Search,
  Filter,
  Globe,
  Leaf,
  Droplets,
  Wind,
  Sun,
  Recycle,
  TreePine,
  Factory,
  Users,
  TrendingUp,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  AlertCircle
} from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  summary: string;
  category: string;
  readTime: string;
  views: number;
  likes: number;
  imageUrl: string;
  url: string;
  featured: boolean;
}

interface NewsCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

export function BlogContent() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const categories: NewsCategory[] = [
    { id: 'all', name: 'Todas', icon: Globe, color: 'bg-gray-100 text-gray-600' },
    { id: 'climate', name: 'Cambio Climático', icon: Sun, color: 'bg-orange-100 text-orange-600' },
    { id: 'conservation', name: 'Conservación', icon: TreePine, color: 'bg-green-100 text-green-600' },
    { id: 'renewable', name: 'Energías Renovables', icon: Wind, color: 'bg-blue-100 text-blue-600' },
    { id: 'pollution', name: 'Contaminación', icon: Factory, color: 'bg-red-100 text-red-600' },
    { id: 'water', name: 'Recursos Hídricos', icon: Droplets, color: 'bg-cyan-100 text-cyan-600' },
    { id: 'recycling', name: 'Reciclaje', icon: Recycle, color: 'bg-emerald-100 text-emerald-600' },
    { id: 'sustainability', name: 'Sostenibilidad', icon: Leaf, color: 'bg-teal-100 text-teal-600' }
  ];

  // Simulación de datos de noticias ambientales
  const mockNewsData: NewsArticle[] = [
    {
      id: '1',
      title: 'Nueva tecnología de captura de carbono reduce emisiones en un 40%',
      source: 'ONU Medio Ambiente',
      publishedAt: '2025-01-15T10:30:00Z',
      summary: 'Científicos desarrollan una innovadora tecnología que puede capturar CO2 directamente del aire y convertirlo en combustibles útiles, marcando un hito en la lucha contra el cambio climático.',
      category: 'climate',
      readTime: '5 min',
      views: 2847,
      likes: 156,
      imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
      url: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Récord mundial: Energía solar supera al carbón por primera vez',
      source: 'Agencia Internacional de Energía',
      publishedAt: '2025-01-14T14:15:00Z',
      summary: 'La capacidad de energía solar instalada globalmente ha superado oficialmente a la del carbón, representando un momento histórico en la transición energética mundial.',
      category: 'renewable',
      readTime: '4 min',
      views: 3921,
      likes: 287,
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      url: '#',
      featured: true
    },
    {
      id: '3',
      title: 'Amazonas: Deforestación disminuye 23% en el último año',
      source: 'Instituto Nacional de Investigaciones Espaciales',
      publishedAt: '2025-01-13T09:45:00Z',
      summary: 'Los esfuerzos de conservación y las nuevas políticas ambientales han logrado reducir significativamente la deforestación en la selva amazónica.',
      category: 'conservation',
      readTime: '6 min',
      views: 1654,
      likes: 98,
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: '4',
      title: 'Microplásticos: Nueva técnica de filtración promete océanos más limpios',
      source: 'Fundación Ocean Cleanup',
      publishedAt: '2025-01-12T16:20:00Z',
      summary: 'Investigadores desarrollan un sistema revolucionario capaz de filtrar microplásticos del agua marina con una eficiencia del 99.9%.',
      category: 'pollution',
      readTime: '7 min',
      views: 2103,
      likes: 134,
      imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: '5',
      title: 'Ciudades verdes: Barcelona lidera en sostenibilidad urbana',
      source: 'Red de Ciudades Sostenibles',
      publishedAt: '2025-01-11T11:30:00Z',
      summary: 'La capital catalana implementa un modelo innovador de urbanismo sostenible que incluye techos verdes, transporte eléctrico y gestión inteligente de residuos.',
      category: 'sustainability',
      readTime: '5 min',
      views: 1876,
      likes: 112,
      imageUrl: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: '6',
      title: 'Crisis hídrica: Nuevas tecnologías de desalinización más eficientes',
      source: 'Instituto Mundial del Agua',
      publishedAt: '2025-01-10T13:45:00Z',
      summary: 'Avances en tecnología de desalinización prometen agua potable más accesible y económica para regiones áridas del planeta.',
      category: 'water',
      readTime: '4 min',
      views: 1432,
      likes: 87,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: '7',
      title: 'Economía circular: Startup convierte residuos plásticos en combustible',
      source: 'Mongabay Latam',
      publishedAt: '2025-01-09T08:15:00Z',
      summary: 'Una empresa emergente desarrolla un proceso que transforma desechos plásticos en combustible limpio, cerrando el ciclo de vida del plástico.',
      category: 'recycling',
      readTime: '6 min',
      views: 2234,
      likes: 167,
      imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: '8',
      title: 'Biodiversidad marina: Descubren 30 nuevas especies en el Pacífico',
      source: 'National Geographic',
      publishedAt: '2025-01-08T15:30:00Z',
      summary: 'Expedición científica revela la increíble diversidad de vida marina en las profundidades del Océano Pacífico, destacando la importancia de la conservación.',
      category: 'conservation',
      readTime: '8 min',
      views: 3456,
      likes: 298,
      imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      url: '#',
      featured: false
    }
  ];

  // Simular carga de datos
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular actualización diaria de contenido
      const today = new Date();
      const updatedArticles = mockNewsData.map(article => ({
        ...article,
        views: article.views + Math.floor(Math.random() * 100),
        likes: article.likes + Math.floor(Math.random() * 20)
      }));
      
      setArticles(updatedArticles);
      setLastUpdated(today);
      setLoading(false);
    };

    loadNews();
  }, []);

  // Filtrar artículos
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.source.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Hace 1 día';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  const handleLike = (articleId: string) => {
    setArticles(prev => prev.map(article => 
      article.id === articleId 
        ? { ...article, likes: article.likes + 1 }
        : article
    ));
  };

  const handleShare = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(`${article.title} - ${window.location.href}`);
      alert('Enlace copiado al portapapeles');
    }
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
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>Última actualización: {lastUpdated.toLocaleDateString('es-ES')}</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <Input
            placeholder="Buscar noticias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Filtrar:</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                isActive 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
              } transition-all duration-200`}
            >
              <IconComponent className="mr-2 h-4 w-4" aria-hidden="true" />
              {category.name}
            </Button>
          );
        })}
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-emerald-600" aria-hidden="true" />
            Noticias Destacadas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredArticles.map((article) => {
              const categoryInfo = getCategoryInfo(article.category);
              const IconComponent = categoryInfo.icon;
              
              return (
                <Card key={article.id} className="eco-card group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        Destacado
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={categoryInfo.color}>
                        <IconComponent className="mr-1 h-3 w-3" aria-hidden="true" />
                        {categoryInfo.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" aria-hidden="true" />
                        <span>{article.source}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors duration-200">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {article.summary}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" aria-hidden="true" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" aria-hidden="true" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(article.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                        >
                          <Heart className="h-4 w-4 mr-1" aria-hidden="true" />
                          {article.likes}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare(article)}
                          className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                        >
                          <Share2 className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={() => window.open(article.url, '_blank')}
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

      {/* Regular Articles */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-emerald-600" aria-hidden="true" />
          Últimas Noticias
        </h2>
        
        {regularArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => {
              const categoryInfo = getCategoryInfo(article.category);
              const IconComponent = categoryInfo.icon;
              
              return (
                <Card key={article.id} className="eco-card group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={categoryInfo.color}>
                        <IconComponent className="mr-1 h-3 w-3" aria-hidden="true" />
                        {categoryInfo.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>{article.source}</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    
                    <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {article.summary}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <span>{article.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" aria-hidden="true" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(article.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200 p-1"
                        >
                          <Heart className="h-3 w-3" aria-hidden="true" />
                          <span className="ml-1 text-xs">{article.likes}</span>
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare(article)}
                          className="text-gray-500 hover:text-blue-500 transition-colors duration-200 p-1"
                        >
                          <Share2 className="h-3 w-3" aria-hidden="true" />
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 transition-all duration-200"
                          onClick={() => window.open(article.url, '_blank')}
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

      {/* Newsletter Subscription */}
      <Card className="eco-card bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            ¡Mantente informado!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín semanal y recibe las noticias ambientales más importantes 
            directamente en tu correo electrónico.
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
        </CardContent>
      </Card>
    </div>
  );
}