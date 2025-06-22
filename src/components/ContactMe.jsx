import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
        <Navbar/>
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
</section>
</div>
  );
};

export default ContactForm;
