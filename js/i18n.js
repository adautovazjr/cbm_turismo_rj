/* ==========================================================================
   Dicionário de interface — Português (Brasil) · English · Español
   Textos dos dados (atrações, calendário etc.) ficam em js/data/*.js
   Use ’ (apóstrofo tipográfico) em vez de ' dentro dos textos.
   ========================================================================== */
(function () {
  "use strict";
  var App = window.App = window.App || {};
  var D = App.dict = App.dict || {};
  function d(key, pt, en, es) { D[key] = { pt: pt, en: en, es: es }; }

  /* ---------- Geral ---------- */
  d("a11y.skip", "Pular para o conteúdo", "Skip to content", "Saltar al contenido");
  d("brand.tag", "Descubra a Cidade Maravilhosa", "Discover the Marvelous City", "Descubre la Ciudad Maravillosa");
  d("nav.home", "Início", "Home", "Inicio");
  d("nav.calendar", "Calendário", "Calendar", "Calendario");
  d("nav.attractions", "Pontos turísticos", "Attractions", "Atracciones");
  d("nav.food", "Gastronomia", "Food & Drink", "Gastronomía");
  d("nav.beaches", "Praias", "Beaches", "Playas");
  d("nav.tips", "Dicas", "Tips", "Consejos");
  d("nav.mobility", "Mobilidade", "Getting Around", "Movilidad");
  d("nav.aria", "Navegação principal", "Main navigation", "Navegación principal");
  d("nav.menu", "Abrir menu", "Open menu", "Abrir menú");
  d("lang.label", "Idioma", "Language", "Idioma");
  d("lang.name.pt", "Português (Brasil)", "Portuguese (Brazil)", "Portugués (Brasil)");
  d("lang.name.en", "English", "English", "Inglés");
  d("lang.name.es", "Español", "Spanish", "Español");

  d("footer.about", "Protótipo de site de turismo para divulgar o Rio de Janeiro: natureza, cultura, gastronomia e muito samba.", "A tourism website prototype promoting Rio de Janeiro: nature, culture, food and plenty of samba.", "Prototipo de sitio turístico para promocionar Río de Janeiro: naturaleza, cultura, gastronomía y mucho samba.");
  d("footer.explore", "Explore", "Explore", "Explora");
  d("footer.emergency.title", "Emergências no Brasil", "Emergencies in Brazil", "Emergencias en Brasil");
  d("footer.emergency.police", "Polícia: 190", "Police: 190", "Policía: 190");
  d("footer.emergency.samu", "SAMU (ambulância): 192", "SAMU (ambulance): 192", "SAMU (ambulancia): 192");
  d("footer.emergency.fire", "Bombeiros: 193", "Fire brigade: 193", "Bomberos: 193");
  d("footer.disclaimer", "Protótipo de demonstração. Informações ilustrativas — confirme nos canais oficiais.", "Demonstration prototype. Illustrative information — please confirm with official sources.", "Prototipo de demostración. Información ilustrativa: confirme en los canales oficiales.");
  d("footer.credits", "Créditos das fotos", "Photo credits", "Créditos de las fotos");
  d("photo.illus", "Foto ilustrativa", "Illustrative photo", "Foto ilustrativa");
  d("photo.illus.long", "Foto ilustrativa do prato/ambiente típico, não do estabelecimento.", "Illustrative photo of the typical dish/setting, not of the venue itself.", "Foto ilustrativa del plato/ambiente típico, no del establecimiento.");
  d("meta.title.credits", "Créditos das fotos · Rio Viva", "Photo credits · Rio Viva", "Créditos de las fotos · Rio Viva");
  d("meta.desc.credits", "Autores e licenças das fotos usadas no site.", "Authors and licenses of the photos used on the site.", "Autores y licencias de las fotos usadas en el sitio.");
  d("credits.title", "Créditos das fotos", "Photo credits", "Créditos de las fotos");
  d("credits.intro", "As fotos dos pontos turísticos e da gastronomia vêm do Wikimedia Commons, sob licenças livres (Creative Commons, domínio público). Agradecemos aos autores abaixo.", "The photos of attractions and food come from Wikimedia Commons under free licenses (Creative Commons, public domain). Thanks to the authors below.", "Las fotos de atractivos y gastronomía provienen de Wikimedia Commons, con licencias libres (Creative Commons, dominio público). Gracias a los autores a continuación.");
  d("credits.attractions", "Pontos turísticos", "Attractions", "Atractivos turísticos");
  d("credits.dishes", "Pratos típicos", "Typical dishes", "Platos típicos");
  d("credits.places", "Onde comer", "Where to eat", "Dónde comer");
  d("credits.by", "Autor", "Author", "Autor");
  d("credits.original", "Ver original", "View original", "Ver original");
  d("footer.rights", "© Rio Viva — projeto de demonstração", "© Rio Viva — demonstration project", "© Rio Viva — proyecto de demostración");

  d("meta.title.home", "Rio Viva — Descubra o Rio de Janeiro", "Rio Viva — Discover Rio de Janeiro", "Rio Viva — Descubre Río de Janeiro");
  d("meta.title.calendar", "Calendário de feriados e datas · Rio Viva", "Holidays & dates calendar · Rio Viva", "Calendario de feriados y fechas · Rio Viva");
  d("meta.title.attractions", "Pontos turísticos · Rio Viva", "Attractions · Rio Viva", "Atracciones · Rio Viva");
  d("meta.title.food", "Gastronomia · Rio Viva", "Food & Drink · Rio Viva", "Gastronomía · Rio Viva");
  d("meta.title.beaches", "Melhores praias · Rio Viva", "Best beaches · Rio Viva", "Mejores playas · Rio Viva");
  d("meta.title.tips", "Dicas para passear · Rio Viva", "Sightseeing tips · Rio Viva", "Consejos para pasear · Rio Viva");
  d("meta.title.mobility", "Aeroportos e mobilidade · Rio Viva", "Airports & getting around · Rio Viva", "Aeropuertos y movilidad · Rio Viva");
  d("meta.desc.home", "Guia de turismo do Rio de Janeiro: calendário, pontos turísticos, gastronomia, praias, dicas e mobilidade.", "Rio de Janeiro travel guide: calendar, attractions, food, beaches, tips and getting around.", "Guía turística de Río de Janeiro: calendario, atracciones, gastronomía, playas, consejos y movilidad.");
  d("meta.desc.calendar", "Feriados nacionais, estaduais e municipais e datas comemorativas do Rio de Janeiro.", "National, state and city holidays and commemorative dates in Rio de Janeiro.", "Feriados nacionales, estatales y municipales y fechas conmemorativas de Río de Janeiro.");
  d("meta.desc.attractions", "Pontos turísticos recomendados no Rio de Janeiro.", "Recommended attractions in Rio de Janeiro.", "Atracciones recomendadas en Río de Janeiro.");
  d("meta.desc.food", "Pratos típicos e melhores lugares para comer no Rio de Janeiro.", "Typical dishes and the best places to eat in Rio de Janeiro.", "Platos típicos y los mejores lugares para comer en Río de Janeiro.");
  d("meta.desc.beaches", "As melhores praias do Rio de Janeiro para cada perfil.", "The best beaches in Rio de Janeiro for every traveler.", "Las mejores playas de Río de Janeiro para cada perfil.");
  d("meta.desc.tips", "Dicas, roteiros e checklist para passear no Rio de Janeiro.", "Tips, itineraries and a checklist for sightseeing in Rio de Janeiro.", "Consejos, itinerarios y checklist para pasear por Río de Janeiro.");
  d("meta.desc.mobility", "Aeroportos e mobilidade urbana no Rio de Janeiro.", "Airports and urban mobility in Rio de Janeiro.", "Aeropuertos y movilidad urbana en Río de Janeiro.");

  d("common.close", "Fechar", "Close", "Cerrar");
  d("common.details", "Ver detalhes", "See details", "Ver detalles");
  d("common.openMap", "Abrir no mapa", "Open in map", "Abrir en el mapa");
  d("common.search", "Buscar…", "Search…", "Buscar…");
  d("common.results", "{n} resultado(s)", "{n} result(s)", "{n} resultado(s)");
  d("common.noResults", "Nenhum resultado encontrado. Tente outro filtro.", "No results found. Try another filter.", "No se encontraron resultados. Pruebe otro filtro.");
  d("common.duration", "Duração sugerida", "Suggested time", "Duración sugerida");
  d("common.price", "Ingresso", "Admission", "Entrada");
  d("common.bestTime", "Melhor horário", "Best time", "Mejor horario");
  d("common.tip", "Dica", "Tip", "Consejo");
  d("common.confirm", "Informações ilustrativas — confirme horários, preços e disponibilidade nos canais oficiais antes de ir.", "Illustrative information — confirm hours, prices and availability with official sources before you go.", "Información ilustrativa: confirme horarios, precios y disponibilidad en los canales oficiales antes de ir.");
  d("common.explore", "Explorar →", "Explore →", "Explorar →");
  d("price.free", "Gratuito", "Free", "Gratis");
  d("price.paid", "Pago", "Paid", "De pago");
  d("price.mixed", "Parte gratuito, parte pago", "Partly free, partly paid", "Parte gratis, parte de pago");

  /* ---------- Home ---------- */
  d("home.hero.eyebrow", "Cidade Maravilhosa", "Marvelous City", "Ciudad Maravillosa");
  d("home.hero.title", "Rio de Janeiro, onde a natureza encontra o ritmo", "Rio de Janeiro, where nature meets rhythm", "Río de Janeiro, donde la naturaleza encuentra el ritmo");
  d("home.hero.sub", "Praias, montanhas, samba e sabores num só lugar. Planeje sua viagem com datas, roteiros, dicas e mobilidade.", "Beaches, mountains, samba and flavors in one place. Plan your trip with dates, itineraries, tips and getting-around info.", "Playas, montañas, samba y sabores en un solo lugar. Planifica tu viaje con fechas, itinerarios, consejos y movilidad.");
  d("home.hero.cta1", "Explorar pontos turísticos", "Explore attractions", "Explorar atracciones");
  d("home.hero.cta2", "Ver calendário", "View calendar", "Ver calendario");
  d("home.stat.1", "Paisagem Cultural Patrimônio Mundial da UNESCO", "UNESCO World Heritage Cultural Landscape", "Paisaje Cultural Patrimonio Mundial de la UNESCO");
  d("home.stat.2", "Cristo Redentor eleito uma das Novas Sete Maravilhas", "Christ the Redeemer named one of the New Seven Wonders", "Cristo Redentor elegido una de las Nuevas Siete Maravillas");
  d("home.stat.3", "Ano de fundação da cidade", "Year the city was founded", "Año de fundación de la ciudad");
  d("home.stat.4", "Aeroportos: Galeão (GIG) e Santos Dumont (SDU)", "Airports: Galeão (GIG) and Santos Dumont (SDU)", "Aeropuertos: Galeão (GIG) y Santos Dumont (SDU)");
  d("home.explore.title", "Explore o Rio", "Explore Rio", "Explora Río");
  d("home.explore.sub", "Escolha por onde começar — tudo para planejar sua viagem em um só lugar.", "Pick where to start — everything to plan your trip in one place.", "Elige por dónde empezar: todo para planificar tu viaje en un solo lugar.");
  d("home.tile.calendar", "Feriados nacionais, estaduais e municipais, e datas comemorativas.", "National, state and city holidays, plus commemorative dates.", "Feriados nacionales, estatales y municipales, y fechas conmemorativas.");
  d("home.tile.attractions", "Do Cristo Redentor ao Centro Histórico: o que não pode faltar.", "From Christ the Redeemer to the historic downtown: the must-sees.", "Del Cristo Redentor al Centro Histórico: lo que no puede faltar.");
  d("home.tile.food", "Pratos típicos e os melhores lugares para comer e beber.", "Typical dishes and the best places to eat and drink.", "Platos típicos y los mejores lugares para comer y beber.");
  d("home.tile.beaches", "Encontre a praia ideal para o seu perfil: família, surfe ou pôr do sol.", "Find the ideal beach for you: family, surf or sunset.", "Encuentra la playa ideal para tu perfil: familia, surf o atardecer.");
  d("home.tile.tips", "Segurança, clima, roteiros de 1 a 5 dias e checklist de mala.", "Safety, weather, 1–5 day itineraries and a packing checklist.", "Seguridad, clima, itinerarios de 1 a 5 días y checklist de equipaje.");
  d("home.tile.mobility", "Aeroportos, metrô, VLT, BRT e como chegar ao seu bairro.", "Airports, metro, VLT, BRT and how to reach your neighborhood.", "Aeropuertos, metro, VLT, BRT y cómo llegar a tu barrio.");
  d("home.upcoming.title", "Próximas datas", "Upcoming dates", "Próximas fechas");
  d("home.upcoming.sub", "Feriados e datas comemorativas que podem influenciar sua viagem.", "Holidays and commemorative dates that may affect your trip.", "Feriados y fechas conmemorativas que pueden influir en tu viaje.");
  d("home.upcoming.cta", "Abrir calendário completo", "Open full calendar", "Abrir calendario completo");
  d("home.quick.title", "Monte um roteiro rápido", "Build a quick itinerary", "Arma un itinerario rápido");
  d("home.quick.sub", "Qual é o seu estilo de viagem? Receba três sugestões para começar.", "What’s your travel style? Get three suggestions to start.", "¿Cuál es tu estilo de viaje? Recibe tres sugerencias para empezar.");
  d("home.quick.beach", "🏖️ Praia", "🏖️ Beach", "🏖️ Playa");
  d("home.quick.adventure", "🪂 Aventura", "🪂 Adventure", "🪂 Aventura");
  d("home.quick.culture", "🎭 Cultura", "🎭 Culture", "🎭 Cultura");
  d("home.quick.food", "🍲 Gastronomia", "🍲 Food", "🍲 Gastronomía");
  d("home.quick.family", "👨‍👩‍👧 Família", "👨‍👩‍👧 Family", "👨‍👩‍👧 Familia");

  /* ---------- Calendário ---------- */
  d("cal.title", "Calendário de feriados e datas comemorativas", "Holidays & commemorative dates calendar", "Calendario de feriados y fechas conmemorativas");
  d("cal.intro", "Planeje sua viagem conhecendo os feriados nacionais, estaduais e municipais e as datas que movimentam o Rio.", "Plan your trip knowing the national, state and city holidays and the dates that move Rio.", "Planifica tu viaje conociendo los feriados nacionales, estatales y municipales y las fechas que mueven a Río.");
  d("cal.filters", "Filtrar por tipo de data", "Filter by date type", "Filtrar por tipo de fecha");
  d("cal.prev", "Mês anterior", "Previous month", "Mes anterior");
  d("cal.next", "Próximo mês", "Next month", "Mes siguiente");
  d("cal.month", "Mês", "Month", "Mes");
  d("cal.year", "Ano", "Year", "Año");
  d("cal.todayBtn", "Hoje", "Today", "Hoy");
  d("cal.type.national", "Feriado nacional", "National holiday", "Feriado nacional");
  d("cal.type.state", "Feriado estadual (RJ)", "State holiday (RJ)", "Feriado estatal (RJ)");
  d("cal.type.municipal", "Feriado municipal (Rio)", "City holiday (Rio)", "Feriado municipal (Río)");
  d("cal.type.event", "Data comemorativa", "Commemorative date", "Fecha conmemorativa");
  d("cal.optional", "Ponto facultativo", "Optional holiday", "Día no laborable opcional");
  d("cal.disclaimer", "Datas móveis (Carnaval, Páscoa, Corpus Christi) são calculadas automaticamente para qualquer ano. Lista ilustrativa: consulte os decretos oficiais para confirmar feriados e pontos facultativos.", "Movable dates (Carnival, Easter, Corpus Christi) are calculated automatically for any year. Illustrative list: check the official decrees to confirm holidays and optional days off.", "Las fechas móviles (Carnaval, Pascua, Corpus Christi) se calculan automáticamente para cualquier año. Lista ilustrativa: consulte los decretos oficiales para confirmar feriados y días no laborables.");
  d("cal.upcoming", "Próximas datas", "Upcoming dates", "Próximas fechas");
  d("cal.noDay", "Nenhuma data cadastrada neste dia.", "No dates listed for this day.", "No hay fechas registradas para este día.");
  d("cal.noMonth", "Nenhuma data para os filtros selecionados neste mês.", "No dates for the selected filters this month.", "No hay fechas para los filtros seleccionados este mes.");
  d("cal.monthList", "Datas de {month}", "Dates in {month}", "Fechas de {month}");
  d("cal.today", "hoje", "today", "hoy");
  d("cal.tomorrow", "amanhã", "tomorrow", "mañana");
  d("cal.inDays", "em {n} dias", "in {n} days", "en {n} días");
  d("cal.addIcs", "Adicionar ao meu calendário (.ics)", "Add to my calendar (.ics)", "Añadir a mi calendario (.ics)");

  /* ---------- Pontos turísticos ---------- */
  d("attr.title", "Pontos turísticos recomendados", "Recommended attractions", "Atracciones recomendadas");
  d("attr.intro", "Dos cartões-postais às descobertas fora do óbvio: filtre por interesse e veja dicas práticas de cada lugar.", "From postcard icons to off-the-beaten-path finds: filter by interest and get practical tips for each place.", "De las postales clásicas a los descubrimientos poco obvios: filtra por interés y mira consejos prácticos de cada lugar.");
  d("attr.filters", "Filtrar por categoria", "Filter by category", "Filtrar por categoría");
  d("attr.cat.all", "Todos", "All", "Todos");
  d("attr.cat.icons", "Ícones", "Icons", "Íconos");
  d("attr.cat.nature", "Natureza", "Nature", "Naturaleza");
  d("attr.cat.culture", "Cultura e história", "Culture & history", "Cultura e historia");
  d("attr.cat.views", "Vistas", "Views", "Vistas");
  d("attr.cat.adventure", "Aventura", "Adventure", "Aventura");
  d("attr.cat.family", "Em família", "Family", "En familia");

  /* ---------- Gastronomia ---------- */
  d("food.title", "Gastronomia carioca", "Carioca gastronomy", "Gastronomía carioca");
  d("food.intro", "Sabores que contam a história da cidade: botecos centenários, feijoada, petiscos de praia e muito mais.", "Flavors that tell the city’s story: century-old bars, feijoada, beach snacks and more.", "Sabores que cuentan la historia de la ciudad: bares centenarios, feijoada, bocadillos de playa y mucho más.");
  d("food.tab.dishes", "O que provar", "What to try", "Qué probar");
  d("food.tab.places", "Onde comer", "Where to eat", "Dónde comer");
  d("food.filters", "Filtrar por tipo de lugar", "Filter by type of place", "Filtrar por tipo de lugar");
  d("food.price.label", "Faixa de preço", "Price range", "Rango de precio");
  d("food.price.all", "Todos os preços", "All prices", "Todos los precios");
  d("food.type.all", "Todos", "All", "Todos");
  d("food.type.traditional", "Cozinha tradicional", "Traditional cuisine", "Cocina tradicional");
  d("food.type.cafe", "Café e doces", "Café & sweets", "Café y dulces");
  d("food.type.bar", "Bar e boteco", "Bars & pubs", "Bares y botecos");
  d("food.type.steak", "Churrasco", "Steakhouse", "Parrilla");
  d("food.type.market", "Feira e mercado", "Fair & market", "Feria y mercado");
  d("food.type.samba", "Samba e petiscos", "Samba & snacks", "Samba y picadas");
  d("food.since", "desde {y}", "since {y}", "desde {y}");
  d("food.modal.type", "Tipo", "Type", "Tipo");
  d("food.modal.price", "Faixa de preço", "Price range", "Rango de precio");
  d("food.modal.try", "Experimente", "Try", "Prueba");

  /* ---------- Praias ---------- */
  d("beach.title", "As melhores praias do Rio", "The best beaches in Rio", "Las mejores playas de Río");
  d("beach.intro", "Escolha pelo seu perfil — família, surfe, pôr do sol, natureza ou agito — e compare as notas de cada praia.", "Choose by your profile — family, surf, sunset, nature or nightlife — and compare each beach’s scores.", "Elige según tu perfil — familia, surf, atardecer, naturaleza o movida — y compara las notas de cada playa.");
  d("beach.filters", "Filtrar por perfil", "Filter by profile", "Filtrar por perfil");
  d("beach.sort.label", "Ordenar por", "Sort by", "Ordenar por");
  d("beach.sort.default", "Ordem geográfica", "Geographic order", "Orden geográfico");
  d("beach.sort.calm", "Mais calma para nadar", "Calmest for swimming", "Más calma para nadar");
  d("beach.sort.surf", "Melhores ondas", "Best waves", "Mejores olas");
  d("beach.sort.quiet", "Menos movimentada", "Least crowded", "Menos concurrida");
  d("beach.sort.view", "Mais bonita", "Most scenic", "Más bonita");
  d("beach.tag.all", "Todas", "All", "Todas");
  d("beach.tag.family", "Família", "Family", "Familia");
  d("beach.tag.surf", "Surfe", "Surf", "Surf");
  d("beach.tag.sunset", "Pôr do sol", "Sunset", "Atardecer");
  d("beach.tag.nature", "Natureza", "Nature", "Naturaleza");
  d("beach.tag.party", "Agito", "Lively", "Movida");
  d("beach.tag.lgbt", "LGBTQIA+ friendly", "LGBTQIA+ friendly", "LGBTQIA+ friendly");
  d("beach.tag.quiet", "Tranquila", "Quiet", "Tranquila");
  d("beach.tag.adventure", "Aventura", "Adventure", "Aventura");
  d("beach.metric.calm", "Águas calmas", "Calm waters", "Aguas calmas");
  d("beach.metric.surf", "Ondas", "Waves", "Olas");
  d("beach.metric.crowd", "Movimento", "Crowds", "Movimiento");
  d("beach.metric.infra", "Estrutura", "Facilities", "Infraestructura");
  d("beach.metric.view", "Paisagem", "Scenery", "Paisaje");
  d("beach.zone.south", "Zona Sul", "South Zone", "Zona Sur");
  d("beach.zone.west", "Zona Oeste", "West Zone", "Zona Oeste");
  d("beach.safety.title", "Antes de entrar no mar:", "Before entering the water:", "Antes de entrar al mar:");
  d("beach.safety.text", "observe as bandeiras e as orientações dos guarda-vidas (Corpo de Bombeiros), consulte o boletim de balneabilidade do INEA e cuidado com correntes de retorno. Use protetor solar e não deixe objetos de valor sem vigilância.", "watch the flags and follow lifeguard instructions (Fire Department), check INEA’s water-quality bulletin and beware of rip currents. Use sunscreen and never leave valuables unattended.", "observe las banderas y las indicaciones de los salvavidas (Cuerpo de Bomberos), consulte el boletín de balneabilidad del INEA y cuidado con las corrientes de retorno. Use protector solar y no deje objetos de valor sin vigilancia.");
  d("beach.note", "As notas de 1 a 5 são uma curadoria editorial ilustrativa, e não medições oficiais.", "The 1–5 scores are an illustrative editorial selection, not official measurements.", "Las notas de 1 a 5 son una curaduría editorial ilustrativa, no mediciones oficiales.");

  /* ---------- Dicas ---------- */
  d("tips.title", "Dicas para passear pelo Rio", "Tips for exploring Rio", "Consejos para pasear por Río");
  d("tips.intro", "Informações práticas, roteiros prontos e um checklist de mala para aproveitar a cidade com tranquilidade.", "Practical info, ready-made itineraries and a packing checklist to enjoy the city with peace of mind.", "Información práctica, itinerarios listos y un checklist de equipaje para disfrutar la ciudad con tranquilidad.");
  d("tips.tab.essentials", "Dicas essenciais", "Essential tips", "Consejos esenciales");
  d("tips.tab.itineraries", "Roteiros", "Itineraries", "Itinerarios");
  d("tips.tab.checklist", "Checklist de mala", "Packing checklist", "Checklist de equipaje");
  d("tips.trip.d1", "1 dia", "1 day", "1 día");
  d("tips.trip.d3", "3 dias", "3 days", "3 días");
  d("tips.trip.d5", "5 dias", "5 days", "5 días");
  d("tips.day", "Dia {n}", "Day {n}", "Día {n}");
  d("tips.morning", "Manhã", "Morning", "Mañana");
  d("tips.afternoon", "Tarde", "Afternoon", "Tarde");
  d("tips.evening", "Noite", "Evening", "Noche");
  d("tips.check.title", "O que levar", "What to pack", "Qué llevar");
  d("tips.check.sub", "Marque o que já separou — seu progresso fica salvo neste navegador.", "Tick what you’ve packed — your progress is saved in this browser.", "Marca lo que ya separaste: tu progreso se guarda en este navegador.");
  d("tips.check.reset", "Limpar lista", "Clear list", "Limpiar lista");
  d("tips.progress", "{done} de {total} itens", "{done} of {total} items", "{done} de {total} elementos");

  /* ---------- Mobilidade ---------- */
  d("mob.title", "Aeroportos e mobilidade urbana", "Airports & urban mobility", "Aeropuertos y movilidad urbana");
  d("mob.intro", "Saiba como chegar ao Rio, ir do aeroporto ao seu bairro e se deslocar pela cidade com praticidade.", "Learn how to get to Rio, go from the airport to your neighborhood and move around the city with ease.", "Descubre cómo llegar a Río, ir del aeropuerto a tu barrio y desplazarte por la ciudad con practicidad.");
  d("mob.airports", "Aeroportos", "Airports", "Aeropuertos");
  d("mob.plan.title", "Do aeroporto ao seu bairro", "From the airport to your neighborhood", "Del aeropuerto a tu barrio");
  d("mob.plan.sub", "Escolha o aeroporto e o destino para comparar as opções de transporte.", "Choose the airport and destination to compare transport options.", "Elige el aeropuerto y el destino para comparar las opciones de transporte.");
  d("mob.plan.from", "Aeroporto", "Airport", "Aeropuerto");
  d("mob.plan.to", "Destino", "Destination", "Destino");
  d("mob.plan.result", "{from} → {to}", "{from} → {to}", "{from} → {to}");
  d("mob.plan.fastest", "Mais rápido", "Fastest", "Más rápido");
  d("mob.plan.cheapest", "Mais econômico", "Cheapest", "Más económico");
  d("mob.plan.note", "Tempos e custos são estimativas e variam com trânsito, horário e demanda. Evite os horários de pico (7h–9h e 17h–20h).", "Times and costs are estimates and vary with traffic, time of day and demand. Avoid rush hours (7–9 a.m. and 5–8 p.m.).", "Los tiempos y costos son estimaciones y varían según tráfico, horario y demanda. Evite las horas pico (7–9 h y 17–20 h).");
  d("mob.urban.title", "Como se deslocar pela cidade", "Getting around the city", "Cómo desplazarse por la ciudad");
  d("mob.urban.sub", "Do metrô às barcas: conheça os modais mais úteis para turistas.", "From the metro to ferries: the most useful transport modes for visitors.", "Del metro a los ferris: los medios de transporte más útiles para turistas.");
  d("mob.metro.title", "Linhas do metrô", "Metro lines", "Líneas del metro");
  d("mob.metro.sub", "Estações principais para turistas (em destaque). Consulte o mapa oficial para o trajeto completo e horários.", "Main stations for visitors (highlighted). Check the official map for full routes and schedules.", "Estaciones principales para turistas (destacadas). Consulte el mapa oficial para el trayecto completo y horarios.");
  d("mob.tips.title", "Dicas de mobilidade", "Mobility tips", "Consejos de movilidad");
  d("mob.tips.list",
    "Evite os horários de pico (7h–9h e 17h–20h): o trânsito do Rio pode ser intenso.|Confirme os meios de pagamento aceitos em cada modal (como cartão de transporte e pagamento por aproximação) antes de embarcar.|Em dias de chuva forte, consulte o Alerta Rio e planeje mais tempo para os deslocamentos.|Para trajetos curtos na Zona Sul, caminhar ou pedalar na orla costuma ser a melhor opção.|À noite, prefira aplicativos ou táxis oficiais; mantenha o celular e a carteira guardados dentro do transporte público.|O metrô e o VLT são acessíveis, mas consulte a disponibilidade de elevadores e rampas na estação de destino.",
    "Avoid rush hours (7–9 a.m. and 5–8 p.m.): Rio traffic can be heavy.|Check which payment methods each mode accepts (such as transit card and contactless payment) before boarding.|On heavy-rain days, check Alerta Rio and allow extra travel time.|For short trips in the South Zone, walking or cycling along the seafront is often the best choice.|At night, prefer ride-hailing apps or official taxis; keep your phone and wallet stowed on public transport.|The metro and VLT are accessible, but check elevator and ramp availability at your destination station.",
    "Evite las horas pico (7–9 h y 17–20 h): el tráfico de Río puede ser intenso.|Confirme los medios de pago aceptados en cada transporte (como tarjeta de transporte y pago por proximidad) antes de abordar.|En días de lluvia fuerte, consulte Alerta Rio y planifique más tiempo para los desplazamientos.|Para trayectos cortos en la Zona Sur, caminar o pedalear por la costanera suele ser la mejor opción.|De noche, prefiera aplicaciones o taxis oficiales; mantenga el celular y la billetera guardados en el transporte público.|El metro y el VLT son accesibles, pero consulte la disponibilidad de ascensores y rampas en la estación de destino.");
})();
