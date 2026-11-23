/* Pontos turísticos recomendados. `img` é opcional: se informado (ex.: "img/cristo.jpg"), substitui o gradiente. */
(function () {
  "use strict";
  var App = window.App = window.App || {};

  App.attractions = [
    {
      id: "cristo", cats: ["icons", "views", "nature"], hood: "Cosme Velho / Corcovado", price: "paid",
      art: { g: ["#0a3d62", "#12a4a0"], e: "✝️" }, map: "Cristo Redentor",
      name: { pt: "Cristo Redentor", en: "Christ the Redeemer", es: "Cristo Redentor" },
      desc: {
        pt: "Símbolo do Rio e uma das Novas Sete Maravilhas do Mundo (2007). Do alto do Corcovado, a 710 m, a vista abrange a Lagoa, o Pão de Açúcar e as praias da Zona Sul.",
        en: "Rio’s symbol and one of the New Seven Wonders of the World (2007). From the top of Corcovado, at 710 m, the view takes in the Lagoon, Sugarloaf and the South Zone beaches.",
        es: "Símbolo de Río y una de las Nuevas Siete Maravillas del Mundo (2007). Desde lo alto del Corcovado, a 710 m, la vista abarca la Laguna, el Pan de Azúcar y las playas de la Zona Sur."
      },
      duration: { pt: "3 a 4 horas", en: "3–4 hours", es: "3 a 4 horas" },
      best: { pt: "Primeira hora da manhã ou fim de tarde, em dia de céu aberto", en: "First thing in the morning or late afternoon, on a clear day", es: "A primera hora de la mañana o al final de la tarde, con cielo despejado" },
      tip: {
        pt: "Compre o ingresso com antecedência e confira a previsão: nuvens podem esconder a estátua. O acesso é por trem do Corcovado, vans oficiais ou trilha.",
        en: "Buy tickets in advance and check the forecast: clouds can hide the statue. Access is by the Corcovado train, official vans or a hiking trail.",
        es: "Compre la entrada con anticipación y revise el pronóstico: las nubes pueden ocultar la estatua. Se accede en el tren del Corcovado, vans oficiales o por sendero."
      }
    },
    {
      id: "pao", cats: ["icons", "views", "family"], hood: "Urca", price: "paid",
      art: { g: ["#ff6b4a", "#ffb703"], e: "🚡" }, map: "Pão de Açúcar Bondinho",
      name: { pt: "Pão de Açúcar", en: "Sugarloaf Mountain", es: "Pan de Azúcar" },
      desc: {
        pt: "O bondinho sobe em duas etapas — Morro da Urca e Pão de Açúcar, a 396 m — e entrega um dos pores do sol mais famosos do mundo sobre a Baía de Guanabara.",
        en: "The cable car climbs in two stages — Urca Hill and Sugarloaf, at 396 m — and delivers one of the world’s most famous sunsets over Guanabara Bay.",
        es: "El teleférico sube en dos etapas — Morro da Urca y Pan de Azúcar, a 396 m — y ofrece una de las puestas de sol más famosas del mundo sobre la Bahía de Guanabara."
      },
      duration: { pt: "2 a 3 horas", en: "2–3 hours", es: "2 a 3 horas" },
      best: { pt: "Chegue umas 2 horas antes do pôr do sol", en: "Arrive about 2 hours before sunset", es: "Llegue unas 2 horas antes de la puesta de sol" },
      tip: {
        pt: "Combine com a Praia Vermelha e a Pista Cláudio Coutinho (caminhada plana à beira-mar), logo ao lado da estação.",
        en: "Combine it with Praia Vermelha and the Cláudio Coutinho Trail (a flat seaside walk), right next to the station.",
        es: "Combínelo con Praia Vermelha y la Pista Cláudio Coutinho (caminata plana junto al mar), al lado de la estación."
      }
    },
    {
      id: "selaron", cats: ["culture", "icons"], hood: "Lapa / Santa Teresa", price: "free",
      art: { g: ["#7b4fd6", "#ff6b4a"], e: "🎨" }, map: "Escadaria Selarón",
      name: { pt: "Escadaria Selarón", en: "Selarón Steps", es: "Escalera Selarón" },
      desc: {
        pt: "Obra do artista chileno Jorge Selarón: cerca de 200 degraus cobertos por azulejos e cerâmicas de dezenas de países, em tons de verde, amarelo e azul.",
        en: "A work by Chilean artist Jorge Selarón: around 200 steps covered with tiles and ceramics from dozens of countries, in shades of green, yellow and blue.",
        es: "Obra del artista chileno Jorge Selarón: unos 200 escalones cubiertos de azulejos y cerámicas de decenas de países, en tonos verdes, amarillos y azules."
      },
      duration: { pt: "30 a 45 minutos", en: "30–45 minutes", es: "30 a 45 minutos" },
      best: { pt: "Manhã, antes da chegada dos grupos", en: "Morning, before tour groups arrive", es: "Por la mañana, antes de los grupos" },
      tip: {
        pt: "Vá de transporte por aplicativo e evite caminhar pelas ruas ao redor à noite. Aproveite para seguir a pé até Santa Teresa.",
        en: "Take a ride-hailing app and avoid walking the surrounding streets at night. Then walk on to Santa Teresa.",
        es: "Vaya en transporte por aplicación y evite caminar por las calles cercanas de noche. Luego continúe a pie hasta Santa Teresa."
      }
    },
    {
      id: "lage", cats: ["nature", "culture", "family"], hood: "Jardim Botânico", price: "free",
      art: { g: ["#1f9d62", "#c9e265"], e: "🌴" }, map: "Parque Lage",
      name: { pt: "Parque Lage", en: "Lage Park", es: "Parque Lage" },
      desc: {
        pt: "Palacete dos anos 1920 aos pés do Corcovado, rodeado de jardins, grutas e Mata Atlântica. Abriga a Escola de Artes Visuais e um café de pátio encantador.",
        en: "A 1920s mansion at the foot of Corcovado, surrounded by gardens, grottoes and Atlantic Forest. It houses a visual-arts school and a charming courtyard café.",
        es: "Palacete de los años 1920 al pie del Corcovado, rodeado de jardines, grutas y Mata Atlántica. Alberga la Escuela de Artes Visuales y un encantador café de patio."
      },
      duration: { pt: "2 horas", en: "2 hours", es: "2 horas" },
      best: { pt: "Manhã, com luz suave para fotos", en: "Morning, with soft light for photos", es: "Por la mañana, con luz suave para fotos" },
      tip: {
        pt: "A entrada é gratuita. Do parque parte a trilha para o Corcovado (use calçado adequado e vá cedo).",
        en: "Entry is free. A trail to Corcovado starts here (wear proper shoes and go early).",
        es: "La entrada es gratuita. Desde el parque sale el sendero al Corcovado (use calzado adecuado y vaya temprano)."
      }
    },
    {
      id: "jardim", cats: ["nature", "family"], hood: "Jardim Botânico", price: "paid",
      art: { g: ["#14803f", "#7bd389"], e: "🌿" }, map: "Jardim Botânico do Rio de Janeiro",
      name: { pt: "Jardim Botânico", en: "Botanical Garden", es: "Jardín Botánico" },
      desc: {
        pt: "Fundado em 1808 por Dom João VI, reúne milhares de espécies e a célebre Alameda das Palmeiras Imperiais, além de orquidário, lagos e vistas para o Cristo.",
        en: "Founded in 1808 by King João VI, it holds thousands of species and the famous Imperial Palm Avenue, plus an orchid house, ponds and views of Christ the Redeemer.",
        es: "Fundado en 1808 por Juan VI, reúne miles de especies y la célebre Alameda de las Palmeras Imperiales, además de orquideario, lagos y vistas al Cristo."
      },
      duration: { pt: "2 a 3 horas", en: "2–3 hours", es: "2 a 3 horas" },
      best: { pt: "Manhã, quando faz menos calor", en: "Morning, when it is cooler", es: "Por la mañana, con menos calor" },
      tip: {
        pt: "Leve repelente e água. Você pode ver micos, tucanos e outras aves; não alimente os animais.",
        en: "Bring repellent and water. You may spot marmosets, toucans and other birds; do not feed the animals.",
        es: "Lleve repelente y agua. Puede ver micos, tucanes y otras aves; no alimente a los animales."
      }
    },
    {
      id: "tijuca", cats: ["nature", "adventure", "views"], hood: "Floresta da Tijuca", price: "free",
      art: { g: ["#0b6e4f", "#08a88a"], e: "🏞️" }, map: "Parque Nacional da Tijuca",
      name: { pt: "Floresta da Tijuca", en: "Tijuca Forest", es: "Bosque de la Tijuca" },
      desc: {
        pt: "Uma das maiores florestas urbanas do mundo, replantada no século XIX. Cachoeiras, mirantes como a Vista Chinesa e trilhas para todos os níveis, em plena cidade.",
        en: "One of the largest urban forests in the world, replanted in the 19th century. Waterfalls, viewpoints such as Vista Chinesa and trails for all levels, right inside the city.",
        es: "Uno de los mayores bosques urbanos del mundo, replantado en el siglo XIX. Cascadas, miradores como la Vista Chinesa y senderos para todos los niveles, en plena ciudad."
      },
      duration: { pt: "Meio dia", en: "Half a day", es: "Medio día" },
      best: { pt: "Manhã de dia seco", en: "Morning on a dry day", es: "Mañana de un día seco" },
      tip: {
        pt: "Para chegar a todos os pontos, contrate um passeio guiado de jipe ou aplicativo com motorista. Em trilhas longas, vá com guia credenciado.",
        en: "To reach all the sights, book a guided jeep tour or a driver via app. For longer trails, go with a certified guide.",
        es: "Para llegar a todos los puntos, contrate un paseo guiado en jeep o un conductor por aplicación. En senderos largos, vaya con guía acreditado."
      }
    },
    {
      id: "maracana", cats: ["culture", "family"], hood: "Maracanã", price: "paid",
      art: { g: ["#1f9d62", "#0a3d62"], e: "⚽" }, map: "Estádio do Maracanã",
      name: { pt: "Estádio do Maracanã", en: "Maracanã Stadium", es: "Estadio Maracaná" },
      desc: {
        pt: "Inaugurado em 1950, é o templo do futebol brasileiro. Faça o tour pelo museu, vestiários e gramado ou assista a um jogo de Flamengo ou Fluminense.",
        en: "Opened in 1950, it is the temple of Brazilian football. Take a tour of the museum, locker rooms and pitch, or catch a Flamengo or Fluminense match.",
        es: "Inaugurado en 1950, es el templo del fútbol brasileño. Haga el tour por el museo, los vestuarios y el césped o vea un partido de Flamengo o Fluminense."
      },
      duration: { pt: "2 horas (tour)", en: "2 hours (tour)", es: "2 horas (tour)" },
      best: { pt: "Dias sem jogo para o tour; dias de jogo para a atmosfera", en: "Non-match days for the tour; match days for the atmosphere", es: "Días sin partido para el tour; días de partido para el ambiente" },
      tip: {
        pt: "Vá de metrô (estação Maracanã). Em dias de jogo, compre ingressos oficiais e evite cambistas.",
        en: "Go by metro (Maracanã station). On match days, buy official tickets and avoid scalpers.",
        es: "Vaya en metro (estación Maracanã). En días de partido, compre entradas oficiales y evite revendedores."
      }
    },
    {
      id: "santa", cats: ["culture", "views"], hood: "Santa Teresa", price: "mixed",
      art: { g: ["#d4572a", "#f2a65a"], e: "🚋" }, map: "Largo dos Guimarães Santa Teresa",
      name: { pt: "Santa Teresa e o Bonde", en: "Santa Teresa & the Tram", es: "Santa Teresa y el Tranvía" },
      desc: {
        pt: "Bairro boêmio nas encostas, com ladeiras, casarões, ateliês e bares. O bonde histórico cruza os Arcos da Lapa, um aqueduto do século XVIII, rumo ao Largo dos Guimarães.",
        en: "A bohemian hillside neighborhood of winding streets, mansions, studios and bars. The historic tram crosses the Lapa Arches, an 18th-century aqueduct, toward Largo dos Guimarães.",
        es: "Barrio bohemio en las laderas, con calles empinadas, casonas, talleres y bares. El histórico tranvía cruza los Arcos de la Lapa, un acueducto del siglo XVIII, rumbo al Largo dos Guimarães."
      },
      duration: { pt: "3 horas", en: "3 hours", es: "3 horas" },
      best: { pt: "Final de tarde, para ver o pôr do sol e jantar", en: "Late afternoon, for sunset and dinner", es: "Al final de la tarde, para la puesta de sol y cenar" },
      tip: {
        pt: "Passear pelo bairro é gratuito; o bonde é pago. Confira o horário de funcionamento do bonde antes de ir.",
        en: "Walking around the neighborhood is free; the tram is paid. Check the tram’s operating hours before you go.",
        es: "Pasear por el barrio es gratis; el tranvía es de pago. Consulte el horario del tranvía antes de ir."
      }
    },
    {
      id: "amanha", cats: ["culture", "family", "views"], hood: "Centro / Zona Portuária", price: "paid",
      art: { g: ["#12a4a0", "#0a3d62"], e: "🏛️" }, map: "Museu do Amanhã",
      name: { pt: "Museu do Amanhã e Zona Portuária", en: "Museum of Tomorrow & Port Area", es: "Museo del Mañana y Zona Portuaria" },
      desc: {
        pt: "Projetado por Santiago Calatrava e aberto em 2015, o museu fala de ciência e sustentabilidade. Ao redor ficam o AquaRio, os murais de arte urbana e o VLT.",
        en: "Designed by Santiago Calatrava and opened in 2015, the museum explores science and sustainability. Nearby are AquaRio, street-art murals and the VLT tram.",
        es: "Diseñado por Santiago Calatrava y abierto en 2015, el museo trata de ciencia y sostenibilidad. Alrededor están el AquaRio, los murales de arte urbano y el VLT."
      },
      duration: { pt: "3 a 4 horas", en: "3–4 hours", es: "3 a 4 horas" },
      best: { pt: "Manhã de dia útil (menos filas)", en: "Weekday mornings (shorter lines)", es: "Mañana de día laborable (menos filas)" },
      tip: {
        pt: "Use o VLT Carioca para ir de uma atração a outra. O museu fecha em um dia da semana — confirme no site oficial.",
        en: "Use the Rio VLT tram to hop between attractions. The museum closes one day a week — check the official site.",
        es: "Use el VLT Carioca para moverse entre atracciones. El museo cierra un día a la semana: confirme en el sitio oficial."
      }
    },
    {
      id: "centro", cats: ["culture", "icons"], hood: "Centro", price: "mixed",
      art: { g: ["#8a5a2b", "#e9c46a"], e: "🎭" }, map: "Theatro Municipal do Rio de Janeiro",
      name: { pt: "Centro Histórico", en: "Historic Downtown", es: "Centro Histórico" },
      desc: {
        pt: "Theatro Municipal, Biblioteca Nacional, Paço Imperial, Real Gabinete Português de Leitura e a Confeitaria Colombo: a Belle Époque carioca em poucos quarteirões.",
        en: "Municipal Theatre, National Library, Imperial Palace, the Royal Portuguese Reading Room and Confeitaria Colombo: Rio’s Belle Époque in a few blocks.",
        es: "Teatro Municipal, Biblioteca Nacional, Palacio Imperial, el Real Gabinete Portugués de Lectura y la Confeitaria Colombo: la Belle Époque carioca en pocas cuadras."
      },
      duration: { pt: "Meio dia", en: "Half a day", es: "Medio día" },
      best: { pt: "Dias úteis, de manhã; o Centro esvazia à noite e aos domingos", en: "Weekday mornings; downtown empties at night and on Sundays", es: "Mañanas de días laborables; el Centro se vacía de noche y los domingos" },
      tip: {
        pt: "Vá a pé com o VLT e o metrô como apoio. Muitos museus fecham às segundas — confira antes.",
        en: "Explore on foot with the VLT and metro as support. Many museums close on Mondays — check first.",
        es: "Recórralo a pie con apoyo del VLT y el metro. Muchos museos cierran los lunes: consulte antes."
      }
    },
    {
      id: "voo", cats: ["adventure", "views"], hood: "São Conrado", price: "paid",
      art: { g: ["#2b8cff", "#12e0c8"], e: "🪂" }, map: "Pedra Bonita rampa de voo livre",
      name: { pt: "Voo livre (asa-delta e parapente)", en: "Hang gliding & paragliding", es: "Vuelo libre (ala delta y parapente)" },
      desc: {
        pt: "Salto duplo com instrutor a partir da Pedra Bonita, com pouso na Praia do Pepino, em São Conrado. Uma das experiências mais icônicas para quem busca aventura.",
        en: "Tandem flights with an instructor from Pedra Bonita, landing on Pepino Beach in São Conrado. One of the most iconic experiences for thrill-seekers.",
        es: "Salto en tándem con instructor desde la Pedra Bonita, con aterrizaje en la Playa del Pepino, en São Conrado. Una de las experiencias más emblemáticas para los amantes de la aventura."
      },
      duration: { pt: "Meio dia (voo de 10 a 20 min)", en: "Half a day (10–20 min flight)", es: "Medio día (vuelo de 10 a 20 min)" },
      best: { pt: "Manhã de dia claro e com pouco vento", en: "Clear, low-wind mornings", es: "Mañanas despejadas y con poco viento" },
      tip: {
        pt: "Contrate apenas instrutores credenciados e verifique seguro e equipamento. O voo depende das condições do tempo.",
        en: "Only book certified instructors and check insurance and equipment. Flights depend on weather conditions.",
        es: "Contrate solo instructores acreditados y verifique seguro y equipo. El vuelo depende de las condiciones del clima."
      }
    },
    {
      id: "lagoa", cats: ["nature", "family", "views"], hood: "Lagoa / Ipanema / Leblon", price: "free",
      art: { g: ["#2fa4c9", "#8ee3c7"], e: "🚲" }, map: "Lagoa Rodrigo de Freitas",
      name: { pt: "Lagoa Rodrigo de Freitas", en: "Rodrigo de Freitas Lagoon", es: "Laguna Rodrigo de Freitas" },
      desc: {
        pt: "Cartão-postal cercado de montanhas, com ciclovia e pista de caminhada de cerca de 7,5 km, pedalinhos em forma de cisne, quiosques e vista para o Cristo.",
        en: "A postcard lagoon ringed by mountains, with a bike path and walking track of about 7.5 km, swan-shaped pedal boats, kiosks and views of Christ the Redeemer.",
        es: "Laguna de postal rodeada de montañas, con ciclovía y pista de caminata de unos 7,5 km, pedalinas con forma de cisne, quioscos y vista al Cristo."
      },
      duration: { pt: "2 horas", en: "2 hours", es: "2 horas" },
      best: { pt: "Fim de tarde, no pôr do sol", en: "Late afternoon, at sunset", es: "Al final de la tarde, en la puesta de sol" },
      tip: {
        pt: "Alugue bicicletas ou pedalinhos na própria orla. À noite, os quiosques ficam animados — mantenha pertences à vista.",
        en: "Rent bikes or pedal boats right on the shore. The kiosks get lively at night — keep belongings in sight.",
        es: "Alquile bicicletas o pedalinas en la propia orilla. De noche los quioscos se animan: mantenga sus pertenencias a la vista."
      }
    }
  ];
})();
