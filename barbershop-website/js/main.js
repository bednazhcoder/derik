const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("nav-overlay");

// Öffnen/Schließen per Klick auf Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Schließen per Klick auf Overlay
overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

// Optional: Navigationselement klicken = Menü schließen (nur mobil)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});


// Theme toggle logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '🌙';
} else {
  themeToggle.textContent = '🌞';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '🌙' : '🌞';
});
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// Contact form validation
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactConfirmation");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      contactMsg.textContent = "Bitte füllen Sie alle Felder aus.";
      contactMsg.style.color = "red";
      return;
    }

    contactMsg.textContent = "Vielen Dank für Ihre Nachricht!";
    contactMsg.style.color = "var(--accent)";
    contactForm.reset();
  });
}
