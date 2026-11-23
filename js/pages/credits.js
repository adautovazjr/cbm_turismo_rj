/* Página: Créditos das fotos — gerada a partir de App.photos */
(function () {
  "use strict";
  var App = window.App;

  var GROUPS = [
    { key: "attractions", list: function () { return App.attractions; } },
    { key: "dishes", list: function () { return App.dishes; } },
    { key: "places", list: function () { return App.places; } }
  ];

  function row(it) {
    var p = it.photo;
    return '<div class="credit-row"><img src="' + App.esc(p.src) + '" alt="" loading="lazy">' +
      "<div><h3>" + App.esc(App.tr(it.name)) + (p.illus ? '<span class="badge">' + App.esc(App.t("photo.illus")) + "</span>" : "") + "</h3>" +
      "<p>" + App.esc(App.t("credits.by")) + ": " + App.esc(p.author) + " · " + App.esc(p.license) +
      ' · <a href="' + App.esc(p.page) + '" target="_blank" rel="noopener noreferrer">' + App.esc(App.t("credits.original")) + " ↗</a></p></div></div>";
  }

  function render() {
    document.getElementById("credits-root").innerHTML = GROUPS.map(function (g) {
      var items = g.list().filter(function (it) { return it.photo; });
      return '<h2 style="margin:1.6rem 0 .8rem">' + App.esc(App.t("credits." + g.key)) + '</h2><div class="credit-list">' + items.map(row).join("") + "</div>";
    }).join("");
  }

  App.ready(render);
  App.onLang(render);
})();
