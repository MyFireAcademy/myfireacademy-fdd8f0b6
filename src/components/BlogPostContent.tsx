
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Import blog data from Blog.tsx
import { blogPosts } from '@/pages/Blog';

const BlogPostContent = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    if (post) {
      document.title = `${post.title} | MyFireAcademy`;
    }
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-navy-900 mb-4">Blog Post Not Found</h1>
        <p className="text-navy-700 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/blog" 
          className="flex items-center text-fire-600 hover:text-fire-700 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all blog posts
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div 
        className="w-full h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 to-navy-900/40 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Post Metadata */}
      <div className="bg-navy-50 py-4 border-b border-navy-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center text-navy-700 text-sm">
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="flex items-center text-fire-600 hover:text-fire-700 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all blog posts
          </Link>
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-md bg-[#3b5998] text-white">
                Facebook
              </button>
              <button className="px-4 py-2 rounded-md bg-[#1da1f2] text-white">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-md bg-[#0077b5] text-white">
                LinkedIn
              </button>
            </div>
          </div>
          
          {/* Related Posts Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-navy-900 font-semibold group-hover:text-fire-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostContent;
