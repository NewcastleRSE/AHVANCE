<template>
  <svg ref="svg"></svg>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as d3 from 'd3'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 300
  },
  margin: {
    type: Number,
    default: 60
  }
})

const svg = ref(null)

const drawChart = () => {

  // Create the SVG container
  const svgEl = d3.select(svg.value)
  // Clear previous renders
  svgEl.selectAll('*').remove()

  svgEl.attr('width', props.width).attr('height', props.height)

  // Declare the x (horizontal position) scale
  const x = d3
    .scaleBand()
    .domain(props.data.map((d, i) => i))
    .range([0, props.width])
    .padding(0.1)

  // Declare the y (vertical position) scale
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(props.data)])
    .nice()
    .range([props.height, 0])

  svgEl
    .selectAll('rect')
    .data(props.data)
    .join('rect')
    .attr('x', (_, i) => x(i))
    .attr('y', d => y(d))
    .attr('width', x.bandwidth())
    .attr('height', d => props.height - y(d))
    .attr('fill', 'steelblue')
    .attr('transform', props.margin )
}

onMounted(drawChart)
watch(() => props.data, drawChart)
</script>
