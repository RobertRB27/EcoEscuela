'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { 
  Zap, 
  Sun,
  Wind,
  Droplets,
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  Award,
  Lightbulb,
  Battery,
  Leaf
} from 'lucide-react';

interface Pregunta {
  id: number;
  pregunta: string;
  imagen: string;
  opciones: {
    texto: string;
    icono: React.ComponentType<any>;
    correcta: boolean;
  }[];
  explicacion: string;
}

export function QuizEnergia() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState<Record<number, boolean>>({});
  const { toast } = useToast();

  const preguntas: Pregunta[] = [
    {
      id: 1,
      pregunta: '¿Cuál es la fuente de energía renovable más abundante en la Tierra?',
      imagen: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Energía eólica', icono: Wind, correcta: false },
        { texto: 'Energía solar', icono: Sun, correcta: true },
        { texto: 'Energía hidroeléctrica', icono: Droplets, correcta: false },
        { texto: 'Energía geotérmica', icono: Zap, correcta: false }
      ],
      explicacion: 'La energía solar es la más abundante. El sol proporciona más energía a la Tierra en una hora de la que toda la humanidad consume en un año completo.'
    },
    {
      id: 2,
      pregunta: '¿Qué ventaja tienen las energías renovables sobre los combustibles fósiles?',
      imagen: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Son más baratas de instalar', icono: Zap, correcta: false },
        { texto: 'No producen emisiones de CO2', icono: Leaf, correcta: true },
        { texto: 'Están disponibles en todos lados', icono: Sun, correcta: false },
        { texto: 'No requieren mantenimiento', icono: Battery, correcta: false }
      ],
      explicacion: 'Las energías renovables no producen emisiones de CO2 durante su funcionamiento, ayudando significativamente a combatir el cambio climático y la contaminación del aire.'
    },
    {
      id: 3,
      pregunta: '¿Cuál es el principal desafío actual de las energías renovables?',
      imagen: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Son muy costosas', icono: Zap, correcta: false },
        { texto: 'Intermitencia y almacenamiento', icono: Battery, correcta: true },
        { texto: 'Requieren mucho mantenimiento', icono: Wind, correcta: false },
        { texto: 'No son eficientes', icono: Sun, correcta: false }
      ],
      explicacion: 'El principal desafío es la intermitencia (el sol no siempre brilla, el viento no siempre sopla) y la necesidad de desarrollar sistemas de almacenamiento de energía más eficientes y económicos.'
    },
    {
      id: 4,
      pregunta: '¿Qué país lidera actualmente en capacidad de energía eólica instalada?',
      imagen: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Estados Unidos', icono: Wind, correcta: false },
        { texto: 'China', icono: Wind, correcta: true },
        { texto: 'Alemania', icono: Wind, correcta: false },
        { texto: 'España', icono: Wind, correcta: false }
      ],
      explicacion: 'China lidera el mundo en capacidad eólica instalada, con más de 280 GW, seguido por Estados Unidos y Alemania. China ha invertido masivamente en energías renovables en los últimos años.'
    },
    {
      id: 5,
      pregunta: '¿Cuál es la eficiencia típica de un panel solar moderno?',
      imagen: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
      opciones: [
        { texto: '5-10%', icono: Sun, correcta: false },
        { texto: '15-22%', icono: Sun, correcta: true },
        { texto: '40-50%', icono: Sun, correcta: false },
        { texto: '60-70%', icono: Sun, correcta: false }
      ],
      explicacion: 'Los paneles solares comerciales modernos tienen una eficiencia típica entre 15-22%. Los paneles de laboratorio han alcanzado eficiencias superiores al 45%, pero aún no son comercialmente viables.'
    },
    {
      id: 6,
      pregunta: '¿Qué porcentaje de la electricidad mundial proviene actualmente de fuentes renovables?',
      imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Aproximadamente 10%', icono: Leaf, correcta: false },
        { texto: 'Aproximadamente 30%', icono: Leaf, correcta: true },
        { texto: 'Aproximadamente 50%', icono: Leaf, correcta: false },
        { texto: 'Aproximadamente 70%', icono: Leaf, correcta: false }
      ],
      explicacion: 'Aproximadamente el 30% de la electricidad mundial proviene de fuentes renovables, y este porcentaje está creciendo rápidamente cada año gracias a las mejoras tecnológicas y la reducción de costos.'
    }
  ];

  const manejarSeleccionRespuesta = (indicePregunta: number, indiceOpcion: number) => {
    setRespuestas(prev => ({
      ...prev,
      [indicePregunta]: indiceOpcion
    }));
    
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

  const finalizarLeccion = () => {
    const puntuacion = calcularPuntuacion();
    toast({
     id: "quiz-energia-completado",
      title: "¡Lección Completada! 🎉",
      description: `¡Excelente trabajo! Has completado el quiz de energías renovables con ${puntuacion.porcentaje}% de aciertos. ¡Eres parte de la solución energética del futuro!`,
      duration: 5000,
    });
  };

  const calcularPuntuacion = () => {
    let correctas = 0;
    preguntas.forEach((pregunta, index) => {
      const respuestaSeleccionada = respuestas[index];
      if (respuestaSeleccionada !== undefined && pregunta.opciones[respuestaSeleccionada]?.correcta) {
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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">¡Quiz Completado!</CardTitle>
            <CardDescription>
              Has terminado el quiz sobre energías renovables
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                {puntuacion.porcentaje}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {puntuacion.correctas} de {puntuacion.total} respuestas correctas
              </p>
              <Progress value={puntuacion.porcentaje} className="h-3 mt-4" />
            </div>

            <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
              <Sun className="h-4 w-4 text-yellow-600" aria-hidden="true" />
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                {puntuacion.porcentaje >= 80 
                  ? '¡Increíble! Eres un verdadero defensor de las energías limpias. ¡El planeta te necesita!' 
                  : puntuacion.porcentaje >= 60 
                    ? '¡Muy bien! Tienes una buena base sobre energías renovables. ¡Sigue aprendiendo!'
                    : '¡Buen intento! Las energías renovables son el futuro. ¡Repasa y vuelve a intentarlo!'
                }
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={reiniciarQuiz}
                variant="outline"
                className="flex-1"
              >
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Repetir Quiz
              </Button>
              <Button 
                onClick={finalizarLeccion}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
              >
                <Award className="mr-2 h-4 w-4" aria-hidden="true" />
                Finalizar Lección
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Quiz: Energías Renovables</CardTitle>
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

      <Card className="eco-card">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="relative">
              <img
                src={preguntaActualObj.imagen}
                alt={`Imagen relacionada con: ${preguntaActualObj.pregunta}`}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {preguntaActualObj.pregunta}
              </h2>
            </div>

            <RadioGroup
              value={respuestas[preguntaActual]?.toString() || ''}
              onValueChange={(value) => manejarSeleccionRespuesta(preguntaActual, parseInt(value))}
              className="space-y-3"
              disabled={mostrarRetroalimentacion[preguntaActual]}
            >
              {preguntaActualObj.opciones.map((opcion, index) => {
                const IconoComponente = opcion.icono;
                const estaSeleccionada = respuestas[preguntaActual] === index;
                const mostrarFeedback = mostrarRetroalimentacion[preguntaActual] && estaSeleccionada;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      estaSeleccionada
                        ? mostrarFeedback
                          ? opcion.correcta
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => !mostrarRetroalimentacion[preguntaActual] && manejarSeleccionRespuesta(preguntaActual, index)}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="focus:ring-yellow-500"
                    />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      estaSeleccionada && mostrarFeedback
                        ? opcion.correcta
                          ? 'bg-green-100 dark:bg-green-800'
                          : 'bg-red-100 dark:bg-red-800'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      <IconoComponente className={`h-5 w-5 ${
                        estaSeleccionada && mostrarFeedback
                          ? opcion.correcta
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-600 dark:text-red-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`} aria-hidden="true" />
                    </div>
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {opcion.texto}
                    </Label>
                    {estaSeleccionada && mostrarFeedback && (
                      <div className="ml-auto">
                        {opcion.correcta ? (
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

            {mostrarRetroalimentacion[preguntaActual] && (
              <Alert className="animate-in slide-in-from-top-2 duration-300">
                <Lightbulb className="h-4 w-4" aria-hidden="true" />
                <AlertDescription>
                  <strong>Explicación:</strong> {preguntaActualObj.explicacion}
                </AlertDescription>
              </Alert>
            )}

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
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
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