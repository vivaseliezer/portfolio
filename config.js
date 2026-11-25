/**
 * Portfolio Data — Orlando Vivas
 * Organized by separate category folders: games, ecommerce, websites, python.
 */

window.PORTFOLIO_CONFIG = {
  firstName: "Orlando",
  lastName: "Vivas",
  fullName: "Orlando Vivas",
  brandTag: "Orlando Vivas",
  location: {
    en: "Springfield, VA — Open to On-site, Hybrid & Remote",
    es: "Springfield, VA — Presencial, Híbrido y Remoto",
  },
  availability: {
    en: "SPRINGFIELD, VA · OPEN TO JUNIOR SOFTWARE ROLES",
    es: "SPRINGFIELD, VA · DISPONIBLE PARA ROLES JUNIOR",
  },

  links: {
    email: "oralvivas122@gmail.com",
    schoolEmail: "ovivasramirez@byupathway.edu",
    linkedin: "https://www.linkedin.com/in/orlando-vivas-a7278544/",
    github: "https://github.com/vivaseliezer",
    resumeHtml: "./resume.html",
    resumePdf: "./Orlando_Vivas_Resume.pdf",
  },

  // Hero visual showcase (highlights across Games, E-Commerce, and Python)
  showcase: [
    {
      id: "dead-night",
      itemId: "dead-night",
      image: "./assets/previews/dead-night.png",
      en: {
        tab: "Dead Night",
        caption: "Dead Night — 10-level zombie shooter with dynamic flashlight lighting & Web Audio.",
        cta: "Play Dead Night",
      },
      es: {
        tab: "Noche Muerta",
        caption: "Noche Muerta — Shooter de 10 niveles con linterna dinámica en tiempo real y Web Audio.",
        cta: "Jugar Noche Muerta",
      },
    },
    {
      id: "ecommerce-store",
      itemId: "ecommerce-store",
      image: "./assets/previews/ecommerce.png",
      en: {
        tab: "E-Commerce",
        caption: "Fieldwork.Store — Interactive storefront with search, category filters, cart & 6% VA tax.",
        cta: "Open Live Store",
      },
      es: {
        tab: "E-Commerce",
        caption: "Fieldwork.Store — Tienda interactiva con buscador, filtros, carrito e impuestos.",
        cta: "Abrir Tienda en Vivo",
      },
    },
    {
      id: "harvest-valley",
      itemId: "harvest-valley",
      image: "./assets/previews/harvest-valley.png",
      en: {
        tab: "Harvest Valley",
        caption: "Harvest Valley Farm — Canvas farming simulator with live weather & market prices.",
        cta: "Play Harvest Valley",
      },
      es: {
        tab: "Harvest Valley",
        caption: "Harvest Valley Farm — Simulador de granja en Canvas con clima y precios dinámicos.",
        cta: "Jugar Harvest Valley",
      },
    },
    {
      id: "billing-software",
      itemId: "billing-software",
      image: "./assets/billing-software.png",
      en: {
        tab: "Billing App",
        caption: "Retail Billing Software — Python Tkinter POS calculating taxes & archiving receipts.",
        cta: "Read Technical Notes",
      },
      es: {
        tab: "Billing App",
        caption: "Billing Software — App de escritorio en Python Tkinter con impuestos y archivo de recibos.",
        cta: "Ver Notas Técnicas",
      },
    },
  ],

  // 5 Separate Technology Folders (JavaScript, Python, C#, MySQL, HTML & CSS)
  folders: [
    {
      id: "javascript",
      path: "javascript/",
      en: {
        name: "JavaScript",
        summary: "4 playable browser games + live E-Commerce storefront",
      },
      es: {
        name: "JavaScript",
        summary: "4 juegos jugables en 1 clic + tienda E-Commerce en vivo",
      },
    },
    {
      id: "python",
      path: "python/",
      en: {
        name: "Python",
        summary: "Billing POS, Sudoku Solver, Parking, Phonebook & 120+ scripts",
      },
      es: {
        name: "Python",
        summary: "Billing POS, Sudoku Solver, Parking, Phonebook y 120+ scripts",
      },
    },
    {
      id: "csharp",
      path: "csharp/",
      en: {
        name: "C#",
        summary: "OOP models, LINQ queries & .NET backend modules",
      },
      es: {
        name: "C#",
        summary: "Modelos POO, consultas LINQ y módulos backend .NET",
      },
    },
    {
      id: "mysql",
      path: "mysql/",
      en: {
        name: "MySQL",
        summary: "Normalized 3NF schemas, foreign keys & reporting JOINs",
      },
      es: {
        name: "MySQL",
        summary: "Esquemas normalizados 3FN, llaves foráneas y reportes JOIN",
      },
    },
    {
      id: "html-css",
      path: "html-css/",
      en: {
        name: "HTML & CSS",
        summary: "Travel landing page & pure CSS keyframe animations",
      },
      es: {
        name: "HTML y CSS",
        summary: "Sitio web de viajes y animaciones en CSS puro",
      },
    },
  ],

  // All items organized by technology folder
  items: [
    // ================= FOLDER: JAVASCRIPT =================
    {
      id: "dead-night",
      folder: "javascript",
      kind: "live",
      image: "./assets/previews/dead-night.png",
      liveUrl: {
        en: "./games/dead-night/index.html",
        es: "./games/noche-muerta/index.html",
      },
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/dead-night",
      stack: ["HTML5 Canvas", "JavaScript", "Web Audio API", "Bilingual EN/ES"],
      en: {
        tag: "games / shooter",
        title: "Dead Night",
        summary:
          "10-level zombie survival shooter with endless Survival, 6-boss Boss Rush, offscreen dynamic flashlight lighting, weather particles, and procedural Web Audio SFX.",
        controls: "WASD / Arrows: Move · Mouse: Aim & Shoot · Space: Dash · F: Ultimate",
        actionLabel: "Play Game",
        problem: "Building smooth 60 FPS gameplay with dynamic darkness and audio directly in the browser with zero asset downloads.",
        solution: "Rendered lighting on a half-resolution offscreen canvas with destination-out gradients and synthesized every gunshot/roar via Web Audio.",
        highlights: [
          "10 distinct campaign zones, 4 unlockable weapons, and 6 multi-phase bosses",
          "Procedural Web Audio engine (no external MP3 files required)",
          "Full English (Dead Night) and Spanish (Noche Muerta) editions auto-switched by portfolio language",
        ],
        codeSnippetTitle: "Dead Night — Offscreen Dynamic Flashlight",
        codeSnippet: `L.globalCompositeOperation = "destination-out";\nconst fl = L.createRadialGradient(p.x, p.y, 20, p.x, p.y, 520);\nfl.addColorStop(0, "rgba(0,0,0,.95)");\nfl.addColorStop(1, "rgba(0,0,0,0)");\nL.fillStyle = fl;\nL.beginPath(); L.moveTo(p.x, p.y);\nL.arc(p.x, p.y, 520, p.angle - 0.42, p.angle + 0.42);\nL.closePath(); L.fill();`,
      },
      es: {
        tag: "games / shooter",
        title: "Noche Muerta (Dead Night)",
        summary:
          "Shooter de supervivencia zombie con 10 niveles de campaña, modo Supervivencia, Boss Rush de 6 jefes, linterna dinámica en tiempo real y audio Web Audio.",
        controls: "WASD / Flechas: Mover · Mouse: Apuntar y Disparar · Espacio: Dash · F: Ataque Final",
        actionLabel: "Jugar Ahora",
        problem: "Lograr 60 FPS fluidos con oscuridad dinámica y efectos de sonido en navegador sin depender de archivos pesados.",
        solution: "Calculé la iluminación en un canvas secundario a media resolución y sinteticé cada disparo y rugido con Web Audio API.",
        highlights: [
          "10 niveles de campaña, 4 armas desbloqueables y 6 jefes con fases",
          "Motor de sonido procedural con Web Audio (sin archivos MP3)",
          "Versiones completas en inglés y español que cambian con el idioma del portafolio",
        ],
        codeSnippetTitle: "Dead Night — Linterna Dinámica en Canvas",
        codeSnippet: `L.globalCompositeOperation = "destination-out";\nconst fl = L.createRadialGradient(p.x, p.y, 20, p.x, p.y, 520);\nfl.addColorStop(0, "rgba(0,0,0,.95)");\nfl.addColorStop(1, "rgba(0,0,0,0)");\nL.fillStyle = fl;\nL.beginPath(); L.moveTo(p.x, p.y);\nL.arc(p.x, p.y, 520, p.angle - 0.42, p.angle + 0.42);\nL.closePath(); L.fill();`,
      },
    },
    {
      id: "harvest-valley",
      folder: "javascript",
      kind: "live",
      image: "./assets/previews/harvest-valley.png",
      liveUrl: "./games/harvest-valley/index.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/harvest-valley",
      stack: ["HTML5 Canvas", "JavaScript", "Game Economy", "LocalStorage"],
      en: {
        tag: "games / simulation",
        title: "Harvest Valley Farm",
        summary:
          "Handheld-style farming simulator with animated canvas crops, sunny & rainy weather cycles, fluctuating market prices, daily energy limits, and automatic browser saves.",
        controls: "Click or tap plots to plant, water, harvest & sell crops at the market",
        actionLabel: "Play Game",
        problem: "Keeping canvas animations synchronized with inventory counts, daily weather states, and persistent saves.",
        solution: "Centralized game state persisted to LocalStorage that drives both the 2D Canvas farm scene and the DOM market/inventory UI.",
        highlights: [
          "Animated Canvas farm plots, farmer movement, windmill, and rain particles",
          "Dynamic daily prices for Wheat, Corn, and Carrots with trend indicators",
          "Automatic LocalStorage persistence across sessions",
        ],
        codeSnippetTitle: "Harvest Valley — Render Loop",
        codeSnippet: `function draw(ms) {\n  const t = ms / 1000;\n  drawSky(t); drawLand();\n  drawPlots(t); drawFarmer(t);\n  drawRain(); drawFloaters();\n  requestAnimationFrame(draw);\n}`,
      },
      es: {
        tag: "games / simulación",
        title: "Harvest Valley Farm",
        summary:
          "Simulador de granja estilo consola portátil con cultivos animados en Canvas, días soleados y lluviosos, precios cambiantes de mercado y guardado automático.",
        controls: "Haz clic o toca las parcelas para plantar, regar, cosechar y vender",
        actionLabel: "Jugar Ahora",
        problem: "Sincronizar la escena animada en Canvas con el inventario, clima diario y progreso guardado.",
        solution: "Centralicé el estado con guardado en LocalStorage para alimentar tanto el Canvas como los paneles de mercado e inventario.",
        highlights: [
          "Parcelas animadas, granjero en movimiento, molino y lluvia en Canvas 2D",
          "Precios variables para Trigo, Maíz y Zanahoria con flechas de tendencia",
          "Guardado automático en LocalStorage",
        ],
        codeSnippetTitle: "Harvest Valley — Bucle de Dibujo",
        codeSnippet: `function draw(ms) {\n  const t = ms / 1000;\n  drawSky(t); drawLand();\n  drawPlots(t); drawFarmer(t);\n  drawRain(); drawFloaters();\n  requestAnimationFrame(draw);\n}`,
      },
    },
    {
      id: "the-goat",
      folder: "javascript",
      kind: "live",
      image: "./assets/previews/goat.png",
      liveUrl: "./games/goat/index.html",
      githubUrl: "https://github.com/vivaseliezer/goat",
      stack: ["4K Canvas", "JavaScript", "Entity AI", "CSS3"],
      en: {
        tag: "games / action",
        title: "The Goat vs The Legends",
        summary:
          "4K Canvas folklore action brawler where you defend your home against El Cadejo, La Llorona, and El Duende using directional movement and ram attacks.",
        controls: "WASD / Arrows: Move · Space: Ram Attack",
        actionLabel: "Play Game",
        problem: "Structuring multi-enemy AI and responsive controls cleanly on a high-resolution 3840×2160 Canvas.",
        solution: "Separated entity classes (js/entities.js) from the main update/render loop (js/game.js) with health HUD and score tracking.",
        highlights: [
          "Modular JavaScript files separating entities and game engine",
          "3 distinct folklore enemy archetypes with collision and ram mechanics",
          "Public GitHub repository at vivaseliezer/goat",
        ],
        codeSnippetTitle: "goat/index.html — 4K Canvas Setup",
        codeSnippet: `<canvas id="gameCanvas" width="3840" height="2160"></canvas>\n<script src="js/entities.js"></script>\n<script src="js/game.js"></script>`,
      },
      es: {
        tag: "games / acción",
        title: "The Goat vs The Legends",
        summary:
          "Juego de acción en Canvas 4K donde defiendes tu casa contra El Cadejo, La Llorona y El Duende con movimiento direccional y ataques de embestida.",
        controls: "WASD / Flechas: Mover · Espacio: Embestir",
        actionLabel: "Jugar Ahora",
        problem: "Organizar la IA de varios enemigos y controles fluidos sobre un Canvas de alta resolución.",
        solution: "Separé las entidades (js/entities.js) del bucle principal (js/game.js) con barra de vida y puntaje.",
        highlights: [
          "Módulos JavaScript limpios separando entidades y motor",
          "3 leyendas enemigas con colisiones y mecánica de embestida",
          "Repositorio público en GitHub: vivaseliezer/goat",
        ],
        codeSnippetTitle: "goat/index.html — Configuración Canvas 4K",
        codeSnippet: `<canvas id="gameCanvas" width="3840" height="2160"></canvas>\n<script src="js/entities.js"></script>\n<script src="js/game.js"></script>`,
      },
    },
    {
      id: "car-game",
      folder: "javascript",
      kind: "live",
      image: "./assets/previews/car-game.png",
      liveUrl: "./games/car-game/index.html",
      githubUrl: "https://github.com/vivaseliezer/carGAME",
      stack: ["JavaScript (ES6+)", "DOM Animation", "AABB Collision", "CSS3"],
      en: {
        tag: "games / arcade",
        title: "Highway Car Dodge",
        summary:
          "Fast-paced highway dodging game with progressive speed scaling, randomized traffic lanes, real-time bounding-box collision checks, and live high-score tracking.",
        controls: "Click Start · Arrow Keys to steer and dodge oncoming cars",
        actionLabel: "Play Game",
        problem: "Implementing smooth frame-by-frame obstacle motion and collision checks using pure DOM & requestAnimationFrame.",
        solution: "Used continuous road-line recycling, dynamic speed increments per frame, and getBoundingClientRect() AABB collision detection.",
        highlights: [
          "Real-time AABB bounding-box collision detection",
          "Progressive speed scaling and live High Score tracking",
          "Public GitHub repository at vivaseliezer/carGAME",
        ],
        codeSnippetTitle: "carGAME/game.js — Collision Check",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
      es: {
        tag: "games / arcade",
        title: "Highway Car Dodge",
        summary:
          "Juego arcade de velocidad en autopista con aceleración progresiva, tráfico aleatorio, detección de colisiones en tiempo real y marcador de récord.",
        controls: "Haz clic en Start · Flechas del teclado para esquivar autos",
        actionLabel: "Jugar Ahora",
        problem: "Lograr movimiento continuo y detección precisa de colisiones en JavaScript puro.",
        solution: "Reciclaje de líneas de carretera por frame, aumento gradual de velocidad y colisiones AABB con getBoundingClientRect().",
        highlights: [
          "Detección de colisiones AABB en tiempo real",
          "Velocidad progresiva y seguimiento de récord en vivo",
          "Repositorio público en GitHub: vivaseliezer/carGAME",
        ],
        codeSnippetTitle: "carGAME/game.js — Detección de Colisiones",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
    },

    // ================= FOLDER: E-COMMERCE =================
    {
      id: "ecommerce-store",
      folder: "javascript",
      kind: "live",
      image: "./assets/previews/ecommerce.png",
      liveUrl: "./projects/ecommerce/index.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/projects/ecommerce",
      stack: ["JavaScript (ES6+)", "HTML5 / CSS3", "Shopping Cart State", "LocalStorage"],
      en: {
        tag: "ecommerce / live storefront",
        title: "Fieldwork.Store — Interactive E-Commerce App",
        summary:
          "Working online storefront for desk & developer gear featuring instant search, category filters, price sorting, slide-out shopping cart, promo code SAVE10, 6% VA sales tax, and demo checkout.",
        controls: "Browse products · Add to Cart · Open Cart · Apply promo code SAVE10",
        actionLabel: "Open Live Store",
        problem: "Showing practical e-commerce frontend engineering: dynamic filtering, accurate money/tax math, and persistent cart state.",
        solution: "Built a zero-dependency JavaScript storefront syncing product filters, quantity controls, promo discounts, and 6% Virginia tax calculations with LocalStorage.",
        highlights: [
          "Live search bar, category filters (Workspace, Audio, Accessories), and price sorting",
          "Slide-out cart drawer with quantity +/- controls and LocalStorage persistence",
          "Promo code validation (SAVE10 for 10% off), 6% VA sales tax, and demo order confirmation",
        ],
        codeSnippetTitle: "projects/ecommerce — Subtotal, Promo & 6% VA Tax",
        codeSnippet: `const discount = subtotal * discountRate;\nconst taxedBase = subtotal - discount;\nconst tax = taxedBase * 0.06;\nconst total = taxedBase + tax;`,
      },
      es: {
        tag: "ecommerce / tienda en vivo",
        title: "Fieldwork.Store — Tienda E-Commerce Interactiva",
        summary:
          "Tienda online funcional de equipo para desarrolladores con buscador en tiempo real, filtros por categoría, orden por precio, carrito lateral, código SAVE10, impuesto 6% VA y checkout demo.",
        controls: "Busca productos · Agrega al carrito · Abre Cart · Prueba el código SAVE10",
        actionLabel: "Abrir Tienda",
        problem: "Demostrar ingeniería práctica de e-commerce: filtros dinámicos, cálculos de descuentos/impuestos y persistencia de carrito.",
        solution: "Construí una tienda en JavaScript puro con carrito en LocalStorage, controles de cantidad, cupón SAVE10 e impuesto estatal del 6%.",
        highlights: [
          "Buscador en vivo, filtros (Workspace, Audio, Accessories) y orden por precio",
          "Carrito lateral con botones +/- y guardado automático en LocalStorage",
          "Validación de cupón (SAVE10 para 10% OFF), cálculo de impuestos y confirmación de pedido",
        ],
        codeSnippetTitle: "projects/ecommerce — Cálculo de Cupón e Impuesto",
        codeSnippet: `const discount = subtotal * discountRate;\nconst taxedBase = subtotal - discount;\nconst tax = taxedBase * 0.06;\nconst total = taxedBase + tax;`,
      },
    },

    // ================= FOLDER: HTML & CSS =================
    {
      id: "travel-website",
      folder: "html-css",
      kind: "live",
      image: "./assets/previews/travel-website.png",
      liveUrl: "./projects/travel-website/index.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/projects/travel-website",
      stack: ["HTML5", "CSS3", "Responsive Grid", "UI Layout"],
      en: {
        tag: "websites / landing page",
        title: "Go Trip — Travel Agency Website",
        summary:
          "Multi-section travel booking landing page with hero destination search & date picker, service highlights, featured tour package cards with zoom hover effects, and about/footer sections.",
        controls: "Scroll through sections · Test destination autocomplete & date picker",
        actionLabel: "Open Live Site",
        problem: "Designing a clean, multi-section commercial website layout using semantic HTML and pure CSS.",
        solution: "Structured sticky navigation, destination datalist form, flexbox service bar, and zoom-hover CSS Grid tour cards.",
        highlights: [
          "Destination autocomplete input with HTML5 datalist and date selector",
          "Featured tour cards with smooth CSS image-zoom transitions",
          "Clean multi-section structure (Hero, Services, Featured Places, About, Footer)",
        ],
        codeSnippetTitle: "travel-website/index.html — Destination Search Form",
        codeSnippet: `<form class="form">\n  <input type="text" list="mylist" placeholder="Where would you like to go?">\n  <input type="date" class="date">\n  <a href="#" class="book">book</a>\n</form>`,
      },
      es: {
        tag: "websites / landing page",
        title: "Go Trip — Sitio Web de Agencia de Viajes",
        summary:
          "Página comercial de agencia de viajes con buscador de destinos y selector de fecha, sección de servicios, tarjetas de paquetes turísticos con efecto zoom y pie de página.",
        controls: "Recorre las secciones · Prueba el buscador de destinos y fecha",
        actionLabel: "Abrir Sitio Web",
        problem: "Construir un sitio comercial completo de varias secciones con HTML semántico y CSS puro.",
        solution: "Implementé barra de navegación, formulario con datalist de destinos, grilla de paquetes turísticos con hover zoom y diseño adaptable.",
        highlights: [
          "Buscador de destinos con autocompletado HTML5 y selector de fecha",
          "Tarjetas de paquetes con transiciones suaves de zoom en CSS",
          "Estructura completa: Banner, Servicios, Destinos, Nosotros y Footer",
        ],
        codeSnippetTitle: "travel-website/index.html — Buscador de Destinos",
        codeSnippet: `<form class="form">\n  <input type="text" list="mylist" placeholder="Where would you like to go?">\n  <input type="date" class="date">\n  <a href="#" class="book">book</a>\n</form>`,
      },
    },
    {
      id: "happy-new-year",
      folder: "html-css",
      kind: "live",
      image: "./assets/previews/happy-new-year.png",
      liveUrl: "./projects/happy-new-year/index.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/projects/happy-new-year",
      stack: ["CSS3 Keyframes", "HTML5", "Pure CSS Animation"],
      en: {
        tag: "websites / css animation",
        title: "Happy New Year — Pure CSS Fireworks",
        summary:
          "Animated New Year greeting built with zero JavaScript — featuring a balloon carrying the new year digit into place followed by multi-burst CSS keyframe fireworks.",
        controls: "Watch the full CSS keyframe sequence · Click Restart to replay",
        actionLabel: "Open Live Demo",
        problem: "Creating choreographed multi-stage motion graphics using only HTML elements and CSS keyframes.",
        solution: "Timed staggered @keyframes animations for the floating balloon, digit swap (2025 → 2026), and radial firework bursts.",
        highlights: [
          "100% pure CSS animations with zero JavaScript overhead",
          "Synchronized multi-stage timing across balloon, text, and 4 firework clusters",
          "Lightweight, smooth rendering across desktop and mobile",
        ],
        codeSnippetTitle: "happy-new-year/index.html — Keyframe Scene Structure",
        codeSnippet: `<div class="ano_novo">\n  <span>202</span>\n  <span class="seis">5</span>\n  <span class="sete">6</span>\n  <div class="balao"></div>\n</div>`,
      },
      es: {
        tag: "websites / animación css",
        title: "Happy New Year — Fuegos Artificiales en CSS",
        summary:
          "Animación de Año Nuevo hecha sin una sola línea de JavaScript: un globo eleva el dígito nuevo (2025 → 2026) seguido por explosiones sincronizadas de fuegos artificiales en CSS.",
        controls: "Mira la secuencia completa · Haz clic en Reiniciar para repetir",
        actionLabel: "Abrir Demo",
        problem: "Crear una secuencia animada por etapas usando únicamente HTML y @keyframes de CSS.",
        solution: "Sincronicé animaciones escalonadas para el globo, el cambio de año y cuatro grupos de chispas radiales.",
        highlights: [
          "100% CSS puro sin dependencias ni JavaScript",
          "Tiempos sincronizados entre globo, transición de año y 4 fuegos artificiales",
          "Ligero y fluido en cualquier navegador",
        ],
        codeSnippetTitle: "happy-new-year/index.html — Escena Animada",
        codeSnippet: `<div class="ano_novo">\n  <span>202</span>\n  <span class="seis">5</span>\n  <span class="sete">6</span>\n  <div class="balao"></div>\n</div>`,
      },
    },

    // ================= FOLDER: PYTHON PROJECTS =================
    {
      id: "sudoku-solver",
      folder: "python",
      kind: "live",
      image: "./assets/previews/sudoku.png",
      liveUrl: "./projects/python/sudoku-demo.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/sudoku_solver.py",
      stack: ["Python", "Tkinter GUI", "Backtracking Recursion", "Interactive Demo"],
      en: {
        tag: "python / backtracking game",
        title: "PyDoku — Sudoku Game & Backtracking Solver",
        summary:
          "9×9 Sudoku puzzle game and automated recursive backtracking solver built in Python Tkinter (with a live browser version right here so you can play or click Auto-Solve in 1 click).",
        controls: "Type digits 1–9 · Click Check to validate · Click Auto-Solve to run Backtracking",
        actionLabel: "Play & Solve Live",
        problem: "Validating row, column, and 3×3 subgrid rules while solving arbitrary 9×9 Sudoku boards recursively.",
        solution: "Implemented a recursive backtracking algorithm checking row/column/box safety constraints, paired with a Tkinter Canvas GUI and interactive web demo.",
        highlights: [
          "Recursive backtracking solver (`solve()`) tracking step counts until completion",
          "Row, column, and 3×3 box constraint validators (`is_subgrid_safe`, `is_cell_safe`)",
          "Includes both full Python Tkinter desktop code (`sudoku_solver.py`) and 1-click browser demo",
        ],
        codeSnippetTitle: "projects/python/sudoku_solver.py — Backtracking Solver",
        codeSnippet: `def solve(self) -> bool:\n    x, y = self.find_empty()\n    if (x, y) == (None, None):\n        return True\n    for num in range(1, 10):\n        if self.is_subgrid_safe(num, x, y) and self.is_cell_safe(num, x, y):\n            self.update_cell(num, x, y, False)\n            if self.solve():\n                return True\n            self.update_cell(0, x, y, True)\n    return False`,
      },
      es: {
        tag: "python / juego backtracking",
        title: "PyDoku — Juego de Sudoku y Solver Backtracking",
        summary:
          "Juego de Sudoku 9×9 con resolvedor automático por recursión (Backtracking) en Python Tkinter — incluye versión jugable en vivo aquí mismo para jugar o probar Auto-Solve en 1 clic.",
        controls: "Escribe números 1–9 · Haz clic en Check · Haz clic en Auto-Solve",
        actionLabel: "Jugar y Resolver",
        problem: "Validar filas, columnas y subcuadros 3×3 mientras se resuelve cualquier tablero Sudoku recursivamente.",
        solution: "Implementé un algoritmo de backtracking con validación de reglas de fila/columna/caja en Tkinter Canvas y un demo interactivo en navegador.",
        highlights: [
          "Algoritmo recursivo de backtracking (`solve()`) con conteo de pasos",
          "Validación de subcuadros 3×3, filas y columnas (`is_subgrid_safe`, `is_cell_safe`)",
          "Incluye el código completo de Python Tkinter (`sudoku_solver.py`) y demo en 1 clic",
        ],
        codeSnippetTitle: "projects/python/sudoku_solver.py — Backtracking",
        codeSnippet: `def solve(self) -> bool:\n    x, y = self.find_empty()\n    if (x, y) == (None, None):\n        return True\n    for num in range(1, 10):\n        if self.is_subgrid_safe(num, x, y) and self.is_cell_safe(num, x, y):\n            self.update_cell(num, x, y, False)\n            if self.solve():\n                return True\n            self.update_cell(0, x, y, True)\n    return False`,
      },
    },
    {
      id: "parking-management",
      folder: "python",
      kind: "code",
      image: "./assets/previews/parking-management.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/parking_management.py",
      stack: ["Python 3", "OOP", "CLI Menu", "Billing & Tax Logic"],
      en: {
        tag: "python / management cli",
        title: "Parking Management System (CLI)",
        summary:
          "Menu-driven Python system tracking vehicle check-in/out, real-time slot capacity for Cars (250), Bikes (100), and Bicycles (78), duplicate-plate checks, and hourly billing with 18% tax.",
        actionLabel: "View Source & Notes",
        problem: "Automating lot capacity tracking, vehicle entry/removal records, and hourly parking fee calculation.",
        solution: "Refactored into a clean ParkingSystem class with duplicate-plate guards, automatic timestamps, slot counters, and accurate hourly + 18% tax billing.",
        highlights: [
          "Tracks live available spots separately for Cars, Bikes, and Bicycles",
          "Prevents duplicate license plates and validates vehicle type and hours",
          "Computes itemized hourly base charge, 18% tax, and final total cleanly",
        ],
        codeSnippetTitle: "projects/python/parking_management.py",
        codeSnippet: `def calculate_bill(self, vehicle_type: str, hours: int) -> dict:\n    billable_hours = max(1, int(hours))\n    base = billable_hours * RATES[vehicle_type]\n    tax = round(base * TAX_RATE, 2)\n    return {"hours": billable_hours, "base": base, "tax": tax, "total": round(base + tax, 2)}`,
      },
      es: {
        tag: "python / sistema cli",
        title: "Sistema de Gestión de Estacionamiento (CLI)",
        summary:
          "Sistema de consola en Python para registrar entradas/salidas de vehículos, controlar espacios disponibles (Autos 250, Motos 100, Bicicletas 78), evitar placas duplicadas y calcular cobros por hora + 18% de impuesto.",
        actionLabel: "Ver Código y Notas",
        problem: "Automatizar el control de cupos, registros de entrada/salida y cálculo de tarifas por hora.",
        solution: "Estructuré la clase ParkingSystem con validación de placas únicas, fechas automáticas, contadores de espacios y cálculo exacto de tarifa e impuestos.",
        highlights: [
          "Controla cupos libres por separado para Autos, Motos y Bicicletas",
          "Evita placas duplicadas y valida tipo de vehículo y horas",
          "Calcula tarifa base por hora, 18% de impuesto y total final",
        ],
        codeSnippetTitle: "projects/python/parking_management.py",
        codeSnippet: `def calculate_bill(self, vehicle_type: str, hours: int) -> dict:\n    billable_hours = max(1, int(hours))\n    base = billable_hours * RATES[vehicle_type]\n    tax = round(base * TAX_RATE, 2)\n    return {"hours": billable_hours, "base": base, "tax": tax, "total": round(base + tax, 2)}`,
      },
    },
    {
      id: "phonebook-cli",
      folder: "python",
      kind: "code",
      image: "./assets/previews/phonebook.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/phonebook.py",
      stack: ["Python 3", "Dictionaries", "CRUD Search", "CLI"],
      en: {
        tag: "python / data structures",
        title: "Phonebook Contact Directory (CLI)",
        summary:
          "Clean Python dictionary-backed contact directory supporting adding entries with validation, sorted listing, case-insensitive partial name search, and contact deletion.",
        actionLabel: "View Source & Notes",
        problem: "Building a fast in-memory contact lookup utility practicing Python dictionaries, input validation, and CRUD operations.",
        solution: "Encapsulated contact storage inside a Phonebook class with O(1) exact lookup/deletion and case-insensitive substring search.",
        highlights: [
          "Dictionary-backed contact management (Add, List Sorted, Search, Delete)",
          "Case-insensitive partial-match search across saved contacts",
          "Input validation preventing empty contact names or phone numbers",
        ],
        codeSnippetTitle: "projects/python/phonebook.py",
        codeSnippet: `def search(self, query: str) -> list[tuple[str, str]]:\n    q = query.strip().lower()\n    return [(n, p) for n, p in self.contacts.items() if q in n.lower()]`,
      },
      es: {
        tag: "python / estructuras de datos",
        title: "Agenda Telefónica (Phonebook CLI)",
        summary:
          "Directorio de contactos en Python usando diccionarios con validación de entradas, listado ordenado alfabéticamente, búsqueda parcial sin distinguir mayúsculas y eliminación.",
        actionLabel: "Ver Código y Notas",
        problem: "Construir un buscador rápido de contactos practicando diccionarios, validaciones y operaciones CRUD en Python.",
        solution: "Encapsulé la lógica en la clase Phonebook con operaciones rápidas O(1) y búsqueda flexible por nombre.",
        highlights: [
          "Gestión CRUD completa (Agregar, Listar ordenado, Buscar, Eliminar)",
          "Búsqueda parcial sin distinguir mayúsculas/minúsculas",
          "Validación contra nombres o teléfonos vacíos",
        ],
        codeSnippetTitle: "projects/python/phonebook.py",
        codeSnippet: `def search(self, query: str) -> list[tuple[str, str]]:\n    q = query.strip().lower()\n    return [(n, p) for n, p in self.contacts.items() if q in n.lower()]`,
      },
    },
    {
      id: "billing-software",
      folder: "python",
      kind: "code",
      image: "./assets/billing-software.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/billing_system.py",
      stack: ["Python", "Tkinter GUI", "OOP", "File I/O"],
      en: {
        tag: "python / desktop pos",
        title: "Retail Billing & Receipt Software",
        summary:
          "Object-oriented Tkinter desktop register managing 18 items across Medical, Grocery, and Cold Drinks — computing subtotals, category taxes, formatted receipts, local file archiving, and bill lookup.",
        actionLabel: "View Source & Notes",
        problem: "Small retail shops need a fast, offline billing interface to calculate itemized totals, apply tax rules, and archive receipts.",
        solution: "Engineered Bill_App in Python Tkinter with separate category panels, validation, live receipt generation, local invoice saving, and receipt number search.",
        highlights: [
          "Computes itemized prices and category-specific taxes across 3 product categories",
          "Auto-generates unique bill numbers and formatted customer receipts",
          "Saves invoices locally and supports instant bill lookup by receipt number",
        ],
        codeSnippetTitle: "projects/python/billing_system.py",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
      es: {
        tag: "python / pos escritorio",
        title: "Sistema de Facturación (Billing Software)",
        summary:
          "Aplicación de escritorio en Python Tkinter para 18 productos en 3 categorías: calcula subtotales e impuestos, genera recibos formateados, archiva facturas en disco y busca por número.",
        actionLabel: "Ver Código y Notas",
        problem: "Comercios pequeños necesitan una caja ligera sin internet para calcular totales e impuestos y archivar recibos.",
        solution: "Desarrollé Bill_App orientado a objetos con paneles por categoría, validación, vista de recibo, guardado local y buscador por factura.",
        highlights: [
          "Calcula totales e impuestos por categoría (Médico, Abarrotes, Bebidas)",
          "Genera números de factura únicos y recibos formateados",
          "Guarda facturas en disco y permite consultarlas por número",
        ],
        codeSnippetTitle: "projects/python/billing_system.py",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
    },
    {
      id: "receipt-python",
      folder: "python",
      kind: "code",
      image: "./assets/billing-software.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/receipt_pdf.py",
      stack: ["Python", "ReportLab", "PDF Generation", "Automation"],
      en: {
        tag: "python / pdf automation",
        title: "Automated PDF Receipt Generator",
        summary:
          "Python utility using ReportLab Platypus to programmatically build styled A4 PDF payment receipts with bordered line-item tables, discounts, and final totals.",
        actionLabel: "View Source & Notes",
        problem: "Generating clean, printable PDF payment receipts automatically from structured billing data.",
        solution: "Used ReportLab's SimpleDocTemplate, Paragraph, and TableStyle APIs to format headers, grids, color themes, and totals into receipt.pdf.",
        highlights: [
          "Builds ready-to-print A4 PDF documents directly from Python data tables",
          "Applies custom TableStyle borders, header shading, and centered alignment",
          "Easily extensible to connect with SQL databases or billing apps",
        ],
        codeSnippetTitle: "projects/python/receipt_pdf.py",
        codeSnippet: `pdf = SimpleDocTemplate("receipt.pdf", pagesize=A4)\nstyles = getSampleStyleSheet()\ntitle = Paragraph("Payment Receipt", styles["Heading1"])\ntable = Table(DATA, style=style)\npdf.build([title, table])`,
      },
      es: {
        tag: "python / automatización pdf",
        title: "Generador Automático de Recibos PDF",
        summary:
          "Script en Python con ReportLab Platypus que construye automáticamente recibos de pago en PDF tamaño A4 con tablas estilizadas, subtotales, descuentos y total final.",
        actionLabel: "Ver Código y Notas",
        problem: "Crear recibos de pago en PDF limpios y listos para imprimir a partir de datos estructurados.",
        solution: "Usé SimpleDocTemplate, Paragraph y TableStyle de ReportLab para dar formato a encabezados, bordes, colores y totales en receipt.pdf.",
        highlights: [
          "Genera documentos PDF A4 listos para imprimir desde tablas de Python",
          "Estilos personalizados de bordes, colores de encabezado y alineación",
          "Fácil de conectar con bases de datos SQL o apps de facturación",
        ],
        codeSnippetTitle: "projects/python/receipt_pdf.py",
        codeSnippet: `pdf = SimpleDocTemplate("receipt.pdf", pagesize=A4)\nstyles = getSampleStyleSheet()\ntitle = Paragraph("Payment Receipt", styles["Heading1"])\ntable = Table(DATA, style=style)\npdf.build([title, table])`,
      },
    },
    {
      id: "egg-catcher",
      folder: "python",
      kind: "code",
      image: "./assets/previews/harvest-valley.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/python/egg_catcher.py",
      stack: ["Python", "Tkinter Canvas", "itertools", "Desktop Game"],
      en: {
        tag: "python / desktop game",
        title: "Egg Catcher — Python Tkinter Arcade",
        summary:
          "Desktop arcade game written in Python Tkinter Canvas with cycling colorful falling eggs, keyboard catcher controls, 3-life counter, and progressive speed difficulty.",
        actionLabel: "View Source & Notes",
        problem: "Practicing event-driven Tkinter timers (root.after), keyboard bindings, and bounding-box catch detection in Python.",
        solution: "Combined itertools.cycle for egg colors, scheduled spawn/move/catch callbacks, and multiplicative speed scaling on every point scored.",
        highlights: [
          "Event-driven Tkinter Canvas loop using root.after() scheduling",
          "Dynamic speed and spawn-interval scaling (difficulty = 0.95) as score increases",
          "Arrow-key movement with boundary guards and Game Over score dialog",
        ],
        codeSnippetTitle: "projects/python/egg_catcher.py",
        codeSnippet: `def check_catch():\n    (catcherx, catchery, catcherx2, catchery2) = c.coords(catcher)\n    for egg in eggs:\n        (eggx, eggy, eggx2, eggy2) = c.coords(egg)\n        if catcherx < eggx and eggx2 < catcherx2 and catchery2 - eggy2 < 40:\n            eggs.remove(egg); c.delete(egg); increase_score(egg_score)\n    root.after(100, check_catch)`,
      },
      es: {
        tag: "python / juego de escritorio",
        title: "Egg Catcher — Arcade en Python Tkinter",
        summary:
          "Juego arcade de escritorio en Python Tkinter Canvas con huevos de colores cíclicos, canasta controlada por teclado, 3 vidas y dificultad progresiva.",
        actionLabel: "Ver Código y Notas",
        problem: "Practicar temporizadores root.after(), eventos de teclado y detección de colisiones en Python Tkinter.",
        solution: "Combiné itertools.cycle para los colores, callbacks de movimiento/colisión y aceleración progresiva por cada punto.",
        highlights: [
          "Bucle dirigido por eventos en Tkinter Canvas con root.after()",
          "Aceleración dinámica de caída e intervalo conforme sube el puntaje",
          "Movimiento con flechas, límites de pantalla y diálogo de Game Over",
        ],
        codeSnippetTitle: "projects/python/egg_catcher.py",
        codeSnippet: `def check_catch():\n    (catcherx, catchery, catcherx2, catchery2) = c.coords(catcher)\n    for egg in eggs:\n        (eggx, eggy, eggx2, eggy2) = c.coords(egg)\n        if catcherx < eggx and eggx2 < catcherx2 and catchery2 - eggy2 < 40:\n            eggs.remove(egg); c.delete(egg); increase_score(egg_score)\n    root.after(100, check_catch)`,
      },
    },
    {
      id: "python-120-lab",
      folder: "python",
      kind: "code",
      image: "./assets/billing-software.png",
      githubUrl: "https://github.com/vivaseliezer",
      stack: ["Python 3", "Automation", "CLI Tools", "Computer Vision", "File Utilities"],
      en: {
        tag: "python / practice archive",
        title: "120+ Python Practice Scripts & Mini-Apps",
        summary:
          "Hands-on Python study archive spanning automation scripts, file/image converters, CLI utilities, GUI apps, and data tools — including QR/Barcode Reader, File Encryption, Contact Book, Currency Converter, Duplicate File Remover, and Web Link Extractors.",
        actionLabel: "Explore Topics",
        problem: "Building fluency across Python's standard library and third-party ecosystem through daily bite-sized engineering challenges.",
        solution: "Organized over 120 focused scripts covering desktop GUIs (Tkinter), PDF/image processing, networking checks, security utilities, and automation.",
        highlights: [
          "Utilities & Automation: File Encryption, Duplicate Files Remover, Battery Notifier, Website Connectivity & DNS Checker",
          "Media & Vision: Barcode/QR Code Reader, Image-to-PDF & JPEG/PNG/ICO Converters, Screenshot & Video Frame Capture",
          "Apps & Logic: Contact Book, CLI To-Do, Currency Converter, Calendar GUI, Alarm Clock & Chatbot experiments",
        ],
        codeSnippetTitle: "Archive Categories (120+ Python Projects)",
        codeSnippet: `python-practice-lab/\n├── desktop-gui/      # Billing System, Calendar GUI, Calculator, Contact Book\n├── automation/       # File Encryption, Duplicate Remover, Website/DNS Check\n├── media-and-pdf/    # PDF Receipts, Image-to-PDF, QR/Barcode Reader, AudioBook\n└── games-and-cli/    # Egg Catcher, Bouncing Ball Sim, CLI Todo, Countdown`,
      },
      es: {
        tag: "python / biblioteca de práctica",
        title: "120+ Scripts y Mini-Apps en Python",
        summary:
          "Archivo práctico de Python que abarca automatización, conversores de archivos/imágenes, herramientas CLI y apps GUI: Lector QR/Código de Barras, Encriptador de Archivos, Agenda de Contactos, Conversor de Divisas y Extractor de Enlaces Web.",
        actionLabel: "Ver Temas",
        problem: "Ganar dominio real en la librería estándar y ecosistema de Python resolviendo retos técnicos variados.",
        solution: "Colección organizada de más de 120 scripts enfocados en interfaces Tkinter, PDF/imágenes, utilidades de red, seguridad y automatización.",
        highlights: [
          "Automatización y Seguridad: Encriptador de Archivos, Eliminador de Duplicados, Verificador Web y DNS",
          "Media y PDF: Lector QR/Barras, Conversor Imagen-a-PDF y PNG/JPEG/ICO, Captura de Pantalla y Video",
          "Apps y Lógica: Agenda de Contactos, CLI To-Do, Conversor de Monedas, Calendario GUI y Chatbot",
        ],
        codeSnippetTitle: "Categorías del Archivo (120+ Proyectos Python)",
        codeSnippet: `python-practice-lab/\n├── desktop-gui/      # Billing System, Calendar GUI, Calculator, Contact Book\n├── automation/       # File Encryption, Duplicate Remover, Website/DNS Check\n├── media-and-pdf/    # PDF Receipts, Image-to-PDF, QR/Barcode Reader, AudioBook\n└── games-and-cli/    # Egg Catcher, Bouncing Ball Sim, CLI Todo, Countdown`,
      },
    },

    // ================= FOLDER: C# =================
    {
      id: "csharp-inventory",
      folder: "csharp",
      kind: "code",
      image: "./assets/previews/csharp-lab.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/csharp/InventoryManager.cs",
      stack: ["C#", ".NET", "LINQ", "Records & OOP"],
      en: {
        tag: "csharp / oop & linq",
        title: "InventoryManager — C# OOP & LINQ Module",
        summary:
          "Strongly-typed C# inventory engine using immutable records, defensive argument validation, LINQ low-stock alerts, case-insensitive SKU lookup, and total stock valuation.",
        actionLabel: "View C# Source",
        problem: "Designing clean, testable C# business logic for stock tracking and low-inventory alerts before wiring a Web API or database.",
        solution: "Built InventoryManager with C# record types, guard clauses against invalid prices/quantities, and expressive LINQ queries.",
        highlights: [
          "Uses C# record types (Product) and private encapsulated collections",
          "LINQ queries for low-stock threshold filtering, sorting, and valuation sums",
          "Ready foundation inside projects/csharp/ to expand with ASP.NET Web API endpoints",
        ],
        codeSnippetTitle: "projects/csharp/InventoryManager.cs",
        codeSnippet: `public IEnumerable<Product> GetLowStockItems() =>\n    _products\n        .Where(p => p.StockQty <= p.ReorderLevel)\n        .OrderBy(p => p.StockQty);\n\npublic decimal GetTotalInventoryValue() =>\n    _products.Sum(p => p.Price * p.StockQty);`,
      },
      es: {
        tag: "csharp / poo y linq",
        title: "InventoryManager — Módulo C# POO y LINQ",
        summary:
          "Motor de inventario en C# con tipos record inmutables, validación defensiva, alertas de bajo stock con LINQ, búsqueda por SKU y cálculo del valor total de inventario.",
        actionLabel: "Ver Código C#",
        problem: "Estructurar lógica de negocio limpia y tipada en C# para control de inventario antes de conectar APIs o bases de datos.",
        solution: "Implementé InventoryManager usando records de C#, validaciones contra valores negativos y consultas expresivas con LINQ.",
        highlights: [
          "Usa tipos record de C# (Product) y colecciones encapsuladas",
          "Consultas LINQ para alertas de stock mínimo, ordenamiento y valuación total",
          "Base lista en projects/csharp/ para seguir agregando proyectos y APIs en .NET",
        ],
        codeSnippetTitle: "projects/csharp/InventoryManager.cs",
        codeSnippet: `public IEnumerable<Product> GetLowStockItems() =>\n    _products\n        .Where(p => p.StockQty <= p.ReorderLevel)\n        .OrderBy(p => p.StockQty);\n\npublic decimal GetTotalInventoryValue() =>\n    _products.Sum(p => p.Price * p.StockQty);`,
      },
    },

    // ================= FOLDER: MYSQL =================
    {
      id: "mysql-retail-schema",
      folder: "mysql",
      kind: "code",
      image: "./assets/previews/mysql-lab.png",
      githubUrl: "https://github.com/vivaseliezer/portfolio/blob/main/projects/mysql/retail_store_schema.sql",
      stack: ["MySQL 8", "3NF Normalization", "Foreign Keys", "JOINs & GROUP BY"],
      en: {
        tag: "mysql / relational schema",
        title: "Retail Store & Billing Database Schema (3NF)",
        summary:
          "Normalized MySQL 8 schema built to back retail billing systems — defining customers, products, invoices, and invoice_items with CHECK constraints, foreign keys, and revenue JOIN reports.",
        actionLabel: "View SQL Schema",
        problem: "Moving retail billing data from flat text files into a normalized relational database that prevents duplicate customer data and invalid prices.",
        solution: "Designed four 3NF tables with strict foreign-key relationships, ENUM categories, non-negative CHECK constraints, and analytical reporting queries.",
        highlights: [
          "4 normalized tables: customers, products, invoices, and invoice_items",
          "Referential integrity via FOREIGN KEY constraints and ON DELETE CASCADE",
          "Includes low-stock alert and category revenue reporting queries using INNER JOIN & GROUP BY",
        ],
        codeSnippetTitle: "projects/mysql/retail_store_schema.sql",
        codeSnippet: `SELECT p.category,\n       SUM(ii.quantity) AS units_sold,\n       ROUND(SUM(ii.quantity * ii.unit_price), 2) AS total_revenue\nFROM invoice_items ii\nINNER JOIN products p ON ii.product_id = p.product_id\nGROUP BY p.category\nORDER BY total_revenue DESC;`,
      },
      es: {
        tag: "mysql / esquema relacional",
        title: "Esquema MySQL para Tienda y Facturación (3FN)",
        summary:
          "Base de datos normalizada en MySQL 8 para respaldar sistemas de facturación: tablas de clientes, productos, facturas y detalle con llaves foráneas, restricciones CHECK y reportes JOIN.",
        actionLabel: "Ver Esquema SQL",
        problem: "Pasar registros de facturación de archivos de texto a una base de datos relacional normalizada con integridad de datos.",
        solution: "Diseñé 4 tablas en tercera forma normal (3FN) con llaves foráneas, categorías ENUM, validaciones CHECK y consultas analíticas.",
        highlights: [
          "4 tablas normalizadas: customers, products, invoices e invoice_items",
          "Integridad referencial con FOREIGN KEY y ON DELETE CASCADE",
          "Consultas reales de alerta de stock bajo e ingresos por categoría con INNER JOIN y GROUP BY",
        ],
        codeSnippetTitle: "projects/mysql/retail_store_schema.sql",
        codeSnippet: `SELECT p.category,\n       SUM(ii.quantity) AS units_sold,\n       ROUND(SUM(ii.quantity * ii.unit_price), 2) AS total_revenue\nFROM invoice_items ii\nINNER JOIN products p ON ii.product_id = p.product_id\nGROUP BY p.category\nORDER BY total_revenue DESC;`,
      },
    },
  ],
};
