/**
 * ============================================================
 * PORTFOLIO CONFIGURATION — ORLANDO VIVAS
 * ============================================================
 * Todo el sitio (Inglés y Español) se actualiza automáticamente
 * desde este archivo.
 */

window.PORTFOLIO_CONFIG = {
  // Información básica / Basic Info
  firstName: "Orlando",
  lastName: "Vivas",
  fullName: "Orlando Vivas",
  brandTag: "orlandovivas.dev",
  location: {
    en: "Springfield, VA (Open to On-site, Hybrid & Remote)",
    es: "Springfield, VA (Disponible Presencial, Híbrido y Remoto)",
  },
  availability: {
    en: "Open to Junior Software Developer Roles",
    es: "Disponible para roles Junior Software Developer",
  },

  // Enlaces reales
  links: {
    email: "oralvivas122@gmail.com",
    schoolEmail: "ovivasramirez@byupathway.edu",
    linkedin: "https://www.linkedin.com/in/orlando-vivas-a7278544/",
    github: "https://github.com/vivaseliezer",
    resumeUrl: "./resume.html",
  },

  // Proyectos destacados (incluyendo tu Billing Software real en Python)
  projects: [
    {
      id: "billing-software",
      category: "backend",
      featured: true,
      previewImage: "./assets/billing-software.png",
      stack: ["Python", "Tkinter GUI", "OOP", "File I/O", "Tax & Billing Logic"],
      githubUrl: "https://github.com/vivaseliezer",
      demoUrl: "",
      en: {
        badge: "Desktop Software • Python GUI",
        title: "Retail Billing & Receipt Management Software",
        summary:
          "Desktop point-of-sale billing application built in Python (Tkinter) that calculates multi-category totals and taxes, generates formatted receipts, saves invoices to disk, and retrieves bills by receipt number.",
        problem:
          "Small retail shops need a fast, lightweight offline billing interface to calculate itemized totals, apply category tax rules, and archive customer receipts without complex cloud subscriptions.",
        solution:
          "Engineered an object-oriented Python Tkinter desktop application (Bill_App) with real-time subtotal & tax calculations across 3 product categories, input validation, live receipt rendering, file persistence, and receipt lookup.",
        highlights: [
          "Calculates itemized prices and category-specific taxes across Medical, Grocery, and Cold Drinks",
          "Generates formatted itemized customer receipts with unique auto-generated Bill Numbers",
          "Saves receipts as local text records and supports instant bill search by receipt number",
        ],
        codeSnippetTitle: "Python (Tkinter) — Bill Generation & Search",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
      es: {
        badge: "Software de Escritorio • Python GUI",
        title: "Sistema de Facturación y Recibos (Billing Software)",
        summary:
          "Aplicación de escritorio punto de venta desarrollada en Python (Tkinter) que calcula subtotales e impuestos por categoría, genera recibos formateados, guarda facturas en disco y permite buscarlas por número.",
        problem:
          "Muchos comercios pequeños necesitan una herramienta rápida y sin internet para calcular totales por producto, aplicar impuestos y archivar recibos de clientes.",
        solution:
          "Desarrollé una aplicación orientada a objetos en Python con Tkinter (Bill_App) con cálculo automático de precios e impuestos en 3 categorías, validación de datos, vista previa del recibo, guardado local y buscador por número de factura.",
        highlights: [
          "Calcula precios por producto e impuestos por categoría (Médico, Abarrotes y Bebidas)",
          "Genera recibos detallados con número de factura automático y datos del cliente",
          "Guarda las facturas en archivos locales y permite buscarlas al instante por número",
        ],
        codeSnippetTitle: "Python (Tkinter) — Guardado y Búsqueda de Facturas",
        codeSnippet: `def save_bill(self):\n    op = messagebox.askyesno("Save Bill", "Do you want to save the bill?")\n    if op > 0:\n        self.bill_data = self.txtarea.get("1.0", END)\n        with open(f"bills/{self.bill_no.get()}.txt", "w") as f:\n            f.write(self.bill_data)\n        messagebox.showinfo("Saved", f"Bill #{self.bill_no.get()} saved.")`,
      },
    },
    {
      id: "inventory-api",
      category: "fullstack",
      featured: true,
      stack: ["C#", ".NET Web API", "MySQL", "JavaScript", "REST API"],
      githubUrl: "https://github.com/vivaseliezer",
      demoUrl: "",
      en: {
        badge: "Full-Stack • Enterprise Architecture",
        title: "Inventory & Order Management System",
        summary:
          "Full-stack web application blueprint to track warehouse stock, supplier orders, and low-inventory alerts using a C# REST API backed by a normalized MySQL database.",
        problem:
          "Small distribution teams often rely on error-prone spreadsheets, causing stockouts and mismatched order totals.",
        solution:
          "Designed a RESTful C#/.NET backend with parameterized MySQL queries, input validation, and a responsive JavaScript dashboard with real-time search and status filters.",
        highlights: [
          "Normalized 3NF MySQL schema (Products, Orders, OrderItems, Suppliers) with foreign-key integrity",
          "CRUD REST endpoints with structured HTTP status codes and server-side validation",
          "Automated low-stock threshold alerts and order history filtering",
        ],
        codeSnippetTitle: "MySQL — Low Stock Query",
        codeSnippet: `SELECT p.sku, p.name, p.stock_qty, s.company_name\nFROM products p\nINNER JOIN suppliers s ON p.supplier_id = s.id\nWHERE p.stock_qty <= p.reorder_level\nORDER BY p.stock_qty ASC;`,
      },
      es: {
        badge: "Full-Stack • Arquitectura Empresarial",
        title: "Sistema de Gestión de Inventario y Pedidos",
        summary:
          "Aplicación web full-stack para controlar stock de almacén, pedidos a proveedores y alertas de bajo inventario con una API REST en C# y base de datos MySQL normalizada.",
        problem:
          "Muchos negocios y almacenes dependen de hojas de cálculo propensas a errores, causando falta de stock y descuadres en pedidos.",
        solution:
          "Diseñé un backend REST en C#/.NET con consultas parametrizadas en MySQL, validación de datos y un panel responsivo en JavaScript con búsqueda y filtros en tiempo real.",
        highlights: [
          "Esquema MySQL normalizado en 3FN (Productos, Pedidos, Detalles, Proveedores) con llaves foráneas",
          "Endpoints CRUD REST con códigos HTTP claros y validación en servidor",
          "Alertas automáticas de stock mínimo y filtrado del historial de pedidos",
        ],
        codeSnippetTitle: "MySQL — Consulta de Stock Bajo",
        codeSnippet: `SELECT p.sku, p.name, p.stock_qty, s.company_name\nFROM products p\nINNER JOIN suppliers s ON p.supplier_id = s.id\nWHERE p.stock_qty <= p.reorder_level\nORDER BY p.stock_qty ASC;`,
      },
    },
    {
      id: "sprint-tracker",
      category: "fullstack",
      featured: false,
      stack: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/vivaseliezer",
      demoUrl: "",
      en: {
        badge: "Full-Stack • Agile Workflow",
        title: "Team Sprint & Bug Tracker",
        summary:
          "Lightweight issue tracker inspired by Jira/Linear that lets engineering teams create tickets, assign priorities, filter by sprint status, and persist data in MySQL.",
        problem:
          "Small engineering teams need a fast way to organize bugs and feature tickets without heavyweight configuration.",
        solution:
          "Architected a Python Flask API + MySQL persistence layer paired with a clean Kanban/list interface using semantic HTML, CSS Grid, and Fetch API.",
        highlights: [
          "Full ticket lifecycle (Backlog → In Progress → Code Review → Done)",
          "Priority & assignee filtering with zero page reloads via Fetch API",
          "Clean separation of concerns between routes, database service layer, and UI",
        ],
        codeSnippetTitle: "Python — REST Endpoint Example",
        codeSnippet: `@app.route("/api/tickets/<int:ticket_id>", methods=["PATCH"])\ndef update_status(ticket_id):\n    data = request.get_json()\n    status = data.get("status")\n    if status not in VALID_STATUSES:\n        return jsonify({"error": "Invalid status"}), 400\n    db.update_ticket_status(ticket_id, status)\n    return jsonify({"updated": True}), 200`,
      },
      es: {
        badge: "Full-Stack • Flujo Agile",
        title: "Gestor de Sprints y Bugs para Equipos",
        summary:
          "Rastreador de incidencias inspirado en Jira/Linear para crear tickets, asignar prioridades, filtrar por estado de sprint y guardar todo en MySQL.",
        problem:
          "Los equipos pequeños necesitan organizar bugs y tareas de desarrollo de forma rápida sin configuraciones complejas.",
        solution:
          "Diseñé una API en Python con Flask y persistencia en MySQL conectada a una interfaz tipo Kanban hecha con HTML semántico, CSS Grid y Fetch API.",
        highlights: [
          "Ciclo completo de tickets (Backlog → En Progreso → Revisión → Completado)",
          "Filtros por prioridad y responsable sin recargar la página con Fetch API",
          "Arquitectura limpia separando rutas, capa de base de datos e interfaz",
        ],
        codeSnippetTitle: "Python — Ejemplo de Endpoint REST",
        codeSnippet: `@app.route("/api/tickets/<int:ticket_id>", methods=["PATCH"])\ndef update_status(ticket_id):\n    data = request.get_json()\n    status = data.get("status")\n    if status not in VALID_STATUSES:\n        return jsonify({"error": "Estado inválido"}), 400\n    db.update_ticket_status(ticket_id, status)\n    return jsonify({"updated": True}), 200`,
      },
    },
    {
      id: "interactive-web-games",
      category: "frontend",
      featured: false,
      stack: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3", "Web Audio API"],
      githubUrl: "https://github.com/vivaseliezer",
      demoUrl: "#games",
      en: {
        badge: "Frontend Engineering • Live Arcade",
        title: "Browser Game Suite (4 Playable Titles)",
        summary:
          "Collection of 4 original browser games built from scratch with HTML5 Canvas, vanilla JavaScript, collision physics, procedural sound effects, and responsive controls.",
        problem:
          "Demonstrating real-time state management, animation loops, collision detection, and UI responsiveness beyond static web pages.",
        solution:
          "Engineered modular game loops, real-time lighting engines, AI enemy state machines, and economy simulations playable directly in any modern browser.",
        highlights: [
          "Custom 60 FPS requestAnimationFrame loops with delta-time movement and collision detection",
          "Dynamic Canvas lighting, weather particles, and procedural Web Audio sound synthesis",
          "Play all 4 titles directly in the Interactive Arcade section below",
        ],
        codeSnippetTitle: "JavaScript — AABB Collision Check",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
      es: {
        badge: "Ingeniería Frontend • Arcade en Vivo",
        title: "Colección de 4 Juegos Web Interactivos",
        summary:
          "Colección de 4 juegos originales construidos desde cero con HTML5 Canvas, JavaScript puro, física de colisiones, sonido procedural y controles responsivos.",
        problem:
          "Demostrar manejo de estado en tiempo real, bucles de animación, colisiones e interfaces dinámicas más allá de páginas estáticas.",
        solution:
          "Programé bucles de juego modulares, iluminación en tiempo real, IA de enemigos y simuladores de economía jugables directamente en cualquier navegador.",
        highlights: [
          "Bucles a 60 FPS con requestAnimationFrame, delta-time y detección de colisiones",
          "Iluminación dinámica en Canvas, partículas de clima y síntesis de audio Web Audio",
          "Prueba los 4 juegos completos directamente en la sección de Juegos aquí abajo",
        ],
        codeSnippetTitle: "JavaScript — Detección de Colisiones AABB",
        codeSnippet: `function isCollide(a, b) {\n  const aRect = a.getBoundingClientRect();\n  const bRect = b.getBoundingClientRect();\n  return !(\n    aRect.top > bRect.bottom || aRect.bottom < bRect.top ||\n    aRect.right < bRect.left || aRect.left > bRect.right\n  );\n}`,
      },
    },
  ],

  // ============================================================
  // ZONA DE JUEGOS INTERACTIVOS (TUS 4 JUEGOS REALES EN 1 CLIC)
  // ============================================================
  games: [
    {
      id: "dead-night",
      status: "playable",
      openMode: "modal",
      playUrl: {
        en: "./games/dead-night/index.html",
        es: "./games/noche-muerta/index.html",
      },
      githubUrl: "https://github.com/vivaseliezer",
      accent: "crimson",
      tech: ["HTML5 Canvas", "JavaScript", "Dynamic Lighting", "Web Audio API"],
      en: {
        genre: "Original Action Shooter • Bilingual (EN/ES)",
        title: "Dead Night",
        description:
          "Top-down zombie survival shooter featuring 10 campaign levels, endless Survival mode, Boss Rush with 6 unique bosses, real-time flashlight lighting, weather effects, and procedural Web Audio sound.",
        controls: "WASD / Arrows: Move • Mouse: Aim & Shoot • Space: Dash • F: Final Attack • Touch supported",
      },
      es: {
        genre: "Shooter Original • Bilingüe (EN/ES)",
        title: "Noche Muerta (Dead Night)",
        description:
          "Shooter top-down de supervivencia zombie con 10 niveles de campaña, modo Supervivencia infinito, Boss Rush con 6 jefes, linterna con iluminación dinámica en tiempo real, clima y sonido Web Audio.",
        controls: "WASD / Flechas: Mover • Mouse: Apuntar y Disparar • Espacio: Dash • F: Ataque Final • Táctil",
      },
    },
    {
      id: "the-goat",
      status: "playable",
      openMode: "modal",
      playUrl: "./games/goat/index.html",
      githubUrl: "https://github.com/vivaseliezer/goat",
      accent: "purple",
      tech: ["HTML5 4K Canvas", "JavaScript", "Entity AI", "Folklore Action"],
      en: {
        genre: "Original Action Game • 4K Anime Edition",
        title: "The Goat vs The Legends",
        description:
          "Defend your home against iconic Latin American folklore legends — El Cadejo, La Llorona, and El Duende — in an atmospheric 4K Canvas action brawler with ram attacks and health/score HUD.",
        controls: "WASD / Arrow Keys: Move • SPACE: Ram Attack",
      },
      es: {
        genre: "Acción Original • Edición Anime 4K",
        title: "The Goat vs The Legends",
        description:
          "Defiende tu hogar contra leyendas icónicas latinoamericanas — El Cadejo, La Llorona y El Duende — en un juego de acción en Canvas 4K con ataques de embestida y sistema de vida y puntaje.",
        controls: "WASD / Flechas: Mover • ESPACIO: Embestir",
      },
    },
    {
      id: "harvest-valley",
      status: "playable",
      openMode: "modal",
      playUrl: "./games/harvest-valley/index.html",
      githubUrl: "https://github.com/vivaseliezer",
      accent: "emerald",
      tech: ["HTML5 Canvas", "JavaScript", "Game Economy", "LocalStorage Save"],
      en: {
        genre: "Original Simulation • 1-Click Playable",
        title: "Harvest Valley Farm",
        description:
          "Handheld-style farming simulator with animated canvas crops, dynamic weather (sunny & rainy days), fluctuating market prices, energy management, and automatic browser save persistence.",
        controls: "Click or tap plots to plant, water, harvest & sell crops at the market",
      },
      es: {
        genre: "Simulación Original • Jugable en 1 Clic",
        title: "Harvest Valley Farm (Granja)",
        description:
          "Simulador de granja estilo consola portátil con cultivos animados en Canvas, clima dinámico (sol y lluvia), precios de mercado cambiantes, energía diaria y guardado automático.",
        controls: "Haz clic o toca las parcelas para plantar, regar, cosechar y vender",
      },
    },
    {
      id: "car-game",
      status: "playable",
      openMode: "modal",
      playUrl: "./games/car-game/index.html",
      githubUrl: "https://github.com/vivaseliezer/carGAME",
      accent: "cyan",
      tech: ["JavaScript (ES6+)", "DOM Animation", "Collision Detection", "CSS3"],
      en: {
        genre: "Original Arcade Racer • 1-Click Playable",
        title: "Highway Car Dodge",
        description:
          "Fast-paced highway dodging game with progressive speed scaling, randomized oncoming traffic, real-time AABB collision detection, and live high-score tracking.",
        controls: "Click Start • Arrow Keys to steer and dodge oncoming cars",
      },
      es: {
        genre: "Carreras Arcade • Jugable en 1 Clic",
        title: "Highway Car Dodge (carGAME)",
        description:
          "Juego arcade de velocidad en autopista con aceleración progresiva, tráfico aleatorio, detección de colisiones en tiempo real y marcador de récord en vivo.",
        controls: "Haz clic en Start • Flechas del teclado para esquivar autos",
      },
    },
  ],
};
