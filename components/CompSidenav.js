const compTemplate = document.createElement("template");

compTemplate.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.side-nav{
    background: var(--primary-900, #1D002E);
    min-height: 100vh;
    padding: 32px 24px;
    position: relative;
    overflow: hidden;
}
.logo-head{
    display: flex;
    align-items: center;
    gap: 10px;
}
.logo-head h2{
    color: #FFF;
    font-family: Gotham Bold;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
}
.search-field{
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--gray-700, #344054);
    background: var(--primary-25, #F9EEFF);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    padding: 10px 14px;
    margin: 20px 0;
}
.search-field input{
    border: none;
    outline: none;
    background: transparent;
    color: var(--primary-600, #7D1AB5);
    font-family: Gotham;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
}
.search-field input::placeholder{
    color: var(--primary-600, #7D1AB5);
}
.dashboard-line{
    border: 1px solid var(--primary-800, #400063);
    margin: 20px 0;
}
.dashboard-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* border: 1px solid red; */
    padding: 0 24px;
}
.bottom-profile{
    display: flex;
    gap: 10px;
}
.profile-cont h4{
    color: var(--White, #FFF);
    font-family: Gotham Bold;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
}
.profile-cont p{
    color: var(--gray-100, #F2F4F7);
    font-family: Gotham;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
}
.last-login p{
    color: var(--gray-100, #F2F4F7);
    font-family: Gotham;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    padding: 20px 0;
}
.dashboard-links{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
}
.single-link{
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 8px 12px;
}
.single-link h4{
    color: var(--White, #FFF);
    font-family: Gotham Bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
}
.dashboard-links a.active {
    border-radius: 6px;
    background: var(--primary-700, #5C068C);
}
.log-out{
    margin-top: 95px;
}
a{
    text-decoration: none;
}

/* Mobile nav  */
.mobile-nav{
    display: none;
}

@media (max-width: 900px) {
    .side-nav{
        display: none;
    }
    
}
@media (max-width: 1350px) {
  .log-out{
      margin-top: 45px;
  }
    
}
</style>
<div class="side-nav">
  <div class="logo-head">
    <img src="../../../assets/images/logo-small.png" alt="logo" />
    <h2>INFOPOOL</h2>
  </div>
  <div class="search-field">
    <img src="../../../assets/images/search.png" alt="logo" />
    <input type="text" placeholder="Search" />
  </div>
  <div class="dashboard-links">
    <a href="../dashboard/dashboard-home.html"
      ><div class="single-link">
        <img src="../../../assets/images/bar-chart.png" alt="icon" />
        <h4>Home</h4>
      </div></a
    >
    <a href="../dashboard/information.html"
      ><div class="single-link">
        <img src="../../../assets/images/info.png" alt="icon" />
        <h4>Information</h4>
      </div></a
    >
    <a href="#cpc"
      ><div class="single-link">
        <img
          src="../../../assets/images/mails-switch.png"
          alt="icon"
        />
        <h4>CPC</h4>
      </div></a
    >
    <a href="#app"
      ><div class="single-link">
        <img src="../../../assets/images/report.png" alt="icon" />
        <h4>Application</h4>
      </div></a
    >
    <a href="../dashboard/reporting.html"
      ><div class="single-link">
        <img
          src="../../../assets/images/check-square.png"
          alt="icon"
        />
        <h4>Reporting</h4>
      </div></a
    >
    <div class="single-link log-out">
        <img
          src="../../../assets/images/log-out.png"
          alt="icon"
        />
        <h4>Log out</h4>
      </div>
  </div>
  <div class="dashboard-bottom">
    <div class="dashboard-line"></div>
    <div class="bottom-profile">
      <img src="../../../assets/images/Avatar.png" alt="avatar" />
      <div class="profile-cont">
        <h4>Olivia Rhye</h4>
        <p>SOL ID: 22334</p>
      </div>
    </div>
    <div class="last-login">
      <p>Last Login: <br />23:11:16 ; 24 MAY, 2023</p>
    </div>
  </div>
</div>
`;

class CompSidenav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(compTemplate.content);

    const links = shadowRoot.querySelectorAll("a");
    const newLink = window.location.href;
    let previousLink = null;
    const firstLink = links[0];
    links.forEach(function (link) {
      if (newLink.includes(link.href) ){
        link.classList.add('active');
        previousLink = link;
      }
      link.addEventListener("click", function (e) {
        if (previousLink === null) {
            firstLink.classList.remove('active'); 
        }
        if (previousLink) {
            previousLink.classList.remove('active'); 
        }
        link.classList.add('active');
        previousLink = link;
      });
    });
  }
}

customElements.define("comp-side", CompSidenav);
