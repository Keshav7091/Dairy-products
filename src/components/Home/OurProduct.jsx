import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

const products = [
  {
    id: 1,
    name: "Paneer - Malai",
    category: "Paneer",
    image: "/products/04.jpg",
    rating: 5,
    reviews: 2,
    price: 45.99,
    discount: "20%",
  },
  {
    id: 2,
    name: "Whey Protein",
    category: "Protein",
    image: "/products/05.png",
    rating: 4,
    reviews: 3,
    price: 45.99,
    discount: null,
  },
  {
    id: 3,
    name: "Khoya (Mawa)",
    category: "Khoya",
    image: "/products/03.png",
    rating: 5,
    reviews: 1,
    price: 99.99,
    discount: "20%",
  },
  {
    id: 4,
    name: "White Butter",
    category: "Butter",
    image: "/products/01.png",
    rating: 3,
    reviews: 2,
    price: 45.99,
    discount: null,
  },
];

const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center text-yellow-400 justify-center">
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

const ProductCard = ({ product, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
  >
    {product.discount && (
      <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
        -{product.discount}
      </span>
    )}
    <div className="overflow-hidden rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 text-center">
      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
        {product.name}
      </h4>
      <StarRating rating={product.rating} />
      <span className="text-sm text-gray-500 ml-1">
        ({product.reviews} Reviews)
      </span>
      <p className="text-xl font-bold text-gray-700 mt-2">
        ${product.price.toFixed(2)}
      </p>
    </div>
  </motion.div>
);

const CarouselCard = ({ product, height }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center"
    style={{ height: `${height}px` }}
  >
    {product.discount && (
      <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
        -{product.discount}
      </span>
    )}
    <div className="flex flex-col items-center justify-center h-full p-4">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-72 object-contain mb-4"
      />
      <h4 className="text-2xl font-bold text-gray-800 mb-1 text-center">
        {product.name}
      </h4>
      <StarRating rating={product.rating} />
      <span className="text-sm text-gray-500 mb-2">
        ({product.reviews} Reviews)
      </span>
      <p className="text-2xl font-extrabold text-gray-700">
        ${product.price.toFixed(2)}
      </p>
    </div>
  </motion.div>
);

const ProductCarousel = ({ products, cardHeight }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % products.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full sm:w-96">
      <div
        className="overflow-hidden rounded-xl relative"
        style={{ height: `${cardHeight}px` }}
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`absolute top-0 left-0 w-full transition-transform duration-700 ${
              idx === current ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <CarouselCard product={product} height={cardHeight} />
          </div>
        ))}
        <div className="absolute bottom-5 left-0 w-full flex justify-center z-10">
          {products.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
                idx === current ? "bg-green-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const OurProduct = () => {
  const leftCardRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState(0);

  useEffect(() => {
    if (leftCardRef.current) {
      setCarouselHeight(leftCardRef.current.offsetHeight * 2);
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          Our Products
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 text-center">
          We Provide the Best Product
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-center">
          Continually productize compelling quality for packed with Elated
          Themes, setting up website and creating pages.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 flex-1">
            {products.map((product, idx) => (
              <div key={product.id} ref={idx === 0 ? leftCardRef : null}>
                <ProductCard product={product} idx={idx} />
              </div>
            ))}
          </div>
          <div className="flex-1 hidden lg:flex justify-center items-start">
            {carouselHeight > 0 && (
              <ProductCarousel
                products={products}
                cardHeight={carouselHeight}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <CustomButton
            text="View All Products"
            link="/products"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
