import React from 'react';
import Home from './components/Home'
import Authentication from './components/Authentication'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import Portfoe1 from './components/Portfoe1';
import Getstarted from './components/Getstarted';
import Create from './components/Create';
import Aboutme from './components/Aboutme';
import Lolaa from './components/Lolaa';
import './firebase/firebase.js'
import Signup from './components/Signup.jsx';
import { AuthProvider } from './Context/index.jsx';
import Works from './components/Works.jsx';
import ContactMe from './components/ContactMe.jsx';
import ContactMe3 from './components/ContactMe3.jsx';


import Navbar from './components/Navbar.jsx'
import Form from './components/Form.jsx';
import Final from './components/Final.jsx';
import Portfoe3 from "./components/Portfoe3.jsx"
import AboutMe2 from "./components/AboutMe2.jsx";
import AboutMe3 from './components/AboutMe3.jsx';

import ContactMe2 from './components/ContactMe2.jsx';
import Works2 from './components/Works2.jsx';
import Works3 from './components/Works3.jsx';

import Blogs from './components/Blogs.jsx';
import Portfoe2 from './components/Portfoe2.jsx';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<Blogs  />} />

            <Route path="/Authentication" element={<Authentication />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/About" elementt={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/ContactMe2" element={<ContactMe2 />} />
            <Route path="/ContactMe3" element={<ContactMe3 />} />

            <Route path="/Help" element={<Help />} />
            <Route path="/Portfoe1" element={<Portfoe1 />} />
            <Route path="/Portfoe2" element={<Portfoe2 />} />
            <Route path="/Portfoe3" element={<Portfoe3 />} />

            <Route path="/Getstarted" element={<Getstarted />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Works2" element={<Works2 />} />
            <Route path="/Works3" element={<Works3 />} />

            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/AboutMe2" element={<AboutMe2 />} />
            <Route path="/AboutMe3" element={<AboutMe3 />} />
            <Route path="/Lolaa" element={<Lolaa />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/ContactMe2" element={<ContactMe2 />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Final" element={<Final/>} />



          </Routes>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
