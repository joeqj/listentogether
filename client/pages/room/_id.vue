<template>
  <div class="container mt-40">
    <div v-if="room !== undefined">
      <RoomHeader v-bind:room="room" />
      <div class="flex mt-24 space-x-6">
        <div class="w-1/2">
          <RoomNowPlaying v-bind:room="room" />
        </div>
        <div class="w-1/2">
          <RoomChat v-bind:room="room" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      room: undefined,
      user: undefined
    };
  },
  created() {
    this.user = this.$store.state.user.user;
    if (this.$store.state.room) {
      this.room = this.$store.state.room.room;
    } else {
      this.getRoom();
    }
  },
  methods: {
    async getRoom() {
      const room = await this.$axios.$get(
        "http://localhost:3333/rooms/" + this.$route.params.id
      );
      if (room) {
        this.room = room;
      } else {
        this.createRoom();
      }
    },
    async createRoom() {
      const room = await this.$axios.$post(
        "http://localhost:3333/rooms/create",
        {
          "title": this.user.display_name + " is streaming",
          "description": "",
          "spotifyUserId": this.$route.params.id,
          "joinLink": ""
        }
      );
      this.room = room;
    }
  },
};
</script>

<style lang="postcss" scoped>

</style>