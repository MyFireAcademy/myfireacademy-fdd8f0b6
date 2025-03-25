
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, User, Lock, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (username.length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsProcessing(true);

    // Simulate account creation
    setTimeout(() => {
      // Store user data in localStorage (in a real app, this would connect to a backend)
      localStorage.setItem('user', JSON.stringify({ 
        username, 
        isAuthenticated: true
      }));
      
      setIsProcessing(false);
      
      toast({
        title: "Account Created Successfully!",
        description: "Your account has been set up. You now have access to the full study materials.",
        duration: 3000,
      });

      // Redirect to dashboard
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-navy-900">Set Up Your Account</h1>
              <p className="text-navy-600 mt-2">Create your credentials to access the study portal</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-navy-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-navy-500">
                      <User size={18} />
                    </span>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-navy-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-navy-500">
                      <Lock size={18} />
                    </span>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-navy-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-navy-500">
                      <Lock size={18} />
                    </span>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full mt-6 flex items-center justify-center"
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
                  <span className="flex items-center">
                    Create Account <ArrowRight className="ml-2" size={18} />
                  </span>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-navy-600">
              <p>Your account gives you access to all study materials</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSetup;
