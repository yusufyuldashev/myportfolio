<template>
  <section id="section2">
    <div id="container">
      <ul id="main__about__list">
        <li class="main__about__left">
          <img
            class="main__left__yusuf"
            src="../../assets/image/yusuf3.png"
            alt="yusuf"
          />
        </li>
        <li class="main__about__right">
          <h2 class="main__right__title">About Me</h2>
          <p class="main__right__text">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul class="main__right__list">
            <li class="main__right__item">
              <span class="main__right__slog slog1">Name:</span>
              Yusuf Yuldashev
            </li>
            <li class="main__right__item">
              <span class="main__right__slog slog2">Date of birth:</span>
              March 29, 2002
            </li>
            <li class="main__right__item">
              <span class="main__right__slog slog3">Address:</span>
              Uzbekistan Tashkent city
            </li>
            <li class="main__right__item">
              <span class="main__right__slog slog4">Zip code:</span>
              100015
            </li>
            <li class="main__right__item">
              <span class="main__right__slog slog5">Email:</span>
              yusufyuldashev2903@gmail.com
            </li>
            <li class="main__right__item">
              <span class="main__right__slog slog6">Phone:</span>
              +998(99)814-29-03
            </li>
          </ul>
          <p id="main__project">
            <span class="main__number">10 </span> Project complete
          </p>
          <button type="button" class="main__right__button">Download CV</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang='scss'>
#section2 {
  background-color: black;
  padding: 50px 0;
}
#main__about__list {
  display: flex;
  justify-content: space-between;
  .main__about__left {
    width: 40%;
    .main__left__yusuf {
      width: 100%;
    }
  }
  .main__about__right {
    width: 50%;
    margin-top: 120px;
  }
  .main__right__title {
    color: white;
    font-weight: 700;

    font-size: 50px;
  }
  .main__right__text {
    font-size: 24px;
    margin: 30px 0 50px 0;
    line-height: 1.2;
    color: #929292;
  }
  .slog1 {
    margin-right: 90px;
  }
  .slog2 {
    margin-right: 18px;
  }
  .slog3 {
    margin-right: 67px;
  }
  .slog4 {
    margin-right: 62px;
  }
  .slog5 {
    margin-right: 90px;
  }
  .slog6 {
    margin-right: 87px;
  }
  .main__right__slog {
    color: white;
    font-weight: 700;
  }
  .main__right__item {
    color: #929292;
    list-style: none;
    margin: 20px 0;
    font-size: 24px;
  }
  #main__project {
    color: white;
    font-weight: 700;
    font-size: 27px;
    margin: 50px 0 30px;
  }
  .main__number {
    color: #e8ab34;
  }
  .main__right__button {
    background-color: #ffbd39;
    color: black;
    padding: 16px 30px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    font-size: 17px;
    border: none;
    transition: transform 0.4s;
  }
  .main__right__button:hover {
    transform: scale(1.1);
  }
}
</style>