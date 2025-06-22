import React from 'react';
import success from '../assets/success.gif'
const Final = () => {
  return (


    <div className="flex items-center justify-center h-screen   bg-gray-100">
      <div className="bg-white border-2 border-black p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-6">
          Congratulations! Your Portfolio is Ready!
        </h1>
        <div className='ml-64'><img src={success}/></div>
        <p className="text-base font-semibold mt-4 text-black mb-8">
          Your portfolio has been successfully created and is now live. <br/>Start showcasing your work and achievements!
        </p>
        <a
          href="/your-portfolio-url"
          className="inline-block font-bold bg-green-500 text-black px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition-colors"
        >
          View Your Portfolio 
        </a>
      </div>
    </div>


  );
}

export default Final;
