<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import RuleHeading from '@/components/RuleHeading.vue'
import { buildIndex, owner } from '@/data'

const sections = buildIndex()
</script>

<template>
  <main class="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
    <RuleHeading as="h1">{{ owner.title }} – {{ owner.name }}</RuleHeading>

    <div class="mt-12 grid gap-10 lg:grid-cols-[minmax(0,230px)_minmax(0,1fr)] lg:gap-16">
      <div class="lg:sticky lg:top-12 lg:self-start">
        <h2 class="text-5xl font-extrabold tracking-tighter sm:text-6xl">목차</h2>
        <p class="mt-3 text-sm text-muted">
          항목을 선택하면 Problem · Solution · Result를 볼 수 있습니다.
        </p>
      </div>

      <div class="space-y-12">
        <section v-for="section in sections" :key="section.category.id">
          <h3 class="text-xl font-extrabold tracking-tight">
            {{ section.category.label }}
            <span v-if="section.category.note" class="font-bold">({{ section.category.note }})</span>
          </h3>

          <div v-for="group in section.groups" :key="group.org" class="mt-5">
            <p v-if="group.org" class="mb-2.5 text-sm font-semibold text-muted">{{ group.org }}</p>

            <ul class="space-y-3">
              <li v-for="project in group.projects" :key="project.id">
                <ProjectCard :project="project" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
