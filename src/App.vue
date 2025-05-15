<!-- src/App.vue -->
<template>
  <base-layout>
    <!-- on passe `currentUser` en prop et on écoute l'événement -->
    <SigninButton
      :user="currentUser"
      @profile="onProfile"
      style="margin-bottom: 1rem;"
    />

    <!-- on injecte aussi `currentUser` dans HomePage -->
    <router-view :user="currentUser" />
  </base-layout>
</template>

<script>
import BaseLayout   from "./components/BaseLayout.vue";
import SigninButton from "./components/SigninButton.vue";

export default {
  name: "App",
  components: { BaseLayout, SigninButton },
  data() {
    return {
      currentUser: null
    };
  },
  methods: {
    onProfile(profile) {
      // met à jour l'état partagé
      this.currentUser = profile;
    }
  }
};
</script>
