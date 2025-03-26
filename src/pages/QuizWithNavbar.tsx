
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Quiz from './Quiz';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const QuizWithNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    // If user is not authenticated, redirect to sign in
    if (!isAuthenticated()) {
      navigate('/sign-in', { 
        state: { 
          redirectTo: '/quiz',
          message: 'Please sign in to access the exam.' 
        } 
      });
    }
  }, [isAuthenticated, navigate]);
  
  // Extract quiz state from location or use defaults
  const quizState = {
    quizId: location.state?.quizId || 'nfpa-1001-level1-full',
    level: location.state?.level || 'level1',
    isFull: location.state?.isFull !== undefined ? location.state.isFull : true,
    isDemo: location.state?.isDemo || false
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <Quiz 
          initialLevel={quizState.level} 
          initialIsFull={quizState.isFull} 
          initialIsDemo={quizState.isDemo}
          quizId={quizState.quizId}
        />
      </main>
      <Footer />
    </div>
  );
};

export default QuizWithNavbar;
