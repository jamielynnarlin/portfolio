import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

function Blog() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts on leadership, UX, and building great products.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {blogPosts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  )
}

export default Blog
