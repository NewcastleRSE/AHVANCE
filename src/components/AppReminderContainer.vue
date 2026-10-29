<script setup>

import AppHeader from "../components/AppHeader.vue"
import AppFooter from "../components/AppFooter.vue"
import AppNavigation from "../components/AppNavigation.vue"
import AppReminders from "../components/AppReminders.vue";

</script>

<template>
  <main class="pt-5">
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
    <AppReminders></AppReminders>
    <AppFooter></AppFooter>
  </main>
</template>

