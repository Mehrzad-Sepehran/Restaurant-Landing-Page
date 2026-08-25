const menuContainer = document.querySelector("#small-menu");
const menuToggleBtn = document.querySelector("#small-menu-toggle-btn");

let isMenuOpen = false;
menuToggleBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    menuContainer.classList.remove("hidden");
    menuContainer.classList.add("flex");

    isMenuOpen = true;
  } else {
    menuContainer.classList.remove("flex");
    menuContainer.classList.add("hidden");
    isMenuOpen = false;
  }
});
