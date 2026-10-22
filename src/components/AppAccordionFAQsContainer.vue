<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
    <AppAccordionFAQs></AppAccordionFAQs>
    <AppFooter></AppFooter>
  </main>
</template>

<script>

import AppHeader from "../components/AppHeader.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppAccordionFAQs from "./AppAccordionFAQs.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'AppOverview',
  components: {
    AppHeader,
    AppNavigation,
    AppFooter,
    AppAccordionFAQs
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
