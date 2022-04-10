<template>
  <section id="section6">
    <div id="container">
      <p class="contact__title">Contact Me</p>
      <p class="contact__title__line"></p>
      <div class="contact__wrapper">
        <p class="contact__text">
          Let me know if you want to talk about a potential collaboration. I'm
          available for freelance work.
        </p>
        <a href="mailto:yusufyuldashev2903@gmail.com" class="contact__email">
          yusufyuldashev2903@gmail.com
        </a>
      </div>
      <form id="contact__form">
        <div class="contact__name">
          <input
            type="text"
            class="contact__name__input"
            placeholder="What’s your name?"
            required
          />
        </div>
        <div class="contact__email">
          <input
            type="email"
            class="contact__email__input"
            placeholder="Your email"
            required
          />
        </div>
        <div class="contact__project">
          <input
            type="text"
            class="contact__project__input"
            placeholder="Tell me about your project"
            required
          />
        </div>
        <div class="contact__button__div">
          <button class="contact__button__name">
            Get a Quote
          </button>
          <h1 v-if="sended" class="sended">successful, we sent your message</h1>

          <div class="contact__button__wrapper">
            <button type="button" class="contact__button1">
              <img
                src="../../assets/image/img2.png"
                alt="img"
                class="contact__button__img"
              />
            </button>
            <button type="submit" class="contact__button2">
              <img
                src="../../assets/image/righticon2.png"
                alt="right"
                class="contact__button__img2"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sended: false,
    }
  },
  methods: {
    sending() {
      this.sended = true
    },
  },
}
</script>

<style scoped lang="scss">
.sended {
  color: green;
}
#section6 {
  // filter: blur(0.4px);
  padding: 70px 0;
  // background: linear-gradient(
  //   180deg,
  //   rgba(187, 133, 255, 0.166) -8.54%,
  //   rgba(255, 244, 251, 0.2) 100%
  // );
  background-color: black;
  .contact__title {
    color: #8643dc;
    font-size: 18px;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .contact__title__line {
    width: 30px;
    height: 2px;
    background-color: #8643dc;
    margin-top: 3px;
  }
  .contact__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .contact__text {
      font-weight: 500;
      font-size: 36px;
      max-width: 45%;
      line-height: 1.3;
      font-family: 'Roboto', sans-serif;
      color: #21232d;
      margin: 20px 0 50px 0;
    }
    .contact__email {
      color: #8643dc;
      text-decoration: none;
      font-size: 20px;
    }
    .contact__email:hover {
      text-decoration: underline;
    }
  }
  #contact__form {
    .contact__project,
    .contact__email,
    .contact__name {
      width: 100%;
      input::placeholder {
        color: #a8a0b0;
        font-family: Red Hat Display;
        font-size: 20px;
        font-weight: normal;
      }
    }
    .contact__email__input,
    .contact__project__input,
    .contact__name__input {
      width: 100%;
      border-left: none;
      font-size: 20px;
      color: #a8a0b0;
      border-right: none;
      padding: 45px 0 17px 0;
      border-top: none;
      outline: none;
      background: none;

      border-bottom: 1px solid #dad2e3;
    }
    .contact__button__div {
      display: flex;
      margin-top: 30px;
      align-items: center;
      justify-content: space-between;
      .contact__button__name {
        color: white;
        font-family: Red Hat Display;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        background-color: #8643dc;
        border: none;
        border: 1px solid #8643dc;
        padding: 18px 50px;
        border-radius: 100px;
        transition: all 0.4s;
        cursor: pointer;
      }
      .contact__button__name:hover {
        color: #8643dc;
        background-color: white;
      }
      .contact__button__wrapper {
        display: flex;
        align-items: center;
        .contact__button1 {
          border: none;
          background: none;
          margin-right: 24px;
          cursor: pointer;
        }
        .contact__button2 {
          border: none;
          cursor: pointer;
          background: none;
        }
      }
    }
  }
}
</style>
