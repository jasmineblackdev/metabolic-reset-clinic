// ================================================
// METABOLIC RESET CLINIC - VANILLA JAVASCRIPT
// ================================================

// Services Data
const servicesData = [
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>
        </svg>`,
        title: "Weight Loss Programs",
        short: "Medically guided plans combining nutrition, behavior, and lifestyle changes for safe, sustainable weight loss.",
        long: "Healthy weight loss is about transformation, not restriction. Our medically supervised programs use evidence-based approaches including FDA-approved medications, personalized nutrition plans, and behavioral coaching. We address obesity as the root cause of many chronic health conditions, helping you achieve lasting results.",
        href: "medical-weight-loss.html"
    },
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>`,
        title: "Metabolic Reset",
        short: "Reboot your metabolism with our science-based reset protocol rooted in functional medicine.",
        long: "Our Metabolic Reset Program targets the root causes of metabolic dysfunction. Through advanced lab work, personalized nutrition plans, natural supplements, and targeted interventions, we help your body regain its natural ability to burn fuel efficiently and maintain energy throughout the day.",
        href: "metabolic-reset.html"
    },
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
        </svg>`,
        title: "Chronic Disease Management",
        short: "Personalized care focused on controlling symptoms, improving health, and preventing complications.",
        long: "Managing chronic conditions requires more than medication – it calls for personalized, compassionate care. We take a holistic approach to managing diabetes, hypertension, thyroid disorders, metabolic syndrome, and high cholesterol, addressing underlying root causes through integrative functional medicine.",
        href: "chronic-disease.html"
    },
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>`,
        title: "Primary Care Services",
        short: "Comprehensive healthcare focused on prevention, diagnosis, and treatment, supporting lifelong wellness.",
        long: "Primary care serves as the cornerstone of lifelong health management. Our clinic provides annual physicals, preventive screenings, acute illness management, wellness visits, and referral coordination – all with the compassionate, whole-person approach that defines our practice.",
        href: "#services"
    },
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
        </svg>`,
        title: "Integrative Functional Medicine",
        short: "Healing begins with understanding the whole person through a holistic, science-based approach.",
        long: "We address root causes of chronic conditions through integrative functional medicine that restores balance and promotes long-term health. By combining clinical knowledge with natural supplements, clean eating habits, and lifestyle modifications, we help patients achieve true healing of body, mind, and spirit.",
        href: "#services"
    },
    {
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5z"></path>
            <path d="M6 9.01V9"></path>
        </svg>`,
        title: "Physical Exams & Wellness",
        short: "Routine physical exams and wellness visits forming the foundation of preventive healthcare.",
        long: "Wellness visits are designed to keep patients healthy, not just treat illness. Our comprehensive physical exams include full health assessments, lab work, and personalized prevention strategies. We also offer convenient telemedicine appointments through our secure platform for follow-ups and consultations.",
        href: "#services"
    }
];

// ================================================
// INITIALIZATION
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initServiceCards();
    initAnimations();
    initSmoothScroll();
    setCurrentYear();
});

// ================================================
// HEADER SCROLL EFFECT
// ================================================
function initHeader() {
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
}

// ================================================
// MOBILE MENU
// ================================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    
    if (!toggle || !menu) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    const menuIcon = toggle.querySelector('.icon-menu');
    const closeIcon = toggle.querySelector('.icon-close');
    
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = menu.classList.toggle('open');
        
        if (isOpen) {
            if (menuIcon) menuIcon.style.display = 'none';
            if (closeIcon) closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            if (menuIcon) menuIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close menu when clicking on a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
            if (menuIcon) menuIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('open');
            if (menuIcon) menuIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}

// ================================================
// SERVICE CARDS
// ================================================
function initServiceCards() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    // Get all service cards (either pre-rendered or we'll create them)
    let serviceCards = servicesGrid.querySelectorAll('.service-card');
    
    // If no cards exist, render them from data
    if (serviceCards.length === 0) {
        servicesGrid.innerHTML = servicesData.map((service, index) => `
            <div class="service-card fade-in" style="animation-delay: ${index * 0.08}s">
                <div class="service-icon">
                    ${service.icon}
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.short}</p>
                <div class="service-long-description" id="service-long-${index}">
                    <p>${service.long}</p>
                </div>
                <div class="service-footer">
                    <button class="service-toggle" data-index="${index}">
                        <span class="toggle-text">Read More</span>
                        <svg class="icon chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <a href="${service.href}" class="btn btn-ghost btn-sm">
                        Learn More
                        <svg class="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
        
        serviceCards = servicesGrid.querySelectorAll('.service-card');
    }
    
    // Add click handlers to all toggle buttons
    serviceCards.forEach((card, index) => {
        const toggleBtn = card.querySelector('.service-toggle');
        const longDesc = card.querySelector('.service-long-description');
        const chevron = toggleBtn.querySelector('.chevron');
        const toggleText = toggleBtn.querySelector('.toggle-text');
        
        if (toggleBtn && longDesc) {
            toggleBtn.addEventListener('click', function() {
                const isOpen = longDesc.classList.toggle('open');
                chevron.classList.toggle('open');
                toggleText.textContent = isOpen ? 'Show Less' : 'Read More';
            });
        }
    });
}

// Legacy function for backwards compatibility
function toggleService(index) {
    const card = document.querySelectorAll('.service-card')[index];
    if (card) {
        const toggleBtn = card.querySelector('.service-toggle');
        if (toggleBtn) toggleBtn.click();
    }
}

// ================================================
// SCROLL ANIMATIONS
// ================================================
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    fadeElements.forEach(el => observer.observe(el));
}

// ================================================
// SMOOTH SCROLL
// ================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================================
// UTILITY FUNCTIONS
// ================================================
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Make toggleService available globally
window.toggleService = toggleService;
