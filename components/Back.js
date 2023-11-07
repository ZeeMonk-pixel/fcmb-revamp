const backTemplate = document.createElement("template");

backTemplate.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.back-div{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    width: fit-content;
}
.back-div p{
    color: var(--gray-700, #344054);
    font-family: Gotham;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}
</style>
<div class="back-div">
    <img src="../../../assets/images/chevron-left.png" alt="icon">
    <p>Back</p>
</div>
`;

class Back extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(backTemplate.content);
  }
}

customElements.define("go-back", Back);
