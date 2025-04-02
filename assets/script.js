document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    setTimeout(() => {
        preloader.classList.add("hidden"); // Убираем прелоадер
        container.classList.add("loaded"); // Показываем контент
    }, 3000);
});
