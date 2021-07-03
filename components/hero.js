const getHeroTemplate = (imgSrc) => {
  return `
    <style>
      .hero {
        width: 100%;
        height: calc(100vh - var(--navHeight));
        background: url(${imgSrc}) fixed;
        overflow: hidden;
        background-size: cover;
        position: relative;
      }
      
      .hero * {
        color: #fff;
      }
      
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 40%
      }
      
      .hero-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-40%, 10%);
        font-size: 1.5rem;
      }

      .title {
        font-weight: bold;
        width: 100vw;
      }
 
      .description {
        margin-top: 20px;
        width: 50vw;
        text-align: justify;
      }
    </style>

    <div class="hero">
      <span class="hero-overlay"></span>
      <div class="hero-content">
        <h1 class="title">Meet the Team</h1>
        <p class="description">Our team is composed of talented people and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amongus fortnite sussy balls EDP445 quis sed soluta.</p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  `;
};

class Hero extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["img"];
  }

  attributeChangedCallback(attrName, oldValue, newVal) {
    if (oldValue !== newVal) {
      if (attrName === "img") this.innerHTML = getHeroTemplate(newVal);
    }
  }
}

customElements.define("hero-component", Hero);
