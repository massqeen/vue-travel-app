<template>
  <div id="app">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
export default {
  components: {
    TheNavigation,
  },
}
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 15px 20px;
  place-items: center;
}

.card-image {
  display: block;
  max-width: 100%;
}

@media screen and (max-width: 695px) {
  .container {
    padding: 0 10px;
  }
}
</style>
