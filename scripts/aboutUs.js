const closeModal = (modal) => {
  modal.querySelector(".member-modal-overlay").classList.add("loading");

  modal.querySelector(".member-modal-content").classList.add("loading");

  setTimeout(() => {
    modal.innerHTML = "";
  }, 450);
};

fetch("../data/members.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "";

    // HTML for the members
    data.members.forEach((member) => {
      output += `
        <div class="member" id="member-${member.id}">
          <div class="member-ratio">
            <svg viewBox="0 0 1 1"></svg>
            <div class="member-image">
              <img
                src="./images/members/member_${member.id}.png"
                alt="member"
                onerror="this.onerror = null; this.src = './images/hero.jpg'"
                style="object-position: ${
                  member.imageOffsetHome ? member.imageOffsetHome : "initial"
                };"
              />
              <div class="member-overlay">
                <p class="view-profile">View Profile</p>
              </div>
            </div>
          </div>
          <h1 class="member-name">${member.name}</h1>
          <p class="member-position">${member.role}</p>
        </div>
      `;
    });

    document.getElementById("members").innerHTML = output;

    const membersEl = document.getElementsByClassName("member");

    for (let i = 0; i < membersEl.length; i++) {
      const memberEl = membersEl[i];
      const memberId = parseInt(memberEl.id.split("-")[1]);

      memberEl.addEventListener("click", async () => {
        const data = await fetch("../data/members.json");
        const memberData = (await data.json()).members[memberId - 1];

        const modal = document.getElementById("member-modal");

        // Modal HTML
        modal.innerHTML = `
          <div class="member-modal-overlay loading" id="member-modal-overlay"></div>
          <div class="member-modal-content loading">
            <img
              class="member-modal-content-img"
              src="./images/members/member_${memberId}.png"
              alt="hero"
              onerror="this.onerror = null; this.src = './images/hero.jpg'"
              style="object-position: ${
                memberData.imageOffsetModal
                  ? memberData.imageOffsetModal
                  : "initial"
              }"
            />
            <div class="close-btn">+</div>
            <div class="member-modal-content-text">
              <h1 class="member-modal-name">${memberData.name}</h1>
              <p class="member-modal-role">${memberData.role}</p>
              <span class="line"></span>
              <p class="member-modal-description">${memberData.description}</p>
            </div>
          </div>
        `;

        setTimeout(() => {
          modal
            .querySelector(".member-modal-overlay")
            .classList.remove("loading");

          modal
            .querySelector(".member-modal-content")
            .classList.remove("loading");
        }, 10);

        modal
          .querySelector(".close-btn")
          .addEventListener("click", () => closeModal(modal));

        document
          .getElementById("member-modal-overlay")
          .addEventListener("click", () => closeModal(modal));
      });
    }
  })
  .catch((err) => console.log(err));
