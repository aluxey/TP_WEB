<template>
  <AsyncButton @click="login" color="primary">
    <template #default>
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Sign in with Microsoft</span>
    </template>
  </AsyncButton>
</template>

<script>
import { mapGetters, useStore } from 'vuex'
import AsyncButton        from './AsyncButton.vue'
import { signInAndGetUser } from '../lib/microsoftGraph'

export default {
  name: 'SigninButton',
  components: { AsyncButton },
  computed: {
    ...mapGetters(['currentUser']), 
    user() {
      return this.currentUser
    }
  },
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    async login() {
      const profile = await signInAndGetUser()
      this.store.commit('setUser', profile)
      return profile
    }
  }
}
</script>
