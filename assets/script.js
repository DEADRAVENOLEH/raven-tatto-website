document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.querySelector(".preloader");
    
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 3000);  // Прелоадер исчезает через 3 сек
});
