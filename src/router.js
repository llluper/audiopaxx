import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Domestic from './views/Domestic.vue'
import DomesticArtist from './components/DomesticArtist.vue'
import Events from './views/Events.vue'
import International from './views/International.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Domestic
    },
    // {
    //   path: '/domestic/:Pid',
    //   name: 'domestic-artist',
    //   component: DomesticArtist
    // },
    {
      path: '/domestic/:Pid',
      name: 'domestic-artist',
      component: DomesticArtist
      // component: () =>
      //   import('./components/DomesticArtist.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
      // component: () =>
      //   import(/* webpackChunkName: 'about' */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
      // component: () => import('./views/Contact.vue')
    },
    // {
    //   path: '/domestic',
    //   name: 'domestic',
    //   component: () =>
    //     import('./views/Domestic.vue')
    // },
    {
      path: '/international',
      name: 'international',
      component: International
      // component: () => import('./views/International.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: Events
      // component: () => import('./views/Events.vue')
    },
    {
      path: '/international/:Pid',
      name: 'international-artist',
      component: International
      // component: () => import('./views/International.vue')
    }
  ]
})
