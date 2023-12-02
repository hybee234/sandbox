const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Event listener for the hamburger icon
hamburger.addEventListener("click", () => {
  // Toggle the 'active' class to open/close the hamburger menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
