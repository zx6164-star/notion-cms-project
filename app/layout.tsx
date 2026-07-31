import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DevLog — 개발 블로그',
  description: 'Notion CMS 기반 개인 개발 블로그',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
