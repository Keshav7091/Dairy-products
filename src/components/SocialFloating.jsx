import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialFloating = () => {
  return (
    <div className="hidden md:flex fixed top-1/3 left-0 flex-col space-y-4 z-50">
      <a
        href="https://www.facebook.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-blue-700 transition"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-pink-600 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-blue-800 transition"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialFloating;
