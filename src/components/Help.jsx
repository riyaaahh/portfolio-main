import React from "react";
import Mushthaq from "../assets/Mushthaq.png";
import HelpBG from "../assets/HelpBG.jpg";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Marcustwo from "../assets/Marcustwo.png";
import FAQ from "./FAQ";
import Footer from "./Footer";
import PortfolioTips from "./PortfolioTips";
import Navbar from "./Navbar";

function Help() {
  return (
    <div>
     <Navbar/>
          <div className="container ">

      <div className="relative">
        <div className="w-screen relative">
          <img src={HelpBG} className="w-full h-full object-cover" />
          <div className="absolute top-36 left-28 text-black p-8">
            <div className="text-black font-bold">The FAQs</div>
            <h1 className="text-6xl font-bold text-black my-3">Help Centre</h1>
            <div className="text-black font-bold">
              Everything you need to know about our     Portfoe.
            </div>
            <div className="flex justify-center mt-2">
      <div className="relative w-screen max-w-2xl ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 pl-4 pr-32 border  px-20 border-black rounded-lg focus:outline-none "
        />
        <button className="absolute right-1 top-1 bottom-1 px-6 py-1 bg-black text-white rounded-lg hover:bg-green-800 ">
          Search
        </button>
      </div>
    </div>
          </div>
        </div>
      </div>
      <PortfolioTips/>

      <FAQ />
<Footer/>
     

    
    </div>
    </div>
  );
}


export default Help;
