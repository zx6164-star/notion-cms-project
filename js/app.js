/* =============================================
   Vanilla Starter Kit — 메인 앱 로직
   ============================================= */

// ── 스토리지 유틸 ──────────────────────────────
const Storage = {
  get(key, fallback = []) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

// ── DOM 유틸 ──────────────────────────────────
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function createElement(tag, className = '', html = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html)      el.innerHTML = html;
  return el;
}

// ── ID 생성 ───────────────────────────────────
const createId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

// ── 날짜 포맷 ─────────────────────────────────
function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

// ── 앱 초기화 ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Vanilla Starter Kit 로드 완료');
  // TODO: 여기서부터 앱 로직을 작성하세요
});
