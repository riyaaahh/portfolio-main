import React from "react";
import Authentication from "./Authentication";
import { NavLink, Link, useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Employees from "../assets/Employees.jpg";
import Lady from "../assets/Lady.jpg";
import Logo from "../assets/Logo.png";
import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";
import Header from "./Header.jsx";
import HomeBG from "../assets/HomeBG.jpg";
import Edward from "../assets/Edward.png";
import Stats from "./Stats.jsx";
import Footer from "./Footer.jsx";
import HomeImg2 from "../assets/HomeImg2.jpg";
import HomeImg3 from "../assets/HomeImg3.jpg";
import HomeImg4 from "../assets/HomeImg4.png";
import HomeImg6 from "../assets/HomeImg6.jpg";
import HomeImg7 from "../assets/HomeImg7.png";
import HomeImg8 from "../assets/HomeImg8.png";
import Blogs from "./Blogs.jsx";
import { FolderArrowDownIcon, HandThumbUpIcon, UserCircleIcon, WalletIcon } from "@heroicons/react/16/solid";

function Hoome() {
  return (
    <div className="App">
      <Header />
      <div
        className="relative w-full h-screen bg-cover bg-center flex gap-16"
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <div className="relative flex flex-col text-white mb-36 ml-20 mt-28 p-20 rounded-lg">
          <div className="mt-10">
            <h1 className="text-6xl font-bold text-black">
              Upload. <span>Find.</span> <br /> <span>Elevate Your Career</span>
            </h1>
            <p className="text-base text-black font-semibold mt-4">
              Embark on a journey of possibilities, upload your skills with
              pride,
              <br />
              Navigate opportunities, where success will be your guide.
            </p>
            <div className="flex flex-col">
            <Link to="/Authentication">
              <button className="mt-8 text-center hover:font-extrabold font-bold hover:bg-gray-100  mb-4 border-black text-black rounded-md py-2 px-10  bg-green-200 hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </Link>
            <Link to={"/Form"}>
      <button
          className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200  hover:bg-gray-100 hover:scale-105 duration-300"
        >
          Create Your Portfolio
        </button>
      </Link>
      </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-center px-10 pb-8 pt-8 text-center ">
          <div className="pr-40 font-bold text-4xl mb-6 ml-36">
            {" "}
            Get Hired in <span className="font-bold text-green-800">4 Quick</span> Easy Step
          </div>
          <div className="flex  gap-4">
            <div className=" items-center bg-white text-center shadow-xl p-8 rounded-lg ">
              <div className="text-xl text-red-500 ml-24 font-bold  text-center">
                <UserCircleIcon className="w-8 h-8" />
              </div>
              <div className="text-black font-bold text-lg">
                Create an account
              </div>

              <div className="   ">
                Sign up & showcase your
                works, highlight your studies, and demonstrate your potential.
              </div>
            </div>
            <div className=" items-center bg-white text-center shadow-xl p-8 rounded-lg ">
              <div className="text-xl text-pink-800 font-bold ml-24 text-center">
                <HandThumbUpIcon className="w-8 h-8" />
              </div>
              <div className="text-black font-bold text-lg">
                Analyze Portfolios
              </div>

              <div className="   ">
                Explore and analyze others' portfolios to gain inspiration and
                insights for creating your own.
              </div>
            </div>
            <div className=" items-center bg-white text-center shadow-xl p-8 rounded-lg ">
              <div className="text-xl text-green-800  ml-24 font-bold  text-center">
                <FolderArrowDownIcon className="w-8 h-8" />
              </div>
              <div className="text-black font-bold text-lg">
                Upload Your Portfolio
              </div>

              <div className=" ">
                Create your portfolio to showcase your works, highlight 
                studies, and demonstrate your potential.
              </div>
            </div>
            <div className=" items-center bg-white text-center shadow-xl p-8 rounded-lg ">
              <div className="text-xl text-yellow-500  ml-20 font-bold  text-center">
                <WalletIcon className="w-8 h-8" />
              </div>
              <div className="text-black font-bold text-lg">
               Get a job
              </div>

              <div className="  ">
              Provide your contact details and await job opportunities to come your way.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-5xl font-bold my-20  mb-8">
        <span className="font-extrabold">Your</span> Talent
        <br />
        <span>
          {" "}
          Our <span className="font-extrabold">Portfolios!</span>
        </span>
        <div className="flex flex-col  justify-center mt-4 mx-20">
          <div className="flex">
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px] "
                src={HomeImg2}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={HomeImg3}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={HomeImg8}
                alt="Card Image"
              />
            </div>
          </div>
          <div className="flex">
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
              <img className="w-full  " src={HomeImg6} alt="Card Image" />
            </div>
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={HomeImg4}
                alt="Card Image"
              />
            </div>
            <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
              <img
                className="w-full max-w-[800px]"
                src={HomeImg7}
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </div>
      <Blogs />

      <Footer />
    </div>
  );
}

export default Hoome;
