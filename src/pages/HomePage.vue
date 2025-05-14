<template>
  <div class="home-page">
    <h1>Here comes the content of the HomePage.</h1>
    <BaseButton style="margin-right:1rem;">
      BaseButton with custom margin
    </BaseButton>
    <BaseButton disabled>
      BaseButton disabled
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
