const footerTemplate = `
  <style>
    footer {
      background: #1c1c1c;
      width: 100%;
      padding: 60px 0;
      display: grid;
      grid-template-columns: 1fr 0.5fr 1fr;
    }
    
    .footer-info {
      height: 100%;
    }
    
    .footer-info h3 {
    }
    
    .footer-info a, .footer-info p {
      margin-bottom: 10px;
      color: var(--secondaryTextColor);
    }
    
    .footer-links a {
      display: block;
    }
    
    /*.footer-org {*/
    /*  display: flex;*/
    /*  align-items: flex-start;*/
    /*}*/
    
    .footer-line {
      width: 100px;
      height: 2px;
      background: var(--primaryColor);
      margin: 15px 0;
    }
    
    .footer-logo {
      position: relative;
      background: url("../images/logo.png") center;
      background-size: cover;
      height: 200px;
      width: 100%;
      z-index: 1;
      top: 0;
    }
    
    .footer-org-name {
      font-family: Archivo, serif;
      font-weight: 900;
      text-transform: uppercase;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
  </style>
  
  <footer>
    <div class="footer-logo">
      <h2 class="footer-org-name">KickAction</h2>
    </div>
    <div class="footer-links footer-info">
      <h3>Quick Links</h3>
      <div class="footer-line"></div>
      <a href="../index.html">Home</a>
      <a href="../about-us.html">About Us</a>
      <a href="../our-partners.html">Our Partners</a>
    </div>
    <div class="footer-contact-us footer-info">
      <h3>Contact Us</h3>
      <div class="footer-line"></div>
      <p>Contact Number 1: +852 9667 5373</p>
      <p>Contact Number 2: +852 6880 1308</p>
      <p>Email: kickaction.hk@gmail.com</p>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate;
  }
}

customElements.define("footer-component", Footer);
