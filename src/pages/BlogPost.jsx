import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/blog" className="text-primary-600 dark:text-primary-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{paragraph.slice(4)}</h3>
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-4 text-gray-600 dark:text-gray-300">{paragraph.slice(2)}</li>
            }
            if (paragraph.trim()) {
              return <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">{paragraph}</p>
            }
            return null
          })}
        </div>
      </div>
    </article>
  )
}

export default BlogPost
