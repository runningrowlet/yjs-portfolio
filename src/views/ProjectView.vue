<script setup lang="ts">
import { computed } from 'vue'

import PsrBlock from '@/components/PsrBlock.vue'
import RuleHeading from '@/components/RuleHeading.vue'
import TagList from '@/components/TagList.vue'
import { categoryOf, findProject, siblings } from '@/data'

const props = defineProps<{ id: string }>()

// 라우터 가드가 존재하지 않는 id를 걸러내므로 여기서는 항상 값이 있다.
const project = computed(() => findProject(props.id)!)
const category = computed(() => categoryOf(project.value))
const nav = computed(() => siblings(props.id))
</script>

<template>
  <main class="mx-auto max-w-[900px] px-5 py-12 sm:px-8 sm:py-16">
    <RouterLink
      to="/"
      class="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
    >
      <span aria-hidden="true">←</span> 목차
    </RouterLink>

    <div class="mt-6">
      <RuleHeading as="h1">
        <span v-if="category">{{ category.label }} – </span>{{ project.title }}
      </RuleHeading>
    </div>

    <p v-if="project.org" class="mt-5 text-sm font-semibold text-muted">{{ project.org }}</p>

    <p v-if="project.summary" class="mt-2 text-[1.05rem] font-bold tracking-tight">
      {{ project.summary }}
    </p>

    <TagList v-if="project.tags?.length" class="mt-5" :tags="project.tags" />

    <article
      v-for="(task, i) in project.tasks"
      :key="i"
      class="mt-10 border-t border-line pt-10"
    >
      <h3 v-if="task.label" class="mb-8 text-[1.05rem] leading-snug font-bold tracking-tight">
        {{ task.label }}
      </h3>

      <PsrBlock label="Problem" :items="task.problem" />
      <PsrBlock label="Solution" :items="task.solution" />
      <PsrBlock label="Result" :items="task.result" />
    </article>

    <nav v-if="nav.prev || nav.next" class="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
      <RouterLink
        v-if="nav.prev"
        :to="{ name: 'project', params: { id: nav.prev.id } }"
        class="group rounded-xl border border-line p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-ink"
      >
        <span class="text-xs font-semibold text-faint">← 이전</span>
        <p class="mt-1 text-sm font-bold tracking-tight">{{ nav.prev.title }}</p>
      </RouterLink>
      <span v-else class="hidden sm:block"></span>

      <RouterLink
        v-if="nav.next"
        :to="{ name: 'project', params: { id: nav.next.id } }"
        class="group rounded-xl border border-line p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-ink sm:text-right"
      >
        <span class="text-xs font-semibold text-faint">다음 →</span>
        <p class="mt-1 text-sm font-bold tracking-tight">{{ nav.next.title }}</p>
      </RouterLink>
    </nav>
  </main>
</template>
