setTimeout(() => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("enabled");
    nav.classList.toggle("enabled");
  });
}, 1);
