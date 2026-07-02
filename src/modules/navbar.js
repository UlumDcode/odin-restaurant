// src/modules/navbar.js
import LogoImage from "../assets/img/odin-logo.png";

export function createNavbar() {
  const navContainer = document.querySelector("#nav");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  // Logo (kiri)
  const logo = document.createElement("div");
  logo.classList.add("logo");

  const img = document.createElement("img");
  img.src = LogoImage;
  img.alt = "Odin Restaurant Logo";

  logo.appendChild(img);
  logo.innerHTML += " Odin Resto";
  nav.appendChild(logo);

  // Buttons container (kanan)
  const navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");

  const buttons = [
    { id: "home", text: "Home" },
    { id: "menu", text: "Menu" },
    { id: "about", text: "About" },
  ];

  buttons.forEach((btnInfo) => {
    const btn = document.createElement("button");
    btn.id = btnInfo.id;
    btn.textContent = btnInfo.text;
    navLinks.appendChild(btn);
  });

  nav.appendChild(navLinks);
  navContainer.appendChild(nav);
}
