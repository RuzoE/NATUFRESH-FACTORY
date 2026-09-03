/* ==========================================================================
   NATUFRESH FACTORY S.A.S. - INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer structure identical across the landing page and subpages.
  const footer = document.querySelector('.footer');
  if (footer) {
    const assetPath = window.location.pathname.includes('/html/') ? '../' : '';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">NATUFRESH FACTORY S.A.S.</div>
            <p>Transformamos aceites usados en jabones artesanales y soluciones de aseo sostenibles mediante saponificación controlada en Bogotá D.C.</p>
            <div class="social-links">
              <a href="#" class="social-icon" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" class="social-icon" aria-label="Facebook"><strong>f</strong></a>
              <a href="#" class="social-icon" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
              <a href="#" class="social-icon" aria-label="LinkedIn"><strong>in</strong></a>
            </div>
          </div>
          <div>
            <h4 class="footer-title">Navegación</h4>
            <ul class="footer-links">
              <li><a href="${assetPath}index.html#inicio">Inicio</a></li>
              <li><a href="${assetPath}index.html#que-vendemos">¿Qué vendemos?</a></li>
              <li><a href="${assetPath}index.html#nosotros">¿A quién nos dirigimos?</a></li>
              <li><a href="${assetPath}index.html#percepcion">Propósito</a></li>
              <li><a href="${assetPath}index.html#diferenciadores">Diferenciadores</a></li>
              <li><a href="${assetPath}index.html#galeria">Galería</a></li>
              <li><a href="${assetPath}index.html#contacto">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-products">
            <h4 class="footer-title">Nuestros productos</h4>
            <ul class="footer-links">
              <li><a href="${assetPath}index.html#que-vendemos">Jabones artesanales</a></li>
              <li><a href="${assetPath}index.html#diferenciadores">Jabones ecológicos</a></li>
              <li><a href="${assetPath}index.html#que-vendemos">Productos de limpieza</a></li>
              <li><a href="${assetPath}index.html#contacto">Personalizados</a></li>
              <li><a href="${assetPath}index.html#contacto">Ventas al por mayor</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Contacto</h4>
            <div class="footer-contact-item"><span aria-hidden="true">✉</span> contacto@natufreshfactory.com</div>
            <div class="footer-contact-item"><span aria-hidden="true">⌖</span> Bogotá D.C., Colombia</div>
            <div class="footer-contact-item"><span aria-hidden="true">☎</span> +57 (601) 555-0192</div>
            <div class="footer-contact-item"><span aria-hidden="true">◷</span> Lun - Vie: 8:00 a.m. - 5:00 p.m.</div>
            <div class="footer-note">🌱 Cuidamos el planeta<br>con cada barra de jabón.</div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-text">&copy; 2026 NatuFresh Factory S.A.S. | Todos los derechos reservados.<br>Economía Circular Ley 2234 de 2022.</div>
        </div>
      </div>
      <img class="footer-product-art" src="${assetPath}img/bear-soap-packaged.png" alt="" aria-hidden="true">
    `;
  }

  // 1. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburgerToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link, .navbar-cta');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
      hamburger.innerHTML = isExpanded
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
          hamburger.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
        }
      });
    });
  }

  // 2. Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Contact Form Submission Toast Notification
  const contactForm = document.getElementById('contactForm');
  const toastModal = document.getElementById('toastModal');

  if (contactForm && toastModal) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Enviando...';

      setTimeout(() => {
        // Show success toast modal
        toastModal.classList.add('show');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Hide toast after 4 seconds
        setTimeout(() => {
          toastModal.classList.remove('show');
        }, 4000);
      }, 1000);
    });
  }

  // 4. Smooth Scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Scroll Fade-in Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 6. Accordion Dropdown logic for Mensajes Modelo
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other accordion items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
