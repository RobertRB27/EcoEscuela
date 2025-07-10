'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Target, 
  Calendar, 
  Users, 
  Award,
  CheckCircle,
  Clock,
  Leaf,
  Droplets,
  Recycle,
  Lightbulb
} from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  duration: string;
  participants: number;
  points: number;
  tasks: string[];
  tips: string[];
  impact: string;
}

export function MonthlyChallenge() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  // Desafío del mes actual
  const currentChallenge: Challenge = {
    id: 'water-conservation-january',
    title: 'Enero: Mes del Ahorro de Agua',
    description: 'Reduce tu consumo de agua diario y aprende técnicas de conservación',
    icon: Droplets,
    difficulty: 'Medio',
    duration: '31 días',
    participants: 2847,
    points: 500,
    tasks: [
      'Toma duchas de máximo 5 minutos durante una semana',
      'Instala un dispositivo ahorrador en grifos y duchas',
      'Recoge agua de lluvia para regar plantas',
      'Repara cualquier fuga que encuentres en casa',
      'Usa la lavadora solo con carga completa',
      'Cierra el grifo mientras te cepillas los dientes',
      'Mide tu consumo de agua semanal y compáralo'
    ],
    tips: [
      'Usa un cronómetro para controlar el tiempo de ducha',
      'Coloca una botella en el tanque del inodoro para ahorrar agua',
      'Reutiliza el agua de lavar verduras para las plantas',
      'Instala grifos con sensor automático si es posible'
    ],
    impact: 'Puedes ahorrar hasta 200 litros de agua por día'
  };

  const handleTaskToggle = (taskIndex: number) => {
    const newCompletedTasks = new Set(completedTasks);
    
    if (newCompletedTasks.has(taskIndex)) {
      newCompletedTasks.delete(taskIndex);
      toast({
        title: "Tarea desmarcada",
        description: "Has desmarcado una tarea del desafío.",
        variant: "default",
      });
    } else {
      newCompletedTasks.add(taskIndex);
      toast({
        title: "¡Tarea completada!",
        description: "Has marcado una tarea como completada. ¡Sigue así!",
        variant: "default",
      });
    }
    
    setCompletedTasks(newCompletedTasks);
    
    // Verificar si se completó el desafío
    if (newCompletedTasks.size === currentChallenge.tasks.length && !isCompleted) {
      setIsCompleted(true);
      toast({
        title: "🎉 ¡Desafío completado!",
        description: `Has ganado ${currentChallenge.points} puntos. ¡Felicitaciones por tu compromiso ambiental!`,
        variant: "default",
      });
    } else if (newCompletedTasks.size < currentChallenge.tasks.length && isCompleted) {
      setIsCompleted(false);
    }
  };

  const handleCompleteChallenge = () => {
    if (completedTasks.size === currentChallenge.tasks.length) {
      setIsCompleted(true);
      toast({
        title: "🏆 ¡Desafío completado!",
        description: `¡Increíble! Has completado el desafío del mes y ganado ${currentChallenge.points} puntos.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Desafío incompleto",
        description: `Te faltan ${currentChallenge.tasks.length - completedTasks.size} tareas por completar.`,
        variant: "destructive",
      });
    }
  };

  const progress = (completedTasks.size / currentChallenge.tasks.length) * 100;
  const IconComponent = currentChallenge.icon;

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
    <Card className={`w-full transition-all duration-300 ${
      isCompleted 
        ? 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-300 dark:border-emerald-700' 
        : 'hover:shadow-lg'
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
              isCompleted 
                ? 'bg-emerald-100 dark:bg-emerald-800' 
                : 'bg-blue-100 dark:bg-blue-900/20'
            }`}>
              {isCompleted ? (
                <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              ) : (
                <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {currentChallenge.title}
                </CardTitle>
                {isCompleted && (
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
                    ¡Completado!
                  </Badge>
                )}
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {currentChallenge.description}
              </CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-1">
              <Badge className={getDifficultyColor(currentChallenge.difficulty)}>
                {currentChallenge.difficulty}
              </Badge>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" aria-hidden="true" />
                <span>{currentChallenge.points} pts</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Estadísticas del desafío */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400 mx-auto mb-1" aria-hidden="true" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {currentChallenge.duration}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Duración</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Users className="h-5 w-5 text-gray-600 dark:text-gray-400 mx-auto mb-1" aria-hidden="true" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {currentChallenge.participants.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Participantes</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Target className="h-5 w-5 text-gray-600 dark:text-gray-400 mx-auto mb-1" aria-hidden="true" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {completedTasks.size}/{currentChallenge.tasks.length}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Completadas</div>
          </div>
        </div>

        {/* Progreso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700 dark:text-gray-300">Progreso del desafío</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Lista de tareas */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Target className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
            Tareas del desafío
          </h4>
          <div className="space-y-2">
            {currentChallenge.tasks.map((task, index) => {
              const isTaskCompleted = completedTasks.has(index);
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isTaskCompleted
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => handleTaskToggle(index)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isTaskCompleted
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {isTaskCompleted && (
                      <CheckCircle className="h-3 w-3 text-white" aria-hidden="true" />
                    )}
                  </div>
                  <span className={`flex-1 text-sm ${
                    isTaskCompleted
                      ? 'text-emerald-800 dark:text-emerald-200 line-through'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {task}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Consejos */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
            <Lightbulb className="h-4 w-4 mr-2" aria-hidden="true" />
            Consejos para el éxito
          </h4>
          <ul className="space-y-1">
            {currentChallenge.tips.map((tip, index) => (
              <li key={index} className="text-sm text-blue-800 dark:text-blue-200 flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto ambiental */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center">
            <Leaf className="h-4 w-4 mr-2" aria-hidden="true" />
            Impacto ambiental
          </h4>
          <p className="text-sm text-emerald-800 dark:text-emerald-200">
            {currentChallenge.impact}
          </p>
        </div>

        {/* Botón de acción */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleCompleteChallenge}
            disabled={isCompleted}
            className={`flex-1 ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                ¡Desafío completado!
              </>
            ) : (
              <>
                <Target className="mr-2 h-4 w-4" aria-hidden="true" />
                Marcar como completado
              </>
            )}
          </Button>
          
          <Button variant="outline" className="sm:w-auto">
            <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            Ver próximos desafíos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}