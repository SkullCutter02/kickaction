const getNavTemplate = (newVal) => {
  return `
    <style>
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: var(--navHeight);
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
        z-index: 1000;
        position: absolute;
        width: 100%;
      }
      
      .logo-container {
        width: var(--navPercentage);
        display: flex;
        align-items: center;
      }
      
      h3 {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.4rem;
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
        color: var(--tabColor);
      }
      
      .tab::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 120%;
        width: 100%;
        height: 2px;
        background-color: var(--tabColor);
        transform: translateX(-50%) scaleX(0);
        transition: all 0.3s;
      }
      
      .tab:hover {
        color: var(--tabColor);
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
        z-index: -100;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
      }
      
      .mobile-nav.enabled {
        opacity: 100%;
      }
      
      .mobile-nav .overlay {
        opacity: 0;
        transition: all 0.2s;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
      }
      
      .mobile-nav.enabled .overlay {
        opacity: 70%;
        background: #000;
      }
      
      .mobile-nav.enabled #mobile-nav-content li {
        z-index: 2;
        margin: 30px 0;
      }
      
      .mobile-nav.enabled #mobile-nav-content:nth-child(odd) {
        transform: translateX(-100vw);
        transition: all 0.4s;
      }
      
      .mobile-nav.enabled #mobile-nav-content:nth-child(even) {
        transform: translateX(100vw);
      }
      
      .mobile-nav.enabled #mobile-nav-content li.active {
        transform: translateX(0);
      }
      
      .mobile-nav.enabled #mobile-nav-content li a {
        text-align: center;
        display: block;
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
        left: calc(25px/ 8);
        top: calc(25px/ 6);
      }
      
      .divided-hamburger > .trigger:hover ~ span {
        background-color: var(--tabColor);
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
        background-color: var(--tabColor);
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
      
      @media screen and (max-width: 1650px) {
        .mobile-nav.enabled {
          z-index: 2;
        }
      
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
      <div class="overlay"></div>
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

  attributeChangedCallback(attrName, oldValue, newVal) {
    if (oldValue !== newVal) {
      if (attrName === "tab") this.innerHTML = getNavTemplate(newVal);
    }
  }
}

customElements.define("nav-component", Nav);
