<template>
  <div class="not-found">
    <h1 class="text">Oh no, you’ve found our junior developer’s homepage!</h1>
    <h2 class="text">
      Despite sleeping on the couch most of the day, our junior web developer
      still finds time to do some coding…
    </h2>
    <!--    <router-link to="/" class="glow-button">Back to homepage</router-link>-->
    <GlowButton class="" @goBack="goHome">Back to homepage</GlowButton>
  </div>
</template>

<script>
import GlowButton from '@/components/GlowButton'

export default {
  components: {
    GlowButton,
  },

  methods: {
    goHome() {
      return this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(39, 39, 39);
  background-image: url('../assets/404.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.text {
  max-width: 70%;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
}

.text {
  margin-bottom: 30px;
}
</style>
