// Feather icons load
feather.replace();

// Toggle mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

// Toogle Button Language
let currentLang = "id";

const translations = {
  id: {
    "nav-home": "Beranda",
    "nav-projects": "Proyek",
    "nav-about": "Tentang",
    "nav-skills": "Keahlian",
    "nav-contact": "Kontak",
    "hero-title": "Halo, saya <span class='text-cyan-400'>AbY</span>",
    "hero-subtitle": "Full Stack Developer | Membangun aplikasi modern",
    "hero-button": "Hubungi Saya",
    "projects-title": "Proyek",
    "project-1-desc": "Situs pribadi dengan HTML, JS, dan Tailwind CSS.",
    "project-1-btn": "Lihat Selengkapnya",
    "project-1-detail":
      "Dibuat responsif, dengan smooth scroll dan animasi hover.",
    "about-title": "Tentang Saya",
    "about-text": "Saya developer fokus pada web & mobile development...",
    "cv-link": "Lihat CV",
    "skills-title": "Keahlian",
    "contact-title": "Hubungi Saya",
    "contact-btn": "Kirim Pesan",
    "footer-text": "© 2025 AfafAbiyyu. Hak cipta dilindungi.",
    "lang-button": "Ubah Bahasa",
  },
  en: {
    "nav-home": "Home",
    "nav-projects": "Projects",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "hero-title": "Hi, I'm <span class='text-cyan-400'>AbY</span>",
    "hero-subtitle": "Full Stack Developer | Building clean & modern apps",
    "hero-button": "Hire Me",
    "projects-title": "Projects",
    "project-1-desc": "Personal site with HTML, JS, and Tailwind CSS.",
    "project-1-btn": "See Details",
    "project-1-detail":
      "Built responsive with smooth scroll and hover animation.",
    "about-title": "About Me",
    "about-text": "I’m a developer focused on web & mobile development...",
    "cv-link": "View CV",
    "skills-title": "Skills",
    "contact-title": "Contact Me",
    "contact-btn": "Send Message",
    "footer-text": "© 2025 AfafAbiyyu. All rights reserved.",
    "lang-button": "Change Language",
  },
};

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";
  const langData = translations[currentLang];

  for (const id in langData) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "BUTTON" || el.tagName === "A") {
        el.textContent = langData[id];
      } else {
        el.innerHTML = langData[id];
      }
    }
  }
}

// Toggle project detail
function toggleDetail(button) {
  const detail = button.nextElementSibling;
  detail.classList.toggle("hidden");
}

// Show/hide "Back to Top" button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});
