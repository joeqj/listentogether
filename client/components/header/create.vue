<template>
  <div>
    <button @click="submit()" class="c-btn flex justify-center bg-green-500">
      <span v-if="!isLoading">Create Room</span>
      <div v-show="isLoading" class="w-24 h-6 relative">
        <HeaderLoading />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      isLoading: false,
      isCreating: false,
    };
  },
  mounted() {
    this.user = this.$store.state.user.user;
  },
  methods: {
    async getRoom() {
      const room = await this.$axios.$get(
        "http://localhost:3333/rooms/" + this.user.id
      );
      if (room) {
        return room;
      }
    },
    async submit() {
      this.isLoading = true;
      let room = await this.getRoom();
      if (room) {
        this.$store.commit('room/setRoom', room);
        this.$router.push("/room/" + this.user.id);
        this.isCreating = false;
      } else {
        room = {
          title: this.user.display_name + " is listening",
          description: "",
          spotifyUserId: this.user.id,
          joinLink: ""
        };
        this.$store.commit('room/setRoom', room);
        this.$router.push("/room/" + this.user.id);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  min-width: 150px;
  &:focus {
    @apply outline-none;
  }
}
</style>