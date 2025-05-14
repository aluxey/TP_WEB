<template>
  <base-layout>
    <home-page />
  </base-layout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'
import HomePage   from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    HomePage
  }
}
</script>

<style>
</style>
