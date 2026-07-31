# ROADMAP: DevLog — Notion CMS 블로그

> PRD 기반 구현 로드맵. **골격 → 공통 → 개별 기능** 순서를 따릅니다.

---

## Phase 1: 프로젝트 골격 구축 (예상 1일)

> **왜 먼저?** 기반 없이 기능부터 만들면 나중에 구조 전체를 뜯어야 합니다.

### 작업 목록
- [ ] Next.js 15 프로젝트 생성 (App Router, TypeScript)
- [ ] Tailwind CSS + shadcn/ui 초기 설정
- [ ] 프로젝트 디렉토리 구조 확정
  ```
  app/ components/ lib/ types/ public/
  ```
- [ ] `.env.local` 환경 변수 파일 설정 (`NOTION_TOKEN`, `NOTION_DATABASE_ID`)
- [ ] ESLint / Prettier 설정
- [ ] Vercel 프로젝트 연결 (배포 파이프라인 미리 확보)

### 완료 기준
- `npm run dev` 실행 시 기본 페이지 정상 렌더링
- 환경 변수 로드 확인
- Vercel에 빈 프로젝트 배포 성공

---

## Phase 2: 공통 모듈 / 컴포넌트 개발 (예상 1~2일)

> **왜 먼저?** 모든 페이지가 재사용하는 코드를 먼저 만들어야 중복을 막고 일관성을 유지할 수 있습니다.

### 2-1. 타입 정의 (`types/notion.ts`)
- [ ] `Post` 타입 (id, title, category, tags, published, status, summary, thumbnail)
- [ ] `Block` 타입 (paragraph, heading, code, image, quote, divider, list)
- [ ] `Category` 타입

### 2-2. Notion API 유틸 (`lib/notion.ts`)
- [ ] `getPosts()` — DB에서 발행된 글 목록 조회 (status = 발행됨)
- [ ] `getPostById(id)` — 개별 글 상세 조회
- [ ] `getBlocks(pageId)` — 페이지 블록 조회
- [ ] 카테고리별 필터 파라미터 지원

### 2-3. 공통 레이아웃 컴포넌트
- [ ] `Header.tsx` — 로고 + 카테고리 네비 + 검색 아이콘
- [ ] `Footer.tsx` — 저작권, 링크
- [ ] `app/layout.tsx` — 전체 레이아웃 래퍼

### 2-4. 공통 UI 컴포넌트
- [ ] `PostCard.tsx` — 썸네일 + 제목 + 요약 + 날짜 + 카테고리 카드
- [ ] `CategoryBadge.tsx` — 카테고리 뱃지
- [ ] `TagList.tsx` — 태그 목록

### 완료 기준
- Notion API 호출 성공 (콘솔 로그로 데이터 확인)
- 공통 컴포넌트 Storybook 또는 테스트 페이지에서 렌더링 확인

---

## Phase 3: 핵심 기능 개발 (예상 2~3일)

> **왜 이 순서?** Phase 2에서 만든 공통 모듈 위에 기능을 쌓기 때문에 코드 중복 없이 빠르게 구현 가능합니다.

### 3-1. 홈 — 글 목록 페이지 (`app/page.tsx`)
- [ ] `getPosts()` 호출 → `PostCard` 그리드 렌더링
- [ ] 최신순 정렬
- [ ] 로딩 스켈레톤 UI

### 3-2. 글 상세 페이지 (`app/posts/[id]/page.tsx`)
- [ ] `getPostById` + `getBlocks` 호출
- [ ] `PostBody.tsx` — Notion 블록 렌더러 구현
  - paragraph, heading_1/2/3, code, image, quote, bulleted_list, numbered_list, divider
- [ ] 이전 / 다음 글 네비게이션

### 3-3. 반응형 디자인
- [ ] 모바일 (375px), 태블릿 (768px), 데스크톱 (1280px) 모두 대응
- [ ] 이미지 최적화 (`next/image`)

### 완료 기준
- Notion에서 작성한 글이 목록 + 상세 페이지에 정상 표시
- 모바일에서 레이아웃 깨짐 없음

---

## Phase 4: 추가 기능 개발 (예상 1~2일)

> **왜 나중에?** 핵심 기능이 동작한 뒤에 추가해야 우선순위 판단이 쉽습니다.

### 4-1. 카테고리 페이지 (`app/category/[name]/page.tsx`)
- [ ] URL 파라미터로 카테고리 필터링
- [ ] `CategoryFilter.tsx` 버튼 그룹 (홈에도 적용)

### 4-2. 검색 기능
- [ ] 제목·태그 기준 클라이언트 사이드 검색
- [ ] 검색 결과 하이라이팅

### 4-3. About 페이지 (`app/about/page.tsx`)
- [ ] Notion 단일 페이지 렌더링 (자기소개)

### 4-4. SEO 최적화
- [ ] `generateMetadata()` — 페이지별 메타 태그
- [ ] OG 이미지 설정
- [ ] `sitemap.xml` 자동 생성

### 완료 기준
- 카테고리 필터 클릭 시 해당 글만 표시
- 검색어 입력 시 실시간 필터링
- Lighthouse SEO 점수 90점 이상

---

## Phase 5: 최적화 및 배포 (예상 1일)

> **왜 마지막?** 기능이 확정된 뒤에 최적화해야 불필요한 작업을 줄일 수 있습니다.

### 5-1. 성능 최적화
- [ ] ISR (Incremental Static Regeneration) 적용 — `revalidate: 60`
- [ ] 이미지 lazy loading
- [ ] 폰트 최적화 (`next/font`)

### 5-2. 접근성
- [ ] 키보드 네비게이션 확인
- [ ] `aria-label` 추가
- [ ] 색상 대비 WCAG AA 기준 통과

### 5-3. Vercel 배포
- [ ] 환경 변수 Vercel 대시보드에 등록
- [ ] 프로덕션 배포 확인
- [ ] 커스텀 도메인 연결 (선택)

### 완료 기준
- Lighthouse 성능 90점 이상
- 글 목록 로딩 1초 이내 (ISR 캐시 적용 후)
- `https://도메인` 에서 정상 접속

---

## 전체 일정 요약

| Phase | 내용 | 예상 기간 |
|-------|------|-----------|
| Phase 1 | 프로젝트 골격 구축 | 1일 |
| Phase 2 | 공통 모듈 / 컴포넌트 | 1~2일 |
| Phase 3 | 핵심 기능 (목록 + 상세) | 2~3일 |
| Phase 4 | 추가 기능 (필터, 검색, SEO) | 1~2일 |
| Phase 5 | 최적화 및 배포 | 1일 |
| **합계** | | **약 6~9일** |

---

## 개발 원칙

1. **골격 먼저** — 구조와 환경 없이 기능 개발 금지
2. **공통 모듈 재사용** — 같은 코드를 두 번 작성하지 않는다
3. **기능 완성 후 최적화** — 동작하는 코드를 먼저, 최적화는 나중에
4. **각 Phase 완료 기준 충족 후 다음 단계 진행**
