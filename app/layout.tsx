import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Jedabero | Full Stack Engineer",
  description:
    "Portafolio enfocado en React, React Native, Node/Nest/Express y PostgreSQL. Casos de estudio privados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} font-body bg-page-gradient bg-base-bg text-base-text`}
      >
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3740467952996532"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
