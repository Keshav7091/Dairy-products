import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "/" },
  { name: "Recipes", path: "/recipes" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-24 grid lg:grid-cols-3 gap-12">
        {/* Brand & About */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-wider text-cow-gradient">
            Cows Choice
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Crafting premium dairy products that blend tradition and modernity.
            Health, taste, and sustainability in every drop.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-125"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-transform transform hover:scale-125"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-cow-gradient mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Card */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h4 className="text-xl font-bold text-cow-gradient mb-3">
            Subscribe to Updates
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Get exclusive recipes, offers, and news directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full text-white w-full sm:w-auto focus:outline-none border border-gray-600"
            />
            <button className="btn btn-primary px-5 py-3 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Horizontal line + copyright */}
      <div className="border-t border-gray-700  py-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cows Choice. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
