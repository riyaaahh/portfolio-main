import React from "react";
import { Link,NavLink, useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { auth } from "../firebase/firebase";
const Navbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };
  return (
    <header className="bg-black text-white p-5 text-center">
    <div className="container flex justify-between mx-auto">
      <div className="flex justify-items-start gap-2 font-bold">
        <img className="w-12 h-12" src={Logo} alt="Logo" />
        <h1 className="text-3xl">PortFOe</h1>
      </div>

      <div className="flex  justify-between mt-3">
        <ul className="flex  ">
          <li>
            <NavLink
              exact
              to="/"
              className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"
              activeClassName="bg-gray-100"
            >
              Home
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/About"
              className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"
              activeClassName="bg-gray-100"
            >
              About Us
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/Contact"
              className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"
              activeClassName="bg-gray-100"
            >
              Contact
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/Help"
              className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"
              activeClassName="bg-gray-100"
            >
              Help
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <Link to={"/Form"}>
      <button
          className="text-center text-black rounded-md py-2 px-10 font-bold
                         hover:font-extrabold font-sans bg-green-200 border-2 border-black hover:bg-gray-100 hover:scale-105 duration-300"
        >
          Create Your Portfolio
        </button>
      </Link>
    </div>

    <div className="pt-2"></div>
  </header>
  );
};

export default Navbar;
