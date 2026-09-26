:root {
  --bg: #02040d;
  --bg-soft: #070a16;
  --card: #0a0e1c;

  --white: #f7f9ff;
  --text: #dce3f5;
  --muted: #7f899f;

  --line: rgba(255, 255, 255, 0.09);

  --blue: #238cff;
  --cyan: #21d4fd;
  --violet: #754cff;

  --max-width: 1240px;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {
  background: var(--bg);
  color: var(--text);

  font-family: "DM Sans", sans-serif;

  line-height: 1.5;

  overflow-x: hidden;
}


a {
  color: inherit;
  text-decoration: none;
}


::selection {
  background: #4263ff;
  color: white;
}


/* =========================
   NAVBAR
========================= */

.navbar {
  width: min(var(--max-width), calc(100% - 48px));

  height: 90px;

  margin: auto;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom: 1px solid var(--line);

  position: relative;

  z-index: 20;
}


.brand {
  width: 105px;
  height: 58px;

  display: flex;

  align-items: center;
}


.brand img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  display: block;
}


.navbar nav {
  display: flex;

  gap: 38px;
}


.navbar nav a {
  font-size: 13px;

  color: #8c96aa;

  transition: 0.25s ease;
}


.navbar nav a:hover {
  color: white;
}


/* =========================
   HERO
========================= */

.hero {
  width: min(var(--max-width), calc(100% - 48px));

  min-height: 850px;

  margin: auto;

  position: relative;

  padding-top: 42px;

  overflow: hidden;
}


.hero-meta {
  display: flex;

  justify-content: space-between;

  color: #596277;

  font-size: 10px;

  letter-spacing: 0.18em;
}


.hero-content {
  position: relative;

  z-index: 5;

  padding-top: 80px;
}


.hero-logo {
  width: 250px;

  margin-bottom: 25px;
}


.hero-logo img {
  width: 100%;

  display: block;
}


.eyebrow {
  color: #8c96aa;

  font-size: 11px;

  letter-spacing: 0.25em;

  margin-bottom: 20px;
}


.hero h1 {
  max-width: 900px;

  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(65px, 9vw, 130px);

  line-height: 0.9;

  letter-spacing: -0.075em;

  font-weight: 500;
}


.hero h1 span {
  display: block;

  background:
    linear-gradient(
      90deg,
      #ffffff,
      #4c91ff,
      #8a5cff
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}


.hero-text {
  max-width: 510px;

  margin-top: 42px;

  color: var(--muted);

  font-size: 17px;

  line-height: 1.8;
}


.primary-button {
  display: inline-flex;

  align-items: center;

  gap: 28px;

  margin-top: 35px;

  padding: 15px 20px;

  background: white;

  color: #050711;

  font-size: 13px;

  font-weight: 700;

  transition: 0.3s ease;
}


.primary-button:hover {
  transform: translateY(-3px);

  background: #dfe8ff;
}


/* HERO GLOW */

.hero-orb {
  position: absolute;

  border-radius: 50%;

  filter: blur(90px);

  pointer-events: none;
}


.orb-one {
  width: 480px;
  height: 480px;

  right: -100px;
  top: 200px;

  background: rgba(35, 140, 255, 0.17);
}


.orb-two {
  width: 360px;
  height: 360px;

  right: 180px;
  bottom: 20px;

  background: rgba(117, 76, 255, 0.13);
}


/* =========================
   SECTIONS
========================= */

.section {
  width: min(var(--max-width), calc(100% - 48px));

  margin: auto;

  padding: 130px 0;

  border-top: 1px solid var(--line);

  display: grid;

  grid-template-columns: 100px 1fr;
}


.section-index {
  color: #4f596d;

  font-size: 12px;

  letter-spacing: 0.15em;
}


.section-content {
  max-width: 1000px;
}


.section-label {
  color: #667187;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 0.2em;

  margin-bottom: 28px;
}


.section h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(45px, 6vw, 82px);

  line-height: 0.98;

  letter-spacing: -0.06em;

  font-weight: 500;
}


.section h2 span {
  color: #6e778b;
}


/* =========================
   ABOUT
========================= */

.about-copy {
  max-width: 650px;

  margin-left: auto;

  margin-top: 50px;
}


.about-copy p {
  color: var(--muted);

  font-size: 17px;

  line-height: 1.8;

  margin-bottom: 25px;
}


/* =========================
   VENTURES
========================= */

.ventures .section-content {
  width: 100%;
}


.ventures h2 {
  margin-bottom: 70px;
}


.venture-card {
  border: 1px solid var(--line);

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.04),
      rgba(255,255,255,0.015)
    );

  padding: 30px;

  transition: 0.35s ease;
}


.venture-card:hover {
  border-color: rgba(74, 137, 255, 0.35);

  transform: translateY(-5px);
}


.venture-header {
  display: flex;

  justify-content: space-between;

  padding-bottom: 25px;

  border-bottom: 1px solid var(--line);

  color: #687287;

  font-size: 10px;

  letter-spacing: 0.15em;
}


.venture-body {
  min-height: 390px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 60px;
}


.venture-info {
  max-width: 600px;
}


.venture-kicker {
  color: #6d7890;

  font-size: 10px;

  letter-spacing: 0.18em;

  margin-bottom: 15px;
}


.venture-info h3 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(55px, 7vw, 100px);

  letter-spacing: -0.07em;

  line-height: 0.9;

  margin-bottom: 30px;
}


.venture-info > p:not(.venture-kicker) {
  color: var(--muted);

  font-size: 16px;

  line-height: 1.75;
}


.text-button {
  display: inline-flex;

  gap: 20px;

  margin-top: 30px;

  padding-bottom: 6px;

  border-bottom: 1px solid #7c8aff;

  color: #dfe5ff;

  font-size: 13px;

  font-weight: 600;
}


/* VENTURE VISUAL */

.venture-visual {
  width: 220px;
  height: 220px;

  flex-shrink: 0;

  position: relative;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #168dff,
      #365eff 48%,
      #804cff
    );
}


.venture-visual span {
  position: relative;

  z-index: 2;

  font-family: "Space Grotesk", sans-serif;

  font-size: 48px;

  font-weight: 600;

  color: white;
}


.visual-glow {
  position: absolute;

  width: 130px;
  height: 130px;

  border-radius: 50%;

  background: rgba(255,255,255,0.22);

  filter: blur(20px);
}


/* =========================
   VISION
========================= */

.vision-text {
  max-width: 600px;

  margin-top: 45px;

  margin-left: auto;

  color: var(--muted);

  font-size: 18px;

  line-height: 1.8;
}


/* =========================
   CONTACT
========================= */

.contact {
  background: #03050e;

  border-top: 1px solid var(--line);

  padding: 150px 24px;
}


.contact-content {
  width: min(1000px, 100%);

  margin: auto;
}


.contact h2 {
  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(60px, 9vw, 125px);

  line-height: 0.9;

  letter-spacing: -0.07em;

  font-weight: 500;
}


.contact h2 span {
  display: block;

  color: #6d7689;
}


.contact-button {
  display: inline-flex;

  gap: 30px;

  align-items: center;

  margin-top: 45px;

  padding: 16px 22px;

  background: white;

  color: #050711;

  font-size: 13px;

  font-weight: 700;

  transition: 0.3s ease;
}


.contact-button:hover {
  transform: translateY(-3px);

  background: #dce6ff;
}


/* =========================
   FOOTER
========================= */

footer {
  width: 100%;

  padding: 35px 24px;

  border-top: 1px solid var(--line);

  background: #02040b;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;

  color: #606a7e;

  font-size: 12px;
}


.footer-brand {
  width: 90px;

  height: 45px;
}


.footer-brand img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}


footer p {
  text-align: center;
}


footer > span {
  text-align: right;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

  .navbar {
    width: calc(100% - 32px);

    height: 75px;
  }


  .brand {
    width: 90px;
  }


  .navbar nav {
    display: none;
  }


  .hero {
    width: calc(100% - 32px);

    min-height: 750px;
  }


  .hero-content {
    padding-top: 70px;
  }


  .hero-logo {
    width: 190px;
  }


  .hero h1 {
    font-size: clamp(58px, 16vw, 90px);
  }


  .hero-text {
    font-size: 15px;
  }


  .section {
    width: calc(100% - 32px);

    display: block;

    padding: 90px 0;
  }


  .section-index {
    margin-bottom: 45px;
  }


  .section h2 {
    font-size: 48px;
  }


  .about-copy {
    margin-left: 0;
  }


  .venture-body {
    flex-direction: column;

    align-items: flex-start;

    padding: 45px 0;
  }


  .venture-visual {
    width: 140px;
    height: 140px;
  }


  .venture-visual span {
    font-size: 30px;
  }


  .venture-info h3 {
    font-size: 62px;
  }


  .contact {
    padding: 100px 20px;
  }


  .contact h2 {
    font-size: 65px;
  }


  footer {
    grid-template-columns: 1fr;

    gap: 20px;

    text-align: center;
  }


  footer p,
  footer > span {
    text-align: center;
  }

}
