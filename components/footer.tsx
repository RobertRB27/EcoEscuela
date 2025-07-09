import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
                <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EcoEscuela</h3>
                <p className="text-sm text-emerald-400">Educación Ambiental</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Transformando la educación ambiental a través de recursos accesibles e inclusivos para todos los estudiantes.
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
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm p-1"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Reciclaje', 'Energía', 'Clima', 'Sostenibilidad'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Recursos</h4>
            <ul className="space-y-2">
              {['Guías educativas', 'Actividades', 'Blog', 'Herramientas'].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Contacto</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'info@ecoescuela.org' },
                { icon: Phone, text: '+593 99 188 3708' },
                { icon: MapPin, text: 'Guayaquil, Ecuador' }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3">
                  <Icon className="h-4 w-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
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