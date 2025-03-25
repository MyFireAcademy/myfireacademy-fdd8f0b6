
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/hooks/use-toast';

const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to payment processing
    // For this demo, we'll redirect to the quiz page
    setTimeout(() => {
      window.location.href = '/quiz';
    }, 1000);
    
    toast({
      title: "Purchase Successful!",
      description: "Redirecting to your study material...",
      duration: 3000,
    });
  };

  return (
    <section id="pricing" className="section bg-gradient-to-b from-gray-50 to-white">
      <div 
        ref={ref}
        className={`container mx-auto px-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="chip mb-4">Limited Time Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Start Your Path to NFPA 1001 Certification Today
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Join thousands of successful firefighters who passed their exam with our comprehensive study guide.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300 ease-apple">
            <div className="bg-fire-600 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">NFPA 1001 Level I & II Study Guide</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-3xl font-semibold">$47.00</span>
                <span className="ml-2 text-white/70 line-through">$79.99</span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="text-fire-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-navy-800">Complete question database</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-fire-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-navy-800">Detailed explanations</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-fire-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-navy-800">Practice exams</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-fire-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-navy-800">Digital access forever</span>
                </div>
              </div>
              
              <button 
                onClick={handlePurchase}
                className="btn-primary w-full mt-6 group"
              >
                Buy Now
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <div className="text-center text-sm text-navy-600 mt-4">
                <p className="flex justify-center space-x-4">
                  <span>100% Money-Back Guarantee</span>
                  <span>•</span>
                  <span>Secure Payment</span>
                  <span>•</span>
                  <span>Instant Digital Access</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-navy-700">
            <p>Questions? Contact our support team at <a href="mailto:MyFireAcademy@gmail.com" className="text-fire-600 hover:underline">MyFireAcademy@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
