<template>
  <div class="container">
    <h1 class="title">All destinations</h1>
    <ul class="destinations">
      <li
        v-for="destination in destinations"
        :key="destination.id"
        class="item"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { id: destination.id },
          }"
          class="link"
        >
          <h2 class="card-title">{{ destination.name }}</h2>
          <figure class="figure">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
              class="image"
            />
          </figure>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'Home',
  data() {
    return {
      destinations: store.destinations,
    }
  },
}
</script>

<style scoped>
.title {
  margin: 30px 0;
}

.image {
  max-width: 300px;
}

.destinations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.link,
.link:visited {
  color: #2c3e50;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.card-title {
  position: relative;
  display: inline-block;
  margin: 0;
  transition: color 0.3s ease-in-out;
}

.card-title::after {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42b983;
  opacity: 0;
  content: '';
  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.item:hover .card-title::after {
  width: 100%;
  opacity: 1;
}

.item:hover .card-title {
  color: #42b983;
}

.figure {
  margin-left: 15px;
  margin-right: 15px;
}

@media screen and (max-width: 735px) {
  .destinations {
    justify-content: center;
  }
  .image {
    max-width: 100%;
  }
  .item:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
