<script setup lang="ts">
const route = useRoute();
const bgColor = route.meta.bgColor || "bg-kurablue";
</script>

<template>
    <div :class="['h-screen', bgColor]">
        <header>
            <NavBar />
        </header>
        <main>
            <div class="w-full">
                <NuxtPage />
            </div>
        </main>
        <footer></footer>
    </div>
</template>
