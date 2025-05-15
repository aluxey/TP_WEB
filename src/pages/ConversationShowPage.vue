<!-- src/pages/ConversationShowPage.vue -->
<template>
  <div class="conversation-show">
    <h1>Conversation Details</h1>
    <p>This page shows conversation with ID: <strong>{{ id }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'ConversationShowPage',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.conversation-show {
  padding: 2rem;
  text-align: center;
}
.conversation-show h1 {
  margin-bottom: 1rem;
}
</style>
