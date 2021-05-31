<template>
  <div class="c-navbar">
    <router-link to="/">
      <svg class="fill-current" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14V17C19 17.55 18.55 18 18 18H17V14H19ZM7 14V18H6C5.45 18 5 17.55 5 17V14H7ZM12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H18C19.66 20 21 18.66 21 17V10C21 5.03 16.97 1 12 1Z" />
      </svg>
    </router-link>
    <div class="flex items-center space-x-6">
      <HeaderCreate />
      <div
        class="c-navbar__user" 
        @mouseover="userInfo = true"
        @mouseleave="userInfo = false"
      >
        <img
          v-if="user.images"
          :src="user.images[0].url"
          :alt="user.display_name"
        />
        <transition
          enter-active-class="transition-all duration-200"
          leave-active-class="transition-all duration-200"
          enter-class="opacity-0 transform translate-y-1"
          enter-to-class="opacity-1 transform translate-y-0"
          leave-class="opacity-1 transform translate-y-0"
          leave-to-class="opacity-0 transform translate-y-1">
          <div class="c-navbar__user-dropdown" v-show="userInfo">
            <p>Logged in as:</p>
            <p v-text="user.display_name"></p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      userInfo: false
    };
  },
  mounted() {
    this.user = this.$store.state.user.user;
  },
};
</script>

<style lang="postcss" scoped>
.c-navbar {
  @apply fixed w-full top-0 left-0;
  @apply bg-gray-900;
  @apply p-4;
  @apply text-white;
  @apply flex items-center justify-between;

  .c-navbar__user {
    @apply flex items-center space-x-4;
    @apply relative;

    img {
        @apply w-10 rounded-full;
        cursor: pointer;
    }

    .c-navbar__user-dropdown {
      @apply absolute w-40;
      @apply right-0 top-full;
      @apply pt-4;
      @apply flex flex-col;
      @apply text-right;
      @apply text-gray-300 text-sm;
    }
  }
}
</style>