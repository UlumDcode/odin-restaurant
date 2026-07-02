// src/modules/home.js
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpeg";

export function loadHome(container) {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-wrapper");

  homeDiv.innerHTML = `
    <div class="page">
        <section class="content-card">
            <h1 class="page-title">Hubby Dan's Meadery-Eatery</h1>
            
            <div class="image-gallery">
                <img src="${img1}" alt="A glass of honey mead">
                <img src="${img2}" alt="A traditional Brazilian lunch plate">
            </div>

            <h2 class="section-title">Welcome!</h2>
            <p class="section-text">We are so happy that you took the time to check out our establishment.</p>

            <h2 class="section-title">Our Mission</h2>
            <p class="section-text">At Hubby Dan's Meadery-Eatery you will experience all the delights that the bees of Nova Scotia have to offer.</p>
            <p class="section-text">Our goal is to help you experience one of humanitie's earliest discoveries: mead!</p> 
            <p class="section-text">Oh yes, perhaps even before fire itself was harnessed, it is said that the gods (cool ones, not these new guys) taught us humans how to enjoy life and forget the stresses of the lurking Bengal tigers by drinking away our fear with the advent of fermentation!</p>
            <p class="section-text">Eons later, here you find us, still perfecting the craft of mead making while pairing this most magical drink with the best accompanying food.</p>
        </section>
    </div>
  `;

  container.appendChild(homeDiv);
}
