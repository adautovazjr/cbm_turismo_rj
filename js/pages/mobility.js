/* Página: Aeroportos e mobilidade — planejador aeroporto → bairro, modais e linhas de metrô */
(function () {
  "use strict";
  var App = window.App;
  var state = { airport: "GIG", dest: "copa" };

  function money(n) { var s = ""; for (var i = 0; i < 3; i++) s += i < n ? "$" : '<span style="opacity:.25">$</span>'; return s; }

  function renderAirports() {
    document.getElementById("airports").innerHTML = App.airports.map(function (a) {
      var pts = a.points[App.lang] || a.points.pt;
      return '<article class="airport reveal"><div class="airport-head" style="background:linear-gradient(120deg,' + a.g[0] + "," + a.g[1] + ')">' +
        '<span class="code">' + a.code + '</span><div><h3>' + App.esc(App.tr(a.name)) + "</h3><small>" + App.esc(App.tr(a.kind)) + "</small></div></div>" +
        '<div class="airport-body"><ul>' + pts.map(function (p) { return "<li>" + App.esc(p) + "</li>"; }).join("") + "</ul>" +
        '<p style="margin-top:1rem"><a class="link-btn" href="' + App.esc(App.mapUrl(a.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a></p></div></article>";
    }).join("");
  }

  function renderPlannerControls() {
    var a = document.getElementById("pl-airport");
    a.innerHTML = App.airports.map(function (x) { return '<option value="' + x.code + '"' + (x.code === state.airport ? " selected" : "") + ">" + x.code + " — " + App.esc(App.tr(x.kind)) + "</option>"; }).join("");
    var d = document.getElementById("pl-dest");
    d.innerHTML = App.destinations.map(function (x) { return '<option value="' + x.id + '"' + (x.id === state.dest ? " selected" : "") + ">" + App.esc(App.tr(x.name)) + "</option>"; }).join("");
  }

  function renderPlannerResult() {
    var opts = App.routes[state.airport][state.dest].slice();
    var fastest = opts.reduce(function (b, o) { return (o.min + o.max) < (b.min + b.max) ? o : b; }, opts[0]);
    var cheapest = opts.reduce(function (b, o) { return o.c < b.c ? o : b; }, opts[0]);
    var dest = App.destinations.filter(function (x) { return x.id === state.dest; })[0];
    document.getElementById("pl-title").textContent = App.t("mob.plan.result", { from: state.airport, to: App.tr(dest.name) });
    document.getElementById("pl-options").innerHTML = opts.map(function (o) {
      var info = App.modeInfo[o.m];
      var badges = (o === fastest ? '<span class="badge free">⚡ ' + App.esc(App.t("mob.plan.fastest")) + "</span> " : "") +
        (o === cheapest ? '<span class="badge paid">💰 ' + App.esc(App.t("mob.plan.cheapest")) + "</span>" : "");
      return '<div class="option' + (o === fastest ? " best" : "") + '"><h4><span aria-hidden="true">' + info.e + "</span> " + App.esc(App.tr(info.name)) + "</h4>" +
        '<div class="time">' + o.min + "–" + o.max + " min</div><div>" + money(o.c) + " " + badges + "</div>" +
        "<p>" + App.esc(App.tr(info.note)) + "</p></div>";
    }).join("");
  }

  function renderUrban() {
    document.getElementById("urban").innerHTML = App.urban.map(function (u) {
      return '<article class="card reveal"><div class="card-art" style="height:110px;--g1:' + u.g[0] + ";--g2:" + u.g[1] + '"><span class="emoji" style="font-size:3rem" aria-hidden="true">' + u.e + "</span></div>" +
        '<div class="card-body"><h3>' + App.esc(App.tr(u.name)) + "</h3><p>" + App.esc(App.tr(u.desc)) + "</p></div></article>";
    }).join("");
  }

  function renderMetro() {
    document.getElementById("metro").innerHTML = App.metroLines.map(function (l) {
      return '<div class="line-card reveal" style="--c:' + l.c + '"><h4><i></i>' + App.esc(App.tr(l.name)) + '</h4><ul class="stations">' +
        l.stations.map(function (s) { return '<li class="' + (s[1] ? "key" : "") + '">' + App.esc(s[0]) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  function renderTips() {
    var list = App.t("mob.tips.list").split("|");
    document.getElementById("mob-tips").innerHTML = list.map(function (x) { return "<li>" + App.esc(x) + "</li>"; }).join("");
  }

  function render() {
    renderAirports(); renderPlannerControls(); renderPlannerResult(); renderUrban(); renderMetro(); renderTips(); App.reveal();
  }

  App.ready(function () {
    document.getElementById("pl-airport").addEventListener("change", function (e) { state.airport = e.target.value; renderPlannerResult(); });
    document.getElementById("pl-dest").addEventListener("change", function (e) { state.dest = e.target.value; renderPlannerResult(); });
    render();
  });
  App.onLang(render);
})();
