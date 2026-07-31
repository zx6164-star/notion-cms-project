# PRD: 개인 개발 블로그 (Notion CMS)

**버전:** 1.0  
**작성일:** 2026-07-31  
**상태:** 초안

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | DevLog — 개인 개발 블로그 |
| **목적** | Notion을 CMS로 활용한 개인 기술 블로그 |
| **타깃 사용자** | 개발 공부 중인 본인 및 방문자 |
| **CMS 선택 이유** | Notion에서 글을 작성하면 웹사이트에 자동 반영, 별도 DB 불필요 |

### 핵심 가치
- **작성 편의성**: Notion 익숙한 환경에서 글 작성
- **실시간 반영**: Notion 수정 즉시 웹사이트 업데이트
- **비용 절감**: 별도 서버/DB 없이 운영 가능

---

## 2. 기술 스택

| 영역 | 기술 |
|------|------|
| **Frontend** | Next.js 15 (App Router), TypeScript |
| **CMS** | Notion API (`@notionhq/client`) |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 3. Notion 데이터베이스 구조

### Posts 데이터베이스

| 필드명 | 타입 | 설명 |
|--------|------|------|
| `Title` | title | 글 제목 |
| `Category` | select | 카테고리 (HTML/CSS, JavaScript, React, 기타) |
| `Tags` | multi_select | 태그 목록 |
| `Published` | date | 발행일 |
| `Status` | select | 초안 / 발행됨 |
| `Thumbnail` | files | 썸네일 이미지 |
| `Summary` | rich_text | 미리보기 요약 (2~3줄) |

> 본문(Content)은 Notion 페이지 블록으로 관리

---

## 4. 주요 기능

### 4.1 글 목록 페이지 (홈)
- Notion에서 `Status = 발행됨`인 글만 가져오기
- 최신순 정렬
- 카드 형태로 표시 (썸네일 + 제목 + 요약 + 날짜 + 카테고리)
- 카테고리 필터 버튼
- 검색창 (제목·태그 기준)

### 4.2 글 상세 페이지
- URL: `/posts/[id]`
- Notion 페이지 블록을 HTML로 렌더링
- 지원 블록: 제목, 본문, 코드, 이미지, 인용, 구분선, 목록
- 이전/다음 글 네비게이션
- 목차(TOC) 자동 생성

### 4.3 카테고리 페이지
- URL: `/category/[name]`
- 카테고리별 글 목록 표시

### 4.4 About 페이지
- Notion 단일 페이지로 관리하는 자기소개

---

## 5. 화면 구성 (UI)

```
[헤더] 로고 | 카테고리 네비 | 검색 아이콘
───────────────────────────────────────────
[홈 - 글 목록]
  [필터] 전체 | HTML/CSS | JavaScript | React
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ 썸네일   │ │ 썸네일   │ │ 썸네일   │
  │ 제목     │ │ 제목     │ │ 제목     │
  │ 요약     │ │ 요약     │ │ 요약     │
  │ 날짜·태그│ │ 날짜·태그│ │ 날짜·태그│
  └──────────┘ └──────────┘ └──────────┘
───────────────────────────────────────────
[글 상세]
  제목
  날짜 | 카테고리 | 태그
  ─────────────────
  본문 (Notion 블록 렌더링)
  ─────────────────
  [이전 글] ←  → [다음 글]
───────────────────────────────────────────
[푸터] © 2026 DevLog
```

---

## 6. MVP 범위

### ✅ MVP에 포함
- Notion API 연동 및 환경 변수 설정
- 글 목록 페이지 (카드 그리드)
- 글 상세 페이지 (기본 블록 렌더링)
- 카테고리 필터
- 반응형 디자인 (모바일 대응)
- Vercel 배포

### ❌ MVP에서 제외 (추후 추가)
- 댓글 기능
- 뉴스레터 구독
- 다크모드 토글
- 조회수 카운터
- RSS 피드

---

## 7. 구현 단계

| 단계 | 작업 | 예상 시간 |
|------|------|-----------|
| 1 | Next.js 프로젝트 생성 + Tailwind, shadcn/ui 설정 | 30분 |
| 2 | Notion 데이터베이스 생성 + API 키 발급 | 20분 |
| 3 | Notion API 유틸 함수 작성 (`lib/notion.ts`) | 30분 |
| 4 | 글 목록 페이지 구현 | 40분 |
| 5 | 글 상세 페이지 + 블록 렌더러 구현 | 60분 |
| 6 | 카테고리 필터 + 검색 구현 | 30분 |
| 7 | 반응형 스타일링 | 30분 |
| 8 | Vercel 배포 + 환경 변수 설정 | 20분 |
| **합계** | | **약 4시간** |

---

## 8. 디렉토리 구조 (Next.js App Router)

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
├── .env.local                # NOTION_TOKEN, NOTION_DB_ID
└── docs/
    └── PRD.md                # 이 파일
```

---

## 9. 환경 변수

```env
NOTION_TOKEN=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxx
```

---

## 10. 성공 지표

- [ ] Notion에서 글 작성 후 30초 내 웹사이트 반영
- [ ] 모바일/태블릿/데스크톱 정상 표시
- [ ] 글 상세 페이지 로딩 2초 이내 (Vercel ISR 적용)
- [ ] Lighthouse 성능 점수 90점 이상
