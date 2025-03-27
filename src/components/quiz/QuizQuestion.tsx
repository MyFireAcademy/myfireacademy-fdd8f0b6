
import React from 'react';
import { Question } from '@/lib/quiz-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizQuestionProps {
  currentQuizData: Question | null;
  currentQuestion: number;
  questions: Question[];
  selectedOption: number | null;
  showExplanation: boolean;
  handleOptionSelect: (optionIndex: number) => void;
  handleCheckAnswer: () => void;
  handlePrevQuestion: () => void;
  handleNextQuestion: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  currentQuizData,
  currentQuestion,
  questions,
  selectedOption,
  showExplanation,
  handleOptionSelect,
  handleCheckAnswer,
  handlePrevQuestion,
  handleNextQuestion,
}) => {
  if (!currentQuizData) return null;

  return (
    <div className="p-6 md:p-8">
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
  );
};

export default QuizQuestion;
