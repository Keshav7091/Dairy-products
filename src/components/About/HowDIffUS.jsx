import React from "react";
import CustomButton from "../CustomButton";
import Heading from "../Heading";
import { FaCheck  } from "react-icons/fa";

const HowDIffUS = () => {
  return (
    <section className="container py-15 px-6 md:px-16">
      
      {/* Hero / Title */}
      <Heading 
          title="How We’re Different"
          subtitle="Crafted in the UK. Rooted in Tradition. Driven by Quality."
          align="center"
          underline={true}
          className="mb-12"
      />

      {/* Grid: Image + Key Points */}
      <div className="md:flex md:items-center md:gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/about/03.jfif"
            alt="Cows Choice"
            className="rounded-2xl shadow-2xl object-cover w-full h-[65vh]"
          />
        </div>

        {/* Right: Text + Points */}
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6">
            All our products begin with one uncompromising standard: fresh milk sourced exclusively from UK farms, upholding the highest ethical and quality standards.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <FaCheck  className="text-secondary  text-xl mt-1" />
              Milk delivered directly from farm to facility for unmatched freshness.
            </li>
            <li className="flex items-start gap-3">
              <FaCheck  className="text-secondary text-xl mt-1" />
              Traditional Indian recipes perfected with hygiene and safety standards.
            </li>
            <li className="flex items-start gap-3">
              <FaCheck  className="text-secondary  text-xl mt-1" />
              Supporting local farmers & ethical sourcing.
            </li>
          </ul>

          <CustomButton text="Explore Our Products" link="/products" />
        </div>
      </div>
    </section>
  );
};

export default HowDIffUS;
