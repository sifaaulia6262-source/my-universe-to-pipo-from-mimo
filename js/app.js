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
