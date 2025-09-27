import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    bg: "/home/03.jpg",
    title: "Real Indian Dairy. Made Fresh in the UK",
    subtitle:
      "Paneer. Khoya. White Butter. Honest food, done right. Shop Now. Trade Enquiry. Explore Our Story.",
    btnText: "View Product",
    rightImage: "/home/01.png", // sirf is slide me image dikhana hai
  },
  {
    bg: "/home/02.jpg",
    title: "Real Indian Dairy. Made Fresh in the UK",
    subtitle:
      "Paneer. Khoya. White Butter. Honest food, done right. Shop Now. Trade Enquiry. Explore Our Story.",
    btnText: "Order Now",
    // rightImage is intentionally missing
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [current]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div
        className="flex w-full h-[100vh] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={slide.bg}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full z-10">
          {/* Left Side Text */}
          <div className="max-w-xl">
            <h1 className="text-4xl text-[#5d9913] md:text-6xl font-extrabold leading-tight">
              {slides[current].title}
            </h1>
            <p className="mt-4 text-[#5d9913] text-2xl">{slides[current].subtitle}</p>
            <button className="mt-6 btn btn-primary px-6 py-3 rounded-md  font-semibold cursor-pointer">
              {slides[current].btnText}
            </button>
          </div>

          {/* Right Side Image (optional) */}
          {slides[current].rightImage && (
            <div className="flex justify-center">
              <img
                src={slides[current].rightImage}
                alt="Product"
                className="max-h-[400px] object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black bg-white bg-opacity-30 hover:bg-opacity-50 px-5 py-2 z-20 cursor-pointer"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black bg-white bg-opacity-30 hover:bg-opacity-50 px-5 py-2 z-20 cursor-pointer"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;
