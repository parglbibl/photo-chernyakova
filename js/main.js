// =========================================================
// === ОСНОВНОЙ JS ДЛЯ ВСЕГО САЙТА (БУРГЕР РАБОТАЕТ ВЕЗДЕ) ===
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
// === БУРГЕР И ВЫПАДАЮЩЕЕ МЕНЮ (ПРЯМАЯ ЛОГИКА) ===
// ====================================================
(function() {
    // Ищем кнопку и меню на странице
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

    // Выпадающее меню "Галерея"
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
// === СКРИПТ ДЛЯ CARDS.HTML (КРАСИВЫЕ ОТКРЫТКИ) ===
// ====================================================
document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, есть ли на странице контейнер с карточками
    const grid = document.getElementById('cardGrid');
    if (!grid) return; // Если страница не cards.html, просто выходим

    // Данные для открыток (ТЕПЕРЬ С КРАСИВЫМИ ТЕКСТАМИ)
    const cardsData = [
        // —————— МАКРОМИР ——————
        { 
            img: "images/gallery/macro/5.webp", 
            title: "Золотой глаз", 
            desc: "Капля, в которой отражается целый мир. Секунда, остановленная навсегда." 
        },
        { 
            img: "images/gallery/macro/14.webp", 
            title: "Утренний бархат", 
            desc: "Тишина, застывшая на лепестках. Момент, когда природа только просыпается." 
        },
        { 
            img: "images/gallery/macro/1.webp", 
            title: "Алые капли", 
            desc: "Красота — это просто капля, упавшая в нужный момент в правильном свете." 
        },
        { 
            img: "images/gallery/macro/13.webp", 
            title: "Капля на игле", 
            desc: "Тонкий баланс между падением и полётом. Мир держится на таких моментах." 
        },
        { 
            img: "images/gallery/macro/3.webp", 
            title: "Орхидея с росой", 
            desc: "Природа не терпит суеты. Она создаёт шедевры в абсолютной тишине." 
        },
        { 
            img: "images/gallery/macro/4.webp", 
            title: "Миг в тишине", 
            desc: "Иногда достаточно просто замереть, чтобы увидеть самое важное." 
        },
        { 
            img: "images/gallery/macro/22.webp", 
            title: "Искра в жёлтом", 
            desc: "Свет, пробивающийся сквозь форму. Это не просто цвет, это эмоция." 
        },
        { 
            img: "images/gallery/macro/20.webp", 
            title: "Синий бриллиант", 
            desc: "Когда капля становится драгоценностью. Вода умеет сиять." 
        },
        { 
            img: "images/gallery/macro/17.webp", 
            title: "Розовая капля", 
            desc: "Нежность, сконцентрированная в одной точке. Природа знает, как тронуть душу." 
        },
        { 
            img: "images/gallery/macro/19.webp", 
            title: "Тёплые капли", 
            desc: "Уют, разлитый по листу. В такие моменты хочется просто дышать." 
        },
        { 
            img: "images/gallery/macro/23.webp", 
            title: "Тишина", 
            desc: "Мир, который говорит без слов. Достаточно просто посмотреть." 
        },
        { 
            img: "images/gallery/macro/16.webp", 
            title: "В капле — мир", 
            desc: "Если присмотреться, в каждой капле живёт своя вселенная." 
        },

        // —————— ПРИРОДА ——————
        { 
            img: "images/gallery/nature/4.webp", 
            title: "Сакура в сумерках", 
            desc: "Цветы, которые цветут лишь для того, чтобы напомнить нам о быстротечности прекрасного." 
        },
        { 
            img: "images/gallery/nature/2.webp", 
            title: "Морозный рассвет", 
            desc: "Зима — это не холод. Это время, когда мир становится графичным и чистым." 
        },
        { 
            img: "images/gallery/nature/1.webp", 
            title: "Осеннее отражение", 
            desc: "Листья падают не потому, что умирают. Они просто меняют свой путь." 
        },
        { 
            img: "images/gallery/nature/5.webp", 
            title: "Тёплый свет", 
            desc: "Солнце, пробивающееся сквозь листву. Это и есть счастье." 
        },
        { 
            img: "images/gallery/nature/3.webp", 
            title: "Весеннее цветение", 
            desc: "Природа просыпается, чтобы напомнить: всё начинается заново." 
        },

        // —————— КОНЦЕПТ ——————
        { 
            img: "images/gallery/concept/14.webp", 
            title: "Яйцо на вилке", 
            desc: "Тонкий баланс. Концепт, который держится на одном движении." 
        },
        { 
            img: "images/gallery/concept/13.webp", 
            title: "Лимонный дождь", 
            desc: "Когда свет проходит сквозь воду, рождается не просто настроение, а состояние." 
        },
        { 
            img: "images/gallery/concept/12.webp", 
            title: "Чай с вдохновением", 
            desc: "Иногда идеи приходят не из ниоткуда, а из чашки горячего чая." 
        },
        { 
            img: "images/gallery/concept/6.webp", 
            title: "Неоновый дождь", 
            desc: "Город, который никогда не спит. Свет, превращающий воду в магию." 
        },
        { 
            img: "images/gallery/concept/8.webp", 
            title: "Закат в паутине", 
            desc: "Последние лучи солнца, запутавшиеся в тонких нитях." 
        },
        { 
            img: "images/gallery/concept/17.webp", 
            title: "Капля на лепестке", 
            desc: "Невесомость, застывшая в одном мгновении. Тишина, которую можно увидеть." 
        },
    ];

    // Генерация карточек
    cardsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flip-3d-card';
        card.innerHTML = `
            <div class="flip-3d-inner">
                <div class="flip-3d-front">
                    <img src="${item.img}" alt="${item.title}" loading="lazy">
                </div>
                <div class="flip-3d-back">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', function() { this.classList.toggle('flipped'); });
        grid.appendChild(card);
    });
});