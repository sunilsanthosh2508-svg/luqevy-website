document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
  ========================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =========================================
     FOOTER YEAR
  ========================================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================
     SMOOTH REVEAL
  ========================================== */

  const revealElements = document.querySelectorAll(
    ".section-label, .section-heading, .about-content, .ventures-header, .product-card, .building-item, .vision-content, .contact-grid"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

  });

});
