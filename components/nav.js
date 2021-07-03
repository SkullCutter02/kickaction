const getTemplate = (newVal) => {
  return `
    <style>
      :root {
        --navPercentage: 5%;
        --tabColor: #ff0000ff;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background: #ffffff;
      }

      ul {
        display: flex;
        justify-content: flex-end;
        width: calc(100% - var(--navPercentage));
        list-style: none;
        height: 100%;
      }

      ul li {
        margin-right: 30px;
        height: 100%;
        display: flex;
        align-items: center;
      }
      
      .logo {
        cursor: pointer;
        width: var(--navPercentage);
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
        color: #000;
        font-weight: 500;
      }
    </style>

    <nav>
      <a href="./index.html" class="logo">
        <img src="./images/logo.png" alt="logo" />
      </a>
      <ul>
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
    </nav>
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
      if (attrName === "tab") this.innerHTML = getTemplate(newVal);
    }
  }
}

customElements.define("nav-component", Nav);
