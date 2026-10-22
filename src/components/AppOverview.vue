<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
    <h1>Using this site </h1>
    <div class="">Overview of how to use this site. Click on the tab headers to view and test each feature of the demo</div>
    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
// import AppAccordion from "../components/AppAccordion.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'AppOverview',
  components: {
    AppHeader,
    AppNavigation,
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
