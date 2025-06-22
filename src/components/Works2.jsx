import React from 'react';
import UiImg1 from '../assets/UiImg1.png'

import UiImg2 from '../assets/UiImg2.png'
import UiImg3 from '../assets/UiImg3.png'
import UiImg4 from '../assets/UiImg4.png'
import UiImg5 from '../assets/UiImg5.png'

import UiImg6 from '../assets/UiImg6.png'

import UiImg7 from '../assets/UiImg7.png'
import UiImg8 from '../assets/UiImg8.png'
import UiImg9 from '../assets/UiImg9.png'
import UiImg10 from '../assets/UiImg10.png'
import UiImg11 from '../assets/UiImg11.png'
import UiImg12 from '../assets/UiImg12.png'
import UiImg13 from '../assets/UiImg13.png'

import UiImg14 from '../assets/UiImg14.png'
import UiImg15 from '../assets/UiImg15.png'

import Navbar from './Navbar';


const Works2 = () => {
  return (
    <div>
      <Navbar/>
    <div className='bg-[#e7f0ff] h-full pb-12  pt-12'>
    <div className='flex flex-col gap-8   mx-8 ml-36'>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={UiImg1}/>
            <img className='border-2 border-black' src={UiImg2}/>
            <img className='border-2 border-black' src={UiImg3}/>
            

        </div>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={UiImg8}/>
            <img className='border-2 border-black' src={UiImg9}/>
            <img className='border-2 border-black' src={UiImg10}/>
        </div>
        <div className='flex  gap-3 w-[800px] '>
            <img className='border-2 border-black' src={UiImg11}/>
            <img className='border-2 border-black' src={UiImg12}/>
            <img className='border-2 border-black' src={UiImg14}/>

        </div>
        <div className='flex  gap-3 w-[800px] '>
        <img className='border-2 border-black' src={UiImg7}/>
        <img className='border-2 border-black' src={UiImg8}/>
        <img className='border-2 border-black' src={UiImg4}/>

        </div>
        
    </div>
    </div>
    </div>
  );
}

export default Works2;
