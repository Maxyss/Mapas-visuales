// Lógica y Renderizador de Mapas Visuales e Interactivos para Aprender Inglés

class VisualMapApp {
  constructor() {
    this.currentCategory = "All";
    this.currentMapId = MINDMAPS_DATA[0].id;
    this.currentView = "mindmap"; // "mindmap" or "cards"
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
    this.renderMapChips();
    this.loadCurrentMap();
  }

  initElements() {
    this.svg = document.getElementById("mindmap-svg");
    this.canvasWrapper = document.getElementById("canvas-wrapper");
    this.cardsContainer = document.getElementById("cards-view");
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

    // Canvas Zoom & Pan (Mouse & Touch for iPad/iPhone)
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

    // Touch events for iPad / iPhone Safari
    this.canvasWrapper?.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        handleStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener("touchend", handleEnd);

    this.canvasWrapper?.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      this.zoomLevel = Math.min(Math.max(0.4, this.zoomLevel * zoomFactor), 2.5);
      this.updateCanvasTransform();
    });

    // Canvas zoom buttons
    document.getElementById("zoom-in-btn")?.addEventListener("click", () => {
      this.zoomLevel = Math.min(2.5, this.zoomLevel * 1.2);
      this.updateCanvasTransform();
    });

    document.getElementById("zoom-out-btn")?.addEventListener("click", () => {
      this.zoomLevel = Math.max(0.4, this.zoomLevel / 1.2);
      this.updateCanvasTransform();
    });

    document.getElementById("zoom-reset-btn")?.addEventListener("click", () => {
      this.zoomLevel = 1;
      this.panX = 0;
      this.panY = 0;
      this.updateCanvasTransform();
    });

    // Close drawer button
    document.getElementById("close-drawer-btn")?.addEventListener("click", () => {
      this.drawer.classList.add("collapsed");
    });

    // Practice / Quiz Modal launch
    document.getElementById("start-quiz-btn")?.addEventListener("click", () => {
      this.startQuiz();
    });

    document.getElementById("close-quiz-btn")?.addEventListener("click", () => {
      this.quizModal.classList.remove("active");
    });
  }

  renderMapChips() {
    const activeMap = MINDMAPS_DATA.find(m => m.id === this.currentMapId);

    // Render category filters
    const categories = ["All", ...new Set(MINDMAPS_DATA.map(m => m.category))];
    this.categoryTabs.innerHTML = categories.map(cat => `
      <button class="tab-btn ${this.currentCategory === cat ? 'active' : ''}" data-cat="${cat}">
        ${cat === 'All' ? '🌟 Todos' : cat}
      </button>
    `).join("");

    this.categoryTabs.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.currentCategory = e.currentTarget.dataset.cat;
        this.renderMapChips();
        const filteredMaps = this.getFilteredMaps();
        if (filteredMaps.length > 0) {
          this.currentMapId = filteredMaps[0].id;
          this.loadCurrentMap();
        }
      });
    });

    // Render Map selector chips
    const filteredMaps = this.getFilteredMaps();
    this.mapChipsBar.innerHTML = filteredMaps.map(m => `
      <button class="map-chip ${m.id === this.currentMapId ? 'active' : ''}" data-id="${m.id}">
        ${m.icon} ${m.titleEs}
      </button>
    `).join("");

    this.mapChipsBar.querySelectorAll(".map-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        this.currentMapId = e.currentTarget.dataset.id;
        this.renderMapChips();
        this.loadCurrentMap();
      });
    });
  }

  getFilteredMaps() {
    if (this.currentCategory === "All") return MINDMAPS_DATA;
    return MINDMAPS_DATA.filter(m => m.category === this.currentCategory);
  }

  loadCurrentMap() {
    const mapData = MINDMAPS_DATA.find(m => m.id === this.currentMapId);
    if (!mapData) return;

    if (this.currentView === "mindmap") {
      this.renderMindMapSVG(mapData.rootNode);
    } else {
      this.renderCardsGrid(mapData);
    }

    this.selectNode(mapData.rootNode);
  }

  switchViewMode() {
    if (this.currentView === "mindmap") {
      this.canvasWrapper.style.display = "block";
      this.cardsContainer.style.display = "none";
    } else {
      this.canvasWrapper.style.display = "none";
      this.cardsContainer.style.display = "grid";
    }
    this.loadCurrentMap();
  }

  // Visual SVG Tree Rendering Engine
  renderMindMapSVG(rootNode) {
    this.svg.innerHTML = "";
    const width = this.canvasWrapper.clientWidth || 900;
    const height = this.canvasWrapper.clientHeight || 600;

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

    const isMobile = window.innerWidth <= 768;

    const processChildren = (parent, depth = 1, startAngle = 0, angleRange = Math.PI * 2) => {
      if (!parent.children || parent.children.length === 0) return;

      const childCount = parent.children.length;
      const radius = isMobile ? (depth === 1 ? 160 : 130) : (depth === 1 ? 220 : 180);
      const angleStep = angleRange / childCount;

      parent.children.forEach((child, idx) => {
        const angle = startAngle + idx * angleStep + angleStep / 2;
        child.x = parent.x + radius * Math.cos(angle);
        child.y = parent.y + radius * Math.sin(angle);
        
        nodes.push(child);
        links.push({ source: parent, target: child, color: child.color || parent.color || "#6366f1" });

        const nextRange = angleStep * 0.8;
        const nextStart = angle - nextRange / 2;
        processChildren(child, depth + 1, nextStart, nextRange);
      });
    };

    processChildren(rootNode);

    // Draw SVG Connecting Lines
    links.forEach(link => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = `M ${link.source.x} ${link.source.y} Q ${(link.source.x + link.target.x)/2 + 20} ${(link.source.y + link.target.y)/2 - 20}, ${link.target.x} ${link.target.y}`;
      path.setAttribute("d", d);
      path.setAttribute("stroke", link.color);
      path.setAttribute("stroke-width", "3");
      path.setAttribute("stroke-opacity", "0.6");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-dasharray", "6,6");
      viewport.appendChild(path);
    });

    // Draw SVG Nodes
    nodes.forEach(node => {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("class", "node-group");
      group.setAttribute("transform", `translate(${node.x}, ${node.y})`);
      group.style.cursor = "pointer";

      const nodeColor = node.color || "#6366f1";
      const isRoot = node.type === "root";
      const circleRadius = isMobile ? (isRoot ? 38 : (node.children ? 30 : 24)) : (isRoot ? 45 : (node.children ? 35 : 28));

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", nodeColor);
      circle.setAttribute("fill-opacity", "0.25");
      circle.setAttribute("stroke", nodeColor);
      circle.setAttribute("stroke-width", "2.5");
      circle.setAttribute("filter", "drop-shadow(0px 0px 8px " + nodeColor + ")");

      const textEn = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEn.setAttribute("text-anchor", "middle");
      textEn.setAttribute("dy", "-2");
      textEn.setAttribute("fill", "#ffffff");
      textEn.setAttribute("font-weight", "600");
      textEn.setAttribute("font-size", isMobile ? (isRoot ? "11" : "9.5") : (isRoot ? "13" : "11"));
      textEn.setAttribute("font-family", "Outfit, sans-serif");
      textEn.textContent = node.label.length > (isMobile ? 14 : 18) ? node.label.substring(0, isMobile ? 12 : 16) + '...' : node.label;

      const textEs = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEs.setAttribute("text-anchor", "middle");
      textEs.setAttribute("dy", "12");
      textEs.setAttribute("fill", "rgba(255,255,255,0.75)");
      textEs.setAttribute("font-size", isMobile ? "8.5" : "9");
      textEs.setAttribute("font-family", "Inter, sans-serif");
      textEs.textContent = node.labelEs.length > (isMobile ? 14 : 18) ? node.labelEs.substring(0, isMobile ? 12 : 16) + '...' : node.labelEs;

      group.appendChild(circle);
      group.appendChild(textEn);
      group.appendChild(textEs);

      group.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectNode(node);
        document.querySelectorAll(".node-group circle").forEach(c => c.setAttribute("stroke-width", "2.5"));
        circle.setAttribute("stroke-width", "5");
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

    if (node.tip) {
      html += `
        <div class="tip-box">
          <span>⚡</span>
          <div><strong>Consejo Pro:</strong> ${node.tip}</div>
        </div>
      `;
    }

    drawerBody.innerHTML = html;
  }

  // Text-to-Speech Engine
  speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // Cards Grid View Renderer
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

  // Practice & Quiz Engine
  startQuiz() {
    const questions = [];
    MINDMAPS_DATA.forEach(map => {
      const collect = (node) => {
        if (node.exampleEn && node.labelEs) {
          questions.push({
            question: `¿Qué significa o cómo se traduce "${node.label}"?`,
            correct: node.labelEs,
            options: this.shuffleOptions([node.labelEs, "Presente perfecto continuo", "Irse de viaje pronto", "Estar ansioso"])
          });
        }
        if (node.children) node.children.forEach(collect);
      };
      collect(map.rootNode);
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
        <h3 style="font-family:var(--font-heading); font-size:1.1rem;">${q.question}</h3>
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
    if (selected === correct) {
      this.quizScore++;
    }
    this.currentQuizIndex++;
    setTimeout(() => this.renderQuizQuestion(), 300);
  }

  handleSearch(query) {
    if (!query) {
      this.loadCurrentMap();
      return;
    }

    const mapData = MINDMAPS_DATA.find(m => m.id === this.currentMapId);
    if (!mapData) return;

    if (this.currentView === "cards") {
      const cards = this.cardsContainer.querySelectorAll(".concept-card");
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "flex" : "none";
      });
    }
  }
}

// Global App Instance
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new VisualMapApp();
});
