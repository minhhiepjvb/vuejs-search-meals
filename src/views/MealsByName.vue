<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyWord" class="rounded border-2 border-grey-200 w-full" placeholder="Search  for meals"
            @change="searchMeals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyWord = ref([]);
const meals = computed(() => store.state.searchedMeals);

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