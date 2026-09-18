<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SiteHeader from '@/components/SiteHeader.vue'

const route = useRoute()

// 목차 페이지는 히어로에 이미 'Portfolio – 윤정수'가 있어 상단 바가 중복된다
const showHeader = computed(() => route.name !== 'index')
</script>

<template>
  <SiteHeader v-if="showHeader" />

  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
}
</style>
