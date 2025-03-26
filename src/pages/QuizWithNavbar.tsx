
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Quiz from './Quiz';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { checkUserSubscription } from '@/utils/paymentVerification';

const QuizWithNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    const verifyAccess = async () => {
      if (!user) {
        navigate('/sign-in');
        return;
      }

      const hasSubscription = await checkUserSubscription(user.id);
      if (!hasSubscription) {
        navigate('/subscription');
      }
    };

    verifyAccess();
  }, [user, navigate]);

  if (!location.state) {
    navigate('/dashboard');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <Quiz />
      </main>
      <Footer />
    </div>
  );
};

export default QuizWithNavbar;
