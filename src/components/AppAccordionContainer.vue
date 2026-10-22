<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
   <AppAccordion></AppAccordion>
    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppAccordion from "../components/AppAccordion.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'AppOverview',
  components: {
    AppHeader,
    AppNavigation,
    AppFooter,
    AppAccordion
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
