import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * PageBanner with Automatic Breadcrumbs (based on current URL path)
 * Props:
 * - title: Page Title (like "About Us")
 */
const PageBanner = ({ title }) => {
  const location = useLocation();

  // Current path -> split into segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      {/* Content Area */}
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 text-center py-16 relative z-10">
        {/* Title */}
        <h1
          className="text-5xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h1>

        {/* Breadcrumbs */}
        <p className="text-lg text-gray-600 font-medium flex justify-center flex-wrap">
          <Link to="/" className="hover:text-green-600 transition duration-300">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <span key={to} className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                {isLast ? (
                  <span className="text-green-600 capitalize">
                    {value.replace("-", " ")}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-green-600 transition duration-300 capitalize"
                  >
                    {value.replace("-", " ")}
                  </Link>
                )}
              </span>
            );
          })}
        </p>
      </div>

      {/* Illustration */}
      <div
        className="w-full h-40 bg-contain bg-no-repeat bg-bottom z-0"
        style={{
          backgroundImage: "url(/page-banner.jpg)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default PageBanner;
