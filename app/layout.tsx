import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EcoEscuela - Educación Ambiental para Todos',
  description: 'Plataforma educativa accesible e inclusiva para el aprendizaje sobre medio ambiente y sostenibilidad.',
  keywords: 'educación ambiental, sostenibilidad, ecología, educación inclusiva, medio ambiente',
  authors: [{ name: 'EcoEscuela' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'EcoEscuela - Educación Ambiental para Todos',
    description: 'Plataforma educativa accesible e inclusiva para el aprendizaje sobre medio ambiente y sostenibilidad.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}