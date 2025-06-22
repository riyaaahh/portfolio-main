import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Create from './Create'
import Header from './../components/Header';
function Getstarted() {
    return (
        <>
            <Header />
            <div className='flex bg-[#e7f0ff] h-screen w-full'>

            
                <div className='w-screen'>
                    <div className="max-w-9xl w-screen bg-white p-6 rounded-md shadow-md mx-auto  h-screen">
                        <h1 className="text-2xl font-semibold mb-6">Choose Your Job Field</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Software Development</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Digital Marketing</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Graphic Designer</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Blockchain Developer</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Web Designer</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">System Analyst</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Cloud Architect</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Web Developer</h2>
                                </div>
                            </Link>


                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Data Scientist</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Software Engineer</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Computer Programmer</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Database Manager</h2>
                                </div>
                            </Link>
                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">AI Engineer</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Product Manager</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">UI/UX Designer</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">ERP Consultant</h2>
                                </div>
                            </Link>
                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Systems Integrator</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Technical Writer</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Cybersecurity Analyst</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">App Developer</h2>
                                </div>
                            </Link>
                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100  p-4 rounded-md shadow-md  cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">IT Auditor</h2>
                                </div>
                            </Link>

                            {/* Category Card 2 */}
                            <Link to={"/Create"}>

                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">IT Consultant</h2>
                                </div>
                            </Link>

                            {/* Category Card 3 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">Automation Engineer</h2>
                                </div>
                            </Link>

                            {/* Category Card 1 */}
                            <Link to={"/Create"}>
                                <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
                                    <h2 className="text-lg font-semibold mb-2">IT Architect</h2>
                                </div>
                            </Link>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Getstarted;
