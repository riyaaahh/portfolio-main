import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import Logo from '../assets/Logo.png'
const Header = () => {

    const navigate = useNavigate();
    const user = auth.currentUser;
    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }
    return (
        <nav className="bg-black text-white p-5 text-center ">
            <div className="container flex justify-between mx-auto">

                <div className="flex justify-items-start gap-2 font-bold">
                    <img className="w-12 h-12" src={Logo}></img>
                    <h1 className="text-3xl">PortFOe</h1>
                </div>

                <div className="flex pr justify-between">
                    <ul className="flex  ">
                        <Link to={"/"}>
                            <li className="text-center text-black rounded-md py-2 px-10 font-bold
                             hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"><a href="#">Home</a></li>
                        </Link>
                        <li className="text-gray-300">
                           
                        </li>
                        <Link to={"/About"}>
                            <li className="text-center text-black rounded-md py-2 px-10 font-bold
                             hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"><a href="#">About Us</a></li>
                        </Link>
                        <li className="text-gray-300">
                         
                        </li>
                        <Link to={"/Contact"}>
                            <li><button className="text-center text-black rounded-md py-2 px-10 font-bold
                             hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"><a href="#">Contact</a></button></li>
                        </Link>
                        <li className="text-gray-300">
                           
                        </li>
                        <Link to={"/Help"}>
                            <li>
                                <button className="text-center text-black rounded-md py-2 px-10 font-bold
                             hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"><a href="#">Help</a>
                                </button> </li>
                        </Link>



                    </ul>
                </div>
                {user && user?.email ? (
                    <div className="flex gap-2">
                        <div className="pt-2" onClick={logoutUser}>
                            <div className="block px-6 py-1 mb-2 leading-loose text-xs text-center  text-black font-semibold
                                  bg-green-200 border-2
                                 border-black hover:bg-gray-100 rounded-xl transition-transform transform hover:scale-105" href="#">Logout</div>
                        </div>
                        <div className="pt-2">
                            <Link to={"/Authentication"}>
                                <a className="block px-6 py-1 mb-2 leading-loose text-xs text-center  text-black font-semibold
                                  bg-green-200 border-2
                                 border-black hover:bg-gray-100 rounded-xl transition-transform transform hover:scale-105" href="#">My Account</a>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <div className="pt-2">
                            <Link to={"/Authentication"}>
                                <a className="block px-6 py-1 mb-2 leading-loose text-xs text-center  text-black font-semibold
                                  bg-green-200 border-2
                                 border-black hover:bg-gray-100 rounded-xl transition-transform transform hover:scale-105" href="#">Login</a>
                            </Link>
                        </div>
                        <div className="pt-2">
                            <Link to={"/Signup"}>
                                <a className="block px-6 py-1 mb-2 leading-loose text-xs text-center 
                                 text-black font-semibold  bg-green-200 border-2 border-black
                                  hover:bg-gray-100 rounded-xl transition-transform transform hover:scale-105" href="#">Create Account</a>
                            </Link>
                        </div>
                    </div>
                )}




            </div>
        </nav>
    )
}

export default Header