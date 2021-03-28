<template>
  <button class="go-back glow-button" @click="$emit('goBack')">
    <slot>Go back</slot>
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.glow-button {
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #42b983 inset, 0 0 0 0 #42b983;
  outline: #42b983;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;
}
.glow-button:hover {
  box-shadow: 0 0 10px 0 #42b983 inset, 0 0 10px 4px #42b983;
  color: #42b983;
}
</style>
