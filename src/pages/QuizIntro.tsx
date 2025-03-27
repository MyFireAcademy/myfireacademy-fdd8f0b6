
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Book, BookOpen, Clock, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { checkUserSubscription } from '@/utils/paymentVerification';

const QuizIntro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get quiz parameters from location state
  const state = location.state as {
    quizId?: string;
    level?: 'level1' | 'level2';
    isFull?: boolean;
    isDemo?: boolean;
    title?: string;
    description?: string;
    questions?: number;
    time?: string;
  } || {};
  
  const isLevelOne = state.level === 'level1';

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

  if (!state.quizId) {
    // If accessed directly without state, redirect to quizzes page
    navigate('/quizzes');
    return null;
  }

  const handleStartQuiz = () => {
    navigate('/quiz', { 
      state: { 
        quizId: state.quizId,
        level: state.level,
        isFull: state.isFull,
        isDemo: state.isDemo
      } 
    });
  };

  const handleSubscribe = () => {
    // If not logged in, prompt to sign in
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to access the full quizzes.",
        duration: 5000,
      });
      navigate('/sign-in');
      return;
    }

    navigate('/subscription');
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
              {/* Quiz Header Banner */}
              <div className={`${isLevelOne ? 'bg-blue-600' : 'bg-red-600'} text-white p-8`}>
                <div className="flex items-center mb-4">
                  {isLevelOne ? (
                    <Book className="mr-4" size={28} />
                  ) : (
                    <BookOpen className="mr-4" size={28} />
                  )}
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {state.title || (isLevelOne ? 'NFPA 1001 Firefighter I' : 'NFPA 1001 Firefighter II')}
                  </h1>
                </div>
                <p className="text-lg md:text-xl opacity-90">
                  {state.description || (isLevelOne 
                    ? 'Complete certification exam preparation with questions covering all Level I objectives' 
                    : 'Comprehensive Level II certification exam with questions on advanced firefighting concepts')}
                </p>
              </div>
              
              {/* Quiz Details */}
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-navy-900 mb-4">Exam Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-navy-800">Exam Format</h3>
                        {(state.isDemo || hasSubscription) && (
                          <span className={`${state.isDemo ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} text-xs font-semibold px-2.5 py-0.5 rounded`}>
                            {state.isDemo ? 'Free Demo' : 'Premium'}
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <span className="font-medium">{state.questions || (state.isDemo ? 5 : 100)}</span>
                          </div>
                          <span>Multiple-choice questions</span>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <Clock size={16} />
                          </div>
                          <span>{state.time || (state.isDemo ? '10 minutes' : '2 hours')} estimated time</span>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <CheckCircle size={16} />
                          </div>
                          <span>Immediate feedback and explanations</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-medium text-navy-800 mb-4">What You'll Learn</h3>
                      <ul className="space-y-3 text-navy-700">
                        {isLevelOne ? (
                          <>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Firefighting and rescue operations fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Fire behavior and building construction basics</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Personal protective equipment and SCBA usage</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Emergency response protocols and procedures</span>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Advanced firefighting tactics and strategies</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Fire inspection and prevention techniques</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Incident command system application</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Leadership and management in emergency situations</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 md:mr-8">
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">Ready to test your knowledge?</h3>
                      <p className="text-navy-700">
                        This quiz will help you prepare for your certification exam with realistic questions and detailed explanations.
                      </p>
                    </div>
                    
                    {(state.isDemo || hasSubscription) ? (
                      <Button 
                        onClick={handleStartQuiz}
                        className="bg-fire-600 hover:bg-fire-700 text-white px-6 py-6 h-auto text-lg font-medium rounded-lg"
                      >
                        Start Quiz <ArrowRight className="ml-2" size={20} />
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubscribe}
                        className="bg-fire-600 hover:bg-fire-700 text-white px-6 py-6 h-auto text-lg font-medium rounded-lg"
                      >
                        Subscribe to Access <Shield className="ml-2" size={20} />
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Additional Info */}
                {(!state.isDemo && !hasSubscription) && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">Premium Content</h3>
                    <p className="text-amber-700 mb-4">
                      This full certification practice exam is available with a subscription. 
                      Subscribe today to access all 200+ questions with detailed explanations.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => navigate('/quizzes')}
                      className="bg-white hover:bg-gray-50 text-navy-700 border-amber-300"
                    >
                      Try Our Free Demo First
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizIntro;
