
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Certification Badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <span className="chip">
              NFPA 1001 Level I & II Certification
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Pass Your Firefighter Exam.{' '}
            <span className="text-fire-600">Guaranteed.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-navy-700 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Our comprehensive study guide contains every question you'll need to know. 
            We're so confident you'll pass, we offer a 100% money-back guarantee.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/#pricing" className="btn-primary group">
              Get Your Study Guide
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link to="/#features" className="btn-secondary">
              Learn More
            </Link>
            <Link to="/quiz" className="btn-secondary bg-navy-100 hover:bg-navy-200">
              Try Quiz Demo
            </Link>
          </div>
        </div>
        
        {/* Abstract Hero Image or Element */}
        <div className="max-w-5xl mx-auto mt-8 md:mt-16 relative animate-blur-in" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-video relative overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-fire-600/90 to-navy-800/90 z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h3 className="text-white text-xl md:text-3xl font-medium">Your Path to Firefighter Certification</h3>
            </div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544954412-85e324dfe3aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-8 w-24 h-24 bg-fire-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-navy-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
