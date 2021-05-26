<template>
  <div>
    <div v-if="user">
      <img :src="user.images[0].url" :alt="user.display_name" />
      <p>
          <span v-text="user.display_name"></span>,
          <span v-text="timeSince(date)"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "date"],
  data() {
    return {
      user: undefined,
    };
  },
  created() {
    this.getUser(this.id);
  },
  methods: {
    async getUser(id) {
      const user = await this.$axios.$get(
        "https://api.spotify.com/v1/users/" + id,
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.user.user.access,
          },
        }
      );
      this.user = user;
    },
    timeSince(date) {
      if (typeof date !== "object") {
        date = new Date(date);
      }

      var seconds = Math.floor((new Date() - date) / 1000);
      var intervalType;

      var interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = "year";
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = "month";
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = "day";
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "hour";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "minute";
              } else {
                interval = seconds;
                intervalType = "second";
              }
            }
          }
        }
      }

      if (interval > 1 || interval === 0) {
        intervalType += "s";
      }

      return interval + " " + intervalType + " ago";
    },
  },
};
</script>

<style lang="postcss" scoped>
div {
  @apply flex items-center;
  @apply mb-2 space-x-2;

  img {
    @apply w-6 rounded-full;
  }

  p {
    @apply text-gray-400 text-sm;
  }
}
</style>