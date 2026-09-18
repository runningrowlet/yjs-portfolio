<script setup lang="ts">
defineProps<{
  label: 'Problem' | 'Solution' | 'Result'
  items: string[]
}>()
</script>

<template>
  <section class="mt-9 first:mt-0">
    <h4 class="text-lg font-bold tracking-tight">{{ label }}</h4>

    <ul class="mt-3 space-y-2.5">
      <li v-for="(item, i) in items" :key="i" class="flex gap-3">
        <span class="mt-[0.68em] size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true"></span>
        <span class="text-[0.95rem] text-ink/85">{{ item }}</span>
      </li>
    </ul>
  </section>
</template>
