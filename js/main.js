<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Макромир — Галина Чернякова | Фотограф</title>
    <meta name="description" content="Макрофотографии Галины Черняковой: капли, цветы, текстуры, природа в деталях." />
    <meta name="keywords" content="макросъемка, макрофотография, капли росы, макромир, Галина Чернякова" />
    <meta property="og:title" content="Макромир — Галина Чернякова" />
    <meta property="og:description" content="Классическая макросъемка Галины Черняковой." />
    <meta property="og:image" content="https://photo-chernyakova.ru/images/photo.jpg" />
    <meta property="og:url" content="https://photo-chernyakova.ru/macro.html" />
    <meta name="twitter:card" content="summary_large_image" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <style>
        .nav .dropdown { position: relative; }
        .nav .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 160px;
            width: auto;
            background: rgba(24, 23, 21, 0.92);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 6px 0;
            list-style: none;
            z-index: 200;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .nav .dropdown.open .dropdown-content { display: block; }
        .nav .dropdown-toggle {
            display: inline-block;
            padding: 6px 0;
            cursor: pointer;
            color: var(--muted);
            font-weight: 600;
            font-size: 18px;
            display: flex;
            align-items: center;
            line-height: 1;
        }
        .nav .dropdown-toggle:hover { color: #FFFFFF; }
        .nav .dropdown-content a {
            display: block;
            width: 100%;
            padding: 8px 20px;
            font-size: 17px;
            color: var(--muted);
            text-decoration: none;
            transition: 0.2s;
            border-radius: 0;
            box-sizing: border-box;
        }
        .nav .dropdown-content a:hover {
            color: #FFFFFF;
            background: rgba(195, 154, 116, 0.1);
        }

        @media (max-width: 900px) {
            .nav.active { display: flex !important; }
            .nav {
                display: none;
                flex-direction: column;
                position: fixed;
                top: 70px;
                right: 20px;
                width: 55%;
                max-width: 260px;
                background: rgba(24, 23, 21, 0.96);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 20px;
                padding: 12px 0 12px 0;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
                z-index: 999;
            }
            .nav li { width: 100%; text-align: center; }
            .nav a, .nav .dropdown-toggle {
                display: block;
                padding: 6px 0;
                font-size: 16px;
                line-height: 1.2;
                width: 100%;
                color: var(--muted);
                transition: 0.2s;
                cursor: pointer;
            }
            .nav a:hover, .nav .dropdown-toggle:hover { color: #FFFFFF; }
            .nav .dropdown { width: 100%; }
            .nav .dropdown-content {
                position: static;
                transform: none;
                width: 100%;
                box-shadow: none;
                border: none;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 0;
                padding: 0;
                margin-top: 0;
                display: none;
            }
            .nav .dropdown.open .dropdown-content { display: block; }
            .nav .dropdown-content a {
                font-size: 14px;
                padding: 4px 0;
                line-height: 1.2;
                color: var(--small);
            }
            .nav .dropdown-content a:hover { color: #FFFFFF; }
            .burger-btn {
                display: flex;
                flex-direction: column;
                gap: 4px;
                cursor: pointer;
                z-index: 1000;
                padding: 5px;
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                border: none;
            }
            .burger-btn span {
                display: block;
                width: 22px;
                height: 2px;
                background-color: var(--muted);
                border-radius: 1px;
                transition: 0.3s;
            }
            .nav.active ~ .burger-btn span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
            .nav.active ~ .burger-btn span:nth-child(2) { opacity: 0; }
            .nav.active ~ .burger-btn span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        }

        /* Скрываем кнопку бургера на ПК */
        @media (min-width: 901px) {
            .burger-btn {
                display: none !important;
            }
        }

        /* ===== ЛАЙТБОКС ===== */
        #lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: rgba(0,0,0,0.92);
            backdrop-filter: blur(4px);
        }

        #lightbox .image-wrapper {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        #lightbox img, #lightbox video {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            width: auto;
            height: auto;
            display: none; /* скрыты по умолчанию, JS переключает */
        }

        #lightbox img.active-media, #lightbox video.active-media {
            display: block;
        }

        #lightbox .caption {
            color: #fff;
            font-size: 18px;
            margin-top: 20px;
            text-align: center;
            padding: 8px 20px;
            background: rgba(0,0,0,0.5);
            border-radius: 8px;
            font-weight: 500;
        }

        #lightbox .close {
            position: absolute;
            top: -50px;
            right: 0;
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            transition: 0.3s;
            line-height: 1;
            z-index: 10;
        }
        #lightbox .close:hover {
            color: var(--accent);
            transform: scale(1.1);
        }

        #lightbox .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            background: rgba(0,0,0,0.4);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            user-select: none;
            z-index: 5;
        }
        #lightbox .nav-btn:hover {
            background: var(--accent);
            transform: translateY(-50%) scale(1.1);
        }
        #lightbox .nav-prev { left: -70px; }
        #lightbox .nav-next { right: -70px; }

        #lightbox .counter {
            color: rgba(255,255,255,0.6);
            font-size: 16px;
            margin-top: 10px;
            font-family: 'Inter', sans-serif;
        }

        /* ===== КНОПКА ОЖИВИТЬ ===== */
        #lightbox .alive-btn {
            margin-top: 12px;
            padding: 8px 24px;
            border-radius: 40px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.05);
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            font-family: 'Inter', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            opacity: 0;
            visibility: hidden;
        }
        #lightbox .alive-btn:hover {
            background: var(--accent);
            border-color: var(--accent);
            transform: scale(1.02);
        }

        @media (max-width: 768px) {
            #lightbox .nav-btn { width: 40px; height: 40px; font-size: 30px; }
            #lightbox .nav-prev { left: 10px; }
            #lightbox .nav-next { right: 10px; }
            #lightbox .close { top: -40px; font-size: 32px; }
            #lightbox .alive-btn { font-size: 14px; padding: 6px 18px; }
        }
    </style>
</head>
<body>

    <img id="top-layer-gerbera" src="images/bg.webp">

    <a href="index.html">
        <img src="images/logo.png" alt="Галина Чернякова Photography" class="site-logo">
    </a>

    <header>
        <div class="header-inner">
            <button class="burger-btn" id="burgerBtn">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav" id="mainNav">
                <li><a href="index.html">Главная</a></li>
                <li><a href="about.html">О себе</a></li>
                <li><a href="projects.html">Проекты</a></li>
                <li><a href="achievements.html">Достижения</a></li>
                
                <li class="dropdown">
                    <span class="dropdown-toggle">Галерея</span>
                    <ul class="dropdown-content">
                        <li><a href="macro.html">Макромир</a></li>
                        <li><a href="concept.html">Концепт</a></li>
                        <li><a href="nature.html">Природа</a></li>
                    </ul>
                </li>

                <li><a href="cards.html">Открытки настроения</a></li>

                <li><a href="news.html">Новости</a></li>
                <li><a href="faq.html">Вопросы и ответы</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
        </div>
    </header>

    <div class="breadcrumbs">
        <a href="index.html">Главная</a>
        <span class="sep">›</span>
        <a href="gallery.html">Галерея</a>
        <span class="sep">›</span>
        <span class="current">Макромир</span>
    </div>

    <section class="hero" style="padding-top: 20px; padding-bottom: 10px;">
        <div class="container">
            <h1>Макро<span>мир</span></h1>
            <p class="hero-lead">Классическая макросъемка. Капли, цветы, текстуры.</p>
            <div class="hero-quote">✨ «Рассмотреть то, мимо чего мы проходим каждый день» ✨</div>
        </div>
    </section>

    <section class="section fade-up" style="padding-top: 10px; padding-bottom: 25px;">
        <div class="container">
            <div class="section-title">Макро-работы</div>
            <div class="section-subtitle">Мир в деталях</div>
            <div class="gallery" id="macroGallery">
                <div class="gallery-item" onclick="openLightbox(0, macroImages, macroCaptions)"><img src="images/gallery/macro/1.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(1, macroImages, macroCaptions)"><img src="images/gallery/macro/6.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(2, macroImages, macroCaptions)"><img src="images/gallery/macro/2.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(3, macroImages, macroCaptions)"><img src="images/gallery/macro/3.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(4, macroImages, macroCaptions)"><img src="images/gallery/macro/4.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(5, macroImages, macroCaptions)"><img src="images/gallery/macro/5.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(6, macroImages, macroCaptions)"><img src="images/gallery/macro/7.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(7, macroImages, macroCaptions)"><img src="images/gallery/macro/8.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(8, macroImages, macroCaptions)"><img src="images/gallery/macro/10.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(9, macroImages, macroCaptions)"><img src="images/gallery/macro/11.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(10, macroImages, macroCaptions)"><img src="images/gallery/macro/12.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(11, macroImages, macroCaptions)"><img src="images/gallery/macro/13.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(12, macroImages, macroCaptions)"><img src="images/gallery/macro/14.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(13, macroImages, macroCaptions)"><img src="images/gallery/macro/15.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(14, macroImages, macroCaptions)"><img src="images/gallery/macro/16.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(15, macroImages, macroCaptions)"><img src="images/gallery/macro/17.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(16, macroImages, macroCaptions)"><img src="images/gallery/macro/18.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(17, macroImages, macroCaptions)"><img src="images/gallery/macro/19.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(18, macroImages, macroCaptions)"><img src="images/gallery/macro/20.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(19, macroImages, macroCaptions)"><img src="images/gallery/macro/21.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(20, macroImages, macroCaptions)"><img src="images/gallery/macro/22.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(21, macroImages, macroCaptions)"><img src="images/gallery/macro/9.webp" alt="" loading="lazy" /></div>
                <div class="gallery-item" onclick="openLightbox(22, macroImages, macroCaptions)"><img src="images/gallery/macro/23.webp" alt="" loading="lazy" /></div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p class="stardust">✦ Каждое фото — это застывшая эмоция ✦</p>
            <p>© <span id="current-year"></span> Галина Чернякова</p>
        </div>
    </footer>

    <!-- ===== УДАЛЕН ДУБЛИРУЮЩИЙ ВЫЗОВ main.js ===== -->

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.section, .gallery').forEach(function(el) {
                el.classList.add('fade-up');
                observer.observe(el);
            });
        });
    </script>

    <!-- ===== ЛАЙТБОКС ДАННЫЕ ===== -->
    <script>
        var macroImages = [
            'images/gallery/macro/1.webp',
            'images/gallery/macro/6.webp',
            'images/gallery/macro/2.webp',
            'images/gallery/macro/3.webp',
            'images/gallery/macro/4.webp',
            'images/gallery/macro/5.webp',
            'images/gallery/macro/7.webp',
            'images/gallery/macro/8.webp',
            'images/gallery/macro/10.webp',
            'images/gallery/macro/11.webp',
            'images/gallery/macro/12.webp',
            'images/gallery/macro/13.webp',
            'images/gallery/macro/14.webp',
            'images/gallery/macro/15.webp',
            'images/gallery/macro/16.webp',
            'images/gallery/macro/17.webp',
            'images/gallery/macro/18.webp',
            'images/gallery/macro/19.webp',
            'images/gallery/macro/20.webp',
            'images/gallery/macro/21.webp',
            'images/gallery/macro/22.webp',
            'images/gallery/macro/9.webp',
            'images/gallery/macro/23.webp'
        ];
        var macroCaptions = [
            'Грёзы любви',
            'Медленный путь',
            'Янтарная слеза',
            'Точка опоры',
            'Остановка',
            'Нежность',
            'Прикосновение',
            'Встреча',
            'Путь',
            'Начало',
            'Искра',
            'Застывшее движение',
            'Бархат',
            'На краю',
            'Лёгкость',
            'Головоломка',
            'Розовая капля',
            'Свет на изгибе',
            'Тихий свет',
            'Глубина',
            'Жёлтый свет',
            'Линия и бесконечность',
            'Безмолвие'
        ];
    </script>

    <!-- ===== ЛАЙТБОКС HTML ===== -->
    <div id="lightbox" style="display: none;">
        <span class="close" onclick="closeLightbox()">&times;</span>
        <div class="image-wrapper">
            <img id="lightboxImage" src="" alt="" />
            <video id="lightboxVideo" src="images/gallery/macro/1.mp4" muted loop playsinline></video>
            <button class="alive-btn" id="aliveBtn" onclick="toggleAlive()">
                <i class="fa-solid fa-play"></i> Оживить фото
            </button>
            <span class="nav-btn nav-prev" onclick="changeImage(-1)">‹</span>
            <span class="nav-btn nav-next" onclick="changeImage(1)">›</span>
        </div>
        <div class="caption" id="lightboxCaption"></div>
        <div class="counter" id="lightboxCounter"></div>
    </div>

    <!-- ===== ЛАЙТБОКС JS ===== -->
    <script>
        var lightbox = document.getElementById('lightbox');
        var lightboxImage = document.getElementById('lightboxImage');
        var lightboxVideo = document.getElementById('lightboxVideo');
        var lightboxCaption = document.getElementById('lightboxCaption');
        var lightboxCounter = document.getElementById('lightboxCounter');
        var aliveBtn = document.getElementById('aliveBtn');
        var currentIndex = 0;
        var currentImages = [];
        var currentCaptions = [];

        function openLightbox(index, images, captions) {
            if (!images || !images.length) return;
            currentImages = images;
            currentCaptions = captions || [];
            currentIndex = index;
            
            // Сброс видео и кнопки при открытии
            lightboxVideo.pause();
            lightboxVideo.currentTime = 0;
            lightboxImage.classList.remove('active-media');
            lightboxVideo.classList.remove('active-media');
            aliveBtn.innerHTML = '<i class="fa-solid fa-play"></i> Оживить фото';
            aliveBtn.style.display = 'none';

            renderLightbox();
        }

        function renderLightbox() {
            if (!currentImages.length) return;
            lightboxImage.src = currentImages[currentIndex];
            lightboxCaption.textContent = currentCaptions[currentIndex] || '';
            lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentImages.length;
            
            // Показываем картинку, скрываем видео
            lightboxImage.classList.add('active-media');
            lightboxVideo.classList.remove('active-media');
            lightboxVideo.pause();
            
            // Показываем кнопку только для первого фото (индекс 0)
            if (currentIndex === 0) {
                aliveBtn.style.display = 'inline-flex';
            } else {
                aliveBtn.style.display = 'none';
            }

            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function toggleAlive() {
            if (lightboxImage.classList.contains('active-media')) {
                // Переключаем на видео
                lightboxImage.classList.remove('active-media');
                lightboxVideo.classList.add('active-media');
                lightboxVideo.load();
                lightboxVideo.play();
                aliveBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Свернуть';
            } else {
                // Возвращаем картинку
                lightboxVideo.pause();
                lightboxVideo.currentTime = 0;
                lightboxVideo.classList.remove('active-media');
                lightboxImage.classList.add('active-media');
                aliveBtn.innerHTML = '<i class="fa-solid fa-play"></i> Оживить фото';
            }
        }

        // Автоматический возврат к картинке после окончания видео
        lightboxVideo.addEventListener('ended', function() {
            lightboxVideo.classList.remove('active-media');
            lightboxImage.classList.add('active-media');
            aliveBtn.innerHTML = '<i class="fa-solid fa-play"></i> Оживить фото';
        });

        function changeImage(direction) {
            if (!currentImages.length) return;
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = currentImages.length - 1;
            if (currentIndex >= currentImages.length) currentIndex = 0;
            renderLightbox();
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
            lightboxVideo.pause();
            lightboxVideo.currentTime = 0;
            lightboxVideo.classList.remove('active-media');
            lightboxImage.classList.add('active-media');
            aliveBtn.innerHTML = '<i class="fa-solid fa-play"></i> Оживить фото';
        }

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'none') return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
        });
    </script>

</body>
</html>
