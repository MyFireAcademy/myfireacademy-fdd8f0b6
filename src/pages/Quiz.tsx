
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, ShieldAlert, Mail, Lock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { levelIQuizData, levelIIQuizData, Question } from '@/lib/quiz-data';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

type QuizLevel = 'level1' | 'level2';
type LocationState = {
  quizId?: string;
  level?: QuizLevel;
  isFull?: boolean;
  isDemo?: boolean;
};

interface QuizProps {
  initialLevel?: QuizLevel;
  initialIsFull?: boolean;
  initialIsDemo?: boolean;
  quizId?: string;
}

const Quiz = ({ 
  initialLevel = 'level1', 
  initialIsFull = false, 
  initialIsDemo = false,
  quizId = 'nfpa-1001-level1-full'
}: QuizProps) => {
  const location = useLocation();
  const state = location.state as LocationState || {};
  
  const { user, isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [currentLevel, setCurrentLevel] = useState<QuizLevel>(initialLevel || state.level || 'level1');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ level1: 0, level2: 0 });
  const [quizComplete, setQuizComplete] = useState({ level1: false, level2: false });
  const [isFull, setIsFull] = useState(initialIsFull || state.isFull || false);
  const [isDemo, setIsDemo] = useState(initialIsDemo || state.isDemo || false);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const allQuestions = currentLevel === 'level1' ? levelIQuizData : levelIIQuizData;
  
  useEffect(() => {
    if (isFull && !isDemo && !isAuthenticated()) {
      setShowAuthDialog(true);
    }
  }, [isFull, isDemo, isAuthenticated]);
  
  const questions = isDemo 
    ? allQuestions.slice(0, 5) 
    : isFull && !isAuthenticated() 
      ? allQuestions.slice(0, 5) // Show only 5 questions to unauthenticated users even if they try to access full exam
      : allQuestions;
  
  const hasQuestions = questions && questions.length > 0;
  
  const currentQuizData = hasQuestions && currentQuestion < questions.length ? questions[currentQuestion] : null;

  const handleSignIn = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      await signIn(email, password);
      setShowAuthDialog(false);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleAuthPrompt = (action: 'signin' | 'signup' | 'cancel') => {
    setShowAuthDialog(false);
    if (action === 'signin') {
      navigate('/sign-in');
    } else if (action === 'signup') {
      navigate('/profile-setup');
    } else {
      setIsDemo(true);
      setIsFull(false);
      toast({
        title: "Demo Mode Activated",
        description: "You'll see 5 sample questions. Sign in to access the full exam.",
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    if (currentLevel) {
      setCurrentQuestion(0);
      setSelectedOption(null);
      setShowExplanation(false);
      
      if (currentLevel === 'level2' && (!levelIIQuizData || levelIIQuizData.length === 0)) {
        toast({
          title: "Level II Exam Not Available",
          description: "The Level II exam is currently being updated. Please try Level I.",
          variant: "destructive",
        });
        setCurrentLevel('level1');
      }
    }
  }, [currentLevel, toast]);

  useEffect(() => {
    if (state.quizId) {
      const level = state.quizId.includes('level1') ? 'level1' : 'level2';
      setCurrentLevel(level);
      setIsFull(state.isFull || false);
      
      if (level === 'level2' && (!levelIIQuizData || levelIIQuizData.length === 0)) {
        toast({
          title: "Level II Exam Not Available",
          description: "The Level II exam is currently being updated. Please try Level I.",
          variant: "destructive",
        });
        setCurrentLevel('level1');
      }
    }
    
    if (state.isDemo) {
      setIsDemo(true);
      toast({
        title: "Exam Demo Mode",
        description: "You're trying our 2025 Exam Prep with 5 questions from each level.",
        duration: 5000,
      });
    }
  }, [state, toast]);

  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
  };

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
          title: "Level I Exam Completed!",
          description: `Your score: ${score.level1}/${questions.length}`,
        });
        
        saveExamAttempt('level1', score.level1, questions.length);
        
        if (!isFull || isDemo) {
          setCurrentLevel('level2');
        }
      } else {
        setQuizComplete(prev => ({ ...prev, level2: true }));
        toast({
          title: "Level II Exam Completed!",
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

  const handleFinishExam = () => {
    if (isDemo || (!isAuthenticated() && isFull)) {
      setShowUpgradeDialog(true);
    } else {
      toast({
        title: "Exam Completed!",
        description: "You've completed the exam. Your final score is displayed.",
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

  const shouldShowFinalResults = isFull ? 
    (currentLevel === 'level1' && quizComplete.level1) || 
    (currentLevel === 'level2' && quizComplete.level2) : 
    (quizComplete.level1 && quizComplete.level2);

  if (!hasQuestions && !shouldShowFinalResults) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Exam Not Available</h1>
            <p className="text-navy-700 mb-6">
              The exam for {currentLevel === 'level1' ? 'Level I' : 'Level II'} is currently being updated.
              Please check back later or try another level.
            </p>
            <button 
              onClick={() => navigate('/dashboard')}
              className="btn-primary w-full"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (shouldShowFinalResults) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500 w-20 h-20" />
            </div>
            <h1 className="text-3xl font-bold text-navy-900 mb-4">
              {isDemo ? "2025 Exam Prep Completed!" : "Exam Completed!"}
            </h1>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4 text-lg">Your Results:</h3>
              
              {isFull ? (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-navy-800 font-medium">
                    {currentLevel === 'level1' ? 'Level I' : 'Level II'}
                  </p>
                  <p className="text-4xl font-bold text-fire-600 mt-2">
                    {currentLevel === 'level1' ? score.level1 : score.level2}/
                    {questions.length}
                  </p>
                  <p className="text-navy-600 mt-2">
                    {(currentLevel === 'level1' ? (score.level1 / questions.length) * 100 : (score.level2 / questions.length) * 100).toFixed(1)}% Correct
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-navy-800 font-medium">Level I</p>
                    <p className="text-2xl font-bold text-fire-600">{score.level1}/{isDemo ? 5 : levelIQuizData.length}</p>
                    <p className="text-sm text-navy-600">{(score.level1 / (isDemo ? 5 : levelIQuizData.length) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-navy-800 font-medium">Level II</p>
                    <p className="text-2xl font-bold text-fire-600">{score.level2}/{isDemo ? 5 : levelIIQuizData.length}</p>
                    <p className="text-sm text-navy-600">{(score.level2 / (isDemo ? 5 : levelIIQuizData.length) * 100).toFixed(1)}%</p>
                  </div>
                </div>
              )}
            </div>
            
            {isDemo && (
              <p className="text-navy-700 mb-6">
                This was just a sample of our comprehensive 2025 Exam Prep. Get access to all 200 questions with the full package.
              </p>
            )}
            
            <button 
              onClick={handleFinishExam}
              className="btn-primary w-full"
            >
              {isDemo ? "See Next Steps" : "Return to Dashboard"}
            </button>
          </div>
        </div>

        <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl text-center">Ready to Pass Your Exam?</DialogTitle>
              <DialogDescription className="text-center">
                Would you like to unlock the full 2025 Exam Prep with 200 practice questions?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-center text-navy-700">
                Get complete access to both Level I and Level II certification exam questions with detailed explanations.
              </p>
            </div>
            <DialogFooter className="sm:justify-center sm:space-x-4 sm:flex-row">
              <Button 
                variant="secondary"
                onClick={() => handleUpgradeResponse(false)}
              >
                Not now
              </Button>
              <Button
                className="bg-fire-600 hover:bg-fire-700 text-white" 
                onClick={() => handleUpgradeResponse(true)}
              >
                Yes, get full access
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-fire-600 text-white p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">
                {isDemo ? "2025 EXAM PREP: " : ""}
                NFPA 1001 {currentLevel === 'level1' ? 'Level I' : 'Level II'} Exam Questions
              </h1>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            
            <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300 ease-apple"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex border-b">
            <button
              onClick={() => handleChangeLevel('level1')}
              className={`flex-1 py-3 text-center font-medium transition-all duration-200 ${
                currentLevel === 'level1' 
                  ? 'text-fire-600 border-b-2 border-fire-600' 
                  : 'text-navy-600 hover:text-fire-600'
              }`}
            >
              Level I {quizComplete.level1 && <CheckCircle className="inline-block ml-2" size={16} />}
            </button>
            <button
              onClick={() => handleChangeLevel('level2')}
              className={`flex-1 py-3 text-center font-medium transition-all duration-200 ${
                currentLevel === 'level2' 
                  ? 'text-fire-600 border-b-2 border-fire-600' 
                  : 'text-navy-600 hover:text-fire-600'
              }`}
            >
              Level II {quizComplete.level2 && <CheckCircle className="inline-block ml-2" size={16} />}
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            {currentQuizData && (
              <>
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  {currentQuizData.question}
                </h2>
                
                <div className="space-y-3 mb-8">
                  {currentQuizData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border ${
                        selectedOption === index
                          ? index === currentQuizData.correctAnswer && showExplanation
                            ? 'bg-green-50 border-green-500'
                            : selectedOption !== currentQuizData.correctAnswer && showExplanation
                            ? 'bg-red-50 border-red-500'
                            : 'bg-fire-50 border-fire-500'
                          : index === currentQuizData.correctAnswer && showExplanation
                          ? 'bg-green-50 border-green-500'
                          : 'border-gray-200 hover:border-fire-300 hover:bg-fire-50'
                      } transition-all duration-200`}
                      disabled={showExplanation}
                    >
                      <div className="flex items-start">
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
                          selectedOption === index
                            ? index === currentQuizData.correctAnswer && showExplanation
                              ? 'bg-green-500 text-white'
                              : selectedOption !== currentQuizData.correctAnswer && showExplanation
                              ? 'bg-red-500 text-white'
                              : 'bg-fire-500 text-white'
                            : index === currentQuizData.correctAnswer && showExplanation
                            ? 'bg-green-500 text-white'
                            : 'border border-gray-300 text-gray-500'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="pt-0.5">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {showExplanation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 animate-fade-in">
                    <h3 className="font-semibold text-navy-800 mb-2">Explanation:</h3>
                    <p className="text-navy-700">{currentQuizData.explanation}</p>
                  </div>
                )}
              </>
            )}
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevQuestion}
                className={`btn-secondary flex items-center ${
                  currentQuestion === 0 ? 'invisible' : ''
                }`}
              >
                <ArrowLeft size={18} className="mr-2" />
                Previous
              </button>
              
              {!showExplanation ? (
                <button
                  onClick={handleCheckAnswer}
                  className="btn-primary"
                  disabled={selectedOption === null}
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="btn-primary flex items-center"
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                  <ArrowRight size={18} className="ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Required Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Welcome to Firefighter Exam Prep</DialogTitle>
              <DialogDescription className="text-center text-gray-500 mt-2">Sign in to access the full exam</DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSignIn} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Your Password</Label>
                <div className="relative">
                  <Input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    className="pl-10"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-fire-600 hover:bg-fire-700 text-white font-medium py-3"
                disabled={authLoading}
              >
                {authLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>
            
            <div className="mt-6 text-center space-y-2">
              <a href="#" className="text-fire-600 hover:underline text-sm">
                Forgot your password?
              </a>
              <div className="text-sm text-gray-500">
                Don't have an account? <button 
                  onClick={() => handleAuthPrompt('signup')}
                  className="text-fire-600 hover:underline font-medium"
                >
                  Sign up
                </button>
              </div>
              <div className="pt-4 border-t mt-4">
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => handleAuthPrompt('cancel')}
                >
                  Try Demo (5 Questions)
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upgrade Dialog */}
      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Ready to Pass Your Exam?</DialogTitle>
            <DialogDescription className="text-center">
              Would you like to unlock the full 2025 Exam Prep with 200 practice questions?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-navy-700">
              Get complete access to both Level I and Level II certification exam questions with detailed explanations.
            </p>
          </div>
          <DialogFooter className="sm:justify-center sm:space-x-4 sm:flex-row">
            <Button 
              variant="secondary"
              onClick={() => handleUpgradeResponse(false)}
            >
              Not now
            </Button>
            <Button
              className="bg-fire-600 hover:bg-fire-700 text-white" 
              onClick={() => handleUpgradeResponse(true)}
            >
              Yes, get full access
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Quiz;
