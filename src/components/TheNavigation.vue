<template>
  <nav id="nav" class="navigation container">
    <p class="logo">The Vue travel app</p>
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.id"
        class="nav-item"
      >
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
          class="nav-link"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      destinations: store.destinations,
      destinationId: this.$route.params.id,
    }
  },
}
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #42b983;
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

.navigation .router-link-exact-active {
  color: #42b983;
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
