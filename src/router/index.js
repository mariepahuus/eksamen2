import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Covid from '../views/Covid.vue'
import Contact from '../views/Kontakt.vue'
import Distance from '../views/Afstand.vue'
import Wash from '../views/Hænder.vue'
import Clean from '../views/Rengør.vue'
import Cough from '../views/Nys.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/covid',
    name: 'Covid',
    component: Covid
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/distance',
    name: 'Distance',
    component: Distance
  },
  {
    path: '/wash',
    name: 'Wash',
    component: Wash
  },
  {
    path: '/clean',
    name: 'Clean',
    component: Clean
  },
  {
    path: '/cough',
    name: 'Cough',
    component: Cough
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router


