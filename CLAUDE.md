# Vanilla Starter Kit

빠르게 웹 프로젝트를 시작하기 위한 Vanilla JS + Tailwind CSS 템플릿.

## 기술 스택
- HTML5 / CSS3 / JavaScript ES6+
- Tailwind CSS (CDN)
- LocalStorage (데이터 저장)

## 파일 구조
- `index.html` — 진입점, Tailwind CDN 연결
- `css/styles.css` — 공통 컴포넌트 스타일 (카드, 버튼, 입력 필드, 배지)
- `js/app.js` — Storage 유틸, DOM 유틸, 앱 초기화

## 공통 유틸 (js/app.js)
- `Storage.get/set/remove()` — LocalStorage 래퍼
- `$(selector)` / `$$(selector)` — querySelector 단축
- `createElement(tag, class, html)` — 요소 생성 헬퍼
- `createId()` — 고유 ID 생성
- `formatDate(iso)` — 한국어 날짜 포맷

## 공통 CSS 클래스 (css/styles.css)
- `.card` — 흰색 그림자 카드
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger` — 버튼
- `.input` — 스타일된 입력 필드
- `.badge-blue/green/red/yellow` — 상태 배지
- `.fade-in-up`, `.fade-in` — 애니메이션

## 실행 방법
index.html을 브라우저로 열거나 Live Server 사용.
