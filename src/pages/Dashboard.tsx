import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface QuizMetadata {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  estimatedTime: string;
  level: 'I' | 'II';
  progress?: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'level1' | 'level2'>('level1');
  
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
    // Pass the quiz ID to the quiz page to identify which test to load
    const level = quizId.includes('level1') ? 'level1' : 'level2';
    navigate('/quiz', { state: { quizId, level, isFull: true } });
    
    toast({
      title: "Starting Full Quiz",
      description: "The 100-question quiz is loading...",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Banner */}
          <div className="bg-fire-600 text-white rounded-2xl p-8 mb-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Your NFPA 1001 Study Portal!</h1>
                <p className="mb-6 md:mb-0 text-white/90">
                  Your purchase includes full access to both Level I and Level II certification exams with 100 questions each.
                </p>
              </div>
            </div>
          </div>

          {/* Quiz Section */}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
