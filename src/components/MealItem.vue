<template>
    <div class="bg-white shadow rounded-xl ">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }, }" class="py-2 ml-1 flex-1 font-semibold bg-green-800 text-white rounded-lg hover:bg-green-900
        transition-colors ">
            <img :src="meal.strMealThumb" :alt="meal.strMeal"
                class="rounded-t-xl w-full h-48 object-cover transition hover:-translate-y-1 hover:scale-105 duration-300 ">
        </router-link>

        <div class="p-3 mb-4">
            <h3 class=" font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4 line-clamp-3 ">{{ meal.strInstructions }}</p>
            <div class="flex flex-wrap justify-around text-center">
                <YouTubeButton :href="meal.strYoutube" />

                <a :href="meal.strSource" class="py-2 ml-1 flex-1 font-semibold bg-green-800 text-white rounded-lg hover:bg-green-900
                transition hover:-translate-y-1 hover:scale-105 duration-300 ">View source</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }

})
</script>