
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Guarantee from '@/components/Guarantee';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  console.log("Index page rendering");
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that element
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        console.log(`Scrolling to element with id: ${id}`);
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 500);
      } else {
        console.log(`Element with id ${id} not found`);
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Guarantee />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
