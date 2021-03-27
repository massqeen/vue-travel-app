import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: () =>
      import(/* webpackChunkName: "destination"*/ '@/views/DestinationDetails'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetails',
        component: () =>
          import(
            /* webpackChunkName: "experience"*/ '@/views/ExperienceDetails'
          ),
        props: true,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
