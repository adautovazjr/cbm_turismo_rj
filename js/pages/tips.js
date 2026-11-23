/* Página: Dicas — dicas essenciais (acordeão), roteiros (1/3/5 dias) e checklist persistente */
(function () {
  "use strict";
  var App = window.App;
  var state = { tab: "essentials", trip: "d3" };
  var checked = {};

  function renderEssentials() {
    document.getElementById("accordion").innerHTML = App.tips.map(function (t, i) {
      var lis = t.items[App.lang] || t.items.pt;
      return '<details' + (i === 0 ? " open" : "") + "><summary><span class=\"ico\" aria-hidden=\"true\">" + t.e + "</span>" + App.esc(App.tr(t.title)) + "</summary>" +
        '<div class="acc-body"><ul>' + lis.map(function (x) { return "<li>" + App.esc(x) + "</li>"; }).join("") + "</ul></div></details>";
    }).join("");
  }

  function renderTrip() {
    var days = App.itineraries[state.trip];
    document.querySelectorAll("[data-trip]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-trip") === state.trip ? "true" : "false"); });
    document.getElementById("itinerary").innerHTML = days.map(function (d, i) {
      return '<div class="day"><div class="day-head"><span class="num">' + (i + 1) + "</span><h3>" + App.esc(App.t("tips.day", { n: i + 1 })) + " · " + App.esc(App.tr(d.title)) + "</h3></div>" +
        '<div class="slots">' +
        '<div class="slot"><b>🌅 ' + App.esc(App.t("tips.morning")) + "</b><p>" + App.esc(App.tr(d.m)) + "</p></div>" +
        '<div class="slot"><b>☀️ ' + App.esc(App.t("tips.afternoon")) + "</b><p>" + App.esc(App.tr(d.a)) + "</p></div>" +
        '<div class="slot"><b>🌙 ' + App.esc(App.t("tips.evening")) + "</b><p>" + App.esc(App.tr(d.n)) + "</p></div>" +
        "</div></div>";
    }).join("");
  }

  function renderChecklist() {
    document.getElementById("checklist").innerHTML = App.checklist.map(function (c) {
      return '<li><label><input type="checkbox" data-id="' + c.id + '"' + (checked[c.id] ? " checked" : "") + "><span>" + c.e + " " + App.esc(App.tr(c.t)) + "</span></label></li>";
    }).join("");
    updateProgress();
  }

  function updateProgress() {
    var done = App.checklist.filter(function (c) { return checked[c.id]; }).length;
    var total = App.checklist.length;
    document.getElementById("progress-bar").style.width = Math.round(done / total * 100) + "%";
    document.getElementById("progress-text").textContent = App.t("tips.progress", { done: done, total: total });
  }

  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.getAttribute("data-tab") === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      document.getElementById("panel-" + t.getAttribute("data-tab")).hidden = !on;
    });
  }

  function render() { renderEssentials(); renderTrip(); renderChecklist(); }

  App.ready(function () {
    checked = App.store.get("checklist", {}) || {};
    document.querySelector(".tabs").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]"); if (b) setTab(b.getAttribute("data-tab"));
    });
    document.getElementById("trip-chips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-trip]"); if (!b) return; state.trip = b.getAttribute("data-trip"); renderTrip();
    });
    document.getElementById("checklist").addEventListener("change", function (e) {
      var id = e.target.getAttribute("data-id"); if (!id) return;
      checked[id] = e.target.checked; App.store.set("checklist", checked); updateProgress();
    });
    document.getElementById("reset-list").addEventListener("click", function () { checked = {}; App.store.set("checklist", checked); renderChecklist(); });
    render();
    setTab(state.tab);
  });
  App.onLang(render);
})();
