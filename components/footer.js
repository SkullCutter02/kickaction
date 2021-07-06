const footerTemplate = `
  <style>
    footer {
      background: #1c1c1c;
      width: 100%;
      padding: 60px 0;
      display: flex;
    }
    
    .footer-info {
      height: 100%;
    }
    
    .footer-info a, .footer-info p {
      margin-bottom: 10px;
      color: var(--secondaryTextColor);
    }
    
    .footer-links a {
      display: block;
    }
    
    .footer-line {
      width: 100px;
      height: 2px;
      background: var(--primaryColor);
      margin: 15px 0;
    }
    
    .footer-logo {
      position: relative;
      background: url("../images/logo.png") center no-repeat;
      background-size: contain;
      height: 200px;
      width: 40%;
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
    
    .footer-text {
      display: flex;
      width: 100%;
    }
    
    .footer-info:first-child {
      margin-left: 80px;
    }
    
    .footer-info:last-child {
      margin-left: 150px;
    }
    
    @media screen and (max-width: 1100px) {
      .footer-info:first-child {
        margin-left: 40px;
      }
      
      .footer-info:last-child {
        margin-left: 100px;
      }
    }
    
    @media screen and (max-width: 800px) {
      footer {
        flex-direction: column;
      }
      
      .footer-logo {
        width: 80%;
        margin: 0 auto 40px auto;
      }
      
      .footer-text {
        justify-content: center;
      }
      
      .footer-info:first-child {
        margin-left: 0;
      }
      
      .footer-info:last-child {
        margin-left: 40px;
      }
    }
    
    @media screen and (max-width: 600px) {
      .footer-text {
        flex-direction: column;
        align-items: center;
      }
      
      .footer-text > * {
        width: 100%;
        text-align: center;
      }
      
      .footer-info:last-child {
        margin-top: 50px;
        margin-left: 0;
      }
      
      .footer-line {
        margin: 15px auto;
      }
    }
  </style>
  
  <footer>
    <div class="footer-logo">
      <h2 class="footer-org-name">KickAction</h2>
    </div>
    <div class="footer-text">
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
