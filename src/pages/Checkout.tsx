
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    Stripe?: any;
    stripeElements?: any;
    stripeCard?: any;
    showStripePaymentForm: (publishableKey?: string) => void;
    hideStripePaymentForm: () => void;
  }
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get absolute URLs for success and cancel redirects
  const successUrl = encodeURIComponent(`${window.location.origin}/profile-setup`);
  const cancelUrl = encodeURIComponent(`${window.location.origin}/checkout`);
  
  // Construct the full Stripe checkout URL
  const stripeCheckoutUrl = `https://buy.stripe.com/9AQ14l4Q11AY6D67su?success_url=${successUrl}&cancel_url=${cancelUrl}`;

  // Initialize Stripe on component mount
  useEffect(() => {
    const stripePublishableKey = "pk_live_51R6i9NBpZN4MXkQMRvpsxvyBUhzHYoSD5fCcrH8hvyetTUqDGJGvIhsSXJFZgWshm8nCe2dMhGThDGPct1O0rI7x00adig3fwi";
    
    // Create the payment form handler
    window.showStripePaymentForm = (publishableKey) => {
      const container = document.getElementById('stripe-payment-container');
      if (container) {
        container.style.display = 'block';
      }
      
      if (!window.Stripe) {
        console.error("Stripe.js not loaded");
        return;
      }
      
      // Initialize Stripe only if not already done
      if (!window.stripeElements) {
        const key = publishableKey || stripePublishableKey;
        window.Stripe = window.Stripe(key);
        window.stripeElements = window.Stripe.elements();
        window.stripeCard = window.stripeElements.create("card");
        
        setTimeout(() => {
          const cardElement = document.getElementById("card-element");
          if (cardElement) {
            window.stripeCard.mount("#card-element");
            
            // Setup form submission handling
            const form = document.getElementById("payment-form");
            if (form) {
              form.addEventListener("submit", handleFormSubmit);
            }
          }
        }, 100);
      }
    };
    
    // Hide payment form function
    window.hideStripePaymentForm = () => {
      const container = document.getElementById('stripe-payment-container');
      if (container) {
        container.style.display = 'none';
      }
    };
    
    // Add close button behavior
    const closeButton = document.getElementById('stripe-form-close');
    if (closeButton) {
      closeButton.addEventListener('click', window.hideStripePaymentForm);
    }
    
    // Cleanup on unmount
    return () => {
      const form = document.getElementById("payment-form");
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
      
      const closeButton = document.getElementById('stripe-form-close');
      if (closeButton) {
        closeButton.removeEventListener('click', window.hideStripePaymentForm);
      }
    };
  }, []);
  
  // Form submission handler
  const handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const submitButton = form.querySelector('button[type="submit"]');
    if (!submitButton) return;
    
    const originalButtonText = submitButton.textContent || 'Pay';
    submitButton.textContent = "Processing...";
    submitButton.setAttribute('disabled', 'true');
    
    setIsProcessing(true);
    
    try {
      if (!window.Stripe || !window.stripeCard) {
        throw new Error("Stripe not initialized");
      }
      
      const { paymentMethod, error } = await window.Stripe.createPaymentMethod({
        type: "card",
        card: window.stripeCard,
      });
      
      if (error) {
        const errorElement = document.getElementById("card-errors");
        if (errorElement) {
          errorElement.textContent = error.message;
        }
        
        toast({
          title: "Payment Error",
          description: error.message,
          variant: "destructive"
        });
      } else {
        console.log("Payment method created successfully:", paymentMethod.id);
        
        // For demo purposes, we'll simulate a successful payment
        setTimeout(() => {
          // Hide the payment form
          window.hideStripePaymentForm();
          
          toast({
            title: "Payment Successful!",
            description: "Processing your purchase...",
          });
          
          // Navigate to the success page
          navigate('/profile-setup');
        }, 1000);
      }
    } catch (e) {
      console.error("Error processing payment:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred";
      
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
      
      const errorElement = document.getElementById("card-errors");
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    } finally {
      setIsProcessing(false);
      submitButton.textContent = originalButtonText;
      submitButton.removeAttribute('disabled');
    }
  };

  // Function to handle opening the embedded Stripe form
  const handlePayWithCard = () => {
    window.showStripePaymentForm();
    
    toast({
      title: "Payment Form Opened",
      description: "Please enter your credit card details to complete the purchase.",
    });
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
                <p className="text-navy-700 mb-6">
                  Choose your preferred payment method below to complete your purchase.
                </p>
                
                <div className="flex flex-col space-y-4">
                  {/* Credit Card Payment Button */}
                  <button 
                    onClick={handlePayWithCard}
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isProcessing}
                  >
                    <CreditCard size={18} className="mr-2" />
                    Pay with Card $47.00
                  </button>
                  
                  {/* External Stripe Checkout Button */}
                  <a 
                    href={stripeCheckoutUrl}
                    className="btn-secondary w-full flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pay with Stripe Checkout $47.00
                  </a>
                </div>
                
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
