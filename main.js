// ============================================
// NAVIGATION & MOBILE MENU
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');

  // apply config links
  if (window.SITE) {
    const g = document.getElementById('githubLink'); if (g) g.href = SITE.github;
    const l = document.getElementById('linkedinLink'); if (l) l.href = SITE.linkedin;
    const t = document.getElementById('twitterLink'); if (t) t.href = SITE.twitter;
    const mail = document.getElementById('mailto'); if (mail) mail.href = `mailto:${SITE.email}`;
    const resumeBtn = document.querySelector('.btn-ghost'); if (resumeBtn) resumeBtn.href = SITE.resume;
    const photo = document.getElementById('profilePhoto'); if (photo) photo.style.backgroundImage = "url('assets/images/profile.jpg')";
  }

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
  }

  // Close menu when link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
  });

  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
    
    // Update active nav link based on scroll position
    let currentSection = '';
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.id || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
  });

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.length > 1 && document.querySelector(target)) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
  });

  // ============================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ============================================
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = 1;
        en.target.style.transform = 'none';
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe elements for animation
  document.querySelectorAll('.skill-item, .project-item, .timeline-item, .highlight').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all .6s cubic-bezier(.2,.8,.2,1)';
    io.observe(el);
  });

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      const prev = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Sent';
      setTimeout(() => { btn.disabled = false; btn.innerHTML = prev; contactForm.reset(); }, 1800);
      // replace with real endpoint or service (Formspree, Netlify Forms, etc.)
    });
  }

  // small accessibility improvement: focus outlines for keyboard users
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('focus-visible');
  });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c Welcome to my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c Built with HTML, CSS & JavaScript', 'color: #a855f7; font-size: 12px;');