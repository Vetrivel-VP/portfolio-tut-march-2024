const mobileNav = document.getElementById("mobileNav");
const toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("right-0");
  mobileNav.classList.toggle("-right-[100%]");
});
