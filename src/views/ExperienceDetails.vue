<template>
  <section v-if="experience">
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
        class="image"
      />
      <div id="experience" class="wrapper">
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
  beforeRouteEnter(_, __, next) {
    next((vm) => {
      if (!vm.experience) {
        next({ name: 'NotFound' })
      }
    })
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
  padding: 40px 0;
}

.image {
  max-width: 40%;
  object-fit: cover;
  max-height: 300px;
}

.wrapper {
  max-width: 60%;
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

@media screen and (max-width: 998px) {
  .experience-details {
    flex-direction: column;
  }
  .wrapper {
    max-width: 100%;
    margin-left: 0;
  }
  .image {
    max-width: 50%;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 695px) {
  .image {
    max-width: 100%;
  }
}
</style>
