
import { Shield, BookOpen, Award, RefreshCw } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Guarantee = () => {
  const { ref: guaranteeRef, inView: guaranteeInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section id="guarantee" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <div 
          ref={guaranteeRef} 
          className={`max-w-4xl mx-auto ${
            guaranteeInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <span className="chip mb-4">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              100% Money-Back Guarantee
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              We're so confident in our study materials that if you don't pass your NFPA 1001 exam, 
              we'll refund your entire purchase.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Shield Image */}
              <div className="w-full md:w-2/5 bg-fire-600 text-white p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <Shield className="w-24 h-24 mb-6" />
                <h3 className="text-2xl font-bold mb-4">100% Money-Back Guarantee</h3>
                <p className="text-white/90">
                  If you don't pass, we'll refund your entire purchase — no questions asked.
                </p>
              </div>

              {/* Right side - How it works */}
              <div className="w-full md:w-3/5 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">
                  How Our Guarantee Works
                </h3>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fire-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-fire-600">1</span>
                    </div>
                    <div>
                      <p className="text-navy-800 font-medium">
                        Study with our comprehensive NFPA 1001 guide
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fire-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-fire-600">2</span>
                    </div>
                    <div>
                      <p className="text-navy-800 font-medium">
                        Take your exam with confidence
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fire-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-fire-600">3</span>
                    </div>
                    <div>
                      <p className="text-navy-800 font-medium">
                        If you don't pass, simply send us your exam results
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fire-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-fire-600">4</span>
                    </div>
                    <div>
                      <p className="text-navy-800 font-medium">
                        We'll refund 100% of your purchase price - no questions asked
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-navy-600 mt-8 italic">
                  * Terms and conditions apply. Refund request must be submitted within 30 days of exam date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
