// Aktuelles Jahr im Footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Smooth Scroll für interne Links
const navLinks = document.querySelectorAll(
  'a.nav-link[href^="#"], a.btn[href^="#"]'
);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const yOffset = 80; // Abstand zur fixen Navbar
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - yOffset;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  });
});

// Dummy-Formular-Feedback
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent =
      "Vielen Dank für Ihre Nachricht. In dieser Demoversion wird keine E-Mail versendet.";
    form.reset();
    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
}
