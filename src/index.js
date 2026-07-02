import "./assets/style.css";
import { initializeLayout, clearContent } from "./layout.js";
import { loadHome } from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadAbout } from "./modules/about.js";

const content = document.querySelector("#content");
console.log("Content container:", content);

// 1. Inisialisasi Layout
initializeLayout();

// 2. Load Home secara otomatis saat aplikasi pertama kali dimuat
if (content) {
  loadHome(content);
} else {
  console.error("Content container not found!");
}

// 3. Tambahkan Event Listener ke Tombol Home
const homeBtn = document.querySelector("#home");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    clearContent(content);
    loadHome(content);
  });
}

const menuBtn = document.querySelector("#menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    clearContent(content);
    loadMenu(content);
  });
}

const aboutBtn = document.querySelector("#about");
if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    clearContent(content);
    loadAbout(content);
  });
}

console.log("Aplikasi berjalan!");
