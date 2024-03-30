const mobileNav = document.getElementById("mobileNav");
const toggleIcon = document.getElementById("toggleIcon");
const listTags = mobileNav.querySelectorAll("ul li");

listTags.forEach((tag, index) => {
  tag.addEventListener("click", (index) => {
    mobileNav.classList.toggle("right-0");
    mobileNav.classList.toggle("-right-[100%]");
  });
});

toggleIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("right-0");
  mobileNav.classList.toggle("-right-[100%]");
});
