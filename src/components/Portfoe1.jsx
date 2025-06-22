import React from "react";
import { Link } from 'react-router-dom';
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { AcademicCapIcon, FolderIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Navbar from '../components/Navbar'
import ContactMe from "./ContactMe";
import Works from '../components/Works';
import Aboutme from "./Aboutme";
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
import Edward from "./../assets/Edward.png";
import { ChartBarSquareIcon, ComputerDesktopIcon, CurrencyBangladeshiIcon, PencilSquareIcon, PuzzlePieceIcon } from "@heroicons/react/16/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
function Portfoe1() {

    return(
        <div>
            <Navbar/>
        <div className="bg-[#e7f0ff] justify-center items-center flex flex-col p-4">

            <div className="flex relative bg-[#e7f0ff] items-center h-screen gap-14  justify-between">
                
            <div className="  max-w-[400px] bg-green-300 border-black px-4 border-4 mr-14 rounded-lg pt-10  shadow-2xl ">
                    <img src={Edward} alt="/" />
                </div>
                <div className="absolute shadow-2xl  text-black mt-96  justify-center items-center text-center border-x-4 border-y-2 border-black bg-white p-4 px-8 mb-4  rounded-lg">
                        <h3 className="text-xl font-extrabold">HI, I'M  <span className="text-2xl">EDWARD</span>.</h3>
                        <h1 className="text-3xl font-extrabold text-green-500">A GRAPHIC DESIGNER</h1>
                        <h3 className="font-extrabold text-xl">BASED IN  CALIFORNIA</h3>
                    </div>
                <div className="flex flex-col justify-between gap-4">
                <div className="text-black shadow-xl  justify-center items-center py-16 px-8 text-center border border-black bg-white mx-4 mb-4 mt-2 rounded-lg">
<p className="text-3xl font-extrabold capitalize">  My design is about <br/>making the complex simple<br/> and the simple compelling.</p>
</div>
                  
                    <div className="flex gap-2  justify-between m-4">
                        <div className="text-black shadow-xl  py-5 px-5 justify-center items-center text-center border border-black bg-white rounded-full">
                            <div className="text-2xl  font-extrabold">20+</div>
                            <div className="text-2xl font-extrabold">YEARS</div>
                            <div className="text-sm">Experience</div>
                        </div>
                        <div className="text-black shadow-xl py-5 px-10 justify-center items-center text-center border border-black bg-white rounded-full">
                            <div className="text-2xl mt-4 font-extrabold flex items-center">
                                <div>Certified</div>
                                <div className="text-green-600"><CheckBadgeIcon className="w-5 h-5" /></div>
                            </div>
                            <div className="text-sm">Designer</div>
                        </div>
                        <div className="text-black py-5 px-5 justify-center shadow-xl  items-center text-center border border-black bg-white rounded-full">
                            <div className="text-2xl font-extrabold">100+</div>
                            <div className="text-2xl font-extrabold">Clients</div>
                            <div className="text-sm">Trustworthy</div>
                        </div>
                    </div>
                </div>
               
                <div className="gap-2 flex flex-col ml-16 mb-18">
                <Link to={"/Aboutme"}>
                        <div className="rounded-3xl flex gap-1 shadow-xl bg-black p-6 hover:scale-105 duration-300">
                            <div className="text-white">ABOUT ME</div>
                            <div><AcademicCapIcon className="w-5 h-5 text-green-500" /></div>
                        </div>
                    </Link>
                    <Link to={"/ContactMe"}>

                    <div className="rounded-3xl flex gap-1 shadow-xl bg-black p-6 hover:scale-105 duration-300">
                        <div className="text-white">CONTACT</div>
                        <div><ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-green-500" /></div>
                    </div>
                    </Link>

                    <Link to={"/Works"}>
                    <div className="rounded-3xl flex shadow-xl gap-1 bg-black text-center p-6 hover:scale-105 duration-300">
                        <div className="text-white text-center">WORKS</div>
                        <div><FolderIcon className="w-5 h-5 text-green-500" /></div>
                    </div>
                    </Link>

                </div>
            </div>
           
            <div>
                <div className="bg-black text-white w-screen p-8 items-center text-center text-3xl font-extrabold">
                    <div> <span className="text-green-500">ABOUT</span> ME</div>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-[#e7f0ff] p-6 h-full">
      <div>
        <div className="mt-8 flex gap-4 ">
        
          <div>
            <div className="bg-white border-2 p-4 mx-6 border-black flex flex-col text-black rounded-lg">
              <div className="text-2xl font-extrabold p-3">Hi There!</div>
              <div>
                <p className="text-xl font-bold px-3">
                  {" "}
                  I'm a <span className="text-green-500">
                    GRAPHIC DESIGNER
                  </span>{" "}
                  with over 15 years of experience, I'm deeply passionate about
                  visual storytelling and creating stunning designs that
                  captivate audiences.
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-6 mt-10 my-4">
              <div className="text-2xl font-extrabold text-black ">
                What I can do for you?
              </div>
              <div>
                <div className="flex gap-4 py-4">
                  <div>
                    <div className="bg-black text-white p-6 rounded-lg">
                      <div className="ml-5">
                        <CurrencyBangladeshiIcon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        Logo<br/> Designs
                      </div>

                      
                    </div>
                  </div>
                  <div>
                    <div className="bg-black text-white p-6  rounded-lg">
                      <div className="ml-5">
                        <ComputerDesktopIcon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        Web <br/> Designs
                      </div>

                     
                    </div>
                    
                  </div>
                  <div>
                    <div className="bg-black text-white p-6  rounded-lg">
                      <div className="ml-5">
                        <Squares2X2Icon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        UI/UX <br/> Designs
                      </div>

                     
                    </div>
                    
                  </div>
                  <div className="bg-black text-white p-6  rounded-lg">
                      <div className="ml-5">
                        <PencilSquareIcon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        Print<br/> Designs
                      </div>

                     
                    </div>
                    <div className="bg-black text-white p-6  rounded-lg">
                      <div className="ml-5">
                        <PuzzlePieceIcon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        Product<br/> Designs
                      </div>

                     
                    </div>
                    <div className="bg-black text-white p-6  rounded-lg">
                      <div className="ml-5">
                        <ChartBarSquareIcon className="text-green-500 w-10  h-10" />
                      </div>
                      <div className="text-center font-semibold text-xl">
                        Creative<br/> Designs
                      </div>

                     
                    </div>
                </div>
              </div>
            </div>
            <div className="mx-6 my-2">
            <div className="text-2xl font-extrabold text-black my-4 ">
                What did  I study?
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col bg-white border-2 rounded-lg border-black px-8 p-4"> 
                <div className="font-semibold text-2xl capitalize text-green-700">Bachelor of Fine Arts in Graphic Design</div>
<div className="font-semibold">University of California, Berkeley</div>
<div>Graduated: May 2009</div>

</div>
 
<div className="flex flex-col bg-white border-2 rounded-lg border-black px-8 p-4"> 
                <div className="font-semibold text-2xl capitalize text-green-700">Associate of Arts in Visual Communication
</div>
<div className="font-semibold">Santa Monica College
</div>
<div>Graduated: May 2007

</div>

</div>
              </div>
            </div>
          </div>
          <div>
          <div className=" max-w-[600px] bg-green-300 border-black px-4 border-4  rounded-lg pt-10  shadow-2xl ">
            <div className="">
              <img src={Edward} alt="/" />
            </div>
          
          </div>
          <div className=" shadow-2xl  text-black mt-2  justify-center items-center text-center border-x-4 border-y-2 border-black bg-white p-4 px-8 mb-4  rounded-lg">
                        <h3 className="text-xl font-extrabold"> I'M  <span className="text-2xl">EDWARD</span>.</h3>
                        <h1 className="text-xl font-extrabold text-green-500">A GRAPHIC DESIGNER</h1>
                    </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div>
                <div className="bg-black text-white w-screen p-8 items-center text-center text-3xl font-extrabold">
                    <div>LATEST <span className="text-green-500">WORKS</span></div>
                </div>
            </div>
        <div>
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
        <div>
                <div className="bg-black  text-white w-screen p-8 items-center text-center text-3xl font-extrabold">
                    <div><span className="text-green-500">CONTACT</span> ME</div>
                </div>
            </div>
        <div>
        <section className="bg-[#e7f0ff] ">
    <div className="container px-6 py-12 mx-auto">
        <div>

            <h1 className="mt-2 text-3xl font-bold text-black md:text-3xl">Get in touch with me.</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-500">I would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className='flex gap-3'>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p className="mt-2 text-sm text-green-500">edward412@gmail.com</p>
                </div>

                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Location</h2>
                    <p className="mt-2 text-sm text-green-500">Los Angeles, CA 90012, United States</p>
                </div>

                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                    <p className="mt-2 text-sm text-green-500">+1 (555) 000-0000</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                       <FaInstagram/>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Instagram</h2>
                    <p className="mt-2 text-sm text-green-500">@edwarddev._</p>
                </div>

                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                       <FaTwitter/>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Twitter</h2>
                    <p className="mt-2 text-sm text-green-500">@edwarddev 
</p>
                </div>

                <div className=''>
                    <span className="inline-block p-3 text-green-500 rounded-full  dark:bg-black">
                       <FaLinkedin/>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800">LinkedIn</h2>
                    <p className="mt-2 text-sm text-green-500">linkedin.com/in/edwarddev</p>
                </div>
            </div>
            </div>
            <div className="overflow-hidden rounded-lg border-2 border-black lg:col-span-2 h-96 lg:h-auto">
  <iframe 
    width="100%" 
    height="100%" 
    frameborder="0" 
    title="Edward's Home" 
    marginheight="0" 
    marginwidth="0" 
    scrolling="no" 
    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=34.052235,-118.243683+(Edward's%20Home)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed">
  </iframe>
</div>



        </div>
    </div>
</section>            </div>
        </div>
    );
}

export default Portfoe1;
