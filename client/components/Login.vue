<template>
  <div class="c-login">
    <p class="c-login__title">Listen Together</p>
    <p class="c-login__notice">Note: Premium Spotify account is required to use this website</p>
    <a href="http://localhost:3333/user/login">Connect with Spotify</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.c-login {
  @apply w-1/3 p-8;
  @apply bg-gray-600 text-gray-100;
  @apply rounded-lg;
  @apply text-center;

  &__title {
    @apply font-bold text-2xl;
    @apply mb-8;
  }

  &__notice {
    @apply text-gray-300;
    @apply text-sm;
  }

  a {
    @apply bg-green-500 text-white;
    @apply inline-block p-4 mt-8;
    @apply rounded-lg;
    @apply transition-colors duration-200;

    &:hover {
      @apply bg-green-600;
    }
  }
}
</style>