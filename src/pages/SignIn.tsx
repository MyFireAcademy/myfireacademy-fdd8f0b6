
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignIn = () => {
  const { user, signIn, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    await signIn(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-navy-900">Sign In</h1>
              <p className="text-navy-600 mt-2">Access your study portal</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-navy-500">
                      <Mail size={18} />
                    </span>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fire-500 focus:border-fire-500 outline-none transition-colors"
                      placeholder="Enter your email"
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
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full mt-6 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Sign In <ArrowRight className="ml-2" size={18} />
                  </span>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-navy-600">
              <p>Don't have an account? <Link to="/profile-setup" className="text-fire-600 hover:underline">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
