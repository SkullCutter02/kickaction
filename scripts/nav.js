setTimeout(() => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("mobile-nav-overlay");
  const spans = hamburger.querySelectorAll("span");

  hamburger.classList.remove("enabled");
  nav.classList.remove("enabled");

  const toggleHamburger = () => {
    hamburger.classList.toggle("enabled");
    nav.classList.toggle("enabled");

    if (nav.classList.contains("enabled")) {
      nav.style.zIndex = "1";

      for (let i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = "var(--primaryColor)";
      }
    } else {
      hamburger.querySelector("input").checked = false;

      for (let i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = "#fff";
      }
    }

    setTimeout(() => {
      if (!nav.classList.contains("enabled")) {
        nav.style.zIndex = "-1";
      }
    }, 600);
  };

  hamburger.addEventListener("click", toggleHamburger);
  overlay.addEventListener("click", toggleHamburger);
}, 100);
