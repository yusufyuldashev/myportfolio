<template>
  <div>
    <the-header></the-header>
    <the-main></the-main>
    <the-about></the-about>
    <the-services></the-services>
    <the-portfolio></the-portfolio>
    <the-blog></the-blog>
    <the-contact> </the-contact>
    <the-footer></the-footer>
  </div>
</template>
<script>
</script>

<style  lang='scss'>
html {
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#container {
  width: 1140px;
  margin: 0 auto;
}

@media only screen and (max-width: 1260px) {
  #container {
    width: 95%;
  }
  .group__imgs2 {
    display: none;
  }
  #main__right__imgMan {
    bottom: 23px !important;
  }
}
@media only screen and (max-width: 1200px) {
  .main__left__text {
    font-size: 40px !important;
  }
  .main__left__title {
    font-size: 20px !important;
  }
  #section5 {
    padding: 0 !important;
  }
  .blog__small__item__four {
    margin-left: 0 !important;
  }
}
@media only screen and (max-width: 992px) {
  .main__list {
    flex-direction: column;
  }
  .footer__item {
    max-width: 100% !important;
  }

  .main__left {
    text-align: center;
    width: 100% !important;
  }
  .group__list {
    justify-content: center;
    margin-bottom: 100px;
  }
  .main__right {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }
  #main__right__imgMan {
    bottom: 20px !important;
  }
}
@media only screen and (max-width: 892px) {
  #main__about__list {
    margin-top: 30px;
    flex-direction: column-reverse !important;
  }
  .main__about__right {
    width: 100% !important;
  }
  .main__right__title {
    text-align: center;
  }
  .main__right__text {
    text-align: center;
  }
  .main__right__list {
    margin: 0 auto;
    width: 60% !important;
  }
  #main__project {
    text-align: center;
  }
  .main__right__button {
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .main__about__left {
    width: 100% !important;
    display: flex;
    justify-content: center !important;
  }
  .main__left__yusuf {
    width: 70% !important;
  }
}
@media only screen and (max-width: 792px) {
  #portfolio__title {
    text-align: center !important;
  }
  .main__right {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
  #main__right__imgMan {
    left: 165px !important;
    width: 55% !important;
  }
  #main__right__backimg {
    width: 70% !important;
  }
  #portfolio__text {
    max-width: 100% !important;
    text-align: center !important;
  }
  .blog__item__right__title {
    max-width: 100% !important;
    text-align: center !important;
  }
  .blog__item__right__text {
    max-width: 100% !important;
    text-align: center !important;
  }
  #blog__list {
    flex-direction: column-reverse;
  }
  #blog__item__right {
    width: 100% !important;
  }
  .blog__item__right__button {
    display: block;
    margin: 0 auto !important;
  }
  #blog__item__wrapper__button {
    display: block;
    margin-top: 40px !important;
    justify-content: center !important;
  }
  #blog__item__left {
    margin-top: 50px !important;
    width: 100% !important;
  }
  .contact__wrapper {
    text-align: center !important;
    flex-direction: column-reverse;
  }
  .contact__title {
    text-align: center;
    font-size: 40px !important;
  }
  .contact__title__line {
    margin: 0 auto;
    margin-bottom: 30px !important;
  }
  .contact__email {
    margin: 0 auto !important;
  }
  .contact__text {
    max-width: 100% !important;
  }
  .logoLink {
    justify-content: center !important;
  }
  .footer__item__text {
    max-width: 100% !important;
  }
  .footer__item__brand {
    max-width: 100% !important;
    text-align: center !important;
  }
  .footer__small__list {
    justify-content: center !important;
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 692px) {
  .header__list {
    width: 100%;
    background-color: #033748;
    position: absolute;
    top: 68px !important;
    right: 0;
    z-index: 2;
  }

  .header__list li {
    display: block !important;
    padding: 15px 0 !important;
    text-align: center !important;
  }
  .header__list li a {
    color: white !important;
  }
  .header__bars {
    display: block !important;
    margin-left: 70% !important;
  }
}
@media only screen and (max-width: 600px) {
  #main__right__imgMan {
    left: 130px !important;
    bottom: 15px !important;
  }
}
@media only screen and (max-width: 480px) {
  .services__item {
    width: 80% !important;
  }
  .services__list {
    justify-content: space-around !important;
  }
  .portfolio__item {
    width: 100% !important;
  }
  #main__right__imgMan {
    left: 100px !important;
    bottom: 12px !important;
  }
  .main__right__list {
    width: 90% !important;
  }
  .main__right__slog {
    display: block !important;
  }
}
@media only screen and (max-width: 370px) {
  #main__right__imgMan {
    left: 80px !important;
    bottom: 9px !important;
  }
  .blog__small__item__four {
    margin-left: 30px !important;
  }
  .footer__item__title {
    text-align: center !important;
  }
  .footer__item__link {
    text-align: center !important;
  }
  .main__right__item {
    font-size: 20px !important;
  }
  .header__bars {
    margin-left: 55% !important;
  }
  .footer__item {
    margin-bottom: 10px;
  }
  .footer__list {
    justify-content: space-evenly !important;
  }
}
@media only screen and (max-width: 320px) {
  .blog__small__item__four {
    margin-left: 40px !important;
    position: relative;
    bottom: 7px;
  }
  .services__item {
    width: 100% !important;
  }
  #main__right__imgMan {
    left: 65px !important;
    bottom: 8px !important;
  }

  .blog__small__item {
    margin-bottom: 15px !important;
  }
} ;
</style>