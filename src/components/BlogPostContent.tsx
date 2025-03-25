
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Import blog data from Blog.tsx
import { blogPosts } from '@/pages/Blog';

const BlogPostContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  const firefighterImages = [
    '/lovable-uploads/bb36f607-2c4e-46b8-9cf7-8e211bf31069.png',
    '/lovable-uploads/431d2eec-3a6d-49ca-9ffd-7a1644a61b77.png',
    '/lovable-uploads/b9db5a04-0eeb-4a39-afa6-65afb90ab3fe.png',
    '/lovable-uploads/59c2e51c-399d-401e-85b6-36541a4c2d86.png',
    '/lovable-uploads/72ad512a-7463-4e9f-8ee6-17b7dccf0fec.png'
  ];
  
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
  
  // Function to handle image change - this connects the dot navigation to the carousel
  const handleCarouselChange = (index: number) => {
    setActiveImage(index);
    const carouselContainer = document.querySelector('.embla__container');
    if (carouselContainer) {
      const items = carouselContainer.querySelectorAll('.embla__slide');
      items[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Now uses the first uploaded image as the hero image */}
      <div 
        className="w-full h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${firefighterImages[0]})` }}
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
          
          {/* Image Carousel */}
          <div className="my-8 bg-navy-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-navy-900 mb-4">Firefighter Training Gallery</h3>
            <Carousel 
              className="relative mx-auto w-full max-w-2xl"
              opts={{
                loop: true,
                align: "center"
              }}
              onSelect={(api) => {
                if (api) {
                  setActiveImage(api.selectedScrollSnap());
                }
              }}
            >
              <CarouselContent>
                {firefighterImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`Firefighter training image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="mt-4 flex justify-center gap-1.5">
              {firefighterImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full ${activeImage === index ? 'bg-fire-600' : 'bg-navy-300'}`}
                  onClick={() => handleCarouselChange(index)}
                />
              ))}
            </div>
            <p className="text-sm text-navy-600 text-center mt-4">
              Our firefighter training program includes hands-on experience with equipment, ladder operations, and classroom instruction.
            </p>
          </div>
          
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
