import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Trophy,
  Clock,
  Users,
  Play,
  CheckCircle,
  Target
} from 'lucide-react';

export function ActividadesContent() {
  const activities = [
    {
      id: 1,
      title: "Quiz: Reciclaje Básico",
      description: "Pon a prueba tus conocimientos sobre reciclaje con este quiz interactivo.",
      type: "Quiz",
      difficulty: "Fácil",
      duration: "10 min",
      points: 50,
      participants: 1200,
      completed: true,
      score: 85
    },
    {
      id: 2,
      title: "Simulador: Huella de Carbono",
      description: "Calcula y reduce tu huella de carbono personal con esta herramienta interactiva.",
      type: "Simulador",
      difficulty: "Medio",
      duration: "20 min",
      points: 100,
      participants: 800,
      completed: false,
      score: null
    },
    {
      id: 3,
      title: "Proyecto: Jardín Vertical",
      description: "Aprende a crear tu propio jardín vertical paso a paso.",
      type: "Proyecto",
      difficulty: "Medio",
      duration: "45 min",
      points: 150,
      participants: 650,
      completed: false,
      score: null
    },
    {
      id: 4,
      title: "Experimento: Energía Solar",
      description: "Construye un pequeño panel solar y aprende sobre energía renovable.",
      type: "Experimento",
      difficulty: "Difícil",
      duration: "60 min",
      points: 200,
      participants: 400,
      completed: true,
      score: 92
    },
    {
      id: 5,
      title: "Desafío: Semana Sin Plástico",
      description: "Participa en el desafío de una semana sin usar plásticos desechables.",
      type: "Desafío",
      difficulty: "Medio",
      duration: "7 días",
      points: 300,
      participants: 2100,
      completed: false,
      score: null
    },
    {
      id: 6,
      title: "Quiz: Biodiversidad",
      description: "Descubre cuánto sabes sobre la biodiversidad de nuestro planeta.",
      type: "Quiz",
      difficulty: "Medio",
      duration: "15 min",
      points: 75,
      participants: 950,
      completed: false,
      score: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-100 text-green-800';
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Difícil':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Quiz':
        return 'bg-blue-100 text-blue-800';
      case 'Simulador':
        return 'bg-purple-100 text-purple-800';
      case 'Proyecto':
        return 'bg-emerald-100 text-emerald-800';
      case 'Experimento':
        return 'bg-orange-100 text-orange-800';
      case 'Desafío':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Actividades Interactivas</h1>
        <p className="text-lg text-gray-600">
          Participa en actividades prácticas y divertidas para aprender sobre el medio ambiente
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completadas</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Puntos Totales</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Promedio</p>
                <p className="text-2xl font-bold text-gray-900">88%</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Racha</p>
                <p className="text-2xl font-bold text-gray-900">7 días</p>
              </div>
              <Activity className="h-8 w-8 text-emerald-600" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 flex items-center">
                    {activity.title}
                    {activity.completed && (
                      <CheckCircle className="ml-2 h-5 w-5 text-green-600" aria-hidden="true" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {activity.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <Badge className={getTypeColor(activity.type)}>
                  {activity.type}
                </Badge>
                <Badge className={getDifficultyColor(activity.difficulty)}>
                  {activity.difficulty}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                    <span>{activity.points} pts</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    <span>{activity.participants.toLocaleString()}</span>
                  </div>
                </div>

                {activity.completed && activity.score && (
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">
                        Completado
                      </span>
                      <span className="text-sm font-bold text-green-800">
                        {activity.score}%
                      </span>
                    </div>
                  </div>
                )}

                <Button 
                  className={`w-full ${
                    activity.completed 
                      ? 'bg-gray-600 hover:bg-gray-700' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                  {activity.completed ? 'Ver Resultados' : 'Comenzar'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Challenge */}
      <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Trophy className="mr-2 h-6 w-6" aria-hidden="true" />
            Desafío Diario
          </CardTitle>
          <CardDescription className="text-emerald-100">
            ¡Completa el desafío de hoy y gana puntos extra!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Reduce tu consumo de agua</h3>
              <p className="text-sm text-emerald-100">
                Toma duchas de máximo 5 minutos hoy
              </p>
            </div>
            <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Aceptar Desafío
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}