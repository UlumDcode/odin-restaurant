import "./assets/style.css";
import { initializeLayout, clearContent } from "./layout.js";
import { loadHome } from "./modules/home.js";

// 1. Inisialisasi Layout (Termasuk membuat Navbar)
initializeLayout();

// 2. Tambahkan Event Listener ke Tombol Home
// Catatan: Karena navbar dibuat secara dinamis di initializeLayout,
// kita pastikan elemennya sudah ada di DOM sebelum memilihnya.
const homeBtn = document.querySelector("#home");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    clearContent(); // Bersihkan konten lama
    loadHome();     // Muat konten home
  });
}

console.log("Aplikasi berjalan!");
