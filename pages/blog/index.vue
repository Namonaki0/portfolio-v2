<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find()
);
</script>

<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus
    cumque, laboriosam doloremque architecto quae pariatur quasi voluptatibus
    odio repellat suscipit voluptate quis dicta veniam quam veritatis inventore?
    Ratione consequatur fugit et doloribus eveniet quod? Error reiciendis veniam
    omnis fugit magni, debitis officiis earum nam ut, aspernatur distinctio
    labore vitae!
  </p>
  <section class="grid md:grid-cols-3 gap-10 mt-8">
    <Post :posts="posts" />
  </section>
</template>
