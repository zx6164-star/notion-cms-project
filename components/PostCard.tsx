import Link from 'next/link'
import { Post } from '@/types/notion'

const CATEGORY_COLORS: Record<string, string> = {
  React: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  JavaScript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'HTML/CSS': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  기타: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PostCard({ post }: { post: Post }) {
  const colorClass = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS['기타']

  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClass}`}>
            {post.category}
          </span>
          <time className="text-xs text-gray-500">{formatDate(post.published)}</time>
        </div>

        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}
