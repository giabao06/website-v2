<script setup lang="ts">
defineProps({
    id: String,
    title: String,
    description: String,
    date: String,
    path: String,
});
</script>

<template>
    <NuxtLink
        :to="path"
        class="border border-black rounded-lg hover:border-white p-2"
    >
        <div class="grid grid-cols-2 mb-1">
            <p class="text-left text-2xl">{{ title }}</p>
            <p class="font-mono text-right">{{ date }}</p>
        </div>
        <div>
            <p class="text-left">{{ description }}</p>
        </div>
    </NuxtLink>
</template>
