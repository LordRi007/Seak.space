document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     Custom Cursor Light Tracker (Follows mouse position for background lighting)
     ========================================================================== */
  const cursorTracker = document.getElementById('cursor-tracker');
  if (cursorTracker) {
    window.addEventListener('mousemove', (e) => {
      // Direct positioning with requestAnimationFrame for performance
      window.requestAnimationFrame(() => {
        cursorTracker.style.left = `${e.clientX}px`;
        cursorTracker.style.top = `${e.clientY}px`;
      });
    });
  }

  /* ==========================================================================
     Header Scroll Effects & Back to Top Toggle
     ========================================================================== */
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.classList.remove('active');
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     Mobile Menu Toggle Navigation drawer
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when links are clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ==========================================================================
     Active Link Indicator Scroll Spy
     ========================================================================== */
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100; // Offset for header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     Theme Changer (Light / Dark mode persistence)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Check saved theme or system preferred
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        theme = 'light';
      } else {
        theme = 'dark';
      }
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  /* ==========================================================================
     Typewriter Subtitle Text Loop
     ========================================================================== */
  const typeTarget = document.getElementById('type-target');
  const textArray = ['Web Developer', 'React + Laravel Expert', 'API & Integration Specialist', 'Sleek UI Designer'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typeTarget) return;

    const currentText = textArray[textIndex];
    
    if (isDeleting) {
      typeTarget.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deletes faster than typing
    } else {
      typeTarget.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at full word
      isDeleting = true;
      typingSpeed = 1500; // 1.5 seconds delay before deletion
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      typingSpeed = 500; // Pause before typing new word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  /* ==========================================================================
     Intersection Observer Scroll Reveal Animations
     ========================================================================== */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* ==========================================================================
     Stats Number Counter Animations
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateStats = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const speed = 100; // Lower is faster
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        element.textContent = Math.ceil(count);
        setTimeout(updateCount, 15);
      } else {
        element.textContent = target;
      }
    };

    updateCount();
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => {
    statsObserver.observe(num);
  });

  /* ==========================================================================
     Projects Filters Logic
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Toggle button active states
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hide');
          // Smooth fade-in
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================================================
     Interactive Contact Form Submission Handler
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const successCard = document.getElementById('form-success-card');
  const closeSuccessBtn = document.getElementById('btn-close-success');
  const submitBtn = document.getElementById('form-submit-btn');

  // Input elements
  const formName = document.getElementById('form-name');
  const formEmail = document.getElementById('form-email');
  const formSubject = document.getElementById('form-subject');
  const formMessage = document.getElementById('form-message');

  // Error spans
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const showInputError = (input, errorEl) => {
    input.classList.add('invalid');
    errorEl.style.display = 'block';
  };

  const hideInputError = (input, errorEl) => {
    input.classList.remove('invalid');
    errorEl.style.display = 'none';
  };

  if (contactForm) {
    // Realtime input validations
    formName.addEventListener('input', () => hideInputError(formName, nameError));
    formEmail.addEventListener('input', () => hideInputError(formEmail, emailError));
    formSubject.addEventListener('input', () => hideInputError(formSubject, subjectError));
    formMessage.addEventListener('input', () => hideInputError(formMessage, messageError));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;

      // Validate Name
      if (formName.value.trim() === '') {
        showInputError(formName, nameError);
        isValid = false;
      }

      // Validate Email
      if (!validateEmail(formEmail.value.trim())) {
        showInputError(formEmail, emailError);
        isValid = false;
      }

      // Validate Subject
      if (formSubject.value.trim() === '') {
        showInputError(formSubject, subjectError);
        isValid = false;
      }

      // Validate Message
      if (formMessage.value.trim() === '') {
        showInputError(formMessage, messageError);
        isValid = false;
      }

      if (isValid) {
        // Show Loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        const name = formName.value.trim();
        const email = formEmail.value.trim();
        const subject = formSubject.value.trim();
        const message = formMessage.value.trim();

        // Format message for Telegram
        const telegramText = `📩 *New Contact Form Message*\n\n` +
                             `👤 *Name:* ${name}\n` +
                             `📧 *Email:* ${email}\n` +
                             `🏷️ *Subject:* ${subject}\n\n` +
                             `💬 *Message:*\n${message}`;

        // Telegram Bot API Credentials
        const botToken = '8976749638:AAGx9pUAGjYfJZ8hQJ032yiSA0zR3rHIV4w'; 
        const chatId = '1117433096';

        // Abort controller to handle timeouts gracefully (e.g. if request hangs)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: 'Markdown'
          })
        })
        .then(response => {
          clearTimeout(timeoutId);
          if (!response.ok) {
            throw new Error('Telegram API error');
          }
          return response.json();
        })
        .then(() => {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
          
          // Clear inputs
          contactForm.reset();

          // Show Success Card Overlap overlay
          successCard.classList.add('active');
        })
        .catch(error => {
          clearTimeout(timeoutId);
          console.error('Error sending to Telegram:', error);
          
          // Alert user gracefully
          let errorMessage = 'Failed to send message. Please contact me directly via email at satchhunseak123@gmail.com.';
          if (error.name === 'AbortError') {
            errorMessage = 'Connection timed out. Please check your network or try sending an email directly.';
          }
          alert(errorMessage);
          
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        });
      }
    });
  }

  // Handle closing success feedback card
  if (closeSuccessBtn && successCard) {
    closeSuccessBtn.addEventListener('click', () => {
      successCard.classList.remove('active');
    });
  }
});
