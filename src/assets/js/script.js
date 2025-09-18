// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.offer-card, .menu-item, .contact-item, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar Tren: başlıklar durak, tren nav içinde hareket eder
document.addEventListener('DOMContentLoaded', () => {
    try {
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) return;
        if (window.innerWidth < 768) return; // mobilde pasif

        const anchors = Array.from(navMenu.querySelectorAll('a.nav-link'));
        const count = anchors.length;

        // Nav içine ray ve tren ekle
        const rail = document.createElement('div');
        rail.className = 'menu-rail';
        const train = document.createElement('div');
        train.className = 'menu-train';
        train.innerHTML = '<i class="fas fa-train"></i>';
        navMenu.appendChild(rail);
        navMenu.appendChild(train);

        function computeX() {
            const menuRect = navMenu.getBoundingClientRect();
            return anchors.map(a => {
                const r = a.getBoundingClientRect();
                return r.left + r.width / 2 - menuRect.left;
            });
        }
        let stopsX = computeX();

        function moveTo(index) {
            stopsX = stopsX.length ? stopsX : computeX();
            const x = stopsX[index];
            train.style.left = x + 'px';
            const percent = (x / Math.max(1, navMenu.clientWidth)) * 100;
            navMenu.style.setProperty('--train-left', percent + '%');
        }

        anchors.forEach((a, i) => {
            a.classList.add('as-stop'); // görsel durak
            a.addEventListener('mouseenter', () => moveTo(i));
            a.addEventListener('focus', () => moveTo(i));
        });

        window.addEventListener('resize', () => { stopsX = computeX(); moveTo(activeIndex()); });

        const activeIndex = () => Math.max(0, anchors.findIndex(a => a.classList.contains('active')));
        moveTo(activeIndex());

        let idx = (activeIndex() + 1) % count;
        setInterval(() => { moveTo(idx); idx = (idx + 1) % count; }, 3200);
    } catch (_) {}
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe stats section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statObserver.observe(statsSection);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Form validation (for future contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add CSS for loading and error states
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Falling hamburgers: spawn decorative hamburgers falling from top
(function() {
    if (typeof window === 'undefined') return;
    // Sayfa bazlı kontrol: Tatlılar sayfasında hamburger animasyonunu gösterme
    try {
        const currentPath = (window.location && window.location.pathname || '').toLowerCase();
        if (currentPath.endsWith('/lezzet-asistani') || currentPath.endsWith('/lezzet-asistani.html')) {
            // Lezzet Asistanı: hamburger + çay + muffin birlikte düşsün
            function spawnFalling(iconClass, wrapperClass) {
                if (window.innerWidth && window.innerWidth < 480) return;
                const el = document.createElement('div');
                el.className = wrapperClass;
                el.innerHTML = `<i class="${iconClass}"></i>`;
                const left = Math.random() * 90;
                el.style.left = left + 'vw';
                const size = 20 + Math.floor(Math.random() * 36);
                el.style.fontSize = size + 'px';
                const duration = 4 + Math.random() * 4;
                el.style.animationDuration = duration + 's';
                document.body.appendChild(el);
                setTimeout(() => { if (el && el.parentNode) el.parentNode.removeChild(el); }, (duration + 0.5) * 1000);
            }

            (function scheduleAll() {
                const delay = 1200 + Math.random() * 2200; // daha seyrek
                setTimeout(() => {
                    const variants = [
                        ['fas fa-hamburger', 'falling-burger'],
                        ['fas fa-mug-hot', 'falling-tea'],
                        ['fas fa-birthday-cake', 'falling-muffin']
                    ];
                    const pick = variants[Math.floor(Math.random() * variants.length)];
                    spawnFalling(pick[0], pick[1]); // her döngüde sadece bir ikon
                    scheduleAll();
                }, delay);
            })();
            return;
        }
        if (currentPath.endsWith('/tatlilar') || currentPath.endsWith('/tatlilar.html')) {
            // Tatlılar: düşen muffinler
            function spawnMuffin() {
                if (window.innerWidth && window.innerWidth < 480) return;
                const el = document.createElement('div');
                el.className = 'falling-muffin';
                el.innerHTML = '<i class="fas fa-birthday-cake"></i>';
                const left = Math.random() * 90;
                el.style.left = left + 'vw';
                const size = 20 + Math.floor(Math.random() * 36);
                el.style.fontSize = size + 'px';
                const duration = 4 + Math.random() * 4;
                el.style.animationDuration = duration + 's';
                document.body.appendChild(el);
                setTimeout(() => { if (el && el.parentNode) el.parentNode.removeChild(el); }, (duration + 0.5) * 1000);
            }
            (function scheduleNext() {
                const delay = 700 + Math.random() * 1800;
                setTimeout(() => { spawnMuffin(); scheduleNext(); }, delay);
            })();
            return;
        }
    } catch (_) {}

    function spawnBurger() {
        if (window.innerWidth && window.innerWidth < 480) return; // skip small screens

        const el = document.createElement('div');
        el.className = 'falling-burger';
        el.innerHTML = '<i class="fas fa-hamburger"></i>';

        // random horizontal position and size
        const left = Math.random() * 90; // viewport width percentage
        el.style.left = left + 'vw';
        const size = 20 + Math.floor(Math.random() * 36); // 20-55px
        el.style.fontSize = size + 'px';

        // random duration to vary fall speed
        const duration = 4 + Math.random() * 4; // 4-8s
        el.style.animationDuration = duration + 's';

        document.body.appendChild(el);

        // remove after animation ends
        setTimeout(() => {
            if (el && el.parentNode) el.parentNode.removeChild(el);
        }, (duration + 0.5) * 1000);
    }

    // schedule recursive spawns with randomized intervals
    function scheduleNext() {
        const delay = 700 + Math.random() * 1800; // 0.7s - 2.5s
        setTimeout(() => {
            spawnBurger();
            scheduleNext();
        }, delay);
    }

    // start after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleNext);
    } else {
        scheduleNext();
    }
})();