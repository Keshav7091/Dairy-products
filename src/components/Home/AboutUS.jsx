import React from "react";
import { Leaf, Factory, Truck } from "lucide-react";
import CustomButton from "../CustomButton";
import { CheckCircle } from "lucide-react";
import Heading from "../Heading";

const AboutUS = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex flex-col md:flex-row items-start gap-10">
        {/* ⬅️ Left Content Block */}
        <div className="md:w-1/2 order-2 md:order-1">
          
          <Heading
            title="About Us"
            align="left"
            underline={true} // ✅ underline enabled
          /> 

          <h3
            className="text-4xl sm:text-5xl md:text-5xl text-gray-900 leading-snug mb-6 text-center md:text-left"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to{" "}
            <span className="block md:inline text-secondary font-extrabold">
              Cows Choice
            </span>
          </h3>

          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            We’re a UK-based dairy brand bringing authentic Indian flavours to
            your table. Our products are made in carefully curated batches using
            fresh milk from local UK cows. From paneer that cooks like homemade,
            to khoya that makes mithais unforgettable, we honour tradition while
            upholding British quality standards.
          </p>

          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            Whether you're cooking for family, celebrating with friends, or just
            missing a taste of home — we’re here to make real food, simply and
            honestly.
          </p>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {[
                "100% UK-farmed milk, carefully tested and responsibly sourced",
                "Carefully curated production batches for unmatched freshness",
                "Rooted in Indian tradition, refined for UK kitchens",
                "Supporting local farmers and ethical sourcing",
                "Aligned with EU’s Farm to Fork values",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle
                    className="text-secondary mr-3 mt-1"
                    size={20}
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <CustomButton text="Read More" link="/about" />
        </div>

        {/* ➡️ Right Block: Image + Feature Icons */}
        <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex flex-col items-center">
          <img
            src="/home/06.jfif"
            alt="Cows Choice Products"
            className="w-full rounded-lg shadow-primary mb-8 object-cover"
          />

          {/* Icons centered under image */}
          <div className="w-full pt-6 border-t border-gray-200 flex justify-center">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: Leaf, text: "Natural & Organic" },
                { icon: Factory, text: "Modern Technique" },
                { icon: Truck, text: "Quality Assurance" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer p-2 transition duration-300"
                >
                  <div className="text-4xl md:text-5xl text-secondary mb-3 transition duration-300 transform group-hover:scale-110">
                    <Icon size={50} strokeWidth={1} />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-gray-800">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
