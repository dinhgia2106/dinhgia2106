// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize particles.js
  initParticles();

  // Initialize typing effect
  initTypingEffect();

  // Initialize animated counters
  initCounters();

  // Initialize AOS animations
  initAOS();

  // Handle navbar scroll behavior
  handleNavbarOnScroll();

  // Handle navigation clicks
  handleNavigationClicks();

  // Handle skills filtering
  handleSkillsFiltering();

  // Handle project filtering
  handleProjectFiltering();

  // Handle form submission
  handleFormSubmission();

  // Handle theme switching
  handleThemeSwitch();

  // Handle back to top button
  handleBackToTop();
});

// Initialize particles.js
function initParticles() {
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#36BCF7",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#36BCF7",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
}

// Handle typing effect
function initTypingEffect() {
  const textElement = document.getElementById("typing-text");
  if (textElement) {
    const texts = [
      "AI & Machine Learning Engineer",
      "Data Scientist",
      "Deep Learning Researcher",
      "Always exploring new algorithms",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        // Removing characters
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        // Adding characters
        textElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      // Add blinking cursor
      textElement.innerHTML += '<span class="cursor">|</span>';

      // Check if completed typing current text
      if (!isDeleting && charIndex === currentText.length) {
        // Begin deleting after delay
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
      }

      // Check if completed deleting
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
        typingSpeed = 500; // Pause before typing next text
      }

      setTimeout(type, typingSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
  }
}

// Initialize animated counters
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200; // Higher value = slower animation

  function animateCounter(counter) {
    const target = +counter.dataset.count;
    let count = 0;

    const updateCounter = () => {
      const increment = target / speed;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  }

  // Use Intersection Observer to trigger counter animation when in viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

// Animate elements when they enter viewport
function initAOS() {
  const animatedElements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Handle navbar behavior on scroll
function handleNavbarOnScroll() {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 100;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Set initial state
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  }
}

// Handle navigation clicks
function handleNavigationClicks() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Active link & smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Close mobile menu when clicking a link
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");

      // Set active link
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Set active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Handle skills filtering
function handleSkillsFiltering() {
  const categoryBtns = document.querySelectorAll(".category-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  if (categoryBtns.length && skillCards.length) {
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Set active button
        categoryBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        // Filter skills
        const category = btn.dataset.category;

        skillCards.forEach((card) => {
          if (category === "all" || card.dataset.category.includes(category)) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 200);
          } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }
}

// Handle project filtering
function handleProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Set active button
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        // Filter projects
        const filter = btn.dataset.filter;

        projectCards.forEach((card) => {
          if (filter === "all" || card.dataset.category.includes(filter)) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            }, 200);
          } else {
            card.style.opacity = "0";
            card.style.transform = "scale(0.9)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }
}

// Handle form submission
function handleFormSubmission() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the data to a backend
      // For demo purposes, we'll just console log it
      console.log("Form submitted:", { name, email, subject, message });

      // Show success message
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;

      submitButton.disabled = true;
      submitButton.innerHTML =
        '<span class="btn-text">Message Sent!</span><span class="btn-icon"><i class="fas fa-check"></i></span>';

      // Reset form
      contactForm.reset();

      // Reset button after delay
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }, 3000);
    });
  }
}

// Handle theme switching
function handleThemeSwitch() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  // Toggle theme when switch is clicked
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
}

// Handle back to top button
function handleBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
