/*
==========================================
 My Universe — To Pipo, From Mimo
 Main JavaScript
 Version: 1.0.0
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("My Universe Loaded ❤️");
});
const startButton = document.getElementById("startJourney");

if (startButton) {
    startButton.addEventListener("click", () => {
        document
            .getElementById("chapter-1")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}
const enterButton = document.getElementById("enterUniverse");
const welcomeScreen = document.getElementById("welcome");

if (enterButton && welcomeScreen) {
    enterButton.addEventListener("click", () => {
        welcomeScreen.classList.add("hidden");
    });
}
/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 1500);

});
/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navigate to ${link.getAttribute("href")}`);
    });
});
/* =========================================
   CHAPTER 2
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const chapterTwoItems = document.querySelectorAll(
        "#chapter2 .gallery-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    chapterTwoItems.forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

});
