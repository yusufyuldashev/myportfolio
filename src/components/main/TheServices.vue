<template>
  <section id="section3">
    <div id="container">
      <h2 class="services__title">Services</h2>
      <p class="services__text">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <ul class="services__list">
        <li class="services__item">
          <img
            src="../../assets/image/design.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">WEB DESIGN</h4>
          <p class="services__item__line"></p>
        </li>
        <li class="services__item">
          <img
            src="../../assets/image/design2.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">PHOTOGRAPHY</h4>
          <p class="services__item__line"></p>
        </li>
        <li class="services__item">
          <img
            src="../../assets/image/frontend.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">WEB DEVELOPER</h4>
          <p class="services__item__line"></p>
        </li>
        <li class="services__item">
          <img
            src="../../assets/image/research.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">APP DEVELOPING</h4>
          <p class="services__item__line"></p>
        </li>
        <li class="services__item">
          <img
            src="../../assets/image/brand.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">BRANDING</h4>
          <p class="services__item__line"></p>
        </li>
        <li class="services__item">
          <img
            src="../../assets/image/brand2.png"
            alt="desing"
            class="servise__item__img"
          />
          <h4 class="services__item__title">PRODUCT STRATEGY</h4>
          <p class="services__item__line"></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang='scss'>
#section3 {
  background-color: black;
  padding: 40px 0;
  .services__title {
    font-size: 50px;
    color: white;
    font-weight: 700;
    text-align: center;
  }
  .services__text {
    color: #929292;
    margin: 30px 0;
    text-align: center;
    font-size: 25px;
  }
  .services__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .services__item {
      flex-direction: column;
      width: 30%;
      padding: 30px 0 50px 0;
      background-color: #1a1a1a;
      cursor: pointer;
      margin-top: 20px;
    }
    .services__item__title {
      color: white;
      font-weight: 700;
      font-family: "Inter";
      font-size: 14px;
      margin: 20px 0 10px 0;
      text-align: center;
    }
    .services__item__line {
      width: 40px;
      height: 1px;
      margin: 0 auto;
      background-color: yellow;
    }
    .servise__item__img {
      display: block;
      margin: 0 auto;
    }
  }
  .services__item:hover {
    background-color: #ffbd39;
  }
}
</style>
