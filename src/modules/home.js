// src/modules/home.js

export function loadHome(container) {
  // 1. Membuat kontainer khusus untuk halaman home (agar styling lebih mudah)
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-content");

  // 2. Membuat elemen judul
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Our Restaurant";
  
  // 3. Membuat elemen paragraf
  const p = document.createElement("p");
  p.textContent = "Enjoy the best food in town, prepared with love and high-quality ingredients.";
  
  // 4. Memasukkan elemen ke dalam kontainer lokal (homeDiv)
  homeDiv.appendChild(h1);
  homeDiv.appendChild(p);
  
  // 5. Memasukkan kontainer lokal ke dalam 'container' yang dikirim dari index.js
  container.appendChild(homeDiv);
}
