---
description: 새로운 기능 모듈(HTML 섹션 + JS 로직 + CSS)을 스타터킷 구조에 맞게 추가합니다
argument-hint: <기능 이름> (예: todo, counter, modal)
---

다음 규칙에 따라 "$ARGUMENTS" 기능 모듈을 vanilla-starter-kit에 추가해줘.

## 추가할 내용

### 1. index.html
- `<main id="app">` 안에 새 섹션 추가
- 섹션 id는 `$ARGUMENTS-section` 으로 설정
- 기존 카드(.card) 스타일 활용

### 2. js/app.js
- `DOMContentLoaded` 이벤트 블록 안에 "$ARGUMENTS" 관련 로직 추가
- Storage 유틸(`Storage.get/set`) 활용해서 LocalStorage에 데이터 저장
- 함수명은 camelCase, 한국어 주석 필수

### 3. css/styles.css
- "$ARGUMENTS" 기능에 필요한 커스텀 스타일 추가 (기존 변수/클래스 재사용 우선)

## 규칙
- Tailwind CSS 유틸리티 클래스 우선 사용
- 새 파일 생성하지 말 것 (기존 3개 파일에만 추가)
- 모바일 반응형 고려
- 코드 작성 후 "이렇게 동작합니다" 한 줄 요약
