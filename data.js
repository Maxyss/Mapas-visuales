// Base de datos de Mapas Visuales para Aprender Inglés
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
      details: "El sistema verbal inglés se divide principalmente en Presente, Pasado y Futuro, cada uno con sus aspectos principales.",
      type: "root",
      children: [
        {
          id: "present-group",
          label: "Present Tenses 🟢",
          labelEs: "Tiempos Presentes",
          color: "#10b981",
          details: "Acciones actuales, rutinas, verdades generales y estados.",
          children: [
            {
              id: "pres-simple",
              label: "Present Simple",
              labelEs: "Presente Simple",
              formula: "Subject + Verb (s/es)",
              use: "Rutinas, hábitos y hechos permanentes.",
              exampleEn: "I work from home every day. She speaks fluent English.",
              exampleEs: "Trabajo desde casa todos los días. Ella habla inglés fluido.",
              tip: "Usa 'do/does' para preguntas y negaciones. ¡Cuidado con la '-s' en 3ª persona (he/she/it)!",
              color: "#34d399"
            },
            {
              id: "pres-continuous",
              label: "Present Continuous",
              labelEs: "Presente Continuo",
              formula: "Subject + am/is/are + Verb-ing",
              use: "Acciones sucediendo justo ahora o tendencias actuales.",
              exampleEn: "I am learning English with visual maps right now.",
              exampleEs: "Estoy aprendiendo inglés con mapas visuales justo ahora.",
              tip: "Palabras clave: 'now', 'at the moment', 'currently'.",
              color: "#6ee7b7"
            },
            {
              id: "pres-perfect",
              label: "Present Perfect",
              labelEs: "Presente Perfecto",
              formula: "Subject + have/has + Past Participle",
              use: "Experiencias pasadas con conexión en el presente o acciones recientes.",
              exampleEn: "I have visited London twice.",
              exampleEs: "He visitado Londres dos veces.",
              tip: "Palabras clave: 'ever', 'never', 'already', 'yet', 'just', 'since', 'for'.",
              color: "#a7f3d0"
            }
          ]
        },
        {
          id: "past-group",
          label: "Past Tenses 🔵",
          labelEs: "Tiempos Pasados",
          color: "#3b82f6",
          details: "Eventos ocurridos antes del presente.",
          children: [
            {
              id: "past-simple",
              label: "Past Simple",
              labelEs: "Pasado Simple",
              formula: "Subject + Verb (-ed / Irregular)",
              use: "Acciones terminadas en un momento específico del pasado.",
              exampleEn: "We watched a movie yesterday night.",
              exampleEs: "Vimos una película ayer por la noche.",
              tip: "Usa 'did' para preguntas y negaciones. El verbo vuelve a su forma base con 'did'.",
              color: "#60a5fa"
            },
            {
              id: "past-continuous",
              label: "Past Continuous",
              labelEs: "Pasado Continuo",
              formula: "Subject + was/were + Verb-ing",
              use: "Acciones en proceso en un momento del pasado o interrumpidas por el Past Simple.",
              exampleEn: "I was studying when you called me.",
              exampleEs: "Estaba estudiando cuando me llamaste.",
              tip: "Se suele combinar con 'while' (mientras) y 'when' (cuando).",
              color: "#93c5fd"
            },
            {
              id: "past-perfect",
              label: "Past Perfect",
              labelEs: "Pasado Perfecto",
              formula: "Subject + had + Past Participle",
              use: "Una acción que ocurrió antes de otra acción en el pasado ('El pasado del pasado').",
              exampleEn: "When I arrived, the train had already left.",
              exampleEs: "Cuando llegué, el tren ya se había ido.",
              tip: "Te ayuda a secuenciar eventos en historias pasadas claramente.",
              color: "#bfdbfe"
            }
          ]
        },
        {
          id: "future-group",
          label: "Future Tenses 🟣",
          labelEs: "Tiempos Futuros",
          color: "#8b5cf6",
          details: "Predicciones, planes, intenciones y promesas.",
          children: [
            {
              id: "fut-will",
              label: "Future with WILL",
              labelEs: "Futuro espontáneo (Will)",
              formula: "Subject + will + Verb",
              use: "Decisiones espontáneas, predicciones sin evidencia directa y promesas.",
              exampleEn: "I will call you as soon as I arrive.",
              exampleEs: "Te llamaré tan pronto como llegue.",
              tip: "Responde al instante: 'I'll help you!' (¡Te ayudaré!).",
              color: "#a78bfa"
            },
            {
              id: "fut-goingto",
              label: "Future with GOING TO",
              labelEs: "Futuro planificado (Going to)",
              formula: "Subject + am/is/are + going to + Verb",
              use: "Planes previos, intenciones decididas y predicciones basadas en evidencia visual.",
              exampleEn: "Look at those dark clouds! It is going to rain.",
              exampleEs: "¡Mira esas nubes oscuras! Va a llover.",
              tip: "Usa 'going to' cuando ya tenías la intención antes de hablar.",
              color: "#c4b5fd"
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
      details: "Un Phrasal Verb combina un verbo + preposición/adverbio, cambiando totalmente el significado original del verbo.",
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
              tip: "Diferencia con 'wake up' (despertar/abrir los ojos). 'Get up' implica salir físicamente de la cama.",
              color: "#fde68a"
            },
            {
              id: "pv-get-on",
              label: "Get on / off",
              labelEs: "Subir / Bajar (Transporte grande)",
              meaningEn: "To board or leave a bus, train, plane, or ship.",
              exampleEn: "We got on the bus right in front of the station.",
              exampleEs: "Subimos al autobús justo enfrente de la estación.",
              tip: "Usa 'get on/off' para autobús, tren, avión. Usa 'get in/out of' para coche o taxi.",
              color: "#fde68a"
            },
            {
              id: "pv-get-along",
              label: "Get along with",
              labelEs: "Llevarse bien con alguien",
              meaningEn: "To have a good and friendly relationship with someone.",
              exampleEn: "Do you get along well with your new coworkers?",
              exampleEs: "¿Te llevas bien con tus nuevos compañeros de trabajo?",
              tip: "Sinónimo: 'get on well with'.",
              color: "#fde68a"
            }
          ]
        },
        {
          id: "pv-look",
          label: "LOOK 👁️",
          labelEs: "Con Verbo LOOK",
          color: "#f97316",
          children: [
            {
              id: "pv-look-for",
              label: "Look for",
              labelEs: "Buscar algo o a alguien",
              meaningEn: "To try to find something or someone lost.",
              exampleEn: "I am looking for my keys. Have you seen them?",
              exampleEs: "Estoy buscando mis llaves. ¿Las has visto?",
              tip: "Diferente de 'search' (que a menudo requiere objeto: 'search the room').",
              color: "#fb923c"
            },
            {
              id: "pv-look-forward",
              label: "Look forward to",
              labelEs: "Estar ansioso/ilusionado por algo",
              meaningEn: "To feel excited about something that is going to happen.",
              exampleEn: "I am looking forward to meeting you next week!",
              exampleEs: "¡Estoy deseando conocerte la próxima semana!",
              tip: "¡OJO! La palabra que sigue lleva '-ing': 'looking forward to hearing from you'.",
              color: "#fb923c"
            },
            {
              id: "pv-look-after",
              label: "Look after",
              labelEs: "Cuidar a alguien o algo",
              meaningEn: "To take care of someone or something.",
              exampleEn: "Can you look after my dog while I am on vacation?",
              exampleEs: "¿Puedes cuidar a mi perro mientras estoy de vacaciones?",
              tip: "Sinónimo común: 'take care of'.",
              color: "#fb923c"
            }
          ]
        },
        {
          id: "pv-turn",
          label: "TURN 🔄",
          labelEs: "Con Verbo TURN",
          color: "#ef4444",
          children: [
            {
              id: "pv-turn-on-off",
              label: "Turn on / off",
              labelEs: "Encender / Apagar (Dispositivos)",
              meaningEn: "To start or stop a device or machine.",
              exampleEn: "Please turn off the lights before leaving the room.",
              exampleEs: "Por favor apaga las luces antes de salir de la habitación.",
              tip: "También se usa 'switch on / switch off'.",
              color: "#f87171"
            },
            {
              id: "pv-turn-up-down",
              label: "Turn up / down",
              labelEs: "Subir / Bajar volumen o intensidad / Rechazar",
              meaningEn: "To increase or decrease volume/heat, OR to reject an offer.",
              exampleEn: "Turn up the music! Also, he turned down the job offer.",
              exampleEs: "¡Sube la música! Además, él rechazó la oferta de trabajo.",
              tip: "Tiene doble significado: volumen/potencia y rechazar propuestas.",
              color: "#f87171"
            }
          ]
        }
      ]
    }
  },
  {
    id: "business-career",
    title: "Business & Work Vocabulary Map",
    titleEs: "Inglés para el Trabajo y Negocios",
    category: "Professional",
    icon: "💼",
    color: "#06b6d4",
    description: "Vocabulario clave, reuniones, correos electrónicos y entrevistas de trabajo.",
    rootNode: {
      id: "biz-root",
      label: "Business English 💼",
      labelEs: "Inglés Profesional",
      details: "Términos, conectores y frases indispensables en entornos laborales y corporativos.",
      type: "root",
      children: [
        {
          id: "biz-emails",
          label: "Email Expressions 📧",
          labelEs: "Frases para Correos",
          color: "#22d3ee",
          children: [
            {
              id: "em-opening",
              label: "Openings",
              labelEs: "Saludos e Inicio",
              meaningEn: "Formal & Semi-formal email starters.",
              exampleEn: "I hope this email finds you well. / Further to our meeting...",
              exampleEs: "Espero que este correo te encuentre bien. / En seguimiento a nuestra reunión...",
              tip: "'Dear [Name]' para formal, 'Hi [Name]' para entorno moderno y directo.",
              color: "#67e8f9"
            },
            {
              id: "em-attachment",
              label: "Attachments",
              labelEs: "Adjuntar archivos",
              meaningEn: "Referring to attached files.",
              exampleEn: "Please find attached the updated report for your review.",
              exampleEs: "Por favor encuentra adjunto el informe actualizado para tu revisión.",
              tip: "La frase estándar indiscutible: 'Please find attached...'",
              color: "#67e8f9"
            },
            {
              id: "em-closing",
              label: "Closings",
              labelEs: "Despedidas Profesionales",
              meaningEn: "Polite ways to finish emails.",
              exampleEn: "Best regards, / Kind regards, / I look forward to your reply.",
              exampleEs: "Atentamente, / Saludos cordiales, / Quedo a la espera de su respuesta.",
              tip: "Usa 'Best regards' para el 90% de las comunicaciones profesionales.",
              color: "#67e8f9"
            }
          ]
        },
        {
          id: "biz-meetings",
          label: "Meetings & Calls 🎙️",
          labelEs: "Reuniones y Llamadas",
          color: "#0284c7",
          children: [
            {
              id: "mtg-opinion",
              label: "Giving Opinions",
              labelEs: "Dar opiniones respetuosas",
              meaningEn: "Politely sharing your perspective in a meeting.",
              exampleEn: "From my point of view, we should focus on user experience.",
              exampleEs: "Desde mi punto de vista, deberíamos enfocarnos en la experiencia de usuario.",
              tip: "Frases útiles: 'In my opinion...', 'I strongly believe that...'.",
              color: "#38bdf8"
            },
            {
              id: "mtg-interrupt",
              label: "Interrupting Politely",
              labelEs: "Interrumpir cortésmente",
              meaningEn: "Joining a discussion without being rude.",
              exampleEn: "May I quickly jump in here? / Sorry to interrupt, but...",
              exampleEs: "¿Puedo hacer una breve intervención aquí? / Disculpa la interrupción, pero...",
              tip: "'May I add something here?' es suave y muy profesional.",
              color: "#38bdf8"
            }
          ]
        }
      ]
    }
  },
  {
    id: "travel-situations",
    title: "Travel & Daily Survival Map",
    titleEs: "Inglés para Viajes y Supervivencia",
    category: "Travel",
    icon: "✈️",
    color: "#ec4899",
    description: "Frases imprescindibles en aeropuertos, hoteles, restaurantes y direcciones.",
    rootNode: {
      id: "travel-root",
      label: "Travel & Survival ✈️",
      labelEs: "Viajes y Situaciones Reales",
      details: "Comunicación fluida en viajes internacionales y servicios.",
      type: "root",
      children: [
        {
          id: "tr-airport",
          label: "At the Airport 🛫",
          labelEs: "En el Aeropuerto",
          color: "#f472b6",
          children: [
            {
              id: "ap-checkin",
              label: "Check-in & Boarding",
              labelEs: "Facturación y Embarque",
              meaningEn: "Key vocabulary when taking a flight.",
              exampleEn: "Where is the boarding gate for flight 402? Here is my passport.",
              exampleEs: "¿Dónde está la puerta de embarque del vuelo 402? Aquí está mi pasaporte.",
              tip: "'Carry-on luggage' = equipaje de mano. 'Checked bag' = equipaje facturado.",
              color: "#fbcfe8"
            },
            {
              id: "ap-customs",
              label: "Immigration & Customs",
              labelEs: "Migraciones y Aduana",
              meaningEn: "Answering border control officer questions.",
              exampleEn: "I am traveling for vacation. I will be staying for 7 days.",
              exampleEs: "Viajo por vacaciones. Me quedaré durante 7 días.",
              tip: "Ten a mano la dirección de tu hotel o reserva.",
              color: "#fbcfe8"
            }
          ]
        },
        {
          id: "tr-restaurant",
          label: "At the Restaurant 🍽️",
          labelEs: "En el Restaurante",
          color: "#db2777",
          children: [
            {
              id: "rs-ordering",
              label: "Ordering Food",
              labelEs: "Pedir Comida",
              meaningEn: "Polite ways to order food and drinks.",
              exampleEn: "Could I please have the grilled salmon with a glass of water?",
              exampleEs: "¿Podría darme el salmón a la parrilla con un vaso de agua?",
              tip: "Usa 'Could I have...' o 'I'll have...' en lugar de 'I want...' que suena brusco.",
              color: "#f472b6"
            },
            {
              id: "rs-bill",
              label: "Asking for the Bill",
              labelEs: "Pedir la Cuenta",
              meaningEn: "Paying at the end of a meal.",
              exampleEn: "Could we get the bill/check, please? Do you accept credit cards?",
              exampleEs: "¿Nos trae la cuenta, por favor? ¿Aceptan tarjetas de crédito?",
              tip: "En EE.UU. se dice 'the check', en Reino Unido 'the bill'.",
              color: "#f472b6"
            }
          ]
        }
      ]
    }
  },
  {
    id: "native-idioms",
    title: "Common Native Idioms & Slang Map",
    titleEs: "Modismos y Expresiones Nativas (Idioms)",
    category: "Idioms",
    icon: "🔥",
    color: "#10b981",
    description: "Habla como un nativo usando modismos y expresiones idiomáticas populares.",
    rootNode: {
      id: "idioms-root",
      label: "Native Idioms 🔥",
      labelEs: "Expresiones Idiomáticas",
      details: "Expresiones figurativas cuyo significado no se traduce literalmente.",
      type: "root",
      children: [
        {
          id: "id-common",
          label: "Daily Expressions 💬",
          labelEs: "Expresiones Diarias",
          color: "#34d399",
          children: [
            {
              id: "id-piece-cake",
              label: "Piece of cake 🍰",
              labelEs: "Pan comido / Muy fácil",
              meaningEn: "Something that is very easy to do.",
              exampleEn: "Don't worry about the English exam; it's going to be a piece of cake!",
              exampleEs: "No te preocupes por el examen de inglés; ¡va a ser pan comido!",
              tip: "Equivalente en español: 'Es facilísimo' o 'está chupado'.",
              color: "#6ee7b7"
            },
            {
              id: "id-hit-sack",
              label: "Hit the sack 🛏️",
              labelEs: "Irse a dormir / A la cama",
              meaningEn: "To go to bed in order to sleep.",
              exampleEn: "I am exhausted after work. I'm going to hit the sack early.",
              exampleEs: "Estoy agotado después del trabajo. Voy a irme a la cama temprano.",
              tip: "Muy común en lenguaje informal cotidiano.",
              color: "#6ee7b7"
            },
            {
              id: "id-under-weather",
              label: "Under the weather 🤒",
              labelEs: "Sentirse algo indispuesto / Enfermo",
              meaningEn: "To feel slightly sick or unwell.",
              exampleEn: "I won't come to the party tonight; I'm feeling a bit under the weather.",
              exampleEs: "No iré a la fiesta esta noche; me siento un poco indispuesto.",
              tip: "Manera educada e informal de decir que estás algo enfermo.",
              color: "#6ee7b7"
            },
            {
              id: "id-break-leg",
              label: "Break a leg 🎭",
              labelEs: "¡Mucha suerte! (En actuaciones/presentaciones)",
              meaningEn: "Good luck! (Wish good luck to someone before a show or event).",
              exampleEn: "You have your job interview today? Break a leg!",
              exampleEs: "¿Tienes tu entrevista de trabajo hoy? ¡Mucha suerte!",
              tip: "Viene del teatro tradicional donde desear suerte traía mala suerte.",
              color: "#6ee7b7"
            }
          ]
        }
      ]
    }
  }
];
