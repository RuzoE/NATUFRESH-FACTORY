/* ==========================================================================
   NATUFRESH FACTORY S.A.S. - INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer structure identical across the landing page and subpages.
  const footer = document.querySelector('.footer');
  if (footer) {
    const assetPath = window.location.pathname.includes('/html/') ? '../' : '';
    const icon = (content, className = 'footer-icon') =>
      `<svg class="${className}" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
    const icons = {
      instagram: icon('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/>', 'social-svg'),
      facebook: icon('<path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1z"/>', 'social-svg'),
      whatsapp: icon('<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"/><path d="M8.5 8.5c.2 2.3 2.7 5 5 5.2l1.4-1.3 1.7.8c.3.2.4.5.2.8-.5.8-1.2 1.2-2.1 1.1-3.1-.4-6-3.2-6.4-6.3-.1-.9.3-1.6 1.1-2.1.3-.2.6-.1.8.2l.8 1.7-1.3 1.4z"/>', 'social-svg'),
      linkedin: icon('<path d="M7 9v8M7 6v.01M11 17v-4a3 3 0 0 1 6 0v4M11 9v8"/>', 'social-svg'),
      tiktok: icon('<path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 4c.5 2.7 2.1 4.3 5 4.7"/>', 'social-svg'),
      socialEmail: icon('<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m3 6 9 6 9-6"/>', 'social-svg'),
      email: icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
      location: icon('<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>'),
      phone: icon('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"/>'),
      clock: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
      leaf: icon('<path d="M20 4C11 4 5 8 5 15c0 2.8 2.2 5 5 5 7 0 10-7 10-16z"/><path d="M4 21c3-5 7-8 12-10"/>'),
      soap: icon('<path d="M8 10h8v9H8z"/><path d="M10 10V7a2 2 0 0 1 4 0v3M6 19h12M9 4c-1-1 0-2 1-2M13 4c-1-1 0-2 1-2"/>'),
      gift: icon('<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M12 9v12M3 13h18M12 9H8.5a2.5 2.5 0 1 1 2.5-2.5V9zM12 9h3.5A2.5 2.5 0 1 0 13 6.5V9z"/>'),
      droplet: icon('<path d="M12 3S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12-7-12z"/><path d="M9 16a3 3 0 0 0 3 3"/>'),
      shield: icon('<path d="m12 3 8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>'),
      lock: icon('<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
      recycle: icon('<path d="m7 7 2-3 2 3M9 4a8 8 0 0 0-5 7M17 17l-2 3-2-3M15 20a8 8 0 0 0 5-7M7 17H3l2-3M3 17a8 8 0 0 0 9 4M17 7h4l-2 3M21 7a8 8 0 0 0-9-4"/>')
    };
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">NATUFRESH FACTORY S.A.S.</div>
            <p>Transformamos aceites usados en jabones artesanales y soluciones de aseo sostenibles mediante saponificación controlada en Bogotá D.C.</p>
            <div class="footer-values">
              <div class="footer-value">${icons.leaf}<span>Sostenible</span></div>
              <div class="footer-value">${icons.droplet}<span>Artesanal</span></div>
              <div class="footer-value">${icons.shield}<span>Responsable</span></div>
              <div class="footer-value">${icons.recycle}<span>Circular</span></div>
            </div>
            <div class="social-links">
              <a href="https://www.instagram.com/natufreshfactory?igsi=ZDR4cDc3MXRoZngy" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">${icons.instagram}</a>
              <a href="https://www.facebook.com/natufreshfactory/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">${icons.facebook}</a>
              <a href="https://wa.me/573244922859" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="WhatsApp">${icons.whatsapp}</a>
              <a href="mailto:natufreshfactory@gmail.com" class="social-icon" aria-label="Correo electrónico">${icons.socialEmail}</a>
              <a href="https://www.tiktok.com/@natufreshfactory?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="TikTok">${icons.tiktok}</a>
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
              <li><a href="${assetPath}index.html#que-vendemos">${icons.soap} Jabones artesanales</a></li>
              <li><a href="${assetPath}index.html#diferenciadores">${icons.leaf} Jabones ecológicos</a></li>
              <li><a href="${assetPath}index.html#que-vendemos">${icons.droplet} Productos de limpieza</a></li>
              <li><a href="${assetPath}index.html#contacto">${icons.gift} Personalizados</a></li>
              <li><a href="${assetPath}index.html#contacto">${icons.recycle} Ventas al por mayor</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Contacto</h4>
            <div class="footer-contact-item">${icons.email} <span>natufreshfactory@gmail.com</span></div>
            <div class="footer-contact-item">${icons.location} <span>Bogotá D.C., Colombia</span></div>
            <div class="footer-contact-item">${icons.phone} <span>+57 324 492 2859</span></div>
            <div class="footer-contact-item">${icons.clock} <span>Lun - Vie: 8:00 a.m. - 5:00 p.m.</span></div>
            <div class="footer-note">${icons.leaf}<span>Cuidamos el planeta<br>con cada barra de jabón.</span></div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-text"><span class="footer-trust-item">${icons.shield} Compra segura</span><span class="footer-trust-item">${icons.lock} Datos protegidos</span><span class="footer-trust-item">${icons.leaf} Compromiso ambiental</span></div>
          <div class="footer-legal">&copy; 2026 NatuFresh Factory S.A.S. | Todos los derechos reservados.<br>Economía Circular Ley 2234 de 2022.</div>
        </div>
      </div>
    `;

    document.querySelectorAll('.location-detail-icon').forEach((element) => {
      const locationIcon = element.textContent.trim();
      const replacement = locationIcon === '⌖'
        ? icons.location
        : locationIcon === '☎'
          ? icons.phone
          : locationIcon === '◷'
            ? icons.clock
            : icons.email;
      element.innerHTML = replacement;
    });
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
