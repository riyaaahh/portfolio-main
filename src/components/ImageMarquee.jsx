import React from 'react';
import HomeImg1 from '../assets/HomeImg1.jpg';
import HomeImg2 from '../assets/HomeImg2.jpg';
import HomeImg3 from '../assets/HomeImg3.jpg';
import HomeImg4 from '../assets/HomeImg4.jpg';
import HomeImg5 from '../assets/HomeImg5.jpg';
import HomeImg6 from '../assets/HomeImg6.jpg';

const images = [
  HomeImg1,
  HomeImg2,
  HomeImg3,
  HomeImg4,
  HomeImg5,
  HomeImg6,
];

const ImageMarquee = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-gray-100 py-8">
      <div className="animate-scroll flex">
        {images.map((image, index) => (
          <div key={index} className="inline-block px-2">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4">
              <img src={image} alt={`HomeImg${index + 1}`} className="h-40 w-40 object-cover rounded-lg" />
            </div>
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index} className="inline-block px-2">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4">
              <img src={image} alt={`HomeImg${index + 1}`} className="h-40 w-40 object-cover rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
