import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const PageBanner = ({ title }) => {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/home/02.jpg)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Title with background overlay */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light mb-2 px-4 py-2 rounded-md bg-black/20"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium flex items-center gap-1 mt-4">
          <Link
            to="/"
            className="text-primary hover:text-[#fb8c00] transition duration-300 flex items-center gap-1"
          >
            <AiFillHome size={25} /> Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
