// main.js — progressive-enhancement interactions shared by index.html and
// curriculum.html. Everything here is additive: if this script fails to
// load or run, the page is still fully usable and fully visible.
(function () {
  'use strict';

  // Tag <html> so base.css knows it's safe to apply the .reveal hidden
  // pending-state (see base.css) — without this, .reveal elements are
  // just visible, no fade-in.
  document.documentElement.classList.add('js-ready');

  document.addEventListener('DOMContentLoaded', function () {
    // Subtle nav shadow once the page has scrolled past the top.
    var nav = document.querySelector('.nav, #navbar');
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('is-scrolled', window.scrollY > 12);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Close the mobile nav dropdown after a link is clicked (the toggle
    // is a plain checkbox, so without this it would stay open until the
    // user taps the hamburger again).
    var navToggle = document.querySelector('.nav-toggle-checkbox');
    if (navToggle) {
      document.querySelectorAll('.nav-list a, #navbar ul a').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.checked = false;
        });
      });
    }

    // Scroll-reveal for elements marked .reveal.
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        revealEls.forEach(function (el) {
          observer.observe(el);
        });
      } else {
        // No IntersectionObserver support — just show everything.
        revealEls.forEach(function (el) {
          el.classList.add('is-visible');
        });
      }
    }
  });
})();
