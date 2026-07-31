import { getPostStats } from '@/lib/notion'
import Link from 'next/link'

export const revalidate = 60

export default async function AdminPage() {
  const stats = await getPostStats()

  return (
    <div>
      <div className="mb-10">
        <Link href="/" className="text-gray-400 hover:text-white text-sm mb-4 inline-block transition-colors">
          ← 블로그로
        </Link>
        <h1 className="text-3xl font-bold text-white">관리자 대시보드</h1>
        <p className="text-gray-400 mt-2">글 발행 현황을 한눈에 확인하세요</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-1">발행된 글</div>
          <div className="text-3xl font-bold text-white">{stats.totalPublished}개</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-1">작성 중인 초안</div>
          <div className="text-3xl font-bold text-yellow-400">{stats.totalDraft}개</div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">카테고리별 발행 글</h2>
        {stats.byCategory.length === 0 ? (
          <p className="text-gray-500 text-sm">발행된 글이 없습니다.</p>
        ) : (
          <div className="space-y-3">
            {stats.byCategory.map(c => (
              <div key={c.category} className="flex items-center justify-between">
                <span className="text-gray-300">{c.category}</span>
                <span className="text-white font-semibold">{c.count}개</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
