<script setup lang="ts">
withDefaults(
  defineProps<{
    /** h1로 쓸지 h2로 쓸지 */
    as?: 'h1' | 'h2'
  }>(),
  { as: 'h1' },
)
</script>

<template>
  <div>
    <component
      :is="as"
      class="text-[1.6rem] leading-tight font-extrabold tracking-tight sm:text-[2.1rem]"
    >
      <slot />
    </component>

    <!-- PDF 헤더의 이중 밑줄: 얇고 긴 선 위에 짧고 두꺼운 검은 바 -->
    <div class="relative mt-4 h-[7px]" aria-hidden="true">
      <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink"></span>
      <span class="absolute top-0 left-0 h-[7px] w-[21%] max-w-[230px] min-w-[76px] bg-ink"></span>
    </div>
  </div>
</template>
