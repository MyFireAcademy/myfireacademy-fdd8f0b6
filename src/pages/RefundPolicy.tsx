
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Our Refund Policy</h2>
            <p>At MyFireAcademy, we stand behind the quality of our study materials and certification prep courses with our 100% Pass Guarantee. We understand that investing in your firefighting career is an important decision, and we want you to feel confident about your purchase.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">100% Pass Guarantee</h2>
            <p>If you complete all study materials and practice exams in our program and still do not pass your firefighter certification exam, we will refund your purchase price in full. To qualify for the pass guarantee refund:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You must have completed 100% of the course materials, including all video lectures, readings, and quizzes.</li>
              <li>You must have taken and reviewed all practice exams at least once.</li>
              <li>You must provide documentation showing that you failed the official certification exam.</li>
              <li>A refund request must be submitted within 30 days of receiving your official exam results.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">30-Day Satisfaction Guarantee</h2>
            <p>We offer a 30-day satisfaction guarantee for new customers. If you are not satisfied with our materials for any reason within the first 30 days after purchase, you may request a full refund.</p>
            <p>To qualify for the 30-day satisfaction guarantee:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The refund request must be submitted within 30 days of the original purchase date.</li>
              <li>Your account cannot have completed more than 25% of the course materials.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">How to Request a Refund</h2>
            <p>To request a refund under either of our guarantees, please email us at <a href="mailto:MyFireAcademy@gmail.com" className="text-fire-600 hover:text-fire-700">MyFireAcademy@gmail.com</a> with the following information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your full name</li>
              <li>The email address used to purchase the course</li>
              <li>Date of purchase</li>
              <li>Reason for refund request</li>
              <li>Any required documentation (for pass guarantee refunds)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Refund Processing</h2>
            <p>Once your refund request is approved, the refund will be processed to the original method of payment used for the purchase. Refunds typically take 5-10 business days to appear in your account, depending on your payment provider.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Exceptions</h2>
            <p>The following situations are not eligible for refunds:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Requests made after the 30-day satisfaction period (unless qualifying for the pass guarantee).</li>
              <li>Accounts that have completed more than 25% of course materials (for 30-day satisfaction guarantee).</li>
              <li>Subscription renewals after the initial purchase period.</li>
              <li>Cases of account sharing or other violations of our Terms of Service.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about our refund policy, please contact our support team at:</p>
            <p className="mb-6"><a href="mailto:MyFireAcademy@gmail.com" className="text-fire-600 hover:text-fire-700">MyFireAcademy@gmail.com</a></p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;
