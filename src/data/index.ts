import { categories, owner, projects } from './portfolio'
import type { Category, Project } from './types'

export { categories, owner, projects }
export type { Category, Project }
export type { Task, CategoryId } from './types'

/** 상세 내용이 있어 상세 페이지로 넘어갈 수 있는 항목인지 */
export function hasDetail(project: Project): boolean {
  return project.tasks.length > 0
}

/** 상세 페이지가 있는 프로젝트만, 목차에 노출되는 순서대로 */
export const detailedProjects: Project[] = projects.filter(hasDetail)

export function findProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export interface OrgGroup {
  org: string
  projects: Project[]
}

export interface CategorySection {
  category: Category
  groups: OrgGroup[]
}

/**
 * 목차용 구조. 카테고리 → 소속 → 항목 3단으로 묶되,
 * 소속이 같은 항목이 연달아 나오면 하나의 그룹으로 합친다.
 */
export function buildIndex(): CategorySection[] {
  return categories.map((category) => {
    const groups: OrgGroup[] = []

    for (const project of projects) {
      if (project.category !== category.id) continue

      const last = groups[groups.length - 1]
      if (last && last.org === project.org) {
        last.projects.push(project)
      } else {
        groups.push({ org: project.org, projects: [project] })
      }
    }

    return { category, groups }
  })
}

/** 상세 페이지 하단의 이전/다음 이동 대상 */
export function siblings(id: string): { prev?: Project; next?: Project } {
  const index = detailedProjects.findIndex((project) => project.id === id)
  if (index === -1) return {}

  return {
    prev: detailedProjects[index - 1],
    next: detailedProjects[index + 1],
  }
}

export function categoryOf(project: Project): Category | undefined {
  return categories.find((category) => category.id === project.category)
}
