import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const PartnerWithUs = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Text Block */}
          <div className="flex-1 relative text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 leading-tight ">
              Partner With Us
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-6">
              Are you a retailer, restaurant, or distributor? We offer reliable
              supply, great shelf life, and authentic products for trade.
            </p>
            {/* Ribbon / Badge style link */}
            <Link
              to="/contact"
              className="inline-block text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 bg-primary hover:bg-secondary cursor-pointer relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 transform -translate-x-full hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative flex items-center gap-2 z-10 text-sm sm:text-base md:text-lg">
                <FaBoxOpen /> Enquire Now
              </span>
            </Link>
          </div>

          {/* Right Image Block with hover interaction */}
          <div className="flex-1 relative group perspective mt-8 md:mt-0">
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-6 transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
              <img
                src="/home/05.jpg"
                alt="Partner With Us"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
              {/* Floating small badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg transform rotate-12">
                Trade Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
