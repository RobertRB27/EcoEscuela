'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CloudRain, 
  Thermometer, 
  Globe, 
  TreePine,
  Car,
  Lightbulb,
  Recycle,
  Wind,
  Sun,
  Droplets,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronRight,
  Award,
  Leaf,
  ArrowRight,
  Play,
  RotateCcw
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface Question {
  id: number;
  question: string;
  image: string;
  options: {
    text: string;
    icon: React.ComponentType<any>;
    correct: boolean;
  }[];
  explanation: string;
}

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  actions: string[];
  impact: string;
}

export function ClimateInteractiveSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: '¿Cuál es la principal causa del aumento de temperatura global?',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop',
      options: [
        { text: 'Actividad solar', icon: Sun, correct: false },
        { text: 'Emisiones de CO2', icon: CloudRain, correct: true },
        { text: 'Volcanes activos', icon: Thermometer, correct: false },
        { text: 'Deforestación', icon: TreePine, correct: false }
      ],
      explanation: 'Las emisiones de dióxido de carbono (CO2) por actividades humanas son la principal causa del calentamiento global, atrapando calor en la atmósfera.'
    },
    {
      id: 2,
      question: '¿Qué efecto tiene el derretimiento de los glaciares?',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      options: [
        { text: 'Enfría los océanos', icon: Droplets, correct: false },
        { text: 'Aumenta el nivel del mar', icon: Globe, correct: true },
        { text: 'Mejora la pesca', icon: Wind, correct: false },
        { text: 'Reduce las lluvias', icon: CloudRain, correct: false }
      ],
      explanation: 'El derretimiento de glaciares contribuye directamente al aumento del nivel del mar, amenazando las zonas costeras y ecosistemas marinos.'
    },
    {
      id: 3,
      question: '¿Cuál es la forma más efectiva de reducir tu huella de carbono personal?',
      image: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=400&h=250&fit=crop',
      options: [
        { text: 'Usar transporte público', icon: Car, correct: false },
        { text: 'Ahorrar energía en casa', icon: Lightbulb, correct: false },
        { text: 'Cambiar a energías renovables', icon: Sun, correct: true },
        { text: 'Reciclar más', icon: Recycle, correct: false }
      ],
      explanation: 'Cambiar a energías renovables tiene el mayor impacto en la reducción de emisiones de carbono, seguido del transporte y eficiencia energética.'
    }
  ];

  const solutions: Solution[] = [
    {
      id: 'reforestation',
      title: 'Reforestación y Conservación',
      description: 'Los bosques absorben CO2 y regulan el clima global',
      icon: TreePine,
      actions: [
        'Plantar árboles nativos en tu comunidad',
        'Apoyar organizaciones de conservación',
        'Reducir el consumo de papel',
        'Elegir productos con certificación forestal'
      ],
      impact: 'Un árbol puede absorber hasta 22 kg de CO2 al año'
    },
    {
      id: 'clean-transport',
      title: 'Transporte Limpio',
      description: 'Reducir emisiones del sector transporte',
      icon: Car,
      actions: [
        'Usar transporte público o bicicleta',
        'Caminar distancias cortas',
        'Compartir vehículos (carpooling)',
        'Considerar vehículos eléctricos'
      ],
      impact: 'El transporte representa el 24% de las emisiones globales'
    },
    {
      id: 'energy-efficiency',
      title: 'Eficiencia Energética',
      description: 'Optimizar el uso de energía en el hogar',
      icon: Lightbulb,
      actions: [
        'Usar bombillas LED',
        'Desconectar aparatos no utilizados',
        'Mejorar el aislamiento del hogar',
        'Usar electrodomésticos eficientes'
      ],
      impact: 'Puede reducir el consumo energético hasta un 30%'
    },
    {
      id: 'renewable-energy',
      title: 'Energías Renovables',
      description: 'Transición hacia fuentes de energía limpia',
      icon: Sun,
      actions: [
        'Instalar paneles solares',
        'Elegir proveedores de energía verde',
        'Apoyar políticas de energía renovable',
        'Invertir en tecnologías limpias'
      ],
      impact: 'Las renovables pueden cubrir el 90% de las necesidades energéticas'
    }
  ];

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
    
    setShowFeedback(prev => ({
      ...prev,
      [questionIndex]: true
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowFeedback({});
  };

  const toggleSolution = (solutionId: string) => {
    setOpenSolutions(prev => ({
      ...prev,
      [solutionId]: !prev[solutionId]
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      const selectedOption = selectedAnswers[index];
      if (selectedOption !== undefined && question.options[selectedOption]?.correct) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const score = calculateScore();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Resumen Visual del Cambio Climático */}
      <Card className="eco-card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                Cambio Climático Global
              </CardTitle>
              <CardDescription className="text-blue-700 dark:text-blue-300">
                Comprendiendo el desafío más importante de nuestro tiempo
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                El cambio climático se refiere a los cambios a largo plazo en las temperaturas y 
                patrones climáticos. Desde 1880, la temperatura global ha aumentado aproximadamente 
                1.1°C, principalmente debido a las actividades humanas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Thermometer className="h-5 w-5 text-red-500" aria-hidden="true" />
                    <span className="font-semibold text-sm">Temperatura</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">+1.1°C</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Desde 1880</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <span className="font-semibold text-sm">Nivel del mar</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">+21cm</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Desde 1880</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&h=300&fit=crop"
                alt="Efectos del cambio climático en el planeta"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Interactivo */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
              </div>
              <div>
                <CardTitle className="text-xl">Quiz: Conoce el Cambio Climático</CardTitle>
                <CardDescription>
                  Pon a prueba tus conocimientos sobre el clima
                </CardDescription>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              {currentQuestion + 1} de {questions.length}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progreso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-6">
              {/* Pregunta Actual */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={questions[currentQuestion].image}
                    alt={`Imagen relacionada con: ${questions[currentQuestion].question}`}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {questions[currentQuestion].question}
                </h3>

                {/* Opciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {questions[currentQuestion].options.map((option, index) => {
                    const IconComponent = option.icon;
                    const isSelected = selectedAnswers[currentQuestion] === index;
                    const showFeedbackForThis = showFeedback[currentQuestion] && isSelected;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(currentQuestion, index)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          isSelected
                            ? showFeedbackForThis
                              ? option.correct
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                              : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        disabled={showFeedback[currentQuestion]}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected && showFeedbackForThis
                              ? option.correct
                                ? 'bg-green-100 dark:bg-green-800'
                                : 'bg-red-100 dark:bg-red-800'
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              isSelected && showFeedbackForThis
                                ? option.correct
                                  ? 'text-green-600 dark:text-green-400'
                                  : 'text-red-600 dark:text-red-400'
                                : 'text-gray-600 dark:text-gray-400'
                            }`} aria-hidden="true" />
                          </div>
                          <span className="font-medium">{option.text}</span>
                          {isSelected && showFeedbackForThis && (
                            <div className="ml-auto">
                              {option.correct ? (
                                <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explicación */}
                {showFeedback[currentQuestion] && (
                  <Alert className="animate-in slide-in-from-top-2 duration-300">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                    <AlertDescription>
                      {questions[currentQuestion].explanation}
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Navegación */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Anterior
                </Button>
                
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ) : (
            /* Resultados del Quiz */
            <div className="text-center space-y-6 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ¡Quiz Completado!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Has respondido {score.correct} de {score.total} preguntas correctamente
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {score.percentage}%
                </div>
                <Progress value={score.percentage} className="h-3 max-w-xs mx-auto" />
              </div>

              <Button
                onClick={handleRestartQuiz}
                variant="outline"
                className="mx-auto"
              >
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Repetir Quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Soluciones Prácticas */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
              <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Soluciones Prácticas</CardTitle>
              <CardDescription>
                Acciones que puedes tomar para combatir el cambio climático
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            const isOpen = openSolutions[solution.id];
            
            return (
              <Collapsible
                key={solution.id}
                open={isOpen}
                onOpenChange={() => toggleSolution(solution.id)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-4 h-auto bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {solution.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500 transition-transform duration-200" aria-hidden="true" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="animate-in slide-in-from-top-2 duration-200">
                  <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="space-y-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                          💡 Impacto: {solution.impact}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Acciones que puedes tomar:
                        </h4>
                        <ul className="space-y-2">
                          {solution.actions.map((action, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {action}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </CardContent>
      </Card>

      {/* Botón Terminar Lección */}
      <div className="text-center">
        <Button
          onClick={() => setShowCompletionDialog(true)}
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          <Award className="mr-2 h-5 w-5" aria-hidden="true" />
          Terminar Lección
        </Button>
      </div>

      {/* Diálogo de Finalización */}
      <AlertDialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              ¡Felicitaciones!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>Has completado exitosamente la lección sobre cambio climático.</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                Cada acción cuenta para proteger nuestro planeta. ¡Sigue aprendiendo y actuando!
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="w-full bg-emerald-600 hover:bg-emerald-700">
              ¡Continuar Aprendiendo!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}