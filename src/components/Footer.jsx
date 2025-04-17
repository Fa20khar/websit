import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-[#CCD6F6] py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#64FFDA]">Code With Pride</h3>
          <p className="text-[#8892B0] mt-2">
            We craft beautiful websites that drive business growth. Connect with us for your next project!
          </p>
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:text-[#CCD6F6] transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:text-[#CCD6F6] transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:text-[#CCD6F6] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] text-2xl hover:text-[#CCD6F6] transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-sm text-[#8892B0]">
          <p>&copy; 2025 Code With Pride. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="text-[#64FFDA] hover:underline">
              Privacy Policy
            </a> | 
            <a href="/terms" className="text-[#64FFDA] hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
