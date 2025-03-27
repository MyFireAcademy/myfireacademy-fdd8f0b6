
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface QuizHeaderProps {
  currentLevel: 'level1' | 'level2';
  currentQuestion: number;
  questionsLength: number;
  isDemo: boolean;
  quizComplete: { level1: boolean; level2: boolean };
  handleChangeLevel: (level: 'level1' | 'level2') => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentLevel,
  currentQuestion,
  questionsLength,
  isDemo,
  quizComplete,
  handleChangeLevel,
}) => {
  return (
    <>
      <div className="bg-fire-600 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            {isDemo ? "2025 EXAM PREP: " : ""}
            NFPA 1001 {currentLevel === 'level1' ? 'Level I' : 'Level II'} Exam Questions
          </h1>
          <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
            Question {currentQuestion + 1} of {questionsLength}
          </div>
        </div>
        
        <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
          <div 
            className="bg-white h-full transition-all duration-300 ease-apple"
            style={{ width: `${((currentQuestion + 1) / questionsLength) * 100}%` }}
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
    </>
  );
};

export default QuizHeader;
