/* =========================================================
   LUQEVY — INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------
       Current year
    --------------------------------------------- */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ---------------------------------------------
       Header scroll state
    --------------------------------------------- */

    const header = document.getElementById("siteHeader");

    function updateHeader() {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });


    /* ---------------------------------------------
       Mobile navigation
    --------------------------------------------- */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
        });

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
            });
        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                mobileMenu.classList.remove("open");
            }

        });
    }


    /* ---------------------------------------------
       Scroll reveal
    --------------------------------------------- */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ---------------------------------------------
       Smooth internal navigation
    --------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ---------------------------------------------
       Product visual movement
    --------------------------------------------- */

    const productArt = document.querySelector(".product-art");
    const productOrb = document.querySelector(".product-orb");

    if (productArt && productOrb) {

        productArt.addEventListener("mousemove", event => {

            const rect = productArt.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            productOrb.style.transform =
                `translate(calc(-50% + ${x * 14}px), calc(-50% + ${y * 14}px))`;
        });

        productArt.addEventListener("mouseleave", () => {

            productOrb.style.transform =
                "translate(-50%, -50%)";

        });
    }


    /* ---------------------------------------------
       External links
    --------------------------------------------- */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* ---------------------------------------------
       Small parallax effect on hero visual
    --------------------------------------------- */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.matchMedia("(pointer:fine)").matches) {

        heroVisual.addEventListener("mousemove", event => {

            const rect = heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            heroVisual.style.transform =
                `translate(${x * 7}px, ${y * 7}px)`;
        });

        heroVisual.addEventListener("mouseleave", () => {

            heroVisual.style.transform =
                "translate(0, 0)";

        });
    }


    /* ---------------------------------------------
       Console branding
    --------------------------------------------- */

    console.log(
        "%cLuqevy",
        "font-size:24px;font-weight:700;color:#61a4ff;"
    );

    console.log(
        "Technology for what comes next."
    );

});
