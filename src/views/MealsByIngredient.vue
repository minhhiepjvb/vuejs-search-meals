<template>
    <h1 class="text-4xl font-bold ml-16 mt-10 mb-8"></h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-8 ">
        <div class="bg-white shadow rounded-xl " v-for="meal of meals">
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }, }" class="py-2 ml-1 flex-1 font-semibold bg-green-800 text-white rounded-lg hover:bg-green-900
            transition-colors ">
                <img :src="meal.strMealThumb" :alt="meal.strMeal"
                    class="rounded-t-xl w-full h-48 object-cover transition hover:-translate-y-1 hover:scale-105 duration-300 ">
            </router-link>

            <div class="p-3 mb-4 text-center ">
                <h3 class=" font-bold">{{ meal.strMeal }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
    if (route.params && route.params.ingredient) {
        store.dispatch('searchMealsByIngredient', route.params.ingredient);
    } else {
        console.warn("Not exist ingredient");
    }
})
</script>