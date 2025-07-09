import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Award, 
  Trophy,
  Star,
  Target,
  Calendar,
  TrendingUp,
  Medal,
  Crown
} from 'lucide-react';

export function LogrosContent() {
  const achievements = [
    {
      id: 1,
      title: "Primer Paso Verde",
      description: "Completa tu primera guía educativa",
      icon: Star,
      earned: true,
      earnedDate: "15 de Febrero, 2025",
      points: 50,
      rarity: "Común"
    },
    {
      id: 2,
      title: "Eco Estudiante",
      description: "Completa 10 guías educativas",
      icon: Award,
      earned: true,
      earnedDate: "28 de Febrero, 2025",
      points: 200,
      rarity: "Poco Común"
    },
    {
      id: 3,
      title: "Activista Principiante",
      description: "Participa en 5 actividades interactivas",
      icon: Target,
      earned: true,
      earnedDate: "5 de Marzo, 2025",
      points: 150,
      rarity: "Común"
    },
    {
      id: 4,
      title: "Maestro del Reciclaje",
      description: "Completa todas las guías sobre reciclaje",
      icon: Trophy,
      earned: false,
      progress: 75,
      points: 300,
      rarity: "Raro"
    },
    {
      id: 5,
      title: "Guardián del Agua",
      description: "Completa el desafío de conservación de agua",
      icon: Medal,
      earned: false,
      progress: 40,
      points: 250,
      rarity: "Poco Común"
    },
    {
      id: 6,
      title: "Eco Leyenda",
      description: "Alcanza 5000 puntos totales",
      icon: Crown,
      earned: false,
      progress: 25,
      points: 500,
      rarity: "Legendario"
    }
  ];

  const stats = [
    {
      label: "Logros Desbloqueados",
      value: "12",
      total: "24",
      icon: Award,
      color: "text-emerald-600"
    },
    {
      label: "Puntos Totales",
      value: "1,250",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      label: "Racha Actual",
      value: "7 días",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      label: "Ranking Global",
      value: "#156",
      icon: Trophy,
      color: "text-purple-600"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Común':
        return 'bg-gray-100 text-gray-800';
      case 'Poco Común':
        return 'bg-green-100 text-green-800';
      case 'Raro':
        return 'bg-blue-100 text-blue-800';
      case 'Épico':
        return 'bg-purple-100 text-purple-800';
      case 'Legendario':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Logros</h1>
        <p className="text-lg text-gray-600">
          Celebra tu progreso y descubre nuevos desafíos en tu viaje ambiental
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                      {stat.total && <span className="text-lg text-gray-500">/{stat.total}</span>}
                    </p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <span>Progreso General</span>
          </CardTitle>
          <CardDescription>
            Tu avance hacia el próximo nivel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Nivel 3: Eco Activista</span>
              <span className="text-sm text-gray-500">1,250 / 2,000 puntos</span>
            </div>
            <Progress value={62.5} className="h-3" />
            <p className="text-sm text-gray-600">
              ¡Faltan solo 750 puntos para alcanzar el siguiente nivel!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Logros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.id} 
                className={`transition-all duration-300 ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-lg' 
                    : 'hover:shadow-md opacity-75'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-emerald-100' 
                        : 'bg-gray-100'
                    }`}>
                      <IconComponent 
                        className={`h-6 w-6 ${
                          achievement.earned 
                            ? 'text-emerald-600' 
                            : 'text-gray-400'
                        }`} 
                        aria-hidden="true" 
                      />
                    </div>
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className={`text-lg ${
                      achievement.earned ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {achievement.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {achievement.earned ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                          <span className="text-sm font-medium text-emerald-600">
                            ¡Desbloqueado!
                          </span>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">
                          +{achievement.points} pts
                        </span>
                      </div>
                    ) : (
                      <>
                        {achievement.progress && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progreso</span>
                              <span className="font-medium">{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Recompensa</span>
                          <span className="text-sm font-medium text-gray-700">
                            {achievement.points} pts
                          </span>
                        </div>
                      </>
                    )}

                    {achievement.earned && achievement.earnedDate && (
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        <span>Obtenido el {achievement.earnedDate}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <span>Actividad Reciente</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Logro desbloqueado: Activista Principiante",
                points: "+150 pts",
                date: "Hace 2 días",
                type: "achievement"
              },
              {
                action: "Completaste la guía: Energías Renovables",
                points: "+75 pts",
                date: "Hace 3 días",
                type: "guide"
              },
              {
                action: "Participaste en: Quiz de Biodiversidad",
                points: "+50 pts",
                date: "Hace 5 días",
                type: "activity"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <span className="text-sm font-bold text-emerald-600">
                  {activity.points}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}