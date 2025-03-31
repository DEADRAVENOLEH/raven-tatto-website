// Прелоадер
window.addEventListener("load", () => {
    document.querySelector(".preloader").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
});

// Анимация кнопок
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log('Навели на кнопку');
    });
});
