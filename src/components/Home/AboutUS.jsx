import React from "react";
import { Star, Leaf, Factory, Truck } from "lucide-react";
import CustomButton from "../CustomButton";

const AboutUS = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex flex-col md:flex-row items-start gap-10">
        {/* ⬅️ Left Content Block */}
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-sans">
            About us
          </h2>
          <h3
            className="text-3xl md:text-5xl text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Cows Choice
          </h3>

          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            At Cows Choice, we pride ourselves on delivering high-quality dairy
            products crafted with precision and care. Our manufacturing
            processes follow the best industry practices, ensuring freshness,
            consistency, and premium quality in every batch.
          </p>
          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            From paneer and khoya to a wide range of dairy essentials, we focus
            on using responsibly sourced ingredients, modern techniques, and
            stringent quality controls to bring authentic taste and nutrition
            straight to your kitchen.
          </p>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {[
                "Premium quality products using carefully sourced ingredients",
                "Strict adherence to modern manufacturing best practices",
                "Consistent taste, freshness, and hygiene in every batch",
                "Supporting ethical sourcing and responsible production",
                "Aligned with modern food safety and EU standards",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                    ✅
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <CustomButton text="Read More" link="/about" />
        </div>

        {/* ➡️ Right Block: Image + Feature Icons */}
        <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex flex-col">
          <img
            src="/home/06.jfif"
            alt="Cows Choice Products"
            className="w-full rounded-lg shadow-2xl mb-8 object-cover"
          />

          <div className="w-full pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-4xl md:text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  <Star size={50} strokeWidth={1} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  20 Years of Experience
                </p>
              </div>

              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-4xl md:text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  <Leaf size={50} strokeWidth={1} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  Natural & Organic
                </p>
              </div>

              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-4xl md:text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  <Factory size={50} strokeWidth={1} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  Modern Technique
                </p>
              </div>

              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-4xl md:text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  <Truck size={50} strokeWidth={1} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
