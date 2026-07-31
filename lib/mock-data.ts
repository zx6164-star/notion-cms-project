import { Post, Block } from '@/types/notion'

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Next.js 15 App Router 완벽 가이드',
    category: 'React',
    tags: ['Next.js', 'React', 'TypeScript'],
    published: '2026-07-28',
    status: '발행됨',
    thumbnail: '',
    summary: 'Next.js 15의 App Router를 처음부터 끝까지 파헤칩니다. 서버 컴포넌트, 클라이언트 컴포넌트, 데이터 페칭까지 모두 다룹니다.',
    slug: 'nextjs-15-app-router-guide',
  },
  {
    id: '2',
    title: 'TypeScript 제네릭 완전 정복',
    category: 'JavaScript',
    tags: ['TypeScript', '제네릭', '타입'],
    published: '2026-07-25',
    status: '발행됨',
    thumbnail: '',
    summary: '제네릭이 무서웠던 분들을 위한 실전 가이드. 간단한 예제부터 복잡한 조건부 타입까지 단계별로 익혀봅니다.',
    slug: 'typescript-generics-guide',
  },
  {
    id: '3',
    title: 'Tailwind CSS로 글래스모피즘 UI 만들기',
    category: 'HTML/CSS',
    tags: ['Tailwind', 'CSS', 'UI'],
    published: '2026-07-22',
    status: '발행됨',
    thumbnail: '',
    summary: '유리처럼 투명하고 세련된 글래스모피즘 UI를 Tailwind CSS만으로 구현하는 방법을 알아봅니다.',
    slug: 'tailwind-glassmorphism-ui',
  },
  {
    id: '4',
    title: 'React 상태관리: useState부터 Zustand까지',
    category: 'React',
    tags: ['React', 'Zustand', '상태관리'],
    published: '2026-07-18',
    status: '발행됨',
    thumbnail: '',
    summary: '리액트 상태관리의 역사와 현재. useState, useReducer, Context API, 그리고 Zustand까지 언제 무엇을 써야 하는지 알아봅니다.',
    slug: 'react-state-management',
  },
  {
    id: '5',
    title: 'Notion API로 개인 블로그 만들기',
    category: 'JavaScript',
    tags: ['Notion', 'API', 'CMS'],
    published: '2026-07-15',
    status: '발행됨',
    thumbnail: '',
    summary: 'Notion을 CMS로 활용하는 방법. API 키 발급부터 데이터베이스 연동, 페이지 블록 렌더링까지 실습합니다.',
    slug: 'notion-api-blog',
  },
  {
    id: '6',
    title: 'Claude Code로 개발 생산성 10배 높이기',
    category: 'JavaScript',
    tags: ['Claude', 'AI', '생산성'],
    published: '2026-07-10',
    status: '발행됨',
    thumbnail: '',
    summary: 'Claude Code CLI를 활용해서 개발 속도를 극적으로 높이는 팁과 워크플로우를 공유합니다.',
    slug: 'claude-code-productivity',
  },
  {
    id: '7',
    title: 'Vercel Edge Functions 파헤치기',
    category: 'JavaScript',
    tags: ['Vercel', 'Edge'],
    published: '',
    status: '초안',
    thumbnail: '',
    summary: '아직 작성 중인 글입니다.',
    slug: 'vercel-edge-functions',
  },
  {
    id: '8',
    title: 'GraphQL vs REST 실전 비교',
    category: 'JavaScript',
    tags: ['GraphQL', 'REST'],
    published: '',
    status: '초안',
    thumbnail: '',
    summary: '아직 작성 중인 글입니다.',
    slug: 'graphql-vs-rest',
  },
]

export const mockBlocks: Record<string, Block[]> = {
  '1': [
    { id: 'b1', type: 'heading_1', content: 'App Router란 무엇인가?', level: 1 },
    { id: 'b2', type: 'paragraph', content: 'Next.js 13부터 도입된 App Router는 기존 Pages Router를 대체하는 새로운 라우팅 시스템입니다. React Server Components를 기반으로 동작하며, 레이아웃, 로딩 상태, 에러 처리를 훨씬 직관적으로 관리할 수 있습니다.' },
    { id: 'b3', type: 'heading_2', content: '서버 컴포넌트 vs 클라이언트 컴포넌트', level: 2 },
    { id: 'b4', type: 'paragraph', content: '기본적으로 app/ 디렉토리의 모든 컴포넌트는 서버 컴포넌트입니다. 브라우저 API나 이벤트 핸들러가 필요할 때만 "use client"를 선언해 클라이언트 컴포넌트로 전환합니다.' },
    { id: 'b5', type: 'code', content: `// 서버 컴포넌트 (기본값)
async function PostList() {
  const posts = await getPosts() // 서버에서 직접 데이터 페칭
  return <div>{posts.map(p => <PostCard key={p.id} post={p} />)}</div>
}

// 클라이언트 컴포넌트
'use client'
function LikeButton() {
  const [liked, setLiked] = useState(false)
  return <button onClick={() => setLiked(!liked)}>좋아요</button>
}`, language: 'tsx' },
    { id: 'b6', type: 'heading_2', content: '데이터 페칭 패턴', level: 2 },
    { id: 'b7', type: 'paragraph', content: 'App Router에서는 fetch()가 확장되어 캐싱과 재검증을 세밀하게 제어할 수 있습니다. ISR은 revalidate 옵션으로 간단히 구현됩니다.' },
    { id: 'b8', type: 'code', content: `// ISR: 60초마다 재생성
export const revalidate = 60

// 캐시 무효화
fetch(url, { next: { revalidate: 0 } })

// 영구 캐시
fetch(url, { cache: 'force-cache' })`, language: 'ts' },
  ],
  '2': [
    { id: 'b1', type: 'heading_1', content: '제네릭이란?', level: 1 },
    { id: 'b2', type: 'paragraph', content: '제네릭은 타입을 함수의 파라미터처럼 받는 기능입니다. 코드를 재사용하면서도 타입 안전성을 유지할 수 있습니다.' },
    { id: 'b3', type: 'code', content: `// 제네릭 없이 - 타입별로 함수 중복
function getFirstNumber(arr: number[]): number { return arr[0] }
function getFirstString(arr: string[]): string { return arr[0] }

// 제네릭 사용 - 하나로 통합
function getFirst<T>(arr: T[]): T { return arr[0] }

const num = getFirst([1, 2, 3])    // number
const str = getFirst(['a', 'b'])   // string`, language: 'ts' },
    { id: 'b4', type: 'heading_2', content: '조건부 타입', level: 2 },
    { id: 'b5', type: 'paragraph', content: '조건부 타입은 삼항 연산자처럼 타입을 조건에 따라 결정합니다. 유틸리티 타입들이 내부적으로 이를 활용합니다.' },
    { id: 'b6', type: 'code', content: `type IsArray<T> = T extends any[] ? true : false

type A = IsArray<number[]>  // true
type B = IsArray<string>    // false`, language: 'ts' },
  ],
  '3': [
    { id: 'b1', type: 'heading_1', content: '글래스모피즘이란?', level: 1 },
    { id: 'b2', type: 'paragraph', content: '글래스모피즘(Glassmorphism)은 유리처럼 투명하고 블러 효과가 있는 UI 디자인 트렌드입니다. 배경이 비치면서 깊이감을 줍니다.' },
    { id: 'b3', type: 'heading_2', content: 'Tailwind로 구현하기', level: 2 },
    { id: 'b4', type: 'code', content: `<div class="
  bg-white/10
  backdrop-blur-md
  border border-white/20
  rounded-2xl
  shadow-xl
  p-6
">
  글래스 카드
</div>`, language: 'html' },
    { id: 'b5', type: 'paragraph', content: 'bg-white/10은 배경 투명도, backdrop-blur-md는 배경 블러, border-white/20은 반투명 테두리를 적용합니다.' },
  ],
  '4': [
    { id: 'b1', type: 'heading_1', content: '상태관리의 역사', level: 1 },
    { id: 'b2', type: 'paragraph', content: 'React의 상태관리는 useState → Context API → Redux → Zustand 순으로 발전해왔습니다. 각 도구는 서로 다른 규모와 요구사항에 맞게 설계되었습니다.' },
    { id: 'b3', type: 'heading_2', content: '언제 무엇을 쓸까?', level: 2 },
    { id: 'b4', type: 'bulleted_list_item', content: '컴포넌트 내부 상태 → useState, 전역 단순 상태 → Context API + useReducer, 복잡한 전역 상태 → Zustand 또는 Jotai' },
  ],
  '5': [
    { id: 'b1', type: 'heading_1', content: 'Notion API 시작하기', level: 1 },
    { id: 'b2', type: 'paragraph', content: 'Notion을 CMS로 쓰면 코드 없이 글을 작성하고 수정할 수 있습니다. 노션 인테그레이션을 만들고 API 키를 발급받아 연동합니다.' },
    { id: 'b3', type: 'heading_2', content: '환경 변수 설정', level: 2 },
    { id: 'b4', type: 'code', content: `# .env.local
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`, language: 'bash' },
    { id: 'b5', type: 'heading_2', content: 'API 호출', level: 2 },
    { id: 'b6', type: 'code', content: `import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: { property: 'Status', select: { equals: '발행됨' } },
  })
  return response.results
}`, language: 'ts' },
  ],
  '6': [
    { id: 'b1', type: 'heading_1', content: 'Claude Code 핵심 기능', level: 1 },
    { id: 'b2', type: 'paragraph', content: 'Claude Code는 단순한 코드 생성 도구를 넘어, 프로젝트 전체를 이해하고 실제 파일을 읽고 쓰고 수정하는 AI 개발 파트너입니다.' },
    { id: 'b3', type: 'heading_2', content: '핵심 활용 팁', level: 2 },
    { id: 'b4', type: 'paragraph', content: 'CLAUDE.md 파일에 프로젝트 컨텍스트를 작성하면 매 대화마다 설명할 필요 없이 Claude가 프로젝트를 이해합니다. 커스텀 명령어(.claude/commands/)로 반복 작업을 자동화하세요.' },
  ],
}
