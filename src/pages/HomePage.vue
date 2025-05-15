<!-- src/pages/HomePage.vue -->
<template>
  <div class="home-page">
    <h1>Here comes the content of the HomePage.</h1>

    <p v-if="user">
      <strong>Logged in as:</strong> {{ user.name }} ({{ user.username }})
    </p>
    <p v-else>
      Vous n’êtes pas connecté.
    </p>

    <BaseButton color="primary" class="mr-4">
      BaseButton primary
    </BaseButton>
    <BaseButton disabled class="mr-4">
      BaseButton disabled
    </BaseButton>
    <BaseButton color="warn" class="mr-4">
      BaseButton warn
    </BaseButton>
    <BaseButton color="danger" class="mr-4">
      BaseButton danger
    </BaseButton>

    <AsyncButton @click="handleAsyncClick">
      Disabled and animated for {{ clickCount }}s
    </AsyncButton>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore }    from 'vuex'
import BaseButton      from '../components/BaseButton.vue'
import AsyncButton     from '../components/AsyncButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton, AsyncButton },
  setup() {
    const store = useStore()
    // récupère currentUser via getter
    const user = computed(() => store.getters.currentUser)
    // compteur pour AsyncButton
    const clickCount = ref(1)

    function handleAsyncClick() {
      const delay = clickCount.value * 1000
      clickCount.value += 1
      return new Promise(resolve => setTimeout(resolve, delay))
    }

    return { user, clickCount, handleAsyncClick }
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
.mr-4 {
  margin-right: 1rem;
}
</style>
