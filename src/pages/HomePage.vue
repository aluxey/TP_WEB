<template>
  <div class="home-page">
    <h1>Here comes the content of the HomePage.</h1>

    <SigninButton @profile="onProfile" style="margin-bottom: 1.5rem;">
    button pour se connecter à Microsoft Graph
    </SigninButton>

    <BaseButton color="primary" style="margin-right:1rem;">
      BaseButton primary
    </BaseButton>

    <BaseButton disabled  style="margin-right:1rem;">
      BaseButton disabled
    </BaseButton>

    <BaseButton color="warn" style="margin-right:1rem;">
      BaseButton warn
    </BaseButton>

    <BaseButton color="danger" style="margin-right:1rem;">
      BaseButton danger
    </BaseButton>

    <AsyncButton @click="handleAsyncClick">
      Disabled and animated for {{ clickCount }}s
    </AsyncButton>

    <div v-if="currentUser" class="user-info">
      <p><strong>Logged in as:</strong> {{ currentUser.name }} ({{ currentUser.username }})</p>
    </div>

  </div>
</template>

<script>
import BaseButton  from '../components/BaseButton.vue'
import AsyncButton from '../components/AsyncButton.vue'
import SigninButton from '../components/SignInButton.vue'


export default {
  name: 'HomePage',
  components: { SigninButton, BaseButton, AsyncButton },
  data() {
    return { clickCount: 1, currentUser: null }
  },
  methods: {
    handleAsyncClick() {
      const delay = this.clickCount * 1000
      this.clickCount += 1
      return new Promise(r => setTimeout(r, delay))
    },
    onProfile(profile) {
      this.currentUser = profile
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 2rem;
  text-align: center;
}
.home-page h1 {
  margin-bottom: 1.5rem;
}
</style>
