import Vue from 'vue'
import Router from 'vue-router'
import Domestic from './views/Domestic.vue'

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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/domestic',
      name: 'domestic',
      component: () =>
        import('./views/Domestic.vue')
    },
    {
      path: '/international',
      name: 'international',
      component: () =>
        import('./views/International.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () =>
        import('./views/Events.vue')
    }
  ]
})
