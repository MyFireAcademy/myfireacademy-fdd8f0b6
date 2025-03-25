
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { levelIQuizData, levelIIQuizData, Question } from '@/lib/quiz-data';
import { useToast } from '@/hooks/use-toast';

type QuizLevel = 'level1' | 'level2';
type LocationState = {
  quizId?: string;
  level?: QuizLevel;
  isFull?: boolean;
};

const Quiz = () => {
  const location = useLocation();
  const state = location.state as LocationState || {};
  
  const [currentLevel, setCurrentLevel] = useState<QuizLevel>(state.level || 'level1');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ level1: 0, level2: 0 });
  const [quizComplete, setQuizComplete] = useState({ level1: false, level2: false });
  const [isFull, setIsFull] = useState(state.isFull || false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get questions based on current level
  const questions = currentLevel === 'level1' ? levelIQuizData : levelIIQuizData;
  
  // Check if questions exist for the current level
  const hasQuestions = questions && questions.length > 0;
  
  // Safely get current quiz data only if questions exist
  const currentQuizData = hasQuestions ? questions[currentQuestion] : null;

  useEffect(() => {
    // Reset when changing levels
    if (currentLevel) {
      setCurrentQuestion(0);
      setSelectedOption(null);
      setShowExplanation(false);
      
      // If no questions available for this level, show toast and switch back to level1
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
    // If we're coming from the dashboard with a specific quiz ID
    if (state.quizId) {
      const level = state.quizId.includes('level1') ? 'level1' : 'level2';
      setCurrentLevel(level);
      setIsFull(state.isFull || false);
      
      // If no questions available for this level, show toast and switch to level1
      if (level === 'level2' && (!levelIIQuizData || levelIIQuizData.length === 0)) {
        toast({
          title: "Level II Quiz Not Available",
          description: "The Level II quiz is currently being updated. Please try Level I.",
          variant: "destructive",
        });
        setCurrentLevel('level1');
      }
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

  const handleNextQuestion = () => {
    if (!hasQuestions) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      if (currentLevel === 'level1') {
        setQuizComplete(prev => ({ ...prev, level1: true }));
        toast({
          title: "Level I Quiz Completed!",
          description: `Your score: ${score.level1}/${questions.length}`,
        });
        // If not full quiz, move to level 2
        if (!isFull) {
          setCurrentLevel('level2');
        }
      } else {
        setQuizComplete(prev => ({ ...prev, level2: true }));
        toast({
          title: "Level II Quiz Completed!",
          description: `Your score: ${score.level2}/${questions.length}`,
        });
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
    toast({
      title: "Quiz Completed!",
      description: "You've completed the quiz. Your final score is displayed.",
      duration: 5000,
    });
    
    // In a real app, we might save the score to the user's profile here
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  // Only show results for the current level if we came from dashboard (full quiz mode)
  const shouldShowFinalResults = isFull ? 
    (currentLevel === 'level1' && quizComplete.level1) || 
    (currentLevel === 'level2' && quizComplete.level2) : 
    (quizComplete.level1 && quizComplete.level2);

  // If no questions available, show a message
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
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Quiz Completed!</h1>
            
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
                    <p className="text-2xl font-bold text-fire-600">{score.level1}/{levelIQuizData.length}</p>
                    <p className="text-sm text-navy-600">{(score.level1 / levelIQuizData.length * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-navy-800 font-medium">Level II</p>
                    <p className="text-2xl font-bold text-fire-600">{score.level2}/{levelIIQuizData.length}</p>
                    <p className="text-sm text-navy-600">{(score.level2 / levelIIQuizData.length * 100).toFixed(1)}%</p>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleFinishQuiz}
              className="btn-primary w-full"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          {/* Quiz Header */}
          <div className="bg-fire-600 text-white p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">NFPA 1001 {currentLevel === 'level1' ? 'Level I' : 'Level II'} Quiz</h1>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300 ease-apple"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Tabs for Level I and Level II - Only show if not in full quiz mode */}
          {!isFull && (
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
          )}
          
          {/* Question Content */}
          <div className="p-6 md:p-8">
            {currentQuizData && (
              <>
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  {currentQuizData.question}
                </h2>
                
                {/* Options */}
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
                
                {/* Explanation */}
                {showExplanation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 animate-fade-in">
                    <h3 className="font-semibold text-navy-800 mb-2">Explanation:</h3>
                    <p className="text-navy-700">{currentQuizData.explanation}</p>
                  </div>
                )}
              </>
            )}
            
            {/* Action Buttons */}
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
