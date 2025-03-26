import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { checkPaymentFromUrl, checkUserSubscription } from '@/utils/paymentVerification';

interface QuizMetadata {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  estimatedTime: string;
  level: 'I' | 'II';
  progress?: number;
}

interface ExamAttempt {
  id: string;
  level: string;
  score: number;
  total_questions: number;
  completed_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'level1' | 'level2'>('level1');
  const [username, setUsername] = useState<string>('');
  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubscription, setHasSubscription] = useState(false);
  
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    const checkPaymentStatus = async () => {
      if (searchParams.has('payment_success') || 
          searchParams.has('session_id') || 
          searchParams.has('payment_intent')) {
        
        const isPaymentVerified = await checkPaymentFromUrl(searchParams, user.id);
        
        if (isPaymentVerified) {
          toast({
            title: "Payment Verified",
            description: "Thank you for your purchase! You now have full access to the study materials.",
            duration: 4000,
          });
          
          navigate('/dashboard', { replace: true });
          setHasSubscription(true);
        }
      }
    };
    
    checkPaymentStatus();
    
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        
        const hasValidSubscription = await checkUserSubscription(user.id);
        
        if (!hasValidSubscription) {
          setHasSubscription(false);
          toast({
            title: "Subscription Required",
            description: "Please subscribe to access the study materials.",
            duration: 4000,
          });
          navigate('/subscription');
          return;
        }
        
        setHasSubscription(true);
        
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single();
        
        if (profileError) {
          throw profileError;
        }
        
        if (profileData) {
          setUsername(profileData.username || user.email?.split('@')[0] || 'User');
        }
        
        const { data: attemptsData, error: attemptsError } = await supabase
          .from('exam_attempts')
          .select('*')
          .order('completed_at', { ascending: false });
        
        if (attemptsError) {
          throw attemptsError;
        }
        
        if (attemptsData) {
          setExamAttempts(attemptsData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast({
          title: "Error Loading Data",
          description: "Failed to load your profile data. Please try again.",
          variant: "destructive",
          duration: 4000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [user, navigate, toast, location.search]);
  
  const quizzes: QuizMetadata[] = [
    {
      id: 'nfpa-1001-level1-full',
      title: 'NFPA 1001 Firefighter I',
      description: 'Complete certification exam preparation with 100 questions covering all Level I objectives',
      questionCount: 100,
      estimatedTime: '2 hours',
      level: 'I',
      progress: 0
    },
    {
      id: 'nfpa-1001-level2-full',
      title: 'NFPA 1001 Firefighter II',
      description: 'Comprehensive Level II certification exam with 100 questions on advanced firefighting concepts',
      questionCount: 100,
      estimatedTime: '2 hours',
      level: 'II',
      progress: 0
    }
  ];

  const handleStartQuiz = (quizId: string) => {
    const level = quizId.includes('level1') ? 'level1' : 'level2';
    navigate('/quiz', { state: { quizId, level, isFull: true } });
    
    toast({
      title: "Starting Full Quiz",
      description: "The 100-question quiz is loading...",
      duration: 3000,
    });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600"></div>
      </div>
    );
  }

  if (!hasSubscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Subscription Required</h2>
          <p className="text-navy-700 mb-6">You need to subscribe to access the study materials.</p>
          <button 
            onClick={() => navigate('/subscription')}
            className="btn-primary"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="bg-fire-600 text-white rounded-2xl p-8 mb-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome, {username}!</h1>
                <p className="mb-6 md:mb-0 text-white/90">
                  Your purchase includes full access to both Level I and Level II certification exams with 100 questions each.
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="self-start bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg flex items-center transition-colors"
              >
                <LogOut size={18} className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('level1')}
                className={`flex-1 py-4 text-center font-medium transition-all duration-200 ${
                  activeTab === 'level1' 
                    ? 'text-fire-600 border-b-2 border-fire-600' 
                    : 'text-navy-600 hover:text-fire-600'
                }`}
              >
                Level I Certification
              </button>
              <button
                onClick={() => setActiveTab('level2')}
                className={`flex-1 py-4 text-center font-medium transition-all duration-200 ${
                  activeTab === 'level2' 
                    ? 'text-fire-600 border-b-2 border-fire-600' 
                    : 'text-navy-600 hover:text-fire-600'
                }`}
              >
                Level II Certification
              </button>
            </div>
            
            <div className="p-6">
              {quizzes
                .filter(quiz => 
                  activeTab === 'level1' ? quiz.level === 'I' : quiz.level === 'II'
                )
                .map(quiz => (
                  <div key={quiz.id} className="mb-6 last:mb-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <BookOpen className="text-fire-600 mr-2" size={20} />
                          <h3 className="text-xl font-semibold text-navy-900">{quiz.title}</h3>
                        </div>
                        <p className="text-navy-700 mb-4 md:mb-0">{quiz.description}</p>
                        <div className="flex flex-wrap gap-4 mt-2 mb-4 md:mb-0">
                          <span className="inline-flex items-center text-sm text-navy-600">
                            <span className="font-medium mr-1">{quiz.questionCount}</span> Questions
                          </span>
                          <span className="inline-flex items-center text-sm text-navy-600">
                            <span className="font-medium mr-1">{quiz.estimatedTime}</span> Estimated Time
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleStartQuiz(quiz.id)}
                        className="btn-primary group self-start md:self-center"
                      >
                        Start Quiz
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {examAttempts.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-navy-900">Your Exam History</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-navy-700 border-b">
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Level</th>
                        <th className="pb-3 font-medium">Score</th>
                        <th className="pb-3 font-medium">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examAttempts.map((attempt) => (
                        <tr key={attempt.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3">
                            {new Date(attempt.completed_at).toLocaleDateString()}
                          </td>
                          <td className="py-3">
                            {attempt.level === 'level1' ? 'Level I' : 'Level II'}
                          </td>
                          <td className="py-3">
                            {attempt.score}/{attempt.total_questions}
                          </td>
                          <td className="py-3">
                            {Math.round((attempt.score / attempt.total_questions) * 100)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
