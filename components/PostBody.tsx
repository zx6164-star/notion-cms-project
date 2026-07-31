import { Block } from '@/types/notion'

function CodeBlock({ block }: { block: Block }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10">
      {block.language && (
        <div className="bg-white/5 px-4 py-2 text-xs text-gray-400 font-mono border-b border-white/10">
          {block.language}
        </div>
      )}
      <pre className="bg-gray-950 p-4 overflow-x-auto text-sm">
        <code className="text-green-300 font-mono leading-relaxed">{block.content}</code>
      </pre>
    </div>
  )
}

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-custom">
      {blocks.map(block => {
        switch (block.type) {
          case 'heading_1':
            return (
              <h1 key={block.id} className="text-3xl font-bold text-white mt-10 mb-4">
                {block.content}
              </h1>
            )
          case 'heading_2':
            return (
              <h2 key={block.id} className="text-2xl font-bold text-white mt-8 mb-3">
                {block.content}
              </h2>
            )
          case 'heading_3':
            return (
              <h3 key={block.id} className="text-xl font-semibold text-white mt-6 mb-2">
                {block.content}
              </h3>
            )
          case 'code':
            return <CodeBlock key={block.id} block={block} />
          case 'quote':
            return (
              <blockquote key={block.id} className="my-4 pl-4 border-l-4 border-violet-500 text-gray-300 italic">
                {block.content}
              </blockquote>
            )
          case 'bulleted_list_item':
            return (
              <ul key={block.id} className="my-2 pl-6 list-disc text-gray-300">
                <li className="leading-relaxed">{block.content}</li>
              </ul>
            )
          case 'numbered_list_item':
            return (
              <ol key={block.id} className="my-2 pl-6 list-decimal text-gray-300">
                <li className="leading-relaxed">{block.content}</li>
              </ol>
            )
          case 'divider':
            return <hr key={block.id} className="my-8 border-white/10" />
          default:
            if (!block.content) return null
            return (
              <p key={block.id} className="my-4 text-gray-300 leading-relaxed">
                {block.content}
              </p>
            )
        }
      })}
    </div>
  )
}
