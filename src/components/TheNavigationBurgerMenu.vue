<template>
  <Slide
    right
    :closeOnNavigation="true"
    :width="viewWidth"
    class="navigation__burger-menu"
  >
    <TheNavigationList />
  </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import TheNavigationList from './TheNavigationList'

export default {
  props: {
    viewWidth: {
      type: String,
      required: true,
    },
  },

  components: {
    Slide,
    TheNavigationList,
  },
}
</script>

<style>
.navigation__burger-menu .navigation__link {
  color: #fff;
}

.navigation__burger-menu .router-link-exact-active,
.navigation__burger-menu .router-link-active {
  color: #42b983;
}

.navigation__burger-menu .navigation__item:not(:last-of-type) {
  margin-bottom: 20px;
}

.navigation__burger-menu .navigation__link {
  font-size: 30px;
}

.bm-burger-button {
  width: 26px;
  height: 20px;
  left: 26px;
  top: 32px;
  cursor: pointer;
}

.cross-style {
  position: absolute;
  top: 32px;
  right: 32px !important;
  cursor: pointer;
}

.bm-cross {
  height: 28px !important;
  background-color: #fff;
}

.bm-item-list {
  margin-left: 0;
}

.bm-item-list > * {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 0.7em;
}

.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>
