<template>
    <header class="p-4 bg-white shadow h-16 flex justify-between items-center">
        <router-link :to="{ name: 'home' }">
            Home
        </router-link>
        <div class="flex justify-around items-center gap-3  h-full">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full  transition-colors hover:bg-purple-200">
                Meals By Name
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'byIngredient' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>