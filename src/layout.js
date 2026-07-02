// src/layout.js
import { createNavbar } from "./modules/navbar.js";

export function clearContent(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export function initializeLayout() {
  createNavbar();
  console.log("Layout initialized");
}
