window.addEventListener("DOMContentLoaded", () => {
  //burger menu toggle

  document
    .querySelector(".burger-menu")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".burger-menu__list").classList.toggle("open");
    });
});
