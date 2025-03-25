
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Book, Dumbbell, Clock, Users, Flag, Lightbulb, Heart, Shield, FileText, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const NewToFirefighting = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  // State to track which collapsibles are open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
        
        {/* Main Content - Reorganized as Collapsible Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            {/* Academy Preparation Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 bg-fire-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-navy-900">Academy Preparation</h2>
              </div>

              <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
                <Collapsible 
                  open={openSections['fire-academy']} 
                  onOpenChange={() => toggleSection('fire-academy')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-fire-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Book className="text-fire-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">What to Expect in the Fire Academy</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['fire-academy'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          The fire academy is a mix of classroom learning and hands-on training. You will study from the
                          IFSTA Essentials 7 textbook and cover topics like fire behavior, hose operations, search and rescue,
                          and more. Be prepared for a lot of studying, physical training, and high expectations.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible 
                  open={openSections['physical-fitness']} 
                  onOpenChange={() => toggleSection('physical-fitness')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-fire-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Dumbbell className="text-fire-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Physical Fitness Expectations</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['physical-fitness'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Firefighting is physically demanding. You must be able to lift 50-60 lbs repeatedly, have strong
                          cardiovascular endurance, and be able to work in high-stress situations. Train beforehand with
                          weightlifting, endurance training, and functional fitness exercises like stair climbs and carrying
                          equipment.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible 
                  open={openSections['terminology']} 
                  onOpenChange={() => toggleSection('terminology')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-fire-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="text-fire-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Understanding Firefighting Terminology</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['terminology'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Familiarizing yourself with key firefighting terms from the IFSTA Essentials 7 book will give you a
                          head start. Understanding fireground commands, tools, and techniques is crucial for success in the
                          academy and on the job.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </div>
            </div>

            {/* Professional Standards Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-navy-900">Professional Standards</h2>
              </div>

              <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
                <Collapsible 
                  open={openSections['uniform']} 
                  onOpenChange={() => toggleSection('uniform')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-navy-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="text-navy-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Uniform & Professionalism</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['uniform'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Your appearance and conduct are critical. Always show up clean-shaven, with a neat haircut, and a
                          clean uniform. Fire service is built on respect and discipline, so address everyone professionally,
                          introduce yourself, and always demonstrate a strong work ethic.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible 
                  open={openSections['hierarchy']} 
                  onOpenChange={() => toggleSection('hierarchy')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-navy-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="text-navy-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Hierarchy & Chain of Command</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['hierarchy'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          The fire service follows a strict chain of command. Understanding rank structure and respecting
                          senior officers is essential. Listen more than you speak, follow orders, and be eager to learn from
                          experienced firefighters.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </div>
            </div>

            {/* Career Development Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 bg-fire-600 rounded-full flex items-center justify-center mr-4">
                  <Flag className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-navy-900">Career Development</h2>
              </div>

              <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
                <Collapsible 
                  open={openSections['challenges']} 
                  onOpenChange={() => toggleSection('challenges')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-fire-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Flag className="text-fire-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Challenges & Career Preparation</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['challenges'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Getting into firefighting is highly competitive. To improve your chances, gain volunteer experience in
                          your community, develop hands-on skills through trades (electrical, plumbing, mechanics), obtain
                          medical certifications (EMT, paramedic), or participate in team sports to demonstrate teamwork.
                          Having post-secondary education can also be a major advantage.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible 
                  open={openSections['mental']} 
                  onOpenChange={() => toggleSection('mental')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-navy-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Lightbulb className="text-navy-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Mental Toughness & Resilience</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['mental'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Firefighting is both physically and mentally demanding. You will face stressful situations, long hours,
                          and emotional challenges. Developing resilience, stress management strategies, and a strong
                          support system is essential for long-term success.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <Collapsible 
                  open={openSections['shift']} 
                  onOpenChange={() => toggleSection('shift')}
                  className="w-full"
                >
                  <Card className="w-full border border-gray-200 hover:shadow-md transition-shadow">
                    <CollapsibleTrigger className="w-full text-left">
                      <CardHeader className="bg-fire-50 pb-3 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="text-fire-600 mr-3" size={24} />
                            <CardTitle className="text-xl font-semibold text-navy-900">Shift Work & Lifestyle Adjustment</CardTitle>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-navy-700 transition-transform duration-200 ${openSections['shift'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-navy-700">
                          Many fire departments operate on 24-hour shifts or rotating schedules. Adjusting to shift work
                          requires good sleep hygiene, meal prepping, and balancing personal life. Time management is key
                          to maintaining physical health and relationships.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </div>
            </div>
            
            {/* Final Thoughts */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <div className="bg-gradient-to-r from-navy-50 to-gray-50 p-8 rounded-xl border border-navy-100">
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
