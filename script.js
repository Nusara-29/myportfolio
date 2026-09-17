document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================================
       NAVBAR SHADOW
    ===================================================== */

    const navbar =
        document.getElementById("navbar");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /* =====================================================
       LIGHTBOX
    ===================================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");


    const images =
        document.querySelectorAll(".click-image");


    images.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });



    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

    function closeLightbox() {

        lightbox.classList.remove("active");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }


    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );



    /* =====================================================
       BUTTON CLICK EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.style.transform =
                    "scale(0.94)";

                setTimeout(function () {

                    button.style.transform = "";

                }, 150);

            }
        );

    });



    console.log(
        "Portfolio ของ นางสาวนุสรา ทับทิมหิน พร้อมใช้งานแล้ว 💗"
    );

});
