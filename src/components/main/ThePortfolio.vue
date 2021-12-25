<template>
  <section id="section4">
    <div id="container">
      <h2 id="portfolio__title">Featured My Portfolio</h2>
      <p id="portfolio__text">
        Explore some of my latest website projects. Non suscipit ex blandit
        vitae. Pellentesque vel urna id massa sagittis luctus Fusce iaculis.
      </p>
      <ul id="portfolio__list">
        <li class="portfolio__item">
          <img
            src="../../assets/image/portfolio1.png"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">Website Design</h4>
          <p class="portfolio__item__text">
            Our website designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal,
            <span
              class="read__more__text"
              :class="readmore1 ? 'read__more__text__none' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              fugiat repellendus eos natus aperiam quos pariatur labore.
              Delectus, impedit possimus.
            </span>
            <span class="readmore" v-on:click="readMore(1)"
              >{{ readmore1 ? "Readmore..." : "Hide.." }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <p class="portfolio__wrapper__text">Read Case Study</p>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port2.png"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">Product Design</h4>
          <p class="portfolio__item__text">
            Our website designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
            <span
              class="read__more__text"
              :class="readmore2 ? 'read__more__text__none' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              fugiat repellendus eos natus aperiam quos pariatur labore.
              Delectus, impedit possimus.
            </span>
            <span class="readmore" v-on:click="readMore(2)">{{
              readmore2 ? "Readmore..." : "Hide.."
            }}</span>
          </p>
          <div class="portfolio__wrapper">
            <p class="portfolio__wrapper__text">Read Case Study</p>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port3.png"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">App Design</h4>
          <p class="portfolio__item__text">
            Our website designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
            <span
              class="read__more__text"
              :class="readmore3 ? 'read__more__text__none' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              fugiat repellendus eos natus aperiam quos pariatur labore.
              Delectus, impedit possimus.
            </span>
            <span class="readmore" v-on:click="readMore(3)"
              >{{ readmore3 ? "Readmore..." : "Hide.." }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <p class="portfolio__wrapper__text">Read Case Study</p>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port4.png"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">DashBoard Design</h4>
          <p class="portfolio__item__text">
            Our website designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
            <span
              class="read__more__text"
              :class="readmore4 ? 'read__more__text__none' : ''"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              fugiat repellendus eos natus aperiam quos pariatur labore.
              Delectus, impedit possimus.
            </span>
            <span class="readmore" v-on:click="readMore(4)">{{
              readmore4 ? "Readmore..." : "Hide.."
            }}</span>
          </p>
          <main class="portfolio__wrapper">
            <p class="portfolio__wrapper__text">Read Case Study</p>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </main>
        </li>
      </ul>
      <div class="porfolio__button__div">
        <button type="button" id="portfolio__all__button">All Projects</button>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data: () => ({
    readmore1: true,
    readmore2: true,
    readmore3: true,
    readmore4: true,
  }),

  methods: {
    readMore(id) {
      if (id === 1) {
        this.readmore1 = !this.readmore1;
      } else if (id === 2) {
        this.readmore2 = !this.readmore2;
      } else if (id === 3) {
        this.readmore3 = !this.readmore3;
      } else if (id === 4) {
        this.readmore4 = !this.readmore4;
      }
    },
  },
};
</script>


<style scoped lang='scss'>
#section4 {
  background-color: black;
  padding: 70px 0 40px 0;
  #portfolio__title {
    font-size: 45px;
    color: #08546c;
    font-family: "Inter";
    text-align: left;
  }
  #portfolio__text {
    color: #757575;
    font-size: 18px;
    font-family: "Inter";
    line-height: 1.3;
    margin: 14px 0 50px 0;
    max-width: 50%;
    text-align: left;
  }
  #portfolio__list {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
    .portfolio__item {
      width: 45%;
      margin-bottom: 50px;
      position: relative;
      overflow: hidden;
      .readmore {
        color: rgb(190, 185, 185);
      }
      .read__more__text__none {
        display: none;
      }
      .portfolio__item__img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        transition: all 0.4s linear;
      }
      .portfolio__item__img:hover {
        transform: scale(1.1);
        border-radius: 5px;
      }
      .portfolio__item__title {
        font-size: 30px;
        color: #08546c;
        font-family: "Inter";
        margin-top: 30px;
      }
      .portfolio__item__text {
        font-family: "Inter";
        color: #757575;
        line-height: 1.3;
        margin: 10px 0 20px 0;
        font-size: 16px;
      }
      .portfolio__wrapper {
        display: flex;
        max-width: 100%;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s;
        .portfolio__wrapper__text {
          color: #08546c;
          font-weight: 500;
          display: inline-block;
          font-family: "Inter";
        }
        .portfolio__wrapper__imgage {
          margin-left: 10px;
          display: inline-block;
          transition: transform 0.3s;
        }
      }
      .portfolio__wrapper:hover .portfolio__wrapper__imgage {
        transform: translate(20px);
      }
    }
  }
  .porfolio__button__div {
    display: flex;
    justify-content: center;
    #portfolio__all__button {
      font-size: 18px;
      color: black;
      font-family: "Inter";
      background-color: #08546c;
      padding: 18px 60px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      border-radius: 5px;
      border: 1px solid #08546c;
      transition: all 0.4s;
      box-shadow: 0px 0px 7px 7px rgba(3, 4, 100, 0.1),
        0px 64.8148px 46.8519px rgba(24, 37, 56, 0.076),
        0px 38.5185px 25.4815px rgba(21, 90, 146, 0.061),
        0px 20px 13px rgba(49, 49, 49, 0.05),
        0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
        0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
    }
    #portfolio__all__button:hover {
      background-color: black;
      color: #08546c;

      box-shadow: 0px 0px 7px 7px rgba(12, 149, 240, 0.1),
        0px 64.8148px 46.8519px rgba(24, 37, 56, 0.076),
        0px 38.5185px 25.4815px rgba(21, 90, 146, 0.061),
        0px 20px 13px rgba(49, 49, 49, 0.05),
        0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
        0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
    }
  }
}
</style>