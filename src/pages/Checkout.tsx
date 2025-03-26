
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Check, CreditCard } from 'lucide-react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useToast } from '@/hooks/use-toast';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StripeCardElement from '@/components/stripe/CardElement';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const stripe = useStripe();
  const elements = useElements();
  
  const [cardName, setCardName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);

  const handleCardChange = (event: any) => {
    setCardError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // In a real implementation, you would create a payment intent on your server
      // and return the client secret to the client
      
      // For demo purposes, we'll simulate a successful payment after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsProcessing(false);
      setIsComplete(true);
      
      toast({
        title: "Payment Successful!",
        description: "Thank you for your purchase. Please set up your account to access the study materials.",
        duration: 5000,
      });

      // Redirect to profile setup page after successful payment
      setTimeout(() => {
        navigate('/profile-setup');
      }, 2000);
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="max-w-lg mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-navy-900 mb-4">Payment Successful!</h1>
              <p className="text-navy-700 mb-6">
                Thank you for your purchase. You'll need to create an account to access the study materials.
              </p>
              <p className="text-sm text-navy-600 mb-8">
                A receipt has been sent to your email address.
              </p>
              <button 
                onClick={() => navigate('/profile-setup')}
                className="btn-primary w-full"
              >
                Create Your Account
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Order Summary - Keeping as is */}
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

            {/* Payment Section with "Pay Now" button */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">Complete Your Purchase</h2>
                <p className="text-navy-700 mb-6">
                  Click the button below to proceed to our secure payment page to complete your purchase.
                </p>
                
                <a 
                  href="https://buy.stripe.com/9AQ14l4Q11AY6D67su" 
                  className="btn-primary w-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay Now $47.00
                </a>
                
                <div className="mt-6 text-center text-sm text-navy-600">
                  <p>100% Money-Back Guarantee • Secure Payment • Instant Access</p>
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

export default Checkout;
