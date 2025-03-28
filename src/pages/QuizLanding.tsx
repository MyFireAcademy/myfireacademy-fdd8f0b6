
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, BookOpen, ArrowRight, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { checkUserSubscription } from '@/utils/paymentVerification';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface QuizCard {
  id: string;
  title: string;
  description: string;
  level: 'level1' | 'level2';
  questions: number;
  time: string;
  isDemo?: boolean;
}

const QuizLanding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!user) {
        setHasSubscription(false);
        setIsLoading(false);
        return;
      }

      try {
        const hasValidSubscription = await checkUserSubscription(user.id);
        setHasSubscription(hasValidSubscription);
      } catch (error) {
        console.error('Error checking subscription:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSubscription();
  }, [user]);

  const quizzes: QuizCard[] = [
    {
      id: 'nfpa-1001-level1-full',
      title: 'NFPA 1001 Firefighter I',
      description: 'Complete certification exam preparation with 100 questions covering all Level I objectives',
      level: 'level1',
      questions: 100,
      time: '2 hours',
    },
    {
      id: 'nfpa-1001-level2-full',
      title: 'NFPA 1001 Firefighter II',
      description: 'Comprehensive Level II certification exam with 100 questions on advanced firefighting concepts',
      level: 'level2',
      questions: 100,
      time: '2 hours',
    },
    {
      id: 'nfpa-1001-level1-demo',
      title: 'Level I Demo Quiz',
      description: 'Try a sample of our Level I certification questions',
      level: 'level1',
      questions: 5,
      time: '10 minutes',
      isDemo: true,
    },
    {
      id: 'nfpa-1001-level2-demo',
      title: 'Level II Demo Quiz',
      description: 'Experience our Level II certification sample questions',
      level: 'level2',
      questions: 5,
      time: '10 minutes',
      isDemo: true,
    }
  ];

  const handleStartQuiz = (quiz: QuizCard) => {
    if (!user && !quiz.isDemo) {
      toast({
        title: "Sign in required",
        description: "Please sign in to access the full quizzes.",
        duration: 5000,
      });
      navigate('/sign-in');
      return;
    }

    if (!hasSubscription && !quiz.isDemo) {
      toast({
        title: "Subscription required",
        description: "Please subscribe to access the full certification exams.",
        duration: 5000,
      });
      navigate('/subscription');
      return;
    }

    navigate('/quiz', { 
      state: { 
        quizId: quiz.id,
        level: quiz.level,
        isFull: !quiz.isDemo,
        isDemo: quiz.isDemo
      } 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              2025 Firefighter Certification Exam Prep
            </h1>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              Practice with our comprehensive question banks for both NFPA 1001 Level I and Level II certification
            </p>
          </div>

          {!hasSubscription && (
            <div className="bg-gradient-to-r from-fire-50 to-amber-50 border border-fire-100 rounded-xl p-6 mb-10 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-fire-800 mb-2">Unlock Full Access</h2>
                  <p className="text-navy-700 mb-4 md:mb-0">
                    Get unlimited access to 200+ certification questions with detailed explanations
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/subscription')}
                  className="btn-primary"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {quizzes.map((quiz) => (
              <div 
                key={quiz.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
                  (hasSubscription || quiz.isDemo) ? 'cursor-pointer' : 'opacity-70'
                }`}
                onClick={() => handleStartQuiz(quiz)}
              >
                <div className={`p-1 ${quiz.level === 'level1' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      {quiz.level === 'level1' ? (
                        <Book className="text-blue-500 mr-3 mt-1" size={22} />
                      ) : (
                        <BookOpen className="text-red-500 mr-3 mt-1" size={22} />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{quiz.title}</h3>
                        <p className="text-navy-700 text-sm mt-1">{quiz.description}</p>
                      </div>
                    </div>
                    {quiz.isDemo && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Free
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center mt-4 text-sm text-navy-600">
                    <div className="flex items-center mr-4">
                      <span className="font-medium">{quiz.questions}</span>
                      <span className="ml-1">Questions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{quiz.time}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <div className="inline-flex items-center text-fire-600 font-medium">
                      Start Quiz
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">About Our Certification Exams</h2>
              <p className="text-navy-700 mb-4">
                Our practice exams are designed to prepare you for the NFPA 1001 Firefighter I and II certification exams. 
                Each question comes with detailed explanations to help you understand the material.
              </p>
              
              <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-2">What's Included:</h3>
              <ul className="list-disc list-inside space-y-1 text-navy-700 mb-4">
                <li>100 questions for Firefighter I certification</li>
                <li>100 questions for Firefighter II certification</li>
                <li>Detailed explanations for every question</li>
                <li>Instant scoring and performance tracking</li>
                <li>Accessible on any device</li>
              </ul>
              
              <p className="text-navy-700">
                Start with our free demo quizzes to get a feel for the exam format, or subscribe for full access to all 200+ questions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizLanding;
