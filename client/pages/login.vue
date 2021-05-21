<template>
  <div class="flex justify-center items-center h-screen">
    <template v-if="!hasData">
      <Login />
    </template>
    <template v-else>
      <p class="text-white">Logging you in</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasData: false
    }
  },
  created() {
    let access = this.$route.query.access_token;
    let refresh = this.$route.query.refresh_token;

    if(access && refresh) {
      this.hasData = true;
    }
  },
  methods: {
    async fetchUser() {
      
    }
  }
};
</script>

<style>

</style>