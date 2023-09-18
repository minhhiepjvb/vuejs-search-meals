<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyWord" class="rounded border-2 border-grey-200 w-full" placeholder="Search  for meals"
            @change="searchMeals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl ">
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }, }" class="py-2 ml-1 flex-1 font-semibold bg-green-800 text-white rounded-lg hover:bg-green-900
            transition-colors ">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-52 object-cover ">
            </router-link>

            <div class="p-3 mb-4">
                <h3 class=" font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4 line-clamp-3 ">{{ meal.strInstructions }}</p>
                <div class="flex flex-wrap justify-around text-center">
                    <a :href="meal.strYoutube" target="_blank"
                        class="py-2  flex-1 font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ">Youtube</a>
                    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }, }" class="py-2 ml-1 flex-1 font-semibold bg-green-800 text-white rounded-lg hover:bg-green-900
                        transition-colors ">
                        Details
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyWord = ref([]);
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyWord.value)
}

onMounted(() => {
    keyWord.value = route.params.name
    if (keyWord.value) {
        searchMeals()
    }
})
</script>