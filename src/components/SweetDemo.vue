<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>

    <h1 class="text-3xl m-4">Using this site</h1>
    <h2 class="text-xl m-4">This website is a demo on new features for the HT&Me website.</h2>
    <div class="m-4">Click on the tab headers to view and test each feature of the demo</div>

    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'SweetDemo',
  components: {
    AppHeader,
    AppNavigation,
    AppFooter
  },
  computed: {
  },
  methods: {
  }
}
</script>


<style scoped>

</style>

