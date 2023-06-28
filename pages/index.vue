<script setup>
const { data: posts } = useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">Hi, welcome to my page</h1>
    <p class="text-base text-gray-900 p-2 italic">Frontend Developer</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">About me</h2>
      <p class="text-lg py-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ab
        molestias similique. Ullam odit sapiente tempore quia facere. Soluta
        temporibus illum voluptas ratione consequuntur id dignissimos ipsum
        magni mollitia minima itaque, quibusdam vero? Asperiores voluptatum
        velit fugiat sed veritatis consectetur.
      </p>
    </div>
    <img
      src="./images/pexels-yurii-hlei-1545743.jpg"
      alt="profile image"
      class="w-1/2 md:max-w-sm p-8 mx-auto"
    />
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
