
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuizResultsProps {
  isFull: boolean;
  isDemo: boolean;
  currentLevel: 'level1' | 'level2';
  score: { level1: number; level2: number };
  questionsLength: number;
  levelIQuestionsLength: number;
  levelIIQuestionsLength: number;
  handleFinishQuiz: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  isFull,
  isDemo,
  currentLevel,
  score,
  questionsLength,
  levelIQuestionsLength,
  levelIIQuestionsLength,
  handleFinishQuiz,
}) => {
  return (
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
                {questionsLength}
              </p>
              <p className="text-navy-600 mt-2">
                {(currentLevel === 'level1' ? (score.level1 / questionsLength) * 100 : (score.level2 / questionsLength) * 100).toFixed(1)}% Correct
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-navy-800 font-medium">Level I</p>
                <p className="text-2xl font-bold text-fire-600">{score.level1}/{isDemo ? 5 : levelIQuestionsLength}</p>
                <p className="text-sm text-navy-600">{(score.level1 / (isDemo ? 5 : levelIQuestionsLength) * 100).toFixed(1)}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-navy-800 font-medium">Level II</p>
                <p className="text-2xl font-bold text-fire-600">{score.level2}/{isDemo ? 5 : levelIIQuestionsLength}</p>
                <p className="text-sm text-navy-600">{(score.level2 / (isDemo ? 5 : levelIIQuestionsLength) * 100).toFixed(1)}%</p>
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
  );
};

export default QuizResults;
