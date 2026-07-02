// src/modules/about.js

export function loadAbout(container) {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-wrapper");

  aboutDiv.innerHTML = `
    <section class="content-card">
      <h1 class="page-title">Tentang Kami</h1>
      <p class="section-text">
        Hubby Dan's Meadery-Eatery didirikan dengan semangat untuk menghidupkan kembali tradisi kuno pembuatan mead (minuman madu fermentasi).
      </p>
      <p class="section-text">
        Kami berdedikasi untuk memberikan pengalaman kuliner terbaik dengan memadukan mead berkualitas tinggi dengan hidangan lezat yang disiapkan dari bahan-bahan segar pilihan.
      </p>
      <h2 class="section-title">Lokasi Kami</h2>
      <p class="section-text">
        Terletak di jantung Nova Scotia, kami menyambut Anda untuk menikmati suasana santai bersama teman dan keluarga.
      </p>
    </section>
  `;

  container.appendChild(aboutDiv);
}
