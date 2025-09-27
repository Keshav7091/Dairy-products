import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const PartnerWithUs = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Text Block */}
          <div className="flex-1 relative">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Partner With Us
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg mb-6">
              Are you a retailer, restaurant, or distributor? We offer reliable supply, great shelf life, and authentic products for trade.
            </p>
            {/* Ribbon / Badge style link */}
            <div className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 btn btn-primary hover:bg-green-500 cursor-pointer relative overflow-hidden">
              <span className="absolute inset-0 bg-white/10 transform -translate-x-full hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative flex items-center gap-2 z-10">
                <FaBoxOpen /> Enquire Now
              </span>
            </div>
          </div>

          {/* Right Image Block with hover interaction */}
          <div className="flex-1 relative group perspective">
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
              <img
                src="/products/08.jfif"
                alt="Partner With Us"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
              {/* Floating small badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
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
