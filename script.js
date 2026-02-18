// RentaOK Landing — Script v2
document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE MENU =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        });
    });

    // ===== NAVBAR SCROLL BEHAVIOR =====
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('navbar-hidden');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ===== PRICING TOGGLE (mensual / anual) =====
    const billingToggle = document.getElementById('billingToggle');
    const labelMensual = document.getElementById('labelMensual');
    const labelAnual = document.getElementById('labelAnual');

    if (billingToggle) {
        billingToggle.addEventListener('change', function () {
            const isAnual = this.checked;
            labelMensual.classList.toggle('active', !isAnual);
            labelAnual.classList.toggle('active', isAnual);

            document.querySelectorAll('.amount').forEach(el => {
                el.textContent = isAnual ? el.dataset.annual : el.dataset.monthly;
            });
        });
    }

    // ===== FAQ ACORDEÓN =====
    // (también disponible como función global para onclick en HTML)
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function () {
            toggleFaq(this);
        });
    });

    // ===== INTERSECTION OBSERVER (fade-in) =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.step-card, .feature-card, .segment-card, .testimonial-full, .blog-card, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});

// ===== FAQ TOGGLE (función global) =====
function toggleFaq(btn) {
    const item = btn.closest('.faq-item-acc');
    const isOpen = item.classList.contains('open');

    // Cerrar todos
    document.querySelectorAll('.faq-item-acc.open').forEach(el => el.classList.remove('open'));

    // Abrir el clickeado si estaba cerrado
    if (!isOpen) item.classList.add('open');
}

// ===== MODAL DE PLANES =====
function openContactModal(planName) {
    const modal = document.getElementById('contactModal');
    document.getElementById('modalPlanName').textContent = planName;
    document.getElementById('modalPlanInput').value = planName;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeModal(event) {
    if (event.target === document.getElementById('contactModal')) {
        closeContactModal();
    }
}

// Cerrar modal con Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeContactModal();
});
