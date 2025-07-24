'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Leaf, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  Award,
  Lightbulb,
  Home,
  Car,
  Utensils,
  Recycle,
  Zap,
  Calculator,
  Target,
  TrendingDown,
  TrendingUp
} from 'lucide-react';

interface PreguntaVF {
  id: number;
  pregunta: string;
  respuestaCorrecta: boolean;
  explicacion: string;
}

interface Habito {
  id: string;
  nombre: string;
  descripcion: string;
  impacto: string;
  icono: React.ComponentType<any>;
  completado: boolean;
}

interface PreguntaHuella {
  id: string;
  pregunta: string;
  opciones: { texto: string; valor: number }[];
  categoria: string;
  icono: React.ComponentType<any>;
}

export function QuizSostenibilidad() {
  const [seccionActual, setSeccionActual] = useState<'quiz' | 'habitos' | 'huella' | 'resultados'>('quiz');
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasVF, setRespuestasVF] = useState<Record<number, boolean>>({});
  const [habitosState, setHabitosState] = useState<Record<string, boolean>>({});
  const [respuestasHuella, setRespuestasHuella] = useState<Record<string, number>>({});

  const preguntasVF: PreguntaVF[] = [
    {
      id: 1,
      pregunta: 'Los productos orgánicos siempre tienen menor impacto ambiental que los convencionales',
      respuestaCorrecta: false,
      explicacion: 'No siempre. Aunque los productos orgánicos evitan pesticidas sintéticos, pueden requerir más tierra y energía. El impacto depende de factores como transporte, empaque y métodos específicos de producción.'
    },
    {
      id: 2,
      pregunta: 'Reutilizar productos es más sostenible que reciclarlos',
      respuestaCorrecta: true,
      explicacion: 'Correcto. La reutilización evita el proceso de reciclaje que consume energía y recursos. Según la jerarquía de residuos: reducir, reutilizar y luego reciclar.'
    },
    {
      id: 3,
      pregunta: 'Las bolsas de papel son siempre mejor opción que las de plástico',
      respuestaCorrecta: false,
      explicacion: 'No necesariamente. Las bolsas de papel requieren más energía y agua para producirse. Las de plástico reutilizable o las bolsas de tela son mejores opciones.'
    },
    {
      id: 4,
      pregunta: 'Los aparatos electrónicos en modo standby no consumen energía significativa',
      respuestaCorrecta: false,
      explicacion: 'Falso. Los aparatos en standby pueden representar hasta el 10% del consumo eléctrico doméstico. Es importante desconectarlos completamente cuando no se usan.'
    },
    {
      id: 5,
      pregunta: 'Comprar productos locales siempre reduce la huella de carbono',
      respuestaCorrecta: false,
      explicacion: 'No siempre. Aunque reduce el transporte, otros factores como métodos de producción, almacenamiento y temporada pueden ser más importantes para la huella total.'
    }
  ];

  const habitos: Habito[] = [
    {
      id: 'transporte',
      nombre: 'Transporte Sostenible',
      descripcion: 'Usar bicicleta, transporte público o caminar',
      impacto: 'Reduce 2.3 ton CO2/año',
      icono: Car,
      completado: false
    },
    {
      id: 'energia',
      nombre: 'Eficiencia Energética',
      descripcion: 'Usar LED, desconectar aparatos, mejorar aislamiento',
      impacto: 'Ahorra 30% energía',
      icono: Zap,
      completado: false
    },
    {
      id: 'agua',
      nombre: 'Conservación del Agua',
      descripcion: 'Duchas cortas, reparar fugas, recolectar agua lluvia',
      impacto: 'Ahorra 150L/día',
      icono: Home,
      completado: false
    },
    {
      id: 'dieta',
      nombre: 'Alimentación Consciente',
      descripcion: 'Más vegetales, menos desperdicios, productos locales',
      impacto: 'Reduce 1.5 ton CO2/año',
      icono: Utensils,
      completado: false
    },
    {
      id: 'residuos',
      nombre: 'Gestión de Residuos',
      descripcion: 'Reducir, reutilizar, reciclar, compostar',
      impacto: 'Reduce 80% residuos',
      icono: Recycle,
      completado: false
    },
    {
      id: 'consumo',
      nombre: 'Consumo Responsable',
      descripcion: 'Comprar menos, elegir calidad, compartir recursos',
      impacto: 'Reduce 40% compras',
      icono: Leaf,
      completado: false
    }
  ];

  const preguntasHuella: PreguntaHuella[] = [
    {
      id: 'transporte',
      pregunta: '¿Cómo te desplazas principalmente?',
      categoria: 'Transporte',
      icono: Car,
      opciones: [
        { texto: 'Caminando/Bicicleta', valor: 0 },
        { texto: 'Transporte público', valor: 1 },
        { texto: 'Auto compartido', valor: 2 },
        { texto: 'Auto propio', valor: 4 },
        { texto: 'Auto + viajes frecuentes', valor: 6 }
      ]
    },
    {
      id: 'energia',
      pregunta: '¿Cómo es tu consumo energético en casa?',
      categoria: 'Energía',
      icono: Zap,
      opciones: [
        { texto: 'Muy eficiente (LED, desconecto todo)', valor: 1 },
        { texto: 'Moderado (algunas medidas)', valor: 2 },
        { texto: 'Promedio', valor: 3 },
        { texto: 'Alto (muchos aparatos)', valor: 4 },
        { texto: 'Sin control del consumo', valor: 5 }
      ]
    },
    {
      id: 'alimentacion',
      pregunta: '¿Cómo describes tu dieta?',
      categoria: 'Alimentación',
      icono: Utensils,
      opciones: [
        { texto: 'Vegana/Vegetariana estricta', valor: 1 },
        { texto: 'Principalmente vegetariana', valor: 2 },
        { texto: 'Equilibrada con algo de carne', valor: 3 },
        { texto: 'Carne regularmente', valor: 4 },
        { texto: 'Mucha carne y procesados', valor: 5 }
      ]
    },
    {
      id: 'residuos',
      pregunta: '¿Cómo manejas tus residuos?',
      categoria: 'Residuos',
      icono: Recycle,
      opciones: [
        { texto: 'Reciclo todo, composté, zero waste', valor: 0 },
        { texto: 'Reciclo y reutilizo bastante', valor: 1 },
        { texto: 'Reciclo básico', valor: 2 },
        { texto: 'Poco reciclaje', valor: 3 },
        { texto: 'No reciclo', valor: 4 }
      ]
    },
    {
      id: 'consumo',
      pregunta: '¿Cómo es tu patrón de consumo?',
      categoria: 'Consumo',
      icono: Leaf,
      opciones: [
        { texto: 'Minimalista, compro solo necesario', valor: 1 },
        { texto: 'Compro conscientemente', valor: 2 },
        { texto: 'Consumo moderado', valor: 3 },
        { texto: 'Compro bastante', valor: 4 },
        { texto: 'Consumo sin restricciones', valor: 5 }
      ]
    }
  ];

  const manejarRespuestaVF = (indicePregunta: number, respuesta: boolean) => {
    setRespuestasVF(prev => ({
      ...prev,
      [indicePregunta]: respuesta
    }));
  };

  const manejarHabito = (habitoId: string, completado: boolean) => {
    setHabitosState(prev => ({
      ...prev,
      [habitoId]: completado
    }));
  };

  const manejarRespuestaHuella = (preguntaId: string, valor: number) => {
    setRespuestasHuella(prev => ({
      ...prev,
      [preguntaId]: valor
    }));
  };

  const calcularPuntuacionVF = () => {
    let correctas = 0;
    preguntasVF.forEach((pregunta, index) => {
      if (respuestasVF[index] === pregunta.respuestaCorrecta) {
        correctas++;
      }
    });
    return {
      correctas,
      total: preguntasVF.length,
      porcentaje: Math.round((correctas / preguntasVF.length) * 100)
    };
  };

  const calcularHuella = () => {
    const valores = Object.values(respuestasHuella);
    const total = valores.reduce((acc, val) => acc + val, 0);
    const promedio = valores.length > 0 ? total / valores.length : 0;
    
    let categoria = '';
    let color = '';
    let descripcion = '';
    
    if (promedio <= 1.5) {
      categoria = 'Eco-Héroe';
      color = 'text-green-600';
      descripcion = '¡Excelente! Tu huella es muy baja';
    } else if (promedio <= 2.5) {
      categoria = 'Consciente';
      color = 'text-emerald-600';
      descripcion = 'Muy bien, eres bastante sostenible';
    } else if (promedio <= 3.5) {
      categoria = 'Promedio';
      color = 'text-yellow-600';
      descripcion = 'Tienes potencial para mejorar';
    } else if (promedio <= 4.5) {
      categoria = 'Impacto Alto';
      color = 'text-orange-600';
      descripcion = 'Es hora de cambiar algunos hábitos';
    } else {
      categoria = 'Impacto Muy Alto';
      color = 'text-red-600';
      descripcion = 'Necesitas cambios significativos';
    }
    
    return { promedio, categoria, color, descripcion, total };
  };

  const habitosCompletados = Object.values(habitosState).filter(Boolean).length;
  const puntuacionVF = calcularPuntuacionVF();
  const resultadoHuella = calcularHuella();

  const avanzarSeccion = () => {
    switch (seccionActual) {
      case 'quiz':
        setSeccionActual('habitos');
        break;
      case 'habitos':
        setSeccionActual('huella');
        break;
      case 'huella':
        setSeccionActual('resultados');
        break;
    }
  };

  const retrocederSeccion = () => {
    switch (seccionActual) {
      case 'habitos':
        setSeccionActual('quiz');
        break;
      case 'huella':
        setSeccionActual('habitos');
        break;
      case 'resultados':
        setSeccionActual('huella');
        break;
    }
  };

  const reiniciar = () => {
    setSeccionActual('quiz');
    setPreguntaActual(0);
    setRespuestasVF({});
    setHabitosState({});
    setRespuestasHuella({});
  };

  if (seccionActual === 'resultados') {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <Card className="eco-card">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">¡Evaluación Completa!</CardTitle>
            <CardDescription>
              Resumen de tu perfil de sostenibilidad
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Resultados Quiz V/F */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conocimiento</p>
                  <p className="text-2xl font-bold text-green-600">{puntuacionVF.porcentaje}%</p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-emerald-600 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Hábitos</p>
                  <p className="text-2xl font-bold text-emerald-600">{habitosCompletados}/6</p>
                </CardContent>
              </Card>
              
              <Card className={`border-2 ${
                resultadoHuella.promedio <= 2.5 ? 'border-green-200 dark:border-green-800' :
                resultadoHuella.promedio <= 3.5 ? 'border-yellow-200 dark:border-yellow-800' :
                'border-orange-200 dark:border-orange-800'
              }`}>
                <CardContent className="p-4 text-center">
                  <Calculator className={`h-8 w-8 mx-auto mb-2 ${resultadoHuella.color}`} aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Huella</p>
                  <p className={`text-lg font-bold ${resultadoHuella.color}`}>{resultadoHuella.categoria}</p>
                </CardContent>
              </Card>
            </div>

            {/* Detalle de la Huella */}
            <Alert className={`${
              resultadoHuella.promedio <= 2.5 ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
              resultadoHuella.promedio <= 3.5 ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
              'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
            }`}>
              <Leaf className={`h-4 w-4 ${resultadoHuella.color}`} aria-hidden="true" />
              <AlertDescription className={resultadoHuella.color}>
                <strong>Tu perfil de sostenibilidad: {resultadoHuella.categoria}</strong>
                <br />
                {resultadoHuella.descripcion}
                <br />
                <small>Puntuación: {resultadoHuella.promedio.toFixed(1)}/5.0</small>
              </AlertDescription>
            </Alert>

            {/* Recomendaciones */}
            <Card className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-3 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" aria-hidden="true" />
                  Próximos pasos recomendados
                </h3>
                <ul className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                  {resultadoHuella.promedio > 3 && (
                    <li>• Considera cambiar tu forma principal de transporte</li>
                  )}
                  {habitosCompletados < 4 && (
                    <li>• Incorpora más hábitos sostenibles en tu rutina diaria</li>
                  )}
                  {puntuacionVF.porcentaje < 80 && (
                    <li>• Continúa aprendiendo sobre sostenibilidad y medio ambiente</li>
                  )}
                  <li>• Comparte tu conocimiento con amigos y familia</li>
                  <li>• Participa en iniciativas comunitarias ambientales</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={reiniciar}
                variant="outline"
                className="flex-1"
              >
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Repetir Evaluación
              </Button>
              <Button className="flex-1 eco-button">
                <Target className="mr-2 h-4 w-4" aria-hidden="true" />
                Plan de Acción Personal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header con progreso */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
              <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-xl">Evaluación de Sostenibilidad</CardTitle>
              <CardDescription>
                {seccionActual === 'quiz' && 'Quiz Verdadero/Falso'}
                {seccionActual === 'habitos' && 'Hábitos Sostenibles'}
                {seccionActual === 'huella' && 'Calculadora de Huella'}
              </CardDescription>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progreso general</span>
              <span>
                {seccionActual === 'quiz' && '33%'}
                {seccionActual === 'habitos' && '66%'}
                {seccionActual === 'huella' && '100%'}
              </span>
            </div>
            <Progress 
              value={
                seccionActual === 'quiz' ? 33 :
                seccionActual === 'habitos' ? 66 : 100
              } 
              className="h-2" 
            />
          </div>
        </CardHeader>
      </Card>

      {/* Contenido según sección */}
      {seccionActual === 'quiz' && (
        <Card className="eco-card">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-2">
                  Pregunta {preguntaActual + 1} de {preguntasVF.length}
                </h2>
                <Progress value={((preguntaActual + 1) / preguntasVF.length) * 100} className="h-2 mb-4" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {preguntasVF[preguntaActual].pregunta}
                </h3>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  variant={respuestasVF[preguntaActual] === true ? "default" : "outline"}
                  onClick={() => manejarRespuestaVF(preguntaActual, true)}
                  className="w-32"
                >
                  <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Verdadero
                </Button>
                <Button
                  size="lg"
                  variant={respuestasVF[preguntaActual] === false ? "default" : "outline"}
                  onClick={() => manejarRespuestaVF(preguntaActual, false)}
                  className="w-32"
                >
                  <XCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Falso
                </Button>
              </div>

              {respuestasVF[preguntaActual] !== undefined && (
                <Alert className="animate-in slide-in-from-top-2 duration-300">
                  <Lightbulb className="h-4 w-4" aria-hidden="true" />
                  <AlertDescription>
                    <strong>Explicación:</strong> {preguntasVF[preguntaActual].explicacion}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => setPreguntaActual(prev => prev - 1)}
                  disabled={preguntaActual === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Anterior
                </Button>
                
                <Button
                  onClick={() => {
                    if (preguntaActual < preguntasVF.length - 1) {
                      setPreguntaActual(prev => prev + 1);
                    } else {
                      avanzarSeccion();
                    }
                  }}
                  disabled={respuestasVF[preguntaActual] === undefined}
                  className="eco-button"
                >
                  {preguntaActual === preguntasVF.length - 1 ? 'Continuar a Hábitos' : 'Siguiente'}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {seccionActual === 'habitos' && (
        <Card className="eco-card">
          <CardHeader>
            <CardTitle>Checklist de Hábitos Sostenibles</CardTitle>
            <CardDescription>
              Marca los hábitos que ya practicas regularmente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {habitos.map((habito) => {
                const IconoComponente = habito.icono;
                return (
                  <div key={habito.id} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Checkbox
                      id={habito.id}
                      checked={habitosState[habito.id] || false}
                      onCheckedChange={(checked) => manejarHabito(habito.id, checked as boolean)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <IconoComponente className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                        <Label htmlFor={habito.id} className="font-semibold cursor-pointer">
                          {habito.nombre}
                        </Label>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {habito.descripcion}
                      </p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        💡 {habito.impacto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <p className="text-emerald-800 dark:text-emerald-200">
                Has seleccionado <strong>{habitosCompletados}</strong> de <strong>{habitos.length}</strong> hábitos sostenibles
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={retrocederSeccion}
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Volver al Quiz
              </Button>
              
              <Button
                onClick={avanzarSeccion}
                className="eco-button"
              >
                Continuar a Calculadora
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {seccionActual === 'huella' && (
        <Card className="eco-card">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <CardTitle>Calculadora de Huella Ambiental</CardTitle>
            </div>
            <CardDescription>
              Responde estas preguntas para estimar tu impacto ambiental
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {preguntasHuella.map((pregunta) => {
              const IconoComponente = pregunta.icono;
              return (
                <div key={pregunta.id} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <IconoComponente className="h-5 w-5 text-gray-600" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {pregunta.pregunta}
                    </h3>
                  </div>
                  <RadioGroup
                    value={respuestasHuella[pregunta.id]?.toString() || ''}
                    onValueChange={(value) => manejarRespuestaHuella(pregunta.id, parseInt(value))}
                  >
                    {pregunta.opciones.map((opcion, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={opcion.valor.toString()}
                          id={`${pregunta.id}-${index}`}
                        />
                        <Label htmlFor={`${pregunta.id}-${index}`} className="cursor-pointer">
                          {opcion.texto}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              );
            })}

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={retrocederSeccion}
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Volver a Hábitos
              </Button>
              
              <Button
                onClick={avanzarSeccion}
                disabled={Object.keys(respuestasHuella).length < preguntasHuella.length}
                className="eco-button"
              >
                Ver Resultados
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}