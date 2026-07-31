import { getPosts } from '@/lib/notion'
import PostCard from '@/components/PostCard'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          개발 블로그 ✍️
        </h1>
        <p className="text-gray-400 text-lg">
          Notion CMS로 만든 기술 블로그입니다
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          아직 발행된 글이 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
