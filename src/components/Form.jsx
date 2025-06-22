
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { HeartIcon } from '@heroicons/react/16/solid';
import { Link,NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.png"
const Form = () => {
  const [fullName, setFullName] = useState('');
  const [job, setJob] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [otherJobs, setOtherJobs] = useState('');
  const [college, setCollege] = useState('');
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [feature3, setFeature3] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [halfImage, setHalfImage] = useState(null);
  const [profileImageError, setProfileImageError] = useState('');
  const [halfImageError, setHalfImageError] = useState('');
  const [degrees, setDegrees] = useState([
    { degree: '', graduationDate: '', college: '', online: false },
    { degree: '', graduationDate: '', college: '', online: false },
    { degree: '', graduationDate: '', college: '', online: false },
  ]);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [works, setWorks] = useState({
    photos: [],
    videos: [],
  });
  const [photoError, setPhotoError] = useState('');
  const [videoError, setVideoError] = useState('');

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleJobChange = (e) => setJob(e.target.value);
  const handleJobDescriptionChange = (e) => setJobDescription(e.target.value);
  const handleOtherJobsChange = (e) => setOtherJobs(e.target.value);
  const handleCollegeChange = (e, index) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index].college = e.target.value;
    setDegrees(updatedDegrees);
  };
  const handleDegreeChange = (index, field, value) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index][field] = value;
    setDegrees(updatedDegrees);
  };

  const handleOnlineStudyChange = (index, e) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index].online = e.target.checked;
    setDegrees(updatedDegrees);
  };

  const handleFeature1Change = (e) => setFeature1(e.target.value);
  const handleFeature2Change = (e) => setFeature2(e.target.value);
  const handleFeature3Change = (e) => setFeature3(e.target.value);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    const isValid = await validateImageTransparency(file, setProfileImageError);
    if (isValid) {
      setProfileImage(file);
    } else {
      setProfileImage(null);
    }
  };

  const handleHalfImageChange = async (e) => {
    const file = e.target.files[0];
    const isValid = await validateImageTransparency(file, setHalfImageError);
    if (isValid) {
      setHalfImage(file);
    } else {
      setHalfImage(null);
    }
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const isValid = validateFiles(files, 'image', setPhotoError);
    if (isValid) {
      setWorks((prevWorks) => ({
        ...prevWorks,
        photos: [...prevWorks.photos, ...files],
      }));
    }
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const isValid = validateFiles(files, 'video', setVideoError);
    if (isValid) {
      setWorks((prevWorks) => ({
        ...prevWorks,
        videos: [...prevWorks.videos, ...files],
      }));
    }
  };

  const validateImageTransparency = (file, setError) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        for (let i = 3; i < pixels.length; i += 4) {
          if (pixels[i] < 255) {
            setError('');
            resolve(true);
            return;
          }
        }

        setError('Image must have a transparent background.');
        resolve(false);
      };
    });
  };

  const validateFiles = (files, type, setError) => {
    let isValid = true;
    files.forEach((file) => {
      if (type === 'image' && !file.type.startsWith('image')) {
        setError('Please select only image files.');
        isValid = false;
      } else if (type === 'video' && !file.type.startsWith('video')) {
        setError('Please select only video files.');
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileImageError || halfImageError || photoError || videoError) {
      return;
    }
    // Replace with actual form submission logic (e.g., API call, state update)
    console.log('Portfolio Item:', {
      fullName,
      job,
      jobDescription,
      otherJobs,
      college,
      features: [feature1, feature2, feature3],
      profileImage,
      halfImage,
      degrees,
      contact: { email, phoneNumber, instagram, twitter, linkedin, location, address },
      works,
    });
    // Reset form fields after submission
    setFullName('');
    setJob('');
    setJobDescription('');
    setOtherJobs('');
    setCollege('');
    setFeature1('');
    setFeature2('');
    setFeature3('');
    setProfileImage(null);
    setHalfImage(null);
    setDegrees([
      { degree: '', graduationDate: '', college: '', online: false },
      { degree: '', graduationDate: '', college: '', online: false },
      { degree: '', graduationDate: '', college: '', online: false },
    ]);
    setEmail('');
    setPhoneNumber('');
    setInstagram('');
    setTwitter('');
    setLinkedin('');
    setLocation('');
    setAddress('');
    setWorks({
      photos: [],
      videos: [],
    });
  };

  return (
    <div className='bg-green-200 w-screen h-full pb-10 '>
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
                             hover:font-extrabold font-sans bg-green-200 border-2
                              border-black hover:bg-gray-100 
                              hover:scale-105 duration-300"
                  activeClassName="bg-gray-100"
                >
                  Help
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <Link to={"/Final"}>

          <button
            to="/Help"
            className="text-center text-black rounded-md py-2 px-10 font-bold
                       hover:font-extrabold font-sans bg-green-200 border-2
                        border-black hover:bg-gray-100 
                        hover:scale-105 duration-300"
            activeClassName="bg-gray-100"
          >
            Submit
          </button>
          </Link >
        </div>

        <div className="pt-2"></div>
      </header>  
    <div className="container mx-8 shadow-xl p-8 bg-white border border-black my-20 ">
      <h1 className="text-2xl font-bold mb-4 flex ml-96">Lets get to know you.
        <div className='mt-1'><HeartIcon className='w-7 h-7 text-red-500'/></div></h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-2">About You</h2>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Upload Profile Image</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleProfileImageChange}
              required
              className="mt-1 block"
            />
            {profileImageError && <p className="text-red-500 text-sm mt-1">{profileImageError}</p>}
          </div>
          <div>
            <label htmlFor="halfImage" className="block text-sm font-medium text-gray-700">Upload Half Image</label>
            <input
              type="file"
              id="halfImage"
              name="halfImage"
              accept="image/*"
              onChange={handleHalfImageChange}
              required
              className="mt-1 block"
            />
            {halfImageError && <p className="text-red-500 text-sm mt-1">{halfImageError}</p>}
          </div>
        </div>

        <div>
       

          <h2 className="text-xl font-bold text-green-600 mb-2">Your Works</h2>
          <div>
            <label htmlFor="job" className="block text-sm font-medium text-gray-700">Job</label>
            <input
              type="text"
              id="job"
              name="job"
              value={job}
              onChange={handleJobChange}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              required
              rows={2}
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            ></textarea>
          </div>
          <div>
            {/* Photo Upload */}
            <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Upload Photos</label>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="mt-1 block"
            />
            {photoError && <p className="text-red-500 text-sm mt-1">{photoError}</p>}
          </div>
          <div>
            {/* Video Upload */}
            <label htmlFor="videos" className="block text-sm font-medium text-gray-700">Upload Videos</label>
            <input
              type="file"
              id="videos"
              name="videos"
              accept="video/*"
              multiple
              onChange={handleVideoChange}
              className="mt-1 block"
            />
            {videoError && <p className="text-red-500 text-sm mt-1">{videoError}</p>}
          </div>
          <div>
            <label htmlFor="otherJobs" className="block text-sm font-medium text-gray-700">Other Jobs</label>
            <input
              type="text"
              id="otherJobs"
              name="otherJobs"
              value={otherJobs}
              onChange={handleOtherJobsChange}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          

          <div>
          <h2 className="text-xl font-bold text-green-600 mt-4 mb-2">Your Achievements</h2>

            <label htmlFor="feature1" className="block text-sm font-medium text-gray-700"> 1)</label>
            <input
              type="text"
              id="feature1"
              name="feature1"
              value={feature1}
              onChange={handleFeature1Change}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="feature2" className="block text-sm font-medium text-gray-700">2)</label>
            <input
              type="text"
              id="feature2"
              name="feature2"
              value={feature2}
              onChange={handleFeature2Change}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="feature3" className="block text-sm font-medium text-gray-700">3)</label>
            <input
              type="text"
              id="feature3"
              name="feature3"
              value={feature3}
              onChange={handleFeature3Change}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-600 mb-2">Your Education</h2>
          {degrees.map((degree, index) => (
            <div key={index} className="grid grid-cols-2 gap-x-4 mb-4">
              <div>
                <label htmlFor={`degree${index + 1}`} className="block text-sm font-medium text-gray-700">
                  Degree {index + 1}
                </label>
                <input
                  type="text"
                  id={`degree${index + 1}`}
                  name={`degree${index + 1}`}
                  value={degree.degree}
                  onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
                  required
                  className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor={`graduationDate${index + 1}`} className="block text-sm font-medium text-gray-700">
                  Graduation Date
                </label>
                <input
                  type="text"
                  id={`graduationDate${index + 1}`}
                  name={`graduationDate${index + 1}`}
                  value={degree.graduationDate}
                  onChange={(e) => handleDegreeChange(index, 'graduationDate', e.target.value)}
                  required
                  className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor={`college${index + 1}`} className="block text-sm font-medium text-gray-700">
                  College
                </label>
                <input
                  type="text"
                  id={`college${index + 1}`}
                  name={`college${index + 1}`}
                  value={degree.college}
                  onChange={(e) => handleCollegeChange(e, index)}
                  required
                  className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`onlineStudy${index + 1}`}
                  name={`onlineStudy${index + 1}`}
                  checked={degree.online}
                  onChange={(e) => handleOnlineStudyChange(index, e)}
                  className="mr-2"
                />
                <label htmlFor={`onlineStudy${index + 1}`} className="text-sm text-gray-700">
                  Studied Online
                </label>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-600 mb-2">Contact Information</h2>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 flex items-center">
    <span className="mr-2">Instagram</span>
    <FontAwesomeIcon icon={faInstagram} className="text-blue-500" />
  </label>
  <input
    type="text"
    id="instagram"
    name="instagram"
    value={instagram}
    onChange={(e) => setInstagram(e.target.value)}
    className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
  />
</div>
<div>
  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 flex items-center">
    <span className="mr-2">Twitter</span>
    <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
  </label>
  <input
    type="text"
    id="twitter"
    name="twitter"
    value={twitter}
    onChange={(e) => setTwitter(e.target.value)}
    className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
  />
</div>
<div>
  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 flex items-center">
    <span className="mr-2">LinkedIn</span>
    <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" />
  </label>
  <input
    type="text"
    id="linkedin"
    name="linkedin"
    value={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
    className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
  />
</div>

<div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700 flex items-center">
    <span className="mr-2">Location</span>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
  </label>
  <input
    type="text"
    id="location"
    name="location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
  />
</div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows={2}
              className="mt-1 block w-full border-black p-2 rounded-lg border-2 border-gray-200 brounded-md shadow-sm sm:text-sm"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center">
        <Link to={"/Final"}>

          <button
            type="submit"
            className="inline-flex items-center px-12 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-600 "
          >
            Submit
          </button>
          </Link >

        </div>

      </form>
    </div>
    </div>
  );
};

export default Form;
