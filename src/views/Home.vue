<template>
    <h1 class="inline-flex items-center mt-8 mx-8 text-3xl">Here, you have all the meal that you want. Let enjoy it!</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div class="flex flex-col p-8  ">
        {{ meals.strMeal }}
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js"
import MealItem from "../components/MealItem.vue";


const meals = ref([])

onMounted(async () => {
    for (let i = 0; i < 9; i++) {
        const response = await axiosClient.get('random.php')
        const meal = response.data.meals[0];
        meals.value.push(meal)
    }

})
console.log(meals);
</script>

