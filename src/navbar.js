// src/navbar.js

export function createNavbar() {
  const navContainer = document.querySelector("#nav");
  const nav = document.createElement("nav");

  const buttons = [
    { id: "home", text: "Home" },
    { id: "menu", text: "Menu" },
    { id: "about", text: "About" },
  ];

  buttons.forEach((btnInfo) => {
    const btn = document.createElement("button");
    btn.id = btnInfo.id;
    btn.textContent = btnInfo.text;
    nav.appendChild(btn);
  });

  navContainer.appendChild(nav);
}
