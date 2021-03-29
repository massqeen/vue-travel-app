<template>
  <nav id="nav" class="navigation container">
    <div class="flex-wrapper">
      <h1 class="logo">Travel app</h1>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">Home</router-link>
        </li>
        <li
          v-for="destination in destinations"
          :key="destination.slug"
          class="nav-item"
        >
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
            class="nav-link"
          >
            {{ destination.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <GoBack v-if="$route.path !== '/'" class="go-back" />
  </nav>
</template>

<script>
import store from '@/store'
import GoBack from '@/components/GoBack'

export default {
  components: {
    GoBack,
  },
  data() {
    return {
      destinations: store.destinations,
      slug: this.$route.params.slug,
    }
  },
}
</script>

<style scoped>
.navigation {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff;
}

.flex-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #42b983;
  user-select: none;
}

.nav-list {
  display: flex;
  justify-content: center;
}

.nav-item {
  padding: 0 10px;
}

.nav-link,
.nav-link:visited {
  padding: 10px 0;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

.navigation .router-link-exact-active,
.navigation .router-link-active {
  color: #42b983;
}

.go-back {
  margin-top: 20px;
}

@media screen and (max-width: 767px) {
  .navigation {
    flex-direction: column;
  }
  .logo {
    margin-bottom: 20px;
    align-self: flex-start;
    padding-left: 10px;
  }
  .nav-list {
    align-self: flex-start;
  }
}
</style>
