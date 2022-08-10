let menu = document.querySelector(".menu ul");
let icon = document.querySelector(".menu__hamburguer i");

document.querySelector(".menu__hamburguer").addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.toggle("menu__active");
  icon.classList.toggle("ri-close-line");
  icon.classList.toggle("ri-menu-line");
});

let links = document.querySelectorAll(".menu__link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.toggle("menu__active");
    icon.classList.toggle("ri-close-line");
    icon.classList.toggle("ri-menu-line");
  });
}
