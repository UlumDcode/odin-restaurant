// src/layout.js
import { createNavbar } from "./modules/navbar.js";

export function clearContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export function initializeLayout() {
  createNavbar();
  console.log("Layout initialized");
}
