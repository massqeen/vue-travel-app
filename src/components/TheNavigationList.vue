<template>
  <ul class="navigation__list">
    <li
      v-for="destination in destinations"
      :key="destination.slug"
      class="navigation__item"
    >
      <router-link
        :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug },
        }"
        class="navigation__link"
      >
        {{ destination.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      destinations: store.destinations,
    }
  },
}
</script>

<style>
.navigation__list {
  display: flex;
  justify-content: center;
}

.navigation__item {
  padding: 0 10px;
}

.navigation__link,
.navigation__link:visited {
  padding: 10px 0;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

.navigation .router-link-exact-active,
.navigation .router-link-active {
  color: #42b983;
}

@media screen and (max-width: 767px) {
  .navigation__list {
    align-self: flex-start;
  }
}
</style>
