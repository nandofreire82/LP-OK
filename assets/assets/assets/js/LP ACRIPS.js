
// Scroll suave ao clicar em âncoras (se usar links com #id)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animação ao aparecer na tela (usando Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

document.querySelectorAll(".benefit, .card, .faq, .section-title").forEach(el => {
  observer.observe(el);
});
