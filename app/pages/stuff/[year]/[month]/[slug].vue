<script setup lang="ts">
const route = useRoute();
const { year, month, slug } = route.params as {
    year: string;
    month: string;
    slug: string;
};
const path = `/stuff/${year}/${month}/${slug}`;
const { data: post } = await useAsyncData(`stuff-${path}`, () =>
    queryCollection("stuff").path(path).first(),
);
definePageMeta({
    bgColor: "bg-cafebrown",
});
</script>

<template>
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer :value="post" />
</template>
