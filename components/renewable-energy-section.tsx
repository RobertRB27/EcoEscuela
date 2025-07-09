'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Zap, 
  Sun, 
  Wind,
  Droplets,
  Leaf,
  Factory,
  Home,
  Car,
  Globe,
  TrendingUp,
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Play,
  RotateCcw,
  Award,
  Lightbulb,
  Battery,
  Recycle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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

interface EnergySource {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  content: {
    howItWorks: string;
    advantages: string[];
    examples: string[];
    globalCapacity: string;
    efficiency: string;
  };
  color: string;
}

export function RenewableEnergySection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const energySources: EnergySource[] = [
    {
      id: 'solar',
      title: 'Energía Solar',
      description: 'Aprovecha la radiación del sol para generar electricidad',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop',
      content: {
        howItWorks: 'Los paneles solares fotovoltaicos convierten la luz solar directamente en electricidad mediante células semiconductoras. También existe la energía solar térmica que usa el calor del sol para calentar agua o generar vapor.',
        advantages: [
          'Fuente inagotable de energía',
          'No produce emisiones durante la operación',
          'Costos de mantenimiento muy bajos',
          'Puede instalarse en techos residenciales',
          'Tecnología cada vez más eficiente y económica'
        ],
        examples: [
          'Paneles solares residenciales en techos',
          'Granjas solares de gran escala',
          'Calculadoras y dispositivos pequeños',
          'Sistemas de iluminación pública',
          'Estaciones de carga para vehículos eléctricos'
        ],
        globalCapacity: '1,177 GW instalados mundialmente',
        efficiency: '15-22% en paneles comerciales'
      },
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'wind',
      title: 'Energía Eólica',
      description: 'Utiliza la fuerza del viento para generar electricidad',
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop',
      content: {
        howItWorks: 'Los aerogeneradores capturan la energía cinética del viento mediante aspas aerodinámicas que hacen girar un rotor conectado a un generador eléctrico. Pueden instalarse en tierra o en el mar.',
        advantages: [
          'Recurso abundante y renovable',
          'Tecnología madura y confiable',
          'Costos competitivos con combustibles fósiles',
          'Puede coexistir con agricultura',
          'Genera empleos locales'
        ],
        examples: [
          'Parques eólicos terrestres',
          'Parques eólicos marinos (offshore)',
          'Turbinas eólicas pequeñas para hogares',
          'Sistemas híbridos eólico-solares',
          'Molinos de viento tradicionales modernizados'
        ],
        globalCapacity: '899 GW instalados mundialmente',
        efficiency: '35-45% factor de capacidad'
      },
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'hydro',
      title: 'Energía Hidroeléctrica',
      description: 'Aprovecha la fuerza del agua en movimiento',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
      content: {
        howItWorks: 'Las centrales hidroeléctricas utilizan la fuerza del agua que fluye o cae para hacer girar turbinas conectadas a generadores. Pueden ser de gran escala (represas) o pequeña escala (ríos).',
        advantages: [
          'Fuente de energía muy confiable',
          'Larga vida útil de las instalaciones',
          'Puede proporcionar almacenamiento de energía',
          'Control de inundaciones y suministro de agua',
          'Costos operativos muy bajos'
        ],
        examples: [
          'Grandes represas hidroeléctricas',
          'Centrales de pasada en ríos',
          'Sistemas de bombeo-turbinado',
          'Micro-hidroeléctricas comunitarias',
          'Turbinas en canales de riego'
        ],
        globalCapacity: '1,355 GW instalados mundialmente',
        efficiency: '80-90% de eficiencia energética'
      },
      color: 'from-blue-500 to-teal-500'
    },
    {
      id: 'biomass',
      title: 'Biomasa',
      description: 'Energía obtenida de materia orgánica renovable',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=300&fit=crop',
      content: {
        howItWorks: 'La biomasa incluye residuos orgánicos, cultivos energéticos y madera que se queman directamente o se convierten en biocombustibles. También incluye biogás de descomposición orgánica.',
        advantages: [
          'Utiliza residuos que serían desechados',
          'Puede ser carbono neutral',
          'Disponible localmente en muchas regiones',
          'Tecnología adaptable a diferentes escalas',
          'Puede generar calor y electricidad'
        ],
        examples: [
          'Plantas de biogás de residuos agrícolas',
          'Calderas de biomasa para calefacción',
          'Biocombustibles para transporte',
          'Digestores anaeróbicos en granjas',
          'Pellets de madera para hogares'
        ],
        globalCapacity: '130 GW instalados mundialmente',
        efficiency: '20-40% según la tecnología'
      },
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const questions: Question[] = [
    {
      id: 1,
      question: '¿Cuál es la fuente de energía renovable más abundante en la Tierra?',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
      options: [
        { text: 'Energía eólica', icon: Wind, correct: false },
        { text: 'Energía solar', icon: Sun, correct: true },
        { text: 'Energía hidroeléctrica', icon: Droplets, correct: false },
        { text: 'Biomasa', icon: Leaf, correct: false }
      ],
      explanation: 'La energía solar es la más abundante. El sol proporciona más energía a la Tierra en una hora de la que toda la humanidad consume en un año.'
    },
    {
      id: 2,
      question: '¿Qué ventaja tienen las energías renovables sobre los combustibles fósiles?',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop',
      options: [
        { text: 'Son más baratas de instalar', icon: TrendingUp, correct: false },
        { text: 'No producen emisiones de CO2', icon: Leaf, correct: true },
        { text: 'Están disponibles en todos lados', icon: Globe, correct: false },
        { text: 'No requieren mantenimiento', icon: CheckCircle, correct: false }
      ],
      explanation: 'Las energías renovables no producen emisiones de CO2 durante su funcionamiento, ayudando a combatir el cambio climático y la contaminación del aire.'
    },
    {
      id: 3,
      question: '¿Cuál es el principal desafío de las energías renovables?',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=250&fit=crop',
      options: [
        { text: 'Son muy costosas', icon: TrendingUp, correct: false },
        { text: 'Intermitencia y almacenamiento', icon: Battery, correct: true },
        { text: 'Requieren mucho mantenimiento', icon: Factory, correct: false },
        { text: 'No son eficientes', icon: Zap, correct: false }
      ],
      explanation: 'El principal desafío es la intermitencia (el sol no siempre brilla, el viento no siempre sopla) y la necesidad de sistemas de almacenamiento de energía eficientes.'
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
      {/* Introducción Visual */}
      <Card className="eco-card bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-2xl text-yellow-900 dark:text-yellow-100">
                Energías Renovables
              </CardTitle>
              <CardDescription className="text-yellow-700 dark:text-yellow-300">
                El futuro sostenible de la energía mundial
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Las energías renovables son fuentes de energía que se regeneran naturalmente 
                y son prácticamente inagotables. Incluyen la energía solar, eólica, hidroeléctrica, 
                geotérmica y de biomasa. Representan la clave para un futuro energético sostenible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="font-semibold text-sm">Capacidad Global</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">3,372 GW</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Instalados en 2022</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <span className="font-semibold text-sm">Crecimiento</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">+10%</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Anual promedio</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop"
                alt="Paneles solares y turbinas eólicas representando energías renovables"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Paneles Desplegables de Fuentes de Energía */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-lg flex items-center justify-center">
              <Recycle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Fuentes de Energía Renovable</CardTitle>
              <CardDescription>
                Explora las principales tecnologías de energía limpia
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {energySources.map((source) => {
              const IconComponent = source.icon;
              return (
                <AccordionItem 
                  key={source.id} 
                  value={source.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-4"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${source.color} rounded-lg flex items-center justify-center shadow-md`}>
                        <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {source.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {source.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                      {/* Imagen */}
                      <div className="relative">
                        <img
                          src={source.image}
                          alt={`Instalación de ${source.title.toLowerCase()}`}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white/90 text-gray-800">
                            {source.content.globalCapacity}
                          </Badge>
                        </div>
                      </div>

                      {/* Contenido Educativo */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                              <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" aria-hidden="true" />
                              ¿Cómo funciona?
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {source.content.howItWorks}
                            </p>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Eficiencia</p>
                                <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                  {source.content.efficiency}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Capacidad Global</p>
                                <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                  {source.content.globalCapacity}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" />
                              Ventajas principales
                            </h4>
                            <ul className="space-y-2">
                              {source.content.advantages.map((advantage, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {advantage}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <Home className="h-4 w-4 mr-2 text-blue-500" aria-hidden="true" />
                              Ejemplos de aplicación
                            </h4>
                            <ul className="space-y-2">
                              {source.content.examples.map((example, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {example}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Botón para mostrar Quiz */}
      {!showQuiz && (
        <div className="text-center">
          <Button
            onClick={() => setShowQuiz(true)}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Play className="mr-2 h-5 w-5" aria-hidden="true" />
            Comenzar Quiz Interactivo
          </Button>
        </div>
      )}

      {/* Quiz Interactivo */}
      {showQuiz && (
        <Card className="eco-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
                  <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                </div>
                <div>
                  <CardTitle className="text-xl">Quiz: Energías Renovables</CardTitle>
                  <CardDescription>
                    Demuestra tus conocimientos sobre energía limpia
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
                  <RadioGroup
                    value={selectedAnswers[currentQuestion]?.toString() || ''}
                    onValueChange={(value) => handleAnswerSelect(currentQuestion, parseInt(value))}
                    className="space-y-3"
                    disabled={showFeedback[currentQuestion]}
                  >
                    {questions[currentQuestion].options.map((option, index) => {
                      const IconComponent = option.icon;
                      const isSelected = selectedAnswers[currentQuestion] === index;
                      const showFeedbackForThis = showFeedback[currentQuestion] && isSelected;
                      
                      return (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? showFeedbackForThis
                                ? option.correct
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                  : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                          onClick={() => !showFeedback[currentQuestion] && handleAnswerSelect(currentQuestion, index)}
                        >
                          <RadioGroupItem
                            value={index.toString()}
                            id={`option-${index}`}
                            className="focus:ring-blue-500"
                          />
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
                          <Label
                            htmlFor={`option-${index}`}
                            className="flex-1 cursor-pointer font-medium"
                          >
                            {option.text}
                          </Label>
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
                      );
                    })}
                  </RadioGroup>

                  {/* Explicación */}
                  {showFeedback[currentQuestion] && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300">
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                            Explicación
                          </h4>
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            {questions[currentQuestion].explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navegación */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
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

                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={handleRestartQuiz}
                    variant="outline"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                    Repetir Quiz
                  </Button>
                  <Button
                    onClick={() => setShowCompletionDialog(true)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Award className="mr-2 h-4 w-4" aria-hidden="true" />
                    Finalizar Lección
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Diálogo de Finalización */}
      <AlertDialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              ¡Insignia Obtenida!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>Has completado exitosamente la lección sobre energías renovables.</p>
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                  🏆 Insignia "Experto en Energías Renovables" desbloqueada
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ¡Eres parte de la solución energética del futuro!
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
              ¡Continuar Aprendiendo!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}