import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Activity, 
  Users, 
  Award,
  TrendingUp,
  Calendar,
  Leaf,
  Target
} from 'lucide-react';

export function InicioContent() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">¡Bienvenido a EcoEscuela!</h1>
            <p className="text-emerald-100 text-lg">
              Tu plataforma de educación ambiental interactiva
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Leaf className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Guías Completadas
            </CardTitle>
            <BookOpen className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-500">
              +2 esta semana
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Actividades Realizadas
            </CardTitle>
            <Activity className="h-4 w-4 text-blue-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">28</div>
            <p className="text-xs text-gray-500">
              +5 esta semana
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Puntos Eco
            </CardTitle>
            <Award className="h-4 w-4 text-yellow-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,250</div>
            <p className="text-xs text-gray-500">
              +150 esta semana
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Racha Actual
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">7 días</div>
            <p className="text-xs text-gray-500">
              ¡Sigue así!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span>Actividades Recientes</span>
              </CardTitle>
              <CardDescription>
                Tu progreso en las últimas actividades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Reciclaje en el Hogar",
                  type: "Guía Educativa",
                  progress: 100,
                  date: "Hace 2 horas"
                },
                {
                  title: "Quiz: Energías Renovables",
                  type: "Actividad",
                  progress: 85,
                  date: "Ayer"
                },
                {
                  title: "Proyecto: Huerto Escolar",
                  type: "Actividad",
                  progress: 60,
                  date: "Hace 3 días"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-500">{activity.type} • {activity.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-emerald-600">
                      {activity.progress}%
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-emerald-500 rounded-full transition-all duration-300"
                        style={{ width: `${activity.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Upcoming */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>Acciones Rápidas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700">
                <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                Nueva Guía
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="mr-2 h-4 w-4" aria-hidden="true" />
                Actividad Diaria
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                Unirse al Foro
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" aria-hidden="true" />
                <span>Próximos Eventos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-medium text-gray-900">Día Mundial del Agua</h4>
                <p className="text-sm text-gray-600">22 de Marzo</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-medium text-gray-900">Día de la Tierra</h4>
                <p className="text-sm text-gray-600">22 de Abril</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-900">Día Mundial del Medio Ambiente</h4>
                <p className="text-sm text-gray-600">5 de Junio</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}