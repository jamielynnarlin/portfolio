import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  const CardLink = post.externalUrl ? 'a' : Link;
  const linkProps = post.externalUrl 
    ? { href: post.externalUrl, target: "_blank", rel: "noopener noreferrer" }
    : { to: `/blog/${post.slug}` };

  return (
    <article className="card">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          <CardLink {...linkProps} className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2">
            {post.title}
            {post.externalUrl && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </CardLink>
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
