/* ============================================================
   ORLANDO VIVAS — PORTFOLIO INTERACTIVITY
   4 Separate Project Folders, Bilingual EN/ES, Light/Dark, 1-Click Live Preview
   ============================================================ */

(function () {
  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) return;

  const I18N = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.folders": "Folders",
      "nav.games": "Games",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.resume": "Resume PDF",
      "hero.headline":
        "I build desktop tools in Python, web apps in JavaScript, and browser games from scratch.",
      "hero.bio":
        "I’m <strong>Orlando Vivas</strong> — a bilingual (English &amp; Spanish) software developer studying at <strong>BYU-Pathway Worldwide</strong>. Instead of only describing what I’ve learned, I organized my games, e-commerce storefront, websites, and Python apps into folders you can open and test right here.",
      "hero.browseFolders": "Browse Project Folders ↓",
      "hero.viewResume": "View Resume",
      "hero.copyEmail": "oralvivas122@gmail.com (copy)",
      "folders.eyebrow": "Project Folders",
      "folders.title": "Organized by category — open any folder",
      "folders.lead":
        "Each area of my work lives in its own folder: playable browser games, an interactive e-commerce storefront, responsive websites, and Python desktop & automation tools.",
      "folders.showAll": "View All Folders",
      "folders.itemsSingular": "item",
      "folders.itemsPlural": "items",
      "games.playNow": "Open Live",
      "games.code": "Source",
      "games.notes": "Notes",
      "games.restart": "Restart",
      "games.openFull": "Full Tab ↗",
      "about.eyebrow": "Background",
      "about.title": "Learning by shipping real software",
      "about.p1":
        "I’m currently studying Software Development through <strong>BYU-Pathway Worldwide</strong> while living in <strong>Springfield, Virginia</strong>. I learn fastest by building complete programs from scratch — debugging real problems, organizing code cleanly, and putting my work online where people can actually use it.",
      "about.p2":
        "I speak both <strong>English and Spanish fluently</strong>, collaborate weekly in team coding activities using Git and GitHub, and I’m looking for my first role as a Junior Software Developer, Entry-Level Full-Stack/C#/.NET Developer, QA Tester, or Software Engineering Intern in Northern Virginia, DC, or remote.",
      "about.eduDetail": "Software Development Program — Python, C#, JavaScript, HTML/CSS & MySQL",
      "about.locLabel": "Location",
      "about.langDetail": "Bilingual: English & Spanish",
      "skills.title": "Tools & Technologies I Use",
      "skills.languages": "Languages",
      "skills.backend": "Backend & Data",
      "skills.frontend": "Web & Graphics",
      "skills.workflow": "Workflow",
      "skills.resumeTitle": "Need a 1-page resume?",
      "skills.resumeSub": "ATS-formatted PDF or web version ready to print.",
      "skills.webVersion": "Web View",
      "contact.eyebrow": "Get in Touch",
      "contact.title": "Let’s talk about your team or an open role",
      "contact.lead":
        "Whether you’re a hiring manager in Northern Virginia / DC, a recruiter, or a fellow developer who tried one of my projects, feel free to email me directly or send a quick note here.",
      "contact.primaryEmail": "Email",
      "contact.studentEmail": "BYU-Pathway",
      "contact.clickCopy": "Copy",
      "contact.formName": "Your name or company",
      "contact.formEmail": "Email address",
      "contact.formMessage": "Message",
      "contact.formSubmit": "Send Message",
      "footer.note": "Hand-coded in Springfield, VA with plain HTML, CSS, and JavaScript.",
      "footer.top": "Back to top ↑",
      "modal.problem": "Problem",
      "modal.solution": "Approach",
      "modal.highlights": "Key Details",
      "modal.viewCode": "View Code on GitHub ↗",
      "toast.emailCopied": "Copied oralvivas122@gmail.com to clipboard",
      "toast.formSent": "Message sent — thanks for reaching out!",
      "toast.formLocal": "Opening your email app...",
    },
    es: {
      "a11y.skip": "Ir al contenido",
      "nav.folders": "Carpetas",
      "nav.games": "Juegos",
      "nav.about": "Sobre mí",
      "nav.contact": "Contacto",
      "nav.resume": "CV en PDF",
      "hero.headline":
        "Creo aplicaciones de escritorio en Python, tiendas y herramientas web en JavaScript y juegos en navegador desde cero.",
      "hero.bio":
        "Soy <strong>Orlando Vivas</strong>, desarrollador de software bilingüe (Inglés y Español) estudiando en <strong>BYU-Pathway Worldwide</strong>. Organicé mis juegos, tienda e-commerce, sitios web y herramientas de Python en carpetas separadas para que puedas abrir y probar todo aquí mismo.",
      "hero.browseFolders": "Explorar Carpetas ↓",
      "hero.viewResume": "Ver Currículum",
      "hero.copyEmail": "oralvivas122@gmail.com (copiar)",
      "folders.eyebrow": "Carpetas de Proyectos",
      "folders.title": "Organizado por categoría — abre cualquier carpeta",
      "folders.lead":
        "Cada área de mi trabajo tiene su propia carpeta: juegos jugables en navegador, tienda e-commerce interactiva, sitios web responsivos y aplicaciones/scripts de Python.",
      "folders.showAll": "Ver Todas las Carpetas",
      "folders.itemsSingular": "proyecto",
      "folders.itemsPlural": "proyectos",
      "games.playNow": "Abrir en Vivo",
      "games.code": "Código",
      "games.notes": "Notas",
      "games.restart": "Reiniciar",
      "games.openFull": "Pestaña Completa ↗",
      "about.eyebrow": "Historia",
      "about.title": "Aprendiendo construyendo software real",
      "about.p1":
        "Actualmente estudio Desarrollo de Software en <strong>BYU-Pathway Worldwide</strong> desde <strong>Springfield, Virginia</strong>. Aprendo mejor creando programas completos desde cero: depurando errores reales, organizando el código y publicándolo para que cualquiera lo use.",
      "about.p2":
        "Hablo <strong>inglés y español con fluidez</strong>, trabajo semanalmente en equipo con Git y GitHub, y busco mi primera oportunidad como Junior Software Developer, C#/.NET Developer, QA Tester o Intern en Northern Virginia, DC o remoto.",
      "about.eduDetail": "Programa de Desarrollo de Software — Python, C#, JavaScript, HTML/CSS y MySQL",
      "about.locLabel": "Ubicación",
      "about.langDetail": "Bilingüe: Inglés y Español",
      "skills.title": "Tecnologías y Herramientas",
      "skills.languages": "Lenguajes",
      "skills.backend": "Backend y Datos",
      "skills.frontend": "Web y Gráficos",
      "skills.workflow": "Flujo de Trabajo",
      "skills.resumeTitle": "¿Necesitas mi CV en 1 página?",
      "skills.resumeSub": "PDF formato ATS o versión web lista para imprimir.",
      "skills.webVersion": "Ver en Web",
      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos sobre tu equipo o una vacante",
      "contact.lead":
        "Si buscas un Junior Developer en Northern Virginia / DC o remoto, o simplemente probaste alguno de mis proyectos, escríbeme directo por correo o envíame un mensaje aquí.",
      "contact.primaryEmail": "Correo",
      "contact.studentEmail": "BYU-Pathway",
      "contact.clickCopy": "Copiar",
      "contact.formName": "Tu nombre o empresa",
      "contact.formEmail": "Correo electrónico",
      "contact.formMessage": "Mensaje",
      "contact.formSubmit": "Enviar Mensaje",
      "footer.note": "Programado a mano en Springfield, VA con HTML, CSS y JavaScript puro.",
      "footer.top": "Volver arriba ↑",
      "modal.problem": "Problema",
      "modal.solution": "Solución",
      "modal.highlights": "Puntos Clave",
      "modal.viewCode": "Ver Código en GitHub ↗",
      "toast.emailCopied": "Correo oralvivas122@gmail.com copiado",
      "toast.formSent": "¡Mensaje enviado! Gracias por escribir.",
      "toast.formLocal": "Abriendo tu app de correo...",
    },
  };

  let currentLang = localStorage.getItem("portfolio-lang") || "en";
  let activeFolder = "games"; // "games" | "ecommerce" | "websites" | "python" | "all"
  let activeShowcaseIdx = 0;
  let activeModalItem = null;
  let activeLiveItem = null;

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
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

  function resolveLiveUrl(item) {
    if (!item || !item.liveUrl) return "";
    if (typeof item.liveUrl === "string") return item.liveUrl;
    return item.liveUrl[currentLang] || item.liveUrl.en || item.liveUrl.es || "";
  }

  function applyConfig() {
    document.getElementById("brand-name").textContent = cfg.brandTag;
    document.getElementById("footer-name").textContent = cfg.fullName;
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("contact-email-display").textContent = cfg.links.email;
    document.getElementById("contact-school-email-display").textContent = cfg.links.schoolEmail;
    document.getElementById("contact-school-email").href = `mailto:${cfg.links.schoolEmail}`;

    ["hero-github", "contact-github"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = cfg.links.github;
    });
    ["hero-linkedin", "contact-linkedin"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = cfg.links.linkedin;
    });

    const navResume = document.getElementById("nav-resume-link");
    if (navResume) navResume.href = cfg.links.resumePdf;
    const aboutPdf = document.getElementById("about-pdf-link");
    if (aboutPdf) aboutPdf.href = cfg.links.resumePdf;
    const heroResume = document.getElementById("hero-resume-link");
    if (heroResume) heroResume.href = cfg.links.resumeHtml;
  }

  // Hero Visual Showcase
  function renderShowcase() {
    const list = cfg.showcase || [];
    const entry = list[activeShowcaseIdx] || list[0];
    if (!entry) return;

    const copy = entry[currentLang] || entry.en;
    const img = document.getElementById("showcase-img");
    const cap = document.getElementById("showcase-caption");
    const ctaText = document.getElementById("showcase-cta-text");
    const tabsWrap = document.getElementById("showcase-tabs");

    if (img) {
      img.src = entry.image;
      img.alt = copy.caption;
    }
    if (cap) cap.textContent = copy.caption;
    if (ctaText) ctaText.textContent = copy.cta;

    if (tabsWrap) {
      tabsWrap.innerHTML = list
        .map((it, idx) => {
          const tabCopy = it[currentLang] || it.en;
          const active = idx === activeShowcaseIdx;
          return `<button type="button" class="showcase-tab ${active ? "active" : ""}" role="tab" aria-selected="${active}" data-showcase-idx="${idx}">${escapeHtml(tabCopy.tab)}</button>`;
        })
        .join("");

      tabsWrap.querySelectorAll("[data-showcase-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeShowcaseIdx = Number(btn.getAttribute("data-showcase-idx"));
          renderShowcase();
        });
      });
    }
  }

  const showcaseBtn = document.getElementById("showcase-action-btn");
  if (showcaseBtn) {
    showcaseBtn.addEventListener("click", () => {
      const entry = (cfg.showcase || [])[activeShowcaseIdx];
      if (!entry) return;
      const item = (cfg.items || []).find((x) => x.id === entry.itemId);
      if (!item) return;
      if (item.kind === "live") openLiveModal(item);
      else openNotesModal(item);
    });
  }

  // Render 4 Interactive Category Folders
  function renderFolders() {
    const wrap = document.getElementById("folders-grid");
    const allBtn = document.getElementById("show-all-folders-btn");
    if (!wrap) return;

    if (allBtn) {
      allBtn.classList.toggle("active", activeFolder === "all");
    }

    wrap.innerHTML = (cfg.folders || [])
      .map((folder) => {
        const copy = folder[currentLang] || folder.en;
        const count = (cfg.items || []).filter((i) => i.folder === folder.id).length;
        const isActive = activeFolder === folder.id;
        return `
          <button
            type="button"
            class="folder-card ${isActive ? "active" : ""}"
            role="tab"
            aria-selected="${isActive}"
            data-folder-id="${escapeAttr(folder.id)}"
          >
            <div class="folder-card-top">
              <svg class="folder-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span class="folder-count-pill">${count}</span>
            </div>
            <span class="folder-path-tag">${escapeHtml(folder.path)}</span>
            <h3>${escapeHtml(copy.name)}</h3>
            <p>${escapeHtml(copy.summary)}</p>
          </button>
        `;
      })
      .join("");

    wrap.querySelectorAll("[data-folder-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFolder = btn.getAttribute("data-folder-id");
        renderFolders();
        renderFolderItems();
      });
    });
  }

  const allFoldersBtn = document.getElementById("show-all-folders-btn");
  if (allFoldersBtn) {
    allFoldersBtn.addEventListener("click", () => {
      activeFolder = "all";
      renderFolders();
      renderFolderItems();
    });
  }

  // Render Items inside Selected Folder
  function renderFolderItems() {
    const grid = document.getElementById("folder-items-grid");
    const pathEl = document.getElementById("active-folder-path");
    const countEl = document.getElementById("active-folder-count");
    if (!grid) return;

    const filtered = (cfg.items || []).filter(
      (item) => activeFolder === "all" || item.folder === activeFolder
    );

    if (pathEl) {
      if (activeFolder === "all") {
        pathEl.textContent = "portfolio / all-folders/";
      } else {
        const f = (cfg.folders || []).find((x) => x.id === activeFolder);
        pathEl.textContent = `portfolio / ${f ? f.path : activeFolder + "/"}`;
      }
    }

    if (countEl) {
      const noun = filtered.length === 1 ? t("folders.itemsSingular") : t("folders.itemsPlural");
      countEl.textContent = `${filtered.length} ${noun}`;
    }

    grid.innerHTML = filtered
      .map((item) => {
        const copy = item[currentLang] || item.en;
        const isLive = item.kind === "live" && Boolean(resolveLiveUrl(item));
        const tagsHtml = (item.stack || [])
          .map((s) => `<span class="chip">${escapeHtml(s)}</span>`)
          .join("");

        const controlsHtml = copy.controls
          ? `<div class="game-controls-line">${escapeHtml(copy.controls)}</div>`
          : "";

        const primaryBtn = isLive
          ? `<button type="button" class="btn btn-sm btn-accent btn-grow" data-open-live="${escapeAttr(item.id)}">
               <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
               ${escapeHtml(copy.actionLabel || t("games.playNow"))}
             </button>`
          : `<button type="button" class="btn btn-sm btn-solid btn-grow" data-open-notes="${escapeAttr(item.id)}">
               ${escapeHtml(copy.actionLabel || t("games.notes"))}
             </button>`;

        const notesBtn = isLive
          ? `<button type="button" class="btn btn-sm btn-outline" data-open-notes="${escapeAttr(item.id)}">${escapeHtml(t("games.notes"))}</button>`
          : "";

        const coverPill = isLive
          ? `<span class="cover-play-pill">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
               ${escapeHtml(copy.actionLabel || t("games.playNow"))}
             </span>`
          : `<span class="cover-play-pill">${escapeHtml(t("games.notes"))}</span>`;

        const coverActionAttr = isLive
          ? `data-open-live="${escapeAttr(item.id)}"`
          : `data-open-notes="${escapeAttr(item.id)}"`;

        return `
          <article class="game-card">
            <div class="game-cover" ${coverActionAttr} role="button" tabindex="0" aria-label="${escapeAttr(copy.title)}">
              <img src="${escapeAttr(item.image)}" alt="${escapeAttr(copy.title)} preview" loading="lazy" />
              ${coverPill}
            </div>
            <div class="game-body">
              <span class="mono-tag">${escapeHtml(copy.tag)}</span>
              <h3>${escapeHtml(copy.title)}</h3>
              <p class="game-desc">${escapeHtml(copy.summary)}</p>
              ${controlsHtml}
              <div class="tag-row">${tagsHtml}</div>
              <div class="card-actions">
                ${primaryBtn}
                ${notesBtn}
                <a href="${escapeAttr(item.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                  ${escapeHtml(t("games.code"))} &nearr;
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-open-live]").forEach((el) => {
      const go = () => {
        const item = (cfg.items || []).find((x) => x.id === el.getAttribute("data-open-live"));
        if (item) openLiveModal(item);
      };
      el.addEventListener("click", go);
      if (el.getAttribute("role") === "button") {
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            go();
          }
        });
      }
    });

    grid.querySelectorAll("[data-open-notes]").forEach((el) => {
      const go = () => {
        const item = (cfg.items || []).find((x) => x.id === el.getAttribute("data-open-notes"));
        if (item) openNotesModal(item);
      };
      el.addEventListener("click", go);
      if (el.getAttribute("role") === "button") {
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            go();
          }
        });
      }
    });
  }

  // Technical Notes Modal
  const projectModal = document.getElementById("project-modal");
  const projectModalClose = document.getElementById("modal-close");
  const modalPlayBtn = document.getElementById("modal-play-btn");

  function populateNotesModal(item) {
    const copy = item[currentLang] || item.en;
    document.getElementById("modal-badge").textContent = copy.tag;
    document.getElementById("modal-title").textContent = copy.title;
    document.getElementById("modal-problem").textContent = copy.problem;
    document.getElementById("modal-solution").textContent = copy.solution;
    document.getElementById("modal-code-title").textContent = copy.codeSnippetTitle;
    document.getElementById("modal-code-content").textContent = copy.codeSnippet;
    document.getElementById("modal-github").href = item.githubUrl;

    document.getElementById("modal-tags").innerHTML = (item.stack || [])
      .map((s) => `<span class="chip">${escapeHtml(s)}</span>`)
      .join("");

    document.getElementById("modal-highlights").innerHTML = (copy.highlights || [])
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join("");

    const previewWrap = document.getElementById("modal-preview-wrap");
    const previewImg = document.getElementById("modal-preview-img");
    if (previewWrap && previewImg && item.image) {
      previewImg.src = item.image;
      previewImg.alt = `${copy.title} preview`;
      previewWrap.hidden = false;
    } else if (previewWrap) {
      previewWrap.hidden = true;
    }

    if (modalPlayBtn) {
      if (item.kind === "live" && resolveLiveUrl(item)) {
        modalPlayBtn.hidden = false;
        modalPlayBtn.querySelector("span").textContent = copy.actionLabel || t("games.playNow");
        modalPlayBtn.onclick = () => {
          closeNotesModal();
          openLiveModal(item);
        };
      } else {
        modalPlayBtn.hidden = true;
      }
    }
  }

  function openNotesModal(item) {
    activeModalItem = item;
    populateNotesModal(item);
    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
    projectModalClose.focus();
  }

  function closeNotesModal() {
    projectModal.hidden = true;
    activeModalItem = null;
    document.body.style.overflow = "";
  }

  if (projectModalClose) projectModalClose.addEventListener("click", closeNotesModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeNotesModal();
    });
  }

  // 1-Click Live Preview / Game Player Modal
  const gameModal = document.getElementById("game-modal");
  const gameModalClose = document.getElementById("game-modal-close");
  const gameIframe = document.getElementById("game-iframe");
  const gameRestartBtn = document.getElementById("game-restart-btn");
  const gameNewTabLink = document.getElementById("game-newtab-link");

  function updateLiveModalLabels(item) {
    const copy = item[currentLang] || item.en;
    document.getElementById("game-modal-title").textContent = copy.title;
    document.getElementById("game-modal-controls-hint").textContent = copy.controls || copy.tag;
  }

  function openLiveModal(item) {
    activeLiveItem = item;
    const url = resolveLiveUrl(item);
    updateLiveModalLabels(item);
    gameIframe.src = url;
    gameNewTabLink.href = url;
    gameModal.hidden = false;
    document.body.style.overflow = "hidden";
    gameModalClose.focus();
  }

  function closeLiveModal() {
    gameModal.hidden = true;
    gameIframe.src = "about:blank";
    activeLiveItem = null;
    document.body.style.overflow = "";
  }

  if (gameIframe) {
    gameIframe.addEventListener("load", () => {
      if (activeLiveItem && gameIframe.contentWindow) {
        try {
          gameIframe.contentWindow.focus();
        } catch {}
      }
    });
  }
  if (gameModalClose) gameModalClose.addEventListener("click", closeLiveModal);
  if (gameRestartBtn) {
    gameRestartBtn.addEventListener("click", () => {
      if (activeLiveItem && gameIframe) {
        const url = resolveLiveUrl(activeLiveItem);
        gameIframe.src = "about:blank";
        setTimeout(() => {
          if (activeLiveItem) gameIframe.src = url;
        }, 40);
      }
    });
  }
  if (gameModal) {
    gameModal.addEventListener("click", (e) => {
      if (e.target === gameModal) closeLiveModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (projectModal && !projectModal.hidden) closeNotesModal();
      if (gameModal && !gameModal.hidden) closeLiveModal();
    }
  });

  // Nav link shortcut: clicking "Games" opens the games folder automatically
  document.querySelectorAll('a[href="#games"]').forEach((a) => {
    a.addEventListener("click", () => {
      activeFolder = "games";
      renderFolders();
      renderFolderItems();
    });
  });

  // Language Switcher
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
    document.getElementById("about-location").textContent = cfg.location[currentLang];

    renderShowcase();
    renderFolders();
    renderFolderItems();
    if (activeModalItem) populateNotesModal(activeModalItem);
    if (activeLiveItem) updateLiveModalLabels(activeLiveItem);
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => applyLanguage(currentLang === "en" ? "es" : "en"));
  }

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ov-theme-v2", next);
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

  // Toast & Copy Email
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }

  function copyEmail() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cfg.links.email).then(() => showToast(t("toast.emailCopied")));
    } else {
      window.location.href = `mailto:${cfg.links.email}`;
    }
  }
  ["copy-email-hero", "copy-email-contact"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", copyEmail);
  });

  // Contact form
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
        const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
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
          throw new Error("Submit error");
        }
      } catch {
        const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
        const body = encodeURIComponent(
          `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
        );
        window.location.href = `mailto:${cfg.links.email}?subject=${subject}&body=${body}`;
      }
    });
  }

  // Init
  applyConfig();
  applyLanguage(currentLang);
})();
