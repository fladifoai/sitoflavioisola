// ===== MOBILE NAV =====
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ===== ACCORDION (FAQ, Hotels) =====
  document.querySelectorAll('.faq-item__question, .hotel-item__header').forEach(function (el) {
    el.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });

  // ===== PACKAGE EXPANDABLE ITEMS =====
  document.querySelectorAll('.package-card__item--expandable').forEach(function (el) {
    el.addEventListener('click', function () {
      this.classList.toggle('active');
      var detail = this.nextElementSibling;
      if (detail && detail.classList.contains('package-card__item-detail')) {
        detail.classList.toggle('show');
      }
    });
  });

  // ===== COUNTDOWN =====
  var targetDate = new Date('2026-05-01T14:00:00+02:00').getTime();

  function updateCountdown() {
    var now = new Date().getTime();
    var diff = targetDate - now;

    if (diff <= 0) {
      document.querySelectorAll('.countdown__number').forEach(function (el) {
        el.textContent = '0';
      });
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var daysEl = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minsEl = document.getElementById('cd-mins');
    var secsEl = document.getElementById('cd-secs');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ===== BOOKING BARS ANIMATION =====
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.booking-bar__fill').forEach(function (bar) {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.booking-status').forEach(function (el) {
    observer.observe(el);
  });
});
