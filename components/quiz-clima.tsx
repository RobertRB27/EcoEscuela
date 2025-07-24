'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CloudRain, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  Award,
  Lightbulb,
  Thermometer,
  Globe,
  TreePine,
  Car,
  Home,
  Recycle,
  ChevronDown,
  ChevronRight,
  Target,
  Leaf
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

interface Solucion {
  id: string;
  titulo: string;
  descripcion: string;
  icono: React.ComponentType<any>;
  acciones: string[];
  impacto: string;
  color: string;
}

export function QuizClima() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState<Record<number, boolean>>({});

  const preguntas: Pregunta[] = [
    {
      id: 1,
      pregunta: '¿Cuál es la principal causa del aumento de temperatura global?',
      imagen: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Actividad solar intensa', icono: Globe, correcta: false },
        { texto: 'Emisiones de gases de efecto invernadero', icono: CloudRain, correcta: true },
        { texto: 'Volcanes activos', icono: Thermometer, correcta: false },
        { texto: 'Cambios en la órbita terrestre', icono: Globe, correcta: false }
      ],
      explicacion: 'Las emisiones de gases de efecto invernadero (principalmente CO2) por actividades humanas son la principal causa del calentamiento global actual, atrapando calor en la atmósfera.'
    },
    {
      id: 2,
      pregunta: '¿Qué efecto tiene el derretimiento de los glaciares en el clima global?',
      imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Enfría los océanos', icon: CloudRain, correcta: false },
        { texto: 'Aumenta el nivel del mar y altera corrientes', icono: Globe, correcta: true },
        { texto: 'Mejora las condiciones de pesca', icono: Thermometer, correcta: false },
        { texto: 'Reduce las precipitaciones', icono: CloudRain, correcta: false }
      ],
      explicacion: 'El derretimiento de glaciares contribuye al aumento del nivel del mar y puede alterar las corrientes oceánicas, afectando patrones climáticos globales.'
    },
    {
      id: 3,
      pregunta: '¿Cuál es la forma más efectiva de reducir tu huella de carbono personal?',
      imagen: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Usar transporte público o bicicleta', icono: Car, correcta: false },
        { texto: 'Ahorrar energía en el hogar', icono: Home, correcta: false },
        { texto: 'Combinar múltiples acciones sostenibles', icono: Leaf, correcta: true },
        { texto: 'Solo reciclar materiales', icono: Recycle, correcta: false }
      ],
      explicacion: 'La combinación de múltiples acciones (transporte sostenible, eficiencia energética, dieta consciente, consumo responsable) es la forma más efectiva de reducir significativamente tu huella de carbono.'
    },
    {
      id: 4,
      pregunta: '¿Qué fenómeno climático se ha intensificado debido al cambio climático?',
      imagen: 'https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=400&h=250&fit=crop',
      opciones: [
        { texto: 'Solo las sequías', icono: Thermometer, correcta: false },
        { texto: 'Eventos climáticos extremos en general', icono: CloudRain, correcta: true },
        { texto: 'Solo los huracanes', icono: Globe, correcta: false },
        { texto: 'Solo las inundaciones', icono: CloudRain, correcta: false }
      ],
      explicacion: 'El cambio climático ha intensificado eventos climáticos extremos en general: olas de calor, sequías severas, huracanes más intensos, inundaciones y tormentas más frecuentes y severas.'
    }
  ];

  const soluciones: Solucion[] = [
    {
      id: 'transporte',
      titulo: 'Transporte Sostenible',
      descripcion: 'Reduce emisiones en tus desplazamientos diarios',
      icono: Car,
      acciones: [
        'Camina o usa bicicleta para distancias cortas',
        'Utiliza transporte público cuando sea posible',
        'Comparte vehículo con otros (carpooling)',
        'Considera vehículos eléctricos o híbridos',
        'Planifica viajes para reducir desplazamientos'
      ],
      impacto: 'Puede reducir hasta 2.3 toneladas de CO2 al año',
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'energia',
      titulo: 'Eficiencia Energética en el Hogar',
      descripcion: 'Optimiza el consumo energético doméstico',
      icono: Home,
      acciones: [
        'Usa bombillas LED y electrodomésticos eficientes',
        'Mejora el aislamiento térmico de tu hogar',
        'Desconecta aparatos en modo standby',
        'Utiliza termostatos programables',
        'Considera paneles solares si es posible'
      ],
      impacto: 'Hasta 30% de reducción en consumo energético',
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
    },
    {
      id: 'consumo',
      titulo: 'Consumo Responsable',
      descripcion: 'Adopta hábitos de consumo más sostenibles',
      icono: Recycle,
      acciones: [
        'Reduce, reutiliza y recicla materiales',
        'Compra productos locales y de temporada',
        'Elige productos con menor empaque',
        'Repara objetos en lugar de desecharlos',
        'Consume menos carne y más alimentos vegetales'
      ],
      impacto: 'Hasta 1.5 toneladas menos de CO2 al año',
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
    },
    {
      id: 'reforestacion',
      titulo: 'Apoyo a la Reforestación',
      descripcion: 'Contribuye a la captura natural de carbono',
      icono: TreePine,
      acciones: [
        'Planta árboles nativos en tu comunidad',
        'Apoya proyectos de reforestación',
        'Protege espacios verdes existentes',
        'Elige productos con certificación forestal',
        'Participa en iniciativas de conservación'
      ],
      impacto: 'Un árbol puede capturar 22kg de CO2 anualmente',
      color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
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
        {/* Resultados del Quiz */}
        <Card className="eco-card">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">¡Quiz Completado!</CardTitle>
            <CardDescription>
              Has terminado el quiz sobre cambio climático
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {puntuacion.porcentaje}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {puntuacion.correctas} de {puntuacion.total} respuestas correctas
              </p>
              <Progress value={puntuacion.porcentaje} className="h-3 mt-4" />
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CloudRain className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                {puntuacion.porcentaje >= 80 
                  ? '¡Excelente! Tienes un gran conocimiento sobre el cambio climático. ¡Eres parte de la solución!' 
                  : puntuacion.porcentaje >= 60 
                    ? '¡Buen trabajo! Tienes una base sólida. Continúa aprendiendo sobre este tema crucial.'
                    : '¡Buen intento! El cambio climático es complejo. Revisa las soluciones y vuelve a intentarlo.'
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
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Target className="mr-2 h-4 w-4" aria-hidden="true" />
                Explorar Soluciones
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Soluciones Climáticas */}
        <Card className="eco-card">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
              </div>
              <div>
                <CardTitle className="text-xl">Soluciones Climáticas</CardTitle>
                <CardDescription>
                  Acciones prácticas para combatir el cambio climático
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {soluciones.map((solucion) => {
                const IconoComponente = solucion.icono;
                return (
                  <AccordionItem 
                    key={solucion.id} 
                    value={solucion.id}
                    className={`border rounded-lg px-4 ${solucion.color}`}
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                          <IconoComponente className="h-6 w-6 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                            {solucion.titulo}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {solucion.descripcion}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center space-x-2 mb-3">
                            <Target className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              Impacto: {solucion.impacto}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Acciones que puedes tomar:
                          </h4>
                          <ul className="space-y-2">
                            {solucion.acciones.map((accion, index) => (
                              <li key={index} className="flex items-start space-x-2.5">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {accion}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
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
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <CloudRain className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Quiz: Cambio Climático</CardTitle>
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
                className="bg-blue-600 hover:bg-blue-700 text-white"
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