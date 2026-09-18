import { createRouter, createWebHistory } from 'vue-router'

import { findProject, hasDetail, owner } from '@/data'
import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('@/views/ProjectView.vue'),
      props: true,
      beforeEnter: (to) => {
        const project = findProject(String(to.params.id))
        // 없는 id이거나 아직 상세 내용이 없는 항목이면 목차로 돌려보낸다
        if (!project || !hasDetail(project)) return { name: 'index' }
        return true
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'index' },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

router.afterEach((to) => {
  const base = `${owner.title} – ${owner.name}`
  const project = to.name === 'project' ? findProject(String(to.params.id)) : undefined

  document.title = project ? `${project.title} | ${base}` : base
})

export default router
