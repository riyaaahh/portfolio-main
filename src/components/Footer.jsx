import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">PortFOe</h2>
            <p>Your go-to platform for showcasing your work.</p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/Help" className="hover:underline">Help</a></li>

              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/Help" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: support@portfolioupload.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
            </div>
          </div>

          <div className="w-full mt-8">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input type="email" placeholder="Your Email" className="px-4 py-2 w-full md:w-2/3 border border-gray-400 rounded-lg focus:outline-none" />
              <button type="submit" className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          &copy; 2024 Portfolio Upload. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
