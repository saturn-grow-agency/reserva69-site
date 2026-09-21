// =========================================================
// HOSTEL RESERVA69
// Scripts principais do site
// =========================================================


document.addEventListener("DOMContentLoaded", () => {

    console.log("Hostel Reserva69 — site carregado.");


    // =====================================================
    // ACCOMMODATION CAROUSEL COUNTER
    // =====================================================

    const carousel = document.querySelector("#accommodationCarousel");

    const currentSlide =
        document.querySelector(".carousel-counter span:first-child");

    if (carousel && currentSlide) {

        carousel.addEventListener("slid.bs.carousel", (event) => {

            const slideNumber = String(event.to + 1).padStart(2, "0");

            currentSlide.textContent = slideNumber;

        });

    }


    // =====================================================
    // CLOSE MOBILE NAVIGATION AFTER CLICK
    // =====================================================

    const navLinks =
        document.querySelectorAll("#mainNavigation .nav-link");

    const navigation =
        document.querySelector("#mainNavigation");

    if (navigation && navLinks.length) {

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                if (
                    navigation.classList.contains("show")
                ) {

                    const navbar =
                        bootstrap.Collapse.getInstance(navigation);

                    if (navbar) {
                        navbar.hide();
                    }

                }

            });

        });

    }

});
