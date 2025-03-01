// Wait for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1000);

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Particles.js initialization
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64ffda"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#64ffda",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Typed.js initialization (for the typing effect)
    const typed = new Typed('#typed-output', {
        strings: [
            'AI &amp; Machine Learning Engineer',
            'Data Scientist',
            'Deep Learning Researcher',
            'Always exploring new algorithms'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const currentDate = new Date('2025-03-01T07:18:14Z');
        document.getElementById('current-date').textContent = currentDate.toLocaleDateString();

        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
        
        // Back to Top button visibility
        const backToTopBtn = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Counter animation
    function animateCounter() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            
            const updateCounter = () => {
                const increment = target / speed;
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    }

    // Observe counter elements
    const statsContainer = document.querySelector('.stats-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsContainer) {
        observer.observe(statsContainer);
    }

    // Filter skills by category
    const filterButtons = document.querySelectorAll('.tab-button');
    const skillCards = document.querySelectorAll('.skill-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and add to clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            skillCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'flex';
                } else if (card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            // Simple form validation
            if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
                alert('Please fill all fields');
                return;
            }
            
            // Form submission would typically be handled here with AJAX
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Set current user login
    const userElements = document.querySelectorAll('.user-login');
    userElements.forEach(element => {
        element.textContent = 'dinhgia2106';
    });

    // Update view count with random increment on each page load
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        const currentViews = parseInt(viewCountElement.textContent.replace(/,/g, ''));
        const newViews = currentViews + Math.floor(Math.random() * 5) + 1;
        viewCountElement.textContent = newViews.toLocaleString();
    }
});
