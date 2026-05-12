<template>
 <nav class="navbar" role="navigation" aria-label="main navigation">
   <div>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
      <a class="navbar-item">
        About
      </a>
      <a class="navbar-item">
          Contact
      </a>

    </div>
   <div class="navbar-end">
       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Study Results
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            2020
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            2021
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            2022
          </a>
           <hr class="navbar-divider">
          <a class="navbar-item">
            2023
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: 'AppNavigation',
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

.navbar-menu {
   background: radial-gradient(circle,rgba(240, 159, 132, 1) 0%, rgba(242, 240, 216, 1) 91%);
}

</style>
