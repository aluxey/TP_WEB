<template>
  <AsyncButton @click="login" color="primary">
    <template #default>
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Sign in with Microsoft</span>
    </template>
  </AsyncButton>
</template>

<script>
import AsyncButton        from "./AsyncButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph";

export default {
  name: "SigninButton",
  components: { AsyncButton },
  props: {
    user: Object
  },
  methods: {
    async login() {
      // on appelle le helper puis on émet l'événement
      const profile = await signInAndGetUser();
      this.$emit("profile", profile);
      return profile;
    }
  }
};
</script>
