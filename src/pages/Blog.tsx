
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for Passing Your NFPA 1001 Exam",
    excerpt: "Prepare effectively with these proven strategies that will help you ace your firefighter certification exam.",
    date: "June 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1578496480157-697fc14d2e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    slug: "tips-for-passing-nfpa-exam"
  },
  {
    id: 2,
    title: "Understanding the NFPA 1001 Standard Changes for 2023",
    excerpt: "Stay current with the latest updates to the NFPA standards and how they impact your certification process.",
    date: "May 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    slug: "nfpa-standard-changes-2023"
  },
  {
    id: 3,
    title: "From Rookie to Officer: A Firefighter's Career Path",
    excerpt: "Explore the progression of a firefighting career and the certifications needed at each level.",
    date: "May 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1599677099964-b1195a81a373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    slug: "firefighter-career-path"
  },
  {
    id: 4,
    title: "Physical Fitness Requirements for Firefighters",
    excerpt: "Learn about the physical demands of firefighting and how to prepare your body for the job.",
    date: "April 22, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    slug: "physical-fitness-requirements"
  },
  {
    id: 5,
    title: "Study Strategies for Visual Learners in Firefighter Training",
    excerpt: "Discover effective study techniques tailored for those who learn best through visual information.",
    date: "April 10, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    slug: "visual-learner-study-strategies"
  },
  {
    id: 6,
    title: "Mental Health in the Fire Service: Breaking the Stigma",
    excerpt: "An important discussion on addressing mental health challenges faced by firefighters in their careers.",
    date: "March 28, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80",
    slug: "mental-health-fire-service"
  }
];

const Blog = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Firefighter Resources & Insights</h1>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Latest articles, tips, and news to help you succeed in your firefighting career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                slug={post.slug}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-block py-3 px-6 bg-navy-100 rounded-full text-navy-700">
              More articles coming soon!
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
