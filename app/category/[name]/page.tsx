import { getPosts } from '@/lib/notion'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const revalidate = 60

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const categoryName = decodeURIComponent(name)
  const posts = await getPosts()
  const filtered = posts.filter(p => p.category === categoryName)

  return (
    <div>
      <div className="mb-10">
        <Link href="/" className="text-gray-400 hover:text-white text-sm mb-4 inline-block transition-colors">
          ← 전체 글
        </Link>
        <h1 className="text-3xl font-bold text-white">{categoryName}</h1>
        <p className="text-gray-400 mt-2">{filtered.length}개의 글</p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          이 카테고리에는 아직 글이 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
