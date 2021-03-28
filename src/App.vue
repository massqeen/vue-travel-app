<template>
  <div id="app">
    <TheNavigation />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.params.slug" />
    </transition>
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

button {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 695px) {
  .container {
    padding: 0 10px;
  }
}
</style>
