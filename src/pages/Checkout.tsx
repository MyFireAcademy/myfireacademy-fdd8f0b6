
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Lock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { verifyPayment } from '@/utils/stripe';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from '@/utils/stripe';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    // Show auth dialog if user is not authenticated
    if (!isAuthenticated()) {
      setShowAuthDialog(true);
    }
  }, [isAuthenticated]);

  // Check if the user has been redirected back from Stripe with payment information
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    
    // Check if payment was successful
    if (searchParams.has('payment_success')) {
      toast({
        title: "Payment Successful",
        description: "Your purchase was completed successfully.",
        duration: 3000,
      });
      
      // If user is already logged in, go to dashboard
      if (user) {
        navigate('/dashboard');
      }
    }
    
    // Check if payment was canceled
    if (searchParams.has('payment_canceled')) {
      toast({
        title: "Payment Canceled",
        description: "Your purchase was not completed. You can try again when you're ready.",
        duration: 3000,
      });
    }
    
    // Check for Stripe session ID
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      setIsLoading(true);
      
      // Verify the payment
      verifyPayment(sessionId)
        .then(success => {
          if (success) {
            toast({
              title: "Payment Verified",
              description: "Your purchase was completed successfully.",
              duration: 3000,
            });
            
            // Redirect to dashboard
            navigate('/dashboard');
          } else {
            toast({
              title: "Payment Verification Failed",
              description: "We couldn't verify your payment. Please contact support if you believe this is an error.",
              variant: "destructive",
              duration: 5000,
            });
          }
        })
        .catch(error => {
          console.error("Error verifying payment:", error);
          toast({
            title: "Error",
            description: "An unexpected error occurred. Please contact support.",
            variant: "destructive",
            duration: 5000,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [location.search, navigate, toast, user]);

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
      
      // Show loading toast
      toast({
        title: "Preparing checkout",
        description: "Please wait while we redirect you to the payment page...",
        duration: 3000,
      });
      
      // Create checkout session and redirect
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

  // Define success and cancel URLs
  const successUrl = `${window.location.origin}/dashboard?payment_success=true`;
  const cancelUrl = `${window.location.origin}/checkout?payment_canceled=true`;

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
              {/* Order Summary */}
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

              {/* Payment Section */}
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

      {/* Authentication Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Authentication Required</DialogTitle>
            <DialogDescription className="text-center">
              You need to create an account or sign in to complete your purchase.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="text-center">
              <User className="h-16 w-16 text-fire-500 mx-auto mb-4" />
              <p className="text-navy-700">
                Creating an account allows you to access your study materials anytime and track your progress.
              </p>
            </div>
          </div>
          <DialogFooter className="sm:justify-center sm:space-x-4 sm:flex-row">
            <Button 
              variant="secondary"
              onClick={() => handleAuthDialogAction('cancel')}
            >
              Cancel
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleAuthDialogAction('signin')}
            >
              Sign In
            </Button>
            <Button
              className="bg-fire-600 hover:bg-fire-700 text-white" 
              onClick={() => handleAuthDialogAction('signup')}
            >
              Create Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
