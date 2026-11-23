/* Página: Praias — filtro por perfil, ordenação por critério e medidores */
(function () {
  "use strict";
  var App = window.App;
  var state = { tag: "all", sort: "default" };
  var TAGS = ["all", "family", "surf", "sunset", "nature", "party", "lgbt", "quiet", "adventure"];
  var METRICS = ["calm", "surf", "crowd", "infra", "view"];

  function meter(label, val) {
    var bars = "";
    for (var i = 1; i <= 5; i++) bars += '<i class="' + (i <= val ? "on" : "") + '"></i>';
    return '<div class="meter" role="img" aria-label="' + App.esc(label) + ": " + val + '/5"><span>' + App.esc(label) + '</span><div class="meter-bar">' + bars + "</div></div>";
  }

  function renderControls() {
    document.getElementById("chips").innerHTML = TAGS.map(function (t) {
      return '<button type="button" class="chip" data-tag="' + t + '" aria-pressed="' + (state.tag === t) + '">' + App.esc(App.t("beach.tag." + t)) + "</button>";
    }).join("");
    var sort = document.getElementById("sort");
    var opts = ["default", "calm", "surf", "quiet", "view"];
    sort.innerHTML = opts.map(function (o) {
      return '<option value="' + o + '"' + (state.sort === o ? " selected" : "") + ">" + App.esc(App.t("beach.sort." + o)) + "</option>";
    }).join("");
  }

  function sorted(list) {
    var out = list.slice();
    var key = { calm: "calm", surf: "surf", view: "view" }[state.sort];
    if (key) out.sort(function (a, b) { return b.s[key] - a.s[key]; });
    if (state.sort === "quiet") out.sort(function (a, b) { return a.s.crowd - b.s.crowd; });
    return out;
  }

  function renderGrid() {
    var list = App.beaches.filter(function (b) { return state.tag === "all" || b.tags.indexOf(state.tag) !== -1; });
    list = sorted(list);
    var grid = document.getElementById("grid");
    document.getElementById("count").textContent = App.t("common.results", { n: list.length });
    if (!list.length) { grid.innerHTML = '<p class="empty">' + App.esc(App.t("common.noResults")) + "</p>"; return; }
    grid.innerHTML = list.map(function (b) {
      var meters = METRICS.map(function (m) { return meter(App.t("beach.metric." + m), b.s[m]); }).join("");
      var tags = b.tags.filter(function (t) { return t !== "icon" && t !== "sport" && t !== "sunrise"; }).slice(0, 3).map(function (t) {
        return '<span class="badge">' + App.esc(App.t("beach.tag." + t)) + "</span>";
      }).join(" ");
      return '<article class="card reveal"><div class="card-art" style="--g1:' + b.g[0] + ";--g2:" + b.g[1] + '">' +
        '<span class="emoji" aria-hidden="true">' + b.e + "</span>" +
        '<span class="art-badge"><span class="badge glass">' + App.esc(App.t("beach.zone." + b.zone)) + "</span></span></div>" +
        '<div class="card-body"><h3>' + App.esc(App.tr(b.name)) + "</h3>" +
        '<div class="card-meta"><span>✨ ' + App.esc(App.tr(b.vibe)) + "</span></div>" +
        "<p>" + App.esc(App.tr(b.desc)) + "</p>" +
        '<div class="meters">' + meters + "</div>" +
        '<div class="card-foot"><span>' + tags + "</span>" +
        '<a class="link-btn" href="' + App.esc(App.mapUrl(b.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a></div>" +
        "</div></article>";
    }).join("");
    App.reveal(grid);
  }

  function render() { renderControls(); renderGrid(); }

  App.ready(function () {
    document.getElementById("chips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tag]"); if (!b) return; state.tag = b.getAttribute("data-tag"); renderControls(); renderGrid();
    });
    document.getElementById("sort").addEventListener("change", function (e) { state.sort = e.target.value; renderGrid(); });
    render();
  });
  App.onLang(render);
})();
