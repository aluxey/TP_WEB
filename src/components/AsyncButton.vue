<!-- src/components/AsyncButton.vue -->
<template>
  <BaseButton
    :disabled="isPending"
    :color="color"
    @click.stop.prevent="handleClick"
  >
    <template #default>
      <span v-if="isPending">
        <!-- si tu as FontAwesome -->
        <font-awesome-icon :icon="['fas','circle-notch']" pulse />
      </span>
      <span v-else>
        <slot/>
      </span>
    </template>
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      isPending: false
    }
  },
  methods: {
    handleClick() {
      // Désactive le bouton
      this.isPending = true
      // Retourne une Promise qui résout au bout de 2 s
      return new Promise(resolve => {
        setTimeout(() => {
          this.isPending = false
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>
/* Rien de plus : tout est géré par BaseButton */
</style>
