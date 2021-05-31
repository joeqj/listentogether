<template>
    <div>
        <h2 v-text="current.title"></h2>
        <div v-if="current.description !== ''">
            <p class="text-gray-300" v-text="current.description"></p>
        </div>
        <div v-else>
            <p class="text-gray-300">No description set</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['room'],
    data() {
        return {
            current: undefined
        }
    },
    created() {
        this.current = this.room;
    }
}
</script>

<style lang="postcss" scoped>
h2 {
    @apply text-white text-4xl font-bold;
    @apply mb-8;
}
</style>