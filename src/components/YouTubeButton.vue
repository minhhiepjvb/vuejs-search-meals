<template>
    <a :href="href" target="_blank"
        class="py-2  flex-1 font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700  transition hover:-translate-y-1 hover:scale-105 duration-300 ">
        <slot name="textInYoutubeBtn">Youtube</slot>
    </a>
</template>
<script setup>
const props = defineProps({
    href: String
})
</script>