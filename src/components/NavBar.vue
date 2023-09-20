<template>
    <header class="bg-white shadow h-16 text-xl font-semibold flex justify-between items-center">
        <router-link :to="{ name: 'home' }"
            class="inline-flex items-center px-2 h-full text-3xl  transition-colors hover:text-purple-300">
            <svg class="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 16 20">
                <path
                    d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z">
                </path>
            </svg> Choose Your Meal
        </router-link>
        <div class="flex justify-around items-center gap-3  h-full ">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full  transition-colors hover:bg-purple-200">
                Meals By Name
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'ingredient' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Ingredients
            </router-link>
        </div>

        <!-- <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <router-link :to="{ name: 'home' }"
                    class="inline-flex items-center px-2 h-full  transition-colors hover:text-purple-300">
                    Search Your Meal
                </router-link>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button"
                    class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        <path v-if="!isOpen" fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 ">
            <router-link :to="{ name: 'byName' }"
                class=" block items-center px-2 h-full  transition-colors hover:bg-purple-200">
                Meals By Name
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="block   items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'byIngredient' }"
                class="block  items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Ingredients
            </router-link>
        </nav> -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>