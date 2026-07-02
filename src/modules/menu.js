// src/modules/menu.js
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu4 from "../assets/img/menu4.jpg";
import menu5 from "../assets/img/menu5.jpg";

export function loadMenu(container) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-wrapper");

  const menuImages = [menu1, menu2, menu3, menu4, menu5];

  menuDiv.innerHTML = `
    <h1 class="page-title">Menu Kami</h1>
    <div class="image-gallery">
      ${menuImages
        .map(
          (imgSrc) => `
      <img src="${imgSrc}" alt="Menu item">
      `,
        )
        .join("")}
    </div>
  `;

  container.appendChild(menuDiv);
}
