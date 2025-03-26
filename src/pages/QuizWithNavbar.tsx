
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Quiz from './Quiz';

const QuizWithNavbar = () => {
  const location = useLocation();
  
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
