/* Fotos dos cards (Pontos turísticos e Gastronomia).
   Arquivos locais em /img, originalmente do Wikimedia Commons, com licença livre.
   illus: true = foto ilustrativa (mostra o prato/ambiente típico, não o estabelecimento em si).
   Para trocar uma foto: substitua o arquivo em /img e atualize autor/licença abaixo. */
(function () {
  "use strict";
  var App = window.App = window.App || {};

  App.photos = {
    "attractions/amanha": { src: "img/attractions/amanha.jpg", author: "Arne Müseler", license: "CC BY-SA 3.0 DE", page: "https://commons.wikimedia.org/wiki/File:Museu_do_Amanh%C3%A3_rio.jpg" },
    "attractions/centro": { src: "img/attractions/centro.jpg", author: "Mike Peel", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:At_Rio_de_Janeiro_2019_208.jpg" },
    "attractions/cristo": { src: "img/attractions/cristo.jpg", author: "Donatas Dabravolskas", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Redentor_Over_Clouds_1.jpg" },
    "attractions/jardim": { src: "img/attractions/jardim.jpg", author: "Rjcastillo", license: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Entrada_Jard%C3%ADn_Bot%C3%A1nico,_R%C3%ADo_de_Janeiro_A74283320241124.jpg" },
    "attractions/lage": { src: "img/attractions/lage.jpg", author: "Wilfredor", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Parque_Lage,_Rio_de_Janeiro.jpg" },
    "attractions/lagoa": { src: "img/attractions/lagoa.jpg", author: "renatadihl", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Lagoa_Rodrigo_de_Freitas.jpg" },
    "attractions/maracana": { src: "img/attractions/maracana.jpg", author: "Rodrigo Soldon", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Est%C3%A1dio_do_Maracan%C3%A3_from_mountain.jpg" },
    "attractions/pao": { src: "img/attractions/pao.jpg", author: "Wilfredor", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Sugarloaf_Cable_Car_viewed_from_Rio_de_Janeiro,_Brazil.jpg" },
    "attractions/santa": { src: "img/attractions/santa.jpg", author: "MTur Destinos", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:BrunaPrado_Bonde_de_Santa_Teresa_Rio_de_Janeiro_RJ_(41577817931).jpg" },
    "attractions/selaron": { src: "img/attractions/selaron.jpg", author: "Donatas Dabravolskas", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Colorful_Selaron_Stairs_3.jpg" },
    "attractions/tijuca": { src: "img/attractions/tijuca.jpg", author: "Halley Pacheco de Oliveira", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Floresta_da_Tijuca_60.jpg" },
    "attractions/voo": { src: "img/attractions/voo.jpg", author: "Halley Pacheco de Oliveira", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Asa_Delta_pousando_em_S%C3%A3o_Conrado.JPG" },
    "dishes/acai": { src: "img/dishes/acai.jpg", author: "Phil Whitehouse", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:A%C3%A7a%C3%AD_bowl_(6469934187).jpg" },
    "dishes/bolinho": { src: "img/dishes/bolinho.jpg", author: "Eduardo P", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Bolinhos_de_bacalhau.jpg" },
    "dishes/caipirinha": { src: "img/dishes/caipirinha.jpg", author: "rawpixel.com", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Caipirinha_with_lime.jpg" },
    "dishes/churrasco": { src: "img/dishes/churrasco.jpg", author: "Leonardo Carvalho", license: "CC BY-SA 2.5", page: "https://commons.wikimedia.org/wiki/File:Churrasco_carioca.jpg" },
    "dishes/feijoada": { src: "img/dishes/feijoada.jpg", author: "Andre Rebeiro", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Feijoada_completa.jpg" },
    "dishes/globo": { src: "img/dishes/globo.jpg", author: "DiegoL569", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Vendedor_de_Mate_do_Rio_de_Janeiro.jpg", illus: true },
    "dishes/pastel": { src: "img/dishes/pastel.jpg", author: "Melsj", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Past%C3%A9is_e_caldo_de_cana.jpg" },
    "dishes/pernil": { src: "img/dishes/pernil.jpg", author: "Monica Kaneko", license: "CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Sanduiche_de_pernil_e_suco_de_laranja_(5892293245).jpg" },
    "places/aprazivel": { src: "img/places/aprazivel.jpg", author: "Virgilio Luiz", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Downtown_of_Rio_de_Janeiro,_seen_from_Chacara_do_Ceu_Museum_(Santa_Teresa).jpg", illus: true },
    "places/barluiz": { src: "img/places/barluiz.jpg", author: "Eugenio Hansen", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Bar_Luiz_1887.JPG" },
    "places/bipbip": { src: "img/places/bipbip.jpg", author: "Lgjunior", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Show_no_Bip_Bip_-_Copacabana_-_RJ.jpg" },
    "places/casafeijoada": { src: "img/places/casafeijoada.jpg", author: "Bradleyzm", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Feijoada_%C3%A0_brasileira_-02.jpg", illus: true },
    "places/cervantes": { src: "img/places/cervantes.jpg", author: "amanderson2", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Cervantes_Especial_Filet_Mignon_Frois_Pate_and_Pineapple_sandwich_Copacabana_Rio_De_Janeiro.jpg" },
    "places/colombo": { src: "img/places/colombo.jpg", author: "Boaventuravinicius", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Confeitaria_Colombo_no_Centro_do_Rio.jpg" },
    "places/lamas": { src: "img/places/lamas.jpg", author: "Vinicius Siqueira", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Fil%C3%A9_a_Osvaldo_Aranha.jpg", illus: true },
    "places/mineiro": { src: "img/places/mineiro.jpg", author: "Ridiculopathy", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Feijoada_(Brazilian_dish),_S%C3%A3o_Lu%C3%ADs,_Maranh%C3%A3o.jpg", illus: true },
    "places/pedradosal": { src: "img/places/pedradosal.jpg", author: "Maria Eduarda Araújo de Oliveira", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:In%C3%ADcio_da_Pedra_do_Sal.jpg" },
    "places/perola": { src: "img/places/perola.jpg", author: "Christian Benseler", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Bolinho_de_bacalhau_da_vov%C3%B3_(16079982696).jpg", illus: true },
    "places/porcao": { src: "img/places/porcao.jpg", author: "Julio Cesar Martins", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Costela_no_Fogo.JPG", illus: true },
    "places/saocristovao": { src: "img/places/saocristovao.jpg", author: "Wilfredor", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Market_interior_at_Centro_Luiz_Gonzaga,_Rio_de_Janeiro,_Brazil.jpg" }
  };

  /* Liga cada foto ao item correspondente (campo img). */
  function attach(list, group) {
    (list || []).forEach(function (it) {
      var p = App.photos[group + "/" + it.id];
      if (p) { it.img = p.src; it.photo = p; }
    });
  }
  attach(App.attractions, "attractions");
  attach(App.dishes, "dishes");
  attach(App.places, "places");

  /* HTML da foto + crédito sobreposto (vazio se o item não tem foto). Se o arquivo falhar, o emoji do card aparece. */
  App.photoHtml = function (it, alt) {
    if (!it.img) return "";
    var p = it.photo;
    return '<img src="' + App.esc(it.img) + '" alt="' + App.esc(alt) + '" loading="lazy" onerror="this.remove()">' +
      '<span class="photo-credit">' + (p.illus ? App.esc(App.t("photo.illus")) + " · " : "") +
      "📷 " + App.esc(p.author) + " · " + App.esc(p.license) + "</span>";
  };

  /* Linha de crédito para o modal. */
  App.photoCreditLine = function (it) {
    if (!it.img) return "";
    var p = it.photo;
    return '<p class="note photo-note">' + (p.illus ? App.esc(App.t("photo.illus.long")) + " " : "") +
      '📷 <a href="' + App.esc(p.page) + '" target="_blank" rel="noopener noreferrer">' + App.esc(p.author) + "</a> · " + App.esc(p.license) +
      ' · <a href="creditos.html">' + App.esc(App.t("footer.credits")) + "</a></p>";
  };
})();
