setTimeout(() => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("mobile-nav-overlay");

  const toggleHamburger = () => {
    hamburger.classList.toggle("enabled");
    nav.classList.toggle("enabled");

    if (nav.classList.contains("enabled")) nav.style.zIndex = "1";
    else hamburger.querySelector("input").checked = false;

    setTimeout(() => {
      if (!nav.classList.contains("enabled")) {
        nav.style.zIndex = "-1";
      }
    }, 600);
  };

  hamburger.addEventListener("click", toggleHamburger);
  overlay.addEventListener("click", toggleHamburger);
}, 1);
