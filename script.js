/* =========================================
   LUQEVY PREMIUM WEBSITE
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       YEAR
    ====================================== */

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================
       HEADER SCROLL
    ====================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================
       MOBILE MENU
    ====================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mobileNav");


    if (menuToggle && mobileNav) {


        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileNav.classList.contains(
                        "open"
                    );


                if (isOpen) {

                    mobileNav.classList.remove(
                        "open"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    mobileNav.classList.add(
                        "open"
                    );

                    menuToggle.classList.add(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );


        /* Close after clicking link */

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileNav.classList.remove(
                            "open"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================
       ESCAPE CLOSE
    ====================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileNav &&
                mobileNav.classList.contains("open")
            ) {

                mobileNav.classList.remove(
                    "open"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

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
                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(element);

            }
        );


    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================
       SMOOTH SCROLL
    ====================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {


            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );


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


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================
       HOVER MOVEMENT FOR VENTURE
    ====================================== */

    const venture =
        document.querySelector(".venture");

    const ventureMark =
        document.querySelector(".venture-mark");


    if (
        venture &&
        ventureMark &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        venture.addEventListener(
            "mousemove",
            event => {

                const rect =
                    venture.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height;


                const moveX =
                    (x - 0.5) * 8;


                const moveY =
                    (y - 0.5) * 8;


                ventureMark.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        venture.addEventListener(
            "mouseleave",
            () => {

                ventureMark.style.transform =
                    "translate(0, 0)";

            }
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
       CONSOLE
    ====================================== */

    console.log(
        "LUQEVY — Building what's next."
    );

});
