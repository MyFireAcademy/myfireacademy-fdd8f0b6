import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { levelIQuizData, levelIIQuizData, Question } from '@/lib/quiz-data';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { checkPaymentFromUrl, checkUserSubscription } from '@/utils/paymentVerification';

type QuizLevel = 'level1' | 'level2';

interface UseQuizProps {
  initialLevel?: QuizLevel;
  initialIsFull?: boolean;
  initialIsDemo?: boolean;
}

export const useQuiz = ({ 
  initialLevel = 'level1', 
  initialIsFull = false,
  initialIsDemo = false,
}: UseQuizProps = {}) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);

  const [isLoading, setIsLoading] = useState(true);
  const [hasPayment, setHasPayment] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<QuizLevel>(
    searchParams.get('level') as QuizLevel || initialLevel
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ level1: 0, level2: 0 });
  const [quizComplete, setQuizComplete] = useState({ level1: false, level2: false });
  const [isFull, setIsFull] = useState(
    searchParams.get('isFull') === 'true' || initialIsFull
  );
  const [isDemo, setIsDemo] = useState(initialIsDemo);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  
  // Quiz data based on current state
  const allQuestions = currentLevel === 'level1' ? levelIQuizData : levelIIQuizData;
  
  const questions = isDemo 
    ? allQuestions.slice(0, 5) 
    : isFull && !isAuthenticated() && !paymentVerified
      ? allQuestions.slice(0, 5) // Show only 5 questions to unauthenticated users
      : allQuestions;
  
  const hasQuestions = questions && questions.length > 0;
  const currentQuizData = hasQuestions && currentQuestion < questions.length ? questions[currentQuestion] : null;
  
  // Check if the quiz is complete
  const shouldShowFinalResults = isFull ? 
    (currentLevel === 'level1' && quizComplete.level1) || 
    (currentLevel === 'level2' && quizComplete.level2) : 
    (quizComplete.level1 && quizComplete.level2);

  // Check user access
  const checkAccess = async () => {
    setIsLoading(true);
    
    if (searchParams.has('payment_success') && user) {
      try {
        const isPaymentVerified = await checkPaymentFromUrl(searchParams, user.id);
        
        if (isPaymentVerified) {
          setPaymentVerified(true);
          setHasPayment(true);
          setIsFull(true);
          
          toast({
            title: "Payment Successful",
            description: "Thank you for your purchase! You now have full access to all study materials.",
            duration: 5000,
          });
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
      } finally {
        setIsLoading(false);
      }
    } 
    else if (user) {
      try {
        const hasSubscription = await checkUserSubscription(user.id);
        
        if (hasSubscription) {
          setHasPayment(true);
          setPaymentVerified(true);
          setIsFull(true);
        }
      } catch (error) {
        console.error('Error checking subscription:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAccess();
  }, [user, searchParams, navigate, toast, isAuthenticated]);

  // Option selection
  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
  };

  // Check answer
  const handleCheckAnswer = () => {
    if (!currentQuizData) return;
    
    if (selectedOption === null) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option before checking the answer.",
        variant: "destructive",
      });
      return;
    }

    setShowExplanation(true);

    if (selectedOption === currentQuizData.correctAnswer) {
      if (currentLevel === 'level1') {
        setScore(prev => ({ ...prev, level1: prev.level1 + 1 }));
      } else {
        setScore(prev => ({ ...prev, level2: prev.level2 + 1 }));
      }
    }
  };

  // Save exam attempt
  const saveExamAttempt = async (level: string, score: number, totalQuestions: number) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('exam_attempts')
        .insert({
          user_id: user.id,
          level,
          score,
          total_questions: totalQuestions,
        });
        
      if (error) throw error;
      
      console.log('Exam attempt saved successfully');
    } catch (error) {
      console.error('Error saving exam attempt:', error);
      toast({
        title: "Error Saving Results",
        description: "Your exam results couldn't be saved. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Navigation
  const handleNextQuestion = () => {
    if (!hasQuestions) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      if (currentLevel === 'level1') {
        setQuizComplete(prev => ({ ...prev, level1: true }));
        toast({
          title: "Level I Quiz Completed!",
          description: `Your score: ${score.level1}/${questions.length}`,
        });
        
        saveExamAttempt('level1', score.level1, questions.length);
        
        if (!isFull || isDemo) {
          setCurrentLevel('level2');
        }
      } else {
        setQuizComplete(prev => ({ ...prev, level2: true }));
        toast({
          title: "Level II Quiz Completed!",
          description: `Your score: ${score.level2}/${questions.length}`,
        });
        
        saveExamAttempt('level2', score.level2, questions.length);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handleChangeLevel = (level: QuizLevel) => {
    setCurrentLevel(level);
  };

  const handleFinishQuiz = () => {
    if (isDemo || (!isAuthenticated() && isFull)) {
      setShowUpgradeDialog(true);
    } else {
      toast({
        title: "Quiz Completed!",
        description: "You've completed the quiz. Your final score is displayed.",
        duration: 5000,
      });
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  const handleUpgradeResponse = (wantsToUpgrade: boolean) => {
    setShowUpgradeDialog(false);
    
    if (wantsToUpgrade) {
      if (!isAuthenticated()) {
        navigate('/sign-in');
        toast({
          title: "Please Sign In First",
          description: "Create an account or sign in to access the full exam.",
          duration: 5000,
        });
      } else {
        navigate('/checkout');
      }
    } else {
      navigate('/#testimonials');
    }
  };
  
  const setDemoMode = () => {
    setIsDemo(true);
    setIsFull(false);
    setShowAuthDialog(false);
    toast({
      title: "Demo Mode Activated",
      description: "You'll see 5 sample questions. Sign in to access the full exam.",
      duration: 5000,
    });
  };

  return {
    // State
    isLoading,
    hasPayment,
    currentLevel,
    currentQuestion,
    selectedOption,
    showExplanation,
    score,
    quizComplete,
    isFull,
    isDemo,
    showUpgradeDialog,
    showAuthDialog,
    paymentVerified,
    questions,
    hasQuestions,
    currentQuizData,
    shouldShowFinalResults,
    
    // Actions
    setShowAuthDialog,
    setShowUpgradeDialog,
    handleOptionSelect,
    handleCheckAnswer,
    handleNextQuestion,
    handlePrevQuestion,
    handleChangeLevel,
    handleFinishQuiz,
    handleUpgradeResponse,
    setDemoMode,
    
    // Data
    levelIQuestionsLength: levelIQuizData.length,
    levelIIQuestionsLength: levelIIQuizData.length
  };
};
