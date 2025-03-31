document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const rainSound = document.getElementById("rainSound");
    const tattooSound = document.getElementById("tattooSound");
    const buttons = document.querySelectorAll(".btn");

    // ⏳ Анимация загрузки сайта
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 3000);

    // 🌧 Автоматический запуск фонового звука дождя
    setTimeout(() => {
        rainSound.volume = 0.3;
        rainSound.play();
    }, 3500);

    // 🔊 Звук тату-машинки при клике на кнопку
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.opacity = "0.7";
        });

        button.addEventListener("mouseleave", () => {
            button.style.opacity = "1";
        });

        button.addEventListener("click", () => {
            tattooSound.currentTime = 0; // Сбрасываем звук перед запуском
            tattooSound.play();
        });
    });
});
