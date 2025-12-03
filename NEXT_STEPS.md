# Próximos pasos / pendientes

Mantén este archivo actualizado al final de cada sesión. Úsalo como checklist para el siguiente bloque de trabajo.

## Contenido y data

- Completar métricas/impacto reales en `lib/data/case-studies.ts` (reemplazar placeholders de impacto para EKA y Chill-n-Go, y otros casos si aplica).
- Evaluar si `domain` y `type` en proyectos/casos deben traducirse o quedarse en ES; ajustar a `{ es, en }` si se requieren en inglés.
- Añadir selector de idioma en páginas de caso si se desea cambio directo allí.

## Tooling y build

- Configurar ESLint (el comando `npm run lint` pide setup). Decidir si usar preset Next.js (Strict/Base) o una config personalizada.

## UX/UI

- Revisar fondo actual (blobs + grid) y ajustar opacidad/densidad si es necesario.
- Verificar imagen `public/me.png` en About: tamaño, blur y ring en dispositivos móviles.

## Deploy

- Confirmar que `pages.yml` despliega correctamente a `gh-pages` raíz (CNAME `jedabero.me` en `public/`).
- Verificar redirección `/ -> /es`/`/en` en GitHub Pages (static export).
