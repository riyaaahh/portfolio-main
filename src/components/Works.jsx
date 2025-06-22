import React from 'react';
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img14 from '../assets/img14.jpg'
import img15 from '../assets/img15.jpg'
import img18 from '../assets/img18.jpg'
import img17 from '../assets/img17.jpg'
import Navbar from './Navbar';


const Works = () => {
  return (
    <div>
      <Navbar/>
    <div className='bg-[#e7f0ff] h-full pb-12  pt-12'>
    <div className='flex flex-col gap-8   mx-8 ml-16'>
        <div className='flex  gap-3 w-[300px] '>
            <img className='border-2 border-black' src={img4}/>
            <img className='border-2 border-black' src={img5}/>
            <img className='border-2 border-black' src={img7}/>
            <img className='border-2 border-black' src={img15}/>

        </div>
        <div className='flex  gap-3 w-[300px] '>
            <img className='border-2 border-black' src={img8}/>
            <img className='border-2 border-black' src={img9}/>
            <img className='border-2 border-black' src={img10}/>
            <img className='border-2 border-black' src={img18}/>
        </div>
        <div className='flex  gap-3 w-[300px] '>
            <img className='border-2 border-black' src={img11}/>
            <img className='border-2 border-black' src={img12}/>
            <img className='border-2 border-black' src={img14}/>
            <img className='border-2 border-black' src={img17}/>

        </div>
        
    </div>
    </div>
    </div>
  );
}

export default Works;
