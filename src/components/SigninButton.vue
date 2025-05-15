<template>
  <async-button @click="login" color="primary">
    <template #default>
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Sign in with Microsoft</span>
    </template>
  </async-button>
</template>

<script>
import AsyncButton        from './AsyncButton.vue'
import { signInAndGetUser } from '../lib/microsoftGraph'

export default {
  name: 'SigninButton',
  components: { AsyncButton },
  inject: ['user'],
  methods: {
    async login() {
      const profile = await signInAndGetUser()
      // tell App.vue to update its shared state
      this.$emit('profile', profile)
      return profile
    }
  }
}
</script>
