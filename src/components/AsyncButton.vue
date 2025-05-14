<template>
  <BaseButton
    v-bind="$attrs"
    :disabled="isPending"
    :color="color"
    @click.stop.prevent="handleClick"
  >
    <template #default>
      <span v-if="isPending">
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
      default: 'primary',
      validator: v => ['primary','warn','danger'].includes(v)
    }
  },
  data() {
    return {
      isPending: false
    }
  },
  methods: {
    handleClick(event) {
      // 1. Récupère le handler passé depuis le parent via @click
      const originalOnClick = this.$attrs.onClick
      if (typeof originalOnClick !== 'function') {
        return
      }

      // 2. Désactive immédiatement le bouton
      this.isPending = true

      // 3. Appelle le handler parent et récupère SA promise
      const p = originalOnClick(event)

      // 4. Se réactive quand la promise se termine
      if (p && typeof p.finally === 'function') {
        p.finally(() => { this.isPending = false })
      } else {
        // au cas où ce n'est pas une Promise
        this.isPending = false
      }

      // 5. On renvoie la promise pour chaîner si besoin
      return p
    }
  }
}
</script>

<style scoped>
/* (les styles de BaseButton s’appliquent, on n’ajoute rien ici) */
</style>
