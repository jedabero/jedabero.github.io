# Próximos pasos / pendientes

Mantén este archivo actualizado al final de cada sesión. Úsalo como checklist para el siguiente bloque de trabajo.

## Contenido y data

- Completar métricas/impacto reales en `lib/data/case-studies.ts` (EKA, Chill-n-Go, Glooko, Pluriza, IDI).
- Evaluar si `domain` y `type` en proyectos/casos deben traducirse o quedarse en ES; ajustar a `{ es, en }` si se requieren en inglés.
- Añadir selector de idioma en páginas de caso si se desea cambio directo allí.
- Redactar contenido inicial para `app/blog` (al menos un post o placeholder descriptivo).

## Tooling y build

- Configurar ESLint (el comando `npm run lint` pide setup). Decidir si usar preset Next.js (Strict/Base) o una config personalizada.
- Considerar añadir `package-lock.json` tras `npm install` para builds reproducibles.
- Probar `components/lang-redirect` con `navigator.language` variado (es-419, en-US, locales desconocidos) en export estático para asegurar que la redirección funciona sin loops ni 404.

## UX/UI

- Revisar fondo actual (blobs + grid) y ajustar opacidad/densidad si es necesario.
- Verificar imagen `public/me.png` en About: tamaño, blur y ring en dispositivos móviles.
- Evaluar si conviene agregar sección “Playground” en home consumiendo `lib/data/playground.ts` para mayor visibilidad.

## Monetización

- Validar que el script de AdSense cargue correctamente en `app/layout.tsx` tras `next export` y que no genere CLS ni bloqueos de render en la build estática.

## Deploy

- Confirmar que `pages.yml` despliega correctamente a `gh-pages` raíz (CNAME `jedabero.me` en `public/`).
- Verificar redirección `/ -> /es`/`/en` en GitHub Pages (static export).
