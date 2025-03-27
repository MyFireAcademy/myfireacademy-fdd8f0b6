
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface QuizLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({ children, isLoading = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-50 py-16 px-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600"></div>
          </div>
        ) : (
          children
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizLayout;
