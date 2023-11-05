const authTemplate = document.createElement("template");


class AuthLayout extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["logo-image", "head-title", "head-text"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "logo-image":
        this.updateLogoImage(newValue);
        break;
      case "head-title":
        this.updateHeadTitle(newValue);
        break;
      case "head-text":
        this.updateHeadTexT(newValue);
        break;
      // Add more cases for additional attributes if needed
    }
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(authTemplate.content);

    const authHeading = shadowRoot.querySelector('.auth-heading');
    const authParagraph = shadowRoot.querySelector('.auth-paragraph');
  
    this.updateLogoImage(this.getAttribute('logo-image'));
    this.updateHeadTitle(authHeading, this.getAttribute('head-title'));
    this.updateHeadText(authParagraph, this.getAttribute('head-text'));
  }
  
  updateHeadTitle(authHeading, title) {
    authHeading.textContent = title;
  }

  updateHeadText(authParagraph, text) {
    authParagraph.textContent = text;
  }

  updateLogoImage(logoImg) {
    authTemplate.innerHTML = `
    <style>
    * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      .auth-bg{
          background-image: url("./assets/images/bg-pic.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          position: relative;
          padding: 30px 0;
          padding-left: 100px;
      }
      .auth-overlay {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(126deg, rgba(0, 0, 0, 0.75) 40.07%, rgba(0, 0, 0, 0.00) 110.76%);
          z-index: 1;
      }
      .auth-input_bg{
          border-radius: 16px;
          border: 1px solid var(--White, #FFF);
          background-color: rgba(152, 162, 179, 0.3);
          backdrop-filter: blur(25px);
          width: 520px;
          height: 660px;
          position: relative;
          z-index: 2;
      }
      .auth-head{
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
      }
      .auth-head h2{
        color: white;
        text-align: center;
        font-family: Gotham;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px;
      }
      .auth-head p{
        color: var(--gray-25, #FCFCFD);
        text-align: center;
        font-family: Gotham;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
    </style>
    <div class= "auth-bg">
      <div class="auth-overlay"></div>
      <div class="auth-input_bg">
        <div class= "auth-head">
            <img src=${logoImg} alt="logo" />
            <h2 class="auth-heading"></h1>
            <p class="auth-paragraph"></p>
        </div>
      </div>
    </div>
    `;
  }

}

customElements.define("auth-layout", AuthLayout);
