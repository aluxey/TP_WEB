<template>
  <base-layout>
    <SigninButton class="mb-4" />
    <router-view />
  </base-layout>
</template>

<script>
import BaseLayout   from './components/BaseLayout.vue'
import SigninButton from './components/SigninButton.vue'

export default {
  name: 'App',
  components: { BaseLayout, SigninButton }
}
</script>

