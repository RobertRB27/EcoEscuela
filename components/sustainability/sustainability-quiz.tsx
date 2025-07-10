'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  RotateCcw,
  Award,
  TrendingUp,
  Leaf,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  type: 'true-false' | 'multiple-choice';
  options?: string[];
  correctAnswer: boolean | number;
  explanation: string;
  funFact: string;
}

interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  level: string;
  message: string;
}

export function SustainabilityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean | number>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Una bolsa de plástico puede tardar hasta 1000 años en descomponerse',
      type: 'true-false',
      correctAnswer: false,
      explanation: 'Las bolsas de plástico tardan entre 10 y 20 años en descomponerse, no 1000 años. Sin embargo, esto sigue siendo mucho tiempo y por eso es importante usar bolsas reutilizables.',
      funFact: '¡Dato curioso! Una botella de plástico sí puede tardar hasta 450 años en descomponerse.'
    },
    {
      id: 2,
      question: '¿Cuál de estas acciones ahorra más agua?',
      type: 'multiple-choice',
      options: [
        'Cerrar el grifo mientras te cepillas los dientes',
        'Tomar duchas de 5 minutos en lugar de 10',
        'Usar la lavadora solo con carga completa',
        'Todas las anteriores ahorran la misma cantidad'
      ],
      correctAnswer: 1,
      explanation: 'Reducir el tiempo de ducha de 10 a 5 minutos puede ahorrar hasta 50 litros de agua por ducha, siendo la acción que más agua ahorra de las opciones.',
      funFact: '¡Dato curioso! Una ducha de 10 minutos puede usar hasta 100 litros de agua.'
    },
    {
      id: 3,
      question: 'Los productos orgánicos siempre son mejores para el medio ambiente',
      type: 'true-false',
      correctAnswer: false,
      explanation: 'Aunque los productos orgánicos no usan pesticidas sintéticos, no siempre son mejores para el ambiente. Factores como el transporte, empaque y métodos de producción también importan.',
      funFact: '¡Dato curioso! Comprar productos locales puede ser más sostenible que productos orgánicos importados.'
    },
    {
      id: 4,
      question: '¿Qué porcentaje de la energía mundial proviene de fuentes renovables?',
      type: 'multiple-choice',
      options: ['5%', '12%', '28%', '45%'],
      correctAnswer: 2,
      explanation: 'Aproximadamente el 28% de la energía mundial proviene de fuentes renovables, y este porcentaje está creciendo cada año.',
      funFact: '¡Dato curioso! La energía solar es ahora la forma más barata de electricidad en muchos países.'
    },
    {
      id: 5,
      question: 'Reciclar una lata de aluminio ahorra suficiente energía para hacer funcionar un televisor por 3 horas',
      type: 'true-false',
      correctAnswer: true,
      explanation: 'Es verdad. Reciclar aluminio requiere 95% menos energía que producirlo desde cero, ahorrando suficiente energía para hacer funcionar un televisor por 3 horas.',
      funFact: '¡Dato curioso! Una lata de aluminio puede reciclarse infinitas veces sin perder calidad.'
    },
    {
      id: 6,
      question: '¿Cuál es la principal causa de deforestación en el mundo?',
      type: 'multiple-choice',
      options: [
        'Construcción de ciudades',
        'Agricultura y ganadería',
        'Incendios forestales',
        'Industria maderera'
      ],
      correctAnswer: 1,
      explanation: 'La agricultura y ganadería son responsables de aproximadamente el 80% de la deforestación mundial, principalmente para crear pastizales y cultivos.',
      funFact: '¡Dato curioso! Se pierden aproximadamente 10 millones de hectáreas de bosque cada año.'
    }
  ];

  const handleAnswer = (answer: boolean | number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
    
    setShowFeedback(prev => ({
      ...prev,
      [currentQuestion]: true
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowFeedback({});
    setShowResults(false);
  };

  const calculateResults = (): QuizResult => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);
    let level = '';
    let message = '';

    if (percentage >= 90) {
      level = 'Experto en Sostenibilidad';
      message = '¡Increíble! Tienes un conocimiento excepcional sobre sostenibilidad. Eres un verdadero defensor del planeta.';
    } else if (percentage >= 70) {
      level = 'Eco-Consciente';
      message = '¡Muy bien! Tienes buenos conocimientos sobre sostenibilidad. Sigue aprendiendo para ser aún mejor.';
    } else if (percentage >= 50) {
      level = 'En Desarrollo';
      message = 'Buen comienzo. Tienes conocimientos básicos, pero hay mucho más por aprender sobre sostenibilidad.';
    } else {
      level = 'Principiante';
      message = 'No te preocupes, todos empezamos desde algún lugar. ¡Sigue aprendiendo y mejorando!';
    }

    return {
      score: correct,
      total: questions.length,
      percentage,
      level,
      message
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const showQuestionFeedback = showFeedback[currentQuestion];

  if (showResults) {
    const results = calculateResults();
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl">¡Quiz Completado!</CardTitle>
          <CardDescription>
            Resultados de tu conocimiento en sostenibilidad
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Resultado principal */}
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              {results.percentage}%
            </div>
            <div>
              <Badge className="text-lg px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
                {results.level}
              </Badge>
            </div>
            <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto">
              {results.message}
            </p>
          </div>

          {/* Progreso visual */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Respuestas correctas</span>
              <span>{results.score} de {results.total}</span>
            </div>
            <Progress value={results.percentage} className="h-3" />
          </div>

          {/* Revisión de respuestas */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Revisión de respuestas
            </h3>
            <div className="space-y-2">
              {questions.map((question, index) => {
                const isCorrect = userAnswers[index] === question.correctAnswer;
                return (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
                    )}
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Pregunta {index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleRestart}
              variant="outline"
              className="flex-1"
            >
              <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
              Repetir quiz
            </Button>
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              <Leaf className="mr-2 h-4 w-4" aria-hidden="true" />
              Explorar más contenido
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
            <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-xl">Quiz de Sostenibilidad</CardTitle>
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
        {/* Pregunta */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {currentQ.question}
          </h3>

          {/* Opciones */}
          <div className="space-y-3">
            {currentQ.type === 'true-false' ? (
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={userAnswer === true ? "default" : "outline"}
                  onClick={() => handleAnswer(true)}
                  disabled={showQuestionFeedback}
                  className={`h-16 ${
                    showQuestionFeedback && userAnswer === true
                      ? currentQ.correctAnswer === true
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-red-600 hover:bg-red-700'
                      : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {showQuestionFeedback && userAnswer === true && (
                      currentQ.correctAnswer === true ? (
                        <CheckCircle className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <XCircle className="h-5 w-5" aria-hidden="true" />
                      )
                    )}
                    <span className="text-lg font-semibold">Verdadero</span>
                  </div>
                </Button>
                <Button
                  variant={userAnswer === false ? "default" : "outline"}
                  onClick={() => handleAnswer(false)}
                  disabled={showQuestionFeedback}
                  className={`h-16 ${
                    showQuestionFeedback && userAnswer === false
                      ? currentQ.correctAnswer === false
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-red-600 hover:bg-red-700'
                      : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {showQuestionFeedback && userAnswer === false && (
                      currentQ.correctAnswer === false ? (
                        <CheckCircle className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <XCircle className="h-5 w-5" aria-hidden="true" />
                      )
                    )}
                    <span className="text-lg font-semibold">Falso</span>
                  </div>
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                {currentQ.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant={userAnswer === index ? "default" : "outline"}
                    onClick={() => handleAnswer(index)}
                    disabled={showQuestionFeedback}
                    className={`w-full text-left justify-start h-auto p-4 ${
                      showQuestionFeedback && userAnswer === index
                        ? currentQ.correctAnswer === index
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-red-600 hover:bg-red-700'
                        : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="flex-1">{option}</span>
                      {showQuestionFeedback && userAnswer === index && (
                        currentQ.correctAnswer === index ? (
                          <CheckCircle className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5" aria-hidden="true" />
                        )
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Retroalimentación */}
          {showQuestionFeedback && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                      Explicación
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
                      Dato interesante
                    </h4>
                    <p className="text-sm text-emerald-800 dark:text-emerald-200">
                      {currentQ.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navegación */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Anterior
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={userAnswer === undefined}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestion === questions.length - 1 ? 'Ver resultados' : 'Siguiente'}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}