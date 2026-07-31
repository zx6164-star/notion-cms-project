# Project Rules: Notion CMS Blog

## 프로젝트 정보
- **이름**: Notion CMS Blog (DevLog)
- **기술 스택**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Notion API
- **배포**: Vercel

## 코딩 스타일
- TypeScript strict mode 사용
- ESLint 규칙 준수
- 들여쓰기: 2칸 스페이스
- 네이밍: camelCase (변수/함수), PascalCase (컴포넌트)
- 함수 30줄 이하 유지

## 개발 원칙
1. **골격 먼저**: Phase 1 완료 없이 Phase 2 시작 금지
2. **공통 모듈 우선**: 개별 기능 전에 공통 API/컴포넌트 완성
3. **기능 완성 후 최적화**: 동작하는 코드 먼저, 최적화는 Phase 5에서
4. **각 Phase 완료 기준 충족 후 다음 단계 진행**

## 작업 순서 (의존성 규칙)
```
Phase 1 (골격) → Phase 2 (공통 모듈) → Phase 3 (핵심 기능) → Phase 4 (추가 기능) → Phase 5 (최적화/배포)
```

## 참고 문서
- PRD: `docs/PRD.md`
- ROADMAP: `docs/ROADMAP.md`
