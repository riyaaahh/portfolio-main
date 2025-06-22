import React from 'react';
import  TylaImg from '../assets/TylaImg.png';

import  TylaImg2 from '../assets/TylaImg2.png';
import  TylaImg3 from '../assets/TylaImg3.png';
import  TylaImg4 from '../assets/TylaImg4.jpg';
import  TylaImg5 from '../assets/TylaImg5.jpg';


import  TylaImg7 from '../assets/TylaImg7.jpg';
import  TylaImg8 from '../assets/TylaImg8.png';
import  TylaImg9 from '../assets/TylaImg9.jpg';
import  TylaImg10 from '../assets/TylaImg10.png';
import  TylaImg11 from '../assets/TylaImg11.png';
import  TylaImg12 from '../assets/TylaImg12.jpg';
import Navbar from './Navbar';


const Works3 = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#e7f0ff] h-full pb-12  pt-12'>
        <div className='flex flex-col gap-8   mx-8 ml-16'>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={TylaImg}/>
            <img className='border-2 border-black' src={TylaImg2}/>
            <img className='border-2 border-black' src={TylaImg3}/>
            

        </div>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={TylaImg8}/>
            <img className='border-2 border-black' src={TylaImg9}/>
            <img className='border-2 border-black' src={TylaImg10}/>
        </div>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={TylaImg11}/>
            <img className='border-2 border-black' src={TylaImg12}/>
            <img className='border-2 border-black' src={TylaImg5}/>

        </div>
        <div className='flex  gap-3 w-[800px] '>
        <img className='border-2 border-black' src={TylaImg7}/>
        <img className='border-2 border-black' src={TylaImg8}/>
        <img className='border-2 border-black' src={TylaImg4}/>

        </div>
        
    </div>
    </div>
    </div>
  );
}

export default Works3;
