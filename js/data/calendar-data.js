/* ==========================================================================
   Calendário: feriados nacionais, estaduais (RJ), municipais (Rio) e datas
   comemorativas. Datas móveis (Carnaval, Páscoa, Corpus Christi, Dia das
   Mães/Pais) são calculadas para qualquer ano.
   ========================================================================== */
(function () {
  "use strict";
  var App = window.App = window.App || {};

  /* Domingo de Páscoa — algoritmo de Meeus/Jones/Butcher */
  function easter(y) {
    var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
      f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
      i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7,
      m = Math.floor((a + 11 * h + 22 * l) / 451), month = Math.floor((h + l - 7 * m + 114) / 31),
      day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(y, month - 1, day);
  }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  /* n-ésimo dia da semana (0=dom) de um mês (0-11) */
  function nthWeekday(y, m, wd, n) {
    var first = new Date(y, m, 1).getDay();
    return new Date(y, m, 1 + ((wd - first + 7) % 7) + (n - 1) * 7);
  }

  var cache = {};

  /* levels: níveis de feriado (filtros). type: cor principal. */
  App.getEvents = function (year) {
    if (cache[year]) return cache[year];
    var E = [];
    function add(date, levels, name, desc, optional) {
      E.push({
        date: App.iso(date), levels: levels, type: levels[0], optional: !!optional,
        name: name, desc: desc
      });
    }
    function fx(m, d) { return new Date(year, m - 1, d); }
    var ea = easter(year);

    /* ---- Fixos ---- */
    add(fx(1, 1), ["national"],
      { pt: "Confraternização Universal", en: "New Year’s Day", es: "Año Nuevo (Confraternización Universal)" },
      { pt: "Dia seguinte ao Réveillon de Copacabana — praias cheias e clima de recomeço.", en: "The day after Copacabana’s famous New Year’s Eve party — busy beaches and a fresh-start mood.", es: "Día después del Réveillon de Copacabana: playas llenas y ambiente de nuevo comienzo." });
    add(fx(1, 20), ["municipal"],
      { pt: "Dia de São Sebastião (padroeiro do Rio)", en: "Saint Sebastian’s Day (Rio’s patron saint)", es: "Día de San Sebastián (patrono de Río)" },
      { pt: "Feriado municipal. Procissão e missas na Catedral de São Sebastião, no Centro.", en: "City holiday. Procession and masses at the Saint Sebastian Cathedral, downtown.", es: "Feriado municipal. Procesión y misas en la Catedral de San Sebastián, en el Centro." });
    add(fx(3, 1), ["event"],
      { pt: "Aniversário da Cidade do Rio", en: "Rio’s City Anniversary", es: "Aniversario de la Ciudad de Río" },
      { pt: "Fundada em 1º de março de 1565 por Estácio de Sá. Em " + year + ", a cidade completa " + (year - 1565) + " anos.", en: "Founded on March 1, 1565 by Estácio de Sá. In " + year + " the city turns " + (year - 1565) + ".", es: "Fundada el 1 de marzo de 1565 por Estácio de Sá. En " + year + " la ciudad cumple " + (year - 1565) + " años." });
    add(fx(4, 21), ["national"],
      { pt: "Tiradentes", en: "Tiradentes Day", es: "Día de Tiradentes" },
      { pt: "Homenagem ao mártir da Inconfidência Mineira, executado no Rio em 1792.", en: "Honors the martyr of the Minas Conspiracy, executed in Rio in 1792.", es: "Homenaje al mártir de la Inconfidencia Minera, ejecutado en Río en 1792." });
    add(fx(4, 23), ["state", "municipal"],
      { pt: "Dia de São Jorge", en: "Saint George’s Day", es: "Día de San Jorge" },
      { pt: "Feriado no estado e na cidade do Rio. Festa popular com missas e procissões em igrejas da cidade.", en: "Holiday in the state and city of Rio. Popular festivities with masses and processions at churches around the city.", es: "Feriado en el estado y la ciudad de Río. Fiesta popular con misas y procesiones en iglesias de la ciudad." });
    add(fx(5, 1), ["national"],
      { pt: "Dia do Trabalho", en: "Labour Day", es: "Día del Trabajo" },
      { pt: "Feriado nacional. Shows e eventos gratuitos em alguns pontos da cidade.", en: "National holiday. Free concerts and events in some parts of the city.", es: "Feriado nacional. Conciertos y eventos gratuitos en algunos puntos de la ciudad." });
    add(fx(6, 12), ["event"],
      { pt: "Dia dos Namorados", en: "Brazilian Valentine’s Day", es: "Día de los Enamorados (Brasil)" },
      { pt: "Data comemorativa: restaurantes e passeios românticos lotam — reserve com antecedência.", en: "Commemorative date: romantic restaurants and tours fill up — book ahead.", es: "Fecha conmemorativa: restaurantes y paseos románticos se llenan — reserve con anticipación." });
    add(fx(9, 7), ["national"],
      { pt: "Independência do Brasil", en: "Independence Day", es: "Independencia de Brasil" },
      { pt: "Feriado nacional. Costuma haver desfile cívico no Centro da cidade.", en: "National holiday. A civic parade is usually held downtown.", es: "Feriado nacional. Suele haber un desfile cívico en el Centro de la ciudad." });
    add(fx(9, 27), ["event"],
      { pt: "Dia Mundial do Turismo", en: "World Tourism Day", es: "Día Mundial del Turismo" },
      { pt: "Data comemorativa internacional, com ações e promoções do trade turístico.", en: "International observance, with campaigns and promotions from the tourism industry.", es: "Efeméride internacional, con acciones y promociones del sector turístico." });
    add(fx(10, 12), ["national"],
      { pt: "Nossa Senhora Aparecida / Dia das Crianças", en: "Our Lady of Aparecida / Children’s Day", es: "Nuestra Señora de Aparecida / Día del Niño" },
      { pt: "Feriado nacional. Passeios em família: Jardim Zoológico, AquaRio e Museu do Amanhã.", en: "National holiday. Family outings: zoo, AquaRio and Museum of Tomorrow.", es: "Feriado nacional. Paseos en familia: zoológico, AquaRio y Museo del Mañana." });
    add(fx(11, 2), ["national"],
      { pt: "Finados", en: "All Souls’ Day", es: "Día de Difuntos" },
      { pt: "Feriado nacional de homenagem aos falecidos. Cemitérios movimentados; atrações abrem normalmente.", en: "National holiday honoring the deceased. Cemeteries are busy; most attractions open normally.", es: "Feriado nacional en memoria de los difuntos. Cementerios concurridos; las atracciones abren con normalidad." });
    add(fx(11, 15), ["national"],
      { pt: "Proclamação da República", en: "Republic Proclamation Day", es: "Proclamación de la República" },
      { pt: "Feriado nacional. Boa data para conhecer o Centro Histórico e museus.", en: "National holiday. A good day to explore the historic center and museums.", es: "Feriado nacional. Buen día para conocer el Centro Histórico y los museos." });
    add(fx(11, 20), ["national", "state", "municipal"],
      { pt: "Consciência Negra (Zumbi dos Palmares)", en: "Black Awareness Day (Zumbi dos Palmares)", es: "Día de la Conciencia Negra (Zumbi dos Palmares)" },
      { pt: "Feriado nacional (desde 2024), também celebrado no estado e na cidade. Visite o Cais do Valongo e o Instituto Pretos Novos, na Zona Portuária.", en: "National holiday (since 2024), also observed by the state and city. Visit Valongo Wharf and the Pretos Novos Institute in the port area.", es: "Feriado nacional (desde 2024), también celebrado en el estado y la ciudad. Visite el Cais do Valongo y el Instituto Pretos Novos, en la zona portuaria." });
    add(fx(12, 2), ["event"],
      { pt: "Dia Nacional do Samba", en: "National Samba Day", es: "Día Nacional del Samba" },
      { pt: "Rodas de samba por toda a cidade — Lapa, Pedra do Sal, Cacique de Ramos e quadras das escolas.", en: "Samba circles all over town — Lapa, Pedra do Sal and the samba schools’ rehearsal halls.", es: "Rondas de samba por toda la ciudad: Lapa, Pedra do Sal y las canchas de las escuelas." });
    add(fx(12, 25), ["national"],
      { pt: "Natal", en: "Christmas Day", es: "Navidad" },
      { pt: "Feriado nacional. A árvore flutuante da Lagoa costuma ser uma das atrações da temporada.", en: "National holiday. The floating tree on the Lagoon is usually a highlight of the season.", es: "Feriado nacional. El árbol flotante de la Laguna suele ser una atracción de la temporada." });
    add(fx(12, 31), ["event"],
      { pt: "Réveillon de Copacabana", en: "Copacabana New Year’s Eve", es: "Réveillon de Copacabana" },
      { pt: "Uma das maiores festas de Ano-Novo do mundo, com shows e queima de fogos na orla. Tradição: roupa branca e oferendas a Iemanjá.", en: "One of the world’s biggest New Year’s parties, with concerts and fireworks on the beachfront. Tradition: white clothes and offerings to Iemanjá.", es: "Una de las mayores fiestas de Año Nuevo del mundo, con shows y fuegos artificiales en la costanera. Tradición: ropa blanca y ofrendas a Iemanjá." });

    /* ---- Móveis (Páscoa) ---- */
    add(addDays(ea, -49), ["event"],
      { pt: "Domingo de Carnaval — Desfile do Grupo Especial", en: "Carnival Sunday — Special Group parade", es: "Domingo de Carnaval — Desfile del Grupo Especial" },
      { pt: "Primeira noite dos desfiles das escolas de samba no Sambódromo (Marquês de Sapucaí).", en: "First night of the samba school parades at the Sambadrome (Marquês de Sapucaí).", es: "Primera noche de los desfiles de las escuelas de samba en el Sambódromo (Marquês de Sapucaí)." });
    add(addDays(ea, -48), ["national"],
      { pt: "Segunda-feira de Carnaval", en: "Carnival Monday", es: "Lunes de Carnaval" },
      { pt: "Ponto facultativo. Segunda noite dos desfiles do Grupo Especial e blocos de rua pela cidade.", en: "Optional holiday. Second night of the Special Group parades, plus street blocos across the city.", es: "Día no laborable opcional. Segunda noche de desfiles del Grupo Especial y blocos callejeros por la ciudad." }, true);
    add(addDays(ea, -47), ["national"],
      { pt: "Terça-feira de Carnaval", en: "Shrove Tuesday (Carnival)", es: "Martes de Carnaval" },
      { pt: "Ponto facultativo. Último dia de folia, com blocos tradicionais no Centro e na Zona Sul.", en: "Optional holiday. Last day of the party, with traditional blocos downtown and in the South Zone.", es: "Día no laborable opcional. Último día de fiesta, con blocos tradicionales en el Centro y la Zona Sur." }, true);
    add(addDays(ea, -46), ["national"],
      { pt: "Quarta-feira de Cinzas", en: "Ash Wednesday", es: "Miércoles de Ceniza" },
      { pt: "Ponto facultativo até o meio-dia. Fim do Carnaval; comércio volta ao normal à tarde.", en: "Optional holiday until noon. Carnival ends; businesses reopen in the afternoon.", es: "Día no laborable opcional hasta el mediodía. Termina el Carnaval; el comercio reabre por la tarde." }, true);
    add(addDays(ea, -2), ["national"],
      { pt: "Sexta-feira Santa", en: "Good Friday", es: "Viernes Santo" },
      { pt: "Feriado nacional. Procissões religiosas e programação cultural reduzida.", en: "National holiday. Religious processions and reduced cultural programming.", es: "Feriado nacional. Procesiones religiosas y programación cultural reducida." });
    add(ea, ["event"],
      { pt: "Páscoa", en: "Easter Sunday", es: "Domingo de Pascua" },
      { pt: "Data comemorativa. Chocolaterias e confeitarias, como a Confeitaria Colombo, têm edições especiais.", en: "Commemorative date. Chocolate shops and pastry houses, like Confeitaria Colombo, offer special editions.", es: "Fecha conmemorativa. Chocolaterías y confiterías, como la Confeitaria Colombo, ofrecen ediciones especiales." });
    add(addDays(ea, 60), ["national"],
      { pt: "Corpus Christi", en: "Corpus Christi", es: "Corpus Christi" },
      { pt: "Ponto facultativo. Tapetes artesanais e procissões em igrejas da cidade.", en: "Optional holiday. Handmade carpets and processions at churches around the city.", es: "Día no laborable opcional. Alfombras artesanales y procesiones en iglesias de la ciudad." }, true);

    /* ---- Móveis (calendário civil) ---- */
    add(nthWeekday(year, 4, 0, 2), ["event"],
      { pt: "Dia das Mães", en: "Mother’s Day (Brazil)", es: "Día de la Madre (Brasil)" },
      { pt: "Segundo domingo de maio. Almoços especiais em restaurantes — reserve antes.", en: "Second Sunday of May. Special lunches at restaurants — book in advance.", es: "Segundo domingo de mayo. Almuerzos especiales en restaurantes: reserve antes." });
    add(nthWeekday(year, 7, 0, 2), ["event"],
      { pt: "Dia dos Pais", en: "Father’s Day (Brazil)", es: "Día del Padre (Brasil)" },
      { pt: "Segundo domingo de agosto. Churrascarias e botequins ficam movimentados.", en: "Second Sunday of August. Steakhouses and bars are busy.", es: "Segundo domingo de agosto. Parrillas y bares se llenan." });

    E.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    cache[year] = E;
    return E;
  };

  /* Próximos N eventos a partir de uma data (atravessa a virada de ano) */
  App.upcomingEvents = function (from, n) {
    var out = [], y = from.getFullYear(), today = App.iso(from);
    for (var k = 0; k < 3 && out.length < n; k++) {
      var list = App.getEvents(y + k);
      for (var i = 0; i < list.length && out.length < n; i++) {
        if (list[i].date >= today) out.push(list[i]);
      }
    }
    return out;
  };

  /* Destaques sazonais por mês (texto orientativo, sem datas específicas) */
  App.monthHighlights = [
    { pt: "Verão e alta temporada: calor intenso, praias cheias e Réveillon recém-passado. Chuvas rápidas no fim da tarde.", en: "Summer and high season: intense heat, packed beaches and the New Year’s party just behind. Short late-afternoon showers.", es: "Verano y temporada alta: calor intenso, playas llenas y el Réveillon recién pasado. Lluvias rápidas al final de la tarde." },
    { pt: "Pré-Carnaval: ensaios técnicos no Sambódromo e blocos de rua começam a sair. Calor forte.", en: "Pre-Carnival: technical rehearsals at the Sambadrome and street blocos start to appear. Very hot.", es: "Pre-Carnaval: ensayos técnicos en el Sambódromo y comienzan los blocos callejeros. Mucho calor." },
    { pt: "Fim do verão e aniversário da cidade (1º/3). Dependendo do ano, o Carnaval cai neste mês.", en: "End of summer and the city’s anniversary (Mar 1). Depending on the year, Carnival falls in this month.", es: "Fin del verano y aniversario de la ciudad (1/3). Según el año, el Carnaval cae en este mes." },
    { pt: "Clima mais ameno e menos filas. Páscoa, Tiradentes (21) e São Jorge (23) criam feriados prolongados.", en: "Milder weather and shorter lines. Easter, Tiradentes (21st) and Saint George (23rd) create long weekends.", es: "Clima más suave y menos filas. Pascua, Tiradentes (21) y San Jorge (23) crean fines de semana largos." },
    { pt: "Outono seco e agradável: ótimo para trilhas e vistas limpas. Preços de hospedagem costumam cair.", en: "Dry, pleasant autumn: great for hikes and clear views. Accommodation prices tend to drop.", es: "Otoño seco y agradable: ideal para senderos y vistas despejadas. Los precios de alojamiento suelen bajar." },
    { pt: "Inverno ameno, Festas Juninas e Dia dos Namorados (12). Dias de sol e noites frescas.", en: "Mild winter, June festivals and Valentine’s Day (12th). Sunny days and cool nights.", es: "Invierno suave, Fiestas Juninas y Día de los Enamorados (12). Días soleados y noches frescas." },
    { pt: "Férias escolares e tempo seco: céu limpo no Cristo e no Pão de Açúcar. Movimento alto nas atrações.", en: "School holidays and dry weather: clear skies at Christ the Redeemer and Sugarloaf. Attractions are busy.", es: "Vacaciones escolares y clima seco: cielo despejado en el Cristo y el Pan de Azúcar. Atracciones concurridas." },
    { pt: "Mês seco, com boas condições para voo livre, trilhas e passeios de barco. Dia dos Pais (2º domingo).", en: "Dry month with good conditions for hang gliding, hikes and boat trips. Father’s Day (2nd Sunday).", es: "Mes seco con buenas condiciones para vuelo libre, senderos y paseos en barco. Día del Padre (2.º domingo)." },
    { pt: "Início da primavera, Independência (7) e Dia Mundial do Turismo (27). Temporada de festivais de música.", en: "Start of spring, Independence Day (7th) and World Tourism Day (27th). Music-festival season.", es: "Inicio de la primavera, Independencia (7) y Día Mundial del Turismo (27). Temporada de festivales de música." },
    { pt: "Primavera: temperaturas agradáveis. Costumam acontecer o Festival do Rio (cinema) e a Festa da Penha, aos domingos.", en: "Spring: pleasant temperatures. The Rio Film Festival and the Penha Festival (on Sundays) usually take place.", es: "Primavera: temperaturas agradables. Suelen realizarse el Festival de Río (cine) y la Fiesta de la Penha, los domingos." },
    { pt: "Finados (2), República (15) e Consciência Negra (20). O calor volta e as primeiras chuvas de verão aparecem.", en: "All Souls’ (2nd), Republic Day (15th) and Black Awareness Day (20th). The heat returns and the first summer rains appear.", es: "Difuntos (2), República (15) y Conciencia Negra (20). Vuelve el calor y aparecen las primeras lluvias de verano." },
    { pt: "Natal, Dia do Samba (2) e a contagem para o Réveillon de Copacabana. Hotéis lotados — reserve cedo.", en: "Christmas, Samba Day (2nd) and the countdown to Copacabana’s New Year’s Eve. Hotels fill up — book early.", es: "Navidad, Día del Samba (2) y cuenta regresiva para el Réveillon de Copacabana. Hoteles llenos: reserve temprano." }
  ];

  App.eventColors = { national: "#1f9d62", state: "#0e5a8a", municipal: "#ff6b4a", event: "#7b4fd6" };
})();
