
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import QuizLayout from '@/components/quiz/QuizLayout';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';
import AuthDialog from '@/components/quiz/AuthDialog';
import UpgradeDialog from '@/components/quiz/UpgradeDialog';
import { useQuiz } from '@/hooks/useQuiz';
import { useAuth } from '@/contexts/AuthContext';

const Quiz = () => {
  const location = useLocation();
  const state = location.state as { quizId?: string; level?: 'level1' | 'level2'; isFull?: boolean; isDemo?: boolean; } || {};
  const searchParams = new URLSearchParams(location.search);
  const { user } = useAuth();
  
  const initialLevel = searchParams.get('level') as 'level1' | 'level2' || state.level || 'level1';
  const initialIsFull = searchParams.get('isFull') === 'true' || state.isFull || false;
  const initialIsDemo = state.isDemo || false;
  
  const {
    isLoading,
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
    questions,
    hasQuestions,
    currentQuizData,
    shouldShowFinalResults,
    setShowAuthDialog,
    setShowUpgradeDialog,
    handleOptionSelect,
    handleCheckAnswer,
    handleNextQuestion,
    handlePrevQuestion,
    handleChangeLevel,
    handleFinishQuiz,
    handleUpgradeResponse,
    levelIQuestionsLength,
    levelIIQuestionsLength
  } = useQuiz({
    initialLevel,
    initialIsFull,
    initialIsDemo
  });

  if (isLoading) {
    return <QuizLayout isLoading />;
  }

  if (!hasQuestions && !shouldShowFinalResults) {
    return (
      <QuizLayout>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Quiz Not Available</h1>
            <p className="text-navy-700 mb-6">
              The quiz for {currentLevel === 'level1' ? 'Level I' : 'Level II'} is currently being updated.
              Please check back later or try another level.
            </p>
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="btn-primary w-full"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </QuizLayout>
    );
  }

  if (shouldShowFinalResults) {
    return (
      <QuizLayout>
        <QuizResults 
          isFull={isFull}
          isDemo={isDemo}
          currentLevel={currentLevel}
          score={score}
          questionsLength={questions.length}
          levelIQuestionsLength={levelIQuestionsLength}
          levelIIQuestionsLength={levelIIQuestionsLength}
          handleFinishQuiz={handleFinishQuiz}
        />
        
        <UpgradeDialog 
          open={showUpgradeDialog} 
          onOpenChange={setShowUpgradeDialog}
          onResponse={handleUpgradeResponse}
        />
      </QuizLayout>
    );
  }
  
  return (
    <QuizLayout>
      <div className="max-w-3xl mx-auto">
        {!user && !isDemo && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-4 flex items-center justify-between">
              <p className="text-navy-700">Sign in to save your progress and access all questions.</p>
              <button 
                onClick={() => setShowAuthDialog(true)} 
                className="bg-fire-600 hover:bg-fire-700 text-white px-4 py-2 rounded"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <QuizHeader
            currentLevel={currentLevel}
            currentQuestion={currentQuestion}
            questionsLength={questions.length}
            isDemo={isDemo}
            quizComplete={quizComplete}
            handleChangeLevel={handleChangeLevel}
          />
          
          <QuizQuestion 
            currentQuizData={currentQuizData}
            currentQuestion={currentQuestion}
            questions={questions}
            selectedOption={selectedOption}
            showExplanation={showExplanation}
            handleOptionSelect={handleOptionSelect}
            handleCheckAnswer={handleCheckAnswer}
            handlePrevQuestion={handlePrevQuestion}
            handleNextQuestion={handleNextQuestion}
          />
        </div>

        <AuthDialog 
          open={showAuthDialog} 
          onOpenChange={setShowAuthDialog} 
        />

        <UpgradeDialog 
          open={showUpgradeDialog} 
          onOpenChange={setShowUpgradeDialog}
          onResponse={handleUpgradeResponse}
        />
      </div>
    </QuizLayout>
  );
};

export default Quiz;
