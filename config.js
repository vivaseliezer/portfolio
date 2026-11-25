/**
 * Portfolio Data — Orlando Vivas
 * Edit personal details, links, projects, and games here.
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

  // Hero visual showcase items (real screenshots of Orlando's work)
  showcase: [
    {
      id: "dead-night",
      gameId: "dead-night",
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
      id: "harvest-valley",
      gameId: "harvest-valley",
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
      projectId: "billing-software",
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
    {
      id: "the-goat",
      gameId: "the-goat",
      image: "./assets/previews/goat.png",
      en: {
        tab: "The Goat",
        caption: "The Goat vs The Legends — 4K Canvas action game inspired by folklore legends.",
        cta: "Play The Goat",
      },
      es: {
        tab: "The Goat",
        caption: "The Goat vs The Legends — Juego de acción en Canvas 4K contra leyendas clásicas.",
        cta: "Jugar The Goat",
      },
    },
  ],

  // 1-Click Playable Browser Games (all 4 original creations)
  games: [
    {
      id: "dead-night",
      status: "playable",
      openMode: "modal",
      image: "./assets/previews/dead-night.png",
      playUrl: {
        en: "./games/dead-night/index.html",
        es: "./games/noche-muerta/index.html",
      },
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/dead-night",
      tech: ["HTML5 Canvas", "JavaScript", "Web Audio API", "Bilingual EN/ES"],
      en: {
        tag: "Top-Down Shooter · EN / ES",
        title: "Dead Night",
        description:
          "10-level campaign, endless Survival, and 6-boss Boss Rush. Features real-time flashlight lighting, rain/fog weather, and sound effects generated purely with Web Audio.",
        controls: "WASD / Arrows: Move · Mouse: Aim & Shoot · Space: Dash · F: Ultimate",
      },
      es: {
        tag: "Shooter Top-Down · EN / ES",
        title: "Noche Muerta (Dead Night)",
        description:
          "Campaña de 10 niveles, modo Supervivencia infinito y Boss Rush con 6 jefes. Incluye linterna con iluminación dinámica, clima y audio procedural con Web Audio.",
        controls: "WASD / Flechas: Mover · Mouse: Apuntar y Disparar · Espacio: Dash · F: Ataque Final",
      },
    },
    {
      id: "harvest-valley",
      status: "playable",
      openMode: "modal",
      image: "./assets/previews/harvest-valley.png",
      playUrl: "./games/harvest-valley/index.html",
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/harvest-valley",
      tech: ["HTML5 Canvas", "JavaScript", "State & Economy", "LocalStorage"],
      en: {
        tag: "Farming Simulator",
        title: "Harvest Valley Farm",
        description:
          "Handheld-style farm sim with animated crops, sunny and rainy weather cycles, shifting market prices, daily energy limits, and automatic save persistence.",
        controls: "Click or tap plots to plant, water, harvest & sell crops",
      },
      es: {
        tag: "Simulador de Granja",
        title: "Harvest Valley Farm",
        description:
          "Simulador estilo consola portátil con cultivos animados, días soleados y lluviosos, precios cambiantes de mercado, energía diaria y guardado automático.",
        controls: "Haz clic o toca las parcelas para plantar, regar, cosechar y vender",
      },
    },
    {
      id: "the-goat",
      status: "playable",
      openMode: "modal",
      image: "./assets/previews/goat.png",
      playUrl: "./games/goat/index.html",
      githubUrl: "https://github.com/vivaseliezer/goat",
      tech: ["4K Canvas", "JavaScript", "Enemy AI", "CSS3"],
      en: {
        tag: "Folklore Action · 4K Canvas",
        title: "The Goat vs The Legends",
        description:
          "Protect your home from El Cadejo, La Llorona, and El Duende in a 4K Canvas brawler with ram attacks, wave progression, and health/score HUD.",
        controls: "WASD / Arrows: Move · Space: Ram Attack",
      },
      es: {
        tag: "Acción · Canvas 4K",
        title: "The Goat vs The Legends",
        description:
          "Defiende tu casa contra El Cadejo, La Llorona y El Duende en un juego de acción en Canvas 4K con ataques de embestida, salud y puntaje.",
        controls: "WASD / Flechas: Mover · Espacio: Embestir",
      },
    },
    {
      id: "car-game",
      status: "playable",
      openMode: "modal",
      image: "./assets/previews/car-game.png",
      playUrl: "./games/car-game/index.html",
      githubUrl: "https://github.com/vivaseliezer/carGAME",
      tech: ["JavaScript", "DOM Animation", "Collision Physics", "CSS3"],
      en: {
        tag: "Arcade Racer",
        title: "Highway Car Dodge",
        description:
          "Endless highway dodger built in plain JavaScript with gradually increasing speed, randomized oncoming lanes, real-time AABB collision checks, and high-score tracking.",
        controls: "Click Start · Arrow Keys to steer and dodge traffic",
      },
      es: {
        tag: "Carreras Arcade",
        title: "Highway Car Dodge",
        description:
          "Juego de velocidad en autopista hecho en JavaScript puro con aceleración progresiva, tráfico aleatorio, detección de colisiones AABB y marcador de récord.",
        controls: "Haz clic en Start · Flechas del teclado para esquivar autos",
      },
    },
  ],

  // Selected Software Engineering Projects (100% real built work)
  projects: [
    {
      id: "billing-software",
      category: "desktop",
      previewImage: "./assets/billing-software.png",
      stack: ["Python", "Tkinter", "OOP", "File I/O"],
      githubUrl: "https://github.com/vivaseliezer",
      playGameId: "",
      en: {
        year: "Python Desktop App",
        title: "Retail Billing & Receipt Management Software",
        summary:
          "A lightweight point-of-sale billing app written in Python (Tkinter) that totals 18 retail items across three categories, applies tax rates, prints formatted receipts, and looks up saved bills by number.",
        problem:
          "Small neighborhood shops often need an offline, no-subscription register tool to calculate totals and taxes cleanly and keep simple receipt records.",
        solution:
          "Built an object-oriented Tkinter interface (Bill_App) with separate product panels, input checks, live receipt rendering in a scrollable text view, local text-file persistence, and bill lookup.",
        highlights: [
          "Computes itemized subtotals and category taxes across Medical, Grocery, and Cold Drinks",
          "Generates unique bill numbers and formatted receipts with customer name and phone",
          "Saves invoices to disk and retrieves past bills on demand by receipt number",
        ],
        codeSnippetTitle: "biling_system.py — Receipt Persistence",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
      es: {
        year: "App de Escritorio en Python",
        title: "Sistema de Facturación y Recibos (Billing Software)",
        summary:
          "Aplicación punto de venta en Python (Tkinter) que suma 18 productos en tres categorías, calcula impuestos, genera recibos formateados y permite buscar facturas guardadas por número.",
        problem:
          "Muchos negocios pequeños necesitan una caja registradora ligera y sin suscripciones para calcular totales e impuestos y archivar recibos localmente.",
        solution:
          "Desarrollé una interfaz orientada a objetos en Tkinter (Bill_App) con paneles por categoría, validación, vista previa del recibo, guardado en archivos locales y buscador de facturas.",
        highlights: [
          "Calcula subtotales e impuestos por categoría (Médico, Abarrotes y Bebidas)",
          "Asigna números de factura únicos y formatea recibos con datos del cliente",
          "Guarda facturas en disco y permite consultar recibos anteriores por número",
        ],
        codeSnippetTitle: "biling_system.py — Guardado de Recibos",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
    },
    {
      id: "dead-night-engine",
      category: "web",
      previewImage: "./assets/previews/dead-night.png",
      stack: ["JavaScript (ES6+)", "HTML5 Canvas", "Web Audio API", "Game AI"],
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/dead-night",
      playGameId: "dead-night",
      en: {
        year: "Real-Time Web Engine",
        title: "Dead Night / Noche Muerta — 2D Survival Engine",
        summary:
          "A self-contained browser survival shooter written without external game engines — combining offscreen dynamic lighting, multi-phase boss AI, weather particles, and synthesized audio.",
        problem:
          "Running smooth 60 FPS gameplay with dynamic darkness, dozens of enemies, and sound effects directly in a browser without heavy asset downloads.",
        solution:
          "Rendered lighting on a half-resolution offscreen canvas using destination-out radial gradients, separated enemy state machines by boss phase, and synthesized every gunshot and roar via Web Audio oscillators.",
        highlights: [
          "Zero external audio files: gunshots, zombie groans, and boss heartbeat built with Web Audio API",
          "10 campaign zones with distinct procedural maps, 4 unlockable weapons, and 6 unique bosses",
          "Full English and Spanish editions that switch automatically with the portfolio language",
        ],
        codeSnippetTitle: "Dead Night — Half-Res Offscreen Flashlight Cutout",
        codeSnippet: `L.globalCompositeOperation = "destination-out";\nconst fl = L.createRadialGradient(p.x, p.y, 20, p.x, p.y, 520);\nfl.addColorStop(0, "rgba(0,0,0,.95)");\nfl.addColorStop(1, "rgba(0,0,0,0)");\nL.fillStyle = fl;\nL.beginPath(); L.moveTo(p.x, p.y);\nL.arc(p.x, p.y, 520, p.angle - 0.42, p.angle + 0.42);\nL.closePath(); L.fill();`,
      },
      es: {
        year: "Motor Web en Tiempo Real",
        title: "Dead Night / Noche Muerta — Motor 2D en Canvas",
        summary:
          "Shooter de supervivencia completo sin motores externos: combina iluminación dinámica en canvas secundario, IA de jefes por fases, partículas de clima y audio sintetizado.",
        problem:
          "Lograr 60 FPS fluidos con oscuridad dinámica, decenas de enemigos y efectos de sonido en navegador sin depender de archivos pesados.",
        solution:
          "Calculé la iluminación en un canvas secundario a media resolución con gradientes destination-out, separé la IA por estados y sinteticé cada disparo y rugido con osciladores de Web Audio.",
        highlights: [
          "Cero archivos MP3: disparos, gruñidos y música de jefes generados con Web Audio API",
          "10 niveles de campaña con mapas procedurales, 4 armas desbloqueables y 6 jefes",
          "Ediciones completas en inglés y español que cambian con el idioma del portafolio",
        ],
        codeSnippetTitle: "Dead Night — Recorte Dinámico de Linterna",
        codeSnippet: `L.globalCompositeOperation = "destination-out";\nconst fl = L.createRadialGradient(p.x, p.y, 20, p.x, p.y, 520);\nfl.addColorStop(0, "rgba(0,0,0,.95)");\nfl.addColorStop(1, "rgba(0,0,0,0)");\nL.fillStyle = fl;\nL.beginPath(); L.moveTo(p.x, p.y);\nL.arc(p.x, p.y, 520, p.angle - 0.42, p.angle + 0.42);\nL.closePath(); L.fill();`,
      },
    },
    {
      id: "harvest-valley-sim",
      category: "web",
      previewImage: "./assets/previews/harvest-valley.png",
      stack: ["JavaScript", "HTML5 Canvas", "CSS Grid", "LocalStorage"],
      githubUrl: "https://github.com/vivaseliezer/portfolio/tree/main/games/harvest-valley",
      playGameId: "harvest-valley",
      en: {
        year: "Browser Simulation",
        title: "Harvest Valley Farm — Economy & Crop Simulator",
        summary:
          "A cozy browser simulation pairing a 2D animated farm scene with stateful crop timers, randomized daily market trends, energy limits, and persistent saves.",
        problem:
          "Keeping visual canvas rendering tightly synchronized with inventory counts, daily weather states, and user clicks across desktop and mobile screens.",
        solution:
          "Structured a single central state object persisted to LocalStorage, driving both the Canvas farm plots/farmer animations and the DOM market/inventory dashboard.",
        highlights: [
          "Dynamic weather system (Sunny & Rainy days) affecting field state and animation",
          "Fluctuating crop prices (Wheat, Corn, Carrot) with visual up/down market indicators",
          "Automatic state persistence in LocalStorage so players keep progress across refreshes",
        ],
        codeSnippetTitle: "Harvest Valley — Canvas Animation & State Sync",
        codeSnippet: `function draw(ms) {\n  const t = ms / 1000;\n  drawSky(t); drawLand();\n  drawPlots(t); drawFarmer(t);\n  drawRain(); drawFloaters();\n  requestAnimationFrame(draw);\n}`,
      },
      es: {
        year: "Simulación Web",
        title: "Harvest Valley Farm — Simulador de Economía",
        summary:
          "Simulador de granja que combina una escena animada en Canvas 2D con tiempos de cosecha, precios diarios aleatorios, energía y guardado persistente.",
        problem:
          "Mantener sincronizados el dibujo del Canvas, el inventario, el clima diario y las acciones del usuario tanto en computadora como en celular.",
        solution:
          "Centralicé el estado del juego con guardado automático en LocalStorage, alimentando tanto los cultivos animados en Canvas como el panel de mercado e inventario.",
        highlights: [
          "Sistema de clima dinámico (Soleado y Lluvioso) con animaciones en vivo",
          "Precios variables (Trigo, Maíz, Zanahoria) con indicadores de tendencia",
          "Persistencia automática en LocalStorage para conservar el avance",
        ],
        codeSnippetTitle: "Harvest Valley — Ciclo de Render y Estado",
        codeSnippet: `function draw(ms) {\n  const t = ms / 1000;\n  drawSky(t); drawLand();\n  drawPlots(t); drawFarmer(t);\n  drawRain(); drawFloaters();\n  requestAnimationFrame(draw);\n}`,
      },
    },
    {
      id: "goat-and-car",
      category: "web",
      previewImage: "./assets/previews/goat.png",
      stack: ["JavaScript (ES6+)", "4K Canvas", "AABB Collision", "Git & GitHub"],
      githubUrl: "https://github.com/vivaseliezer/goat",
      playGameId: "the-goat",
      en: {
        year: "Open-Source GitHub Repos",
        title: "The Goat vs The Legends & Highway Car Dodge",
        summary:
          "Two standalone browser games hosted publicly on GitHub focusing on responsive keyboard input, entity spawning, and clean bounding-box collision physics.",
        problem:
          "Practicing clean JavaScript architecture, modular entity classes, and frame-rate-consistent movement across two very different genres.",
        solution:
          "Split The Goat into dedicated entity and game-loop modules on a 3840×2160 Canvas, and built Highway Car Dodge with pure DOM positioning and real-time collision guards.",
        highlights: [
          "Modular separation of entities (js/entities.js) and main loop (js/game.js)",
          "Real-time bounding-box collision checks and progressive speed difficulty",
          "Public source repositories on GitHub (vivaseliezer/goat & vivaseliezer/carGAME)",
        ],
        codeSnippetTitle: "carGAME/game.js — Real-Time Collision Detection",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
      es: {
        year: "Repositorios en GitHub",
        title: "The Goat vs The Legends & Highway Car Dodge",
        summary:
          "Dos juegos independientes publicados en GitHub enfocados en control por teclado, generación de entidades y física de colisiones en tiempo real.",
        problem:
          "Practicar arquitectura limpia en JavaScript, separación de módulos y detección de colisiones en dos géneros distintos.",
        solution:
          "Organicé The Goat en módulos de entidades y bucle principal sobre Canvas 4K, y construí Highway Car Dodge con animaciones DOM y detección de impactos AABB.",
        highlights: [
          "Código modular separando entidades (js/entities.js) y lógica principal (js/game.js)",
          "Detección de colisiones en tiempo real y aceleración progresiva",
          "Repositorios públicos en GitHub (vivaseliezer/goat y vivaseliezer/carGAME)",
        ],
        codeSnippetTitle: "carGAME/game.js — Detección de Colisiones",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
    },
  ],
};
