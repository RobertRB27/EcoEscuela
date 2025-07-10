'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  Car, 
  Home, 
  Utensils, 
  Recycle,
  Leaf,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  RotateCcw
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  icon: React.ComponentType<any>;
  options: {
    text: string;
    value: number;
    description: string;
  }[];
}

interface Result {
  score: number;
  level: 'Excelente' | 'Bueno' | 'Regular' | 'Necesita mejorar';
  color: string;
  icon: React.ComponentType<any>;
  message: string;
  tips: string[];
}

export function CarbonFootprintCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 'transport',
      question: '¿Cómo te desplazas principalmente?',
      icon: Car,
      options: [
        { text: 'Camino o uso bicicleta', value: 1, description: 'Transporte sin emisiones' },
        { text: 'Transporte público', value: 2, description: 'Emisiones compartidas' },
        { text: 'Auto compartido/familiar', value: 3, description: 'Emisiones moderadas' },
        { text: 'Auto propio frecuentemente', value: 4, description: 'Altas emisiones' }
      ]
    },
    {
      id: 'energy',
      question: '¿Cómo es tu consumo de energía en casa?',
      icon: Home,
      options: [
        { text: 'Uso energías renovables y ahorro mucho', value: 1, description: 'Muy eficiente' },
        { text: 'Ahorro energía conscientemente', value: 2, description: 'Eficiente' },
        { text: 'Consumo normal, sin pensar mucho', value: 3, description: 'Promedio' },
        { text: 'Uso mucha energía sin restricciones', value: 4, description: 'Alto consumo' }
      ]
    },
    {
      id: 'diet',
      question: '¿Cómo describes tu alimentación?',
      icon: Utensils,
      options: [
        { text: 'Vegetariana/vegana con productos locales', value: 1, description: 'Muy sostenible' },
        { text: 'Poca carne, muchas verduras locales', value: 2, description: 'Sostenible' },
        { text: 'Dieta balanceada con algo de carne', value: 3, description: 'Moderada' },
        { text: 'Mucha carne y productos procesados', value: 4, description: 'Alto impacto' }
      ]
    },
    {
      id: 'waste',
      question: '¿Cómo manejas tus residuos?',
      icon: Recycle,
      options: [
        { text: 'Reciclo, composte y genero muy pocos residuos', value: 1, description: 'Excelente gestión' },
        { text: 'Reciclo la mayoría y evito desperdicios', value: 2, description: 'Buena gestión' },
        { text: 'Reciclo algunas cosas ocasionalmente', value: 3, description: 'Gestión básica' },
        { text: 'No reciclo y genero muchos residuos', value: 4, description: 'Necesita mejorar' }
      ]
    },
    {
      id: 'consumption',
      question: '¿Cómo son tus hábitos de consumo?',
      icon: Leaf,
      options: [
        { text: 'Compro solo lo necesario, productos duraderos', value: 1, description: 'Consumo consciente' },
        { text: 'Compro pensando en la durabilidad', value: 2, description: 'Consumo responsable' },
        { text: 'Compro según necesidad, sin pensar mucho', value: 3, description: 'Consumo promedio' },
        { text: 'Compro frecuentemente cosas nuevas', value: 4, description: 'Alto consumo' }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateResult = (): Result => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const averageScore = totalScore / questions.length;

    if (averageScore <= 1.5) {
      return {
        score: Math.round(averageScore * 100) / 100,
        level: 'Excelente',
        color: 'text-green-600',
        icon: CheckCircle,
        message: '¡Felicitaciones! Tu huella de carbono es muy baja. Eres un ejemplo de vida sostenible.',
        tips: [
          'Comparte tus hábitos sostenibles con otros',
          'Considera liderar iniciativas ambientales en tu comunidad',
          'Mantén estos excelentes hábitos'
        ]
      };
    } else if (averageScore <= 2.5) {
      return {
        score: Math.round(averageScore * 100) / 100,
        level: 'Bueno',
        color: 'text-blue-600',
        icon: TrendingUp,
        message: 'Muy bien! Tienes buenos hábitos sostenibles. Con pequeños ajustes puedes mejorar aún más.',
        tips: [
          'Considera usar más el transporte público o bicicleta',
          'Reduce un poco más el consumo de carne',
          'Implementa más prácticas de ahorro energético'
        ]
      };
    } else if (averageScore <= 3.5) {
      return {
        score: Math.round(averageScore * 100) / 100,
        level: 'Regular',
        color: 'text-yellow-600',
        icon: TrendingDown,
        message: 'Tienes una huella de carbono promedio. Hay varias oportunidades para mejorar.',
        tips: [
          'Comienza a reciclar más consistentemente',
          'Reduce el uso del auto cuando sea posible',
          'Ahorra energía apagando dispositivos no utilizados',
          'Considera una dieta con menos carne'
        ]
      };
    } else {
      return {
        score: Math.round(averageScore * 100) / 100,
        level: 'Necesita mejorar',
        color: 'text-red-600',
        icon: AlertCircle,
        message: 'Tu huella de carbono es alta. ¡Pero no te preocupes! Pequeños cambios pueden hacer una gran diferencia.',
        tips: [
          'Empieza con un cambio pequeño: reciclar o caminar más',
          'Reduce el consumo de energía en casa',
          'Considera el transporte público o compartido',
          'Planifica compras para evitar desperdicios',
          'Únete a grupos de sostenibilidad para motivarte'
        ]
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const result = showResult ? calculateResult() : null;

  if (showResult && result) {
    const ResultIcon = result.icon;
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl">Resultado de tu Huella de Carbono</CardTitle>
          <CardDescription>
            Basado en tus respuestas sobre hábitos diarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Resultado Principal */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <ResultIcon className={`h-8 w-8 ${result.color}`} aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {result.level}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Puntuación: {result.score}/4.0
                </div>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <Progress 
                value={(4 - result.score) * 25} 
                className="h-3"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Alto impacto</span>
                <span>Bajo impacto</span>
              </div>
            </div>
          </div>

          {/* Mensaje personalizado */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {result.message}
            </p>
          </div>

          {/* Consejos */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-emerald-600" aria-hidden="true" />
              Recomendaciones para ti
            </h3>
            <ul className="space-y-2">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleRestart}
              variant="outline"
              className="flex-1"
            >
              <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
              Calcular de nuevo
            </Button>
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              Ver guías de sostenibilidad
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const IconComponent = currentQ.icon;
  const selectedAnswer = answers[currentQ.id];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center">
            <Calculator className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-xl">Calculadora de Huella de Carbono</CardTitle>
            <CardDescription>
              Pregunta {currentQuestion + 1} de {questions.length}
            </CardDescription>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Progreso</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pregunta actual */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {currentQ.question}
            </h3>
          </div>

          {/* Opciones */}
          <RadioGroup
            value={selectedAnswer?.toString() || ''}
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {currentQ.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  selectedAnswer === option.value
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => handleAnswerChange(option.value.toString())}
              >
                <RadioGroupItem
                  value={option.value.toString()}
                  id={`option-${index}`}
                  className="focus:ring-emerald-500"
                />
                <div className="flex-1">
                  <Label
                    htmlFor={`option-${index}`}
                    className="cursor-pointer font-medium text-gray-900 dark:text-white"
                  >
                    {option.text}
                  </Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {option.description}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${
                    option.value === 1 ? 'border-green-500 text-green-700' :
                    option.value === 2 ? 'border-blue-500 text-blue-700' :
                    option.value === 3 ? 'border-yellow-500 text-yellow-700' :
                    'border-red-500 text-red-700'
                  }`}
                >
                  {option.value === 1 ? 'Excelente' :
                   option.value === 2 ? 'Bueno' :
                   option.value === 3 ? 'Regular' :
                   'Alto impacto'}
                </Badge>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Navegación */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Anterior
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {currentQuestion === questions.length - 1 ? 'Ver resultado' : 'Siguiente'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}