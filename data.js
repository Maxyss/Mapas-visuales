// Base de datos Completa de Afiches e Infografías (Niveles A1 hasta C1 Avanzado)

const POSTER_INFOGRAPHICS = [
  // ==========================================
  // NIVEL A1-A2: BÁSICO / ELEMENTAL
  // ==========================================
  {
    id: "poster-weather",
    title: "THE WEATHER & SEASONS",
    titleEs: "El Tiempo, Clima y Estaciones",
    category: "Vocabulary",
    level: "A1-A2",
    icon: "☀️",
    borderColor: "#4ecdc4",
    intro: {
      avatar: "👦",
      title: "WHAT IS THE WEATHER?",
      textEn: "The weather is what the atmosphere is like in a place at a given time. It can change many times during the day!",
      textEs: "El clima es como está la atmósfera en un lugar en un momento dado. ¡Puede cambiar muchas veces en el día!"
    },
    weatherTypes: [
      { icon: "☀️", titleEn: "It's sunny", titleEs: "Está soleado", audio: "It is sunny" },
      { icon: "⛅", titleEn: "It's partly cloudy", titleEs: "Parcialmente nublado", audio: "It is partly cloudy" },
      { icon: "☁️", titleEn: "It's cloudy", titleEs: "Está nublado", audio: "It is cloudy" },
      { icon: "🌧️", titleEn: "It's rainy", titleEs: "Está lluvioso", audio: "It is rainy" },
      { icon: "🌩️", titleEn: "It's stormy", titleEs: "Hay tormenta", audio: "It is stormy" },
      { icon: "❄️", titleEn: "It's snowy", titleEs: "Está nevando", audio: "It is snowy" },
      { icon: "🌫️", titleEn: "It's foggy", titleEs: "Hay niebla", audio: "It is foggy" },
      { icon: "💨", titleEn: "It's windy", titleEs: "Hace viento", audio: "It is windy" },
      { icon: "🥶", titleEn: "It's cold", titleEs: "Hace frío", audio: "It is cold" },
      { icon: "🥵", titleEn: "It's hot", titleEs: "Hace calor", audio: "It is hot" },
      { icon: "🌡️", titleEn: "It's warm", titleEs: "Está templado", audio: "It is warm" },
      { icon: "🌈", titleEn: "It's a rainbow", titleEs: "Hay un arcoíris", audio: "It is a rainbow" }
    ],
    whyImportant: [
      { icon: "🧥", textEn: "It helps us choose the right clothes.", textEs: "Nos ayuda a elegir la ropa adecuada." },
      { icon: "☂️", textEn: "It helps us plan our activities.", textEs: "Nos ayuda a planificar nuestras actividades." },
      { icon: "🌱", textEn: "It helps farmers look after their crops.", textEs: "Ayuda a los agricultores a cuidar sus cultivos." },
      { icon: "✈️", textEn: "It is important for transport and travel.", textEs: "Es importante para el transporte y los viajes." },
      { icon: "⚠️", textEn: "It helps us stay prepared and safe.", textEs: "Nos ayuda a mantenernos preparados y seguros." }
    ],
    vocabWords: [
      { icon: "☀️", word: "sun" }, { icon: "☁️", word: "cloud" }, { icon: "🌧️", word: "rain" },
      { icon: "❄️", word: "snow" }, { icon: "🌩️", word: "storm" }, { icon: "💨", word: "wind" },
      { icon: "🌫️", word: "fog" }, { icon: "🌈", word: "rainbow" }, { icon: "🌡️", word: "thermometer" },
      { icon: "💧", word: "humid" }, { icon: "🌵", word: "dry" }, { icon: "📅", word: "forecast" }
    ],
    whatCanIDo: [
      { icon: "☂️", textEn: "Take an umbrella when it's rainy.", textEs: "Lleva un paraguas cuando esté lluvioso." },
      { icon: "🧥", textEn: "Wear warm clothes when it's cold.", textEs: "Usa ropa abrigada cuando haga frío." },
      { icon: "🥤", textEn: "Drink water and protect yourself from the sun.", textEs: "Bebe agua y protégete del sol." },
      { icon: "⚽", textEn: "Enjoy outdoor activities when the weather is nice.", textEs: "Disfruta actividades al aire libre con buen clima." }
    ],
    dosAndDonts: {
      good: ["Check the weather forecast.", "Dress for the weather.", "Stay hydrated.", "Look after nature."],
      bad: ["Ignore the weather forecast.", "Go out without protection.", "Waste water.", "Leave litter in nature."]
    }
  },
  {
    id: "poster-food",
    title: "FOOD, DRINKS & RESTAURANT",
    titleEs: "Comida, Bebidas y Restaurantes",
    category: "Vocabulary",
    level: "A1-A2",
    icon: "🍕",
    borderColor: "#ff9ff3",
    intro: {
      avatar: "🍳",
      title: "AT THE RESTAURANT",
      textEn: "Expressing food preferences, ordering dishes, and asking for the bill politely in English!",
      textEs: "¡Expresar preferencias alimenticias, pedir platos y solicitar la cuenta educadamente!"
    },
    weatherTypes: [
      { icon: "🥞", titleEn: "Breakfast", titleEs: "Desayuno", audio: "Breakfast" },
      { icon: "🥗", titleEn: "Lunch", titleEs: "Almuerzo", audio: "Lunch" },
      { icon: "🍝", titleEn: "Dinner", titleEs: "Cena", audio: "Dinner" },
      { icon: "🍰", titleEn: "Dessert", titleEs: "Postre", audio: "Dessert" },
      { icon: "🍷", titleEn: "Beverages", titleEs: "Bebidas", audio: "Beverages" },
      { icon: "🌶️", titleEn: "Spicy", titleEs: "Picante", audio: "Spicy" },
      { icon: "🍬", titleEn: "Sweet", titleEs: "Dulce", audio: "Sweet" },
      { icon: "🧂", titleEn: "Salty", titleEs: "Salado", audio: "Salty" }
    ],
    whyImportant: [
      { icon: "🍽️", textEn: "Could I please have the menu?", textEs: "¿Podría darme el menú, por favor?" },
      { icon: "🥩", textEn: "I would like to order the steak.", textEs: "Me gustaría pedir el filete." },
      { icon: "💳", textEn: "Could we get the bill/check, please?", textEs: "¿Nos trae la cuenta, por favor?" }
    ],
    vocabWords: [
      { icon: "🥩", word: "meat" }, { icon: "🥦", word: "vegetables" }, { icon: "🍎", word: "fruit" },
      { icon: "🥛", word: "milk" }, { icon: "☕", word: "coffee" }, { icon: "🍰", word: "cake" }
    ],
    whatCanIDo: [
      { icon: "👨‍🍳", textEn: "Always use 'Could I have...' for polite ordering.", textEs: "Usa siempre 'Could I have...' para pedir educadamente." }
    ],
    dosAndDonts: {
      good: ["Say 'Please' and 'Thank you'.", "Tip 15-20% in the US.", "Ask for allergies."],
      bad: ["Say 'I want this' abruptly.", "Forget to check the bill.", "Shout to the waiter."]
    }
  },

  // ==========================================
  // NIVEL B1-B2: INTERMEDIO / INTERMEDIO ALTO
  // ==========================================
  {
    id: "poster-business-b2",
    title: "JOB INTERVIEWS & CAREER (B2)",
    titleEs: "Entrevistas de Trabajo y Negocios (B2)",
    category: "Professional",
    level: "B1-B2",
    icon: "💼",
    borderColor: "#06b6d4",
    intro: {
      avatar: "👔",
      title: "ACE YOUR JOB INTERVIEW",
      textEn: "Master upper-intermediate professional English vocabulary to showcase your skills and experience confidently!",
      textEs: "¡Domina el vocabulario profesional de nivel intermedio alto para destacar tus habilidades con confianza!"
    },
    weatherTypes: [
      { icon: "🎯", titleEn: "Key Strengths", titleEs: "Fortalezas clave", audio: "Key Strengths" },
      { icon: "📈", titleEn: "Track record", titleEs: "Historial de logros", audio: "Track record" },
      { icon: "🤝", titleEn: "Team player", titleEs: "Saber trabajar en equipo", audio: "Team player" },
      { icon: "💡", titleEn: "Problem solver", titleEs: "Resolutivo/a de problemas", audio: "Problem solver" },
      { icon: "⌛", titleEn: "Deadline-driven", titleEs: "Orientado a plazos", audio: "Deadline-driven" },
      { icon: "📊", titleEn: "Data-driven", titleEs: "Basado en datos", audio: "Data-driven" }
    ],
    whyImportant: [
      { icon: "💬", textEn: "I excel at managing high-priority projects.", textEs: "Destaco en la gestión de proyectos de alta prioridad." },
      { icon: "🚀", textEn: "I boosted customer satisfaction by 30%.", textEs: "Aumenté la satisfacción del cliente en un 30%." },
      { icon: "🧠", textEn: "My background aligns with this strategic role.", textEs: "Mi trayectoria se alinea con este rol estratégico." }
    ],
    vocabWords: [
      { icon: "📄", word: "Resume" }, { icon: "📈", word: "Growth" }, { icon: "💼", word: "Role" },
      { icon: "🤝", word: "Leadership" }, { icon: "🌐", word: "Networking" }, { icon: "📊", word: "ROI" }
    ],
    whatCanIDo: [
      { icon: "⭐", textEn: "Use the STAR method (Situation, Task, Action, Result) in answers.", textEs: "Usa el método STAR (Situación, Tarea, Acción, Resultado)." }
    ],
    dosAndDonts: {
      good: ["Research the company beforehand.", "Ask thoughtful questions at the end.", "Follow up with a thank-you email."],
      bad: ["Speak negatively about past employers.", "Be vague about your achievements.", "Arrive unprepared."]
    }
  },

  // ==========================================
  // NIVEL C1: AVANZADO / DOMINIO FLUIDO
  // ==========================================
  {
    id: "poster-c1-connectors",
    title: "C1 ADVANCED FORMAL CONNECTORS",
    titleEs: "Conectores Académicos y Formales (C1)",
    category: "Grammar",
    level: "C1 Advanced",
    icon: "🧠",
    color: "#8b5cf6",
    borderColor: "#8b5cf6",
    intro: {
      avatar: "🎓",
      title: "ELEVATE YOUR FLUENCY TO C1 LEVEL",
      textEn: "Transition from basic linking words (and, but, so) to sophisticated academic discourse markers used by native professionals.",
      textEs: "Transiciona de conectores básicos a marcadores de discurso académicos sofisticados usados por profesionales nativos."
    },
    weatherTypes: [
      { icon: "⚖️", titleEn: "Notwithstanding", titleEs: "A pesar de / No obstante", audio: "Notwithstanding the challenges, we succeeded" },
      { icon: "➕", titleEn: "Furthermore", titleEs: "Además / Es más", audio: "Furthermore, the evidence is undeniable" },
      { icon: "💡", titleEn: "Albeit", titleEs: "Aunque / Si bien", audio: "An effective solution, albeit expensive" },
      { icon: "🔄", titleEn: "On the flip side", titleEs: "Por otra parte / En contraposición", audio: "On the flip side, costs may increase" },
      { icon: "🔍", titleEn: "In hindsight", titleEs: "En retrospectiva", audio: "In hindsight, it was the right decision" },
      { icon: "📌", titleEn: "Concurrently", titleEs: "Simultáneamente", audio: "Concurrently running multiple processes" }
    ],
    whyImportant: [
      { icon: "✍️", textEn: "Albeit costly, the investment yielded outstanding ROI.", textEs: "Aunque costosa, la inversión rindió un ROI sobresaliente." },
      { icon: "🎓", textEn: "Notwithstanding the initial delays, the project was delivered.", textEs: "A pesar de los retrasos iniciales, el proyecto fue entregado." },
      { icon: "📢", textEn: "Furthermore, recent studies substantiate this hypothesis.", textEs: "Además, estudios recientes fundamentan esta hipótesis." }
    ],
    vocabWords: [
      { icon: "📌", word: "Albeit" }, { icon: "⚖️", word: "Notwithstanding" }, { icon: "➕", word: "Furthermore" },
      { icon: "🔍", word: "Hindsight" }, { icon: "🔄", word: "Conversely" }, { icon: "🌐", word: "Henceforth" }
    ],
    whatCanIDo: [
      { icon: "💎", textEn: "Incorporate advanced transitional phrases in essays and reports.", textEs: "Incorpora frases de transición avanzadas en ensayos e informes." }
    ],
    dosAndDonts: {
      good: ["Use 'Furthermore' instead of 'And also'.", "Use 'In hindsight' for post-project reviews.", "Vary sentence structures."],
      bad: ["Overuse simple connectors like 'but' or 'so'.", "Mix informal slang with formal C1 connectors.", "Forget correct punctuation."]
    }
  },
  {
    id: "poster-c1-idioms",
    title: "C1 ADVANCED IDIOMS & PROVERBS",
    titleEs: "Modismos Avanzados y Proverbios (C1)",
    category: "Idioms",
    level: "C1 Advanced",
    icon: "🔥",
    borderColor: "#ec4899",
    intro: {
      avatar: "🦁",
      title: "NATIVE C1 IDIOMATIC MASTERY",
      textEn: "Speak with natural eloquence using high-level idioms, metaphors, and native proverbs!",
      textEs: "¡Habla con elocuencia natural usando modismos de alto nivel, metáforas y proverbios nativos!"
    },
    weatherTypes: [
      { icon: "🎯", titleEn: "Bite the bullet", titleEs: "Afrontar una situación difícil con valor", audio: "Bite the bullet" },
      { icon: "🔨", titleEn: "Hit the nail on the head", titleEs: "Dar en el clavo con precisión", audio: "Hit the nail on the head" },
      { icon: "🕯️", titleEn: "Burn the midnight oil", titleEs: "Trabajar / Estudiar hasta altas horas", audio: "Burn the midnight oil" },
      { icon: "😈", titleEn: "Devil's advocate", titleEs: "Jugar al abogado del diablo (Discutir lo opuesto)", audio: "Play devil's advocate" },
      { icon: "🎁", titleEn: "Blessing in disguise", titleEs: "No hay mal que por bien no venga", audio: "A blessing in disguise" },
      { icon: "🧊", titleEn: "Break the ice", titleEs: "Romper el hielo", audio: "Break the ice" }
    ],
    whyImportant: [
      { icon: "💡", textEn: "You hit the nail on the head with that strategic analysis.", textEs: "Diste en el clavo con ese análisis estratégico." },
      { icon: "☕", textEn: "We had to burn the midnight oil to meet the product release date.", textEs: "Tuvimos que trabajar hasta muy tarde para cumplir con la entrega del producto." }
    ],
    vocabWords: [
      { icon: "🎯", word: "Mastery" }, { icon: "🔥", word: "Eloquence" }, { icon: "💡", word: "Insight" },
      { icon: "⚖️", word: "Nuance" }, { icon: "🎭", word: "Metaphor" }, { icon: "💎", word: "Prestige" }
    ],
    whatCanIDo: [
      { icon: "🗣️", textEn: "Practice C1 idioms in professional storytelling and debates.", textEs: "Practica modismos C1 en relatos profesionales y debates." }
    ],
    dosAndDonts: {
      good: ["Understand the exact pragmatic context.", "Use native intonation.", "Enjoy figurative language."],
      bad: ["Translate idioms literally word for word.", "Force idioms where they don't fit natural conversation.", "Ignore register appropriateness."]
    }
  }
];

// Base de datos de Mapas Mentales (Niveles A1 a C1)
const MINDMAPS_DATA = [
  // ==========================================
  // C1 ADVANCED MIND MAPS
  // ==========================================
  {
    id: "c1-inversion-map",
    title: "C1 Inversion & Emphasis Map",
    titleEs: "Inversión y Énfasis Gramatical (C1)",
    category: "Grammar",
    level: "C1 Advanced",
    icon: "⚡",
    color: "#8b5cf6",
    description: "Estructuras avanzadas de inversión sujeto-auxiliar para dar énfasis dramático o académico.",
    rootNode: {
      id: "c1-inv-root",
      label: "C1 Inversion Structures ⚡",
      labelEs: "Inversión Gramatical C1",
      details: "Al colocar expresiones negativas o restrictivas al inicio de la oración, inviertes el orden del auxiliar y el sujeto (como en las preguntas).",
      type: "root",
      children: [
        {
          id: "inv-hardly",
          label: "Hardly / Scarcely ⌛",
          labelEs: "Apenas... cuando",
          formula: "Hardly + HAD + Subject + Past Participle + WHEN...",
          use: "Expresa que una acción ocurrió inmediatamente después de otra.",
          exampleEn: "Hardly had I arrived home when the storm began.",
          exampleEs: "Apenas había llegado a casa cuando empezó la tormenta.",
          tip: "Estructura estrella en exámenes de certificación C1 Advanced (CAE/CPE).",
          color: "#a78bfa"
        },
        {
          id: "inv-seldom",
          label: "Seldom / Rarely 🔍",
          labelEs: "Rara vez / En raras ocasiones",
          formula: "Seldom + DO/DOES/DID + Subject + Verb...",
          use: "Enfatiza la infrecuencia extrema de una acción.",
          exampleEn: "Seldom do we encounter such remarkable talent.",
          exampleEs: "Rara vez nos encontramos con un talento tan notable.",
          color: "#c4b5fd"
        },
        {
          id: "inv-little",
          label: "Little did [subject] know 🤫",
          labelEs: "Poco sabía / Jamás imaginó",
          formula: "Little did + Subject + know + THAT...",
          use: "Enfatiza la falta total de conciencia sobre lo que sucedería.",
          exampleEn: "Little did she know that this decision would change her life forever.",
          exampleEs: "Jamás imaginó que esta decisión cambiaría su vida para siempre.",
          color: "#ddd6fe"
        },
        {
          id: "inv-onlyby",
          label: "Only by / Only then 🗝️",
          labelEs: "Solo mediante / Solo entonces",
          formula: "Only by + V-ing + AUX + Subject + Verb...",
          use: "Destaca la única condición posible para lograr un resultado.",
          exampleEn: "Only by working together can we solve this crisis.",
          exampleEs: "Solo trabajando juntos podemos resolver esta crisis.",
          color: "#ede9fe"
        }
      ]
    }
  },
  {
    id: "c1-collocations-map",
    title: "C1 Advanced Collocations Map",
    titleEs: "Colocaciones Avanzadas (C1)",
    category: "Vocabulary",
    level: "C1 Advanced",
    icon: "💎",
    color: "#ec4899",
    description: "Combinaciones naturales y elegantes de adjetivos + sustantivos / adverbios + adjetivos usadas por nativos cultos.",
    rootNode: {
      id: "c1-col-root",
      label: "C1 Advanced Collocations 💎",
      labelEs: "Colocaciones Avanzadas C1",
      details: "Palabras que coocurren juntas de manera natural en el inglés avanzado.",
      type: "root",
      children: [
        {
          id: "col-bitterly",
          label: "Bitterly disappointed 😞",
          labelEs: "Profundamente decepcionado",
          meaningEn: "Extremely disappointed.",
          exampleEn: "He was bitterly disappointed with the project outcome.",
          exampleEs: "Estaba profundamente decepcionado con el resultado del proyecto.",
          color: "#f472b6"
        },
        {
          id: "col-highly",
          label: "Highly unlikely 🎯",
          labelEs: "Sumamente improbable",
          meaningEn: "Very unlikely to happen.",
          exampleEn: "It is highly unlikely that interest rates will drop this quarter.",
          exampleEs: "Es sumamente improbable que las tasas de interés bajen este trimestre.",
          color: "#f472b6"
        },
        {
          id: "col-vital",
          label: "Vital importance 🔑",
          labelEs: "Importancia vital / crucial",
          meaningEn: "Crucial significance.",
          exampleEn: "Data security is of vital importance to our organization.",
          exampleEs: "La seguridad de datos es de vital importancia para nuestra organización.",
          color: "#f472b6"
        }
      ]
    }
  },

  // ==========================================
  // A1-A2 & B1-B2 MIND MAPS
  // ==========================================
  {
    id: "verb-tenses",
    title: "Verb Tenses Timeline (A1-B2)",
    titleEs: "Línea de Tiempos Verbales (A1-B2)",
    category: "Grammar",
    level: "A1-A2",
    icon: "⏱️",
    color: "#6366f1",
    description: "Visualiza la relación temporal entre los tiempos verbales principales en inglés.",
    rootNode: {
      id: "tenses-root",
      label: "English Verb Tenses",
      labelEs: "Tiempos Verbales en Inglés",
      type: "root",
      children: [
        {
          id: "present-group",
          label: "Present Tenses 🟢",
          labelEs: "Tiempos Presentes",
          color: "#10b981",
          children: [
            {
              id: "pres-simple",
              label: "Present Simple",
              labelEs: "Presente Simple",
              formula: "Subject + Verb (s/es)",
              use: "Rutinas, hábitos y hechos permanentes.",
              exampleEn: "I work from home every day. She speaks fluent English.",
              exampleEs: "Trabajo desde casa todos los días. Ella habla inglés fluido.",
              color: "#34d399"
            },
            {
              id: "pres-continuous",
              label: "Present Continuous",
              labelEs: "Presente Continuo",
              formula: "Subject + am/is/are + Verb-ing",
              use: "Acciones sucediendo justo ahora.",
              exampleEn: "I am learning English with visual maps right now.",
              exampleEs: "Estoy aprendiendo inglés con mapas visuales justo ahora.",
              color: "#6ee7b7"
            }
          ]
        },
        {
          id: "past-group",
          label: "Past Tenses 🔵",
          labelEs: "Tiempos Pasados",
          color: "#3b82f6",
          children: [
            {
              id: "past-simple",
              label: "Past Simple",
              labelEs: "Pasado Simple",
              formula: "Subject + Verb (-ed / Irregular)",
              use: "Acciones terminadas en el pasado.",
              exampleEn: "We watched a movie yesterday night.",
              exampleEs: "Vimos una película ayer por la noche.",
              color: "#60a5fa"
            }
          ]
        }
      ]
    }
  }
];
