<template>

<div class="container is-fullhd">

    <header class="has-text-light p-4 mb-4 is-size-4">Atlas of Health Variation in Head and Neck Cancer in England</header>
    <div class="columns pl-4">
      <div class="column is-one-fifth">
        <div class="select is-primary">
        <select>
          <option>Select year(s)</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      </div>
      <div class="column main-left">
        <div class="select is-primary">
          <select>
            <option>Select cancer incidence rate</option>
            <option value="Head">Head and Neck</option>
            <option value="Laryngeal">Laryngeal</option>
            <option value="Oral">Oral cavity</option>
            <option value="Oropharyngeal">Oropharyngeal</option>
          </select>
        </div>
      </div>

      <div class="column main-right">
        <div class="select is-primary">
          <select>
            <option>Select mortality rate</option>
            <option value="Head">Head and Neck</option>
            <option value="Laryngeal">Laryngeal</option>
            <option value="Oral">Oral cavity</option>
            <option value="Oropharyngeal">Oropharyngeal</option>
          </select>
        </div>
      </div>
  </div>
     <section class="pl-4">
      <div class="main-section">
        Charts here
      </div>
    </section>
    <footer class="has-text-light p-2 is-size-7">Newcastle University &#169;2026</footer>

</div>
</template>

<script>
</script>

<style lang="scss" scoped>

header {
 background-color: $dark;
 height: auto;
}

.container {
  background-color: $light;
}

.main-left, .main-right {
  background-color: $light;
  color: var(--bulma-primary-bold);
}

.main-section {
  min-height : 600px;
}

footer {
   background-color: $dark;
}

</style>

