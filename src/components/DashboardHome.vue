<template>

<div class="container mx-auto">

 <!-- <div class="grid min-h-screen grid-cols-1 grid-rows-[100px,1fr,auto] md:grid-cols-[200px,1fr] lg:grid-cols-[400px,1fr,400px]"> -->
    <div class="grid min-h-screen grid-cols-3 grid-rows-[400px, 1fr, 400px]  md:grid-cols-[200px,1fr] lg:grid-cols-[400px,1fr,400px]">
    <header class="col-span-full bg-gray-200 p-4">Atlas of Health Variation in head and Neck Cancer in England</header>
    <aside class=" bg-gray-200 p-4 md:row-start-2 md:block">Left Sidebar</aside>
    <main class="row-start-2 bg-white p-4 md:col-start-2">Main site content goes here..</main>
    <aside class=" bg-gray-200 p-4 lg:row-start-2 lg:block">Right Sidebar</aside>
    <footer class="col-span-full bg-gray-300 p-4">Newcastle University </footer>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>

header {
 // max-height: 100px;
}

footer {
  border: 1px solid $dark;
  max-height : 100px;
  font-size: 0.8em;
}

.vertical-header span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: left;
}

span.nowrap {
  display: inline-block;
  white-space: nowrap;
}

.btn-nopad {
  padding: 0px;
}




</style>

