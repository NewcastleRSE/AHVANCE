<template>
  <div class="mx-auto p-4 space-y-3 mt-6">

    <div class="mb-6 ml-4 text-lg text-gray-500">Here you can find answers to any questions you might have about taking CDK4/6 inhibitors.</div>
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
    title: 'Are CDK4/6 inhibitors safe for me?',

    content: [
      'Yes. CDK4/6 inhibitors are considered safe for most people when prescribed and monitored by a healthcare team.','As well as being tested in clinical trials, all drugs have to go through regulatory processes and assessments by organisations such as the National Institute for Health and Care Excellence (NICE). NICE  recommends the use of CDK4/6 inhibitors for certain women who have a higher risk of cancer coming back.'
    ]
  },
  {
    title: 'Why have I been prescribed CDK4/6 inhibitors?',
    content: [
    'Surgery removes the cancer that can be seen, but sometimes tiny cancer cells may still be left behind in the body. These cells can be too small to be detected on scans or tests. For women with a higher risk of the cancer coming back, a CDK4/6 inhibitor may be offered alongside hormone therapy to provide an extra layer of protection.'

    ]
  },
  {
    title: 'Are CDK4/6 inhibitors a type of chemotherapy?',
    content: [
    'No. CDK4/6 inhibitors are not chemotherapy because they do not kill all rapidly growing cells throughout the body.','They are a type of targeted treatment that works by blocking specific proteins called CDK4 and CDK6 (Cyclin-Dependent Kinases 4 and 6).','CDK4 and CDK6 are proteins in our body that act like traffic lights inside a cell. When the lights turn green, it lets our cells know that it is time for them grow and divide into new cells. This is a normal process that helps our body repair and grow. In many hormone receptor-positive breast cancers, these traffic lights can stay green for too long, which allows cancer cells to keep growing and multiplying when they shouldn\'t.','CDK4/6 inhibitors work by blocking the CDK 4 and CDK6 proteins. This changes the traffic light from green to red, which stops the cancer cells from growing and dividing.'
    ]
  },
  {
    title: 'Are CDK4/6 inhibitors an active treatment or a maintenance treatment',
    content: ['Although CDK4/6 inhibitors are taken after surgery and for several years, they are considered an active treatment rather than a maintenance treatment. They actively help stop any remaining cancer cells from growing and dividing, which can help reduce the risk of cancer coming back.'
    ]
  },
  {
    title: 'How long will the treatment be?',
    content: [
    'Abemaciclib is intended to be given for up to 2 years . The treatment duration is fixed for a maximum of 2 calendar years from the date of your first dose, rather than 2 years of actual tablets taken.',' Ribociclib is intended to be given for up to 3 years . The treatment duration is fixed for a maximum of 3 calendar years from the date of your first dose, rather than 3 years of actual tablets taken.','If you have a treatment break, extra time will not be added to the treatment. However, if you had a prolonged pause in treatment, your oncologist may extend the treatment if necessary. If you are unsure, check with your care team for more details. '
    ]
  },
  {
    title: 'Do  I need to continue my hormone therapy when my CDK4/6 inhibitors treatment ends?  ',
    content: [
    'Yes. Hormone therapy and CDK4/6 inhibitors work together, but they have different roles. Hormone therapy is the foundation of your treatment. It reduces or blocks oestrogen, which is used by hormone receptor-positive breast cancer cells to grow.','A CDK4/6 inhibitor is an additional treatment given for a set period of time. It works alongside hormone therapy to provide extra protection by making it harder for cancer cells to grow and multiply.','Even after you finish your CDK4/6 inhibitor, continuing your hormone therapy remains important because it takes away the fuel that breast cancer cells use to grow. For many women, hormone therapy continues to lower the risk of the cancer coming back long after the CDK4/6 inhibitor has stopped.'
    ]
  },
  {
    title: 'Can I share toilet facilities while on this treatment?',
    content: [
    'Yes. Unlike other treatments, special toilet arrangements are not  required for CDK4/6 inhibitors.  Good hygiene, such as washing your hands after using the toilet and flushing after use is all that is needed. '
    ]
  },
  {
    title: 'Will I still be able to use CDK4/6 inhibitors if I develop advanced cancer later on? ',
    content: [
      'Having a CDK4/6 inhibitor for early breast cancer does not automatically mean you cannot have one again if you develop advanced breast cancer.',' Your oncologist will look at how long it has been since treatment, whether the cancer returned while on treatment or after completing it, and which other treatment options are available.'
    ]
  },
  {
    title: 'Does the PREDICT tool include CDK4/6 inhibitors? ',
    content: [
    'No. The NHS Predict tool can estimate your risk of the cancer coming back and the benefit of treatments like hormone therapy and chemotherapy.','However, it does not currently include the benefits of newer CDK4/6 inhibitors. If you\'re offered abemaciclib or ribociclib, your cancer team will evidence from clinical trials and details of your diagnosis to decide whether the treatment is likely to be helpful for you. '
    ]
  },
  {
    title: 'Why can\'t I have grapefruit and what should I do if I had some by accident?  ',
    content: [
    'Grapefruit and grapefruit juice are avoided because they can slow the breakdown of abemaciclib or ribociclib, which may increase the amount of drug in your body and potentially increase side effects. Grapefruit juice may be present in common items such as mixed juices or some fruit teas. There are many food scanner apps like Fig that lets you check if a product contains specific ingredients.','If you accidentally ate a small amount of grapefruit while taking a CDK4/6 inhibitor, don\'t panic. Continue with your tablets and monitor for any worsening side effects. If you\'ve had a significant amount or develop worsening side effects, contact your care team.'
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

