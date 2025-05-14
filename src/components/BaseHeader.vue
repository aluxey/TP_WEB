<template>
  <header class="base-header">
    <nav>
      <a href="#" class="home-link">
        <i class="fas fa-home"></i>
        Home
      </a>
      <span class="spacer"></span>
      <span class="status">Not yet logged in</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader'
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
.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
.home-link i {
  margin-right: 0.5rem;
}
.spacer {
  flex: 1;
}
.status {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
