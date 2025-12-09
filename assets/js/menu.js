const menuBtn = document.getElementById("menu-btn");
const navMobile = document.getElementById("nav-mobile");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMobile.classList.toggle("active");
});


let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 60) {
    // rolando para baixo -> esconde
    header.classList.add("hide");
  } else {
    // rolando para cima -> aparece
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});