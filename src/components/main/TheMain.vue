<template>
  <section id="section1">
    <div id="container">
      <ul class="main__list">
        <li class="main__left">
          <p class="main__left__title">Hey, I’m Yusuf</p>
          <h4 class="main__left__text">
            Building Digital Products, Brands & Experience.
          </h4>
          <p class="main__left__slog">
            A Product Dev and Visual Dev Create web pages and use them
            dynamically with a backend, Responsive web design, and visual
            Development.
          </p>
          <div class="group__list">
            <a id="group__list__left" href="#">Hire Me</a>
            <a id="group__list__right" href="#">My Work</a>
          </div>
        </li>
        <li class="main__right">
          <!-- <div class="group__imgs"> -->
          <img
            id="main__right__backimg"
            src="../../assets/image/backImg.png"
            alt="rectangle"
          />
          <img
            id="main__right__imgMan"
            src="../../assets/image/yusuf4.png"
            alt="Man"
          />
          <!-- </div> -->
          <div class="group__imgs2">
            <img
              id="wrapper__img"
              src="../../assets/image/wrapperdata.png"
              alt="wrapperImg"
            />
            <p id="wrapper__slog">
              ‘’Yusuf has benn an outstanding contributor to our team’s WEB Dev
              needs highly recommened’’
            </p>
            <div class="wrapper__group">
              <img
                id="wrapper__jason"
                src="../../assets/image/jason.png"
                alt="jason"
              />
              <div id="wrapper__small__data">
                <h4 id="wrapper__title">Muhammadjon Masayev</h4>
                <h4 id="wrapper__text">Web Developer at Tujjor</h4>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {}
</script>

<style scoped lang="scss">
#section1 {
  background-color: #033748;
  padding-top: 70px;
}
.main__list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  .main__left {
    width: 45%;

    .main__left__title {
      margin-top: 70px;
      font-family: 'Schoolbell', cursive;
      background-color: #094556;
      border-radius: 30px;
      padding: 15px 30px;
      font-weight: 400;
      font-size: 24px;
      color: white;
      display: inline-block;
    }
    .main__left__text {
      font-size: 60px;
      margin-top: 40px;
      color: white;
      font-family: 'Inter';
      font-weight: 700;
    }
    .main__left__slog {
      margin-top: 30px;
      color: #849499;
      font-size: 18px;
      font-family: 'Inter';
    }
    .group__list {
      display: flex;
      margin-top: 50px;
      align-items: center;
      #group__list__left {
        text-decoration: none;
        background-color: #ffa63a;
        border-radius: 25px;
        font-family: 'Inter';
        font-size: 18px;
        color: white;
        padding: 16px 25px;
        border: 1px solid #ffa63a;
        transition: color 0.3s;
      }
      #group__list__left:hover {
        color: #ffa63a;
        background-color: transparent;
      }

      #group__list__right {
        color: #ffa63a;
        font-size: 18px;
        transition: 0.3s;
        margin-left: 40px;
        font-family: 'Inter';
        text-decoration: none;
        padding: 16px 25px;
        border-radius: 25px;
        border: 1px solid #ffa63a;
      }
      #group__list__right:hover {
        color: white;
        background-color: #ffa63a;
      }
    }
  }
  .main__right {
    width: 45%;
    position: relative;
    #main__right__backimg {
      width: 95%;
    }
    #main__right__imgMan {
      position: absolute;
      left: 50px;
      width: 75%;

      bottom: 170px;
    }
    .group__imgs2 {
      position: relative;
      width: 50%;
      left: 350px;
      bottom: 65%;
    }
    #wrapper__img {
      width: 100%;
    }
    #wrapper__slog {
      position: absolute;
      color: white;
      width: 100%;
      font-weight: 400;
      text-align: justify;
      padding: 0 20px;
      font-family: 'Inter';
      font-size: 14px;
      bottom: 50%;
    }
    .wrapper__group {
      display: flex;
      position: absolute;
      bottom: 20px;
      padding: 0 20px;
      align-items: center;
      #wrapper__jason {
        transition: transform 0.7s;
      }
      #wrapper__jason:hover {
        transform: scale(1.2);
      }
      #wrapper__title {
        color: white;
        font-size: 16px;
      }
      #wrapper__small__data {
        margin-left: 10px;
      }
      #wrapper__text {
        color: #a1b5bb;
        font-size: 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
