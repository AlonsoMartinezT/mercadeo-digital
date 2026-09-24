# MD · Mercadeo Digital

Sitio web de MD, agencia de transformación digital. Contenido tomado de "MD — Identidad Corporativa" (sep 2026).

**Stack:** Next.js 16 (export estático) + Tailwind v4. Poppins + JetBrains Mono.
**Paleta:** azul profundo `#0b1f4d` / `#06122e`, cobalto `#1946d1`, turquesa eléctrico `#14e0cf`, niebla `#eef2f8`.

## Rutas
`/` · `/servicios` · `/servicios/{web,bots,social,automatiza,data,consulting}` · `/paquetes` · `/metodo` · `/para-quien` · `/nosotros` · `/contacto`

## Editar contenido
Todo vive en `src/data/md.ts`. **Pendiente:** llenar `contacto` (WhatsApp, correo, redes); los campos vacíos no se muestran.

## Desarrollo
```bash
npm install
npm run dev -- -p 3108
npm run build   # genera /out
```
`.github/workflows/deploy.yml` publica en GitHub Pages en `/mercadeo-digital` al hacer push a `main`.
