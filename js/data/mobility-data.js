/* Aeroportos e mobilidade urbana. Tempos são estimativas (trânsito varia muito). */
(function () {
  "use strict";
  var App = window.App = window.App || {};

  App.airports = [
    { code: "GIG", g: ["#0a3d62", "#0e5a8a"], map: "Aeroporto Internacional do Galeão",
      name: { pt: "Aeroporto Internacional do Rio de Janeiro / Galeão – Antonio Carlos Jobim", en: "Rio de Janeiro/Galeão – Antonio Carlos Jobim International Airport", es: "Aeropuerto Internacional de Río de Janeiro/Galeão – Antonio Carlos Jobim" },
      kind: { pt: "Principal aeroporto internacional", en: "Main international airport", es: "Principal aeropuerto internacional" },
      points: {
        pt: ["Fica na Ilha do Governador, na Zona Norte, a cerca de 20 km do Centro.", "Concentra a maioria dos voos internacionais e muitos nacionais.", "Acesso por Linha Vermelha, Avenida Brasil e BRT Transcarioca.", "Há ônibus executivos, táxis e aplicativos no desembarque."],
        en: ["Located on Governador Island, in the North Zone, about 20 km from downtown.", "Handles most international flights and many domestic ones.", "Access via Linha Vermelha, Avenida Brasil and the BRT Transcarioca.", "Executive buses, taxis and ride-hailing apps are available at arrivals."],
        es: ["Está en la Isla del Gobernador, en la Zona Norte, a unos 20 km del Centro.", "Concentra la mayoría de los vuelos internacionales y muchos nacionales.", "Acceso por Linha Vermelha, Avenida Brasil y BRT Transcarioca.", "Hay buses ejecutivos, taxis y aplicaciones en la llegada."]
      } },
    { code: "SDU", g: ["#ff6b4a", "#ffb703"], map: "Aeroporto Santos Dumont",
      name: { pt: "Aeroporto Santos Dumont", en: "Santos Dumont Airport", es: "Aeropuerto Santos Dumont" },
      kind: { pt: "Voos nacionais, no Centro", en: "Domestic flights, downtown", es: "Vuelos nacionales, en el Centro" },
      points: {
        pt: ["Localizado no Centro, junto à Baía de Guanabara e ao Aterro do Flamengo.", "Voos domésticos, incluindo a Ponte Aérea Rio–São Paulo (Congonhas).", "Parada do VLT Carioca no aeroporto, com conexão ao metrô e às barcas.", "Pista curta e visual deslumbrante na aproximação."],
        en: ["Located downtown, next to Guanabara Bay and Flamengo Park.", "Domestic flights, including the Rio–São Paulo air shuttle (Congonhas).", "A Rio VLT tram stop serves the airport, connecting to the metro and ferries.", "Short runway and a stunning view on approach."],
        es: ["Ubicado en el Centro, junto a la Bahía de Guanabara y al Aterro do Flamengo.", "Vuelos domésticos, incluido el Puente Aéreo Río–São Paulo (Congonhas).", "Parada del VLT Carioca en el aeropuerto, con conexión al metro y a los ferris.", "Pista corta y vista deslumbrante en la aproximación."]
      } }
  ];

  App.destinations = [
    { id: "centro", name: { pt: "Centro / Lapa", en: "Downtown / Lapa", es: "Centro / Lapa" } },
    { id: "santa", name: { pt: "Santa Teresa", en: "Santa Teresa", es: "Santa Teresa" } },
    { id: "botafogo", name: { pt: "Botafogo / Urca", en: "Botafogo / Urca", es: "Botafogo / Urca" } },
    { id: "copa", name: { pt: "Copacabana / Leme", en: "Copacabana / Leme", es: "Copacabana / Leme" } },
    { id: "ipanema", name: { pt: "Ipanema / Leblon", en: "Ipanema / Leblon", es: "Ipanema / Leblon" } },
    { id: "barra", name: { pt: "Barra da Tijuca", en: "Barra da Tijuca", es: "Barra da Tijuca" } }
  ];

  /* mode: app | bus | brt | metro | vlt — min/max em minutos; cost: 1-3 */
  App.routes = {
    GIG: {
      centro:   [{ m: "app", min: 30, max: 60, c: 3 }, { m: "bus", min: 45, max: 80, c: 2 }],
      santa:    [{ m: "app", min: 35, max: 70, c: 3 }, { m: "bus", min: 50, max: 90, c: 2 }],
      botafogo: [{ m: "app", min: 35, max: 80, c: 3 }, { m: "bus", min: 55, max: 100, c: 2 }],
      copa:     [{ m: "app", min: 40, max: 90, c: 3 }, { m: "bus", min: 60, max: 110, c: 2 }],
      ipanema:  [{ m: "app", min: 45, max: 95, c: 3 }, { m: "bus", min: 60, max: 110, c: 2 }],
      barra:    [{ m: "app", min: 45, max: 90, c: 3 }, { m: "brt", min: 50, max: 90, c: 1 }]
    },
    SDU: {
      centro:   [{ m: "vlt", min: 5, max: 20, c: 1 }, { m: "app", min: 5, max: 15, c: 2 }],
      santa:    [{ m: "app", min: 10, max: 25, c: 2 }, { m: "metro", min: 20, max: 35, c: 1 }],
      botafogo: [{ m: "metro", min: 15, max: 25, c: 1 }, { m: "app", min: 15, max: 35, c: 2 }],
      copa:     [{ m: "metro", min: 25, max: 40, c: 1 }, { m: "app", min: 20, max: 45, c: 2 }],
      ipanema:  [{ m: "metro", min: 30, max: 45, c: 1 }, { m: "app", min: 25, max: 50, c: 2 }],
      barra:    [{ m: "metro", min: 60, max: 80, c: 1 }, { m: "app", min: 40, max: 80, c: 3 }]
    }
  };

  App.modeInfo = {
    app:   { e: "🚕", name: { pt: "Aplicativo ou táxi", en: "Ride-hailing app or taxi", es: "Aplicación o taxi" },
             note: { pt: "Porta a porta, com preço estimado no aplicativo. Use os pontos oficiais de táxi ou o aplicativo e evite ofertas de motoristas abordando no desembarque.", en: "Door to door, with the price estimated in the app. Use official taxi stands or the app and avoid drivers soliciting at arrivals.", es: "Puerta a puerta, con precio estimado en la aplicación. Use los puntos oficiales de taxi o la app y evite ofertas de conductores en la llegada." } },
    bus:   { e: "🚌", name: { pt: "Ônibus executivo", en: "Executive airport bus", es: "Bus ejecutivo" },
             note: { pt: "Ônibus com ar-condicionado e espaço para malas, saindo do aeroporto. Confirme linhas e paradas atuais antes de embarcar; se preciso, complete o trajeto de aplicativo.", en: "Air-conditioned bus with luggage space from the airport. Confirm current routes and stops before boarding; complete the trip by app if needed.", es: "Bus con aire acondicionado y espacio para maletas desde el aeropuerto. Confirme líneas y paradas vigentes antes de abordar; si hace falta, complete el trayecto en app." } },
    brt:   { e: "🚍", name: { pt: "BRT Transcarioca", en: "BRT Transcarioca", es: "BRT Transcarioca" },
             note: { pt: "Corredor expresso que liga o Galeão à Barra da Tijuca (terminal Alvorada). Econômico, mas lotado em horários de pico — pouco prático com muita bagagem.", en: "Express corridor linking Galeão to Barra da Tijuca (Alvorada terminal). Cheap, but crowded at rush hour — not practical with lots of luggage.", es: "Corredor expreso que une el Galeão con Barra da Tijuca (terminal Alvorada). Económico, pero lleno en horas pico; poco práctico con mucho equipaje." } },
    metro: { e: "🚇", name: { pt: "Metrô", en: "Metro", es: "Metro" },
             note: { pt: "Rápido e sem trânsito. Do aeroporto, siga a pé ou de VLT até o metrô (Cinelândia/Carioca) e conecte ao seu destino pelas linhas 1, 2 e 4.", en: "Fast and traffic-free. From the airport, walk or take the VLT to the metro (Cinelândia/Carioca) and connect to your destination via lines 1, 2 and 4.", es: "Rápido y sin tráfico. Desde el aeropuerto, camine o tome el VLT hasta el metro (Cinelândia/Carioca) y conecte a su destino por las líneas 1, 2 y 4." } },
    vlt:   { e: "🚊", name: { pt: "VLT Carioca", en: "Rio VLT tram", es: "VLT Carioca" },
             note: { pt: "O VLT para no Santos Dumont e circula pelo Centro e pela Zona Portuária, com conexões ao metrô e às barcas.", en: "The VLT stops at Santos Dumont and runs through downtown and the port area, connecting to the metro and ferries.", es: "El VLT para en el Santos Dumont y circula por el Centro y la Zona Portuaria, con conexiones al metro y a los ferris." } }
  };

  /* Modais urbanos */
  App.urban = [
    { e: "🚇", g: ["#ff9f1c", "#ffb703"], name: { pt: "Metrô", en: "Metro", es: "Metro" },
      desc: { pt: "O jeito mais rápido e seguro de ir ao Centro, Flamengo, Botafogo, Copacabana, Ipanema e Barra. Três linhas: 1 (laranja), 2 (verde) e 4 (amarela).", en: "The fastest, safest way to reach downtown, Flamengo, Botafogo, Copacabana, Ipanema and Barra. Three lines: 1 (orange), 2 (green) and 4 (yellow).", es: "La forma más rápida y segura de ir al Centro, Flamengo, Botafogo, Copacabana, Ipanema y Barra. Tres líneas: 1 (naranja), 2 (verde) y 4 (amarilla)." } },
    { e: "🚊", g: ["#12a4a0", "#2fa4c9"], name: { pt: "VLT Carioca", en: "Rio VLT", es: "VLT Carioca" },
      desc: { pt: "Bonde moderno que conecta Santos Dumont, Centro e Zona Portuária (Museu do Amanhã, AquaRio), com integração a metrô, trem e barcas.", en: "Modern tram connecting Santos Dumont, downtown and the port area (Museum of Tomorrow, AquaRio), integrated with metro, train and ferries.", es: "Tranvía moderno que conecta Santos Dumont, el Centro y la Zona Portuaria (Museo del Mañana, AquaRio), con integración a metro, tren y ferris." } },
    { e: "🚍", g: ["#1f9d62", "#8ee3c7"], name: { pt: "BRT", en: "BRT", es: "BRT" },
      desc: { pt: "Corredores expressos (TransOeste, TransCarioca, TransOlímpica) que ligam a Barra, o Galeão e a Zona Oeste. Úteis para trajetos longos.", en: "Express corridors (TransOeste, TransCarioca, TransOlímpica) linking Barra, Galeão and the West Zone. Useful for long trips.", es: "Corredores expresos (TransOeste, TransCarioca, TransOlímpica) que unen Barra, Galeão y la Zona Oeste. Útiles para trayectos largos." } },
    { e: "🚆", g: ["#7b4fd6", "#b890ff"], name: { pt: "Trem (SuperVia)", en: "Suburban train (SuperVia)", es: "Tren (SuperVia)" },
      desc: { pt: "Liga o Centro à Zona Norte e à Baixada. Útil para o Maracanã e a Feira de São Cristóvão (também acessíveis de metrô).", en: "Links downtown to the North Zone and Baixada. Useful for Maracanã and São Cristóvão Fair (also reachable by metro).", es: "Une el Centro con la Zona Norte y la Baixada. Útil para el Maracaná y la Feria de São Cristóvão (también accesibles en metro)." } },
    { e: "⛴️", g: ["#0e5a8a", "#12a4a0"], name: { pt: "Barcas (Rio–Niterói)", en: "Ferries (Rio–Niterói)", es: "Ferris (Río–Niterói)" },
      desc: { pt: "Travessia da Baía de Guanabara a partir da Praça XV, com vistas lindas do skyline e acesso ao Museu de Arte Contemporânea de Niterói (de Niemeyer).", en: "Crosses Guanabara Bay from Praça XV, with great skyline views and access to Niterói’s Contemporary Art Museum (by Niemeyer).", es: "Cruza la Bahía de Guanabara desde la Praça XV, con hermosas vistas del skyline y acceso al Museo de Arte Contemporáneo de Niterói (de Niemeyer)." } },
    { e: "🚌", g: ["#ff6b4a", "#ff9f1c"], name: { pt: "Ônibus urbanos", en: "City buses", es: "Buses urbanos" },
      desc: { pt: "Cobrem toda a cidade, mas podem ser confusos para visitantes. Use um aplicativo de mapas para rotas em tempo real e fique atento aos seus pertences.", en: "They cover the whole city but can be confusing for visitors. Use a maps app for real-time routes and watch your belongings.", es: "Cubren toda la ciudad, pero pueden ser confusos para visitantes. Use una app de mapas para rutas en tiempo real y cuide sus pertenencias." } },
    { e: "🚋", g: ["#d4572a", "#f2a65a"], name: { pt: "Bonde de Santa Teresa", en: "Santa Teresa Tram", es: "Tranvía de Santa Teresa" },
      desc: { pt: "Bonde histórico que sobe o bairro cruzando os Arcos da Lapa. Passeio panorâmico e pitoresco; confirme dias e horários de operação.", en: "Historic tram climbing the neighborhood across the Lapa Arches. A scenic, picturesque ride; check days and operating hours.", es: "Tranvía histórico que sube el barrio cruzando los Arcos de la Lapa. Paseo panorámico y pintoresco; consulte días y horarios." } },
    { e: "📱", g: ["#13212e", "#5b6b7a"], name: { pt: "Aplicativos e táxi", en: "Ride-hailing & taxi", es: "Aplicaciones y taxi" },
      desc: { pt: "Opção prática à noite e para chegar a trilhas e mirantes. Compare preços e confirme a placa e o motorista antes de embarcar.", en: "A practical option at night and to reach trails and viewpoints. Compare prices and confirm the plate and driver before getting in.", es: "Opción práctica de noche y para llegar a senderos y miradores. Compare precios y confirme la placa y el conductor antes de subir." } },
    { e: "🚲", g: ["#2e8b57", "#a8e063"], name: { pt: "Bicicleta e ciclovia", en: "Biking & bike paths", es: "Bicicleta y ciclovía" },
      desc: { pt: "A orla de Copacabana a Leblon, a Lagoa e o Aterro do Flamengo têm ciclovias lindas. Há estações de bicicletas compartilhadas e locadoras.", en: "The shoreline from Copacabana to Leblon, the Lagoon and Flamengo Park have beautiful bike paths. Shared-bike stations and rental shops are available.", es: "La costanera de Copacabana a Leblon, la Laguna y el Aterro do Flamengo tienen hermosas ciclovías. Hay estaciones de bicicletas compartidas y alquiler." } }
  ];

  /* Linhas de metrô (estações principais, p/ turistas) — confira o mapa oficial */
  App.metroLines = [
    { c: "#ff8a00", name: { pt: "Linha 1 — Laranja", en: "Line 1 — Orange", es: "Línea 1 — Naranja" },
      stations: [["Uruguai", 0], ["Saens Peña", 0], ["Estácio", 1], ["Central", 1], ["Carioca", 1], ["Cinelândia", 1], ["Glória", 0], ["Largo do Machado", 0], ["Flamengo", 0], ["Botafogo", 1], ["Cardeal Arcoverde", 0], ["Siqueira Campos", 1], ["Cantagalo", 0], ["General Osório", 1]] },
    { c: "#1f9d62", name: { pt: "Linha 2 — Verde", en: "Line 2 — Green", es: "Línea 2 — Verde" },
      stations: [["Pavuna", 0], ["Vicente de Carvalho", 0], ["Del Castilho", 0], ["Maracanã", 1], ["São Cristóvão", 1], ["Estácio", 1], ["Carioca", 1], ["Cinelândia", 1], ["Botafogo", 1]] },
    { c: "#f2c200", name: { pt: "Linha 4 — Amarela", en: "Line 4 — Yellow", es: "Línea 4 — Amarilla" },
      stations: [["General Osório", 1], ["Nossa Sra. da Paz", 0], ["Jardim de Alah", 0], ["Antero de Quental", 0], ["São Conrado", 1], ["Jardim Oceânico", 1]] }
  ];
})();
