<template>
  <div class="mx-auto p-4 space-y-3 mt-6">
    <div
      v-for="(item, index) in accordionItems"
      :key="index"
      class="accordion-item"
    >
      <!-- Accordion Header / Button -->
      <button
        @click="toggle(index)"
        type="button"
        class="accordion-header"
        :aria-expanded="openIndex === index"
      >
        <span class="accordion-title">{{ item.title }}</span>

        <!-- Chevron Icon explicitly set to 100px width -->
        <svg
          class="accordion-chevron"
          :class="{ 'rotate-180': openIndex === index }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

       <!-- Accordion Content -->
      <div
        v-show="openIndex === index"
        class="px-4 pb-4 pt-1 text-gray-600 bg-white border-t border-gray-100 space-y-3"
      >
        <!-- Renders paragraphs as an array or splits multiline text strings -->
        <p
          v-for="(paragraph, pIndex) in getParagraphs(item.content)"
          :key="pIndex"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

const accordionItems = ref([
  {
    title: 'Keep the tablets handy',
    content: [
      'You may find it useful to keep your tablets where you can see them. Seeing the tablets will remind you that you need to take one.', 'If you do this, make sure to keep them in a safe spot away from small children or pets and away from direct sunlight.', 'You can also post a sticky note reminder somewhere where you can see it, for example on the fridge. Some women find it helpful to keep their CDK4/6 inhibitors together with their hormone therapy tablets. This may help you to get into the routine!'

    ]
  },
  {
    title: 'Set reminders on the HT&Me website',
    content: [
    'On the HT&Me homepage you can go to My CDK4/6 inhibitor Diary and click set a reminder to take your CDK4/6 inhibitor. There you can let us know whether you\'d like to receive a text message or an email that will remind you about taking your tablet. You can also choose the time when you would like to receive these reminders. If you are on ribociclib, you can also set reminders only for the weeks you are on the medication.','To turn this off later simply untick the box next to the reminder you set.'

    ]
  },
  {
    title: 'Set reminders on the HT&Me diary after you\'ve taken your tablet',
    content: [
    'Tick \'done\' in the HT&Me diary after you\'ve taken your tablet. Sometimes it\'s hard to remember if you have already taken your tablet or not. To avoid having to count your tablets, try using the My CDK4/6 Inhibitor Diary and get in the habit of recording each tablet taken. This will also be helpful to know how many tablets you have left to prepare for or arrange your next appointment. '
    ]
  },
  {
    title: 'Organise your prescriptions and appointments',
    content: ['It is likely that you will be advised to take CDK4/6 inhibitors for 2 years(abemaciclib) or 3 years (ribociclib). That will mean many repeat prescriptions and appointments for your blood tests. You can make this easier for yourself by setting reminders so you can get in touch if you have not heard from your care team.Some women have found that keeping a record of their prescription can be helpful, especially if you lose your tablets or run out unexpectedly.','On the HT&Me website, in the My CDK4/6 Inhibitor Diary you can set yourself reminders for when to call about your prescriptions if you haven\'t heard from your care team.', 'You can also add contact details for your care team. To do this, go to the My Contacts page at the top of the HT&Me website homepage.'
    ]
  },
  {
    title: 'Plan what to do when your routine changes',
    content: [
    'Routines work well until we are thrown off course by a night away or a holiday.','Think about how you will adjust your routine while you are away. If you cannot keep your same home routine, maybe you can link taking your tablets to another part of your daily routine. You can use the HT&Me website to set new reminders - e.g. for a different time of a day.','Do speak with your care team if you are planning for a holiday. This will help you to plan ahead. If you are continuing your CDK4/6 inhibitors during your holiday, keep your tablets in your hand luggage when you are travelling. You can find out more about CDK4/6 inhibitors and treatment breaks here.','It is important to remember to take your hormone therapy tablets even if you are on a CDK4/6 inhibitor break. '
    ]
  },
  {
    title: 'Organise your medications',
    content: [
    'Pill organisers or dosette boxes are plastic trays which you can use to sort your medicines for different days of the week. These can come in a variety of layouts and design. ','You can buy them online or through the pharmacy. These can be useful if you are taking more than one medicine. Set aside a short amount of time each week to organise your medicines for that coming week.','If you are also taking a weekly bisphosphonate (a drug for bone density) alongside your hormone therapy and CDK4/6 inhibitor, you may also want to add this to your pill organiser.'
    ]
  }
])




// Helper function to normalise content whether it is passed as an Array or a String with newlines
const getParagraphs = (content) => {
  if (Array.isArray(content)) {
    return content
  }
  if (typeof content === 'string') {
    return content.split('\n').map(p => p.trim()).filter(Boolean)
  }
  return []
}

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.accordion-item {
  overflow: hidden;
  border: 1px solid #dedede;
  background: white;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 5rem;
  padding: 0.85rem 1.5rem;
  color: #292929;
  text-align: left;
  transition: background-color 150ms ease;
}

.accordion-header:hover {
  background: #fafafa;
}

.accordion-item-open .accordion-header {
  background: #f9edd0;
}

.accordion-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  flex-shrink: 0;
}

.accordion-icon-image {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
}

.accordion-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.accordion-chevron {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: #2d2d2d;
  transition: transform 150ms ease, color 150ms ease;
}

.accordion-item-open .accordion-chevron {
  color: var(--color-brand-gold);
}

.accordion-content {
  padding: 1.5rem 1.5rem 1.25rem;
  border-top: 1px solid #dedede;
  background: white;
  color: #292929;
  font-size: 1.125rem;
  line-height: 1.55;
}

.accordion-content :deep(p) {
  margin: 0 0 1.5rem;
}

.accordion-content :deep(ul) {
  margin: 0 0 1.5rem;
  padding-left: 2rem;
}

.accordion-close-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.25rem;
}

.accordion-close {
  padding: 0.55rem 1rem;
  border-radius: 0.25rem;
  background: var(--color-brand-purple);
  color: white;
  font-size: 1rem;
}

.accordion-close:hover {
  background: var(--color-brand-lilac);
}

@media (max-width: 640px) {
  .accordion-header {
    min-height: 4.5rem;
    padding: 0.75rem 1rem;
  }

  .accordion-title {
    font-size: 1.05rem;
  }

  .accordion-content {
    padding: 1.25rem 1rem 1rem;
    font-size: 1rem;
  }
}
</style>



