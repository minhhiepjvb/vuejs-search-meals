<template>
    <div>
        <div class="flex justify-center gap-7  text-4xl bg-purple-100 h-24 ">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"
                class="font-semibold my-auto transition hover:border-b-2 border-black hover:-translate-y-1 hover:scale-150 duration-300">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import store from '../store';
import { computed, onMounted, watch } from 'vue'
import MealItem from "../components/MealItem.vue";

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