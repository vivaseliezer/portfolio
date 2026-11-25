/* ============================================================
   PORTFOLIO INTERACTIVITY — Bilingual EN/ES, Theme, Projects
   ============================================================ */

(function () {
  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) return;

  const I18N = {
    en: {
      "a11y.skip": "Skip to main content",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.games": "Games",
      "nav.skills": "Skills",
      "nav.journey": "Journey",
      "nav.contact": "Contact",
      "nav.resume": "Resume",
      "hero.greeting": "Hi, I’m",
      "hero.role": "Junior Full-Stack Software Developer",
      "hero.subtitle":
        "I build clean web applications, reliable REST APIs, and structured MySQL databases using <strong>C#</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>. Bilingual (English / Spanish) and ready to add value to a US engineering team from day one.",
      "hero.bilingual": "Bilingual: English & Spanish",
      "hero.viewProjects": "View Projects",
      "hero.resume": "View / Download CV",
      "hero.copyEmail": "Copy Email",
      "about.eyebrow": "About Me",
      "about.title": "Built on Fundamentals, Ready for Production Teams",
      "about.lead":
        "I focus on writing readable, maintainable code across the full stack — connecting responsive user interfaces with dependable backend APIs and relational databases.",
      "about.card1Title": "Full-Stack Foundation",
      "about.card1Body":
        "Comfortable building across HTML, CSS, and JavaScript on the front end, and C#, Python, and MySQL on the back end.",
      "about.card2Title": "Data & SQL Mindset",
      "about.card2Body":
        "I design normalized relational tables, write clean JOIN queries, and protect apps with parameterized queries and input validation.",
      "about.card3Title": "Bilingual Team Communicator",
      "about.card3Body":
        "Fluent in English and Spanish — able to document technical decisions clearly, pair program, and collaborate with diverse US teams and stakeholders.",
      "about.card4Title": "Clean Workflow & Growth",
      "about.card4Body":
        "Practicing Git branching, pull requests, debugging systematically, and adopting team coding conventions quickly.",
      "projects.eyebrow": "Selected Work",
      "projects.title": "Projects Solving Real Business Problems",
      "projects.lead":
        "Each project highlights architecture choices, database design, and code quality aligned with US engineering teams.",
      "projects.filterAll": "All",
      "projects.filterFullstack": "Full-Stack",
      "projects.filterBackend": "Backend & SQL",
      "projects.filterFrontend": "Frontend",
      "projects.caseStudy": "Case Study",
      "projects.code": "GitHub",
      "projects.demo": "Live Demo",
      "games.eyebrow": "Interactive Arcade Lab",
      "games.title": "Play My Games in One Click",
      "games.lead":
        "A dedicated playground for the games I’m creating. Click any playable title to launch it instantly in your browser — no downloads required.",
      "games.instantBadge": "Instant Browser Play",
      "games.playNow": "Play Now",
      "games.comingSoon": "In Development",
      "games.code": "Code",
      "games.restart": "Restart",
      "games.openFull": "Full Tab ↗",
      "skills.eyebrow": "Technical Toolkit",
      "skills.title": "Skills & Technologies",
      "skills.lead":
        "Organized around real-world software engineering responsibilities — from UI semantics to backend APIs and relational SQL.",
      "skills.frontend": "Frontend Development",
      "skills.backend": "Backend Development",
      "skills.database": "Databases & Data",
      "skills.tools": "Engineering Tools & Workflow",
      "skills.bilingualTag": "Bilingual (EN / ES)",
      "journey.eyebrow": "Background",
      "journey.title": "Learning Path & Engineering Milestones",
      "journey.item1Date": "2025 — Present",
      "journey.item1Title": "BYU-Pathway Worldwide — Software Development & Full-Stack Projects",
      "journey.item1Body":
        "Studying software development through BYU-Pathway Worldwide while building end-to-end apps, Python desktop tools, and interactive HTML5 games with C#, Python, JavaScript, and MySQL.",
      "journey.item2Date": "Core Stack",
      "journey.item2Title": "Backend & Relational Database Foundations (C#, Python, MySQL)",
      "journey.item2Body":
        "Practicing object-oriented design in C#, scripting & backend APIs in Python, and normalized database modeling, indexing basics, and complex queries in MySQL.",
      "journey.item3Date": "Frontend Craft",
      "journey.item3Title": "Responsive Web Interfaces (HTML5, CSS3, Modern JavaScript)",
      "journey.item3Body":
        "Developing fast, accessible, mobile-first interfaces with semantic HTML, modern CSS layouts, and interactive vanilla JavaScript without unnecessary bloat.",
      "contact.eyebrow": "Let’s Connect",
      "contact.title": "Looking for a Driven Junior Software Developer?",
      "contact.lead":
        "I’m actively interviewing for Junior Software Developer, Entry-Level Full-Stack, and Backend/SQL roles in the United States. Feel free to reach out on LinkedIn or send a quick message here.",
      "contact.linkedinCta": "Connect on LinkedIn",
      "contact.githubCta": "View GitHub",
      "contact.formName": "Name / Company",
      "contact.formEmail": "Email",
      "contact.formMessage": "Message",
      "contact.formSubmit": "Send Message",
      "footer.rights": "Built with semantic HTML, modern CSS, and vanilla JavaScript.",
      "footer.backToTop": "Back to top ↑",
      "modal.problem": "The Problem",
      "modal.solution": "My Solution",
      "modal.highlights": "Key Engineering Highlights",
      "modal.viewCode": "View Repository on GitHub",
      "modal.liveDemo": "Live Demo",
      "toast.emailCopied": "Email copied to clipboard!",
      "toast.formSent": "Thanks! Your message was submitted.",
      "toast.formLocal": "Opening your email app to send the message...",
    },
    es: {
      "a11y.skip": "Ir al contenido principal",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.games": "Juegos",
      "nav.skills": "Habilidades",
      "nav.journey": "Trayectoria",
      "nav.contact": "Contacto",
      "nav.resume": "Currículum",
      "hero.greeting": "Hola, soy",
      "hero.role": "Junior Full-Stack Software Developer",
      "hero.subtitle":
        "Desarrollo aplicaciones web limpias, APIs REST confiables y bases de datos MySQL bien estructuradas con <strong>C#</strong>, <strong>Python</strong> y <strong>JavaScript</strong>. Bilingüe (Inglés / Español) y listo para aportar valor a un equipo de tecnología en EE. UU.",
      "hero.bilingual": "Bilingüe: Inglés y Español",
      "hero.viewProjects": "Ver Proyectos",
      "hero.resume": "Ver / Descargar CV",
      "hero.copyEmail": "Copiar Correo",
      "about.eyebrow": "Sobre Mí",
      "about.title": "Bases Sólidas, Listo para Equipos de Producción",
      "about.lead":
        "Me enfoco en escribir código legible y mantenible en todo el stack: conectando interfaces responsivas con APIs backend seguras y bases de datos relacionales.",
      "about.card1Title": "Base Full-Stack",
      "about.card1Body":
        "Experiencia práctica con HTML, CSS y JavaScript en frontend, y C#, Python y MySQL en backend.",
      "about.card2Title": "Mentalidad de Datos y SQL",
      "about.card2Body":
        "Diseño tablas relacionales normalizadas, consultas JOIN limpias y protejo las apps con consultas parametrizadas y validación.",
      "about.card3Title": "Comunicación Bilingüe",
      "about.card3Body":
        "Dominio de Inglés y Español para documentar código con claridad, trabajar en equipo y colaborar con clientes y equipos diversos en EE. UU.",
      "about.card4Title": "Flujo Limpio y Aprendizaje",
      "about.card4Body":
        "Uso diario de Git, ramas, depuración metódica y rápida adaptación a los estándares del equipo.",
      "projects.eyebrow": "Portafolio",
      "projects.title": "Proyectos que Resuelven Problemas Reales",
      "projects.lead":
        "Cada proyecto muestra decisiones de arquitectura, diseño de base de datos y buenas prácticas buscadas por empresas tech en EE. UU.",
      "projects.filterAll": "Todos",
      "projects.filterFullstack": "Full-Stack",
      "projects.filterBackend": "Backend y SQL",
      "projects.filterFrontend": "Frontend",
      "projects.caseStudy": "Ver Detalle",
      "projects.code": "GitHub",
      "projects.demo": "Demo",
      "games.eyebrow": "Zona Interactiva de Juegos",
      "games.title": "Juega Mis Juegos con Un Solo Clic",
      "games.lead":
        "Un espacio especial para los juegos que estoy creando. Haz clic en cualquier juego disponible para jugarlo al instante en el navegador, sin descargas.",
      "games.instantBadge": "Juego Instantáneo en Navegador",
      "games.playNow": "Jugar Ahora",
      "games.comingSoon": "En Desarrollo",
      "games.code": "Código",
      "games.restart": "Reiniciar",
      "games.openFull": "Pantalla Completa ↗",
      "skills.eyebrow": "Stack Técnico",
      "skills.title": "Habilidades y Tecnologías",
      "skills.lead":
        "Organizadas según responsabilidades reales de ingeniería de software: desde interfaces accesibles hasta APIs y SQL relacional.",
      "skills.frontend": "Desarrollo Frontend",
      "skills.backend": "Desarrollo Backend",
      "skills.database": "Bases de Datos y Datos",
      "skills.tools": "Herramientas y Flujo de Trabajo",
      "skills.bilingualTag": "Bilingüe (EN / ES)",
      "journey.eyebrow": "Formación",
      "journey.title": "Ruta de Aprendizaje e Hitos Técnicos",
      "journey.item1Date": "2025 — Actualidad",
      "journey.item1Title": "BYU-Pathway Worldwide — Desarrollo de Software y Proyectos Full-Stack",
      "journey.item1Body":
        "Estudiando desarrollo de software en BYU-Pathway Worldwide mientras construyo aplicaciones completas, software de escritorio en Python y juegos HTML5 con C#, Python, JavaScript y MySQL.",
      "journey.item2Date": "Stack Backend",
      "journey.item2Title": "Fundamentos de Backend y Bases de Datos (C#, Python, MySQL)",
      "journey.item2Body":
        "Programación orientada a objetos en C#, automatización y APIs con Python, y modelado relacional normalizado y consultas avanzadas en MySQL.",
      "journey.item3Date": "Frontend",
      "journey.item3Title": "Interfaces Web Responsivas (HTML5, CSS3, JavaScript Moderno)",
      "journey.item3Body":
        "Creación de interfaces rápidas, accesibles y adaptables a móvil usando HTML semántico, CSS moderno y JavaScript limpio.",
      "contact.eyebrow": "Contacto",
      "contact.title": "¿Buscas un Junior Software Developer Comprometido?",
      "contact.lead":
        "Estoy abierto a entrevistas para roles Junior Software Developer, Full-Stack o Backend/SQL en Estados Unidos. Puedes conectarte en LinkedIn o enviarme un mensaje directo aquí.",
      "contact.linkedinCta": "Conectar en LinkedIn",
      "contact.githubCta": "Ver GitHub",
      "contact.formName": "Nombre / Empresa",
      "contact.formEmail": "Correo electrónico",
      "contact.formMessage": "Mensaje",
      "contact.formSubmit": "Enviar Mensaje",
      "footer.rights": "Desarrollado con HTML semántico, CSS moderno y JavaScript puro.",
      "footer.backToTop": "Volver arriba ↑",
      "modal.problem": "El Problema",
      "modal.solution": "Mi Solución",
      "modal.highlights": "Puntos Técnicos Clave",
      "modal.viewCode": "Ver Repositorio en GitHub",
      "modal.liveDemo": "Ver Demo",
      "toast.emailCopied": "¡Correo copiado al portapapeles!",
      "toast.formSent": "¡Gracias! Tu mensaje ha sido enviado.",
      "toast.formLocal": "Abriendo tu app de correo para enviar el mensaje...",
    },
  };

  const CODE_SNIPPETS = {
    csharp: {
      pill: "C# / .NET",
      html: `<span class="tok-kw">public class</span> <span class="tok-type">SoftwareDeveloper</span>
{
    <span class="tok-kw">public string</span> Name { <span class="tok-kw">get</span>; } = <span class="tok-str">"${cfg.fullName}"</span>;
    <span class="tok-kw">public string</span> Role { <span class="tok-kw">get</span>; } = <span class="tok-str">"Junior Full-Stack Developer"</span>;
    <span class="tok-kw">public string</span>[] Languages { <span class="tok-kw">get</span>; } = { <span class="tok-str">"English"</span>, <span class="tok-str">"Spanish"</span> };
    <span class="tok-kw">public string</span>[] Stack { <span class="tok-kw">get</span>; } = {
        <span class="tok-str">"C#"</span>, <span class="tok-str">"Python"</span>, <span class="tok-str">"JavaScript"</span>, <span class="tok-str">"MySQL"</span>, <span class="tok-str">"HTML/CSS"</span>
    };

    <span class="tok-kw">public bool</span> OpenToWork => <span class="tok-kw">true</span>; <span class="tok-com">// US Teams</span>
}`,
    },
    python: {
      pill: "Python 3",
      html: `<span class="tok-kw">class</span> <span class="tok-type">DeveloperProfile</span>:
    name = <span class="tok-str">"${cfg.fullName}"</span>
    focus = [<span class="tok-str">"REST APIs"</span>, <span class="tok-str">"Web Apps"</span>, <span class="tok-str">"SQL Data"</span>]
    bilingual = (<span class="tok-str">"EN"</span>, <span class="tok-str">"ES"</span>)

    <span class="tok-kw">def</span> <span class="tok-type">contribute</span>(self, team):
        <span class="tok-kw">return</span> {
            <span class="tok-str">"clean_code"</span>: <span class="tok-kw">True</span>,
            <span class="tok-str">"fast_learner"</span>: <span class="tok-kw">True</span>,
            <span class="tok-str">"ready_for_us_roles"</span>: <span class="tok-kw">True</span>,
        }`,
    },
    sql: {
      pill: "MySQL 8",
      html: `<span class="tok-com">-- Query top candidate for Junior Dev role</span>
<span class="tok-kw">SELECT</span> name, core_stack, languages
<span class="tok-kw">FROM</span> developers
<span class="tok-kw">WHERE</span> name = <span class="tok-str">'${cfg.fullName}'</span>
  <span class="tok-kw">AND</span> open_to_work = <span class="tok-num">1</span>
  <span class="tok-kw">AND</span> location = <span class="tok-str">'United States'</span>;

<span class="tok-com">-- Result: 1 row returned (Ready to interview)</span>`,
    },
  };

  let currentLang = localStorage.getItem("portfolio-lang") || "en";
  let currentFilter = "all";
  let activeModalProject = null;
  let activeGame = null;

  // Bind config links & brand
  function applyConfig() {
    document.getElementById("brand-name").textContent = cfg.brandTag;
    document.getElementById("hero-name").textContent = cfg.fullName;
    document.getElementById("footer-name").textContent = cfg.fullName;
    document.getElementById("contact-email-display").textContent = cfg.links.email;
    const schoolEmailLink = document.getElementById("contact-school-email");
    const schoolEmailDisplay = document.getElementById("contact-school-email-display");
    if (schoolEmailLink && schoolEmailDisplay && cfg.links.schoolEmail) {
      schoolEmailDisplay.textContent = cfg.links.schoolEmail;
      schoolEmailLink.href = `mailto:${cfg.links.schoolEmail}`;
    }
    document.getElementById("current-year").textContent = new Date().getFullYear();

    const linkedinIds = ["hero-linkedin", "contact-linkedin"];
    linkedinIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = cfg.links.linkedin;
    });

    const githubIds = ["hero-github", "contact-github"];
    githubIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = cfg.links.github;
    });

    const resumeIds = ["nav-resume-link", "hero-resume-link"];
    resumeIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = cfg.links.resumeUrl;
    });
  }

  // Translation helper
  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function applyLanguage(lang) {
    currentLang = lang === "es" ? "es" : "en";
    localStorage.setItem("portfolio-lang", currentLang);
    document.documentElement.lang = currentLang;

    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = currentLang === "en" ? "ES" : "EN";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val.includes("<strong>")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.getElementById("availability-text").textContent = cfg.availability[currentLang];
    document.getElementById("hero-location").textContent = cfg.location[currentLang];

    renderProjects();
    renderGames();
    if (activeModalProject) {
      populateModal(activeModalProject);
    }
    if (activeGame) {
      updateGameModalLabels(activeGame);
    }
  }

  // Render Projects
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const filtered = cfg.projects.filter(
      (p) => currentFilter === "all" || p.category === currentFilter
    );

    grid.innerHTML = filtered
      .map((project) => {
        const copy = project[currentLang] || project.en;
        const tagsHtml = project.stack
          .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
          .join("");

        const demoBtn = project.demoUrl
          ? project.demoUrl.startsWith("#")
            ? `<a href="${escapeAttr(project.demoUrl)}" class="btn btn-sm btn-secondary">${t("projects.demo")}</a>`
            : `<a href="${escapeAttr(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">${t("projects.demo")}</a>`
          : "";

        const previewHtml = project.previewImage
          ? `<div class="project-thumb"><img src="${escapeAttr(project.previewImage)}" alt="${escapeAttr(copy.title)} preview" loading="lazy" /></div>`
          : "";

        return `
          <article class="project-card">
            <span class="project-badge">${escapeHtml(copy.badge)}</span>
            <h3>${escapeHtml(copy.title)}</h3>
            ${previewHtml}
            <p class="project-summary">${escapeHtml(copy.summary)}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-actions">
              <button type="button" class="btn btn-sm btn-primary" data-open-project="${escapeAttr(project.id)}">
                ${t("projects.caseStudy")}
              </button>
              <a href="${escapeAttr(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
                ${t("projects.code")}
              </a>
              ${demoBtn}
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-open-project]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-open-project");
        const proj = cfg.projects.find((p) => p.id === id);
        if (proj) openModal(proj);
      });
    });
  }

  // Helper: resolve game URL (supports string or { en, es } localized URLs)
  function resolveGameUrl(game) {
    if (!game || !game.playUrl) return "";
    if (typeof game.playUrl === "string") return game.playUrl;
    return game.playUrl[currentLang] || game.playUrl.en || game.playUrl.es || "";
  }

  // Render Interactive Games Arcade
  function renderGames() {
    const grid = document.getElementById("games-grid");
    if (!grid || !Array.isArray(cfg.games)) return;

    grid.innerHTML = cfg.games
      .map((game) => {
        const copy = game[currentLang] || game.en;
        const url = resolveGameUrl(game);
        const isPlayable = game.status === "playable" && Boolean(url);
        const tagsHtml = (game.tech || [])
          .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
          .join("");

        const playActionHtml = isPlayable
          ? game.openMode === "newtab"
            ? `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary btn-play">
                 <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                 <span>${t("games.playNow")}</span>
               </a>`
            : `<button type="button" class="btn btn-sm btn-primary btn-play" data-play-game="${escapeAttr(game.id)}">
                 <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                 <span>${t("games.playNow")}</span>
               </button>`
          : `<button type="button" class="btn btn-sm btn-secondary btn-play btn-disabled" disabled>
               <span>${t("games.comingSoon")}</span>
             </button>`;

        const githubBtn = game.githubUrl
          ? `<a href="${escapeAttr(game.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">${t("games.code")}</a>`
          : "";

        return `
          <article class="game-card ${isPlayable ? "" : "is-coming-soon"}" data-accent="${escapeAttr(game.accent || "cyan")}">
            <div class="game-card-top">
              <span class="project-badge" style="margin-bottom:0;">${escapeHtml(copy.genre)}</span>
              <span class="game-icon-box" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="6" width="20" height="12" rx="4"></rect>
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <circle cx="15" cy="11" r="1"></circle>
                  <circle cx="17.5" cy="13" r="1"></circle>
                </svg>
              </span>
            </div>
            <h3>${escapeHtml(copy.title)}</h3>
            <p class="game-desc">${escapeHtml(copy.description)}</p>
            <div class="game-controls-note">${escapeHtml(copy.controls)}</div>
            <div class="project-tags">${tagsHtml}</div>
            <div class="game-actions">
              ${playActionHtml}
              ${githubBtn}
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-play-game]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-play-game");
        const game = cfg.games.find((g) => g.id === id);
        if (game) openGameModal(game);
      });
    });
  }

  // 1-Click Game Player Modal
  const gameModal = document.getElementById("game-modal");
  const gameModalClose = document.getElementById("game-modal-close");
  const gameIframe = document.getElementById("game-iframe");
  const gameRestartBtn = document.getElementById("game-restart-btn");
  const gameNewTabLink = document.getElementById("game-newtab-link");

  function updateGameModalLabels(game) {
    const copy = game[currentLang] || game.en;
    document.getElementById("game-modal-title").textContent = copy.title;
    document.getElementById("game-modal-controls-hint").textContent = copy.controls;
  }

  function openGameModal(game) {
    activeGame = game;
    const url = resolveGameUrl(game);
    updateGameModalLabels(game);
    gameIframe.src = url;
    gameNewTabLink.href = url;
    gameModal.hidden = false;
    document.body.style.overflow = "hidden";
    gameModalClose.focus();
  }

  if (gameIframe) {
    gameIframe.addEventListener("load", () => {
      if (activeGame && gameIframe.contentWindow) {
        try {
          gameIframe.contentWindow.focus();
        } catch {
          // Cross-origin iframe focus ignored safely
        }
      }
    });
  }

  function closeGameModal() {
    gameModal.hidden = true;
    gameIframe.src = "about:blank";
    activeGame = null;
    document.body.style.overflow = "";
  }

  if (gameModalClose) gameModalClose.addEventListener("click", closeGameModal);
  if (gameRestartBtn) {
    gameRestartBtn.addEventListener("click", () => {
      if (activeGame && gameIframe) {
        const url = resolveGameUrl(activeGame);
        gameIframe.src = "about:blank";
        setTimeout(() => {
          if (activeGame) gameIframe.src = url;
        }, 40);
      }
    });
  }
  if (gameModal) {
    gameModal.addEventListener("click", (e) => {
      if (e.target === gameModal) closeGameModal();
    });
  }

  // Modal Logic
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");

  function populateModal(project) {
    const copy = project[currentLang] || project.en;
    document.getElementById("modal-badge").textContent = copy.badge;
    document.getElementById("modal-title").textContent = copy.title;
    document.getElementById("modal-problem").textContent = copy.problem;
    document.getElementById("modal-solution").textContent = copy.solution;
    document.getElementById("modal-code-title").textContent = copy.codeSnippetTitle;
    document.getElementById("modal-code-content").textContent = copy.codeSnippet;

    document.getElementById("modal-tags").innerHTML = project.stack
      .map((s) => `<span class="tech-tag">${escapeHtml(s)}</span>`)
      .join("");

    document.getElementById("modal-highlights").innerHTML = copy.highlights
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    document.getElementById("modal-github").href = project.githubUrl;

    const previewWrap = document.getElementById("modal-preview-wrap");
    const previewImg = document.getElementById("modal-preview-img");
    if (previewWrap && previewImg) {
      if (project.previewImage) {
        previewImg.src = project.previewImage;
        previewImg.alt = `${copy.title} screenshot`;
        previewWrap.hidden = false;
      } else {
        previewWrap.hidden = true;
      }
    }

    const demoLink = document.getElementById("modal-demo");
    if (project.demoUrl) {
      demoLink.href = project.demoUrl;
      if (project.demoUrl.startsWith("#")) {
        demoLink.removeAttribute("target");
        demoLink.onclick = () => closeModal();
      } else {
        demoLink.setAttribute("target", "_blank");
        demoLink.onclick = null;
      }
      demoLink.hidden = false;
    } else {
      demoLink.hidden = true;
    }
  }

  function openModal(project) {
    activeModalProject = project;
    populateModal(project);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    activeModalProject = null;
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && !modal.hidden) closeModal();
      if (gameModal && !gameModal.hidden) closeGameModal();
    }
  });

  // Hero Code Tabs
  function setCodeTab(key) {
    const snippet = CODE_SNIPPETS[key] || CODE_SNIPPETS.csharp;
    document.getElementById("hero-code-content").innerHTML = snippet.html;
    document.getElementById("code-lang-pill").textContent = snippet.pill;

    document.querySelectorAll(".code-tab").forEach((tab) => {
      const active = tab.getAttribute("data-code-tab") === key;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  document.querySelectorAll(".code-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      setCodeTab(tab.getAttribute("data-code-tab"));
    });
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });
      renderProjects();
    });
  });

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
    });
  }

  // Language Toggle
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "es" : "en");
    });
  }

  // Mobile Menu
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Toast helper
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2800);
  }

  // Copy email buttons
  function copyEmail() {
    const email = cfg.links.email;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => showToast(t("toast.emailCopied")));
    } else {
      window.location.href = `mailto:${email}`;
    }
  }
  ["copy-email-hero", "copy-email-contact"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", copyEmail);
  });

  // Contact form handler (works on Netlify or falls back to mailto locally)
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const isLocal =
        window.location.protocol === "file:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      if (isLocal) {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.get("name")}`);
        const body = encodeURIComponent(
          `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
        );
        formStatus.textContent = t("toast.formLocal");
        window.location.href = `mailto:${cfg.links.email}?subject=${subject}&body=${body}`;
        return;
      }

      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });
        if (res.ok) {
          form.reset();
          formStatus.textContent = t("toast.formSent");
          showToast(t("toast.formSent"));
        } else {
          throw new Error("Form submission failed");
        }
      } catch {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.get("name")}`);
        const body = encodeURIComponent(
          `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
        );
        window.location.href = `mailto:${cfg.links.email}?subject=${subject}&body=${body}`;
      }
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  // Initialize
  applyConfig();
  setCodeTab("csharp");
  applyLanguage(currentLang);
})();
