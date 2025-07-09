import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  Send
} from 'lucide-react';

export function ContactoContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacto y Soporte</h1>
        <p className="text-lg text-gray-600">
          ¿Necesitas ayuda? Estamos aquí para apoyarte en tu viaje de aprendizaje ambiental
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span>Envíanos un Mensaje</span>
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      placeholder="Tu nombre"
                      className="focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      placeholder="Tu apellido"
                      className="focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe tu consulta o problema..."
                    rows={6}
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & FAQ */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">info@ecoescuela.org</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Teléfono</p>
                  <p className="text-sm text-gray-600">+593 99 188 3708</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-purple-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ubicación</p>
                  <p className="text-sm text-gray-600">Guayaquil, Ecuador</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-orange-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Horario</p>
                  <p className="text-sm text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-yellow-600" aria-hidden="true" />
                <span>Preguntas Frecuentes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">¿Cómo puedo restablecer mi contraseña?</h4>
                <p className="text-sm text-gray-600">
                  Ve a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?"
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">¿Las guías tienen costo?</h4>
                <p className="text-sm text-gray-600">
                  No, todas nuestras guías educativas son completamente gratuitas.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">¿Puedo descargar las guías?</h4>
                <p className="text-sm text-gray-600">
                  Sí, puedes descargar las guías en formato PDF para uso offline.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">¿Cómo reporto un problema técnico?</h4>
                <p className="text-sm text-gray-600">
                  Usa el formulario de contacto o envía un email a soporte@ecoescuela.org
                </p>
              </div>

              <Button variant="outline" className="w-full">
                Ver Todas las FAQ
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Chat en Vivo
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Centro de Ayuda
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Reportar Bug
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}