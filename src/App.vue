<template>
  <base-layout>
    <signin-button
      @profile="onProfile"
      style="margin-bottom: 1rem;"
    />

    <router-view />
  </base-layout>
</template>

<script>
import { computed } from 'vue'
import BaseLayout   from './components/BaseLayout.vue'
import SigninButton from './components/SigninButton.vue'

export default {
  name: 'App',
  components: { BaseLayout, SigninButton },
  data() {
    return {
      currentUser: null
    }
  },
  provide() {
    return {
      user: computed(() => this.currentUser)
    }
  },
  methods: {
    onProfile(profile) {
      this.currentUser = profile
    }
  }
}
</script>
