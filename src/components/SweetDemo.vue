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
//import App from "@/App.vue";

export default {
  name: 'SweetDemo',
  components: {
    AppHeader,
    AppNavigation,
    AppAccordion,
    AppFooter
  },
  computed: {
  },
  data() {

    return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to Google...',
                    link: 'https://google.org'
                }
            ],
              }

  },
  methods: {
  }
}
</script>


<style scoped>

</style>

