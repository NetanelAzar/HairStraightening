window.addEventListener("scroll", () => {
  const header = document.querySelector(".modern-header");

  if (!header) return;

  const scrolled = window.scrollY > 50;
  header.classList.toggle("scrolled", scrolled);

  // הוספת אפקט קל ללוגו
  const logo = header.querySelector(".logo-image");
  if (logo) {
    logo.style.transform = scrolled ? "scale(0.9)" : "scale(1)";
    logo.style.transition = "transform 0.3s ease, height 0.3s ease";
  }

  // הוספת אפקט למרווחים של הניוויגציה
  const nav = header.querySelector(".header-nav");
  if (nav) {
    nav.classList.toggle("scrolled", scrolled);
  }
});
