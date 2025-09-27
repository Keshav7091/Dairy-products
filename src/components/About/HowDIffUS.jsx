import React from "react";
import CustomButton from "../CustomButton";
// import PageBanner from "../components/PageBanner";

const HowDIffUS = () => {
  return (
    <section className="container  py-20 px-6 md:px-16">
      
      {/* Hero / Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How We’re Different
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Crafted in the UK. Rooted in Tradition. Driven by Quality.
        </p>
      </div>

      {/* Grid: Image + Key Points */}
      <div className="md:flex md:items-center md:gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/about/01.jpg"
            alt="Dairy Production"
            className="rounded-2xl shadow-2xl object-cover w-full h-full"
          />
        </div>

        {/* Right: Text + Points */}
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6">
            All our products begin with one uncompromising standard: fresh milk sourced exclusively from UK farms, upholding the highest ethical and quality standards.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✔</span>
              Milk delivered directly from farm to facility for unmatched freshness.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✔</span>
              Traditional Indian recipes perfected with UK hygiene and safety standards.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✔</span>
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
