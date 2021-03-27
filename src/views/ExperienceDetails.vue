<template>
  <section>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
        class="image"
      />
      <div class="wrapper">
        <h3 class="title">{{ experience.name }}</h3>
        <p class="description">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import store from '@/store'

export default {
  name: 'ExperienceDetails',
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
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
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      )
    },
  },
}
</script>
<style scoped>
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

.image {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.wrapper {
  margin-left: 40px;
}

.title {
  text-align: left;
  margin-bottom: 20px;
}

.description {
  font-size: 20px;
  text-align: left;
}
</style>
