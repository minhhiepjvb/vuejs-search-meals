<template>
    <div class="p-16">
        <h1 class="text-4xl font-bold mb-7">Ingredient</h1>
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.idIngredient }, }"
            v-for="ingredient of  ingredients " :key="ingredient.idIngredient"
            class="block bg-purple-100 rounded shadow p-3 mb-5">
            <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>

    
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient"

const ingredients = ref([])

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals;
        })
})


</script>