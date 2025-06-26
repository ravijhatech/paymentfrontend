import React, { useState } from "react";
import logo from '../assets/Icons/logo.png'
import {Lock, LockIcon, Mail, Search,User2 } from "lucide-react";
import {FaEye, FaEyeSlash, FaFacebook, FaGoogle} from 'react-icons/fa'
import {IoEarthOutline} from 'react-icons/io5'
import { Link } from "react-router-dom";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword , setShowPassword] = useState(false);
  const [showPassword1 , setShowPassword1] = useState(false);
  const [country , setCountry] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-gray rounded-xl shadow-md flex flex-col md:flex-row p-6 gap-6">
        {/* Left Search Section */}
        <div className="flex-1">
          <div className="flex items-center mb-4 justify-center">
            <img src={logo} alt="LzyCrazy" className=" flex w-60 h-26 justify-center self-center items-center" />

          </div>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Anything..."
              className="w-full p-3 border rounded-full pl-10 shadow-sm focus:outline-none focus:ring"
            />
            <span className="absolute left-3 top-3 text-gray-400">
              <Search size={20} color="blue" />
            </span>
          </div>
          <br /><br />

          <div className="flex gap-3 flex-wrap mb-4">
            {["All", "Images", "Videos", "News", "Shopping"].map((tab) => (
              <button
                key={tab}
                className="px-3 py-1 rounded-full bg-gray-200 text-sm hover:bg-blue-100"
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="px-3 py-1 rounded-full bg-gray-200 text-sm hover:bg-blue-100">We are hiring</button>
          <br /><br /> <br />

          <p className="mt-6 text-sm text-gray-400">
            LzyCrazy offered in: Hindi, English, Bengali, Arbi
          </p>
        </div>

        {/* Right Login/Signup Section */}
        <div className="flex-1 border-l pl-6 shadow-md shadow-gray-300">
          <div className="flex mb-4 justify-evenly ">
            <button
              onClick={() => setIsSignup(false)}
              className={`w-1/3 py-2  ${!isSignup ? "bg-blue-500 text-white rounded-l-full" : "bg-gray-200 "} `}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`w-1/3 py-2  ${isSignup ? "bg-blue-500 text-white rounded-r-full" : "bg-gray-200"}`}
            >
              Signup
            </button>
          </div>
          <div className="mr-10">

          {isSignup ? (
            <form className="space-y-4">
              <div className="text-center">
                <h1 className="text-black font-bold text-4xl">Sign Up</h1>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-between">
                
                <div className="relative">
                  <User2 className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" size={20} />

                  <input type="text" placeholder="First Name" className="w-50 p-2 border rounded pl-10 " />
                </div>

                <div className="relative">
                  <User2 className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" size={20} />

                  <input type="text" placeholder="Last Name" className="w-50 p-2 border rounded pl-10  " />
                </div>
              </div>
              <div>
                <div className="relative">
                  <select
                  value={country}
                  onChange={(e)=> setCountry(e.target.value)}
                  className="w-full p-2 border rounded pl-10"
                  >
                    <option value="" disabled>Select Country </option>
                    <option value="IN"  >India</option>
                    <option value="CA"  >Canada</option>
                    <option value="US"  >United States</option>
                    <option value="UK"  >United Kingdom</option>
                    <option value="NP"  >Nepal</option>
                    <option value="PK"  >Pakistan</option>


                </select>
                
                  < IoEarthOutline className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" size={20} />
                </div>
              </div>
              <div className="relative">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded pl-10" />
                <span className="absolute left-3 top-3 text-gray-400 mr-2">
                  <Mail size={20} />
                </span>
              </div>
              <div className="relative">
                <input type={showPassword ? 'text':'password'} placeholder="Password" className="w-full p-2 border rounded pl-10" />
                <span className="absolute left-3 top-3 text-gray-400 mr-2">
                  <LockIcon size={20} />

                </span>
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {
                    showPassword ?( <FaEye className="h-5 w-5"/>):
                    (
                      <FaEyeSlash className="h-5 w-5"/>
                    )
                  }

                </button>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
            </form>
          ) : (
            <form className="space-y-4">
              <div className="relative">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded pl-10" />
                <span className="absolute left-3 top-3 text-gray-400 mr-2">
                  <Mail size={20} />
                </span>
              </div>
              <div className="relative">
                <input type={showPassword1 ? 'text':'password'} placeholder="Password" className="w-full p-2 border rounded pl-10" />
                <span className="absolute left-3 top-3 text-gray-400 mr-2">
                  <Lock size={20} />
                </span>
                <button
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {
                    showPassword1 ?( <FaEye className="h-5 w-5"/>):
                    (
                      <FaEyeSlash className="h-5 w-5"/>
                    )
                  }

                </button>
              </div>
              <div className="text-right text-sm">
                <Link to="" className="text-blue-500">Forgot Password..?</Link>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>

              <div className="text-center text-gray-400 text-sm">Or continue with</div>
              <div className="flex gap-3 justify-center mt-2">
                <button className="flex items-center gap-2 px-4 py-1  text-red-500 rounded">
                  <span><FaGoogle color="red"/></span> Google
                </button>
                <button className="flex items-center gap-2 px-4 py-1 text-blue-600 rounded">
                  <span><FaFacebook color="blue"/></span> Facebook
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-400 mt-6 text-center">
        © 2025 LZYCRAZY PVT LTD. All rights reserved.
      </footer>
    </div>
  );
}
