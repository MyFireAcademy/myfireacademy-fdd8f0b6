
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Book, Dumbbell, Clock, Users, Flag, Lightbulb, Heart, 
  ChevronRight, ShieldAlert, Megaphone
} from 'lucide-react';
import Play from '@/components/Play';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const NewToFirefighting = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Helmet>
        <title>New To Firefighting | MyFireAcademy</title>
        <meta name="description" content="A comprehensive guide for those looking to start a career in firefighting." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 md:pt-36">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 mb-10">
          <div className="absolute inset-0 bg-navy-900 opacity-5 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-fire-100 text-fire-700 font-medium text-sm px-3 py-1 rounded-full mb-4 animate-fade-up">
                CAREER GUIDE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 animate-fade-up relative">
                Starting Your <span className="text-fire-600 relative inline-block">
                  Firefighting Career
                  <svg className="absolute -bottom-3 left-0 w-full h-2 text-fire-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,0 C25,5 75,5 100,0 L100,10 L0,10 Z" fill="currentColor"/>
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-navy-700 mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Firefighting is a demanding but rewarding career that requires physical fitness, mental toughness,
                discipline, and strong teamwork. Get prepared with our comprehensive guide.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Button className="bg-fire-600 hover:bg-fire-700 text-white shadow-md hover:shadow-lg" onClick={() => navigate('/quiz')}>
                  Try Firefighting Quiz <ChevronRight size={16} className="ml-1" />
                </Button>
                <Button variant="outline" className="border-navy-800 text-navy-800 hover:bg-navy-50">
                  Watch Academy Tour <Play className="ml-1" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative Images */}
          <div className="hidden lg:block absolute -bottom-10 right-10 w-24 h-24 bg-fire-600 opacity-10 rounded-full animate-pulse"></div>
          <div className="hidden lg:block absolute top-20 left-10 w-32 h-32 bg-navy-600 opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </section>
        
        {/* Introduction Banner */}
        <section className="py-8 mb-16">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl overflow-hidden shadow-xl animate-fade-up">
              <div className="p-8 md:p-10 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-full">
                    <ShieldAlert size={40} className="text-fire-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Start Your Journey Prepared</h2>
                    <p className="text-white/80 max-w-3xl">
                      This guide will help newcomers understand what to expect when entering a firefighting academy 
                      and pursuing a career in the fire service. Knowledge is your best tool for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Cards - Reorganized for better flow */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Essential Knowledge</h2>
              <p className="text-navy-700 max-w-2xl mx-auto">
                Everything you need to know before starting your firefighting journey, from academy expectations to career advancement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Training Section Group */}
              <div className="lg:col-span-3 mb-8">
                <h3 className="text-2xl font-bold text-navy-800 mb-6 border-b border-gray-200 pb-2">Training & Education</h3>
              </div>
              
              {/* What to Expect */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-fire-600 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-fire-600 to-fire-700 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Book className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">What to Expect in the Fire Academy</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      The fire academy is a mix of classroom learning and hands-on training. You will study from the
                      IFSTA Essentials 7 textbook and cover topics like fire behavior, hose operations, search and rescue,
                      and more. Be prepared for a lot of studying, physical training, and high expectations.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-fire-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Terminology */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-navy-800 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Megaphone className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Understanding Firefighting Terminology</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Familiarizing yourself with key firefighting terms from the IFSTA Essentials 7 book will give you a
                      head start. Understanding fireground commands, tools, and techniques is crucial for success in the
                      academy and on the job.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-navy-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Physical Fitness */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-fire-600 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-fire-600 to-fire-700 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Dumbbell className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Physical Fitness Expectations</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Firefighting is physically demanding. You must be able to lift 50-60 lbs repeatedly, have strong
                      cardiovascular endurance, and be able to work in high-stress situations. Train beforehand with
                      weightlifting, endurance training, and functional fitness exercises like stair climbs and carrying
                      equipment.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-fire-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Professional Conduct Section Group */}
              <div className="lg:col-span-3 mb-8 mt-12">
                <h3 className="text-2xl font-bold text-navy-800 mb-6 border-b border-gray-200 pb-2">Professional Conduct & Etiquette</h3>
              </div>
              
              {/* Uniform & Professionalism */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-navy-800 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Users className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Uniform & Professionalism</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Your appearance and conduct are critical. Always show up clean-shaven, with a neat haircut, and a
                      clean uniform. Fire service is built on respect and discipline, so address everyone professionally,
                      introduce yourself, and always demonstrate a strong work ethic.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-navy-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hierarchy */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-navy-800 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.9s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Users className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Hierarchy & Chain of Command</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      The fire service follows a strict chain of command. Understanding rank structure and respecting
                      senior officers is essential. Listen more than you speak, follow orders, and be eager to learn from
                      experienced firefighters.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-navy-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mental Toughness */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-fire-600 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-fire-600 to-fire-700 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Lightbulb className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Mental Toughness & Resilience</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Firefighting is both physically and mentally demanding. You will face stressful situations, long hours,
                      and emotional challenges. Developing resilience, stress management strategies, and a strong
                      support system is essential for long-term success.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-fire-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Career Development Section Group */}
              <div className="lg:col-span-3 mb-8 mt-12">
                <h3 className="text-2xl font-bold text-navy-800 mb-6 border-b border-gray-200 pb-2">Career Development & Lifestyle</h3>
              </div>
              
              {/* Shift Work */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-fire-600 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-fire-600 to-fire-700 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Clock className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Shift Work & Lifestyle Adjustment</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Many fire departments operate on 24-hour shifts or rotating schedules. Adjusting to shift work
                      requires good sleep hygiene, meal prepping, and balancing personal life. Time management is key
                      to maintaining physical health and relationships.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-fire-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Challenges & Career Preparation */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-navy-800 group hover:transform hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-6 flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all">
                      <Flag className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Challenges & Career Preparation</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Getting into firefighting is highly competitive. To improve your chances, gain volunteer experience in
                      your community, develop hands-on skills through trades (electrical, plumbing, mechanics), obtain
                      medical certifications (EMT, paramedic), or participate in team sports to demonstrate teamwork.
                      Having post-secondary education can also be a major advantage.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <span className="text-navy-600 font-medium flex items-center text-sm">
                        Learn more <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Empty card for better grid alignment */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 my-10">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden bg-gradient-to-r from-fire-600 to-fire-700 rounded-2xl shadow-2xl animate-fade-up">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              
              <div className="relative p-10 md:p-16 text-center text-white z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-white/90">
                  Test your knowledge with our firefighting quiz and see if you have what it takes to succeed in this challenging but rewarding career.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-fire-700 hover:bg-white/90 shadow-md" size="lg" onClick={() => navigate('/quiz')}>
                    Take the Quiz Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                    Learn More About the Academy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        {/* Final Thoughts */}
        <section className="py-16 mb-10 bg-navy-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-up" style={{ animationDelay: '1s' }}>
              <div className="inline-flex justify-center items-center w-20 h-20 bg-gradient-to-br from-fire-500 to-fire-700 rounded-full mb-6 shadow-lg">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Final Thoughts</h2>
              <p className="text-navy-700 text-lg mb-8 leading-relaxed">
                Firefighting is a tough but rewarding career. Success in this field requires discipline, physical fitness,
                mental toughness, and a commitment to lifelong learning. Prepare yourself by gaining experience,
                staying fit, and developing a strong work ethic. Best of luck in your firefighting journey!
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">Discipline</span>
                <span className="bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">Physical Fitness</span>
                <span className="bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">Mental Toughness</span>
                <span className="bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">Teamwork</span>
                <span className="bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">Lifelong Learning</span>
              </div>
              
              <Button 
                variant="outline" 
                className="border-navy-300 text-navy-700 hover:bg-navy-100"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewToFirefighting;
