'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Recycle, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  Award,
  Lightbulb, 
  Target,
  Play,
  Star
} from 'lucide-react';

interface Pregunta {
  id: number;
  pregunta: string;
  imagen: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

export function QuizReciclaje() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState<Record<number, boolean>>({});

  const preguntas: Pregunta[] = [
    {
      id: 1,
      pregunta: '¿En qué contenedor debes depositar las botellas de plástico?',
      imagen: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop',
      opciones: [
        'Contenedor verde (vidrio)',
        'Contenedor amarillo (plástico y latas)',
        'Contenedor azul (papel y cartón)',
        'Contenedor gris (residuos generales)'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Las botellas de plástico van en el contenedor amarillo, destinado específicamente para envases de plástico, latas y tetrapacks. Es importante lavarlas antes de depositarlas.'
    },
    {
      id: 2,
      pregunta: '¿Cuál de estos materiales NO es reciclable en los contenedores convencionales?',
      imagen: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=250&fit=crop',
      opciones: [
        'Papel de periódico',
        'Botellas de vidrio',
        'Pilas y baterías',
        'Latas de aluminio'
      ],
      respuestaCorrecta: 2,
      explicacion: 'Las pilas y baterías contienen materiales tóxicos y requieren puntos de recogida especializados. No deben tirarse en contenedores convencionales ya que pueden contaminar el medio ambiente.'
    },
    {
      id: 3,
      pregunta: '¿Qué debes hacer antes de reciclar un envase de yogur?',
      imagen: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop',
      opciones: [
        'Dejarlo tal como está',
        'Lavarlo con agua',
        'Quitarle solo la tapa',
        'Romperlo en pedazos pequeños'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Es importante lavar los envases antes de reciclarlos para eliminar restos de comida que podrían contaminar otros materiales reciclables o dificultar el proceso de reciclaje.'
    }
  ];

  const manejarSeleccionRespuesta = (indicePregunta: number, indiceOpcion: number) => {
    setRespuestas(prev => ({
      ...prev,
      [indicePregunta]: indiceOpcion
    }));
    
    // Mostrar retroalimentación inmediata
    setMostrarRetroalimentacion(prev => ({
      ...prev,
      [indicePregunta]: true
    }));
  };

  const manejarSiguiente = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(prev => prev + 1);
    } else {
      setMostrarResultados(true);
    }
  };

  const manejarAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(prev => prev - 1);
    }
  };

  const reiniciarQuiz = () => {
    setPreguntaActual(0);
    setRespuestas({});
    setMostrarResultados(false);
    setMostrarRetroalimentacion({});
  };

  const calcularPuntuacion = () => {
    let correctas = 0;
    preguntas.forEach((pregunta, index) => {
      if (respuestas[index] === pregunta.respuestaCorrecta) {
        correctas++;
      }
    });
    return {
      correctas,
      total: preguntas.length,
      porcentaje: Math.round((correctas / preguntas.length) * 100)
    };
  };

  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
  const preguntaActualObj = preguntas[preguntaActual];
  const estaRespondida = respuestas[preguntaActual] !== undefined;
  const puntuacion = calcularPuntuacion();

  if (mostrarResultados) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <Card className="eco-card">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">¡Quiz Completado!</CardTitle>
            <CardDescription>
              Has terminado el quiz sobre reciclaje
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Puntuación */}
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {puntuacion.porcentaje}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {puntuacion.correctas} de {puntuacion.total} respuestas correctas
              </p>
              <Progress value={puntuacion.porcentaje} className="h-3 mt-4" />
            </div>

            {/* Mensaje motivacional */}
            <Alert className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
              <Target className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                {puntuacion.porcentaje >= 80 
                  ? '¡Excelente! Eres un experto en reciclaje. ¡Sigue así!' 
                  : puntuacion.porcentaje >= 60 
                    ? '¡Buen trabajo! Con un poco más de práctica serás un experto.'
                    : '¡No te preocupes! El reciclaje requiere práctica. ¡Inténtalo de nuevo!'
                }
              </AlertDescription>
            </Alert>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={reiniciarQuiz}
                variant="outline"
                className="flex-1"
              >
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Repetir Quiz
              </Button>
              <Button className="flex-1 eco-button">
                <Award className="mr-2 h-4 w-4" aria-hidden="true" />
                Continuar Aprendiendo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Recycle className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Quiz: Reciclaje Básico</CardTitle>
              <CardDescription>
                Pregunta {preguntaActual + 1} de {preguntas.length}
              </CardDescription>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progreso</span>
              <span>{Math.round(progreso)}%</span>
            </div>
            <Progress value={progreso} className="h-2" />
          </div>
        </CardHeader>
      </Card>

      {/* Pregunta */}
      <Card className="eco-card">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Imagen */}
            <div className="relative">
              <img
                src={preguntaActualObj.imagen}
                alt={`Imagen relacionada con: ${preguntaActualObj.pregunta}`}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Pregunta */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {preguntaActualObj.pregunta}
              </h2>
            </div>

            {/* Opciones */}
            <RadioGroup
              value={respuestas[preguntaActual]?.toString() || ''}
              onValueChange={(value) => manejarSeleccionRespuesta(preguntaActual, parseInt(value))}
              className="space-y-3"
              disabled={mostrarRetroalimentacion[preguntaActual]}
            >
              {preguntaActualObj.opciones.map((opcion, index) => {
                const estaSeleccionada = respuestas[preguntaActual] === index;
                const esCorrecta = index === preguntaActualObj.respuestaCorrecta;
                const mostrarFeedback = mostrarRetroalimentacion[preguntaActual] && estaSeleccionada;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      estaSeleccionada
                        ? mostrarFeedback
                          ? esCorrecta
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => !mostrarRetroalimentacion[preguntaActual] && manejarSeleccionRespuesta(preguntaActual, index)}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="focus:ring-blue-500"
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {opcion}
                    </Label>
                    {estaSeleccionada && mostrarFeedback && (
                      <div className="ml-auto">
                        {esCorrecta ? (
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

            {/* Retroalimentación */}
            {mostrarRetroalimentacion[preguntaActual] && (
              <Alert className="animate-in slide-in-from-top-2 duration-300">
                <Lightbulb className="h-4 w-4" aria-hidden="true" />
                <AlertDescription>
                  <strong>Explicación:</strong> {preguntaActualObj.explicacion}
                </AlertDescription>
              </Alert>
            )}

            {/* Navegación */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={manejarAnterior}
                disabled={preguntaActual === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Anterior
              </Button>
              
              <Button
                onClick={manejarSiguiente}
                disabled={!estaRespondida}
                className="eco-button"
              >
                {preguntaActual === preguntas.length - 1 ? 'Ver Resultados' : 'Siguiente'}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}