import Vue from 'vue'
import App from './App.vue'
import TheHeader from './layout/TheHeader.vue'
import TheMain from './components/main/TheMain.vue'
import TheAbout from './components/main/TheAbout.vue'
import TheServices from './components/main/TheServices.vue'
import ThePortfolio from './components/main/ThePortfolio.vue'
import TheBlog from './components/main/TheBlog.vue'
import TheContact from './components/main/TheContact.vue'
import TheFooter from './layout/TheFooter.vue'

Vue.component('the-header', TheHeader)
Vue.component("the-footer", TheFooter)
Vue.component('the-contact', TheContact)
Vue.component('the-blog', TheBlog)
Vue.component('the-portfolio', ThePortfolio)
Vue.component('the-about', TheAbout)
Vue.component('the-services', TheServices)
Vue.component('the-main', TheMain)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')