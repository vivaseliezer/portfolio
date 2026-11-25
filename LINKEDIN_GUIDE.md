# Guía Completa: Personaliza, Agrega Tus Juegos y Publica tu Portafolio en LinkedIn

Esta guía está pensada para ayudarte a destacar ante **empresas de tecnología y reclutadores en Estados Unidos** como **Junior Full-Stack Software Developer**.

---

## 1. Personaliza tus datos en 2 minutos (`config.js`)

Abre el archivo `config.js` y reemplaza solo tus datos reales en la parte superior:

- `fullName`: Tu nombre completo (ej. `"Orlando Alvarez"`).
- `location`: Tu ciudad y estado en EE. UU. (ej. `"Miami, FL — Open to On-site, Hybrid & Remote"`).
- `links.email`: Tu correo profesional (ej. `nombre.apellido@gmail.com`).
- `links.linkedin`: Tu URL real de LinkedIn (ej. `https://www.linkedin.com/in/tu-perfil`).
- `links.github`: Tu URL real de GitHub (ej. `https://github.com/tu-usuario`).
- `projects`: Conforme vayas terminando y subiendo tus repositorios reales a GitHub, actualiza los enlaces `githubUrl` y `demoUrl`.

> **Consejo para reclutadores en EE. UU.:** Nunca dejes enlaces rotos o de ejemplo antes de aplicar a un trabajo. Es mejor mostrar 2 o 3 proyectos reales funcionando que 6 enlaces vacíos.

---

## 2. Cómo agregar tus propios juegos (Jugables con 1 Clic)

Tu portafolio ya tiene una sección especial llamada **Interactive Arcade Lab / Zona Interactiva de Juegos** (`#games`).

### Opción A: Juego web propio (HTML / CSS / JS, Unity WebGL o Godot HTML5)
1. Crea una carpeta dentro de `games/`, por ejemplo: `games/mi-juego/` y coloca ahí tu `index.html` (y sus scripts/assets).
2. Abre `config.js`, busca la sección `games: [ ... ]` y agrega un bloque como este:

```js
{
  id: "mi-juego",
  status: "playable",
  openMode: "modal",
  playUrl: "./games/mi-juego/index.html",
  githubUrl: "https://github.com/tu-usuario/mi-juego",
  accent: "emerald", // "cyan", "purple" o "emerald"
  tech: ["C# / Unity WebGL", "Game Logic"],
  en: {
    genre: "Action • 1-Click Playable",
    title: "My Awesome Game",
    description: "Short description of what the game does and the engineering behind it.",
    controls: "WASD to move • Space to jump",
  },
  es: {
    genre: "Acción • Jugable en 1 Clic",
    title: "Mi Gran Juego",
    description: "Descripción breve del juego y la lógica de programación detrás.",
    controls: "WASD para mover • Espacio para saltar",
  },
}
```

### Opción B: Juego publicado en itch.io o GitHub Pages
Si subiste tu juego a **itch.io** o a otro repositorio de GitHub Pages:
- Pon la URL en `playUrl`.
- Si el sitio permite `iframe`, deja `openMode: "modal"`.
- Si el sitio bloquea `iframe` (por seguridad), cambia a `openMode: "newtab"` y el botón **Play Now** lo abrirá directamente en una pestaña nueva con 1 clic.

---

## 3. Publica tu portafolio GRATIS online (para ponerlo en LinkedIn)

### Opción más rápida: Netlify Drop (1 minuto, formulario de contacto gratis)
1. Entra a [app.netlify.com](https://app.netlify.com) y crea una cuenta gratis con tu GitHub.
2. Arrastra la carpeta completa `portfolio` a Netlify Drop (o conecta tu repo de GitHub para que se actualice automático con cada `git push`).
3. Tu formulario de contacto ya trae `data-netlify="true"`, así que los mensajes de reclutadores te llegarán directo al panel de Netlify y a tu correo.
4. Cambia el nombre del sitio en *Site Configuration → Change site name* a algo profesional como `orlando-dev.netlify.app`.

### Opción alternativa: GitHub Pages (100% gratis)
1. Crea un repositorio en GitHub llamado `portfolio` (o `tu-usuario.github.io`).
2. Sube esta carpeta al repositorio con `git add .`, `git commit -m "Initial portfolio"` y `git push`.
3. En GitHub ve a **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
4. En 1 minuto tendrás tu enlace listo (`https://tu-usuario.github.io/portfolio/`).

---

## 4. Cómo poner tu portafolio y destacar en LinkedIn (Mercado EE. UU.)

### A. Agrega el enlace en tu sección "Featured" (Destacados)
1. Ve a tu perfil de LinkedIn → **Add profile section → Recommended → Add featured**.
2. Elige **Add a link** y pega la URL de tu portafolio publicado (Netlify o GitHub Pages).
3. Gracias a las etiquetas Open Graph y a `og-preview.png`, LinkedIn mostrará una tarjeta visual profesional automáticamente.
4. Pon de título: `Software Developer Portfolio & Playable Web Games`.

### B. Agrega tu enlace debajo de tu Titular (Website link)
En LinkedIn → **Edit intro** (lápiz arriba a la derecha) → **Website** → pega tu URL y pon el texto del enlace: `View My Portfolio & Projects`.

### C. Titular recomendado (Headline) para LinkedIn en EE. UU.
```text
Junior Full-Stack Software Developer | C# • Python • JavaScript • MySQL | Bilingual (EN/ES) | Building Web Apps, REST APIs & Interactive Games
```

### D. Texto recomendado para tu sección "About" en LinkedIn
```text
I’m a bilingual (English/Spanish) Junior Full-Stack Software Developer focused on building clean web applications, reliable REST APIs, and normalized MySQL databases using C#, Python, JavaScript, HTML5, and CSS3.

What I bring to an engineering team:
• Solid fundamentals across frontend UX, backend API design, and relational SQL
• Practical problem solving — from business CRUD & data pipelines to interactive browser games
• Clear bilingual communication (EN/ES) and strong Git/GitHub habits

Explore my portfolio, case studies, and 1-click playable browser games here: [TU_URL_AQUI]

Open to Junior Software Developer, Entry-Level Full-Stack, and Backend/SQL roles (On-site, Hybrid, or Remote in the US). Let’s connect!
```

### E. Ideas de proyectos reales para construir en tus repositorios de GitHub
Las empresas en EE. UU. aman ver estos 3 repositorios en perfiles Junior con tu stack (`C#`, `Python`, `JavaScript`, `MySQL`):
1. **Inventory & Order API (C# + .NET + MySQL)**: CRUD completo con validaciones, consultas JOIN y un README con diagrama de tablas.
2. **Agile Task / Bug Tracker (Python Flask/FastAPI + MySQL + JS)**: Muestra que entiendes cómo trabajan los equipos de ingeniería (tickets, sprints, estados).
3. **Tus Juegos Web Jugables**: Muestra creatividad, lógica de programación, estructuras de datos y capacidad de terminar y publicar software interactivo.
