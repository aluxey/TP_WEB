<template>
  <div class="home-page">
    <h1>Here comes the content of the HomePage.</h1>
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
  </div>
</template>

<script>
import BaseButton  from '../components/BaseButton.vue'
import AsyncButton from '../components/AsyncButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton, AsyncButton },
  data() {
    return {
      clickCount: 1
    }
  },
  methods: {
    handleAsyncClick() {
      // construit une Promise qui résout après clickCount secondes
      const delay = this.clickCount * 1000
      this.clickCount += 1
      return new Promise(resolve => {
        setTimeout(resolve, delay)
      })
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
