import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Whitepace and how does it work?",
      answer: "Whitepace is a comprehensive project management and collaboration platform designed to help teams work more efficiently. It combines task management, file sharing, real-time collaboration, and analytics in one unified workspace."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all our paid plans. No credit card required to get started. You can explore all features and see how Whitepace fits your team's needs."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice."
    },
    {
      question: "How secure is my data with Whitepace?",
      answer: "Security is our top priority. We use bank-level encryption, secure data centers, regular security audits, and comply with SOC 2, GDPR, and other industry standards to keep your data safe."
    },
    {
      question: "Do you offer integrations with other tools?",
      answer: "Yes! Whitepace integrates with over 100 popular tools including Slack, Google Workspace, Microsoft 365, Zoom, GitHub, and many more. We also offer API access for custom integrations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support channels including email support for all users, live chat for Pro users, and phone support for Enterprise customers. Our support team is available 24/7 for Enterprise plans."
    },
    {
      question: "Can I use Whitepace on mobile devices?",
      answer: "Yes! Whitepace has native mobile apps for both iOS and Android, as well as a fully responsive web interface that works great on any device."
    },
    {
      question: "How does billing work?",
      answer: "Billing is based on the number of active users in your workspace. You're charged monthly or annually depending on your chosen plan. We automatically handle prorations when you add or remove users."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Whitepace. Can't find what you're looking for? 
            <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">Contact our support team</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;