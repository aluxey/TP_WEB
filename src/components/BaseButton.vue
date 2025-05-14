<!-- src/components/BaseButton.vue -->
<template>
  <button
    v-bind="$attrs"
    :disabled="disabled"
    class="base-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.base-button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* Hover et focus (sauf si disabled) */
.base-button:not(:disabled):hover,
.base-button:not(:disabled):focus {
  transform: scale(1.03);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  outline: none;
}

/* État disabled */
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
