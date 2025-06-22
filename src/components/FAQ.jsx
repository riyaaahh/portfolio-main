import React, { useState } from 'react';
import Footer from './Footer';

const faqs = [
  {
    question: 'How do I upload my portfolio?',
    answer: 'To upload your portfolio, navigate to the Upload section, click on the "Upload Portfolio" button, and follow the instructions to submit your work.',
  },
  {
    question: 'How do I get hired through this website?',
    answer: 'After uploading your portfolio, employers can view your work and contact you through the contact information you provide in your profile.',
  },
  {
    question: 'Is there a cost to use this service?',
    answer: 'No, this service is completely free for job seekers. Employers may have different plans, including a free option.',
  },
  {
    question: 'Can I update my portfolio after submission?',
    answer: 'Yes, you can update your portfolio at any time by going to your profile page and editing the uploaded projects.',
  },
  {
    question: 'What types of files can I upload?',
    answer: 'You can upload various types of files, including images, PDFs, and videos. Please ensure your files adhere to our guidelines for format and size.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     
    <div className=" ml-40 my-12 p-6 bg-white border-4 border-black rounded-lg shadow-lg ">
      <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-2 text-left text-lg font-medium text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
