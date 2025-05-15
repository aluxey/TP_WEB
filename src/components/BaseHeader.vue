<template>
  <header class="base-header">
    <nav>
      <router-link to="/" class="home-link">
        <i class="fas fa-home"></i>
        Home
      </router-link>

      <router-link
        v-if="currentUser"
        to="/conversations"
        class="nav-item"
      >
        Conversations
      </router-link>

      <span class="spacer"></span>

      <!-- Status / user name -->
      <span class="status">
        <template v-if="currentUser">
          {{ currentUser.name }}
        </template>
        <template v-else>
          Not yet logged in
        </template>
      </span>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { RouterLink } from 'vue-router'

export default {
  name: 'BaseHeader',
  components: {
    RouterLink
  },
  computed: {
    ...mapGetters({
      currentUser: 'currentUser'
    })
  }
}
</script>

<style scoped>
.base-header {
  background-color: #42b983;
  padding: 0.5rem 1rem;
  color: white;
}
nav {
  display: flex;
  align-items: center;
}
.home-link,
.nav-item {
  margin-right: 1rem;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
.spacer {
  flex: 1;
}
.status {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
