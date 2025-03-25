
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Book, Dumbbell, Clock, Users, Flag, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NewToFirefighting = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>New To Firefighting | MyFireAcademy</title>
        <meta name="description" content="A comprehensive guide for those looking to start a career in firefighting." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 animate-fade-up">
                Guide to Starting a Career in <span className="text-fire-600">Firefighting</span>
              </h1>
              <p className="text-lg text-navy-700 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Firefighting is a demanding but rewarding career that requires physical fitness, mental toughness,
                discipline, and strong teamwork. This guide will help newcomers understand what to expect when
                entering a firefighting academy and pursuing a career in the fire service.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* What to Expect */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-0">
                  <div className="bg-fire-600 p-5 flex items-center">
                    <Book className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">What to Expect in the Fire Academy</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      The fire academy is a mix of classroom learning and hands-on training. You will study from the
                      IFSTA Essentials 7 textbook and cover topics like fire behavior, hose operations, search and rescue,
                      and more. Be prepared for a lot of studying, physical training, and high expectations.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Uniform & Professionalism */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-0">
                  <div className="bg-navy-800 p-5 flex items-center">
                    <Users className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Uniform & Professionalism</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Your appearance and conduct are critical. Always show up clean-shaven, with a neat haircut, and a
                      clean uniform. Fire service is built on respect and discipline, so address everyone professionally,
                      introduce yourself, and always demonstrate a strong work ethic.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Physical Fitness */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-0">
                  <div className="bg-fire-600 p-5 flex items-center">
                    <Dumbbell className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Physical Fitness Expectations</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Firefighting is physically demanding. You must be able to lift 50-60 lbs repeatedly, have strong
                      cardiovascular endurance, and be able to work in high-stress situations. Train beforehand with
                      weightlifting, endurance training, and functional fitness exercises like stair climbs and carrying
                      equipment.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Terminology */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-0">
                  <div className="bg-navy-800 p-5 flex items-center">
                    <Book className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Understanding Firefighting Terminology</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Familiarizing yourself with key firefighting terms from the IFSTA Essentials 7 book will give you a
                      head start. Understanding fireground commands, tools, and techniques is crucial for success in the
                      academy and on the job.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Challenges & Career Preparation */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-0">
                  <div className="bg-fire-600 p-5 flex items-center">
                    <Flag className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Challenges & Career Preparation</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Getting into firefighting is highly competitive. To improve your chances, gain volunteer experience in
                      your community, develop hands-on skills through trades (electrical, plumbing, mechanics), obtain
                      medical certifications (EMT, paramedic), or participate in team sports to demonstrate teamwork.
                      Having post-secondary education can also be a major advantage.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mental Toughness */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <CardContent className="p-0">
                  <div className="bg-navy-800 p-5 flex items-center">
                    <Lightbulb className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Mental Toughness & Resilience</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Firefighting is both physically and mentally demanding. You will face stressful situations, long hours,
                      and emotional challenges. Developing resilience, stress management strategies, and a strong
                      support system is essential for long-term success.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Shift Work */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-0">
                  <div className="bg-fire-600 p-5 flex items-center">
                    <Clock className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Shift Work & Lifestyle Adjustment</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      Many fire departments operate on 24-hour shifts or rotating schedules. Adjusting to shift work
                      requires good sleep hygiene, meal prepping, and balancing personal life. Time management is key
                      to maintaining physical health and relationships.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hierarchy */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow card-hover animate-fade-up" style={{ animationDelay: '0.9s' }}>
                <CardContent className="p-0">
                  <div className="bg-navy-800 p-5 flex items-center">
                    <Users className="text-white mr-3" size={24} />
                    <h2 className="text-xl font-semibold text-white">Hierarchy & Chain of Command</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700">
                      The fire service follows a strict chain of command. Understanding rank structure and respecting
                      senior officers is essential. Listen more than you speak, follow orders, and be eager to learn from
                      experienced firefighters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Final Thoughts */}
            <div className="max-w-4xl mx-auto mt-16 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
              <div className="bg-navy-50 p-8 rounded-xl border border-navy-100">
                <div className="inline-flex justify-center items-center w-16 h-16 bg-fire-600 rounded-full mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Final Thoughts</h2>
                <p className="text-navy-700">
                  Firefighting is a tough but rewarding career. Success in this field requires discipline, physical fitness,
                  mental toughness, and a commitment to lifelong learning. Prepare yourself by gaining experience,
                  staying fit, and developing a strong work ethic. Best of luck in your firefighting journey!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewToFirefighting;
