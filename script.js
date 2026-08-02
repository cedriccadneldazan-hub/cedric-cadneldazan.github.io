/* =========================================================
   PORTFOLIO — script vanilla JS (aucune dépendance externe)
   - Menu mobile
   - Navigation active au scroll
   - Effet "terminal" dans le hero
   - Révélation des blocs au scroll
   - Année automatique dans le footer
   ========================================================= */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  function closeMenu() {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    sidebar.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      var isOpen = sidebar.classList.contains("is-open");
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeMenu(); }
    });
  }

  /* ---------- Navigation active au scroll ---------- */
  var sections = document.querySelectorAll(".section");
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { navObserver.observe(section); });
  }

  /* ---------- Effet terminal dans le hero ---------- */
  var typedEl = document.getElementById("typed-cmd");
  if (typedEl) {
    var command = "whoami --profil ssi-cybersecurite";
    if (reduceMotion) {
      typedEl.textContent = command;
    } else {
      var i = 0;
      (function typeChar() {
        if (i <= command.length) {
          typedEl.textContent = command.slice(0, i);
          i++;
          setTimeout(typeChar, 35);
        }
      })();
    }
  }

  /* ---------- Révélation des blocs au scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Année automatique ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

})();
