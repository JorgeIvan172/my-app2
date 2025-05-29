
// app/layout.tsx
import '../i18n/i18n'; // Importa i18n una vez, global
import type { Metadata } from 'next';

// Google Fonts
import { Geist, Geist_Mono } from 'next/font/google';

// Estilos globales y externos
import './globals.css'; // Usa esto para estilos base (renombra si era page.module.css)
import '../src/Css/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Carga de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata del sitio
export const metadata: Metadata = {
  title: 'Mi sitio',
  description: 'Sitio multilenguaje',
};

// Layout principal
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
