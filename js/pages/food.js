/* Página: Gastronomia — pratos típicos + lugares (filtro por tipo/preço, busca, modal) */
(function () {
  "use strict";
  var App = window.App;
  var state = { tab: "dishes", type: "all", price: "all", q: "" };
  var TYPES = ["all", "traditional", "cafe", "bar", "steak", "market", "samba"];

  function money(n) { var s = ""; for (var i = 0; i < 3; i++) s += i < n ? "$" : '<span style="opacity:.25">$</span>'; return s; }

  function renderDishes() {
    document.getElementById("dishes-grid").innerHTML = App.dishes.map(function (d) {
      return '<article class="card reveal"><div class="card-art" style="--g1:' + d.g[0] + ";--g2:" + d.g[1] + '">' +
        '<span class="emoji" aria-hidden="true">' + d.e + "</span>" + App.photoHtml(d, App.tr(d.name)) + "</div>" +
        '<div class="card-body"><h3>' + App.esc(App.tr(d.name)) + "</h3><p>" + App.esc(App.tr(d.desc)) + "</p></div></article>";
    }).join("");
  }

  function matches(p) {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (state.price !== "all" && String(p.price) !== state.price) return false;
    if (!state.q) return true;
    return App.norm(App.tr(p.name) + " " + App.tr(p.desc) + " " + p.hood + " " + App.tr(p.try)).indexOf(App.norm(state.q)) !== -1;
  }

  function renderChips() {
    document.getElementById("type-chips").innerHTML = TYPES.map(function (t) {
      return '<button type="button" class="chip" data-type="' + t + '" aria-pressed="' + (state.type === t) + '">' + App.esc(App.t("food.type." + t)) + "</button>";
    }).join("");
    var sel = document.getElementById("price");
    var opts = [["all", App.t("food.price.all")], ["1", "$"], ["2", "$$"], ["3", "$$$"]];
    sel.innerHTML = opts.map(function (o) { return '<option value="' + o[0] + '"' + (state.price === o[0] ? " selected" : "") + ">" + App.esc(o[1]) + "</option>"; }).join("");
  }

  function renderPlaces() {
    var list = App.places.filter(matches);
    var grid = document.getElementById("places-grid");
    document.getElementById("count").textContent = App.t("common.results", { n: list.length });
    if (!list.length) { grid.innerHTML = '<p class="empty">' + App.esc(App.t("common.noResults")) + "</p>"; return; }
    grid.innerHTML = list.map(function (p) {
      return '<article class="card reveal"><div class="card-art" style="--g1:' + p.g[0] + ";--g2:" + p.g[1] + '">' +
        '<span class="emoji" aria-hidden="true">' + p.e + "</span>" + App.photoHtml(p, App.tr(p.name)) +
        '<span class="art-badge"><span class="badge glass">' + App.esc(App.t("food.type." + p.type)) + "</span></span></div>" +
        '<div class="card-body"><h3>' + App.esc(App.tr(p.name)) + "</h3>" +
        '<div class="card-meta"><span>📍 ' + App.esc(p.hood) + "</span><span>" + money(p.price) + "</span>" +
          (p.since ? "<span>🕰 " + App.esc(App.t("food.since", { y: p.since })) + "</span>" : "") + "</div>" +
        "<p>" + App.esc(App.tr(p.desc)) + "</p>" +
        '<div class="card-foot"><button type="button" class="link-btn" data-open="' + p.id + '">' + App.esc(App.t("common.details")) + " →</button>" +
        '<a class="link-btn" href="' + App.esc(App.mapUrl(p.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a></div>" +
        "</div></article>";
    }).join("");
    App.reveal(grid);
  }

  function openDetail(id) {
    var p = App.places.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var html = "<h2>" + App.esc(App.tr(p.name)) + "</h2>" +
      '<p class="note">📍 ' + App.esc(p.hood) + "</p><p>" + App.esc(App.tr(p.desc)) + "</p>" +
      '<div class="facts">' +
        '<div class="fact"><b>' + App.esc(App.t("food.modal.type")) + "</b>" + App.esc(App.t("food.type." + p.type)) + "</div>" +
        '<div class="fact"><b>' + App.esc(App.t("food.modal.price")) + "</b>" + money(p.price) + "</div>" +
        '<div class="fact" style="grid-column:1/-1"><b>' + App.esc(App.t("food.modal.try")) + "</b>" + App.esc(App.tr(p.try)) + "</div>" +
      "</div>" +
      '<a class="btn btn-dark btn-sm" href="' + App.esc(App.mapUrl(p.map)) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("common.openMap")) + " ↗</a>" +
      '<p class="note" style="margin-top:1rem">' + App.esc(App.t("common.confirm")) + "</p>" + App.photoCreditLine(p);
    App.modal({ title: App.tr(p.name), html: html, g: p.g, emoji: p.e, img: p.img });
  }

  function setTab(tab) {
    state.tab = tab;
    var tabs = document.querySelectorAll(".tab");
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute("data-tab") === tab;
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      document.getElementById("panel-" + tabs[i].getAttribute("data-tab")).hidden = !on;
    }
    App.reveal();
  }

  function render() { renderDishes(); renderChips(); renderPlaces(); App.reveal(); }

  App.ready(function () {
    document.querySelector(".tabs").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]"); if (b) setTab(b.getAttribute("data-tab"));
    });
    document.getElementById("type-chips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-type]"); if (!b) return; state.type = b.getAttribute("data-type"); renderChips(); renderPlaces();
    });
    document.getElementById("price").addEventListener("change", function (e) { state.price = e.target.value; renderPlaces(); });
    document.getElementById("search").addEventListener("input", function (e) { state.q = e.target.value.trim(); renderPlaces(); });
    document.getElementById("places-grid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-open]"); if (b) openDetail(b.getAttribute("data-open"));
    });
    render();
    setTab(state.tab);
  });
  App.onLang(render);
})();
