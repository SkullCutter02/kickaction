const partnersEl = document.querySelector(".partners");

fetch("../data/partners.json")
  .then((res) => res.json())
  .then(({ partners }) => {
    let output = "";

    partners.forEach((partner) => {
      output += `
        <div class="partner">
          <div class="partner-text-content">
            <h2>${partner.name}</h2>
          </div>
          <img src="./images/logo.png" alt="logo">
        </div>
      `;
    });

    partnersEl.innerHTML = output;
  })
  .catch((err) => console.log(err));
