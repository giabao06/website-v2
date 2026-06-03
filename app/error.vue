<script setup lang="ts">
import type { NuxtError } from "#app";
const props = defineProps<{ error: NuxtError }>();
</script>

<template>
    <main>
        <div
            class="w-full h-screen flex gap-3 flex-col bg-twokblue justify-center text-center align-middle font-display"
        >
            <p class="text-3xl font-bold">Well that's an error...</p>
            <p>
                Maybe you can go back
                <NuxtLink to="/" class="underline">home</NuxtLink>?
            </p>
            <div>
                <p>
                    Or report this issue via
                    <NuxtLink
                        to="https://github.com/giabao06/website-v2/"
                        class="underline"
                        >GitHub</NuxtLink
                    >
                </p>
                <p class="font-mono">
                    Error {{ error.status }}: {{ error.statusText }}
                </p>
            </div>
        </div>
    </main>
</template>
