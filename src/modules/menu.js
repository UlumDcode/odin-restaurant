// src/modules/menu.js
const importImg = (r) => r.keys().map(r);
const menuImages = importImg(
  require.context("../assets/images/menu", false, /\.(png|jpe?g|svg)$/),
);

export function loadMenu(container) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-wrapper");

  menuDiv.innerHTML = `
  <h1 class="page-title">Menu</h1>
<div class="menuImage">
${menuImages.map((imgSrc) => `<img class="menuImage" src="${imgSrc}" alt="Menu Image">`)}
</div>
  `;
  container.appendChild(menuDiv);
}

// export function loadMenu(container) {
//   console.log("button Menu di klik");
// }
