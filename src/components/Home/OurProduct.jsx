import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import CustomButton from "../CustomButton";

// --- Products Data ---
const products = [
  {
    id: 1,
    name: "Gowala Ghee",
    category: "Ghee",
    image: "/products/01.png",
    rating: 5,
    reviews: 2,
    price: 45.99,
    discount: "20%",
  },
  {
    id: 2,
    name: "Gowala Cheese",
    category: "Cheese",
    image: "/products/02.png",
    rating: 4,
    reviews: 3,
    price: 45.99,
    discount: null,
  },
  {
    id: 3,
    name: "Milk Shake",
    category: "Milk",
    image: "/products/03.png",
    rating: 5,
    reviews: 1,
    price: 99.99,
    discount: "20%",
  },
  {
    id: 4,
    name: "Gowala Butter",
    category: "Butter",
    image: "/products/04.png",
    rating: 3,
    reviews: 2,
    price: 45.99,
    discount: null,
  },
];

// --- Star Rating ---
const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center text-yellow-400">
    {[...Array(totalStars)].map((_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "currentColor" : "gray"}
        className="mr-0.5"
      />
    ))}
  </div>
);

// --- Left Side Product Card ---
const ProductCard = ({ product }) => (
  <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group w-72 sm:w-80">
    <div className="bg-[#eff4f8] m-3 relative rounded-lg">
      {product.discount && (
        <span className="absolute top-5 right-5 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          -{product.discount}
        </span>
      )}
      <div className="flex justify-center items-center p-6 h-52 cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition-colors duration-300">
          {product.name}
        </h4>
        <div className="flex justify-center items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews} Reviews)
          </span>
        </div>
        <p className="text-xl font-bold text-gray-700">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

// --- Right Side Carousel Card ---
const CarouselCard = ({ product, height }) => (
  <div
    className={`relative bg-white rounded-lg shadow-md overflow-hidden`}
    style={{ height: `${height}px` }}
  >
    <div className="bg-[#eff4f8] relative h-full m-3 flex flex-col">
      {product.discount && (
        <span className="absolute top-5 right-5 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          -{product.discount}
        </span>
      )}
      <div className="flex justify-center items-center h-2/3">
        <img
          src="/home/01.png"
          alt={product.name}
          className="max-h-full max-w-[75%] object-contain"
        />
      </div>
      <div className="text-center mt-4">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h4>
        <div className="flex justify-center items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews} Reviews)
          </span>
        </div>
        <p className="text-2xl font-extrabold text-gray-700">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

// --- Right Side Carousel ---
const ProductCarousel = ({ products, cardHeight }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full sm:w-96">
      <div className="overflow-hidden rounded-lg relative" style={{ height: `${cardHeight}px` }}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
              idx === current ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <CarouselCard product={product} height={cardHeight} />
          </div>
        ))}

        {/* Dots inside relative container */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center z-10">
          {products.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
                idx === current ? "bg-green-600" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
};

// --- Main Section ---
const OurProduct = () => {
  const leftCardRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState(0);

  useEffect(() => {
    if (leftCardRef.current) {
      const cardHeight = leftCardRef.current.offsetHeight;
      setCarouselHeight(cardHeight * 2); // double the left card height
    }
  }, []);

  return (
    <section className="py-20 bg-image">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans text-center">
          Our Product
        </h2>
        <h3
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          We Provided the Best Product
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-center">
          Continually productize compelling quality for packed with Elated
          Themes Setting up to website and creating pages.
        </p>

        {/* Left Products + Right Carousel */}
        <div className="flex flex-col lg:flex-row">
          {/* Left - 2x2 Product Grid */}
          <div className="grid grid-cols-2 gap-x-23 flex-1">
            {products.map((product, idx) => (
              <div key={product.id} ref={idx === 0 ? leftCardRef : null}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right - Product Carousel */}
          <div className="flex-1 flex justify-center items-start">
            {carouselHeight > 0 && (
              <ProductCarousel
                products={products}
                cardHeight={carouselHeight}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <CustomButton text="View All Products" link="/about" />
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
