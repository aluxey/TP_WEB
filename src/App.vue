<template>
  <div id="app">
    <base-header />
    <home-page />
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import HomePage    from './pages/HomePage.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    HomePage,
    BaseFooter
  }
}
</script>

<style>
/* si besoin, resets globaux */
#app {
  padding-top: 3rem;   /* éviter que le header fixe ne recouvre le contenu */
  padding-bottom: 2.5rem; /* laisser de la place pour le footer fixe */
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
