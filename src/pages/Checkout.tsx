
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
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
    }, 1500);
  };

  const formatCardNumber = (value: string) => {
    const val = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = val.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const val = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (val.length > 2) {
      return `${val.substring(0, 2)}/${val.substring(2, 4)}`;
    }
    return val;
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

            {/* Payment Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-navy-900 mb-6 flex items-center">
                  <CreditCard className="mr-2 text-fire-600" size={20} />
                  Payment Details
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-navy-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        id="cardName"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-navy-700 mb-1">
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-navy-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          id="expiryDate"
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-navy-700 mb-1">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full mt-6"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Pay $47.00"
                    )}
                  </button>
                </form>
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
