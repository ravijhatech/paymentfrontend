import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/auth";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your real backend login
    const response = await fetch("https://foodmarketbackend.onrender.com/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.token) {
      setToken(data.token);
      navigate("/home");
    } else {
      alert("Login failed");
    }
  };


  return (
    
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email}
          onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label className="block text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
               value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-right">
            <a onClick={() => navigate('/ForgotPassword')} className="text-sm text-indigo-600 hover:underline cursor-pointer">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">Or continue with</div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <FaGithub className="text-gray-800" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6 cursor-pointer">
          Don’t have an account?
          <a onClick={() => navigate('/register')} className="text-indigo-600 hover:underline ml-1">Register</a>
        </p>
      </div>
    </div>
  
  );
}
