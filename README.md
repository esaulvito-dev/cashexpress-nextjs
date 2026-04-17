# Cash Express - Next.js

Landing page de **IA-Cash Express** migrada de Vite + React a **Next.js 15 (App Router)** con React 19, TypeScript y Tailwind CSS.

Mantiene el diseño, textos, animaciones y funcionalidad idénticos al proyecto original (Readdy/Lovable).

---

## 🚀 Cómo ejecutar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (http://localhost:3000)
npm run dev

# 3. Build de producción
npm run build

# 4. Levantar producción
npm start
```

---

## 📦 Estructura del proyecto

```
cashexpress-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        → Layout raíz + Pixel de Meta + Inter font
│   │   ├── page.tsx          → Landing principal (Server Component)
│   │   ├── not-found.tsx     → Página 404 personalizada
│   │   └── globals.css       → Tailwind base
│   └── components/
│       └── CountdownTimer.tsx → Contador regresivo (Client Component)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 Qué cambió respecto al original

| Antes (Vite + React Router) | Ahora (Next.js 15) |
|---|---|
| `src/App.tsx` + `BrowserRouter` | App Router nativo de Next.js |
| `src/pages/home/page.tsx` (SPA) | `src/app/page.tsx` (Server Component → SEO mejor) |
| `index.html` + Pixel hardcoded | `layout.tsx` con `<Script>` optimizado |
| i18n genérico | Removido (no había traducciones activas) |
| Firebase / Supabase / Stripe / Recharts | Removidas (no se usaban en la landing) |
| Google Fonts vía `<link>` | `next/font/google` (auto-optimizado) |

**Resultado:** menos dependencias, mejor SEO, carga más rápida, y listo para Vercel.

---

## 🔧 Variables de entorno (opcional)

Copiá `.env.example` a `.env.local` si querés sobrescribir la URL de WhatsApp:

```bash
NEXT_PUBLIC_WHATSAPP_URL=https://cashexpressgracias.esaullorenzo.es/
```

Actualmente la URL está hardcoded en `src/app/page.tsx` para mantener el comportamiento idéntico al original.

---

## 🌐 Despliegue

### Opción 1 — Vercel (recomendado, 1 clic)

1. Subí el proyecto a GitHub.
2. Entrá a [vercel.com/new](https://vercel.com/new) y conectá el repo.
3. Deploy automático. Vercel detecta Next.js solo.
4. Configurá tu dominio `cashexpress.esaullorenzo.es` en Vercel → Domains.

### Opción 2 — VPS Hostinger (Docker en EasyPanel)

1. Subí el proyecto a un repo.
2. En EasyPanel creá un nuevo servicio **App** con build desde Git.
3. Build command: `npm run build`
4. Start command: `npm start`
5. Puerto interno: `3000`
6. Apuntá tu dominio al contenedor.

### Opción 3 — Static export (hosting simple)

Si querés subirlo a un hosting sin Node.js, agregá a `next.config.mjs`:

```js
output: "export",
```

Y luego:

```bash
npm run build
# Se genera la carpeta /out con HTML estático
```

---

## 🔌 Integraciones activas

- ✅ **Meta Pixel** `793340195800027` (PageView auto)
- ✅ **CTAs → WhatsApp** apuntan a `cashexpressgracias.esaullorenzo.es`
- ✅ **Socials** TikTok, YouTube, Instagram (@esaullorenzo)

---

## 📝 Próximos pasos sugeridos

- [ ] Agregar evento `Lead` al Pixel cuando hacen clic en CTA
- [ ] Mover imágenes de `static.readdy.ai` a `/public` o Cloudinary
- [ ] Reemplazar contador 24h por fecha fija de la próxima clase
- [ ] Agregar Google Analytics / GA4 si lo necesitás
