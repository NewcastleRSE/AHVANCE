<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>

    <h1 class="!text-xl">Using this site</h1>
    <h2 class="!text-lg">This website is a demo on new features for the HT&Me website.</h2>
    <div class="">Click on the tab headers to view and test each feature of the demo</div>

   <!-- <AppAccordion></AppAccordion> -->
    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
// import AppAccordion from "../components/AppAccordion.vue"
import AppFooter from "../components/AppFooter.vue"
//import App from "@/App.vue";

export default {
  name: 'SweetDemo',
  components: {
    AppHeader,
    AppNavigation,
    // AppAccordion,
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

