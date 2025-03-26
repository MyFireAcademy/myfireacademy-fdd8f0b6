
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { createCheckoutSession } from '@/utils/stripe';
import { checkPaymentFromUrl, checkUserSubscription } from '@/utils/paymentVerification';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

const SubscriptionPage = () => {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Check for payment success from URL parameters
  useEffect(() => {
    if (!user) return;
    
    const searchParams = new URLSearchParams(location.search);
    const checkPaymentStatus = async () => {
      if (searchParams.has('payment_success') || 
          searchParams.has('session_id') || 
          searchParams.has('payment_intent')) {
        
        setIsLoading(true);
        const isPaymentVerified = await checkPaymentFromUrl(searchParams, user.id);
        
        if (isPaymentVerified) {
          toast({
            title: "Payment Successful",
            description: "Thank you for your purchase! Redirecting to your dashboard...",
            duration: 3000,
          });
          
          // Redirect to dashboard
          navigate('/dashboard', { replace: true });
        } else {
          toast({
            title: "Payment Verification",
            description: "We're verifying your payment. Please wait a moment...",
            duration: 3000,
          });
        }
        setIsLoading(false);
      }
    };
    
    checkPaymentStatus();
  }, [user, location.search, navigate, toast]);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!user) return;
      
      try {
        setPageLoading(true);
        console.log("Checking subscription for user:", user.id);
        
        const hasValidSubscription = await checkUserSubscription(user.id);
        
        if (hasValidSubscription) {
          console.log("User has an active subscription");
          setHasSubscription(true);
          toast({
            title: "Already Subscribed",
            description: "You already have access to the study materials.",
            duration: 3000,
          });
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error checking subscription status:', error);
      } finally {
        setPageLoading(false);
      }
    };
    
    checkSubscription();
  }, [user, navigate, toast]);

  useEffect(() => {
    if (!loading && !user) {
      console.log("User not authenticated, redirecting to sign-in");
      navigate('/sign-in');
    }
  }, [user, loading, navigate]);

  const handlePurchase = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to continue.",
        duration: 3000,
      });
      navigate('/sign-in');
      return;
    }
    
    setIsLoading(true);
    
    try {
      toast({
        title: "Preparing checkout",
        description: "Please wait while we redirect you to the payment page...",
        duration: 3000,
      });
      
      console.log("Creating checkout session for user:", user.id);
      
      const url = await createCheckoutSession(user.id);
      
      console.log("Redirecting to Stripe Checkout:", url);
      
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Checkout Error",
        description: "There was a problem setting up the checkout. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      setIsLoading(false);
    }
  };

  if (loading || pageLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600"></div>
      </div>
    );
  }

  if (hasSubscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900">You already have a subscription</h2>
          <p className="mt-2 mb-4 text-navy-700">You have full access to all study materials.</p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-primary"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Welcome to MyFireAcademy!
            </h1>
            <p className="text-xl text-navy-700 max-w-2xl mx-auto">
              Complete your registration to access the full NFPA 1001 certification study materials
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-fire-600 text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">NFPA 1001 Level I & II Study Guide</h2>
                <div className="flex justify-center items-baseline my-4">
                  <span className="text-3xl font-semibold">$47.00</span>
                  <span className="ml-2 text-white/70 line-through">$79.99</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-navy-800 font-medium text-center">
                  Your account has been created successfully! One more step to gain full access:
                </p>
                
                <div className="space-y-3 mt-4">
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
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Complete Your Purchase
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  )}
                </button>
                
                <div className="text-center text-sm text-navy-600 mt-4">
                  <p className="flex justify-center space-x-3 flex-wrap">
                    <span>100% Money-Back Guarantee</span>
                    <span>•</span>
                    <span>Secure Payment</span>
                    <span>•</span>
                    <span>Instant Digital Access</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
