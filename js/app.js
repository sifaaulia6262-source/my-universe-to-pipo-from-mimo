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
            .getElementById("chapter1")
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
/* =========================================
   LIGHTBOX
========================================= */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeButton =
document.querySelector(".lightbox-close");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src = image.src;
lightboxImage.alt = image.alt;

});

});

closeButton.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});
/* =========================================
   CHAPTER 3
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const chapterThreeItems = document.querySelectorAll(
        "#chapter3 .gallery-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    chapterThreeItems.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});
/* =========================================
   GIFT SECTION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const giftCards = document.querySelectorAll(
        "#gift-section .gift-card"
    );

    const giftObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    giftCards.forEach(card => {

        card.classList.add("hidden");

        giftObserver.observe(card);

    });

});
/* =========================================
   LOVE LETTER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const letterCard = document.querySelector("#love-letter .letter-card");

    if (!letterCard) return;

    const letterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.25

    });

    letterCard.classList.add("hidden");

    letterObserver.observe(letterCard);

});
/* =========================================
   PRAYER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const prayerCard = document.querySelector("#prayer .prayer-card");

    if (!prayerCard) return;

    const prayerObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.25

    });

    prayerCard.classList.add("hidden");

    prayerObserver.observe(prayerCard);

});
/* =========================================
   ENDING
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const endingContainer = document.querySelector("#ending .ending-container");

    if (!endingContainer) return;

    const endingObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.25

    });

    endingContainer.classList.add("hidden");

    endingObserver.observe(endingContainer);

});
/* =========================================
   VIDEO MEMORIES PLAYLIST
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("memoryVideo");

    if (!video) return;

    const playlist = [

        "assets/videos/when-we-meet-bandung.mp4",

        "assets/videos/night-riding-bandung.mp4",

        "assets/videos/menunggu-pesanan.mp4",

        "assets/videos/celebrate-my-birthday.mp4",

        "assets/videos/sebelum-satgas.mp4",

        "assets/videos/mimo-menunggu-kereta.mp4"

    ];

    let currentVideo = 0;

    video.addEventListener("ended", () => {

        currentVideo++;

        if (currentVideo < playlist.length) {

            video.src = playlist[currentVideo];

            video.load();

            video.play();

        }

    });

});

/* =========================================
   VIDEO ENDING
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("memoryVideo");
    const ending = document.getElementById("videoEnding");
    const button = document.getElementById("continueJourney");

    if (!video) return;

    const playlist = [

        "assets/videos/when-we-meet-bandung.mp4",
        "assets/videos/night-riding-bandung.mp4",
        "assets/videos/menunggu-pesanan.mp4",
        "assets/videos/celebrate-my-birthday.mp4",
        "assets/videos/sebelum-satgas.mp4",
        "assets/videos/mimo-menunggu-kereta.mp4"

    ];

    video.addEventListener("ended", () => {

        const currentSrc = video.currentSrc;

        if(currentSrc.includes(playlist[playlist.length-1])){

            ending.classList.add("active");

        }

    });

    button.addEventListener("click",()=>{

        document
        .getElementById("gift-section")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
/* =========================================
   PREMIUM LIGHTBOX NAVIGATION
========================================= */

const images = Array.from(
    document.querySelectorAll(".gallery-item img")
);

const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let currentIndex = 0;

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;

    });

});

prevButton.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

});

nextButton.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

});
/* =========================================
   LOVE LETTER ENVELOPE
========================================= */

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}
/* =========================================
   LOVE LETTER ENVELOPE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.querySelector(".envelope");

    if (!envelope) return;

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

});
/* =========================================
   RESTART JOURNEY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const restartButton = document.getElementById("restartJourney");

    if (!restartButton) return;

    restartButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});
