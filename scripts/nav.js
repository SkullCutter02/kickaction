setTimeout(() => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("enabled");

    const navItems = nav
      .querySelector("#mobile-nav-content")
      .querySelectorAll("li");
    console.log(navItems);

    navItems.forEach((li) => {
      li.classList.toggle("active");
    });
  });
}, 1);
