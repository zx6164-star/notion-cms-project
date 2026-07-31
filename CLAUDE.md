# DevLog — Notion CMS 블로그 프로젝트

Notion을 CMS로 활용한 개인 개발 블로그. Next.js 15 App Router + TypeScript + Tailwind CSS.

## 프로젝트 문서

@docs/PRD.md
@docs/ROADMAP.md

## 기술 스택
- **Frontend**: Next.js 15 (App Router), TypeScript
- **CMS**: Notion API (`@notionhq/client`)
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 파일 구조
```
notion-cms-project/
├── app/
│   ├── page.tsx              # 홈 (글 목록)
│   ├── posts/[id]/page.tsx   # 글 상세
│   ├── category/[name]/page.tsx
│   └── about/page.tsx
├── components/
│   ├── PostCard.tsx          # 글 카드
│   ├── PostBody.tsx          # 블록 렌더러
│   ├── CategoryFilter.tsx    # 카테고리 필터
│   └── Header.tsx
├── lib/
│   └── notion.ts             # Notion API 유틸
├── types/
│   └── notion.ts             # 타입 정의
├── .env.local                # NOTION_TOKEN, NOTION_DATABASE_ID
└── docs/
    ├── PRD.md
    └── ROADMAP.md
```

## 환경 변수
```
NOTION_TOKEN=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxx
```

## Notion DB 스키마 (Posts)
| 필드 | 타입 | 설명 |
|------|------|------|
| Title | title | 글 제목 |
| Category | select | HTML/CSS, JavaScript, React, 기타 |
| Tags | multi_select | 태그 목록 |
| Published | date | 발행일 |
| Status | select | 초안 / 발행됨 |
| Thumbnail | files | 썸네일 |
| Summary | rich_text | 요약 (2~3줄) |

## 주요 API 함수 (lib/notion.ts)
- `getPosts()` — Status=발행됨 글 목록 조회
- `getPostById(id)` — 개별 글 조회
- `getBlocks(pageId)` — 페이지 블록 조회

## 개발 순서
Phase 1 (골격) → Phase 2 (공통 모듈) → Phase 3 (핵심 기능) → Phase 4 (추가 기능) → Phase 5 (배포)
