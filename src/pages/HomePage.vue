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

    <BaseButton color="danger">
      BaseButton danger
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton }
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
