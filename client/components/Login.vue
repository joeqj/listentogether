<template>
  <div class="c-login">
    <p class="c-login__title">Listen Together</p>
    <a href="http://localhost:3333/user/login" class="c-login__button">Connect with Spotify</a>
    <p class="c-login__notice">Note: Spotify Premium account is required to use this website</p>
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

  &__button {
    @apply bg-green-500;
    @apply block p-4 mt-8 mb-5;
    @apply rounded-lg;
    @apply transition-colors duration-200;

    &:hover {
      @apply bg-green-600;
    }
  }

  &__notice {
    @apply text-gray-300;
    @apply text-xs;
    @apply w-10/12 mx-auto;
  }
}
</style>