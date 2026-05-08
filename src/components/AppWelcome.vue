<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
    <AppBanner></AppBanner>

    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppBanner from "../components/AppBanner.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'AppWelcome',
  components: {
    AppHeader,
    AppNavigation,
    AppBanner,
    AppFooter
  },
  computed: {
  },
  data() {

  },
  methods: {
  }
}
</script>


<style scoped>

</style>

