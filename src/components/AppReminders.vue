<script setup>
import { reactive } from 'vue'

// -------------------------------------------------------------------------
// REMINDERS SPECIFIC STATE & LOGIC
// -------------------------------------------------------------------------

const reminderRows = reactive([
  {
    type: 'take',
    title: 'I would like a reminder to take my hormone therapy',
    enabled: false,
    time: '',
    method: '',
    to: '',
    frequency: '',
    start: '', // DB field name is 'start'
    documentId: null,
    id: null
  },
  {
    type: 'order',
    title: 'I would like a regular reminder to order my prescription',
    enabled: false,
    time: '',
    method: '',
    to: '',
    frequency: 'one',
    start: '', // DB field name is 'start'
    documentId: null,
    id: null
  },
  {
    type: 'collect',
    title: 'I would like a regular reminder to collect my prescription',
    enabled: false,
    time: '',
    method: '',
    to: '',
    frequency: 'one',
    start: '', // DB field name is 'start'
    documentId: null,
    id: null
  },
  {
    type: 'order',
    title: 'I would like a regular reminder to book an appointment for my blood tests',
    enabled: false,
    time: '',
    method: '',
    to: '',
    frequency: 'one',
    start: '', // DB field name is 'start'
    documentId: null,
    id: null
  }
])


const onMethodChange = (row) => {
  const emailVal = 'test@gmail.com'
  const mobileVal =  '07745375849'

  if (row.method === 'email') {
    row.to = emailVal
  } else if (row.method === 'sms') {
    row.to = mobileVal
  }
}

</script>

<template>


<button class="accordion-header" aria-expanded="true">
  <div class="flex items-center gap-3">
    <div class="accordion-icon" >



      <img src="../assets/images/bell_74b360e192.png" alt="" class="accordion-icon-image">


      <span class="accordion-title">Set a reminder for taking your hormone therapy and/or collecting your prescription</span>
    </div>
  </div>
</button>
<div class="my-8 p-6 text-gray-700 leading-relaxed prose text-1xl"><p class="m-4">Here you can choose to receive an email or text message to remind you to take your hormone therapy, or collect your prescription.</p>
<p class="m-4">You can choose one or all of the options listed below by ticking the box. If you would like to cancel these reminders just come back to this page and untick the box.</p>
</div>
  <div class="my-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm max-w-2xl mx-auto">

    <form @submit.prevent="" class="space-y-6">

    <div  class="space-y-6">
      <div v-for="(row, rIndex) in reminderRows" :key="rIndex" class="p-4 border border-gray-200 rounded-md bg-gray-50/50 space-y-4">

        <!-- Checkbox Toggle -->
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            v-model="row.enabled"
            class="mt-1 h-4 w-4 text-[var(--color-brand-purple)] border-gray-300 rounded focus:ring-[var(--color-brand-purple)]"
          />
          <span class="text-sm font-bold text-[var(--color-brand-charcoal)]">{{ row.title }}</span>
        </label>

        <!-- Conditional Active Fields Container (Visible only when checkbox is checked) -->
        <div v-if="row.enabled" class="pl-7 space-y-4">

          <!-- Type 1: Hormone Therapy -->
          <template v-if="row.type === 'take'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Remind me every day at</label>
                <input
                  type="time"
                  v-model="row.time"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Send my reminder by</label>
                <select
                  v-model="row.method"
                  @change="onMethodChange(row)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                >
                  <option value="" disabled>Select method...</option>
                  <option value="email">Email</option>
                  <option value="sms">Text message</option>
                </select>
              </div>
            </div>

            <!-- 'To' field (Only visible when checked, auto-fills email or mobile based on method) -->
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">To</label>
              <input
                type="text"
                v-model="row.to"
                placeholder="Enter email or phone number"
                class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
              />
            </div>
          </template>

          <!-- Type 2 & 3: Order / Collect Prescription -->
          <template v-else>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Remind me every</label>
                <select
                  v-model="row.frequency"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                >
                  <option value="one">Week</option>
                  <option value="two">Month</option>
                  <option value="three">Two months</option>
                  <option value="four">Three months</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Starting on</label>
                <input
                  type="date"
                  v-model="row.start"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Send my reminder by</label>
                <select
                  v-model="row.method"
                  @change="onMethodChange(row)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                >
                  <option value="" disabled>Select method...</option>
                  <option value="email">Email</option>
                  <option value="sms">Text message</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">To</label>
                <input
                  type="text"
                  v-model="row.to"
                  placeholder="Enter email or phone number"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                />
              </div>
            </div>
          </template>

        </div>

  </div>
</div>


<!-- Submit Button -->
<button
  type="submit"
  class="w-full py-2 px-4 bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
>

</button>
</form>


  </div>
</template>

<style scoped>
  .accordion-header, .accordion-header:hover {
    background-color: #F9EDD0;
    margin: 1.25em;
    border: 1px solid #dfdddd;
  }

  .accordion-title {
    min-width: 1000px;
    margin-left: 10px;
  }
  .accordion-icon {
      margin-left: 500px;
      width: 50px;
  }
</style>>
