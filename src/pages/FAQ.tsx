
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-10">Find answers to the most common questions about our firefighter exam prep materials.</p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">What exam does this course prepare me for?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                Our comprehensive study materials prepare you for the NFPA 1001 Standard for Fire Fighter Professional Qualifications, including both Level I and Level II certifications. The content is designed to align with the latest 2025 exam specifications.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">How does the pass guarantee work?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                We're confident in our training materials, which is why we offer a 100% pass guarantee. If you complete our full course and don't pass your exam, we will refund your purchase price. You'll need to show proof that you've completed all study materials and practice exams, and provide documentation of your exam results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">How long do I have access to the materials?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                Once purchased, you'll have 12 months of access to all study materials, practice tests, and resources. This gives you plenty of time to prepare thoroughly for your exam, with the flexibility to study at your own pace.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">What if I need more time to study?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                If you need additional time beyond your initial 12-month access period, you can purchase a subscription extension. Contact our support team for current extension rates and options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">Can I access the materials on different devices?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                Yes, our platform is fully responsive and works on desktop computers, laptops, tablets, and smartphones. Your progress is synchronized across all your devices, allowing you to study wherever and whenever is most convenient for you.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">Do you offer refunds?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                We offer a 30-day satisfaction guarantee. If you're not satisfied with our materials within the first 30 days after purchase, you can request a full refund. After this period, refunds are only provided under our pass guarantee policy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">How are the practice exams structured?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                Our practice exams mirror the format and difficulty of the actual NFPA certification exams. They include multiple-choice questions, scenario-based problems, and timed sessions to simulate real testing conditions. After each practice exam, you'll receive detailed feedback on your performance, including explanations for each question.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-navy-800">Is there support available if I have questions?</AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-3">
                Absolutely! We provide email support to answer any questions you may have about the content or technical issues. Premium subscription tiers also include access to instructor-led Q&A sessions and personalized feedback on your progress.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 p-6 bg-navy-50 rounded-xl">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-4">If you couldn't find the answer you were looking for, please don't hesitate to reach out to our support team.</p>
            <a href="mailto:MyFireAcademy@gmail.com" className="btn-primary inline-block">Contact Support</a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
