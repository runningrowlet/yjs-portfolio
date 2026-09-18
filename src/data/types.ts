export type CategoryId = 'work' | 'campus' | 'external' | 'etc'

export interface Category {
  id: CategoryId
  /** 목차에 표시되는 카테고리명 */
  label: string
  /** '(SELECTIVE)' 처럼 카테고리명 뒤에 붙는 부가 표기 */
  note?: string
}

/** 한 프로젝트 안의 과제 단위. 대부분 1개이고, KEARNEY만 과제 1·2로 나뉜다. */
export interface Task {
  /** 과제가 2개 이상일 때만 소제목으로 노출된다. */
  label?: string
  problem: string[]
  solution: string[]
  result: string[]
}

export interface Project {
  /** URL slug */
  id: string
  category: CategoryId
  /** 소속 기관. 기타 활동처럼 소속이 없으면 빈 문자열. */
  org: string
  title: string
  /** 슬라이드 부제 한 줄. KEARNEY는 과제 label이 이 역할을 대신한다. */
  summary?: string
  tags?: string[]
  /** 비어 있으면 상세 내용이 없는 항목 → 목차에만 노출되고 링크가 걸리지 않는다. */
  tasks: Task[]
}
