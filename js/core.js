/* ==========================================================================
   Rio Viva — núcleo: idioma (PT-BR / EN / ES), bandeiras SVG, cabeçalho,
   rodapé, modal e utilitários. Sem dependências; funciona via file://.
   ========================================================================== */
(function () {
  "use strict";

  var App = window.App = window.App || {};
  App.dict = App.dict || {};

  var LANGS = ["pt", "en", "es"];
  var LOCALES = { pt: "pt-BR", en: "en-US", es: "es-ES" };
  var HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
  var readyFns = [];
  var langFns = [];

  /* ---------- storage seguro (pode falhar em modo privado/file://) ---------- */
  App.store = {
    get: function (k, fallback) {
      try { var v = window.localStorage.getItem("rioviva." + k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem("rioviva." + k, JSON.stringify(v)); } catch (e) { /* ignora */ }
    }
  };

  /* ---------- idioma ---------- */
  function detectLang() {
    var q = /[?&]lang=(pt|en|es)\b/.exec(window.location.search);
    if (q) return q[1];
    var saved = App.store.get("lang", null);
    if (LANGS.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "en";
  }
  App.lang = detectLang();
  App.locale = function () { return LOCALES[App.lang]; };

  var warned = {};
  App.t = function (key, vars) {
    var e = App.dict[key];
    var s;
    if (!e) {
      if (!warned[key]) { warned[key] = 1; if (window.console) console.warn("[i18n] chave ausente:", key); }
      return key;
    }
    s = e[App.lang] || e.pt || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    return s;
  };
  /* traduz um objeto {pt,en,es} vindo dos dados */
  App.tr = function (o) {
    if (o === null || o === undefined) return "";
    if (typeof o === "string") return o;
    return o[App.lang] || o.pt || "";
  };
  App.esc = function (s) {
    return String(s === null || s === undefined ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };
  /* normaliza texto p/ busca (sem acentos, minúsculas) */
  App.norm = function (s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  };

  App.applyI18n = function (root) {
    root = root || document;
    var i, el, list;
    list = root.querySelectorAll("[data-i18n]");
    for (i = 0; i < list.length; i++) { el = list[i]; el.textContent = App.t(el.getAttribute("data-i18n")); }
    list = root.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < list.length; i++) { el = list[i]; el.innerHTML = App.t(el.getAttribute("data-i18n-html")); }
    list = root.querySelectorAll("[data-i18n-aria]");
    for (i = 0; i < list.length; i++) { el = list[i]; el.setAttribute("aria-label", App.t(el.getAttribute("data-i18n-aria"))); }
    list = root.querySelectorAll("[data-i18n-ph]");
    for (i = 0; i < list.length; i++) { el = list[i]; el.setAttribute("placeholder", App.t(el.getAttribute("data-i18n-ph"))); }
    list = root.querySelectorAll("[data-i18n-title]");
    for (i = 0; i < list.length; i++) { el = list[i]; el.setAttribute("title", App.t(el.getAttribute("data-i18n-title"))); }
    var desc = document.querySelector('meta[name="description"][data-i18n-content]');
    if (desc) desc.setAttribute("content", App.t(desc.getAttribute("data-i18n-content")));
  };

  App.setLang = function (lang) {
    if (LANGS.indexOf(lang) === -1) return;
    App.lang = lang;
    App.store.set("lang", lang);
    document.documentElement.lang = HTML_LANG[lang];
    App.applyI18n();
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-lang") === lang ? "true" : "false");
    }
    for (var j = 0; j < langFns.length; j++) { try { langFns[j](lang); } catch (e) { if (window.console) console.error(e); } }
  };

  App.onLang = function (fn) { langFns.push(fn); };
  App.ready = function (fn) { readyFns.push(fn); };

  /* ---------- bandeiras SVG ---------- */
  var FLAGS = {
    pt: '<svg class="flag" viewBox="0 0 30 20" role="img" aria-hidden="true" focusable="false">' +
        '<rect width="30" height="20" fill="#009b3a"/>' +
        '<polygon points="15,1.8 28,10 15,18.2 2,10" fill="#fedf00"/>' +
        '<circle cx="15" cy="10" r="4.9" fill="#002776"/>' +
        '<path d="M10.2 9.1C13.2 7.9 17.2 8.5 19.8 10.9" stroke="#fff" stroke-width="1" fill="none" stroke-linecap="round"/>' +
        '</svg>',
    en: '<svg class="flag" viewBox="0 0 60 40" preserveAspectRatio="none" role="img" aria-hidden="true" focusable="false">' +
        '<rect width="60" height="40" fill="#012169"/>' +
        '<path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="8"/>' +
        '<path d="M0 0L60 40M60 0L0 40" stroke="#c8102e" stroke-width="3"/>' +
        '<path d="M30 0V40M0 20H60" stroke="#fff" stroke-width="14"/>' +
        '<path d="M30 0V40M0 20H60" stroke="#c8102e" stroke-width="8"/>' +
        '</svg>',
    es: '<svg class="flag" viewBox="0 0 30 20" role="img" aria-hidden="true" focusable="false">' +
        '<rect width="30" height="20" fill="#aa151b"/>' +
        '<rect y="5" width="30" height="10" fill="#f1bf00"/>' +
        '<path d="M7.6 7.6h3.8v2.9c0 1.3-.9 2-1.9 2.4-1-.4-1.9-1.1-1.9-2.4z" fill="#aa151b" stroke="#7a1015" stroke-width=".35"/>' +
        '<rect x="8.5" y="8.4" width="1.9" height="1.1" fill="#f1bf00" opacity=".9"/>' +
        '</svg>'
  };
  App.flag = function (lang) { return FLAGS[lang] || ""; };

  /* ---------- cabeçalho / rodapé ---------- */
  var NAV = [
    { key: "home", href: "index.html" },
    { key: "calendar", href: "calendario.html" },
    { key: "attractions", href: "pontos-turisticos.html" },
    { key: "food", href: "gastronomia.html" },
    { key: "beaches", href: "praias.html" },
    { key: "tips", href: "dicas.html" },
    { key: "mobility", href: "mobilidade.html" }
  ];

  var BRAND_MARK =
    '<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
    '<defs><linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb703"/><stop offset="1" stop-color="#ff6b4a"/></linearGradient>' +
    '<clipPath id="bm-c"><circle cx="24" cy="24" r="23"/></clipPath></defs>' +
    '<g clip-path="url(#bm-c)"><rect width="48" height="48" fill="url(#bm-g)"/>' +
    '<path d="M0 34C8 30 12 31 18 32S30 36 48 31V48H0z" fill="#0e5a8a"/>' +
    '<path d="M6 34L16 17q2-3 4 0l7 12 4-6q2-3 4 0l7 11z" fill="#0a3d62"/>' +
    '<rect x="15.2" y="9" width="1.6" height="8" fill="#fff"/><rect x="12" y="11" width="8" height="1.6" fill="#fff"/></g>' +
    '</svg>';

  function buildHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    var page = document.body.getAttribute("data-page") || "home";
    var links = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.key === page ? ' aria-current="page"' : "") +
        ' data-i18n="nav.' + n.key + '"></a></li>';
    }).join("");
    var langBtns = LANGS.map(function (l) {
      return '<button type="button" class="lang-btn" data-lang="' + l + '" aria-pressed="false" ' +
        'data-i18n-title="lang.name.' + l + '" data-i18n-aria="lang.name.' + l + '">' +
        App.flag(l) + '<span class="lang-code">' + l.toUpperCase() + '</span></button>';
    }).join("");
    host.className = "site-header";
    host.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Rio Viva">' + BRAND_MARK +
          '<span class="brand-text"><span class="brand-name">Rio<span>Viva</span></span>' +
          '<span class="brand-tag" data-i18n="brand.tag"></span></span></a>' +
        '<nav class="main-nav" id="main-nav" data-i18n-aria="nav.aria"><ul>' + links + '</ul></nav>' +
        '<div class="lang" role="group" data-i18n-aria="lang.label">' + langBtns + '</div>' +
        '<button type="button" class="burger" aria-expanded="false" aria-controls="main-nav" data-i18n-aria="nav.menu"><span></span></button>' +
      '</div>';

    var burger = host.querySelector(".burger");
    var nav = host.querySelector(".main-nav");
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    });
    host.querySelector(".lang").addEventListener("click", function (e) {
      var b = e.target.closest(".lang-btn");
      if (b) App.setLang(b.getAttribute("data-lang"));
    });
  }

  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    var links = NAV.map(function (n) {
      return '<li><a href="' + n.href + '" data-i18n="nav.' + n.key + '"></a></li>';
    }).join("");
    host.className = "site-footer";
    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div><a class="brand" href="index.html">' + BRAND_MARK +
            '<span class="brand-text"><span class="brand-name">Rio<span>Viva</span></span>' +
            '<span class="brand-tag" data-i18n="brand.tag"></span></span></a>' +
            '<p data-i18n="footer.about"></p></div>' +
          '<div><h4 data-i18n="footer.explore"></h4><ul>' + links + '</ul></div>' +
          '<div><h4 data-i18n="footer.emergency.title"></h4><ul>' +
            '<li data-i18n="footer.emergency.police"></li><li data-i18n="footer.emergency.samu"></li>' +
            '<li data-i18n="footer.emergency.fire"></li></ul></div>' +
        '</div>' +
        '<div class="footer-bottom"><span data-i18n="footer.disclaimer"></span>' +
          '<span><a href="creditos.html" data-i18n="footer.credits"></a> · <span data-i18n="footer.rights"></span></span></div>' +
      '</div>';
  }

  /* ---------- modal (dialog nativo) ---------- */
  var dlg = null;
  App.modal = function (opts) {
    if (!dlg) {
      dlg = document.createElement("dialog");
      dlg.className = "modal";
      dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
      document.body.appendChild(dlg);
    }
    dlg.setAttribute("aria-label", opts.title || "");
    dlg.style.setProperty("--g1", (opts.g && opts.g[0]) || "#0a3d62");
    dlg.style.setProperty("--g2", (opts.g && opts.g[1]) || "#12a4a0");
    dlg.innerHTML =
      '<div class="modal-art">' + (opts.img ? '<img src="' + App.esc(opts.img) + '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">' : '<span aria-hidden="true">' + (opts.emoji || "") + "</span>") +
      '<button type="button" class="modal-close" aria-label="' + App.esc(App.t("common.close")) + '">&times;</button></div>' +
      '<div class="modal-body">' + opts.html + "</div>";
    dlg.querySelector(".modal-close").addEventListener("click", function () { dlg.close(); });
    if (typeof dlg.showModal === "function") { if (!dlg.open) dlg.showModal(); } else { dlg.setAttribute("open", ""); }
  };

  /* ---------- helpers de data ---------- */
  App.fmtDate = function (d, opts) { return new Intl.DateTimeFormat(App.locale(), opts).format(d); };
  App.pad = function (n) { return (n < 10 ? "0" : "") + n; };
  App.iso = function (d) { return d.getFullYear() + "-" + App.pad(d.getMonth() + 1) + "-" + App.pad(d.getDate()); };
  App.parseISO = function (s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); };

  /* link p/ mapa (apenas ao clicar; nada é enviado antes) */
  App.mapUrl = function (q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q + ", Rio de Janeiro, RJ"); };

  /* ---------- reveal on scroll ---------- */
  App.reveal = function (root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { for (var i = 0; i < els.length; i++) els[i].classList.add("in"); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  };

  /* ---------- boot ---------- */
  function boot() {
    buildHeader();
    buildFooter();
    document.documentElement.lang = HTML_LANG[App.lang];
    App.applyI18n();
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-lang") === App.lang ? "true" : "false");
    }
    for (var j = 0; j < readyFns.length; j++) { try { readyFns[j](); } catch (e) { if (window.console) console.error(e); } }
    App.reveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
