import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function EcoFooter() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-lg">
                <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EcoEscuela</h3>
                <p className="text-sm text-gray-400">Educación Ambiental</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando la educación ambiental a través de recursos accesibles e inclusivos para estudiantes de 8 a 16 años.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Reciclaje', 'Energía', 'Clima', 'Sostenibilidad'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {['Guías educativas', 'Actividades', 'Videos', 'Juegos', 'Certificados'].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span className="text-gray-400">info@ecoescuela.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span className="text-gray-400">+593 99 188 3708</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span className="text-gray-400">Guayaquil, Ecuador</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 EcoEscuela. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Política de privacidad', 'Términos de uso', 'Accesibilidad'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}