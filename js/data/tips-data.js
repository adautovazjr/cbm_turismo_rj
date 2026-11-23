/* Dicas para passear: dicas essenciais, roteiros e checklist de mala. */
(function () {
  "use strict";
  var App = window.App = window.App || {};

  App.tips = [
    { e: "🛡️", title: { pt: "Segurança", en: "Safety", es: "Seguridad" },
      items: {
        pt: ["Na praia e em locais cheios, mantenha celular e carteira junto ao corpo e evite exibir joias ou câmeras caras.", "À noite, prefira transporte por aplicativo ou táxi oficial em vez de caminhar por ruas pouco movimentadas.", "Visite comunidades (favelas) somente com guias e operadoras credenciadas.", "Em trilhas, vá em grupo, avise alguém do seu roteiro e prefira guias credenciados para percursos longos."],
        en: ["At the beach and in crowded places, keep your phone and wallet close and avoid flashing jewelry or expensive cameras.", "At night, prefer a ride-hailing app or official taxi to walking quiet streets.", "Visit communities (favelas) only with accredited guides and operators.", "On trails, go in a group, tell someone your plan and prefer certified guides for longer routes."],
        es: ["En la playa y lugares concurridos, mantenga el celular y la billetera cerca del cuerpo y evite exhibir joyas o cámaras costosas.", "De noche, prefiera transporte por aplicación o taxi oficial en lugar de caminar por calles poco transitadas.", "Visite comunidades (favelas) solo con guías y operadores acreditados.", "En senderos, vaya en grupo, avise a alguien su recorrido y prefiera guías acreditados para trayectos largos."]
      } },
    { e: "🌤️", title: { pt: "Clima e melhor época", en: "Weather & best time to visit", es: "Clima y mejor época" },
      items: {
        pt: ["Dezembro a março: verão quente e úmido, com pancadas rápidas de chuva — ideal para praia, mas com muita gente.", "Maio a setembro: dias mais secos e agradáveis, bons para trilhas e vistas claras do Cristo e do Pão de Açúcar.", "Abril e outubro/novembro costumam equilibrar clima agradável, menos filas e preços melhores.", "Consulte o Alerta Rio e a previsão do tempo antes de subir ao Corcovado ou fazer trilhas."],
        en: ["December to March: hot, humid summer with short showers — ideal for the beach, but crowded.", "May to September: drier, pleasant days, good for hikes and clear views of Christ the Redeemer and Sugarloaf.", "April and October/November often balance pleasant weather, shorter lines and better prices.", "Check Alerta Rio and the forecast before going up Corcovado or hiking."],
        es: ["Diciembre a marzo: verano caluroso y húmedo, con chubascos rápidos; ideal para la playa, pero con mucha gente.", "Mayo a septiembre: días más secos y agradables, buenos para senderos y vistas claras del Cristo y el Pan de Azúcar.", "Abril y octubre/noviembre suelen equilibrar clima agradable, menos filas y mejores precios.", "Consulte Alerta Rio y el pronóstico antes de subir al Corcovado o hacer senderos."]
      } },
    { e: "☀️", title: { pt: "Sol, saúde e hidratação", en: "Sun, health & hydration", es: "Sol, salud e hidratación" },
      items: {
        pt: ["A radiação UV é forte o ano todo: use protetor solar FPS 30+ (reaplique), chapéu e óculos.", "Beba bastante água e experimente água de coco; evite sol entre 10h e 16h.", "Prefira água mineral ou filtrada.", "Antes de viajar, consulte fontes oficiais sobre vacinas recomendadas (como febre amarela) e seguro-viagem."],
        en: ["UV radiation is strong all year: use SPF 30+ sunscreen (and reapply), a hat and sunglasses.", "Drink lots of water and try coconut water; avoid the sun between 10 a.m. and 4 p.m.", "Prefer bottled or filtered water.", "Before traveling, check official sources about recommended vaccines (such as yellow fever) and travel insurance."],
        es: ["La radiación UV es fuerte todo el año: use protector solar FPS 30+ (reaplique), sombrero y gafas.", "Beba mucha agua y pruebe el agua de coco; evite el sol entre las 10 h y las 16 h.", "Prefiera agua mineral o filtrada.", "Antes de viajar, consulte fuentes oficiales sobre vacunas recomendadas (como fiebre amarilla) y seguro de viaje."]
      } },
    { e: "💳", title: { pt: "Dinheiro e pagamentos", en: "Money & payments", es: "Dinero y pagos" },
      items: {
        pt: ["Cartões e Pix são aceitos na maior parte dos lugares; leve um pouco de dinheiro vivo para ambulantes e quiosques.", "Muitos restaurantes incluem 10% de serviço na conta (opcional por lei).", "Confira a taxa de câmbio e prefira casas de câmbio oficiais ou caixas eletrônicos de bancos."],
        en: ["Cards and Pix are accepted almost everywhere; carry a bit of cash for beach vendors and kiosks.", "Many restaurants add a 10% service charge to the bill (optional by law).", "Check the exchange rate and prefer official exchange offices or bank ATMs."],
        es: ["Tarjetas y Pix se aceptan casi en todas partes; lleve algo de efectivo para vendedores ambulantes y quioscos.", "Muchos restaurantes incluyen un 10 % de servicio en la cuenta (opcional por ley).", "Verifique el tipo de cambio y prefiera casas de cambio oficiales o cajeros de bancos."]
      } },
    { e: "🗣️", title: { pt: "Idioma e cultura", en: "Language & culture", es: "Idioma y cultura" },
      items: {
        pt: ["Cariocas são sociáveis e informais; cumprimentar com um sorriso ajuda muito.", "Fora das áreas turísticas, o inglês é limitado — um aplicativo tradutor ajuda.", "Na praia, é comum alugar cadeiras e guarda-sóis dos quiosques e comprar petiscos de ambulantes.", "Respeite o ambiente: não alimente macacos (micos) e leve o lixo com você."],
        en: ["Cariocas are sociable and informal; a smile goes a long way.", "Outside tourist areas English is limited — a translation app helps.", "At the beach it is common to rent chairs and umbrellas from kiosks and buy snacks from vendors.", "Respect nature: do not feed monkeys (marmosets) and take your trash with you."],
        es: ["Los cariocas son sociables e informales; una sonrisa ayuda mucho.", "Fuera de las zonas turísticas el inglés es limitado; una aplicación de traducción ayuda.", "En la playa es común alquilar sillas y sombrillas de los quioscos y comprar bocadillos a los vendedores.", "Respete el entorno: no alimente a los monos (micos) y lleve su basura."]
      } },
    { e: "🚨", title: { pt: "Emergências e contatos úteis", en: "Emergencies & useful contacts", es: "Emergencias y contactos útiles" },
      items: {
        pt: ["Polícia: 190 · SAMU (ambulância): 192 · Bombeiros: 193.", "A Delegacia Especial de Apoio ao Turismo (DEAT), no Leblon, atende turistas — inclusive em outros idiomas.", "Guarde cópias digitais de passaporte e documentos em local separado."],
        en: ["Police: 190 · SAMU (ambulance): 192 · Fire brigade: 193.", "The Tourist Police Station (DEAT), in Leblon, assists visitors — including in other languages.", "Keep digital copies of your passport and documents stored separately."],
        es: ["Policía: 190 · SAMU (ambulancia): 192 · Bomberos: 193.", "La Delegación Especial de Apoyo al Turismo (DEAT), en Leblon, atiende a turistas, incluso en otros idiomas.", "Guarde copias digitales del pasaporte y documentos en un lugar separado."]
      } },
    { e: "🔌", title: { pt: "Tomadas e comunicação", en: "Plugs & connectivity", es: "Enchufes y conectividad" },
      items: {
        pt: ["O Brasil usa tomadas padrão tipo N; a tensão varia (127 V ou 220 V) — verifique o seu aparelho.", "Wi-Fi gratuito é comum em hotéis, cafés e shoppings; considere um chip ou eSIM local."],
        en: ["Brazil uses type N plugs; voltage varies (127 V or 220 V) — check your device.", "Free Wi-Fi is common in hotels, cafés and malls; consider a local SIM or eSIM."],
        es: ["Brasil usa enchufes tipo N; el voltaje varía (127 V o 220 V): verifique su equipo.", "El Wi-Fi gratuito es común en hoteles, cafés y centros comerciales; considere un chip o eSIM local."]
      } }
  ];

  /* Roteiros */
  App.itineraries = {
    d1: [
      { title: { pt: "Clássicos do Rio", en: "Rio’s greatest hits", es: "Los clásicos de Río" },
        m: { pt: "Cristo Redentor logo cedo, com céu limpo e menos filas.", en: "Christ the Redeemer first thing, with clear skies and shorter lines.", es: "Cristo Redentor a primera hora, con cielo despejado y menos filas." },
        a: { pt: "Almoço em Santa Teresa ou Cosme Velho e caminhada pelo Jardim Botânico / Parque Lage.", en: "Lunch in Santa Teresa or Cosme Velho, then a walk through the Botanical Garden / Lage Park.", es: "Almuerzo en Santa Teresa o Cosme Velho y caminata por el Jardín Botánico / Parque Lage." },
        n: { pt: "Pão de Açúcar no pôr do sol e jantar na Zona Sul.", en: "Sugarloaf at sunset and dinner in the South Zone.", es: "Pan de Azúcar en la puesta de sol y cena en la Zona Sur." } }
    ],
    d3: [
      { title: { pt: "Clássicos e Zona Sul", en: "Classics & South Zone", es: "Clásicos y Zona Sur" },
        m: { pt: "Cristo Redentor logo cedo.", en: "Christ the Redeemer first thing.", es: "Cristo Redentor a primera hora." },
        a: { pt: "Almoço no Leblon, caminhada na Lagoa e praia em Ipanema.", en: "Lunch in Leblon, a stroll around the Lagoon and beach time in Ipanema.", es: "Almuerzo en Leblon, caminata por la Laguna y playa en Ipanema." },
        n: { pt: "Pôr do sol no Arpoador e jantar em Ipanema.", en: "Sunset at Arpoador and dinner in Ipanema.", es: "Puesta de sol en Arpoador y cena en Ipanema." } },
      { title: { pt: "Natureza e vistas", en: "Nature & views", es: "Naturaleza y vistas" },
        m: { pt: "Floresta da Tijuca: cachoeira e mirantes.", en: "Tijuca Forest: waterfall and viewpoints.", es: "Bosque de la Tijuca: cascada y miradores." },
        a: { pt: "Jardim Botânico e Parque Lage com café no palacete.", en: "Botanical Garden and Lage Park with coffee at the mansion.", es: "Jardín Botánico y Parque Lage con café en el palacete." },
        n: { pt: "Pão de Açúcar no pôr do sol e jantar na Urca ou em Botafogo.", en: "Sugarloaf at sunset and dinner in Urca or Botafogo.", es: "Pan de Azúcar en la puesta de sol y cena en Urca o Botafogo." } },
      { title: { pt: "Centro, história e samba", en: "Downtown, history & samba", es: "Centro, historia y samba" },
        m: { pt: "Centro Histórico, Theatro Municipal e Confeitaria Colombo.", en: "Historic downtown, Municipal Theatre and Confeitaria Colombo.", es: "Centro Histórico, Teatro Municipal y Confeitaria Colombo." },
        a: { pt: "Zona Portuária: Museu do Amanhã, murais e VLT; depois Santa Teresa e Escadaria Selarón.", en: "Port area: Museum of Tomorrow, murals and the VLT; then Santa Teresa and Selarón Steps.", es: "Zona Portuaria: Museo del Mañana, murales y VLT; luego Santa Teresa y la Escalera Selarón." },
        n: { pt: "Roda de samba na Pedra do Sal (segunda) ou na Lapa.", en: "Samba circle at Pedra do Sal (Mondays) or in Lapa.", es: "Ronda de samba en Pedra do Sal (lunes) o en la Lapa." } }
    ],
    d5: [
      { title: { pt: "Clássicos e Zona Sul", en: "Classics & South Zone", es: "Clásicos y Zona Sur" },
        m: { pt: "Cristo Redentor logo cedo.", en: "Christ the Redeemer first thing.", es: "Cristo Redentor a primera hora." },
        a: { pt: "Almoço no Leblon, Lagoa e praia em Ipanema.", en: "Lunch in Leblon, the Lagoon and beach time in Ipanema.", es: "Almuerzo en Leblon, Laguna y playa en Ipanema." },
        n: { pt: "Pôr do sol no Arpoador e jantar em Ipanema.", en: "Sunset at Arpoador and dinner in Ipanema.", es: "Puesta de sol en Arpoador y cena en Ipanema." } },
      { title: { pt: "Natureza e vistas", en: "Nature & views", es: "Naturaleza y vistas" },
        m: { pt: "Floresta da Tijuca: cachoeira e mirantes.", en: "Tijuca Forest: waterfall and viewpoints.", es: "Bosque de la Tijuca: cascada y miradores." },
        a: { pt: "Jardim Botânico e Parque Lage.", en: "Botanical Garden and Lage Park.", es: "Jardín Botánico y Parque Lage." },
        n: { pt: "Pão de Açúcar no pôr do sol.", en: "Sugarloaf at sunset.", es: "Pan de Azúcar en la puesta de sol." } },
      { title: { pt: "Centro, história e samba", en: "Downtown, history & samba", es: "Centro, historia y samba" },
        m: { pt: "Centro Histórico e Confeitaria Colombo.", en: "Historic downtown and Confeitaria Colombo.", es: "Centro Histórico y Confeitaria Colombo." },
        a: { pt: "Museu do Amanhã, Zona Portuária e Santa Teresa.", en: "Museum of Tomorrow, the port area and Santa Teresa.", es: "Museo del Mañana, Zona Portuaria y Santa Teresa." },
        n: { pt: "Samba na Lapa ou Pedra do Sal.", en: "Samba in Lapa or at Pedra do Sal.", es: "Samba en la Lapa o Pedra do Sal." } },
      { title: { pt: "Aventura e praias selvagens", en: "Adventure & wild beaches", es: "Aventura y playas salvajes" },
        m: { pt: "Voo livre em São Conrado (se o tempo permitir).", en: "Hang gliding in São Conrado (weather permitting).", es: "Vuelo libre en São Conrado (si el clima lo permite)." },
        a: { pt: "Prainha e Grumari: mar aberto e natureza.", en: "Prainha and Grumari: open sea and nature.", es: "Prainha y Grumari: mar abierto y naturaleza." },
        n: { pt: "Jantar de frutos do mar na Barra ou no Recreio.", en: "Seafood dinner in Barra or Recreio.", es: "Cena de mariscos en Barra o Recreio." } },
      { title: { pt: "Futebol e cultura nordestina", en: "Football & Northeastern culture", es: "Fútbol y cultura nordestina" },
        m: { pt: "Tour no Maracanã.", en: "Maracanã Stadium tour.", es: "Tour por el Maracaná." },
        a: { pt: "Feira de São Cristóvão: comida nordestina e forró.", en: "São Cristóvão Fair: Northeastern food and forró.", es: "Feria de São Cristóvão: comida nordestina y forró." },
        n: { pt: "Último pôr do sol na praia e feijoada de despedida (sábado) ou chopp em um boteco tradicional.", en: "Last sunset on the beach and a farewell feijoada (Saturday) or draft beer at a traditional bar.", es: "Última puesta de sol en la playa y feijoada de despedida (sábado) o cerveza de barril en un bar tradicional." } }
    ]
  };

  App.checklist = [
    { id: "docs", e: "🛂", t: { pt: "Passaporte / documento de identidade", en: "Passport / ID", es: "Pasaporte / documento de identidad" } },
    { id: "docs-copy", e: "📄", t: { pt: "Cópias digitais dos documentos", en: "Digital copies of documents", es: "Copias digitales de documentos" } },
    { id: "sunscreen", e: "🧴", t: { pt: "Protetor solar FPS 30+", en: "SPF 30+ sunscreen", es: "Protector solar FPS 30+" } },
    { id: "hat", e: "🕶️", t: { pt: "Chapéu e óculos de sol", en: "Hat and sunglasses", es: "Sombrero y gafas de sol" } },
    { id: "swim", e: "🩱", t: { pt: "Roupa de banho e canga", en: "Swimwear and a beach wrap", es: "Ropa de baño y pareo" } },
    { id: "light", e: "👕", t: { pt: "Roupas leves e respiráveis", en: "Light, breathable clothing", es: "Ropa ligera y transpirable" } },
    { id: "rain", e: "🌧️", t: { pt: "Capa de chuva leve (no verão)", en: "Light rain jacket (summer)", es: "Impermeable ligero (en verano)" } },
    { id: "shoes", e: "👟", t: { pt: "Calçado confortável para trilhas e ladeiras", en: "Comfortable shoes for trails and hills", es: "Calzado cómodo para senderos y cuestas" } },
    { id: "bottle", e: "💧", t: { pt: "Garrafa de água reutilizável", en: "Reusable water bottle", es: "Botella de agua reutilizable" } },
    { id: "charger", e: "🔋", t: { pt: "Carregador portátil", en: "Portable charger", es: "Cargador portátil" } },
    { id: "plug", e: "🔌", t: { pt: "Adaptador de tomada tipo N", en: "Type N plug adapter", es: "Adaptador de enchufe tipo N" } },
    { id: "bag", e: "🎒", t: { pt: "Mochila leve e discreta", en: "Light, discreet daypack", es: "Mochila ligera y discreta" } },
    { id: "repellent", e: "🦟", t: { pt: "Repelente para trilhas", en: "Insect repellent for trails", es: "Repelente para senderos" } },
    { id: "insurance", e: "🩺", t: { pt: "Seguro-viagem e remédios pessoais", en: "Travel insurance and personal medicines", es: "Seguro de viaje y medicamentos personales" } }
  ];
})();
