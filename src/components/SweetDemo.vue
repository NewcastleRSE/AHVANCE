<script setup>

import AppHeader from "../components/AppHeader.vue"
import AppFooter from "../components/AppFooter.vue"
import AppNavigation from "../components/AppNavigation.vue"

</script>

<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>

    <h1 class="text-3xl m-4">Using this site</h1>
    <h2 class="text-xl m-4">This website is a demo for new features that may be added to the HT&Me website, especially designed for users of CDK4/6 inhibitors</h2>
    <div class="mb-6 ml-4 text-lg text-gray-500 min-h-128">Click on the tab headers to view and test each feature of the demo</div>


    <AppFooter></AppFooter>
  </main>
</template>


