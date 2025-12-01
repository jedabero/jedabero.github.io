import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Jedabero | Full Stack Engineer',
  description:
    'Portafolio enfocado en React, React Native, Node/Nest/Express y PostgreSQL. Casos de estudio privados.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} font-body bg-page-gradient bg-base-bg text-base-text`}>
        {children}
      </body>
    </html>
  );
}
