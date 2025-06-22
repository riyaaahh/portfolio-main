import React from "react";
import Aboutme from "./Aboutme";
import { NavLink, Link } from 'react-router-dom';
import Lolatwo from '../assets/Lolatwo.png'
function Lolaa() {
    return(

<div>
<div  className="text-white bg-black flex justify-between p-10 ">
<h1 className="text-3xl font-bold text-white flex">MY PORTFOLIO</h1>
<div >
    <div>
            <ul className="flex font-bold justify-between">
            <Link to={"/Aboutme"}>

        <li className="pl-10 pr-10"><a>ABOUT ME</a></li>
        </Link>
        <li className="pl-10 pr-10"><a>SKILLS</a></li>
        <li className="pl-10 pr-10"><a>CONTACT ME</a></li>
        <li className="pl-10 pr-10"><a>WORKS</a></li>
        </ul>
        </div>
        </div>
</div>
<div className="flex justify-between  ">
    <div className="text-black p-20   bg-[#e7f0ff] m-4 mb-20 rounded-md">
        <h3 >Hi I'm Edward</h3>
        <h1 className="text-3xl">LOLA TUNG</h1>
        <h3 className="font-bold">Graphic Designer from California,USA.</h3>
        <div className="pt-2">Hello, I'm a passionate California-based graphic designer with a flair for visual storytelling and a blend of contemporary and timeless aesthetics. Recognized for transforming ideas into impactful design narratives, I thrive on crafting compelling visuals that resonate both locally and in virtual spheres. Let's collaborate and bring your creative vision to life!</div>

        </div>
        <div >
        <img  className='max-w-[1500px]' src={Lolatwo} alt="/" />
        </div>
        </div>
</div>

    )};

export default Lolaa; 