<template>
  <AsyncButton @click="login">
    <span v-if="user">{{ user.name }}</span>
    <span v-else>Sign in with Microsoft</span>
  </AsyncButton>
</template>

<script>
import AsyncButton from './AsyncButton.vue'
import { signInAndGetUser } from '../lib/microsoftGraph'

export default {
  name: 'SigninButton',
  components: { AsyncButton },
  data() {
    return {
      user: null
    }
  },
  methods: {
    // AsyncButton attend que cette Promise se résolve
    async login() {
      this.user = await signInAndGetUser()
      return this.user
    }
  }
}
</script>

<style scoped>
</style>
