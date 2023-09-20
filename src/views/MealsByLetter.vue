<template>
    <div>
        <div class="flex justify-center gap-3 lg:gap-7 flex-wrap text-lg sm:text-4xl bg-purple-100 h-24 ">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"
                :class="{ 'active': letter === selectedLetter }" @click="selectedLetter = letter"
                class="font-semibold my-auto transition hover:border-b-2 border-black hover:-translate-y-1 hover:scale-150 duration-300">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 " v-if="meals.length > 0">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div class="flex flex-col p-8 text-red-500" v-else>
        There no meals here. Let pick a letter!
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import store from '../store';
import { computed, onMounted, watch, ref } from 'vue'
import MealItem from "../components/MealItem.vue";

const selectedLetter = ref(null);
const route = useRoute();
const letters = "ABCDEFGHIKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter)


watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

<style scoped>
.active {
    transform: scale(1.5);
    border-bottom: solid black 2px;
}
</style>