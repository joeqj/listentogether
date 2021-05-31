<template>
  <div>
    <p class="text-gray-400 text-sm font-bold">Currently playing:</p>
    <div class="mt-4" v-if="current">
      <img v-if="image" :src="image.url" alt="" class="w-1/2 mb-4">
      <p class="text-white text-lg font-bold" v-text="current.name"></p>
      <div v-for="artist in current.artists" :key="artist.id">
        <p class="text-white text-base" v-text="artist.name"></p>
      </div>
      <p class="text-white text-base">
        <span>Album: </span>
        <span v-text="current.album.name"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: undefined,
      image: undefined
    };
  },
  created() {
    this.getPlaying();
  },
  mounted() {
    setInterval(() => {
      this.getPlaying();
    }, 5000);
  },
  methods: {
    async getPlaying() {
      const options = {
        headers: {
          "Authorization": "Bearer " + this.$store.state.user.user.access
        }
      }
      const currentlyPlaying = await this.$axios.$get(
        "https://api.spotify.com/v1/me/player/currently-playing", options
      );
      
      this.current = currentlyPlaying.item;

      if (currentlyPlaying) {
        const trackInfo = await this.$axios.$get(
          "https://api.spotify.com/v1/tracks/" + this.current.id, options
        );
        this.image = trackInfo.album.images[0];
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>