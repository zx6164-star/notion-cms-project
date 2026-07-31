export interface Post {
  id: string
  title: string
  category: string
  tags: string[]
  published: string
  status: string
  thumbnail: string
  summary: string
  slug: string
}

export interface Block {
  id: string
  type: string
  content: string
  language?: string
  level?: number
  items?: string[]
}
