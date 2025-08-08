document.addEventListener('DOMContentLoaded', function() {
    // Language i18n
    const translations = {
        es: {
            'services.features': 'Características',
            'services.cta': 'Solicitar Información',
            'services.card1.title': 'Sitios Web',
            'services.card1.f1': 'Diseño Responsivo',
            'services.card1.f2': 'Optimización SEO',
            'services.card1.f3': 'Rendimiento Optimizado',
            'services.card1.f4': 'Diseño UX/UI',
            'services.card2.title': 'Aplicaciones Web',
            'services.card2.f1': 'Single Page Applications',
            'services.card2.f2': 'APIs RESTful',
            'services.card2.f3': 'Base de Datos',
            'services.card2.f4': 'Autenticación Segura',
            'services.card3.title': 'E-commerce',
            'services.card3.f1': 'Carrito de Compras',
            'services.card3.f2': 'Pasarelas de Pago',
            'services.card3.f3': 'Gestión de Inventario',
            'services.card3.f4': 'Panel Administrativo',
            'price.label': 'Precio Especial',
            'price.period': 'Pago único',
            'price.f1': 'Diseño Personalizado',
            'price.f2': 'Hosting por 1 año GRATIS',
            'price.f3': 'Dominio .com incluido',
            'price.f4': 'Certificado SSL',
            'hero.badge_responsive': '100% Responsive',
            'hero.badge_seo': 'Optimizado SEO',
            'hero.badge_performance': 'Alto Rendimiento',
            'contact.title': 'Contacto',
            'contact.whatsapp': 'WhatsApp',
            'contact.whatsapp_d': '¿Tienes dudas? ¡Escríbenos!',
            'contact.chat': 'Chatear',
            'contact.socials': 'Redes Sociales',
            'contact.socials_d': 'Síguenos y mantente actualizado',
            'why.title': '¿Por qué elegir Ciscode?',
            'why.subtitle': 'Beneficios claros, resultados reales. Descubre por qué somos tu mejor opción tecnológica.',
            'why.agile': 'Ágil',
            'why.agile_d': 'Entregas rápidas y eficientes',
            'why.secure': 'Seguro',
            'why.secure_d': 'Máxima protección de datos',
            'why.experts': 'Expertos',
            'why.experts_d': 'Equipo certificado y profesional',
            'why.support': 'Soporte',
            'why.support_d': 'Acompañamiento permanente',
            'why.results': 'Resultados',
            'why.results_d': 'Enfoque en métricas y objetivos',
            'why.tech': 'Tecnología',
            'why.tech_d': 'Stack moderno y actualizado',
            'why.cta': 'Contáctanos',
            'yt.badge': 'Canal de YouTube',
            'yt.title_html': '<span class="highlight-text">¡Aprende a Programar</span> <span class="gradient-text">GRATIS!</span>',
            'yt.desc': '¿Quieres convertirte en desarrollador web? Descubre una colección completa de tutoriales, proyectos paso a paso y recursos gratuitos para dominar el desarrollo web. ¡Código fuente incluido en cada proyecto!',
            'yt.s1': 'Tutoriales Completos',
            'yt.s2': 'Código Fuente',
            'yt.s3': 'Proyectos Prácticos',
            'yt.cta': '¡Comienza Ahora!',
            'tech.title': 'Nuestro Stack Tecnológico',
            'tech.subtitle': 'Utilizamos las tecnologías web más modernas y robustas para crear soluciones digitales de alta calidad.',
            'tech.frontbase': 'Frontend Base',
            'tech.frontfw': 'Frontend Frameworks',
            'tech.ui': 'UI Frameworks',
            'tech.backend': 'Backend',
            'tech.db': 'Bases de Datos',
            'tech.cms': 'CMS y E-commerce',
            'portfolio.badge': 'Portfolio',
            'portfolio.title': 'Nuestro Trabajo',
            'portfolio.subtitle': 'Transformamos ideas en soluciones digitales innovadoras',
            'portfolio.visit': 'Visitar Sitio',
            'portfolio.featured': 'Proyecto Destacado',
            'portfolio.p1_desc': 'Sistema de reconocimiento facial para control de acceso y asistencia. Interfaz intuitiva con autenticación biométrica en tiempo real.',
            'portfolio.p2_desc': 'Plataforma de reserva de espacios con sistema de gestión completo. Incluye reservas online, planes personalizados y panel administrativo.',
            'brand.tagline': 'Desarrollo Web Profesional',
            'nav.about': 'Sobre mí',
            'nav.services': 'Servicios',
            'nav.stack': 'Stack',
            'nav.contact': 'Contacto',
            'hero.badge': 'Diseño Web Profesional',
            'hero.title_html': 'Impulsa tu Negocio con una<br><span class="highlight-text">Página Web Única</span>',
            'hero.desc': 'Creamos sitios web profesionales que destacan tu marca y atraen más clientes. Diseño moderno, rápido y optimizado para todos los dispositivos.',
            'hero.cta': '¡Solicita tu Cotización! ',
            'hero.guarantee': '100% Satisfacción Garantizada',
            'services.badge': 'Servicios',
            'services.title': 'Nuestras Soluciones',
            'services.subtitle': 'Transformamos ideas en experiencias digitales excepcionales',
            'about.badge': 'Sobre mí',
            'about.title': 'Hola, soy Cristian Cano',
            'about.desc': 'Desarrollador de software colombiano con más de 5 años de experiencia creando productos digitales a medida. Comparto contenido en YouTube para ayudar a otros a convertirse en desarrolladores web y construyo proyectos con un enfoque en rendimiento, accesibilidad y una excelente experiencia de usuario.',
            'about.nationality': 'Colombiano 🇨🇴',
            'about.location': 'Medellín, Colombia',
            'about.experience': '+5 años de experiencia',
            'about.channel': 'Canal: @Ciscodedev',
            'about.github': 'GitHub',
            'about.youtube': 'YouTube',
            'about.projects': 'Ver proyectos'
        },
        en: {
            'services.features': 'Features',
            'services.cta': 'Request Info',
            'services.card1.title': 'Websites',
            'services.card1.f1': 'Responsive Design',
            'services.card1.f2': 'SEO Optimization',
            'services.card1.f3': 'Performance Optimized',
            'services.card1.f4': 'UX/UI Design',
            'services.card2.title': 'Web Applications',
            'services.card2.f1': 'Single Page Applications',
            'services.card2.f2': 'RESTful APIs',
            'services.card2.f3': 'Databases',
            'services.card2.f4': 'Secure Authentication',
            'services.card3.title': 'E‑commerce',
            'services.card3.f1': 'Shopping Cart',
            'services.card3.f2': 'Payment Gateways',
            'services.card3.f3': 'Inventory Management',
            'services.card3.f4': 'Admin Panel',
            'price.label': 'Special Price',
            'price.period': 'One-time payment',
            'price.f1': 'Custom Design',
            'price.f2': '1 year FREE Hosting',
            'price.f3': '.com Domain included',
            'price.f4': 'SSL Certificate',
            'hero.badge_responsive': '100% Responsive',
            'hero.badge_seo': 'SEO Optimized',
            'hero.badge_performance': 'High Performance',
            'contact.title': 'Contact',
            'contact.whatsapp': 'WhatsApp',
            'contact.whatsapp_d': 'Have questions? Write to us!',
            'contact.chat': 'Chat',
            'contact.socials': 'Social Media',
            'contact.socials_d': 'Follow us and stay updated',
            'why.title': 'Why choose Ciscode?',
            'why.subtitle': 'Clear benefits, real results. Discover why we are your best tech partner.',
            'why.agile': 'Agile',
            'why.agile_d': 'Fast and efficient delivery',
            'why.secure': 'Secure',
            'why.secure_d': 'Maximum data protection',
            'why.experts': 'Experts',
            'why.experts_d': 'Certified and professional team',
            'why.support': 'Support',
            'why.support_d': 'Continuous guidance',
            'why.results': 'Results',
            'why.results_d': 'Metrics and goals focused',
            'why.tech': 'Technology',
            'why.tech_d': 'Modern and up‑to‑date stack',
            'why.cta': 'Contact us',
            'yt.badge': 'YouTube Channel',
            'yt.title_html': '<span class="highlight-text">Learn to Code</span> <span class="gradient-text">FOR FREE!</span>',
            'yt.desc': 'Want to become a web developer? Explore a complete collection of tutorials, step-by-step projects, and free resources to master web development. Source code included in every project!',
            'yt.s1': 'Full Tutorials',
            'yt.s2': 'Source Code',
            'yt.s3': 'Hands-on Projects',
            'yt.cta': 'Start Now!',
            'tech.title': 'Our Tech Stack',
            'tech.subtitle': 'We use modern, robust web technologies to build high‑quality digital solutions.',
            'tech.frontbase': 'Frontend Basics',
            'tech.frontfw': 'Frontend Frameworks',
            'tech.ui': 'UI Frameworks',
            'tech.backend': 'Backend',
            'tech.db': 'Databases',
            'tech.cms': 'CMS & E‑commerce',
            'portfolio.badge': 'Portfolio',
            'portfolio.title': 'Our Work',
            'portfolio.subtitle': 'We turn ideas into innovative digital solutions',
            'portfolio.visit': 'Visit Site',
            'portfolio.featured': 'Featured Project',
            'portfolio.p1_desc': 'Facial recognition system for access control and attendance. Intuitive interface with real-time biometric authentication.',
            'portfolio.p2_desc': 'Space booking platform with a full management system. Includes online reservations, custom plans, and admin panel.',
            'brand.tagline': 'Professional Web Development',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.stack': 'Stack',
            'nav.contact': 'Contact',
            'hero.badge': 'Professional Web Design',
            'hero.title_html': 'Boost your Business with a<br><span class="highlight-text">Unique Website</span>',
            'hero.desc': 'We build professional websites that elevate your brand and attract more customers. Modern, fast, and optimized for every device.',
            'hero.cta': 'Get a Quote!',
            'hero.guarantee': '100% Satisfaction Guaranteed',
            'services.badge': 'Services',
            'services.title': 'Our Solutions',
            'services.subtitle': 'We turn ideas into exceptional digital experiences',
            'about.badge': 'About',
            'about.title': "Hi, I'm Cristian Cano",
            'about.desc': 'Colombian software developer with 5+ years of experience building custom digital products. I share content on YouTube to help others become web developers and I build projects focused on performance, accessibility, and great UX.',
            'about.nationality': 'Colombian 🇨🇴',
            'about.location': 'Medellín, Colombia',
            'about.experience': '5+ years of experience',
            'about.channel': 'Channel: @Ciscodedev',
            'about.github': 'GitHub',
            'about.youtube': 'YouTube',
            'about.projects': 'View projects'
        }
    };

    function setLanguage(lang) {
        const dict = translations[lang] || translations.es;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('site_lang', lang);
        const label = document.getElementById('langToggleLabel');
        if (label) label.textContent = lang.toUpperCase();

        // Update modern toggle active state
        document.querySelectorAll('.lang-toggle .btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = dict[key];
            if (!value) return;
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });
    }

    // Apply saved language or default to ES
    const saved = localStorage.getItem('site_lang') || 'es';
    setLanguage(saved);

    // Handle dropdown selection
    document.querySelectorAll('[data-set-lang]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-set-lang');
            setLanguage(lang);
        });
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Add scroll-based header transparency
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.backgroundColor = 'white';
        }
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    const darkSections = ['#portfolio', '#tech', '#contact'];

    window.addEventListener('scroll', () => {
        // Mostrar/ocultar botón
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }

        // Verificar si está sobre sección oscura
        const buttonRect = backToTopButton.getBoundingClientRect();
        const buttonCenter = buttonRect.top + buttonRect.height / 2;
        
        let isInDarkSection = false;
        darkSections.forEach(sectionId => {
            const section = document.querySelector(sectionId);
            if (section) {
                const sectionRect = section.getBoundingClientRect();
                if (buttonCenter >= sectionRect.top && buttonCenter <= sectionRect.bottom) {
                    isInDarkSection = true;
                }
            }
        });

        if (isInDarkSection) {
            backToTopButton.classList.add('dark-section');
        } else {
            backToTopButton.classList.remove('dark-section');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // WhatsApp floating message
    setTimeout(function() {
        if (!sessionStorage.getItem('wppMsgClosed')) {
            var msg = document.getElementById('wpp-float-msg');
            if (msg) msg.style.display = 'flex';
        }
    }, 15000);

    var closeBtn = document.querySelector('.wpp-float-msg-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            var msg = document.getElementById('wpp-float-msg');
            if (msg) msg.style.display = 'none';
            sessionStorage.setItem('wppMsgClosed', '1');
        });
    }
}); 