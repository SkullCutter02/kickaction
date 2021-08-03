const footerTemplate = `
  <style>
    footer {
      background: var(--footerColor);
      width: 100%;
      padding-top: 60px;
      padding-bottom: 30px;
      display: flex;
      flex-direction: column-reverse;
    }
    
    .footer-credits {
      width: 100%;
      margin-top: 40px;
    }
    
    .footer-credits p {
      text-align: center;
      color: var(--quaternaryTextColor);
    }
    
    .footer-credits i {
      color: var(--quaternaryTextColor);
    }
    
    .footer-info {
      height: 100%;
    }
    
    .footer-info h3 {
      margin-bottom: 20px;
      color: var(--secondaryTextColor);
    }
    
    .footer-info a, .footer-info p {
      margin-bottom: 10px;
      color: var(--tertiaryTextColor);
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
      height: 150px;
      width: 100%;
      margin: 40px 0;
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
      justify-content: space-evenly;
    }
    
    .signup-btn {
      padding: 10px;
      margin-top: 10px;
      display: inline-block;
      border: 2px solid var(--tertiaryTextColor);
      text-transform: uppercase;
      font-family: Archivo, serif;
      font-weight: 600;
      letter-spacing: 0.1em;
      box-shadow: inset 0 0 0 0 var(--tertiaryTextColor);
      transition: all ease-out 0.3s;
    }
    
    .signup-btn:hover {
      box-shadow: inset 300px 0 0 0 var(--tertiaryTextColor);
      color: var(--footerColor) !important;
    }
    
    footer i {
      color: var(--tertiaryTextColor);
    }
    
    @media screen and (max-width: 650px) {
      .footer-text {
        flex-direction: column;
        align-items: center;
      }
      
      .footer-text > * {
        width: 100%;
        text-align: center;
      }
      
      .footer-line {
        margin: 15px auto;
      }
      
      .footer-info {
        margin-bottom: 40px;
      }
    }
  </style>
  
  <footer>
    <div class="footer-credits">
      <p><i class="fas fa-code"></i> Coded by Alan Au and Alvin Ng</p>
    </div>
    <div class="footer-text">
      <div class="footer-signup footer-info">
        <h3>Sign Up</h3>
        <div class="footer-button">
          <a class="signup-btn" href="https://docs.google.com/forms/d/15kOPHlDh8Xzlc0HCOGPunm35Z3fuHIxDjzM5Cq3sbzg/edit" target="_blank">Signup Form</a>
        </div>
      </div>
      <div class="footer-links footer-info">
        <h3>Quick Links</h3>
        <a href="../index.html">Home</a>
        <a href="../about-us.html">About Us</a>
        <a href="../our-partners.html">Our Partners</a>
        <a href="../blog.html">Blog</a>
        <a href="../impact.html">Impact</a>
      </div>
      <div class="footer-contact-us footer-info">
        <h3>Contact Us</h3>
        <p><i class="fab fa-whatsapp"></i> +852 9667 5373</p>
        <p><i class="fab fa-whatsapp"></i> +852 6880 1308</p>
        <p><i class="fas fa-envelope"></i> kickaction.hk@gmail.com</p>
        <p>
          <a href="https://www.instagram.com/kickaction.hk/" target="_blank">
            <i class="fab fa-instagram"></i> kickaction.hk
          </a>
        </p>
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
