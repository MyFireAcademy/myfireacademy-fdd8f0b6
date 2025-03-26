
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Certification Badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <span className="chip bg-fire-50 text-navy-800 font-medium px-4 py-1.5 rounded-full border-2 border-fire-300 shadow-sm ring-2 ring-fire-100/60">
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
            <Link 
              to="/quiz" 
              state={{ isDemo: true }}
              className="btn-secondary bg-navy-100 hover:bg-navy-200"
            >
              Sample Exam Questions
            </Link>
          </div>
        </div>
        
        {/* Firefighter Image */}
        <div className="max-w-5xl mx-auto mt-8 md:mt-16 relative animate-blur-in" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-video relative overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-fire-600/10 to-navy-800/10 z-10"></div>
            <img 
              src="/lovable-uploads/b5593f85-f49e-4e23-8644-13aab092c078.png" 
              alt="Firefighters in action" 
              className="w-full h-full object-cover"
            />
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
