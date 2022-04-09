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
            src="../../assets/image/port1.jpg"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">FENDOS</h4>
          <p class="portfolio__item__text">
            True movie lovers hardly ever get satisfied with just watching a
            film. They want to know all the details related to the movie,
            details like the cast, inspiration behind a story, fresh news about
            it and even...
            <span
              class="read__more__text"
              :class="readmore1 ? 'read__more__text__none' : ''"
            >
              more Fortunately, the Web era allows us to know a lot about a
              favourite movie. And film and trivia websites help us with it.
            </span>
            <span class="readmore" v-on:click="readMore(1)">
              {{ readmore1 ? 'Readmore...' : 'Hide..' }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <a
              href="https://netfmovies.netlify.app"
              class="portfolio__wrapper__text"
            >
              Watch the Website
            </a>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port2.jpg"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">Manual</h4>
          <p class="portfolio__item__text">
            Manual.app is the largest, most widely visited, independent medicine
            information website available on the Internet. Our aim is to be the
            Internet’s most trusted resource for drug and related health..
            <span
              class="read__more__text"
              :class="readmore2 ? 'read__more__text__none' : ''"
            >
              information We will achieve this aim by presenting independent,
              objective, comprehensive and up-to-date information in a clear and
              concise format for both consumers and healthcare professionals
            </span>
            <span class="readmore" v-on:click="readMore(2)">
              {{ readmore2 ? 'Readmore...' : 'Hide..' }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <a
              href="https://themanual.netlify.app"
              class="portfolio__wrapper__text"
            >
              Watch the Website
            </a>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port3.jpg"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">Bayer</h4>
          <p class="portfolio__item__text">
            When we sell our own products, we get excited about individual
            product features and specifications. We live and breathe our
            company, our website, and our products.
            <span
              class="read__more__text"
              :class="readmore3 ? 'read__more__text__none' : ''"
            >
              ...
            </span>
            <span class="readmore" v-on:click="readMore(3)">
              {{ readmore3 ? 'Readmore...' : 'Hide..' }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <a
              href="https://thebayer.netlify.app/"
              class="portfolio__wrapper__text"
            >
              Watch the Website
            </a>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
        <li class="portfolio__item">
          <img
            src="../../assets/image/port4.jpg"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">Yoga</h4>
          <p class="portfolio__item__text">
            Power Yoga is an online yoga service. They have a variety of
            different courses on offer, which are available as recurring classes
            or single sessions.
            <span
              class="read__more__text"
              :class="readmore4 ? 'read__more__text__none' : ''"
            >
              These courses are themed around different aspects of yoga,
              including lower and upper back, core yoga, morning yoga practice,
              and more.
            </span>
            <span class="readmore" v-on:click="readMore(4)">
              {{ readmore4 ? 'Readmore...' : 'Hide..' }}
            </span>
          </p>
          <main class="portfolio__wrapper">
            <a
              href="https://yoga11.netlify.app"
              class="portfolio__wrapper__text"
            >
              Watch the Website
            </a>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </main>
        </li>
      </ul>
      <div class="porfolio__button__div">
        <button type="button" id="portfolio__all__button" @click="toggleMovies">
          All Projects
        </button>
      </div>
      <ul id="portfolio__list" v-if="allMovies">
        <li class="portfolio__item" v-for="movie in movies" :key="movie.title">
          <img
            :src="(movie.image)"
            alt="portImg"
            class="portfolio__item__img"
          />
          <h4 class="portfolio__item__title">{{ movie.title }}</h4>
          <p class="portfolio__item__text">
            {{ movie.description }}
            <span
              class="read__more__text"
              :class="readmore1 ? 'read__more__text__none' : ''"
            >
              excetra...
            </span>
            <span class="readmore" v-on:click="readMore(1)">
              {{ readmore1 ? 'Readmore...' : 'Hide..' }}
            </span>
          </p>
          <div class="portfolio__wrapper">
            <a :href="movie.link" class="portfolio__wrapper__text">
              Watch the Website
            </a>
            <img
              src="../../assets/image/portimg.png"
              alt="port"
              class="portfolio__wrapper__imgage"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    allMovies: false,
    movies: [
      {
        link: 'https://travel-over.netlify.app',
        title: 'Travel World',
        description:
          'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way',
        image: require('../../assets/image/port5.jpg'),
      },
      {
        link: 'https://game-mp.netlify.app ',
        title: 'Game Mp',
        description:
          'Just as we need daily news, gamers need game updates. Many info portals were created to keep gamers up to date in the video game world. There you’ll find news about the latest games, events for gamers.',
        image: require('../../assets/image/port6.jpg'),
      },
      {
        link: 'https://webclinicks.netlify.app',
        title: 'Wet Online',
        description:
          'You and your pet have a lot of services for the diagnosis, prevention of diseases, treatment and care of your animals.',
        image: require('../../assets/image/port7.jpg'),
      },
      {
        link: 'https://pokemons1.netlify.app  ',
        title: 'Pokemons',
        description:
          'Pokémon, electronic game series from Nintendo that debuted in Japan in February 1996 as Pokémon Green and Pokémon Red. The franchise later became wildly popular in the United States and around the world.',
        image: require('../../assets/image/port8.jpg'),
      },
      {
        link: 'https://moviesweb1.netlify.app',
        title: 'Flash',
        description:
          'Most movie websites rely heavily on Flash for a dynamic and interactive experience. The audience of these websites typically expects to be entertained, so bells and whistles take priority, and heavy use of these elements is more acceptable than it would be on other types of websites.',
        image: require('../../assets/image/port9.jpg'),
      },
      {
        link: 'https://todolist14.netlify.app',
        title: 'To Do ',
        description:
          'One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. ',
        image: require('../../assets/image/port10.jpg'),
      },
      {
        link: 'https://namanganlikla24.netlify.app',
        title: 'NAMANGANLIKLAR24',
        description:
          'Namangan (Uzbek pronunciation: [næmæŋɡæn]; Наманган) is a city in eastern Uzbekistan. It is the administrative, economic, and cultural center of Namangan Region.',
        image: require('../../assets/image/port11.jpg'),
      },
      {
        link: 'https://shops-online.netlify.app/',
        title: 'Online Shop',
        description:
          'Shop the latest on trend women`s fashion online at Missguided. With over 150 new products hitting our shelves every week, check out our new collections',
        image: require('../../assets/image/port12.jpg'),
      },
      {
        link: 'https://yusufcoffe.netlify.app',
        title: 'Yusuf Coffe',
        description:
          'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.',
        image: require('../../assets/image/port13.jpg'),
      },
      {
        link: 'https://royilpark.netlify.app',
        title: 'Royil Park',
        description:
          'Put simply, an online booking system is a software solution used for reservation management. Before such systems were available, in order to track bookings and manage inventory.',
        image: require('../../assets/image/port14.jpg'),
      },
      {
        link: 'https://namoz-vaqt.netlify.app/',
        title: 'Namoz time',
        description:
          'Salaah or namaz is an obligatory prayer performed by a practising Muslim five times a day. The namaz is performed early in the morning, afternoon, evening, near sunset and late evening.',
        image: require('../../assets/image/port15.jpg'),
      },
      {
        link: 'https://elegant-gates-022f4c.netlify.app/',
        title: 'Omega',
        description:
          'Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.',
        image: require('../../assets/image/port16.jpg'),
      },
      {
        link: 'https://elegant-gates-022f4c.netlify.app/',
        title: 'Teach Me',
        description:
          'Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.',
        image: require('../../assets/image/port17.jpg'),
      },
      {
        link: 'https://enjoy-withus.netlify.app',
        title: 'Enjoy With Us',
        description:
          'Product descriptions are a key part of running a successful eCommerce business and a good description is your chance to overcome any misgivings your customers may have about spending money.',
        image: require('../../assets/image/port18.jpg'),
      },
      {
        link: 'https://buy-book-shop.netlify.app',
        title: 'Books',
        description:
          'A good book description is detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes.',
        image: require('../../assets/image/port19.jpg'),
      },
      {
        link: 'https://3dcardd.netlify.app',
        title: '3D Card',
        description:
          '3D video adds stereoscopic vision, meaning that two separate images are shown simultaneously—one to each eye. This presents enormous technical problems which is why there is still no perfect system almost 100 years since the first 3D movie was made.',
        image: require('../../assets/image/port20.jpg'),
      },
    ],
    readmore1: true,
    readmore2: true,
    readmore3: true,
    readmore4: true,
  }),

  methods: {
    downoload() {},
    readMore(id) {
      if (id === 1) {
        this.readmore1 = !this.readmore1
      } else if (id === 2) {
        this.readmore2 = !this.readmore2
      } else if (id === 3) {
        this.readmore3 = !this.readmore3
      } else if (id === 4) {
        this.readmore4 = !this.readmore4
      }
    },
    toggleMovies() {
      this.allMovies = !this.allMovies
    },
  },
}
</script>

<style scoped lang="scss">
#section4 {
  background-color: black;
  padding: 70px 0 40px 0;
  #portfolio__title {
    font-size: 45px;
    color: #08546c;
    font-family: 'Inter';
    text-align: left;
  }
  #portfolio__text {
    color: #757575;
    font-size: 18px;
    font-family: 'Inter';
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
        height: 270px;
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
        font-family: 'Inter';
        margin-top: 30px;
      }
      .portfolio__item__text {
        font-family: 'Inter';
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
          text-decoration: none;

          font-family: 'Inter';
          &:hover {
            text-decoration: underline;
          }
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
      margin-bottom: 30px;
      color: black;
      font-family: 'Inter';
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
