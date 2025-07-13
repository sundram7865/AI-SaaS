import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-white border-t">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-300 pb-6">
        {/* Logo & Description */}
        <div className="md:max-w-96">
          <img
            className="h-9"
            src={assets.logo}
            alt="ZapAI Logo"
          />
          <p className="mt-6 text-sm leading-relaxed">
            <strong>ZapAI</strong> is your AI-powered assistant for creating high-quality content,
            generating images, optimizing resumes, and more. Built to boost your productivity and creativity.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Stay in the loop</h2>
            <div className="text-sm space-y-2">
              <p>Get the latest updates, AI tips, and resources — directly to your inbox.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-400 placeholder-gray-500 focus:ring-2 ring-blue-600 outline-none w-full max-w-64 h-9 rounded px-3"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-primary w-24 h-9 text-white rounded hover:bg-blue-700 transition
                cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-400">
        © {new Date().getFullYear()} ZapAI. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
