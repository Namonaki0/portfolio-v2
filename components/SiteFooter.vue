<script setup>
const links = [
  {
    name: "GitHub",
    href: "https://github.com/Namonaki0",
    icon: "pajamas:github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/andre-ferreira-37835b53/",
    icon: "entypo-social:linkedin-with-circle",
  },
];
</script>

<template>
  <footer class="bg-gray-700">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row"
    >
      <p class="flex-1">&copy; Andre Ferreira 2023.</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="__blank"
        >
          <Icon
            :name="link.icon"
            size="1.5rem"
            class="text-gray-300"
            target="__blank"
          />
        </a>
      </div>
    </section>
  </footer>
</template>
