// Прелоадер с анимацией тату-машинки
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    }, 4000);
});

// Фоновый звук дождя
const rainAudio = document.getElementById("rain-audio");
rainAudio.volume = 0.3; // Уменьшаем громкость дождя

// Анимация кнопок
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log('Навели на кнопку');
    });
});

// Звук тату-машинки при наведении на кнопки
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const sound = new Audio('assets/tattoo-machine.mp3');
        sound.play();
    });
});
