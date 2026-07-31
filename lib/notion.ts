import { Post, Block } from '@/types/notion'
import { mockPosts, mockBlocks } from './mock-data'

const USE_MOCK = !process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID

function extractText(richText: { plain_text: string }[]): string {
  return richText?.map(t => t.plain_text).join('') ?? ''
}

export async function getPosts(): Promise<Post[]> {
  if (USE_MOCK) return mockPosts

  const { Client } = await import('@notionhq/client')
  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: { property: 'Status', select: { equals: '발행됨' } },
    sorts: [{ property: 'Published', direction: 'descending' }],
  })

  return response.results.map((page: any) => {
    const props = page.properties
    const thumbnail = props.Thumbnail?.files?.[0]?.file?.url
      || props.Thumbnail?.files?.[0]?.external?.url
      || ''

    return {
      id: page.id,
      title: extractText(props.Title?.title ?? []),
      category: props.Category?.select?.name ?? '기타',
      tags: props.Tags?.multi_select?.map((t: { name: string }) => t.name) ?? [],
      published: props.Published?.date?.start ?? '',
      status: props.Status?.select?.name ?? '',
      thumbnail,
      summary: extractText(props.Summary?.rich_text ?? []),
      slug: page.id,
    }
  })
}

export async function getPostById(id: string): Promise<Post | null> {
  if (USE_MOCK) {
    return mockPosts.find(p => p.id === id) ?? null
  }

  const { Client } = await import('@notionhq/client')
  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  const page: any = await notion.pages.retrieve({ page_id: id })
  const props = page.properties
  const thumbnail = props.Thumbnail?.files?.[0]?.file?.url
    || props.Thumbnail?.files?.[0]?.external?.url
    || ''

  return {
    id: page.id,
    title: extractText(props.Title?.title ?? []),
    category: props.Category?.select?.name ?? '기타',
    tags: props.Tags?.multi_select?.map((t: { name: string }) => t.name) ?? [],
    published: props.Published?.date?.start ?? '',
    status: props.Status?.select?.name ?? '',
    thumbnail,
    summary: extractText(props.Summary?.rich_text ?? []),
    slug: page.id,
  }
}

export async function getBlocks(pageId: string): Promise<Block[]> {
  if (USE_MOCK) {
    return mockBlocks[pageId] ?? [
      { id: 'fallback', type: 'paragraph', content: '이 글의 본문 데이터가 없습니다.' }
    ]
  }

  const { Client } = await import('@notionhq/client')
  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  const response = await notion.blocks.children.list({ block_id: pageId })

  return response.results.map((block: any): Block => {
    const type = block.type

    switch (type) {
      case 'paragraph':
        return { id: block.id, type, content: extractText(block.paragraph?.rich_text ?? []) }
      case 'heading_1':
        return { id: block.id, type, content: extractText(block.heading_1?.rich_text ?? []), level: 1 }
      case 'heading_2':
        return { id: block.id, type, content: extractText(block.heading_2?.rich_text ?? []), level: 2 }
      case 'heading_3':
        return { id: block.id, type, content: extractText(block.heading_3?.rich_text ?? []), level: 3 }
      case 'code':
        return {
          id: block.id,
          type,
          content: extractText(block.code?.rich_text ?? []),
          language: block.code?.language ?? 'plain',
        }
      case 'bulleted_list_item':
        return { id: block.id, type, content: extractText(block.bulleted_list_item?.rich_text ?? []) }
      case 'numbered_list_item':
        return { id: block.id, type, content: extractText(block.numbered_list_item?.rich_text ?? []) }
      case 'quote':
        return { id: block.id, type, content: extractText(block.quote?.rich_text ?? []) }
      case 'divider':
        return { id: block.id, type, content: '' }
      default:
        return { id: block.id, type: 'paragraph', content: '' }
    }
  })
}
