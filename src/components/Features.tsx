
import { CheckCircle, BookOpen, UserCheck, RefreshCw, Clock, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const { ref: featuresRef, inView: featuresInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section id="features" className="section bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef} 
          className={`max-w-3xl mx-auto text-center mb-16 ${
            titleInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <span className="chip mb-4">Why Choose Our Study Guide</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Everything You Need to Pass Your NFPA 1001 Exam
          </h2>
          <p className="text-lg text-navy-700">
            Our comprehensive study guide is designed by firefighting professionals to ensure 
            you have all the knowledge required to pass your certification exam.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            featuresInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Complete Question Database
            </h3>
            <p className="text-navy-700">
              Access every possible question you might encounter on your NFPA 1001 exam, with detailed explanations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Expert-Verified Content
            </h3>
            <p className="text-navy-700">
              All material is created and verified by active firefighting professionals with years of experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Practice Exams
            </h3>
            <p className="text-navy-700">
              Test your knowledge with multiple practice exams that simulate the real testing environment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <RefreshCw className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Guaranteed to Pass
            </h3>
            <p className="text-navy-700">
              We're so confident in our materials that we offer a 100% money-back guarantee if you don't pass.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Learn at Your Own Pace
            </h3>
            <p className="text-navy-700">
              Digital access allows you to study anytime, anywhere, on any device for maximum convenience.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
            <div className="w-12 h-12 bg-fire-100 rounded-full flex items-center justify-center mb-6">
              <Download className="text-fire-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Updates Included
            </h3>
            <p className="text-navy-700">
              Receive automatic updates whenever the NFPA standards change, ensuring your materials are always current.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
