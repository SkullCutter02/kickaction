const partnersEl = document.querySelector(".partners");

fetch("../data/partners.json")
  .then((res) => res.json())
  .then(({ partners }) => {
    let output = "";

    partners.forEach((partner) => {
      output += `
        <div class="partner">
          <div class="partner-text-content" data-aos="fade-right">
            <h2>${partner.name}</h2>
            <p class="partner-description">${partner.description}</p>
            <div class="partner-website">
              <a href="${partner.websiteUrl}" target="_blank">VIEW WEBSITE</a>
            </div>
          </div>
          <img src="./images/partners/partner_${partner.id}.png" alt="logo" data-aos="fade-left">
        </div>
      `;
    });

    partnersEl.innerHTML = output;
  })
  .catch((err) => console.log(err));
