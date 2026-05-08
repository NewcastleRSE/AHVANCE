<template>

<section class="hero is-large has-bg-img">
  <div class="hero-body">

    <div class="container">
      <!-- Responsive title: size 3 on mobile, size 1 on desktop -->
      <h1 class="title is-3 is-size-1-desktop">
        Head and neck cancer diagnosis and survival rates
      </h1>
      <!-- Responsive subtitle: size 6 on mobile, size 4 on desktop -->
      <h2 class="subtitle is-6 is-size-4-desktop">
     The impact of Covid on UK regions
      </h2>
    </div>

  </div>
</section>
</template>

<script>

export default {
  name: 'AppBanner',
  components: {

  },
  computed: {
  },
  data() {

  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>

.has-bg-img { background: url('../assets/images/headneck.jpg')center center; background-size:cover; }

hero-body {
  max-width: 25%;
}

.title {
  color: $light;
  position: relative;
  top: -130px;
  left: -60px;
}

.subtitle {
  color: $light;
  position: relative;
  top: -80px;
  left: -60px;
}



</style>
