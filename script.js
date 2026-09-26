/* =========================================
   LUQEVY WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       CURRENT YEAR
    ====================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================
       NAVBAR SCROLL EFFECT
    ====================================== */

    const navbar = document.getElementById("navbar");

    const updateNavbar = () => {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    /* =====================================
       MOBILE MENU
    ====================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    const openMenu = () => {

        menuButton.classList.add("active");

        mobileMenu.classList.add("open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );
    };


    const closeMenu = () => {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );
    };


    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        }
    );


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* =====================================
       CLOSE MENU WITH ESCAPE
    ====================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("open")
            ) {
                closeMenu();
            }

        }
    );


    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================
       SMOOTH ANCHOR HANDLING
    ====================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    const navbarHeight =
                        navbar.offsetHeight;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight -
                        15;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================
       PRODUCT VISUAL SUBTLE MOVEMENT
    ====================================== */

    const productVisual =
        document.querySelector(".product-visual");

    const orbitLarge =
        document.querySelector(".orbit-large");

    const orbitSmall =
        document.querySelector(".orbit-small");


    if (
        productVisual &&
        orbitLarge &&
        orbitSmall
    ) {

        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (!ticking) {

                    window.requestAnimationFrame(() => {

                        const rect =
                            productVisual.getBoundingClientRect();

                        const viewportCenter =
                            window.innerHeight / 2;

                        const distance =
                            rect.top +
                            rect.height / 2 -
                            viewportCenter;

                        const movement =
                            Math.max(
                                -15,
                                Math.min(15, distance / 25)
                            );

                        orbitLarge.style.transform =
                            `translateY(${movement}px)`;

                        orbitSmall.style.transform =
                            `translateY(${-movement}px)`;

                        ticking = false;

                    });

                    ticking = true;
                }

            },
            { passive: true }
        );

    }


    /* =====================================
       EXTERNAL LINKS
    ====================================== */

    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =====================================
       CONSOLE BRAND MESSAGE
    ====================================== */

    console.log(
        "%cLUQEVY",
        "font-size:28px;font-weight:bold;"
    );

    console.log(
        "%cBuilding what's next.",
        "font-size:14px;color:#6abaff;"
    );

});
