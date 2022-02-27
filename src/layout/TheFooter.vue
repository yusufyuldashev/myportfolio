<template>
  <section id="section6">
    <hr class="footer__top__line" />
    <div id="container">
      <ul class="footer__list">
        <li class="footer__item__brand">
          <div href="#" class="logoLink">
            <a href="#">
              <img
                id="logo"
                src="../assets/image/footerlogo.png"
                alt="LogoImg"
              />
            </a>
            <p id="logo__text">Y.</p>
          </div>
          <p class="footer__item__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non.
          </p>

          <div class="footer__small__list">
            <a href="#" class="footer__icons">
              <img
                class="footer__facebook"
                src="../assets/image/facebook.png"
                alt="facebook1"
              />
            </a>
            <a href="https://www.instagram.com/yusuf__0_2/" class="footer__icons">
              <img
                class="footer__instagram"
                src="../assets/image/instagram.png"
                alt="instagram"
              />
            </a>
            <a href="#" class="footer__icons">
              <img
                class="footer__twitter"
                src="../assets/image/twitter.png"
                alt="twitter2"
              />
            </a>
            <a href="#" class="footer__icons">
              <img
                class="footer__linkedin"
                src="../assets/image/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
        </li>
        <li class="footer__item">
          <h4 class="footer__item__title">Pages</h4>
          <a href="#section1" class="footer__item__link">Home</a>
          <a href="#section2" class="footer__item__link">About</a>
          <a href="#section3" class="footer__item__link">Service</a>
          <a href="#section4" class="footer__item__link">Portfolio</a>
          <a href="#section5" class="footer__item__link">Blog</a>
        </li>
        <li class="footer__item">
          <h4 class="footer__item__title">Services</h4>
          <a href="#" class="footer__item__link">Web Design</a>
          <a href="#" class="footer__item__link">App Design</a>
          <a href="#" class="footer__item__link">Dashboard</a>
          <a href="#" class="footer__item__link">Illustration</a>
          <a href="#" class="footer__item__link">Development</a>
        </li>
        <li class="footer__item">
          <h4 class="footer__item__title">Contact</h4>
          <a href="#" class="footer__item__link">+00 88 999 888 22</a>
          <a href="#" class="footer__item__link">example@gmail.com</a>
          <a href="#" class="footer__item__link">www.portfolio.com</a>
          <a href="#" class="footer__item__link">44, Housing State, 3200</a>
        </li>
      </ul>
    </div>
  </section>
</template>


<style scoped lang='scss'>
#section6 {
  padding: 40px 0;
  background-color: black;
  #logo {
    width: 38px;
  }
  .logoLink {
    display: flex;
    #logo__text {
      font-weight: 700;
      color: #08546c;
      margin-top: 1px;
      font-size: 30px;
      margin-left: 8px;
    }
  }
  .footer__top__line {
    border: 1px solid #08546c;
    margin-bottom: 100px;
  }
  .footer__list {
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    .footer__item__brand {
      max-width: 45%;
      .footer__small__list {
        display: flex;
        align-items: center;
        margin-top: 45px;
        .footer__icons {
          margin-right: 25px;
          :hover {
            filter: invert(57%) sepia(99%) saturate(535%) hue-rotate(359deg)
              brightness(101%) contrast(105%);
          }
          //   .footer__twitter {
          //     filter: invert(45%) sepia(66%) saturate(8%) hue-rotate(64deg)
          //       brightness(89%) contrast(90%);
          //   }
        }
      }
      .footer__item__text {
        color: #757575;
        font-size: 18px;
        font-family: "Inter";
        max-width: 70%;
        line-height: 1.4;
        margin-top: 14px;
        font-weight: 400;
      }
    }
    .footer__item {
      max-width: 17%;
      .footer__item__title {
        font-size: 24px;
        color: #08546c;
        font-family: "Inter";
        font-weight: 500;
        margin-bottom: 28px;
      }
      .footer__item__link {
        display: block;
        color: #787878;
        margin-bottom: 10px;
        text-decoration: none;
        font-family: "Inter";
        font-weight: 400;
        font-size: 18px;
      }
      .footer__item__link:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>