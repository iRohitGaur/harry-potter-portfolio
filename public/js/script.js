const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  const navLinks = document.querySelector("#nav-links");
  navLinks.classList.toggle("active");
});
