<template>
  <section class="container">
    <div class="destination-details clearfix">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
        class="image"
      />
      <h1 class="title">{{ destination.name }}</h1>
      <p
        v-for="text in destination.description"
        :key="text.slice(0, 20)"
        class="description"
      >
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
import store from '@/store'

export default {
  name: 'DestinationDetails',

  data() {
    return {
      destinationId: this.$route.params.id,
    }
  },

  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.id === Number(this.destinationId)
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

@media screen and (max-width: 998px) {
  .description,
  .title {
    clear: left;
  }
}
</style>
