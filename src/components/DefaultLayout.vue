<template>
    <div class="bg-grey-100 h-full">
        <NavBar />
        <main class="h-full">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>