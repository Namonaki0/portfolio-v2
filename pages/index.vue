<script setup>
const { data: posts } = useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">Hi, welcome to my page</h1>
    <!-- <p class="text-base text-gray-900 p-2 italic">Frontend Developer</p> -->
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">About me</h2>
      <p class="text-lg py-2">
        I am a self-taught Web Developer and love learning about the latest and
        most important tools in Web Development. I am an excellent team player,
        always committed to my role and a very reliable person. I am always
        looking to improve my problem-solving skills and creativity.
      </p>
    </div>
    <!-- <img
      src="../assets/profile_no_bg.png"
      alt="profile image"
      class="mx-auto w-[500px]"
    /> -->
  </section>
  <section>
    <!-- fetch below data from db -->
    <div>
      <h2 class="text-3xl font-bold mt-8">Languages and Tools</h2>
      <div>
        <Icon name="logos:html-5" size="5.1rem" class="text-indigo-700 m-2" />
        <Icon name="logos:css-3" size="5.1rem" class="text-indigo-700 m-2" />
        <Icon
          name="logos:tailwindcss-icon"
          size="5.1rem"
          class="text-indigo-700 m-2"
        />
        <Icon
          name="logos:javascript"
          size="5.1rem"
          class="text-indigo-700 m-2"
        />
        <Icon name="logos:vue" size="5.1rem" class="text-indigo-700 m-2" />
        <Icon
          name="logos:nodejs-icon"
          size="5.1rem"
          class="text-indigo-700 m-2"
        />
        <Icon name="logos:git-icon" size="5.1rem" class="text-indigo-700 m-2" />
        <Icon
          name="logos:visual-studio-code"
          size="5.1rem"
          class="text-indigo-700 m-2"
        />
        <Icon name="logos:figma" size="5.1rem" class="text-indigo-700 m-2" />
      </div>
    </div>
    <!-- fetch above data from db -->
    <div>
      <!-- <img src="" alt=""> -->
    </div>
  </section>
  <section>
    <div>
      <h2 class="text-3xl font-bold mt-8">Currently learning</h2>
      <div>
        <Icon
          name="logos:typescript-icon"
          size="5.1rem"
          class="text-indigo-700 m-2"
        />
        <Icon name="logos:graphql" size="5.1rem" class="text-indigo-700 ml-2" />
        <Icon name="logos:mongodb-icon" size="5.1rem" class="text-indigo-700" />
      </div>
    </div>
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
