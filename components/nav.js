const getNavTemplate = (newVal) => {
  return `
    <style>
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: var(--navHeight);
        background: var(--bg);
        z-index: 1000;
        position: fixed;
        width: 100%;
        box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.3);
      }
      
      .logo-container {
        width: var(--navPercentage);
        display: flex;
        align-items: center;
      }
      
      nav h3 {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.4rem;
        font-family: Archivo, sans-serif;
        font-weight: 900;
      }

      #nav-content {
        display: flex;
        justify-content: flex-end;
        width: calc(100% - var(--navPercentage));
        list-style: none;
        height: 100%;
      }

      #nav-content li {
        margin-right: 30px;
        height: 100%;
        display: flex;
        align-items: center;
      }
      
      .logo {
        cursor: pointer;
      }

      .logo img {
        max-width: 70px;
      }
      
      .tab {
        position: relative;
      }
      
      .tab${newVal ? "-" + newVal : ""} {
        color: var(--primaryColor);
      }
      
      .tab::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 120%;
        width: 100%;
        height: 2px;
        background-color: var(--primaryColor);
        transform: translateX(-50%) scaleX(0);
        transition: all 0.3s;
      }
      
      .tab:hover {
        color: var(--primaryColor);
        transition: all 0.3s;
      }
      
      .tab:hover::after {
        transform: translateX(-50%) scaleX(1);
        transition: all 0.3s;
      }
      
      li a {
        font-weight: 500;
        color: #fff;
        font-size: 1.2rem;
      }
      
      .mobile-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity var(--hamburgerTransitionTime);
        z-index: -1;
      }
      
      .mobile-nav.enabled {
        opacity: 100%;
        z-index: 1;
      }
      
      .mobile-nav .overlay {
        transition: all 0.2s;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        background: #000;
        opacity: 70%;
      }
      
      .mobile-nav #mobile-nav-content li:nth-child(odd) {
        transform: translate(-100vw, 0);
      }
      
      .mobile-nav #mobile-nav-content li:nth-child(even) {
        transform: translate(100vw, 0);
      }
      
      .mobile-nav.enabled #mobile-nav-content li {
        transform: translate(0, 0);
      }
      
      .mobile-nav #mobile-nav-content li {
        z-index: 2;
        padding: 20px 0;
        transition: all var(--hamburgerTransitionTime);
      }
      
      .mobile-nav #mobile-nav-content li a {
        text-align: center;
        display: block;
        font-size: 23px;
      }
      
      .divided-hamburger {
        background-color: transparent;
        width: calc(25px * 1.2);
        height: 25px;
        position: relative;
        border: none;
        display: none;
        margin-right: 30px;
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(1) {
        left: calc(25px / 8);
        top: calc(25px / 6);
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(2) {
        left: calc(50% - (25px/ 8));
        top: calc(25px/ 6);
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(3) {
        left: -50%;
        opacity: 0;
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(4) {
        left: 100%;
        opacity: 0;
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(5) {
        left: calc(25px / 8);
        top: calc(25px/ 2);
      }
      
      .divided-hamburger span:nth-of-type(even) {
        left: 50%;
        border-radius: 0 10px 10px 0;
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(6) {
        left: calc(50% - (25px/ 8));
        top: calc(25px/ 2);
      }
      
      .divided-hamburger span:nth-of-type(odd) {
        left: 0;
        border-radius: 10px 0 0 10px;
      }
      
      .divided-hamburger > span:nth-of-type(1), .divided-hamburger > span:nth-of-type(2) {
        top: 0;
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(2), .divided-hamburger > .trigger:checked ~ span:nth-of-type(5) {
        transform: rotate(-45deg);
      }
      
      .divided-hamburger > span:nth-of-type(5), .divided-hamburger > span:nth-of-type(6) {
        top: calc((25px/ 3) * 2);
      }
      
      .divided-hamburger > span:nth-of-type(3), .divided-hamburger > span:nth-of-type(4) {
        top: calc(25px/ 3);
      }
      
      .divided-hamburger > .trigger:checked ~ span:nth-of-type(1), .divided-hamburger > .trigger:checked ~ span:nth-of-type(6) {
        transform: rotate(45deg);
      }
      
      .divided-hamburger > span {
        background-color: #fff;
        display: block;
        position: absolute;
        height: 4px;
        width: 50%;
        border-radius: 10px;
        transition: .25s ease-in-out;
      }
      
      .divided-hamburger > .trigger {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
      
      @media screen and (max-width: 950px) {
        .divided-hamburger {
          display: block;
        }
        
        #nav-content {
          display: none;
        }
      }
    </style>

    <nav>
      <div class="logo-container">
        <a href="./index.html" class="logo">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <h3>KickAction</h3>
      </div>
      <ul id="nav-content">
        <li>
          <a href="./index.html" class="tab tab-1">Home</a>
        </li>
        <li>
          <a href="./about-us.html" class="tab tab-2">About Us</a>
        </li>
        <li>
          <a href="./our-partners.html" class="tab tab-3">Our Partners</a>
        </li>
        <li>
          <a href="./blog.html" class="tab tab-4">Blog</a>
        </li>
        <li>
          <a href="./impact.html" class="tab tab-5">Impact</a>
        </li>
      </ul>
      
      <button class="divided-hamburger" id="hamburger">
        <input type="checkbox" class="trigger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    
    <div class="mobile-nav" id="mobile-nav">
      <div class="overlay" id="mobile-nav-overlay"></div>
      <ul id="mobile-nav-content">
        <li>
          <a href="./index.html" class="tab tab-1">Home</a>
        </li>
        <li>
          <a href="./about-us.html" class="tab tab-2">About Us</a>
        </li>
        <li>
          <a href="./our-partners.html" class="tab tab-3">Our Partners</a>
        </li>
        <li>
          <a href="./blog.html" class="tab tab-4">Blog</a>
        </li>
        <li>
          <a href="./impact.html" class="tab tab-5">Impact</a>
        </li>
      </ul>
    </div>
  `;
};

class Nav extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["tab"];
  }

  connectedCallback() {
    const hamburger = this.querySelector("#hamburger");
    const nav = this.querySelector("#mobile-nav");
    const overlay = this.querySelector("#mobile-nav-overlay");
    const spans = this.querySelectorAll("span");

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
  }

  attributeChangedCallback(attrName, oldValue, newVal) {
    if (oldValue !== newVal) {
      if (attrName === "tab") this.innerHTML = getNavTemplate(newVal);
    }
  }
}

customElements.define("nav-component", Nav);
