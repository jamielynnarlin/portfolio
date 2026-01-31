import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  return (
    <article className="card">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default BlogCard
