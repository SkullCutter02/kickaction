const partnersEl = document.querySelector(".partners");

fetch("../data/partners.json")
  .then((res) => res.json())
  .then(({ partners }) => {
    let output = "";

    partners.forEach((partner) => {
      output += `
        <div class="partner">
          <div class="partner-ratio">
            <svg viewBox="0 0 1 1"></svg>
            <div class="partner-image">
              <img src="./images/logo.png" alt="logo" />
            </div>
          </div>
          <h3>${partner.name}</h3>
        </div>
      `;
    });

    partnersEl.innerHTML = output;
  })
  .catch((err) => console.log(err));
