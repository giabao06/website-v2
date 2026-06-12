<script setup lang="ts">
const { data: posts } = await useAsyncData("stuff", () =>
    queryCollection("stuff").all(),
);
definePageMeta({
    bgColor: "bg-cafebrown",
});
</script>

<template>
    <div class="flex flex-col justify-center p-7 text-center">
        <div id="header" class="flex flex-col gap-1.5">
            <h1 class="font-quicksand font-extrabold text-5xl">
                Stuff I wrote
            </h1>
            <p>The stuff I feel like writing from time to time</p>
        </div>
        <div id="posts" class="pt-4 flex flex-col gap-2 justify-center mx-auto">
            <StuffEntry
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                :description="post.description"
                :id="post.id"
                :path="post.path"
                :date="post.date"
            />
        </div>
    </div>
</template>
