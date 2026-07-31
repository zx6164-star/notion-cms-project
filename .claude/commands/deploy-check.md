---
description: GitHub Pages 배포 전 체크리스트를 실행하고 문제를 자동으로 수정합니다
---

GitHub Pages 배포 전 다음 항목들을 순서대로 체크하고, 문제가 있으면 자동으로 수정해줘.

## 체크리스트

### 1. 파일 구조 확인
- index.html이 프로젝트 루트에 있는가?
- css/styles.css, js/app.js 경로가 정확한가?
- 상대 경로(`./`, `../`)를 올바르게 사용하고 있는가?

### 2. 외부 리소스
- Tailwind CDN 링크가 유효한가? (`https://cdn.tailwindcss.com`)
- 오프라인에서만 동작하는 로컬 파일 경로가 있는가?

### 3. JavaScript 오류
- console.error나 throw가 처리되지 않은 채 남아있는가?
- TODO 주석이 미완성 로직을 가리키고 있는가?

### 4. 메타 태그
- `<title>`이 "My App" 기본값 그대로인가? → 프로젝트명으로 변경 제안
- `<meta description>`이 없는가? → 추가 제안

### 5. Git 상태
- 커밋되지 않은 변경사항이 있는가?
- .gitignore에 불필요한 파일이 포함되어 있는가?

## 결과
문제 항목은 바로 수정하고, 수정한 내용을 목록으로 정리해줘.
수정이 완료되면 git add & commit까지 해줘. 커밋 메시지: "배포 전 체크리스트 수정사항 반영"
