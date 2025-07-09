import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Settings, 
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Download,
  Trash2
} from 'lucide-react';

export function ConfiguracionContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuración</h1>
        <p className="text-lg text-gray-600">
          Personaliza tu experiencia en EcoEscuela
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span>Perfil</span>
              </CardTitle>
              <CardDescription>
                Actualiza tu información personal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-emerald-100 text-emerald-600 text-xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    Cambiar Foto
                  </Button>
                  <p className="text-sm text-gray-500 mt-1">
                    JPG, PNG o GIF. Máximo 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    defaultValue="Juan"
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    defaultValue="Pérez"
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="juan.perez@email.com"
                  className="focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Input
                  id="bio"
                  placeholder="Cuéntanos sobre ti..."
                  className="focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Guardar Cambios
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>Notificaciones</span>
              </CardTitle>
              <CardDescription>
                Controla qué notificaciones quieres recibir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Nuevas guías educativas</p>
                  <p className="text-sm text-gray-500">Recibe notificaciones cuando se publiquen nuevas guías</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Recordatorios de actividades</p>
                  <p className="text-sm text-gray-500">Te recordamos completar actividades pendientes</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Eventos de la comunidad</p>
                  <p className="text-sm text-gray-500">Notificaciones sobre eventos y webinars</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Logros y recompensas</p>
                  <p className="text-sm text-gray-500">Celebra tus logros con notificaciones especiales</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Newsletter semanal</p>
                  <p className="text-sm text-gray-500">Resumen semanal de tu progreso y novedades</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" aria-hidden="true" />
                <span>Privacidad y Seguridad</span>
              </CardTitle>
              <CardDescription>
                Controla la privacidad de tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Perfil público</p>
                  <p className="text-sm text-gray-500">Permite que otros usuarios vean tu perfil</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Mostrar progreso</p>
                  <p className="text-sm text-gray-500">Comparte tu progreso con la comunidad</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Permitir mensajes directos</p>
                  <p className="text-sm text-gray-500">Otros usuarios pueden enviarte mensajes</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Cambiar Contraseña
                </Button>
                <Button variant="outline" className="w-full">
                  Autenticación de Dos Factores
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-pink-600" aria-hidden="true" />
                <span>Apariencia</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tema</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    ☀️ Claro
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    🌙 Oscuro
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tamaño de fuente</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">
                    Pequeña
                  </Button>
                  <Button variant="outline" size="sm" className="bg-emerald-50">
                    Normal
                  </Button>
                  <Button variant="outline" size="sm">
                    Grande
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>Idioma</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma de la interfaz</Label>
                <select 
                  id="language"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Exportar Datos
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
                Eliminar Cuenta
              </Button>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Soporte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                Centro de Ayuda
              </Button>
              <Button variant="outline" className="w-full">
                Contactar Soporte
              </Button>
              <Button variant="outline" className="w-full">
                Reportar Problema
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}