import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-2 text-center text-gray-500 text-sm">
        <span>© 2026 DevLog — Notion CMS 블로그</span>
        <Link href="/admin" className="text-gray-600 hover:text-gray-400 transition-colors">
          관리자
        </Link>
      </div>
    </footer>
  )
}
