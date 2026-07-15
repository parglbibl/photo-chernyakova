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

// ====================================================
// === СКРИПТ ДЛЯ CARDS.HTML (43 фото, показываем 7) ===
// ====================================================
document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById('cardGrid');
    if (!grid) return;

    const allCards = [
        { img: "images/gallery/macro/1.webp", title: "Алые капли", desc: "Красота — это просто капля, упавшая в нужный момент в правильном свете." },
        { img: "images/gallery/macro/2.webp", title: "Ветка в янтаре", desc: "Солнечный свет, застывший в капле. Природа умеет создавать драгоценности." },
        { img: "images/gallery/macro/3.webp", title: "Орхидея с росой", desc: "Природа не терпит суеты. Она создаёт шедевры в абсолютной тишине." },
        { img: "images/gallery/macro/4.webp", title: "Миг в тишине", desc: "Иногда достаточно просто замереть, чтобы увидеть самое важное." },
        { img: "images/gallery/macro/5.webp", title: "Золотой глаз", desc: "Капля, в которой отражается целый мир. Секунда, остановленная навсегда." },
        { img: "images/gallery/macro/6.webp", title: "Медленный путь", desc: "Время течёт по-другому, когда смотришь на мир через макрообъектив." },
        { img: "images/gallery/macro/7.webp", title: "Край листа", desc: "Граница между светом и тенью, жизнью и тишиной." },
        { img: "images/gallery/macro/8.webp", title: "Взгляд вперёд", desc: "Иногда нужно просто смотреть вперёд, не оглядываясь назад." },
        { img: "images/gallery/macro/9.webp", title: "Ветка и небо", desc: "Тонкая линия между землёй и облаками. Гармония в простом." },
        { img: "images/gallery/macro/10.webp", title: "Дорога домой", desc: "Каждый путь начинается с первого шага. Даже самый маленький." },
        { img: "images/gallery/macro/11.webp", title: "Росток", desc: "Новая жизнь всегда начинается с малого. И это прекрасно." },
        { img: "images/gallery/macro/12.webp", title: "Капля на солнце", desc: "Свет, проходящий сквозь воду, превращается в магию." },
        { img: "images/gallery/macro/13.webp", title: "Капля на игле", desc: "Тонкий баланс между падением и полётом. Мир держится на таких моментах." },
        { img: "images/gallery/macro/14.webp", title: "Утренний бархат", desc: "Тишина, застывшая на лепестках. Момент, когда природа только просыпается." },
        { img: "images/gallery/macro/15.webp", title: "Капля на краю", desc: "Иногда самый важный момент происходит прямо на границе." },
        { img: "images/gallery/macro/16.webp", title: "В капле — мир", desc: "Если присмотреться, в каждой капле живёт своя вселенная." },
        { img: "images/gallery/macro/17.webp", title: "Розовая капля", desc: "Нежность, сконцентрированная в одной точке. Природа знает, как тронуть душу." },
        { img: "images/gallery/macro/18.webp", title: "Капля-линза", desc: "Маленькая линза, в которой умещается целый мир." },
        { img: "images/gallery/macro/19.webp", title: "Тёплые капли", desc: "Уют, разлитый по листу. В такие моменты хочется просто дышать." },
        { img: "images/gallery/macro/20.webp", title: "Синий бриллиант", desc: "Когда капля становится драгоценностью. Вода умеет сиять." },
        { img: "images/gallery/macro/21.webp", title: "Искра в жёлтом", desc: "Свет, пробивающийся сквозь форму. Это не просто цвет, это эмоция." },
        { img: "images/gallery/macro/22.webp", title: "Искра в жёлтом", desc: "Свет, пробивающийся сквозь форму. Это не просто цвет, это эмоция." },
        { img: "images/gallery/macro/23.webp", title: "Тишина", desc: "Мир, который говорит без слов. Достаточно просто посмотреть." },

        { img: "images/gallery/concept/1.webp", title: "Капля в пустыне", desc: "Одинокая капля, которая хранит в себе целую историю." },
        { img: "images/gallery/concept/2.webp", title: "На грани", desc: "Там, где заканчивается реальность, начинается искусство." },
        { img: "images/gallery/concept/4.webp", title: "Золотая сердцевина", desc: "Свет, рождающийся из глубины. Тёплое сияние в центре всего." },
        { img: "images/gallery/concept/5.webp", title: "Чай с вдохновением", desc: "Иногда идеи приходят не из ниоткуда, а из чашки горячего чая." },
        { img: "images/gallery/concept/6.webp", title: "Неоновый дождь", desc: "Город, который никогда не спит. Свет, превращающий воду в магию." },
        { img: "images/gallery/concept/7.webp", title: "Геометрия теней", desc: "Когда свет встречается с формой, рождается искусство." },
        { img: "images/gallery/concept/8.webp", title: "Закат в паутине", desc: "Последние лучи солнца, запутавшиеся в тонких нитях." },
        { img: "images/gallery/concept/9.webp", title: "Осеннее зеркало", desc: "Лужа, в которой отражается всё: небо, деревья и прощание с летом." },
        { img: "images/gallery/concept/11.webp", title: "Увядание", desc: "Красота увядания. Есть что-то завораживающее в том, что уходит." },
        { img: "images/gallery/concept/12.webp", title: "Персиковое утро", desc: "Тёплые лучи утреннего солнца, проходящие сквозь фруктовый сок." },
        { img: "images/gallery/concept/13.webp", title: "Лимонный дождь", desc: "Когда свет проходит сквозь воду, рождается не просто настроение, а состояние." },
        { img: "images/gallery/concept/14.webp", title: "Яйцо на вилке", desc: "Тонкий баланс. Концепт, который держится на одном движении." },
        { img: "images/gallery/concept/15.webp", title: "Тёплые огни", desc: "Огоньки, которые согревают душу даже в самую холодную ночь." },
        { img: "images/gallery/concept/16.webp", title: "Золотая снежинка", desc: "Зима — это не холод. Это время, когда мир становится графичным и чистым." },
        { img: "images/gallery/concept/17.webp", title: "Капля на лепестке", desc: "Невесомость, застывшая в одном мгновении. Тишина, которую можно увидеть." },

        { img: "images/gallery/nature/1.webp", title: "Осеннее отражение", desc: "Листья падают не потому, что умирают. Они просто меняют свой путь." },
        { img: "images/gallery/nature/2.webp", title: "Морозный рассвет", desc: "Зима — это не холод. Это время, когда мир становится графичным и чистым." },
        { img: "images/gallery/nature/3.webp", title: "Весеннее цветение", desc: "Природа просыпается, чтобы напомнить: всё начинается заново." },
        { img: "images/gallery/nature/4.webp", title: "Сакура в сумерках", desc: "Цветы, которые цветут лишь для того, чтобы напомнить нам о быстротечности прекрасного." },
        { img: "images/gallery/nature/5.webp", title: "Тёплый свет", desc: "Солнце, пробивающееся сквозь листву. Это и есть счастье." },
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledAll = shuffleArray([...allCards]);
    const cardsToShow = shuffledAll.slice(0, 7);

    cardsToShow.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flip-3d-card';
        card.innerHTML = `
            <div class="flip-3d-inner">
                <div class="flip-3d-front">
                    <img src="${item.img}" alt="${item.title}" loading="lazy">
                    <!-- КНОПКА ПОДЕЛИТЬСЯ -->
                    <div class="share-wrapper">
                        <button class="share-btn" data-title="${item.title}" data-img="${item.img}" data-desc="${item.desc}">
                            <i class="fa-solid fa-share-nodes"></i>
                        </button>
                    </div>
                </div>
                <div class="flip-3d-back">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            document.querySelectorAll('.flip-3d-card').forEach(function(el) {
                if (el !== card) {
                    el.classList.remove('flipped');
                }
            });
            this.classList.toggle('flipped');
        });

        grid.appendChild(card);
    });

    // ===== ЛОГИКА КНОПКИ «ПОДЕЛИТЬСЯ» (Share API) =====
    document.querySelectorAll('.share-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();

            const title = this.dataset.title;
            const desc = this.dataset.desc;
            const pageUrl = window.location.href;

            const shareText = `✨ ${title}\n\n${desc}\n\nПосмотреть открытку: ${pageUrl}`;

            // Проверяем, поддерживает ли браузер нативное меню "Поделиться"
            if (navigator.share) {
                // На телефонах (iOS/Android) — открываем родное меню
                navigator.share({
                    title: title,
                    text: shareText,
                    url: pageUrl
                }).catch(function(err) {
                    if (err.name !== 'AbortError') {
                        console.log('Ошибка при шеринге:', err);
                    }
                });
            } else {
                // На ПК — просто копируем текст в буфер обмена
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(shareText).then(function() {
                        alert('Ссылка на открытку скопирована в буфер обмена!');
                    }).catch(function(err) {
                        console.error('Не удалось скопировать текст: ', err);
                    });
                } else {
                    // Запасной вариант для старых браузеров
                    var textarea = document.createElement('textarea');
                    textarea.value = shareText;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        alert('Ссылка на открытку скопирована в буфер обмена!');
                    } catch (err) {
                        console.error('Не удалось скопировать текст: ', err);
                    }
                    document.body.removeChild(textarea);
                }
            }
        });
    });
});

// ====================================================
// === АТМОСФЕРНЫЙ ЗВУК (Только для cards.html) ===
// ====================================================
document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, есть ли кнопка звука ИМЕННО на этой странице
    const soundBtn = document.getElementById('soundToggle');
    if (!soundBtn) return; // Если кнопки нет (другие страницы) — просто выходим

    let audio = null;
    let isPlaying = false;

    soundBtn.addEventListener('click', function() {
        if (!audio) {
            // Создаём аудио-элемент с очень тихим звуком природы (лес/ветер)
            audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
            audio.loop = true;
            audio.volume = 0.08; // Жёсткий лимит громкости — 8%
        }

        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            soundBtn.classList.remove('active');
            soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            audio.play().catch(function(err) {
                console.log('Звук заблокирован браузером или пользователем');
            });
            isPlaying = true;
            soundBtn.classList.add('active');
            soundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    });
});