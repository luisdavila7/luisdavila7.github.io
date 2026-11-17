// main.js — progressive-enhancement interactions shared by index.html and
// curriculum.html. Everything here is additive: if this script fails to
// load or run, the page is still fully usable and fully visible. Content
// is never hidden pending a script action — see CHANGELOG v1.2.0 for why
// (a previous scroll-reveal version hid sections behind opacity:0 until
// an IntersectionObserver callback restored them, which is exactly the
// kind of "invisible until something else succeeds" pattern that isn't
// worth the risk on a small static site).
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Subtle nav shadow once the page has scrolled past the top.
    var nav = document.querySelector('.nav, .nav-sidebar');
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('is-scrolled', window.scrollY > 12);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Mobile nav toggle: close the dropdown after a link is clicked, and
    // keep aria-expanded on the toggle label in sync with the checkbox
    // for screen-reader users (the checkbox/label pair alone gives
    // keyboard + visual behavior for free, but not the ARIA state).
    var navToggle = document.querySelector('.nav-toggle-checkbox');
    var navLabel = document.querySelector('.nav-toggle-label');
    if (navToggle) {
      var syncExpanded = function () {
        if (navLabel) {
          navLabel.setAttribute('aria-expanded', navToggle.checked ? 'true' : 'false');
        }
      };
      navToggle.addEventListener('change', syncExpanded);

      document.querySelectorAll('.nav-list a, .sidebar-list a, .nav-cta, .nav-brand').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.checked = false;
          syncExpanded();
        });
      });
    }
  });
})();
