// =========================================================
// === ОСНОВНОЙ JS ДЛЯ ВСЕГО САЙТА ===
// =========================================================

document.addEventListener("DOMContentLoaded", function() {

    // ===== УСТАНОВКА ГОДА В ФУТЕРЕ =====
    var year = document.getElementById("current-year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ===== ПЛАВНЫЙ СКРОЛЛ =====
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", function(e) {
            var target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }

    // ===== ГЕНЕРАЦИЯ ЗВЕЗД =====
    function initStars() {
        var container = document.getElementById('starsContainer');
        if (!container) return;
        if (container.children.length > 0) return;
        var starCount = 400;
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < starCount; i++) {
            var star = document.createElement('div');
            star.className = 'star-dot';
            var x = Math.random() * 100;
            var y = Math.random() * 100;
            var size = Math.random() * 2.5 + 0.5;
            var opacity = Math.random() * 0.6 + 0.2;
            star.style.cssText = 'left:' + x + '%;top:' + y + '%;width:' + size + 'px;height:' + size + 'px;opacity:' + opacity + ';';
            fragment.appendChild(star);
        }
        container.appendChild(fragment);
    }
    initStars();

    // ===== КНОПКА НАВЕРХ =====
    var backToTopBtn = document.createElement('div');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--accent, #8B6B54);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        user-select: none;
    `;
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'scale(1)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'scale(0.8)';
        }
    });

    // ===== ЯНДЕКС.МЕТРИКА =====
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110292534', 'ym');

    ym(110292534, 'init', {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
    });

    // ===== ЗАЩИТА ФОТОГРАФИЙ =====
    function safeClosest(e, selector) {
        try {
            return e.target.closest(selector);
        } catch (err) {
            return null;
        }
    }

    document.addEventListener('contextmenu', function(e) {
        if (safeClosest(e, '.gallery-item img') || safeClosest(e, '.home-photo img') || safeClosest(e, '.hero-avatar img')) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (safeClosest(e, '.gallery-item img') || safeClosest(e, '.home-photo img') || safeClosest(e, '.hero-avatar img')) {
            if (e.button === 2) {
                e.preventDefault();
                return false;
            }
        }
    });

    document.addEventListener('dragstart', function(e) {
        if (safeClosest(e, '.gallery-item img') || safeClosest(e, '.home-photo img') || safeClosest(e, '.hero-avatar img')) {
            e.preventDefault();
        }
    });

    document.addEventListener('selectstart', function(e) {
        if (safeClosest(e, '.gallery-item img') || safeClosest(e, '.home-photo img') || safeClosest(e, '.hero-avatar img')) {
            e.preventDefault();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            var target = e.target;
            if (safeClosest(e, '.gallery-item img') || safeClosest(e, '.home-photo img') || safeClosest(e, '.hero-avatar img')) {
                e.preventDefault();
                return false;
            }
        }
    });

});

// ====================================================
// === БУРГЕР И ВЫПАДАЮЩЕЕ МЕНЮ ===
// ====================================================
(function() {
    var burgerBtn = document.getElementById("burgerBtn");
    var navMenu = document.querySelector(".nav");

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", function(e) {
            if (navMenu.classList.contains("active")) {
                if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                    navMenu.classList.remove("active");
                }
            }
        });
    }

    var dropdownToggles = document.querySelectorAll('.nav .dropdown-toggle');
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            var parentDropdown = this.closest('.dropdown');
            
            document.querySelectorAll('.nav .dropdown.open').forEach(function(drop) {
                if (drop !== parentDropdown) {
                    drop.classList.remove('open');
                }
            });
            
            parentDropdown.classList.toggle('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav .dropdown')) {
            document.querySelectorAll('.nav .dropdown.open').forEach(function(drop) {
                drop.classList.remove('open');
            });
        }
    });
})();

// ====================================================
// === АНИМАЦИЯ ПРИ СКРОЛЛЕ (ДЛЯ ВСЕХ СТРАНИЦ) ===
// ====================================================
document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section.fade-up, .card, .project-card, .stat-card').forEach(function(el) {
        el.classList.add('fade-up');
        observer.observe(el);
    });
});