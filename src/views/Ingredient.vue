<template>
    <h1 class="text-4xl font-bold ml-16 mt-10 mb-8">Ingredient</h1>
    <div class="md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient }, }"
            v-for="ingredient of  ingredients " :key="ingredient.idIngredient"
            class="block bg-purple-100 rounded shadow p-3">
            <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
            <p class="line-clamp-5">{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient"
import store from "../store";

const ingredients = ref([])

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals;
        })
})

</script>