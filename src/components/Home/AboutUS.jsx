import React from "react";
// Assuming you have Lucide-React or another icon library installed (e.g., 'lucide-react')
import { Star, Leaf, Factory, Truck } from "lucide-react";
import CustomButton from "../CustomButton";
// Agar lucide-react nahi hai, toh maine emojis ko Lucide icons se replace kiya hai
// taaki hum in par classes apply kar sakein.

const AboutUS = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex flex-col md:flex-row items-start gap-10">
        {/* ⬅️ Left Content Block (Same as before) */}
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 font-sans">
            About us
          </h2>
          <h3
            className="text-4xl md:text-5xl  text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Our Gowala Dairy Farm
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We’re a UK-based dairy brand bringing authentic Indian flavours to
            your table. Our products are made in carefully curated batches using
            fresh milk from local UK cows. From paneer that cooks like homemade,
            to khoya that makes mithais unforgettable, we honour tradition while
            upholding British quality standards.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're cooking for family, celebrating with friends, or just
            missing a taste of home — we’re here to make real food, simply and
            honestly.
          </p>

          <ul className="space-y-4 text-gray-700 text-lg">
            <h3 className="text-lg font-bold  text-gray-900 leading-tight mb-6">What Makes Us Different</h3>
            {/* List items... */}
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                ✅
              </span>{" "}
              <span>100% UK-farmed milk, carefully tested and responsibly sourced</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                ✅
              </span>{" "}
              <span>Carefully curated production batches for unmatched freshness</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                ✅
              </span>{" "}
              <span>Rooted in Indian tradition, refined for UK kitchens</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                ✅
              </span>{" "}
              <span>Supporting local farmers and ethical sourcing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3 font-bold mt-0.5">
                ✅
              </span>{" "}
              <span>Aligned with EU’s Farm to Fork values</span>
            </li>
          </ul>

          {/* <button className="mt-8 btn btn-primary px-12 py-3 rounded-full text-white font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Read More
          </button> */}

          <CustomButton text="Read More" link="/about" />
        </div>

        {/* ➡️ Right Block: Image + Feature Icons */}
        <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex flex-col">
          {/* Image */}
          <img
            src="/home/04.jpg"
            alt="Welcome to Our Gowala Dairy Farm"
            className="w-full rounded-lg shadow-2xl mb-8"
          />

          {/* --- FEATURE ICONS SECTION (Modified for Right Block) --- */}
          {/* Ismein maine border-top, padding aur grid laya hai, jaisa ki aapke code mein tha */}
          <div className="w-full pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Feature 1: 20 Years of Experience */}
              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  {/* Star icon with zoom hover */}
                  <Star size={50} strokeWidth={1} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  20 Years of Experience
                </p>
              </div>

              {/* Feature 2: Natural & Organic */}
              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  {/* Leaf icon with zoom hover */}
                  <Leaf size={50} strokeWidth={1} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Natural & Organic
                </p>
              </div>

              {/* Feature 3: Modern Technique */}
              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  {/* Factory icon with zoom hover */}
                  <Factory size={50} strokeWidth={1} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Modern Technique
                </p>
              </div>

              {/* Feature 4: Milk Farm Factory */}
              <div className="flex flex-col items-center group cursor-pointer p-2 transition duration-300">
                <div className="text-5xl text-green-600 mb-3 transition duration-300 transform group-hover:scale-110">
                  {/* Truck icon with zoom hover */}
                  <Truck size={50} strokeWidth={1} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Milk Farm Factory
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
