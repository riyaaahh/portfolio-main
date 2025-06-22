import React from 'react';
import { FaLightbulb, FaPenFancy, FaMobileAlt, FaUserCheck, FaPalette, FaSearch } from 'react-icons/fa';

const tips = [
  {
    icon: <FaLightbulb size={32} className="text-blue-500" />,
    title: "Highlight Your Best Work",
    description: "Choose your best projects to showcase and make sure they represent the skills you want to be hired for.",
  },
  {
    icon: <FaPenFancy size={32} className="text-green-500" />,
    title: "Tell a Story",
    description: "Write a brief description for each project. Explain the problem, your approach, and the outcome.",
  },
  {
    icon: <FaMobileAlt size={32} className="text-red-500" />,
    title: "Make It Responsive",
    description: "Ensure your portfolio looks great on all devices, including phones and tablets.",
  },
  {
    icon: <FaUserCheck size={32} className="text-purple-500" />,
    title: "Showcase Your Unique Style",
    description: "Let your personality and unique style shine through in your portfolio design and content.",
  },
  {
    icon: <FaPalette size={32} className="text-orange-500" />,
    title: "Use High-Quality Visuals",
    description: "Incorporate high-resolution images and graphics to make your portfolio visually appealing.",
  },
  {
    icon: <FaSearch size={32} className="text-teal-500" />,
    title: "Optimize for SEO",
    description: "Use keywords relevant to your skills and projects to improve your portfolio's search engine ranking.",
  },
];

const PortfolioTips = () => {
  return (
    <div className="container mx-auto p-8 ml-20">
      <h1 className="text-4xl font-bold mb-8">Tips For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-2 border-black hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {tip.icon}
              <h2 className="ml-4 text-xl font-semibold">{tip.title}</h2>
            </div>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioTips;
