import { getPosts, getPostById, getBlocks } from '@/lib/notion'
import PostBody from '@/components/PostBody'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(p => ({ id: p.id }))
}

const CATEGORY_COLORS: Record<string, string> = {
  React: 'bg-blue-500/20 text-blue-400',
  JavaScript: 'bg-yellow-500/20 text-yellow-400',
  'HTML/CSS': 'bg-orange-500/20 text-orange-400',
  기타: 'bg-gray-500/20 text-gray-400',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [post, blocks] = await Promise.all([getPostById(id), getBlocks(id)])

  if (!post) notFound()

  const colorClass = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS['기타']

  return (
    <article>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
      >
        ← 목록으로
      </Link>

      <header className="mb-10 pb-8 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${colorClass}`}>
            {post.category}
          </span>
          <time className="text-sm text-gray-500">{formatDate(post.published)}</time>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="text-gray-400 text-lg leading-relaxed">{post.summary}</p>
        )}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <PostBody blocks={blocks} />
    </article>
  )
}
