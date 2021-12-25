<template>
  <section id="section5">
    <div id="container">
      <ul id="blog__list">
        <li id="blog__item__left">
          <img
            src="../../assets/image/imagephone.png"
            alt="imgphne"
            class="blog__item__img"
          />
          <h4 class="blog__item__title">
            How This Agency Helped My Business And Career Journey?
          </h4>
          <p class="blog__item__text">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. writing result-oriented ad copy is dificult, as it
            must appeal to, entice, and onviced consumers tp action.
          </p>
          <div id="blog__small__list">
            <a class="blog__small__item" href="#">PUBLISHED IN</a>
            <a class="blog__small__item blog__small__item__two" href="#"
              >MARKETING</a
            >
            <a class="blog__small__item" href="#">CATEGORY</a>
            <p class="blog__small__item__four">05 jun, 2021</p>
          </div>
        </li>
        <li id="blog__item__right">
          <h2 class="blog__item__right__title">My Blog And News</h2>

          <p class="blog__item__right__text">
            If It’s abillboard ad, you’ll need a super catchy headline due to
            the speed at which people will pass.
          </p>
          <button class="blog__item__right__button">Go To The Blog</button>
          <div id="blog__item__wrapper__button">
            <button type="button" class="blog__item__wrapper__left__icon">
              <img src="../../assets/image/lefticon.png" alt="left" />
            </button>
            <button type="button" class="blog__item__wrapper__right__icon">
              <img src="../../assets/image/righticon.png" alt="right" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang='scss'>
#section5 {
  padding: 70px;
  background-color: black;
  #blog__list {
    display: flex;
    list-style: none;
    align-items: flex-start;
    justify-content: space-between;
  }
  #blog__item__left {
    width: 45%;
    position: relative;
    overflow: hidden;

    .blog__item__img {
      width: 100%;
    }

    .blog__item__title {
      color: #08546c;
      font-size: 33px;
      font-family: "Inter";
      margin-top: 30px;
    }
    .blog__item__text {
      color: #757575;
      font-size: 16px;
      font-family: "Inter";
      margin: 25px 0;
      line-height: 1.5;
    }
    #blog__small__list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      list-style: none;
      margin-bottom: 20px;
      .blog__small__item {
        font-family: "Inter";
        color: #757575;
        text-decoration: none;
        font-size: 14px;
        margin-right: 20px;
      }
      .blog__small__item__four {
        color: #757575;
        font-size: 18px;
        margin-left: 10%;
      }
      .blog__small__item__two {
        padding: 12px 26px;
        background-color: black;
        color: #08546c;
        // box-shadow: 0px 0px 1px 1px rgba(3, 4, 100, 0.1),
        //   0px 64.8148px 46.8519px rgba(24, 37, 56, 0.076),
        //   0px 38.5185px 25.4815px rgba(21, 90, 146, 0.061),
        //   0px 20px 13px rgba(49, 49, 49, 0.05),
        //   0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
        //   0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
        font-weight: bold;
        border: 1px solid #08546c;
        border-radius: 30px;
      }
      //     a {
      //       text-decoration: none;
      //       color: #757575;
      //       font-size: 14px;
      //     }
      //   }

      //   .blog__small__item__two {
      //     color: #ffa800 !important;
      //     padding: 12px 26px 12px 26px;
      //     background-color: #fff8eb;
      //     border-radius: 30px;
      //     margin: 0 15px 0 15px;
      //   }
      //   .blog__small__item__three {
      //     margin-left: 110px;
      //     color: #757575;
      //   }
    }
  }
  #blog__item__right {
    width: 45%;

    .blog__item__right__title {
      font-size: 45px;
      font-family: "Inter";
      max-width: 50%;
      color: #08546c;
    }
    .blog__item__right__text {
      color: #757575;
      font-size: 18px;
      font-family: "Inter";
      max-width: 50%;
      line-height: 1.3;
      margin: 20px 0 60px 0;
    }
    .blog__item__right__button {
      font-size: 18px;
      font-weight: 600;
      font-family: "Inter";
      cursor: pointer;
      padding: 17px 30px;

      color: black;
      font-weight: bold;
      box-shadow: 0px 0px 7px 7px rgba(3, 4, 100, 0.1),
        0px 64.8148px 46.8519px rgba(24, 37, 56, 0.076),
        0px 38.5185px 25.4815px rgba(21, 90, 146, 0.061),
        0px 20px 13px rgba(49, 49, 49, 0.05),
        0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
        0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
      background-color: #08546c;
      border-radius: 30px;
      border: 1px solid #08546c;
      transition: all 0.4s;
    }
    .blog__item__right__button:hover {
      background-color: black;
      color: #08546c;
    }
    #blog__item__wrapper__button {
      margin-top: 120px;
      display: none;

      align-items: center;
      .blog__item__wrapper__left__icon {
        border: none;
        background-color: white;
        cursor: pointer;
        transition: transform 0.3s;
        border-radius: 100%;
        border: none;
      }
      .blog__item__wrapper__left__icon:hover {
        transform: scale(1.1);
      }

      .blog__item__wrapper__right__icon {
        border: none;
        cursor: pointer;
        transition: transform 0.3s;
        background-color: white;
        margin-left: 30px;
      }
      .blog__item__wrapper__right__icon:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>