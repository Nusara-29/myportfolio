// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(
    ".section-title, .profile-card, .sop-card, .work-card, .experience-box, .certificate-card, .future-content, .thank-content"
);

revealItems.forEach(item => {
    item.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealItems.forEach(item => {
    observer.observe(item);
});


// ===============================
// NAVBAR SHADOW
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ===============================
// IMAGE LIGHTBOX
// ===============================

const workImages = document.querySelectorAll(
    ".work-card img, .certificate-item img"
);

workImages.forEach(image => {

    image.style.cursor = "zoom-in";

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.88)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "30px";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "zoom-out";

        const bigImage = document.createElement("img");

        bigImage.src = image.src;

        bigImage.style.maxWidth = "95%";
        bigImage.style.maxHeight = "90vh";
        bigImage.style.objectFit = "contain";
        bigImage.style.borderRadius = "15px";

        overlay.appendChild(bigImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });

});


// ===============================
// BUTTON CLICK EFFECT
// ===============================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});


// ===============================
// CURRENT YEAR
// ===============================

console.log(
    "Nusara Portfolio | 2026"
);
