<script setup lang="ts">
import { owner } from '@/data'
</script>

<template>
  <header class="border-b border-line">
    <div class="mx-auto max-w-[1120px] px-5 py-5 sm:px-8">
      <RouterLink
        to="/"
        class="text-sm font-extrabold tracking-tight transition-opacity duration-200 hover:opacity-60"
      >
        {{ owner.title }} <span class="font-semibold">– {{ owner.name }}</span>
      </RouterLink>
    </div>
  </header>
</template>
