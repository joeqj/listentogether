<template>
  <div class="flex justify-center items-center h-screen text-white">
    <template v-if="!hasData">
      <Login />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasData: false,
      access: undefined,
      refresh: undefined,
      user: undefined
    }
  },
  created() {
    this.access = this.$route.query.access_token;
    this.refresh = this.$route.query.refresh_token;

    if(this.access && this.refresh) {
      this.hasData = true;
      this.$store.commit('user/authenticate', true);
    }
  },
  mounted() {
    if (this.hasData === true) {
      this.getCurrentUser();
    }
  },
  methods: {
    async getCurrentUser() {
      const user = await this.$axios.$get('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': 'Bearer ' + this.access
        }
      })

      let currentUser = {
        access: this.access,
        refresh: this.refresh,
        ...user
      }

      this.$store.commit('user/addUser', currentUser);

      this.$nuxt.$options.router.push({
        path: '/'
      })
    }
  }
};
</script>

<style>

</style>