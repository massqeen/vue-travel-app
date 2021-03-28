import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import TheNavigation from '@/components/TheNavigation'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      navigation: TheNavigation,
    },
    props: { default: true, navigation: false },
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    components: {
      default: () =>
        import(/* webpackChunkName: "details"*/ '@/views/DestinationDetails'),
      navigation: TheNavigation,
    },
    props: { default: true, navigation: false },
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
    beforeEnter(to, _, next) {
      const isDestination = store.destinations.some(
        (destination) => destination.slug === to.params.slug
      )
      isDestination ? next() : next({ name: 'NotFound' })
    },
  },
  {
    path: '/not-found',
    name: 'NotFound',
    alias: '*',
    component: () =>
      import(/* webpackChunkName: "not-found")*/ '@/views/NotFound'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
