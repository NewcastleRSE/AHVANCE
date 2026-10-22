<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
   <AppAccordionTopTips></AppAccordionTopTips>
    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppFooter from "../components/AppFooter.vue"
import AppAccordionTopTips from "../components/AppAccordionTopTips.vue";

export default {
  name: 'AppOverview',
  components: {
    AppHeader,
    AppNavigation,
    AppFooter,
    AppAccordionTopTips
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
