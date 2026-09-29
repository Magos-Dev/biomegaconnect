// ===== WhatsApp: abre a escolha da loja =====
var waGroup = document.getElementById("waGroup");
var waToggle = document.getElementById("waToggle");

waToggle.addEventListener("click", function () {
  var open = !waGroup.classList.contains("is-open");
  waGroup.classList.toggle("is-open", open);
  waToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// ===== Pino do Maps: mostra as duas lojas =====
var stores = document.querySelector(".stores");
var pinToggle = document.getElementById("pinToggle");
var mapsLoaded = false;

// Os mapas só carregam quando a pessoa abre, para a página abrir rápido no 4G
function loadMaps() {
  if (mapsLoaded) return;
  mapsLoaded = true;
  var maps = document.querySelectorAll(".map[data-src]");
  for (var i = 0; i < maps.length; i++) {
    var frame = document.createElement("iframe");
    frame.src = maps[i].getAttribute("data-src");
    frame.title = maps[i].getAttribute("data-title");
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    maps[i].appendChild(frame);
  }
}

pinToggle.addEventListener("click", function () {
  var open = !stores.classList.contains("is-open");
  stores.classList.toggle("is-open", open);
  pinToggle.setAttribute("aria-expanded", open ? "true" : "false");
  pinToggle.querySelector(".pin-label").textContent = open ? "Esconder as lojas" : "Ver as lojas no mapa";
  if (open) {
    loadMaps();
    setTimeout(function () {
      document.getElementById("storesPanel").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }
});
