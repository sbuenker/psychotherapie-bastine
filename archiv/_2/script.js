// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      }
    });
  });
}

// FAQ accordion behavior
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Simple form handler (demo only)
function handleFormSubmit(event) {
  event.preventDefault();
  alert(
    "Vielen Dank für Ihre Nachricht.\n\nDies ist eine Beispielseite – in einer echten Praxiswebsite würde Ihre Anfrage nun sicher übermittelt und zeitnah beantwortet werden."
  );
  event.target.reset();
}
