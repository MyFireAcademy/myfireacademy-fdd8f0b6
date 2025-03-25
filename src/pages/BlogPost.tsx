
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostContent from '@/components/BlogPostContent';

const BlogPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-20">
        <BlogPostContent />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
