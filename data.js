// Base de datos Completa de Mapas e Infografías Ilustradas para Aprender Inglés

const POSTER_INFOGRAPHICS = [
  {
    id: "poster-weather",
    title: "THE WEATHER",
    titleEs: "El Tiempo y el Clima",
    category: "Vocabulary",
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
    id: "poster-routine",
    title: "DAILY ROUTINES",
    titleEs: "Rutinas Diarias y Horarios",
    category: "Vocabulary",
    icon: "⏰",
    borderColor: "#ff6b6b",
    intro: {
      avatar: "👧",
      title: "WHAT IS A DAILY ROUTINE?",
      textEn: "A daily routine is the sequence of things you do every day, from waking up to going to sleep!",
      textEs: "¡Una rutina diaria es la secuencia de cosas que haces todos los días, desde que te despiertas hasta que te vas a dormir!"
    },
    weatherTypes: [
      { icon: "⏰", titleEn: "Wake up", titleEs: "Despertarse", audio: "Wake up" },
      { icon: "🛏️", titleEn: "Get up", titleEs: "Levantarse de la cama", audio: "Get up" },
      { icon: "🪥", titleEn: "Brush teeth", titleEs: "Lavarse los dientes", audio: "Brush teeth" },
      { icon: "🚿", titleEn: "Take a shower", titleEs: "Ducharse", audio: "Take a shower" },
      { icon: "🍳", titleEn: "Eat breakfast", titleEs: "Desayunar", audio: "Eat breakfast" },
      { icon: "🚌", titleEn: "Go to work / school", titleEs: "Ir a trabajar / estudiar", audio: "Go to work" },
      { icon: "🥗", titleEn: "Have lunch", titleEs: "Almorzar", audio: "Have lunch" },
      { icon: "🍝", titleEn: "Have dinner", titleEs: "Cenar", audio: "Have dinner" },
      { icon: "📖", titleEn: "Read a book", titleEs: "Leer un libro", audio: "Read a book" },
      { icon: "😴", titleEn: "Go to sleep", titleEs: "Irse a dormir", audio: "Go to sleep" }
    ],
    whyImportant: [
      { icon: "⏱️", textEn: "It helps manage your time efficiently.", textEs: "Ayuda a gestionar tu tiempo eficientemente." },
      { icon: "💪", textEn: "It develops healthy habits.", textEs: "Desarrolla hábitos saludables." },
      { icon: "🧠", textEn: "It reduces daily stress.", textEs: "Reduce el estrés diario." }
    ],
    vocabWords: [
      { icon: "🌅", word: "morning" }, { icon: "☀️", word: "noon" }, { icon: "🌆", word: "afternoon" },
      { icon: "🌙", word: "night" }, { icon: "⌚", word: "clock" }, { icon: "📅", word: "schedule" }
    ],
    whatCanIDo: [
      { icon: "⏰", textEn: "Set an alarm to wake up on time.", textEs: "Pon una alarma para despertar a tiempo." },
      { icon: "🍎", textEn: "Eat a healthy breakfast every morning.", textEs: "Toma un desayuno saludable cada mañana." }
    ],
    dosAndDonts: {
      good: ["Sleep 8 hours every night.", "Maintain a regular schedule.", "Drink water in the morning."],
      bad: ["Skip breakfast.", "Stay up too late using your phone.", "Procrastinate important tasks."]
    }
  }
];

const MINDMAPS_DATA = [
  {
    id: "verb-tenses",
    title: "Verb Tenses Timeline",
    titleEs: "Línea de Tiempos Verbales",
    category: "Grammar",
    icon: "⏱️",
    color: "#6366f1",
    description: "Visualiza la relación temporal entre los tiempos verbales principales en inglés.",
    rootNode: {
      id: "tenses-root",
      label: "English Verb Tenses",
      labelEs: "Tiempos Verbales en Inglés",
      details: "El sistema verbal inglés se divide principalmente en Presente, Pasado y Futuro.",
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
              tip: "Usa 'do/does' para preguntas y negaciones.",
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
  },
  {
    id: "phrasal-verbs-essential",
    title: "Essential Phrasal Verbs Map",
    titleEs: "Mapa de Phrasal Verbs Esenciales",
    category: "Verbs",
    icon: "🧩",
    color: "#f59e0b",
    description: "Domina los verbos compuestos más usados divididos por su verbo raíz.",
    rootNode: {
      id: "pv-root",
      label: "Top Phrasal Verbs",
      labelEs: "Phrasal Verbs Imprescindibles",
      type: "root",
      children: [
        {
          id: "pv-get",
          label: "GET 🔄",
          labelEs: "Con Verbo GET",
          color: "#fbbf24",
          children: [
            {
              id: "pv-get-up",
              label: "Get up",
              labelEs: "Levantarse de la cama",
              meaningEn: "To rise from bed after sleeping.",
              exampleEn: "I usually get up at 7:00 AM on weekdays.",
              exampleEs: "Normalmente me levanto a las 7:00 AM los días de semana.",
              color: "#fde68a"
            }
          ]
        }
      ]
    }
  }
];
