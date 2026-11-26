(function () {
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".menu-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const galleries = {
    bsc: [
      {
        src: "assets/screenshots/bsc-accueil.webp",
        alt: "Page d’accueil de Belgian Slot Club, avec le hero et la sélection des clubs Slot 4000 et SRCS, en mode sombre",
        caption: "Belgian Slot Club — accueil (mode sombre)",
      },
      {
        src: "assets/screenshots/bsc-championnat.webp",
        alt: "Classement général du championnat Slot 4000, saison 2026, catégorie Groupe 5, en mode sombre",
        caption: "Belgian Slot Club — classement championnat (mode sombre)",
      },
      {
        src: "assets/screenshots/bsc-calendrier.webp",
        alt: "Calendrier commun des clubs en mode sombre, prochain événement et export vers Google, Apple ou fichier .ics",
        caption: "Belgian Slot Club — calendrier et export .ics (mode sombre)",
      },
    ],
    artisan: [
      {
        src: "assets/screenshots/artisan-pro-recettes.webp",
        alt: "Écran Recettes d’Artisan Pro : liste des recettes avec coût de revient, prix de vente, marge et rentabilité",
        caption: "Artisan Pro — recettes et marges",
      },
      {
        src: "assets/screenshots/artisan-pro-accueil.webp",
        alt: "Tableau de bord Accueil d’Artisan Pro : production du jour, livraisons, besoins d’achat, alertes et actions rapides",
        caption: "Artisan Pro — tableau de bord Accueil",
      },
    ],
    balade: [
      {
        src: "assets/screenshots/balade-accueil.webp",
        alt: "Écran d’accueil de BaladeVélo : choix du lieu de départ, de la distance et du type de terrain",
        caption: "BaladeVélo — création d’une balade",
      },
      {
        src: "assets/screenshots/balade-parcours.webp",
        alt: "Boucle mixte de 31 km générée depuis Liège, avec carte, dénivelé, export GPX et ouverture dans Plans",
        caption: "BaladeVélo — boucle générée depuis Liège",
      },
    ],
    qr: [
      {
        src: "assets/screenshots/qr-accueil.webp",
        alt: "Interface du générateur de QR codes, prête à saisir un texte ou une URL",
        caption: "Générateur de QR codes — accueil",
      },
      {
        src: "assets/screenshots/qr-genere.webp",
        alt: "QR code généré localement pour l’adresse https://thibaut-sudo.github.io",
        caption: "Générateur de QR codes — QR généré",
      },
    ],
  };

  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  let current = galleries.bsc;
  let index = 0;
  let lastFocus = null;

  function show(i) {
    index = (i + current.length) % current.length;
    const item = current[index];
    image.src = item.src;
    image.alt = item.alt;
    caption.textContent = item.caption + " · " + (index + 1) + " / " + current.length;
  }

  function open(name, i) {
    current = galleries[name] || galleries.bsc;
    lastFocus = document.activeElement;
    show(i);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector("[data-close]").focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.querySelectorAll("[data-gallery]").forEach((btn) => {
    btn.addEventListener("click", () => open(btn.dataset.gallery, Number(btn.dataset.index) || 0));
  });

  lightbox.querySelector("[data-close]").addEventListener("click", close);
  lightbox.querySelector("[data-prev]").addEventListener("click", () => show(index - 1));
  lightbox.querySelector("[data-next]").addEventListener("click", () => show(index + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });
})();
