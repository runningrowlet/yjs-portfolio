# Portfolio – 윤정수

Vue 3 + Vite + TypeScript로 만든 포트폴리오 사이트. Vercel로 배포한다.

## 실행

```bash
pnpm install
pnpm dev        # 개발 서버
pnpm build      # 타입체크 + 프로덕션 빌드
pnpm preview    # 빌드 결과 미리보기
```

## 내용 수정

모든 콘텐츠는 `src/data/portfolio.ts` 한 파일에 있다. 컴포넌트를 건드릴 일은 없다.

- **프로젝트 추가**: `projects` 배열에 항목을 추가한다. `id`가 곧 URL(`/projects/<id>`)이다.
- **상세 내용 채우기**: `tasks`가 비어 있으면 목차에만 '준비 중'으로 표시되고 링크가 걸리지 않는다.
  `tasks`에 `problem` / `solution` / `result`를 넣으면 자동으로 링크가 살아난다.
- **과제가 여러 개인 프로젝트**: `tasks`에 항목을 2개 이상 넣고 각각 `label`을 준다 (KEARNEY 참고).
- **카테고리 추가**: `categories` 배열에 추가하고, `src/data/types.ts`의 `CategoryId`에 id를 더한다.
  목차는 `categories` 순서대로 렌더링된다.

## 구조

```
src/
  data/         콘텐츠(portfolio.ts) · 타입 · 조회 헬퍼
  components/   RuleHeading · ProjectCard · TagList · PsrBlock · SiteHeader
  views/        IndexView(목차) · ProjectView(상세)
  router/       라우팅 + 문서 제목
```

`vercel.json`의 rewrite는 `/projects/<id>`를 직접 열거나 새로고침할 때 404가 나지 않게 한다.
SPA이므로 이 설정을 지우면 안 된다.
