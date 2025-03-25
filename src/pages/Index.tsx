
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Guarantee from '@/components/Guarantee';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  console.log("Index page rendering with location:", location);
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that element
    if (location.hash) {
      const id = location.hash.substring(1);
      console.log("Hash detected in URL, looking for element with id:", id);
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
  }, [location]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <div id="guarantee">
        <Guarantee />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
