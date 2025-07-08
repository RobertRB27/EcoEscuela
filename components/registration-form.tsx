'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Calendar, User, Mail, X } from 'lucide-react';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
}

export function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'La fecha de nacimiento es requerida';
    } else {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      
      if (birthDate > today) {
        newErrors.birthDate = 'La fecha de nacimiento no puede ser futura';
      } else if (age > 120) {
        newErrors.birthDate = 'Por favor, verifica la fecha de nacimiento';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success - you would typically send this data to your backend
      console.log('Datos del formulario:', formData);
      
      // Reset form and close modal
      setFormData({
        firstName: '',
        lastName: '',
        birthDate: '',
        email: ''
      });
      
      alert('¡Registro exitoso! Te hemos enviado un correo de confirmación.');
      onClose();
      
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un error al procesar tu registro. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        firstName: '',
        lastName: '',
        birthDate: '',
        email: ''
      });
      setErrors({});
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              </div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Únete a EcoEscuela
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-gray-600">
            Completa tus datos para comenzar tu viaje de aprendizaje ambiental
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              Nombre *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Ingresa tu nombre"
              className={`focus:ring-emerald-500 focus:border-emerald-500 ${
                errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
              }`}
              disabled={isSubmitting}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-600" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Apellido */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Apellido *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Ingresa tu apellido"
              className={`focus:ring-emerald-500 focus:border-emerald-500 ${
                errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
              }`}
              disabled={isSubmitting}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-600" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Fecha de nacimiento */}
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-sm font-medium text-gray-700">
              Fecha de nacimiento *
            </Label>
            <div className="relative">
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className={`focus:ring-emerald-500 focus:border-emerald-500 ${
                  errors.birthDate ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.birthDate ? 'birthDate-error' : undefined}
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" aria-hidden="true" />
            </div>
            {errors.birthDate && (
              <p id="birthDate-error" className="text-sm text-red-600" role="alert">
                {errors.birthDate}
              </p>
            )}
          </div>

          {/* Correo electrónico */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Correo electrónico *
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="ejemplo@correo.com"
                className={`focus:ring-emerald-500 focus:border-emerald-500 pl-10 ${
                  errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Registrando...
                </>
              ) : (
                'Crear cuenta'
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
            >
              Cancelar
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Al registrarte, aceptas nuestros{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
              términos de servicio
            </a>{' '}
            y{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
              política de privacidad
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}