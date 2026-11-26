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

  const gallery = [
    {
      src: "assets/screenshots/bsc-accueil.webp",
      alt: "Page d’accueil de Belgian Slot Club, avec le hero et la sélection des clubs Slot 4000 et SRCS",
      caption: "Belgian Slot Club — accueil",
    },
    {
      src: "assets/screenshots/bsc-championnat.webp",
      alt: "Classement général du championnat Slot 4000, saison 2026, catégorie Groupe 5",
      caption: "Belgian Slot Club — classement championnat (Slot 4000)",
    },
    {
      src: "assets/screenshots/bsc-calendrier.webp",
      alt: "Calendrier commun des clubs, prochain événement et export vers Google, Apple ou fichier .ics",
      caption: "Belgian Slot Club — calendrier et export .ics",
    },
  ];

  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  let index = 0;
  let lastFocus = null;

  function show(i) {
    index = (i + gallery.length) % gallery.length;
    const item = gallery[index];
    image.src = item.src;
    image.alt = item.alt;
    caption.textContent = item.caption + " · " + (index + 1) + " / " + gallery.length;
  }

  function open(i) {
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

  document.querySelectorAll("[data-gallery='bsc']").forEach((btn) => {
    btn.addEventListener("click", () => open(Number(btn.dataset.index) || 0));
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
