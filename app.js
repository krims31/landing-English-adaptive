document.addEventListener("DOMContentLoaded", function () {
  // Элементы меню
  const navLinks = document.querySelectorAll(".nav-menu a");
  const burgerBtn = document.getElementById("burgerBtn");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  // Функции меню
  function openMenu() {
    burgerBtn.classList.add("active");
    navMenu.classList.add("active");
    overlay.classList.add("active");
    body.style.overflow = "hidden";
  }

  function closeMenu() {
    burgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
  }

  function toggleMenu() {
    if (navMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  overlay.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Плавная прокрутка
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (window.innerWidth <= 768) {
          closeMenu();
        }
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !burgerBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  const letsTalkBtn = document.querySelector(".lets-talk");
  if (letsTalkBtn) {
    letsTalkBtn.addEventListener("click", function () {
      const contactsSection = document.getElementById("contacts");
      if (contactsSection) {
        contactsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});
