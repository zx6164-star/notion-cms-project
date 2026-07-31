'use client'

import Link from 'next/link'
import { useState } from 'react'

const CATEGORIES = ['전체', 'React', 'JavaScript', 'HTML/CSS']

export default function Header() {
  const [active, setActive] = useState('전체')

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          🚀 <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">DevLog</span>
        </Link>
        <nav className="flex gap-2 flex-wrap">
          {CATEGORIES.map(cat => (
            <Link
              key={cat}
              href={cat === '전체' ? '/' : `/category/${encodeURIComponent(cat)}`}
              onClick={() => setActive(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
