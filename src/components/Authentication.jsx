import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword,getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Getstarted from './Getstarted';
import Forlogin from '../assets/Forlogin.jpg'
import { Toaster, toast } from 'sonner'

function Authentication() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const user = auth.currentUser;
  const auth2 = getAuth();

  useEffect(() => {

    console.log(auth2);
    if (user?.email) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/Getstarted");


          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    
  }, [user]);
  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Welcome back!', {
        description: 'Your sign-in was successful. Enjoy exploring and making the most out of our services.',
      });
      
      setTimeout(() => {

        navigate("/Getstarted");

      }, 1000);
    } catch {
      toast.error('Error!', {
        description: 'You entered a wrong username or password.',
      });
      setNotice("You entered a wrong username or password.");
    }
  }
  return (

    <div className='p-10 bg-green-200  '>
      <Toaster richColors  position="bottom-center"/>
      <div className='bg-white border-2 border-black rounded-md'>
        <section className="  shadow-md rounded-md relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

              <p className="mt-4 text-gray-500">
                Welcome! Login to your account to access personalized features, manage your settings, and enjoy an enhanced experience. Your journey continues with seamless access to exclusive content and services. Let's get started!
              </p>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label for="email" className="sr-only">Email</label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" className="sr-only">Password</label>

                <div className="relative">
                  <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link to={'/signup'}>

                  <p className="text-sm text-gray-500">
                    No account?
                    <a className="underline text-green-600 font-semibold" href="">Sign up</a>
                  </p>
                </Link>
                <button
                  onClick={(e) => loginWithUsernameAndPassword(e)}
                  type="submit"
                  className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 p-10 lg:h-full lg:w-1/2 pt-20">
            <img className="m-4 mr-8 border border-black " src={Forlogin} alt="/" />

          </div>
        </section>
      </div>
    </div>
  );
}

export default Authentication;
