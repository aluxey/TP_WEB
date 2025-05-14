<template>
  <div class="base-layout">
    <base-header />
    <main class="content">
      <slot />
    </main>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  name: 'BaseLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
