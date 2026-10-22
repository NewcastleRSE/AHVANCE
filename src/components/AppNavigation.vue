<template>
  <div class="max-w-xl mx-auto p-4 pt-8 mt-6">
    <!-- Tabbed Header Navigation with Hyperlinks -->
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <a
          v-for="(tab, index) in tabs"
          :key="index"
          :href="tab.href"
          :class="[
            'py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            tab.current
              ? 'border-bottom-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ tab.title }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref([
  {
    title: 'Using this site',
    href: '/AHVANCE/using',
    current: false
  },
  {
    title: 'Top Tips',
    href: '/AHVANCE/toptips',
    current: false
  },
  {
    title: 'FAQs',
    href: '/AHVANCE/faqs',
    current: false
  },
  {
    title: 'Reminders',
    href: '/AHVANCE/reminders',
    current: false
  },
   {
    title: 'Make a Plan',
    href: '/AHVANCE/makeaplan',
    current: false
  },
])
</script>
