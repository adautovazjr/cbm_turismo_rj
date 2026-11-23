/* Página inicial: próximas datas e "monte seu roteiro rápido" */
(function () {
  "use strict";
  var App = window.App;
  var profile = "beach";

  var QUICK = {
    beach: [
      { e: "🌅", href: "praias.html", t: { pt: "Arpoador ao pôr do sol", en: "Arpoador at sunset", es: "Arpoador al atardecer" }, d: { pt: "O ritual carioca de aplaudir o sol.", en: "The carioca ritual of applauding the sun.", es: "El ritual carioca de aplaudir al sol." } },
      { e: "🏖️", href: "praias.html", t: { pt: "Ipanema e Leblon", en: "Ipanema & Leblon", es: "Ipanema y Leblon" }, d: { pt: "Orla elegante, quiosques e vôlei.", en: "Stylish shoreline, kiosks and volleyball.", es: "Costanera elegante, quioscos y vóley." } },
      { e: "🌴", href: "praias.html", t: { pt: "Grumari e Prainha", en: "Grumari & Prainha", es: "Grumari y Prainha" }, d: { pt: "Praias selvagens, longe da multidão.", en: "Wild beaches, away from the crowds.", es: "Playas salvajes, lejos de la multitud." } }
    ],
    adventure: [
      { e: "🪂", href: "pontos-turisticos.html", t: { pt: "Voo livre em São Conrado", en: "Hang gliding in São Conrado", es: "Vuelo libre en São Conrado" }, d: { pt: "Salto duplo com vista para o mar.", en: "Tandem flight with ocean views.", es: "Salto en tándem con vista al mar." } },
      { e: "🏞️", href: "pontos-turisticos.html", t: { pt: "Floresta da Tijuca", en: "Tijuca Forest", es: "Bosque de la Tijuca" }, d: { pt: "Cachoeiras e trilhas na Mata Atlântica.", en: "Waterfalls and Atlantic Forest trails.", es: "Cascadas y senderos en la Mata Atlántica." } },
      { e: "🏄", href: "praias.html", t: { pt: "Surfe na Prainha", en: "Surfing at Prainha", es: "Surf en Prainha" }, d: { pt: "Ondas fortes em cenário preservado.", en: "Strong waves in a preserved setting.", es: "Olas fuertes en un entorno preservado." } }
    ],
    culture: [
      { e: "🎭", href: "pontos-turisticos.html", t: { pt: "Centro Histórico", en: "Historic Downtown", es: "Centro Histórico" }, d: { pt: "Belle Époque, museus e igrejas.", en: "Belle Époque, museums and churches.", es: "Belle Époque, museos e iglesias." } },
      { e: "🎨", href: "pontos-turisticos.html", t: { pt: "Escadaria Selarón", en: "Selarón Steps", es: "Escalera Selarón" }, d: { pt: "Mosaico colorido de dezenas de países.", en: "A colorful mosaic from dozens of countries.", es: "Mosaico colorido de decenas de países." } },
      { e: "🏛️", href: "pontos-turisticos.html", t: { pt: "Museu do Amanhã", en: "Museum of Tomorrow", es: "Museo del Mañana" }, d: { pt: "Arquitetura de Calatrava na orla do porto.", en: "Calatrava architecture on the port waterfront.", es: "Arquitectura de Calatrava en el puerto." } }
    ],
    food: [
      { e: "🍲", href: "gastronomia.html", t: { pt: "Feijoada de sábado", en: "Saturday feijoada", es: "Feijoada de sábado" }, d: { pt: "O prato mais tradicional da cidade.", en: "The city’s most traditional dish.", es: "El plato más tradicional de la ciudad." } },
      { e: "☕", href: "gastronomia.html", t: { pt: "Confeitaria Colombo", en: "Confeitaria Colombo", es: "Confeitaria Colombo" }, d: { pt: "Chá da tarde em salão de 1894.", en: "Afternoon tea in an 1894 hall.", es: "Té de la tarde en un salón de 1894." } },
      { e: "🪗", href: "gastronomia.html", t: { pt: "Feira de São Cristóvão", en: "São Cristóvão Fair", es: "Feria de São Cristóvão" }, d: { pt: "Comida nordestina e forró.", en: "Northeastern food and forró.", es: "Comida nordestina y forró." } }
    ],
    family: [
      { e: "🚡", href: "pontos-turisticos.html", t: { pt: "Bondinho do Pão de Açúcar", en: "Sugarloaf cable car", es: "Teleférico del Pan de Azúcar" }, d: { pt: "Aventura segura para todas as idades.", en: "A safe adventure for all ages.", es: "Aventura segura para todas las edades." } },
      { e: "🚲", href: "pontos-turisticos.html", t: { pt: "Lagoa Rodrigo de Freitas", en: "Rodrigo de Freitas Lagoon", es: "Laguna Rodrigo de Freitas" }, d: { pt: "Pedalinhos, ciclovia e parques.", en: "Pedal boats, bike path and parks.", es: "Pedalinas, ciclovía y parques." } },
      { e: "🐚", href: "praias.html", t: { pt: "Praia Vermelha", en: "Praia Vermelha", es: "Praia Vermelha" }, d: { pt: "Águas calmas aos pés do Pão de Açúcar.", en: "Calm waters at the foot of Sugarloaf.", es: "Aguas calmas al pie del Pan de Azúcar." } }
    ]
  };

  function renderQuick() {
    document.getElementById("quick-chips").innerHTML = Object.keys(QUICK).map(function (k) {
      return '<button type="button" class="chip" data-profile="' + k + '" aria-pressed="' + (profile === k) + '">' + App.esc(App.t("home.quick." + k)) + "</button>";
    }).join("");
    document.getElementById("quick-results").innerHTML = QUICK[profile].map(function (x) {
      return '<a class="quick-item" href="' + x.href + '"><span class="e" aria-hidden="true">' + x.e + '</span><span><b>' + App.esc(App.tr(x.t)) + "</b><small>" + App.esc(App.tr(x.d)) + "</small></span></a>";
    }).join("");
  }

  function renderUpcoming() {
    var now = new Date(), today = App.parseISO(App.iso(now));
    var list = App.upcomingEvents(now, 4);
    document.getElementById("upcoming").innerHTML = list.map(function (e) {
      var d = App.parseISO(e.date);
      var diff = Math.round((d - today) / 86400000);
      var when = diff === 0 ? App.t("cal.today") : diff === 1 ? App.t("cal.tomorrow") : App.t("cal.inDays", { n: diff });
      return '<div class="up-card" style="--c:' + App.eventColors[e.type] + '"><div class="d"><b>' + d.getDate() + "</b><span>" + App.esc(App.fmtDate(d, { month: "short" })) + "</span></div>" +
        "<div><strong>" + App.esc(App.tr(e.name)) + "</strong><small>" + App.esc(when) + " · " + App.esc(App.t("cal.type." + e.levels[0])) + (e.optional ? " · " + App.esc(App.t("cal.optional")) : "") + "</small></div></div>";
    }).join("");
  }

  function render() { renderQuick(); renderUpcoming(); }

  App.ready(function () {
    document.getElementById("quick-chips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-profile]"); if (!b) return; profile = b.getAttribute("data-profile"); renderQuick();
    });
    render();
  });
  App.onLang(render);
})();
