import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  MessageCircle,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Award,
  TrendingUp
} from 'lucide-react';

export function ComunidadContent() {
  const forumPosts = [
    {
      id: 1,
      title: "¿Cómo empezar un huerto urbano en espacios pequeños?",
      author: "María González",
      avatar: "MG",
      category: "Agricultura",
      replies: 23,
      likes: 45,
      time: "Hace 2 horas",
      excerpt: "Hola comunidad, vivo en un apartamento pequeño pero me gustaría empezar mi propio huerto. ¿Alguien tiene experiencia con huertos en balcones?"
    },
    {
      id: 2,
      title: "Proyecto escolar: Reciclaje creativo",
      author: "Carlos Ruiz",
      avatar: "CR",
      category: "Educación",
      replies: 18,
      likes: 32,
      time: "Hace 4 horas",
      excerpt: "Estoy buscando ideas creativas para un proyecto de reciclaje con mis estudiantes de primaria. ¡Cualquier sugerencia es bienvenida!"
    },
    {
      id: 3,
      title: "Resultados de mi desafío sin plástico",
      author: "Ana Martín",
      avatar: "AM",
      category: "Sostenibilidad",
      replies: 31,
      likes: 67,
      time: "Hace 1 día",
      excerpt: "¡Completé el desafío de una semana sin plástico! Quiero compartir mi experiencia y los tips que aprendí en el camino."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Webinar: Energías Renovables",
      date: "15 de Marzo",
      time: "19:00",
      participants: 156,
      type: "Online"
    },
    {
      id: 2,
      title: "Limpieza de Playa Comunitaria",
      date: "22 de Marzo",
      time: "09:00",
      participants: 89,
      type: "Presencial",
      location: "Playa Central"
    },
    {
      id: 3,
      title: "Taller: Compostaje Casero",
      date: "28 de Marzo",
      time: "16:00",
      participants: 45,
      type: "Híbrido"
    }
  ];

  const topContributors = [
    {
      name: "Elena Vásquez",
      avatar: "EV",
      points: 2450,
      badge: "Eco Experta",
      contributions: 89
    },
    {
      name: "Roberto Silva",
      avatar: "RS",
      points: 2100,
      badge: "Mentor Verde",
      contributions: 76
    },
    {
      name: "Lucía Torres",
      avatar: "LT",
      points: 1890,
      badge: "Activista",
      contributions: 65
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Comunidad EcoEscuela</h1>
        <p className="text-lg text-gray-600">
          Conecta, aprende y colabora con otros miembros de nuestra comunidad ambiental
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Miembros Activos</p>
                <p className="text-2xl font-bold text-gray-900">12,450</p>
              </div>
              <Users className="h-8 w-8 text-emerald-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Discusiones</p>
                <p className="text-2xl font-bold text-gray-900">3,280</p>
              </div>
              <MessageCircle className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Eventos</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Proyectos</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Forum Posts */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span>Discusiones Recientes</span>
                </CardTitle>
                <Button variant="outline" size="sm">
                  Nueva Discusión
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {forumPosts.map((post) => (
                <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-emerald-100 text-emerald-600">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 hover:text-emerald-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Por {post.author}</span>
                          <span>{post.time}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-emerald-600">
                            <Heart className="h-4 w-4" aria-hidden="true" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600">
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span>{post.replies}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-purple-600">
                            <Share2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" aria-hidden="true" />
                <span>Próximos Eventos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {event.participants} participantes
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span>Top Contribuidores</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full text-emerald-600 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <Avatar>
                    <AvatarFallback className="bg-gray-100">
                      {contributor.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{contributor.name}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {contributor.badge}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {contributor.points} pts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}