document.addEventListener("DOMContentLoaded", function() {

    // ===== УСТАНОВКА ГОДА В ФУТЕРЕ =====
    var year = document.getElementById("current-year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ===== ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРНЫХ ССЫЛОК =====
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

    // ===== ГЕНЕРАЦИЯ ЗВЕЗДНОГО НЕБА (ЕСЛИ ОНО ЕСТЬ) =====
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

    // ===== КНОПКА "НАВЕРХ" =====
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

});