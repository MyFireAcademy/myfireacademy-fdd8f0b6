import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { levelIQuizData, levelIIQuizData, Question } from '@/lib/quiz-data';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

type QuizLevel = 'level1' | 'level2';
type LocationState = {
  quizId?: string;
  level?: QuizLevel;
  isFull?: boolean;
  isDemo?: boolean;
};

const Quiz = () => {
  const location = useLocation();
  const state = location.state as LocationState || {};
  
  const { user } = useAuth();

  const [currentLevel, setCurrentLevel] = useState<QuizLevel>(state.level || 'level1');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ level1: 0, level2: 0 });
  const [quizComplete, setQuizComplete] = useState({ level1: false, level2: false });
  const [isFull, setIsFull] = useState(state.isFull || false);
  const [isDemo, setIsDemo] = useState(state.isDemo || false);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const allQuestions = currentLevel === 'level1' ? levelIQuizData : levelIIQuizData;
  
  const questions = isDemo 
    ? allQuestions.slice(0, 5) 
    : allQuestions;
  
  const hasQuestions = questions && questions.length > 0;
  
  const currentQuizData = hasQuestions && currentQuestion < questions.length ? questions[currentQuestion] : null;

  useEffect(() => {
    if (currentLevel) {
      setCurrentQuestion(0);
      setSelectedOption(null);
      setShowExplanation(false);
      
      if (currentLevel === 'level2' && (!levelIIQuizData || levelIIQuizData.length === 0)) {
        toast({
          title: "Level II Quiz Not Available",
          description: "The Level II quiz is currently being updated. Please try Level I.",
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
          title: "Level II Quiz Not Available",
          description: "The Level II quiz is currently being updated. Please try Level I.",
          variant: "destructive",
        });
        setCurrentLevel('level1');
      }
    }
    
    if (state.isDemo) {
      setIsDemo(true);
      toast({
        title: "Quiz Demo Mode",
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
    if (isDemo) {
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
      navigate('/checkout');
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
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Quiz Not Available</h1>
            <p className="text-navy-700 mb-6">
              The quiz for {currentLevel === 'level1' ? 'Level I' : 'Level II'} is currently being updated.
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
              {isDemo ? "2025 Exam Prep Completed!" : "Quiz Completed!"}
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
              onClick={handleFinishQuiz}
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
    </div>
  );
};

export default Quiz;
