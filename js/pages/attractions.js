/* Página: Pontos turísticos — filtros por categoria, busca e modal de detalhes */
(function () {
  "use strict";
  var App = window.App;
  var state = { cat: "all", q: "" };
  var CATS = ["all", "icons", "nature", "culture", "views", "adventure", "family"];

  function priceBadge(p) {
    var cls = p === "free" ? "free" : "paid";
    return '<span class="badge ' + cls + '">' + App.esc(App.t("price." + p)) + "</span>";
  }

  function matches(a) {
    if (state.cat !== "all" && a.cats.indexOf(state.cat) === -1) return false;
    if (!state.q) return true;
    var hay = App.norm(App.tr(a.name) + " " + App.tr(a.desc) + " " + a.hood);
    return hay.indexOf(App.norm(state.q)) !== -1;
  }

  function renderChips() {
    var host = document.getElementById("chips");
    host.innerHTML = CATS.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' + (state.cat === c) + '">' +
        App.esc(App.t("attr.cat." + c)) + "</button>";
    }).join("");
  }

  function renderGrid() {
    var list = App.attractions.filter(matches);
    var grid = document.getElementById("grid");
    document.getElementById("count").textContent = App.t("common.results", { n: list.length });
    if (!list.length) { grid.innerHTML = '<p class="empty">' + App.esc(App.t("common.noResults")) + "</p>"; return; }
    grid.innerHTML = list.map(function (a) {
      var art = '<span class="emoji" aria-hidden="true">' + a.art.e + "</span>" + App.photoHtml(a, App.tr(a.name));
      return '<article class="card reveal">' +
        '<div class="card-art" style="--g1:' + a.art.g[0] + ";--g2:" + a.art.g[1] + '">' + art +
          '<span class="art-badge">' + priceBadge(a.price) + "</span></div>" +
        '<div class="card-body"><h3>' + App.esc(App.tr(a.name)) + "</h3>" +
          '<div class="card-meta"><span>📍 ' + App.esc(a.hood) + "</span><span>⏱ " + App.esc(App.tr(a.duration)) + "</span></div>" +
          "<p>" + App.esc(App.tr(a.desc)) + "</p>" +
          '<div class="card-foot"><button type="button" class="link-btn" data-open="' + a.id + '">' + App.esc(App.t("common.details")) + " →</button>" +
          '<a class="link-btn" href="' + App.esc(App.mapUrl(a.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a></div>" +
        "</div></article>";
    }).join("");
    App.reveal(grid);
  }

  function openDetail(id) {
    var a = App.attractions.filter(function (x) { return x.id === id; })[0];
    if (!a) return;
    var html =
      '<h2>' + App.esc(App.tr(a.name)) + "</h2>" +
      '<p class="note">📍 ' + App.esc(a.hood) + "</p>" +
      "<p>" + App.esc(App.tr(a.desc)) + "</p>" +
      '<div class="facts">' +
        '<div class="fact"><b>' + App.esc(App.t("common.duration")) + "</b>" + App.esc(App.tr(a.duration)) + "</div>" +
        '<div class="fact"><b>' + App.esc(App.t("common.price")) + "</b>" + App.esc(App.t("price." + a.price)) + "</div>" +
        '<div class="fact" style="grid-column:1/-1"><b>' + App.esc(App.t("common.bestTime")) + "</b>" + App.esc(App.tr(a.best)) + "</div>" +
      "</div>" +
      '<div class="callout"><strong>' + App.esc(App.t("common.tip")) + ":</strong> " + App.esc(App.tr(a.tip)) + "</div>" +
      '<a class="btn btn-dark btn-sm" href="' + App.esc(App.mapUrl(a.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a>" +
      '<p class="note" style="margin-top:1rem">' + App.esc(App.t("common.confirm")) + "</p>" + App.photoCreditLine(a);
    App.modal({ title: App.tr(a.name), html: html, g: a.art.g, emoji: a.art.e, img: a.img });
  }

  function render() { renderChips(); renderGrid(); }

  App.ready(function () {
    document.getElementById("chips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      state.cat = b.getAttribute("data-cat");
      render();
    });
    document.getElementById("search").addEventListener("input", function (e) { state.q = e.target.value.trim(); renderGrid(); });
    document.getElementById("grid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-open]");
      if (b) openDetail(b.getAttribute("data-open"));
    });
    render();
  });
  App.onLang(render);
})();
