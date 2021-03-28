<template>
  <div class="container">
    <section>
      <div class="destination-details clearfix">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
          class="image"
        />
        <h2 class="title">{{ destination.name }}</h2>
        <p
          v-for="text in destination.description"
          :key="text.slice(0, 20)"
          class="description"
        >
          {{ text }}
        </p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <ul class="cards-grid">
        <li
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: experience.slug },
              hash: 'anchor',
            }"
            v-scroll-to="'#experience'"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
              class="card-image"
            />
            <span class="card-name">
              {{ experience.name }}
            </span></router-link
          >
        </li>
      </ul>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'DestinationDetails',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      )
    },
  },
}
</script>

<style scoped>
.destination-details {
}

.clearfix::after {
  content: '';
  clear: both;
  display: table;
}

.title {
  margin-bottom: 20px;
  text-align: left;
}

.image {
  float: left;
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
  margin: 0 30px 20px 0;
}

.description {
  margin-bottom: 8px;
  font-size: 20px;
  text-align: left;
  text-indent: 40px;
}

.card {
  position: relative;
}

.card-image {
  //max-height: 200px;
  max-width: 100%;
  display: block;
}

.card-name {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

@media screen and (max-width: 998px) {
  .description,
  .title {
    clear: left;
  }
}
</style>
