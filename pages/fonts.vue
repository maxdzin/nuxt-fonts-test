<script setup lang="ts">
  const fontFamilies = ref<string[]>([
    'Inter',
    'Dancing Script',
    'Montserrat',
    'Poppins',
    'Bebas Neue',
  ])
  const fontFamily = ref<string | undefined>(undefined)
  const fontWeight = ref<300 | 400 | 500 | 600 | 700>(400)
</script>

<template>
  <div>
    <NuxtLink
      to="/"
      class="underline"
    >
      Go to Index page
    </NuxtLink>

    <div class="mt-10">
      <div class="flex flex-wrap items-center gap-4">
        <div
          v-for="(fontFamilyItem, index) in fontFamilies"
          :key="index"
          class="cursor-pointer rounded-md border px-5 py-2 hover:bg-dark-500"
          @click="fontFamily = fontFamilyItem"
        >
          {{ fontFamilyItem }}
        </div>
      </div>

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <div
          v-for="(weight, index) in [300, 400, 500, 600, 700]"
          :key="index"
          class="cursor-pointer rounded-md border px-3 py-1 hover:bg-dark-500"
          @click="fontWeight = weight"
        >
          {{ weight }}
        </div>
      </div>

      <div class="mt-20">
        <p
          class="mt-5"
          :style="{
            fontFamily,
            fontWeight,
          }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          euismod, nisl ac ultrices aliquet, odio nunc tincidunt nunc, id
          tincidunt lectus nunc id nunc. Sed auctor, nunc nec ultrices
          tincidunt, nunc nunc lacinia nunc, non tincidunt nunc nunc in nunc.
          Sed auctor, nunc nec ultrices tincidunt, nunc nunc lacinia nunc, non
          tincidunt nunc nunc in nunc.
        </p>
      </div>
    </div>
  </div>
</template>
