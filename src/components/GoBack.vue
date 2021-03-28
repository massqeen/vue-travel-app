<template>
  <GlowButton class="go-back" @goBack="goBack"></GlowButton>
</template>

<script>
import GlowButton from './GlowButton'

export default {
  components: {
    GlowButton,
  },

  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
<style scoped>
.go-back {
  align-self: flex-start;
}
</style>
