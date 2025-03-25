
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to MyFireAcademy. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use MyFireAcademy if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">2. License to Use</h2>
            <p>Unless otherwise stated, MyFireAcademy and/or its licensors own the intellectual property rights for all material on MyFireAcademy. All intellectual property rights are reserved.</p>
            <p>You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
              <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">4. User Accounts</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">5. Purchases</h2>
            <p>If you wish to purchase any product or service made available through the Service, you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">6. Disclaimer</h2>
            <p>The materials on MyFireAcademy's website are provided on an 'as is' basis. MyFireAcademy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">7. Limitations</h2>
            <p>In no event shall MyFireAcademy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MyFireAcademy's website, even if MyFireAcademy or a MyFireAcademy authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            
            <h2 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mb-6"><a href="mailto:MyFireAcademy@gmail.com" className="text-fire-600 hover:text-fire-700">MyFireAcademy@gmail.com</a></p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
