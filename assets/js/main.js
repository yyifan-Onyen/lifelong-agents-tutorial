/**
* Main script for EMNLP 2026 Lifelong Language Agents Tutorial.
* Adapted from the TheEvent template (BootstrapMade) used by the Lifelong Agents
* Workshop site. Trimmed to remove unused gallery / lightbox dependencies.
*/
(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (!selectEl) return;
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => el.addEventListener("scroll", listener);

  // Highlight nav links for the section currently in view
  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((link) => {
      if (!link.hash) return;
      const section = select(link.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  // Smooth-scroll to anchor with header offset
  const scrollto = (el) => {
    const header = select("#header");
    let offset = header.offsetHeight;
    if (!header.classList.contains("header-scrolled")) offset -= 20;
    const target = select(el);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
  };

  // Shrink/darken header once the user has scrolled
  const selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  // Back-to-top floating button
  const backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) backtotop.classList.add("active");
      else backtotop.classList.remove("active");
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  // Mobile nav toggle
  on("click", ".mobile-nav-toggle", function () {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  // Anchor scrolling for .scrollto links
  on(
    "click",
    ".scrollto",
    function (e) {
      if (!this.hash || !select(this.hash)) return;
      e.preventDefault();
      const navbar = select("#navbar");
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        const navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }
      scrollto(this.hash);
    },
    true
  );

  // Respect a hash already present on page load
  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  // Scroll-reveal animations
  window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });
    }
  });
})();
