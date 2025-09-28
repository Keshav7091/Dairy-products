import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Common Content ---
const defaultContent = {
  title: "Real Indian Dairy. Made Fresh in the UK",
  subtitle:
    "Paneer. Khoya. White Butter. Honest food, done right. Shop Now. Trade Enquiry. Explore Our Story.",
  btnText: "View Product",
};

// --- Slide Images ---
const slideImages = ["/home/03.jpg", "/home/02.jpg"];

// --- Mobile Detection Hook ---
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < breakpoint
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

// --- Hero Component ---
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  // Auto-slide only on desktop
  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, isMobile]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-[50vh]" : "h-screen"
      }`}
    >
      {/* Background Slider */}
      <div
        className={`flex w-full h-full transition-transform duration-1000 ease-in-out`}
        style={{
          transform: isMobile
            ? "translateX(0)"
            : `translateX(-${current * 100}%)`,
        }}
      >
        {slideImages.map((bg, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full z-10">
          <motion.div
            key={current}
            initial={!isMobile ? { opacity: 0, y: 40 } : {}}
            animate={!isMobile ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-full md:max-w-xl text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              {defaultContent.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white">
              {defaultContent.subtitle}
            </p>
            <Link
              to="/products"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-sm sm:text-base md:text-lg transition duration-300"
            >
              {defaultContent.btnText}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows (desktop only) */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 px-3 sm:px-5 py-2 sm:py-3 z-20 rounded-full cursor-pointer text-lg sm:text-xl"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 px-3 sm:px-5 py-2 sm:py-3 z-20 rounded-full cursor-pointer text-lg sm:text-xl"
          >
            &#10095;
          </button>
        </>
      )}
    </section>
  );
};

export default Hero;
