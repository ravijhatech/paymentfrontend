import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/auth";

export default function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", image: null });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("image", form.image);

    const response = await fetch("https://foodmarketbackend.onrender.com/api/v1/register", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.token) {
      setToken(data.token);
      navigate("/login");
    } else {
      alert("Registration Sucessfully");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Create Account</h2>

          {/* Profile Image Upload */}
          <div className="flex justify-center mb-4">
            <label className="cursor-pointer relative w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-300 shadow">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Upload
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"

              />
            </label>
          </div>

          
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
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

            <button
             type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Register
            </button>
          

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?
            <a onClick={() => navigate('/')} className="text-indigo-600 hover:underline ml-1 cursor-pointer">Login</a>
          </p>
        </div>
      </div>
      </form>
    
  );
}
