const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

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
    { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.style.background =
        window.scrollY > 40
            ? "rgba(5,7,13,0.92)"
            : "rgba(5,7,13,0.72)";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

const orb = document.querySelector(".hero-orb");

window.addEventListener("mousemove", event => {
    if (!orb || window.innerWidth < 700) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;

    orb.style.transform =
        `translate(${x}px, calc(-50% + ${y}px))`;
});

const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} Luqevy. All rights reserved.`;
}
