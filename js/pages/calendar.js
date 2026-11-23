/* Página: Calendário interativo — grade mensal, filtros por tipo, detalhes do dia e exportação .ics */
(function () {
  "use strict";
  var App = window.App;
  var TYPES = ["national", "state", "municipal", "event"];
  var now = new Date();
  var state = {
    year: now.getFullYear(), month: now.getMonth(),
    selected: App.iso(now),
    filters: { national: true, state: true, municipal: true, event: true }
  };

  function visible(ev) {
    for (var i = 0; i < ev.levels.length; i++) if (state.filters[ev.levels[i]]) return true;
    return false;
  }
  function eventsOf(year) { return App.getEvents(year).filter(visible); }
  function colorOf(ev) { return App.eventColors[ev.type]; }

  function badges(ev) {
    var b = ev.levels.map(function (l) { return '<span class="badge ' + l + '">' + App.esc(App.t("cal.type." + l)) + "</span>"; }).join("");
    if (ev.optional) b += '<span class="badge optional">' + App.esc(App.t("cal.optional")) + "</span>";
    return b;
  }

  /* ---------- filtros / legenda ---------- */
  function renderFilters() {
    document.getElementById("filters").innerHTML = TYPES.map(function (t) {
      return '<button type="button" class="chip" data-type="' + t + '" aria-pressed="' + state.filters[t] + '" style="--c:' + App.eventColors[t] + '">' +
        '<span class="swatch"></span>' + App.esc(App.t("cal.type." + t)) + "</button>";
    }).join("");
    document.getElementById("legend-optional").textContent = App.t("cal.optional");
  }

  /* ---------- seletores de mês/ano ---------- */
  function renderSelectors() {
    var ms = document.getElementById("sel-month");
    var months = [];
    for (var m = 0; m < 12; m++) months.push(App.fmtDate(new Date(2024, m, 1), { month: "long" }));
    ms.innerHTML = months.map(function (n, i) { return '<option value="' + i + '"' + (i === state.month ? " selected" : "") + ">" + App.esc(n) + "</option>"; }).join("");
    var ys = document.getElementById("sel-year");
    var base = now.getFullYear(), opts = "";
    for (var y = base - 3; y <= base + 5; y++) opts += '<option value="' + y + '"' + (y === state.year ? " selected" : "") + ">" + y + "</option>";
    ys.innerHTML = opts;
  }

  /* ---------- grade ---------- */
  function renderGrid() {
    var y = state.year, m = state.month;
    document.getElementById("cal-title").textContent = App.fmtDate(new Date(y, m, 1), { month: "long", year: "numeric" });
    var evs = eventsOf(y);
    var byDate = {};
    evs.forEach(function (e) { (byDate[e.date] = byDate[e.date] || []).push(e); });
    /* dias de meses adjacentes que caem no grid podem pertencer a outro ano */
    var first = new Date(y, m, 1);
    var start = new Date(y, m, 1 - first.getDay());
    var html = "";
    for (var d = 0; d < 7; d++) html += '<div class="cal-dow" aria-hidden="true">' + App.esc(App.fmtDate(new Date(2024, 0, 7 + d), { weekday: "short" })) + "</div>";
    var todayIso = App.iso(now);
    for (var i = 0; i < 42; i++) {
      var dt = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      var iso = App.iso(dt);
      if (i >= 35 && dt.getMonth() !== m) break; /* esconde 6ª semana vazia */
      var out = dt.getMonth() !== m;
      var list = byDate[iso];
      if (!list && out && dt.getFullYear() !== y) list = eventsOf(dt.getFullYear()).filter(function (e) { return e.date === iso; });
      list = list || [];
      var cls = "cal-day" + (out ? " out" : "") + (iso === todayIso ? " today" : "") + (iso === state.selected ? " selected" : "") + ((dt.getDay() === 0 || dt.getDay() === 6) ? " weekend" : "");
      var label = App.fmtDate(dt, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      if (list.length) label += ": " + list.map(function (e) { return App.tr(e.name); }).join("; ");
      html += '<button type="button" class="' + cls + '" data-date="' + iso + '" aria-label="' + App.esc(label) + '" aria-pressed="' + (iso === state.selected) + '">' +
        '<span class="n">' + dt.getDate() + "</span>";
      list.slice(0, 2).forEach(function (e) {
        html += '<span class="ev' + (e.optional ? " optional" : "") + '" style="--c:' + colorOf(e) + '">' + App.esc(App.tr(e.name)) + "</span>";
      });
      if (list.length > 2) html += '<span class="more">+' + (list.length - 2) + "</span>";
      if (list.length) html += '<span class="dots">' + list.map(function (e) { return '<i style="--c:' + colorOf(e) + '"></i>'; }).join("") + "</span>";
      html += "</button>";
    }
    document.getElementById("cal-grid").innerHTML = html;
  }

  /* ---------- painel lateral ---------- */
  function evItem(ev, withDate) {
    var d = App.parseISO(ev.date);
    var date = withDate ? '<small>' + App.esc(App.fmtDate(d, { weekday: "long", day: "numeric", month: "long" })) + "</small>" : "";
    return '<li class="ev-item" style="--c:' + colorOf(ev) + '">' + date +
      '<button type="button" class="ev-title" data-date="' + ev.date + '">' + App.esc(App.tr(ev.name)) + "</button>" +
      '<div class="badges">' + badges(ev) + "</div><p>" + App.esc(App.tr(ev.desc)) + "</p>" +
      '<p><button type="button" class="link-btn" data-ics="' + ev.date + "|" + App.esc(ev.name.pt) + '">📅 ' + App.esc(App.t("cal.addIcs")) + "</button></p></li>";
  }

  function renderDay() {
    var d = App.parseISO(state.selected);
    document.getElementById("day-title").textContent = App.fmtDate(d, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    var list = eventsOf(d.getFullYear()).filter(function (e) { return e.date === state.selected; });
    document.getElementById("day-events").innerHTML = list.length
      ? list.map(function (e) { return evItem(e, false); }).join("")
      : '<li class="note">' + App.esc(App.t("cal.noDay")) + "</li>";
  }

  function renderMonthList() {
    var y = state.year, m = state.month;
    var list = eventsOf(y).filter(function (e) { return App.parseISO(e.date).getMonth() === m; });
    document.getElementById("month-title").textContent = App.t("cal.monthList", { month: App.fmtDate(new Date(y, m, 1), { month: "long" }) });
    document.getElementById("month-events").innerHTML = list.length
      ? list.map(function (e) {
          var d = App.parseISO(e.date);
          return '<li class="ev-item" style="--c:' + colorOf(e) + '"><div class="ev-date"><div class="d"><b>' + d.getDate() + "</b><span>" + App.esc(App.fmtDate(d, { weekday: "short" })) + "</span></div><div>" +
            '<button type="button" class="ev-title" data-date="' + e.date + '">' + App.esc(App.tr(e.name)) + '</button><div class="badges">' + badges(e) + "</div></div></div></li>";
        }).join("")
      : '<li class="note">' + App.esc(App.t("cal.noMonth")) + "</li>";
    document.getElementById("month-hl").textContent = App.tr(App.monthHighlights[m]);
  }

  function renderUpcoming() {
    var list = App.upcomingEvents(now, 20).filter(visible).slice(0, 4);
    var today = App.parseISO(App.iso(now));
    document.getElementById("upcoming").innerHTML = list.map(function (e) {
      var d = App.parseISO(e.date);
      var diff = Math.round((d - today) / 86400000);
      var when = diff === 0 ? App.t("cal.today") : diff === 1 ? App.t("cal.tomorrow") : App.t("cal.inDays", { n: diff });
      return '<li class="ev-item" style="--c:' + colorOf(e) + '"><small>' + App.esc(App.fmtDate(d, { day: "numeric", month: "short", year: "numeric" })) + " · " + App.esc(when) + "</small>" +
        '<button type="button" class="ev-title" data-date="' + e.date + '">' + App.esc(App.tr(e.name)) + "</button></li>";
    }).join("");
  }

  /* ---------- ações ---------- */
  function goTo(iso) {
    var d = App.parseISO(iso);
    state.year = d.getFullYear(); state.month = d.getMonth(); state.selected = iso;
    render();
  }
  function shift(n) {
    var d = new Date(state.year, state.month + n, 1);
    state.year = d.getFullYear(); state.month = d.getMonth();
    render();
  }

  function downloadIcs(iso, name) {
    var ev = App.getEvents(App.parseISO(iso).getFullYear()).filter(function (e) { return e.date === iso && e.name.pt === name; })[0];
    if (!ev) return;
    var d = App.parseISO(iso), n = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    function f(x) { return x.getFullYear() + App.pad(x.getMonth() + 1) + App.pad(x.getDate()); }
    function esc(s) { return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
    var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Rio Viva//Calendario//PT", "BEGIN:VEVENT",
      "UID:" + iso + "-" + encodeURIComponent(ev.name.en) .replace(/%/g, "") + "@rioviva.local",
      "DTSTAMP:" + f(new Date()) + "T000000Z", "DTSTART;VALUE=DATE:" + f(d), "DTEND;VALUE=DATE:" + f(n),
      "SUMMARY:" + esc(App.tr(ev.name)), "DESCRIPTION:" + esc(App.tr(ev.desc)), "LOCATION:Rio de Janeiro\\, RJ\\, Brasil",
      "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = iso + "-rio.ics"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function render() {
    renderFilters(); renderSelectors(); renderGrid(); renderDay(); renderMonthList(); renderUpcoming();
  }

  App.ready(function () {
    document.getElementById("prev").addEventListener("click", function () { shift(-1); });
    document.getElementById("next").addEventListener("click", function () { shift(1); });
    document.getElementById("today").addEventListener("click", function () { goTo(App.iso(new Date())); });
    document.getElementById("sel-month").addEventListener("change", function (e) { state.month = +e.target.value; render(); });
    document.getElementById("sel-year").addEventListener("change", function (e) { state.year = +e.target.value; render(); });
    document.getElementById("filters").addEventListener("click", function (e) {
      var b = e.target.closest("[data-type]"); if (!b) return;
      var t = b.getAttribute("data-type"); state.filters[t] = !state.filters[t]; render();
    });
    document.getElementById("cal-main").addEventListener("click", function (e) {
      var ics = e.target.closest("[data-ics]");
      if (ics) { var p = ics.getAttribute("data-ics").split("|"); downloadIcs(p[0], p.slice(1).join("|")); return; }
      var b = e.target.closest("[data-date]"); if (b) goTo(b.getAttribute("data-date"));
    });
    render();
  });
  App.onLang(render);
})();
