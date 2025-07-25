'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Award,
  Clock,
  RotateCcw
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface CourseQuizProps {
  course: Course;
  onClose: () => void;
}


export function CourseQuiz({ course, onClose }: CourseQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < course.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    course.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: course.questions.length,
      percentage: Math.round((correct / course.questions.length) * 100)
    };
  };

  const progress = ((currentQuestion + 1) / course.questions.length) * 100;
  const currentQ = course.questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;
  const allAnswered = course.questions.every(q => selectedAnswers[q.id] !== undefined);

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="space-y-6 fade-in">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onClose}
            className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver a cursos</span>
          </Button>
        </div>

        <Card className="eco-card">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">¡Quiz Completado!</CardTitle>
            <CardDescription>
              Has terminado el quiz de {course.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Display */}
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {score.percentage}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {score.correct} de {score.total} respuestas correctas
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Puntuación</span>
                <span>{score.percentage}%</span>
              </div>
              <Progress value={score.percentage} className="h-3" />
            </div>

            {/* Results by Question */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Revisión de respuestas:</h3>
              {course.questions.map((question, index) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-2">
                          Pregunta {index + 1}: {question.question}
                        </p>
                        <div className="space-y-1 text-sm">
                          <p className={`${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            Tu respuesta: {question.options[userAnswer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-green-600">
                              Respuesta correcta: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-gray-600 dark:text-gray-400 italic">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleRestart}
                variant="outline"
                className="flex-1"
              >
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Repetir quiz
              </Button>
              <Button
                onClick={onClose}
                className="flex-1 eco-button"
              >
                Explorar más cursos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onClose}
          className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Volver a cursos</span>
        </Button>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>Pregunta {currentQuestion + 1} de {course.questions.length}</span>
        </div>
      </div>

      {/* Course Info */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-xl">{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="eco-card">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Question Image */}
            {currentQ.image && (
              <div className="relative">
                <img
                  src={currentQ.image}
                  alt={`Imagen relacionada con: ${currentQ.question}`}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            )}

            {/* Question Text */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {currentQ.question}
              </h2>
            </div>

            {/* Answer Options */}
            <RadioGroup
              value={selectedAnswers[currentQ.id]?.toString() || ''}
              onValueChange={(value) => handleAnswerSelect(currentQ.id, parseInt(value))}
              className="space-y-3"
            >
              {currentQ.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                  onClick={() => handleAnswerSelect(currentQ.id, index)}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    className="focus:ring-emerald-500"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer text-sm sm:text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Anterior</span>
              </Button>

              <div className="flex space-x-3">
                {currentQuestion === course.questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className="eco-button flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar respuestas</span>
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="eco-button flex items-center space-x-2"
                  >
                    <span>Siguiente</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </div>

            {/* Help Text */}
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {!isAnswered 
                  ? 'Selecciona una respuesta para continuar'
                  : currentQuestion === course.questions.length - 1 && allAnswered
                    ? 'Todas las preguntas respondidas. ¡Puedes enviar el quiz!'
                    : 'Respuesta seleccionada. Puedes continuar a la siguiente pregunta.'
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}