<!-- <script setup>
const route = useRoute();
</script> -->
<template>
  <p>{{ $route.params.slug }}</p>
  <main>
    <ContentDoc class="prose prose-slate" />
  </main>
</template>
