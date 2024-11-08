//---- menu responsivo
const menu = document.querySelector("#menu-resp #icon");
const menuItens = document.querySelector("#items-menu-resp");
const menuItem = document.querySelectorAll("#items-menu-resp ul li");
const backgroundMenu = document.querySelector("#background-menu-resp");
const mediaQuery = window.matchMedia("(max-width: 700px)");

menu.addEventListener("click", () => {
  if (menu.textContent === "menu") {
    enableMenu();
  } else {
    disableMenu();
  }
});

backgroundMenu.addEventListener("click", () => {
  disableMenu();
});

menuItem.forEach((e) => {
  e.addEventListener("click", () => {
    disableMenu();
  });
});

function disableMenu() {
  menu.textContent = "menu";
  menuItens.style.display = "none";
  backgroundMenu.style.display = "none";
  return;
}

function enableMenu() {
  menu.textContent = "close";
  menuItens.style.display = "block";
  backgroundMenu.style.display = "block";
  return;
}

function handleScreenChange(e) {
  if (!e.matches) {
    menu.textContent = "menu";
    menuItens.style.display = "none";
    backgroundMenu.style.display = "none";
  }
  return;
}

handleScreenChange(mediaQuery);

mediaQuery.addEventListener("change", handleScreenChange);

//---- adicionar usuário

const userNameLink = document.querySelector("#userNameLink");
const fastLink = document.querySelector(".user-link-input");

fastLink.addEventListener("click", () => {
  fastLink.style.borderColor = "rgba(0, 122, 255, 0.8)";
  fastLink.style.boxShadow = "rgba(0, 122, 255, 0.9) 0px 1px 4px";
});

document.addEventListener("click", (event) => {
  if (
    !fastLink.contains(event.target) &&
    !userNameLink.contains(event.target)
  ) {
    fastLink.style.borderColor = "";
    fastLink.style.boxShadow = "";
  }
});
