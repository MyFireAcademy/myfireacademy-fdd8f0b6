import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { checkPaymentFromUrl, checkUserSubscription, clearSubscriptionCache } from '@/utils/paymentVerification';

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
  const [username, setUsername] = useState<string>('');
  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [isNewPurchase, setIsNewPurchase] = useState(false);
  
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
        
        clearSubscriptionCache(user.id);
        const isPaymentVerified = await checkPaymentFromUrl(searchParams, user.id);
        
        if (isPaymentVerified) {
          setIsNewPurchase(true);
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
        
        clearSubscriptionCache(user.id);
        const hasValidSubscription = await checkUserSubscription(user.id, true);
        
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
  
  const exams: QuizMetadata[] = [
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

  const handleStartExam = (quizId: string) => {
    const level = quizId.includes('level1') ? 'level1' : 'level2';
    navigate('/quiz', { state: { quizId, level, isFull: true } });
    
    toast({
      title: "Starting Full Exam",
      description: "The 100-question exam is loading...",
      duration: 3000,
    });
  };

  const handleViewAllQuizzes = () => {
    navigate('/quiz');
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

          {isNewPurchase && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 shadow-sm">
              <h2 className="text-xl font-semibold text-green-800 mb-2">Thank You for Your Purchase!</h2>
              <p className="text-green-700 mb-4">
                You now have full access to both Level I and Level II certification exams. 
                Begin your preparation by selecting an exam below.
              </p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-navy-900">Available Certification Exams</h2>
                <p className="text-navy-700 mt-1">Select an exam to begin your assessment</p>
              </div>
              <button 
                onClick={handleViewAllQuizzes}
                className="btn-secondary flex items-center"
              >
                <BookOpen size={16} className="mr-2" />
                View Quiz Options
              </button>
            </div>
            
            <div className="p-6">
              {exams.map(exam => (
                <div key={exam.id} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <BookOpen className="text-fire-600 mr-2" size={20} />
                        <h3 className="text-xl font-semibold text-navy-900">{exam.title}</h3>
                      </div>
                      <p className="text-navy-700 mb-4 md:mb-0">{exam.description}</p>
                      <div className="flex flex-wrap gap-4 mt-2 mb-4 md:mb-0">
                        <span className="inline-flex items-center text-sm text-navy-600">
                          <span className="font-medium mr-1">{exam.questionCount}</span> Questions
                        </span>
                        <span className="inline-flex items-center text-sm text-navy-600">
                          <span className="font-medium mr-1">{exam.estimatedTime}</span> Estimated Time
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleStartExam(exam.id)}
                      className="btn-primary group self-start md:self-center"
                    >
                      Start Exam
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
