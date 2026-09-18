<script setup lang="ts">
defineProps<{ tags: string[] }>()
</script>

<template>
  <ul v-if="tags.length" class="flex flex-wrap gap-1.5">
    <li
      v-for="tag in tags"
      :key="tag"
      class="rounded-full border border-line bg-wash px-2.5 py-0.5 text-[0.72rem] font-medium tracking-tight text-muted transition-colors duration-200 group-hover:border-ink/25 group-hover:text-ink"
    >
      {{ tag }}
    </li>
  </ul>
</template>
