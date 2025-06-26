import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Food Market</h2>
          <p className="text-gray-400"> 
            <strong>TastyFood </strong>
            Your favorite meals,delivered host and fast. From local flavors to golbal delights
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to='/blog' className="hover:text-white">Blog</Link></li>
            <li><Link to='/helpcenter' className="hover:text-white">Help Center</Link></li>
            <li><Link to='/privacypolicy' className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to='/termofservice' className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://www.facebook.com"><FaFacebook className="hover:text-white" size={20} color='#1877F2' /></a>
            <a href="https://www.twitter"><FaTwitter className="hover:text-white" size={20} color='#1DA1F2' /></a>
            <a href="https://www.instagram"><FaInstagram className="hover:text-white" size={20} color='#E1306C'/></a>
            <a href="https://www.github"><FaGithub className="hover:text-white" size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Food Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;