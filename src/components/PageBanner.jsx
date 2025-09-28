import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageBanner = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/page-banner.jpg)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-12 xl:px-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black font-medium flex flex-wrap justify-center items-center mt-2">
          <Link to="/" className="hover:text-green-400 transition duration-300">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <span key={to} className="flex items-center">
                <span className="mx-1 sm:mx-2 text-gray-300">/</span>
                {isLast ? (
                  <span className="text-green-400 capitalize">
                    {value.replace("-", " ")}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-green-400 transition duration-300 capitalize"
                  >
                    {value.replace("-", " ")}
                  </Link>
                )}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
