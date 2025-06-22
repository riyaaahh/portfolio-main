import React from "react";
import Edward from "./../assets/Edward.png";
import { ChartBarSquareIcon, ComputerDesktopIcon, CurrencyBangladeshiIcon, PencilSquareIcon, PuzzlePieceIcon } from "@heroicons/react/16/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
function Aboutme() {
  return (
    <div>
      <Navbar/>
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
  );
}

export default Aboutme;
