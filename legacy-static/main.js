/* ============================================================
   OYSTERS & PEBBLES AUTOS — main.js
   ============================================================ */

/* ── NAV: shrink on scroll ── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
    } else {
      nav.style.borderBottomColor = '';
    }
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── MOBILE MENU ── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    if (open) {
      menu.hidden = true;
    } else {
      menu.hidden = false;
    }
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── INVENTORY FILTER ── */
(function () {
  function applyFilter(grid, filter, btns, countEls, emptyEl) {
    const cards = grid.querySelectorAll('[data-tags]');
    let visible = 0;

    cards.forEach(card => {
      let show = filter === 'all';
      if (!show) {
        const tags = (card.dataset.tags || '').split(' ');
        show = tags.includes(filter);
      }
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (countEls.visible) countEls.visible.textContent = visible;
    if (emptyEl) emptyEl.classList.toggle('hidden', visible > 0);
  }

  document.querySelectorAll('.inventory-toolbar').forEach(toolbar => {
    const gridId = toolbar.dataset.target;
    const grid = gridId ? document.getElementById(gridId) : null;
    if (!grid) return;

    const btns = toolbar.querySelectorAll('.filter-btn');
    const countEls = {
      visible: toolbar.querySelector('#visible-count') || toolbar.querySelector('.inventory-count span:first-child'),
      total: toolbar.querySelector('#total-count')
    };
    const emptyEl = document.getElementById('gallery-empty');
    const cards = grid.querySelectorAll('[data-tags]');
    if (countEls.total) countEls.total.textContent = cards.length;

    const runFilter = (filter) => {
      btns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
      applyFilter(grid, filter, btns, countEls, emptyEl);
    };

    btns.forEach(btn => {
      btn.addEventListener('click', () => runFilter(btn.dataset.filter));
    });

    const params = new URLSearchParams(window.location.search);
    const initial = params.get('filter');
    if (initial && [...btns].some(b => b.dataset.filter === initial)) {
      runFilter(initial);
    }
  });

  /* Homepage featured grid (no toolbar) */
  const homeGrid = document.getElementById('car-grid');
  if (homeGrid && !homeGrid.closest('.inventory-toolbar')) {
    const homeSection = homeGrid.closest('.section');
    const btns = homeSection?.querySelectorAll('.filter-btn');
    if (!btns?.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(homeGrid, btn.dataset.filter, btns, {}, null);
      });
    });
  }
})();

/* ── SCROLL REVEAL ── */
(function () {
  const els = document.querySelectorAll(
    '.car-card, .gallery-card, .service-card, .brand-tile, .testimonial, .trust-item, .stat, .value-card, .team-card, .partner-tile'
  );
  els.forEach(el => el.classList.add('reveal'));

  if (!window.IntersectionObserver) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
})();

/* ── SMOOTH ACTIVE NAV LINK ── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        links.forEach(a => {
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = 'var(--text)';
          } else {
            a.style.color = '';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
})();
