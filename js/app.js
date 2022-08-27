// .NAV-OVERLAY VARIABLES
const hamburgerMenuToggle = document.querySelector(".nav__tap-container-left");
const hamburgerMenu = document.querySelector(".nav__burger");
const navOverlay = document.querySelector(".nav-overlay");
const main = document.querySelector(".main");


/* ------------------------------------
---------------------------------------
SHOW/HIDE NAV OVERLAY ON HAMBURGER MENU CLICK EVENT, ALSO LOCK SCROLL ON BODY ELEMENT WHEN HAMBURGER MENU IS OPEN
---------------------------------------
------------------------------------ */
hamburgerMenuToggle.addEventListener("click", () => {
  document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
  main.classList.toggle("lower-main");
  navOverlay.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("nav__burger--active");
});