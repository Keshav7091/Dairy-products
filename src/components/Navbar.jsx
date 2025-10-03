import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Recipes", path: "/recipes" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50" ref={navRef}>
      <div className="container flex justify-between items-center px-6 md:px-0 py-4">
        {/* Logo */}
        <NavLink to="/">
          <div className="h-16 w-auto flex items-center">
            <img
              src="/logo.jpg"
              alt="Cow Choice"
              className="max-h-full w-auto object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        {/* Nav Links */}
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-active block" : "nav-link block"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
