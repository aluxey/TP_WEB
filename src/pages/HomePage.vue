<template>
  <div class="home-page">
    <h1>Here comes the content of the HomePage.</h1>

    <p v-if="user">
      <strong>Logged in as:</strong> {{ user.name }} ({{ user.username }})
    </p>
    <p v-else>
      Vous n’êtes pas connecté.
    </p>

    <!-- your other buttons still live here: -->
    <base-button color="primary" style="margin-right:1rem;">
      BaseButton primary
    </base-button>
    <base-button disabled style="margin-right:1rem;">
      BaseButton disabled
    </base-button>
    <base-button color="warn" style="margin-right:1rem;">
      BaseButton warn
    </base-button>
    <base-button color="danger" style="margin-right:1rem;">
      BaseButton danger
    </base-button>

    <async-button @click="handleAsyncClick">
      Disabled and animated for {{ clickCount }}s
    </async-button>
  </div>
</template>

<script>
import BaseButton  from '../components/BaseButton.vue'
import AsyncButton from '../components/AsyncButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton, AsyncButton },
  inject: ['user'],
  data() {
    return {
      clickCount: 1
    }
  },
  methods: {
    handleAsyncClick() {
      const delay = this.clickCount * 1000
      this.clickCount += 1
      return new Promise(resolve => setTimeout(resolve, delay))
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
