<template>
    <div class="mt-6 w-[800px] ml-auto mr-auto flex flex-col">
        <h1 class="text-5xl font-bold mb-5 ">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-lg">
        <div class="grid grid-cols-1 sm:grid-cols-3 ">
            <div>
                <strong>Category: </strong>{{ meal.strCategory }}
            </div>
            <div>
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tag:</strong> {{ meal.strTags }}
            </div>
        </div>
        <div class="my-4">
            <h2 class="text-2xl font-semibold mb-3">Instructions</h2>
            <p>{{ meal.strInstructions }}</p>
        </div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 ">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredient</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}.{{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measure</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind + 1}`]">
                            {{ ind + 1 }}.{{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="my-6 flex flex-col gap-2 border-l-4 border-double border-black">
            <a :href="meal.strYoutube"
                class="p-2 flex-1 font-semibold bg-white text-red-700  hover:bg-red-700 hover:text-white  transition hover:-translate-y-1 hover:scale-105 duration-300">
                Go to the YouTube Channel
            </a>
            <a :href="meal.strSource" class="p-2 flex-1 font-semibold text-green-800 rounded-lg hover:bg-green-900 hover:text-white
                    transition hover:-translate-y-1 hover:scale-105 duration-300 ">View original source</a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router"
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref([])

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0]
        })
})
</script>