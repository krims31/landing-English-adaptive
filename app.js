document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      console.log("Кликнули на:", targetId);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Плавно скроллим к элементу
        targetElement.scrollIntoView({
          behavior: "smooth", // Плавная анимация
          block: "start", // Выравнивание по верху
        });

        console.log("Найден элемент:", targetElement);
      } else {
        console.log("Элемент не найден:", targetId);
        // Показываем какие элементы есть на странице
        const allIds = Array.from(document.querySelectorAll("[id]")).map(
          (el) => el.id,
        );
        console.log("Доступные ID на странице:", allIds);
      }
    });
  });

  // Также добавляем для кнопки "Let's talk"
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
