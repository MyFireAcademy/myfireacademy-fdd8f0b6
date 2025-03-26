
import { Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { createCheckoutSession } from '@/utils/stripe';
import { supabase } from '@/integrations/supabase/client';

const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuth();
  
  const handlePurchase = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated()) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to continue.",
        duration: 5000,
      });
      
      // Redirect to sign-in page
      navigate('/sign-in');
      return;
    }
    
    try {
      // Check if user already has a subscription
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user?.id)
        .eq('payment_status', 'succeeded')
        .maybeSingle();
      
      if (error && error.code !== 'PGRST116') {
        console.error('Error checking subscription:', error);
        throw error;
      }
      
      // If user already has a subscription, redirect to dashboard
      if (data) {
        toast({
          title: "Already Subscribed",
          description: "You already have access to the study materials.",
          duration: 3000,
        });
        navigate('/dashboard');
        return;
      }
      
      // Show loading state
      toast({
        title: "Preparing checkout",
        description: "Please wait while we redirect you to the payment page...",
        duration: 3000,
      });
      
      // Redirect to subscription page
      navigate('/subscription');
    } catch (error) {
      console.error('Error checking subscription status:', error);
      toast({
        title: "Checkout Error",
        description: "There was a problem setting up the checkout. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
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
