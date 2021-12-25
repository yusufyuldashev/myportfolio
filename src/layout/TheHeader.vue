<template>
  <nav :class="{ 'scrolled-nav': scrolledNav }">
    <div id="container">
      <div href="#" class="logoLink">
        <a href="#">
          <img id="logo" src="../assets/image/mainLogo.png" alt="LogoImg" />
        </a>
        <p id="logo__text">Y.</p>
      </div>
      <div class="header__list">
        <ul v-show="!mobile" class="navigation">
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">About</a></li>
          <li><a href="#section3">Service</a></li>
          <li><a href="#section4">Portfolio</a></li>
          <li><a href="#section5">Blog</a></li>
          <li><a href="#section6" class="nav__button"> Contact</a></li>
        </ul>
      </div>
      <div
        id="iconNav"
        :class="{ 'icon-active': mobileNav }"
        v-on:click="toggleMobileNav"
        v-show="mobile"
      >
        <img
          class="header__bars__image"
          src="../assets/image/bars2.png"
          alt="bars"
        />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">About</a></li>
          <li><a href="#section3">Service</a></li>
          <li><a href="#section4">Portfolio</a></li>
          <li><a href="#section5">Blog</a></li>
          <li><a href="#section6" class="nav__button"> Contact</a></li>
        </ul>
      </transition>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 763) {
        this.mobile = true;
        return;
      }
      this.mobileNav = false;
      this.mobile = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgb(27, 7, 7);
  // nav {
  //   padding: 8px 0;
  // }
}
.header__bars__image {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(14deg)
    brightness(109%) contrast(107%);
  width: 35px;
}
#iconNav {
  transition: transform 0.5s;
}
.icon-active {
  transform: rotate(180deg);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  top: 0;
  left: 0;
  li {
    margin-top: 25px !important;
    padding: 15px 0 !important;
    margin: 0 auto;
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.nav__button {
  color: white !important;
  background-color: #145e76;
  border-radius: 25px;
  text-decoration: none !important;
  padding: 14px 35px;
  border: none;
  font-family: "Inter";
  font-size: 18px;
  font-weight: bold;
}

nav {
  background-color: #033748;
  position: sticky;
  z-index: 9999;
  padding-bottom: 10px;
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out;
  width: 100%;
  .nav__button {
    cursor: pointer;
  }
  #container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    #logo {
      width: 38px;
    }

    ul li {
      display: inline-block;
      padding: 0 20px;
    }
    .logoLink {
      display: flex;
      #logo__text {
        font-weight: 700;
        color: white;
        margin-top: 1px;
        font-size: 30px;
        margin-left: 8px;
      }
    }
    ul li a {
      color: #a1b5bb;
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 400;
      transition: all 0.3s ease 0s;
      text-decoration: none;
      transition: color 0.3s;
    }
    ul li a:hover {
      transition: all 0.3s ease 0s;
      text-decoration: underline;
      color: #ffa63a;
    }
  }
}
</style>


