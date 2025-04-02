document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.querySelector(".preloader");
    let backgroundAudio = document.getElementById("background-audio");

    setTimeout(() => {
        preloader.classList.add("hidden");
        backgroundAudio.play(); 
    }, 3000);
});
