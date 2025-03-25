
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

type BlogPostProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  index: number;
};

const BlogPost = ({ title, excerpt, date, readTime, image, slug, index }: BlogPostProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`} 
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-navy-600 mb-3">
          <Calendar size={14} className="mr-1" />
          <span className="mr-4">{date}</span>
          <Clock size={14} className="mr-1" />
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-navy-700 mb-4">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="text-fire-600 font-medium inline-flex items-center hover:text-fire-700 transition-colors">
          Read More
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
