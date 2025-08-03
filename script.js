// Scroll animation JS
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Initial and scroll trigger
document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
  console.log("Page Ready 🚀");
});

window.addEventListener("scroll", revealOnScroll);
