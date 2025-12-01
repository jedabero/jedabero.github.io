"use client";

import { LangRedirect } from "@/components/lang-redirect";

export default function RootRedirect() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-page-gradient bg-grid text-base-muted">
      <LangRedirect currentLocale="es" targetPath="/" force />
      <p>Redirigiendo…</p>
    </main>
  );
}
