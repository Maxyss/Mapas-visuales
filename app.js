// Lógica y Renderizador de Mapas e Infografías Afiche Ilustradas para Aprender Inglés

class VisualMapApp {
  constructor() {
    this.currentCategory = "All";
    this.currentView = "poster"; // Default "poster", "mindmap", or "cards"
    this.currentMapId = POSTER_INFOGRAPHICS[0].id;
    this.selectedNode = null;
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDraggingCanvas = false;
    this.dragStart = { x: 0, y: 0 };
    
    // Quiz State
    this.quizQuestions = [];
    this.currentQuizIndex = 0;
    this.quizScore = 0;

    this.initElements();
    this.initEvents();
    this.renderCategoryTabs();
    this.loadCurrentView();

    window.addEventListener("resize", () => {
      if (this.currentView === "mindmap") {
        const mapData = MINDMAPS_DATA.find(m => m.id === this.currentMapId);
        if (mapData) this.renderMindMapSVG(mapData.rootNode);
      }
    });
  }

  initElements() {
    this.svg = document.getElementById("mindmap-svg");
    this.canvasWrapper = document.getElementById("canvas-wrapper");
    this.cardsContainer = document.getElementById("cards-view");
    this.postersContainer = document.getElementById("posters-view");
    this.drawer = document.getElementById("node-drawer");
    this.mapChipsBar = document.getElementById("map-chips-bar");
    this.categoryTabs = document.getElementById("category-tabs");
    this.searchInput = document.getElementById("search-input");
    this.quizModal = document.getElementById("quiz-modal");
  }

  initEvents() {
    // Theme toggle
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", nextTheme);
    });

    // View toggles
    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
        const target = e.currentTarget;
        target.classList.add("active");
        this.currentView = target.dataset.view;
        this.switchViewMode();
      });
    });

    // Search filter
    this.searchInput?.addEventListener("input", (e) => {
      this.handleSearch(e.target.value.trim().toLowerCase());
    });

    // Canvas Zoom & Pan
    const handleStart = (clientX, clientY, target) => {
      if (target.closest(".node-group")) return;
      this.isDraggingCanvas = true;
      this.dragStart = { x: clientX - this.panX, y: clientY - this.panY };
    };

    const handleMove = (clientX, clientY) => {
      if (!this.isDraggingCanvas) return;
      this.panX = clientX - this.dragStart.x;
      this.panY = clientY - this.dragStart.y;
      this.updateCanvasTransform();
    };

    const handleEnd = () => {
      this.isDraggingCanvas = false;
    };

    this.canvasWrapper?.addEventListener("mousedown", (e) => handleStart(e.clientX, e.clientY, e.target));
    window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", handleEnd);

    this.canvasWrapper?.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) handleStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener("touchend", handleEnd);

    this.canvasWrapper?.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      this.zoomLevel = Math.min(Math.max(0.4, this.zoomLevel * zoomFactor), 2.5);
      this.updateCanvasTransform();
    });

    document.getElementById("zoom-in-btn")?.addEventListener("click", () => {
      this.zoomLevel = Math.min(2.5, this.zoomLevel * 1.25);
      this.updateCanvasTransform();
    });

    document.getElementById("zoom-out-btn")?.addEventListener("click", () => {
      this.zoomLevel = Math.max(0.4, this.zoomLevel / 1.25);
      this.updateCanvasTransform();
    });

    document.getElementById("zoom-reset-btn")?.addEventListener("click", () => {
      this.zoomLevel = 1;
      this.panX = 0;
      this.panY = 0;
      this.updateCanvasTransform();
    });

    document.getElementById("close-drawer-btn")?.addEventListener("click", () => {
      this.drawer.classList.add("collapsed");
    });

    document.getElementById("start-quiz-btn")?.addEventListener("click", () => {
      this.startQuiz();
    });

    document.getElementById("close-quiz-btn")?.addEventListener("click", () => {
      this.quizModal.classList.remove("active");
    });
  }

  renderCategoryTabs() {
    const allData = [...POSTER_INFOGRAPHICS, ...MINDMAPS_DATA];
    const categories = ["All", ...new Set(allData.map(m => m.category))];
    
    this.categoryTabs.innerHTML = categories.map(cat => `
      <button class="tab-btn ${this.currentCategory === cat ? 'active' : ''}" data-cat="${cat}">
        ${cat === 'All' ? '🌟 Todos' : cat}
      </button>
    `).join("");

    this.categoryTabs.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.currentCategory = e.currentTarget.dataset.cat;
        this.renderCategoryTabs();
        this.loadCurrentView();
      });
    });
  }

  switchViewMode() {
    this.canvasWrapper.style.display = this.currentView === "mindmap" ? "block" : "none";
    this.cardsContainer.style.display = this.currentView === "cards" ? "grid" : "none";
    this.postersContainer.style.display = this.currentView === "poster" ? "flex" : "none";
    this.loadCurrentView();
  }

  loadCurrentView() {
    if (this.currentView === "poster") {
      this.renderPosterInfographics();
    } else if (this.currentView === "mindmap") {
      const mapData = MINDMAPS_DATA.find(m => m.id === this.currentMapId) || MINDMAPS_DATA[0];
      this.renderMindMapSVG(mapData.rootNode);
    } else {
      const mapData = MINDMAPS_DATA[0];
      this.renderCardsGrid(mapData);
    }
  }

  // Render Infographic Poster Board (Exact Visual Poster Style like Reference Image!)
  renderPosterInfographics() {
    let items = POSTER_INFOGRAPHICS;
    if (this.currentCategory !== "All") {
      items = items.filter(p => p.category === this.currentCategory);
    }

    if (items.length === 0) items = POSTER_INFOGRAPHICS;

    this.postersContainer.innerHTML = items.map(poster => `
      <article class="poster-board" style="--poster-border-color: ${poster.borderColor}">
        
        <!-- Poster Title Header -->
        <header class="poster-header">
          <h1 class="poster-main-title">
            ${poster.icon} ${poster.title}
          </h1>
          <p style="color:var(--text-muted); font-size:0.9rem;">${poster.titleEs}</p>
        </header>

        <!-- Intro Speech Bubble & Character -->
        <section class="character-box">
          <span class="character-avatar">${poster.intro.avatar}</span>
          <div class="speech-bubble">
            <strong style="color:var(--accent-cyan); text-transform:uppercase; font-size:0.8rem; display:block; margin-bottom:2px;">
              ${poster.intro.title}
            </strong>
            <p style="font-weight:600; color:var(--text-main); margin-bottom:2px;">
              "${poster.intro.textEn}"
            </p>
            <p style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">
              ${poster.intro.textEs}
            </p>
          </div>
        </section>

        <!-- Main Poster Grid: Status Cards & Why Important -->
        <div class="poster-grid-2">
          
          <!-- Weather Condition Status Grid -->
          <div>
            <div class="poster-banner-title" style="--banner-bg: #ff6b6b">
              ❓ WHAT IS THE WEATHER LIKE?
            </div>
            <div class="poster-grid-cards">
              ${poster.weatherTypes.map(w => `
                <div class="poster-card" onclick="app.speakText('${w.audio.replace(/'/g, "\\'")}')" title="Clic para escuchar pronunciación">
                  <span class="poster-card-icon">${w.icon}</span>
                  <span class="poster-card-title">${w.titleEn}</span>
                  <span class="poster-card-sub">${w.titleEs}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Why Important List -->
          <div>
            <div class="poster-banner-title" style="--banner-bg: #4ecdc4">
              💡 WHY IS WEATHER IMPORTANT?
            </div>
            <div class="poster-info-list">
              ${poster.whyImportant.map(info => `
                <div class="poster-info-item" onclick="app.speakText('${info.textEn.replace(/'/g, "\\'")}')">
                  <span class="poster-info-icon">${info.icon}</span>
                  <div>
                    <div style="font-weight:600; color:var(--text-main);">${info.textEn}</div>
                    <div style="font-size:0.78rem; color:var(--text-muted);">${info.textEs}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

        </div>

        <!-- Section: Vocabulary Words -->
        <div>
          <div class="poster-banner-title" style="--banner-bg: #10b981">
            📖 VOCABULARY WORDS
          </div>
          <div class="poster-grid-cards">
            ${poster.vocabWords.map(v => `
              <div class="poster-card" onclick="app.speakText('${v.word}')">
                <span class="poster-card-icon">${v.icon}</span>
                <span class="poster-card-title" style="text-transform:capitalize;">${v.word}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Section: What Can I Do? & Dos/Don'ts -->
        <div class="poster-grid-2">
          
          <div>
            <div class="poster-banner-title" style="--banner-bg: #8b5cf6">
              🤷 WHAT CAN I DO?
            </div>
            <div class="poster-info-list">
              ${poster.whatCanIDo.map(act => `
                <div class="poster-info-item" onclick="app.speakText('${act.textEn.replace(/'/g, "\\'")}')">
                  <span class="poster-info-icon">${act.icon}</span>
                  <div>
                    <div style="font-weight:600; color:var(--text-main);">${act.textEn}</div>
                    <div style="font-size:0.78rem; color:var(--text-muted);">${act.textEs}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div>
            <div class="poster-banner-title" style="--banner-bg: #f59e0b">
              ⭐ REMEMBER & TIPS
            </div>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); padding:0.75rem; border-radius:var(--radius-md);">
                <strong style="color:var(--accent-success); display:block; margin-bottom:0.25rem;">✅ IT'S GOOD TO...</strong>
                <ul style="padding-left:1.2rem; font-size:0.85rem; color:var(--text-main);">
                  ${poster.dosAndDonts.good.map(g => `<li>${g}</li>`).join("")}
                </ul>
              </div>
              <div style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); padding:0.75rem; border-radius:var(--radius-md);">
                <strong style="color:var(--accent-danger); display:block; margin-bottom:0.25rem;">❌ IT'S NOT GOOD TO...</strong>
                <ul style="padding-left:1.2rem; font-size:0.85rem; color:var(--text-main);">
                  ${poster.dosAndDonts.bad.map(b => `<li>${b}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </article>
    `).join("");
  }

  // Visual SVG Tree Rendering Engine
  renderMindMapSVG(rootNode) {
    this.svg.innerHTML = "";
    const width = this.canvasWrapper.clientWidth || window.innerWidth || 390;
    const height = this.canvasWrapper.clientHeight || 500;

    const viewport = document.createElementNS("http://www.w3.org/2000/svg", "g");
    viewport.setAttribute("id", "svg-viewport");
    this.svg.appendChild(viewport);

    const nodes = [];
    const links = [];

    const centerX = width / 2;
    const centerY = height / 2;

    rootNode.x = centerX;
    rootNode.y = centerY;
    nodes.push(rootNode);

    const isMobile = width <= 600;
    
    const level1Radius = isMobile ? Math.min(width * 0.32, 115) : 210;
    const level2Radius = isMobile ? Math.min(width * 0.52, 175) : 170;

    const processChildren = (parent, depth = 1, startAngle = 0, angleRange = Math.PI * 2) => {
      if (!parent.children || parent.children.length === 0) return;

      const childCount = parent.children.length;
      const radius = depth === 1 ? level1Radius : level2Radius;
      const angleStep = angleRange / childCount;

      parent.children.forEach((child, idx) => {
        const angle = startAngle + idx * angleStep + angleStep / 2;
        child.x = parent.x + radius * Math.cos(angle);
        child.y = parent.y + radius * Math.sin(angle);
        
        nodes.push(child);
        links.push({ source: parent, target: child, color: child.color || parent.color || "#6366f1" });

        const nextRange = angleStep * 0.85;
        const nextStart = angle - nextRange / 2;
        processChildren(child, depth + 1, nextStart, nextRange);
      });
    };

    processChildren(rootNode);

    links.forEach(link => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = `M ${link.source.x} ${link.source.y} Q ${(link.source.x + link.target.x)/2} ${(link.source.y + link.target.y)/2}, ${link.target.x} ${link.target.y}`;
      path.setAttribute("d", d);
      path.setAttribute("stroke", link.color);
      path.setAttribute("stroke-width", isMobile ? "2" : "3");
      path.setAttribute("stroke-opacity", "0.65");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-dasharray", "5,5");
      viewport.appendChild(path);
    });

    nodes.forEach(node => {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("class", "node-group");
      group.setAttribute("transform", `translate(${node.x}, ${node.y})`);
      group.style.cursor = "pointer";

      const nodeColor = node.color || "#6366f1";
      const isRoot = node.type === "root";
      const circleRadius = isMobile ? (isRoot ? 32 : (node.children ? 26 : 22)) : (isRoot ? 45 : (node.children ? 35 : 28));

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", nodeColor);
      circle.setAttribute("fill-opacity", "0.25");
      circle.setAttribute("stroke", nodeColor);
      circle.setAttribute("stroke-width", isMobile ? "2" : "2.5");
      circle.setAttribute("filter", "drop-shadow(0px 0px 6px " + nodeColor + ")");

      const textEn = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEn.setAttribute("text-anchor", "middle");
      textEn.setAttribute("dy", "-1");
      textEn.setAttribute("fill", "#ffffff");
      textEn.setAttribute("font-weight", "600");
      textEn.setAttribute("font-size", isMobile ? (isRoot ? "10" : "8.5") : (isRoot ? "13" : "11"));
      textEn.setAttribute("font-family", "Outfit, sans-serif");
      
      const maxLen = isMobile ? (isRoot ? 12 : 10) : 16;
      textEn.textContent = node.label.length > maxLen ? node.label.substring(0, maxLen - 1) + '..' : node.label;

      const textEs = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEs.setAttribute("text-anchor", "middle");
      textEs.setAttribute("dy", isMobile ? "10" : "12");
      textEs.setAttribute("fill", "rgba(255,255,255,0.75)");
      textEs.setAttribute("font-size", isMobile ? "7.5" : "9");
      textEs.setAttribute("font-family", "Inter, sans-serif");
      textEs.textContent = node.labelEs.length > maxLen ? node.labelEs.substring(0, maxLen - 1) + '..' : node.labelEs;

      group.appendChild(circle);
      group.appendChild(textEn);
      group.appendChild(textEs);

      group.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectNode(node);
        document.querySelectorAll(".node-group circle").forEach(c => c.setAttribute("stroke-width", isMobile ? "2" : "2.5"));
        circle.setAttribute("stroke-width", isMobile ? "4" : "5");
      });

      viewport.appendChild(group);
    });

    this.updateCanvasTransform();
  }

  updateCanvasTransform() {
    const viewport = document.getElementById("svg-viewport");
    if (viewport) {
      viewport.setAttribute("transform", `translate(${this.panX}, ${this.panY}) scale(${this.zoomLevel})`);
    }
  }

  selectNode(node) {
    this.selectedNode = node;
    this.drawer.classList.remove("collapsed");

    const drawerBody = document.getElementById("drawer-content");
    const nodeBadge = document.getElementById("drawer-type-badge");
    nodeBadge.textContent = node.type === "root" ? "Tema Principal" : (node.formula ? "Estructura" : "Concepto");

    let html = `
      <div>
        <h2 class="node-heading">${node.label}</h2>
        <p class="node-subheading">${node.labelEs}</p>
      </div>
    `;

    if (node.formula) {
      html += `
        <div class="info-card">
          <div class="info-card-label">📐 Fórmula / Estructura</div>
          <div class="formula-box">${node.formula}</div>
        </div>
      `;
    }

    if (node.use || node.meaningEn || node.details) {
      html += `
        <div class="info-card">
          <div class="info-card-label">💡 Uso / Significado</div>
          <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main);">
            ${node.use || node.meaningEn || node.details}
          </p>
        </div>
      `;
    }

    if (node.exampleEn) {
      html += `
        <div class="example-box">
          <div class="example-en">
            <span>"${node.exampleEn}"</span>
            <button class="audio-btn" onclick="app.speakText('${node.exampleEn.replace(/'/g, "\\'")}')">
              🔊 Escuchar
            </button>
          </div>
          <div class="example-es">${node.exampleEs}</div>
        </div>
      `;
    }

    drawerBody.innerHTML = html;
  }

  speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  }

  renderCardsGrid(mapData) {
    const flattenNodes = (node, acc = []) => {
      if (node.exampleEn || node.formula) acc.push(node);
      if (node.children) node.children.forEach(c => flattenNodes(c, acc));
      return acc;
    };

    const cardsList = flattenNodes(mapData.rootNode);

    this.cardsContainer.innerHTML = cardsList.map(item => `
      <div class="concept-card" style="--card-color: ${item.color || mapData.color}">
        <div class="card-header">
          <div>
            <div class="card-title">${item.label}</div>
            <div class="card-subtitle">${item.labelEs}</div>
          </div>
          <button class="audio-btn" onclick="app.speakText('${(item.exampleEn || item.label).replace(/'/g, "\\'")}')">
            🔊
          </button>
        </div>
        ${item.formula ? `<div class="formula-box">${item.formula}</div>` : ''}
        ${item.meaningEn || item.use ? `<p style="font-size:0.82rem; color:var(--text-muted);">${item.meaningEn || item.use}</p>` : ''}
        ${item.exampleEn ? `
          <div class="example-box">
            <div class="example-en" style="font-size:0.88rem;">"${item.exampleEn}"</div>
            <div class="example-es">${item.exampleEs}</div>
          </div>
        ` : ''}
      </div>
    `).join("");
  }

  startQuiz() {
    const questions = [];
    POSTER_INFOGRAPHICS.forEach(p => {
      p.weatherTypes.forEach(w => {
        questions.push({
          question: `¿Qué significa "${w.titleEn}"?`,
          correct: w.titleEs,
          options: this.shuffleOptions([w.titleEs, "Hace calor excesivo", "Llover fuertemente", "Mucho viento"])
        });
      });
    });

    this.quizQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
    this.currentQuizIndex = 0;
    this.quizScore = 0;

    this.quizModal.classList.add("active");
    this.renderQuizQuestion();
  }

  shuffleOptions(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }

  renderQuizQuestion() {
    const qBox = document.getElementById("quiz-content");
    if (this.currentQuizIndex >= this.quizQuestions.length) {
      qBox.innerHTML = `
        <div class="quiz-question-box">
          <h2 style="font-family:var(--font-heading); margin-bottom:0.5rem;">🎉 ¡Test Completado!</h2>
          <p style="font-size:1.1rem; color:var(--accent-success);">Puntuación: ${this.quizScore} / ${this.quizQuestions.length}</p>
          <button class="btn-primary" style="margin-top:1.25rem;" onclick="app.startQuiz()">Repetir Práctica</button>
        </div>
      `;
      return;
    }

    const q = this.quizQuestions[this.currentQuizIndex];
    qBox.innerHTML = `
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">
        Pregunta ${this.currentQuizIndex + 1} de ${this.quizQuestions.length}
      </div>
      <div class="quiz-question-box">
        <h3 style="font-family:var(--font-heading); font-size:1.05rem;">${q.question}</h3>
      </div>
      <div class="quiz-options">
        ${q.options.map(opt => `
          <button class="quiz-option-btn" onclick="app.checkAnswer('${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
            ${opt}
          </button>
        `).join("")}
      </div>
    `;
  }

  checkAnswer(selected, correct) {
    if (selected === correct) this.quizScore++;
    this.currentQuizIndex++;
    setTimeout(() => this.renderQuizQuestion(), 300);
  }

  handleSearch(query) {
    if (!query) {
      this.loadCurrentView();
      return;
    }

    const cards = document.querySelectorAll(".poster-card, .concept-card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "flex" : "none";
    });
  }
}

let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new VisualMapApp();
});
