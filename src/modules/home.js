// src/modules/home.js
export function loadHome() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Our Restaurant";
  content.appendChild(h1);
  
  const p = document.createElement("p");
  p.textContent = "Enjoy the best food in town!";
  content.appendChild(p);
}
