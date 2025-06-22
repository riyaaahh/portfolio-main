import React from 'react';
import Employees from '../assets/Employees.jpg'
import { NavLink, Link } from 'react-router-dom';
import { FaEye, FaHandsHelping, FaRocket } from 'react-icons/fa';

import Team1 from "../assets/Team1.jpg"
import Team2 from "../assets/Team2.jpg"
import Team3 from "../assets/Team3.jpg"
import Team4 from "../assets/Team4.avif"
import Team7 from "../assets/Team7.avif"
import Team6 from "../assets/Team6.jpg"
import Team8 from "../assets/Team8.jpg"
import Brand1 from "./../assets/Brand1.jpg"
import Brand2 from "./../assets/Brand2.png"
import Brand3 from "./../assets/Brand3.png"
import Brand4 from "./../assets/Brand3.jpg"
import Brand5 from "./../assets/Brand5.png"
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return(
      <div className=' h-screen'>
<div className=' h-screen w-screen'>
<Navbar/>
        <div className=' w-screen h-screen mt-16'>
            <div className='  m-4'>
              <div className='flex items-center justify-between mx-10 gap-20 m-4'>
                <div>
            <h1 className='text-neutral-950  rounded-lg  text-5xl font-bold text-center' style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}>
<span  className='text-nowrap'>We provide exceptional</span><br/>high quality services</h1>
</div>
<div className='font-semibold'> We provide a seamless, user-friendly experience. Your content will be displayed beautifully. Our platform ensures professional presentation. Enjoy intuitive design and smooth navigation. Create stunning content effortlessly.






   </div>
</div>
    <div className=' border-2  border-black m-4 mt-14 '>
    <img src={Employees} className=' ' alt='Employees' />
    </div>
    </div>
    <div className='pl-44   pb-8 pt-8 gap-4 mt-12 items-center'>
   < div className='text-black font-extrabold mb-4 text-3xl text-center pr-32'>Insights in Figures</div>
    <div className='flex gap-4'> <div className=' items-center bg-white text-center shadow-xl p-8 rounded-lg '>
      <div className='text-xl font-bold'>Client Satisfaction</div>

        <div className='text-green-800  font-bold text-6xl'>15k+</div>
      </div>
      <div className='  items-center text-center bg-white  shadow-xl p-8 rounded-lg '>
      <div className='text-xl font-bold'>Portfolio Uploaded</div>

        <div className='text-green-800  font-bold text-6xl'>25k+</div>
      </div>  
      <div className='  items-center text-center bg-white  shadow-xl p-8 rounded-lg '>
      <div className='text-xl font-bold'>Experienced Talents</div>

        <div className='text-green-800  font-bold text-6xl'>13k+</div>
      </div> 
      <div className='  items-center text-center bg-white  shadow-xl p-8 rounded-lg '>
      <div className='text-xl font-bold'>Fresh Talents</div>

        <div className='text-green-800 font-bold text-6xl'>12k+</div>
      </div> 
      
      </div> 
    </div>
    <div className="text-center text-5xl font-bold my-20  mb-8">
        <span className="font-extrabold">Our</span> Strength
        <br />
        <span>
          {" "}
          Our <span className="font-extrabold">Team!</span>
        </span>
        <div className="flex flex-col  justify-center mt-4 mx-20">
          <div className="flex">
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px] "
                src={ Team1}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={Team4}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={ Team2}
                alt="Card Image"
              />
            </div>
          </div>
          <div className="flex">
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img className="w-full  " src={Team7} alt="Card Image" />
            </div>
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={ Team8}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={Team6}
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </div>
    
    <div className='text-center my-10 '>
      <div className='text-black font-bold text-4xl mb-4'><span className='font-extrabold'>
        United</span> with  the
       <span className='font-extrabold'>Finest!</span></div>
      <div className='flex justify-between gap-4 mx-20'>
        <div className='border-2 border-black'><img src={Brand1}/></div>
        <div className='border-2 border-black'><img src={Brand2}/></div>
        <div className='border-2 border-black'><img src={Brand3}/></div>
        <div className='border-2 border-black'><img src={Brand4}/></div>
        <div className='border-2 border-black'><img src={Brand5}/></div>
      </div>
    </div>
    
    <Footer/>




  


   
   
</div>
    </div>
    </div>

    )};
export default About;
