<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'


export default {
  name: "app",
  components: {
    RouterView,
  },

}
</script>

<style lang="scss" scoped>

.box {
  width: 200px;
  height: 100px;
  border: $dark 1px solid;
  background-color: $primary;
}
</style>
