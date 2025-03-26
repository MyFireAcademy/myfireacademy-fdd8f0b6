import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Lock, User, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { verifyPayment } from '@/utils/stripe';
import { checkPaymentFromUrl } from '@/utils/paymentVerification';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCheckoutSession } from '@/utils/stripe';
import { supabase } from '@/integrations/supabase/client';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, isAuthenticated, signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const successUrl = `${window.location.origin}/quiz?payment_success=true`;
  const cancelUrl = `${window.location.origin}/checkout?payment_canceled=true`;

  useEffect(() => {
    if (!isAuthenticated()) {
      setShowAuthDialog(true);
    } else {
      const checkSubscription = async () => {
        if (!user) return;
        
        try {
          const { data, error } = await supabase
            .from('payments')
            .select('*')
            .eq('user_id', user.id)
            .eq('payment_status', 'succeeded')
            .maybeSingle();
          
          if (error && error.code !== 'PGRST116') {
            console.error('Error checking subscription:', error);
            return;
          }
          
          if (data) {
            toast({
              title: "Already Subscribed",
              description: "You already have access to the study materials.",
              duration: 3000,
            });
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error checking subscription status:', error);
        }
      };
      
      checkSubscription();
    }
  }, [isAuthenticated, user, navigate, toast]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const checkStripePayment = async () => {
      setIsLoading(true);
      
      const isPaymentSuccessful = await checkPaymentFromUrl(searchParams, user?.id);
      
      if (isPaymentSuccessful) {
        toast({
          title: "Payment Successful",
          description: "Your purchase was completed successfully. Redirecting to dashboard...",
          duration: 3000,
        });
        
        navigate('/dashboard');
      } else if (searchParams.has('payment_canceled')) {
        toast({
          title: "Payment Canceled",
          description: "Your purchase was not completed. You can try again when you're ready.",
          duration: 3000,
        });
      } else if (searchParams.has('session_id') || searchParams.has('payment_intent')) {
        toast({
          title: "Payment Verification Failed",
          description: "We couldn't verify your payment. Please contact support if you believe this is an error.",
          variant: "destructive",
          duration: 5000,
        });
      }
      
      setIsLoading(false);
    };
    
    if (location.search && user) {
      checkStripePayment();
    }
  }, [location.search, navigate, toast, user]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      await signIn(email, password);
      setShowAuthDialog(false);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleAuthDialogAction = (action: 'signin' | 'signup' | 'cancel') => {
    setShowAuthDialog(false);
    
    if (action === 'signin') {
      navigate('/sign-in');
    } else if (action === 'signup') {
      navigate('/profile-setup');
    } else {
      navigate('/');
    }
  };

  const handleProceedToCheckout = async () => {
    if (!isAuthenticated()) {
      setShowAuthDialog(true);
      return;
    }
    
    try {
      setIsLoading(true);
      
      toast({
        title: "Preparing checkout",
        description: "Please wait while we redirect you to the payment page...",
        duration: 3000,
      });
      
      const url = await createCheckoutSession(user?.id);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-navy-700 hover:text-fire-600 mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </button>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600 mx-auto mb-4"></div>
              <p className="text-navy-700">Verifying your payment...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-navy-900 mb-4">Order Summary</h2>
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-navy-700">NFPA 1001 Study Guide</span>
                    <span className="text-navy-900 font-medium">$47.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-navy-600">
                    <span>Digital access</span>
                    <span>Forever</span>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-navy-700">Subtotal</span>
                  <span className="text-navy-900 font-medium">$47.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mb-2">
                  <span className="text-navy-900 font-semibold">Total</span>
                  <span className="text-fire-600 font-bold">$47.00</span>
                </div>
                <div className="flex items-center justify-center bg-navy-50 rounded-lg py-2 px-3 mt-6">
                  <Lock size={14} className="text-navy-600 mr-2" />
                  <span className="text-sm text-navy-700">Secure checkout</span>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-navy-900 mb-6">Complete Your Purchase</h2>
                  
                  {isAuthenticated() ? (
                    <>
                      <p className="text-navy-700 mb-6">
                        Click the button below to proceed to our secure payment page to complete your purchase.
                      </p>
                      
                      <button 
                        onClick={handleProceedToCheckout}
                        className="btn-primary w-full flex items-center justify-center"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="animate-spin h-4 w-4 mr-2 border-b-2 border-white rounded-full"></span>
                            Processing...
                          </>
                        ) : (
                          <>Pay Now $47.00</>
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <User size={48} className="text-fire-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">Authentication Required</h3>
                      <p className="text-navy-700 mb-6">
                        Please sign in or create an account to complete your purchase.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button 
                          onClick={() => handleAuthDialogAction('signin')}
                          className="btn-secondary"
                        >
                          Sign In
                        </button>
                        <button 
                          onClick={() => handleAuthDialogAction('signup')}
                          className="btn-primary"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 text-center text-sm text-navy-600">
                    <p>100% Money-Back Guarantee • Secure Payment • Instant Access</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden">
          <div className="p-6">
            <DialogHeader>
              <h2 className="text-2xl font-bold text-center">Welcome to Firefighter Exam Prep</h2>
              <p className="text-center text-gray-500 mt-2">Sign in to access your exam materials</p>
            </DialogHeader>
            
            <form onSubmit={handleSignIn} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Your Password</Label>
                <div className="relative">
                  <Input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    className="pl-10"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-fire-600 hover:bg-fire-700 text-white font-medium py-3"
                disabled={authLoading}
              >
                {authLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>
            
            <div className="mt-6 text-center space-y-2">
              <a href="#" className="text-fire-600 hover:underline text-sm">
                Forgot your password?
              </a>
              <div className="text-sm text-gray-500">
                Don't have an account? <button 
                  onClick={() => handleAuthDialogAction('signup')}
                  className="text-fire-600 hover:underline font-medium"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
