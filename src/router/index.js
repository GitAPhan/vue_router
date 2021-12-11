import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import BreweriesPage from '@/views/BreweriesPage.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/breweries",
    name: "BreweriesPage",
    component: BreweriesPage
  },
  // Always at the end of the array 404
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
