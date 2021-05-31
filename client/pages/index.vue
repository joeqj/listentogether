<template>
  <div class="container mt-40">
    <!-- <p class="text-white" v-text="this.$store.state.user"></p> -->
    <div class="c-listing" v-for="(room, index) in rooms" :key="index">
      <div class="flex items-start justify-between">
        <p v-text="room.title" class="c-listing__title"></p>
        <router-link :to="'room/' + room.spotifyUserId" class="c-btn bg-gray-700 hover:bg-gray-600">Join</router-link>
      </div>
      <HomeListingUser
        v-bind:id="room.spotifyUserId"
        v-bind:date="room.date"
      />
      <p v-text="room.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      rooms: undefined
    }
  },
  created() {
    this.getAllRooms();
  },
  methods: {
    async getAllRooms() {
      const rooms = await this.$axios.$get('http://localhost:3333/rooms');
      this.rooms = rooms;
    }
  }
};
</script>

<style lang="postcss" scoped>
.c-listing {
  @apply block;
  @apply border-b border-gray-700;
  @apply pb-4 mb-4;

  p {
    @apply text-gray-300;
  }

  .c-listing__title {
    @apply font-bold text-lg;
    @apply text-white;
  }
}
</style>