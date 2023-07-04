<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();

const navigation = [
  { name: "Home", href: "/", current: route.name === "index" },
  // { name: "Blog", href: "/blog", current: route.name.includes("blog") },
  { name: "Projects", href: "/projects", current: route.name === "projects" },
  {
    name: "Repositories",
    href: "/repositories",
    current: route.name === "repositories",
  },
  { name: "Uses", href: "/uses", current: route.name === "uses" },
];
</script>

<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div
        class="relative flex flex-1 h-16 items-center justify-between overflow-hidden"
      >
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="text-white flex flex-1">
          <div class="p-3">
            <span class="text-md lg:text-3xl">ANDRE FERREIRA</span>
            <p class="text-xs lg:text-sm">FRONTEND WEB DEVELOPER</p>
          </div>
          <!-- <img src="../assets/logo.png" class="object-contain" /> -->
        </div>
        <div class="flex flex-1 items-center justify-end sm:items-stretch">
          <div class="hidden sm:ml-6 md:block">
            <div class="flex space-x-4 justify-center">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:p-6',
                  'p-6 text-sm font-medium !m-0',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'text-center block px-3 py-2 text-base font-medium !m-0',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
