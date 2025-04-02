document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const tattooSound = document.getElementById("tattooSound");

    // Включаем звук тату-машинки при загрузке
    tattooSound.play();

    // Убираем прелоадер после загрузки
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 1000);
    }, 3000);
});
