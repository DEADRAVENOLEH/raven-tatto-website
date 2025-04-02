document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    setTimeout(() => {
        preloader.classList.add("hidden"); // Убираем прелоадер
        setTimeout(() => {
            container.classList.add("loaded"); // Показываем контент
        }, 500); // Задержка для плавного перехода
    }, 2500);
});
