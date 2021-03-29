<template>
  <nav id="nav" class="navigation container">
    <div class="navigation__wrapper">
      <router-link to="/" exact class="navigation__logo"
        ><h1>Travel app</h1></router-link
      >
      <component
        :is="currentNavListComponent"
        :viewWidth="normalizedViewWidth"
      ></component>
    </div>
    <GoBack v-if="$route.path !== '/'" class="go-back" />
  </nav>
</template>

<script>
import { debounce } from 'vue-debounce'
import TheNavigationList from './TheNavigationList'
import TheNavigationBurgerMenu from './TheNavigationBurgerMenu'
import GoBack from './GoBack'

const belowTabletPX = 767

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      currentNavListComponent: TheNavigationList,
      viewWidth: null,
    }
  },

  methods: {
    updateViewWidth() {
      this.viewWidth = document.documentElement.clientWidth
    },
  },

  computed: {
    normalizedViewWidth() {
      if (this.viewWidth) {
        return this.viewWidth.toString()
      } else return '0'
    },
  },

  watch: {
    viewWidth: function () {
      if (this.viewWidth < belowTabletPX) {
        this.currentNavListComponent = TheNavigationBurgerMenu
      } else {
        this.currentNavListComponent = TheNavigationList
      }
    },
  },

  created() {
    this.viewWidth = document.documentElement.clientWidth
    window.addEventListener('resize', debounce(this.updateViewWidth, 50))
  },

  destroyed() {
    window.removeEventListener('resize', debounce(this.updateViewWidth, 50))
  },

  components: {
    GoBack,
    TheNavigationList,
    TheNavigationBurgerMenu,
  },
}
</script>

<style>
.navigation {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 15px;
  background-color: #fff;
}

.navigation__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navigation__logo {
  font-size: 20px;
  font-weight: bold;
  color: #42b983;
  user-select: none;
  text-decoration: none;
}

.go-back {
  margin-top: 10px;
}

@media screen and (max-width: 767px) {
  .navigation__wrapper {
    flex-direction: column;
  }

  .navigation__logo {
    align-self: flex-start;
    padding-left: 10px;
  }

  .go-back {
    margin-left: 10px;
  }
}
</style>
