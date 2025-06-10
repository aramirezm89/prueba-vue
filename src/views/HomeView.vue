<template>
  <header class="header">
    <NavBar />
  </header>
  <section class="main">
    <HeroComponent />
  </section>
</template>

<script setup>
import HeroComponent from '../components/HeroComponent.vue'
import NavBar from '../components/NavBar.vue'
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
.main {
  width: 100%;
}
</style>
