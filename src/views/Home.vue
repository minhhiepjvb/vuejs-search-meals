<template>
    <div class="flex">
        <input type="text" class="rounded border-2 border-grey-200">
    </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const meals = computed(() => store.state.meals)

</script>

<style></style>