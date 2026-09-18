<script setup lang="ts">
import { computed } from 'vue'

import TagList from './TagList.vue'
import { hasDetail } from '@/data'
import type { Project } from '@/data'

const props = defineProps<{
  project: Project
  /** 소속명을 카드 안에 다시 보여줄지 (목차에서는 그룹 헤더가 이미 보여주므로 false) */
  showOrg?: boolean
}>()

const enabled = computed(() => hasDetail(props.project))
</script>

<template>
  <RouterLink
    v-if="enabled"
    :to="{ name: 'project', params: { id: project.id } }"
    class="group block rounded-xl border border-line bg-paper p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)] focus-visible:-translate-y-0.5 focus-visible:border-ink"
  >
    <p v-if="showOrg && project.org" class="text-xs font-semibold tracking-wide text-faint">
      {{ project.org }}
    </p>

    <div class="flex items-start justify-between gap-4">
      <h4 class="text-[1.02rem] leading-snug font-bold tracking-tight">{{ project.title }}</h4>
      <span
        class="mt-0.5 shrink-0 text-base text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-ink"
        aria-hidden="true"
        >→</span
      >
    </div>

    <p v-if="project.summary" class="mt-2 text-[0.87rem] text-muted">
      {{ project.summary }}
    </p>

    <TagList v-if="project.tags?.length" class="mt-3.5" :tags="project.tags" />
  </RouterLink>

  <!-- 상세 내용이 아직 없는 항목: 목차에는 남기되 링크를 걸지 않는다 -->
  <div v-else class="rounded-xl border border-dashed border-line bg-wash/60 p-5">
    <p v-if="showOrg && project.org" class="text-xs font-semibold tracking-wide text-faint">
      {{ project.org }}
    </p>

    <div class="flex items-start justify-between gap-4">
      <h4 class="text-[1.02rem] leading-snug font-bold tracking-tight text-faint">
        {{ project.title }}
      </h4>
      <span
        class="mt-0.5 shrink-0 rounded-full border border-line px-2 py-0.5 text-[0.7rem] font-medium text-faint"
        >준비 중</span
      >
    </div>
  </div>
</template>
