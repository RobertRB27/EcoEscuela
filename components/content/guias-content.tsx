import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Star,
  Users,
  Play,
  Download,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export function GuiasContent() {
  const guides = [
    {
      id: 1,
      title: "Introducción al Reciclaje",
      description: "Aprende los fundamentos del reciclaje y cómo implementarlo en tu hogar.",
      level: "Principiante",
      duration: "30 min",
      rating: 4.8,
      students: 1250,
      category: "Residuos",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&h=200&fit=crop",
      progress: 0
    },
    {
      id: 2,
      title: "Energías Renovables",
      description: "Descubre las diferentes fuentes de energía limpia y su impacto ambiental.",
      level: "Intermedio",
      duration: "45 min",
      rating: 4.9,
      students: 890,
      category: "Energía",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=300&h=200&fit=crop",
      progress: 65
    },
    {
      id: 3,
      title: "Conservación del Agua",
      description: "Técnicas y estrategias para el uso responsable del agua en la vida diaria.",
      level: "Principiante",
      duration: "25 min",
      rating: 4.7,
      students: 2100,
      category: "Agua",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
      progress: 100
    },
    {
      id: 4,
      title: "Biodiversidad y Ecosistemas",
      description: "Comprende la importancia de la biodiversidad y cómo proteger los ecosistemas.",
      level: "Avanzado",
      duration: "60 min",
      rating: 4.9,
      students: 650,
      category: "Biodiversidad",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
      progress: 30
    },
    {
      id: 5,
      title: "Agricultura Sostenible",
      description: "Métodos de cultivo que respetan el medio ambiente y promueven la sostenibilidad.",
      level: "Intermedio",
      duration: "40 min",
      rating: 4.6,
      students: 780,
      category: "Agricultura",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
      progress: 0
    },
    {
      id: 6,
      title: "Cambio Climático",
      description: "Causas, efectos y soluciones para enfrentar el cambio climático global.",
      level: "Avanzado",
      duration: "55 min",
      rating: 4.8,
      students: 1100,
      category: "Clima",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=300&h=200&fit=crop",
      progress: 0
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Guías Educativas</h1>
        <p className="text-lg text-gray-600">
          Explora nuestras guías interactivas sobre educación ambiental
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <Input
            placeholder="Buscar guías..."
            className="pl-10 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Todos los niveles
          </Button>
          <Button variant="outline" size="sm">
            Categorías
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Guías</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <BookOpen className="h-8 w-8 text-emerald-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completadas</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">En Progreso</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              {guide.progress > 0 && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-emerald-600 text-white">
                    {guide.progress}% completado
                  </Badge>
                </div>
              )}
            </div>
            
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {guide.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <Badge className={getLevelColor(guide.level)}>
                  {guide.level}
                </Badge>
                <Badge variant="outline">
                  {guide.category}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>{guide.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                  <span>{guide.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>{guide.students.toLocaleString()}</span>
                </div>
              </div>

              {guide.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progreso</span>
                    <span className="text-emerald-600 font-medium">{guide.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${guide.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  size="sm"
                >
                  <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                  {guide.progress > 0 ? 'Continuar' : 'Comenzar'}
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}