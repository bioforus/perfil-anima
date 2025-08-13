# TranscriData · PÀGINA PERFIL (Anima → Vite + React + Tailwind)

Este proyecto fue exportado con **Anima** y viene listo para desplegarse en **GitHub Pages** con un workflow que construye automáticamente (Vite).

## 🚀 Publicar en GitHub Pages (sin tocar la terminal)
1. Crea un repo nuevo en GitHub (por ejemplo `perfil-anima`).
2. Sube **todo el contenido** de esta carpeta al repo (arrastra desde el navegador).
3. Ve a **Settings → Pages** y en *Build and deployment* elige **GitHub Actions** (no “Deploy from a branch”).
4. Cada vez que hagas **Commit** a `main`, el workflow ejecutará `npm install` y `npm run build` y publicará `dist/`.

> Nota: `vite.config.js` ya está con `base: "./"`, compatible con GitHub Pages.

## 🛠️ Dev local (opcional)
- Requiere Node 18+.
```bash
npm i
npm run dev
```
```bash
npm run build
npm run preview
```

## 📁 Estructura
- `src/` componentes React generados por Anima
- `tailwind.css` y `tailwind.config.js`
- `vite.config.js` base preparada para GitHub Pages
- `.github/workflows/deploy.yml` → publica automáticamente

---

Si prefieres **Netlify** o **Vercel**: importa el repo desde GitHub. Build: `npm run build`. Output: `dist`.
