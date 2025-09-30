import React from "react";
import PageBanner from "../components/PageBanner";
import OurGoal from "../components/About/Story"; // Your existing component
import HowWereDifferent from "../components/About/HowDIffUS"; // Your existing component
import CustomButton from "../components/CustomButton";
import OurValues from "../components/About/OurValues";

import { Star, Leaf, Factory, Truck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-15">
      {/* Page Banner */}
      <PageBanner title="About Us" />

      {/* Hero Section */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-16 relative">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Welcome to Gowala
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We’re a UK-based dairy brand bringing authentic Indian flavours to
              your table. Our products are made in carefully curated batches
              using fresh milk from local UK cows.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              From paneer that cooks like homemade to khoya that makes mithais
              unforgettable, we honour tradition while upholding British quality
              standards.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our dairy products are crafted with care to ensure freshness,
              taste, and nutritional value, reflecting both Indian culinary
              heritage and modern production practices.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Whether you’re cooking for family, celebrating with friends, or
              simply missing a taste of home, we’re here to make real food,
              simply and honestly.
            </p>
            <p className="text-gray-700 text-lg">
              By combining hand-crafted recipes, local sourcing, and modern
              hygiene standards, every batch of our products represents quality,
              authenticity, and care for our customers.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex flex-col">
            {/* Image */}
            <img
              src="/home/06.jfif"
              alt="Welcome to Our Gowala Dairy Farm"
              className="w-full rounded-lg shadow-2xl mb-8"
            />
          </div>
        </div>
      </section>

      <OurGoal />
      <OurValues />
      <HowWereDifferent />

      {/* Sustainability Section */}
      <div className="max-w-6xl container p-8 md:p-16 rounded-3xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Sustainability
        </h2>
        <p className="text-gray-700 mb-4 text-lg text-center">
          Supporting local farms. Reducing our footprint. Honouring real food.
        </p>
        <p className="text-gray-700 mb-6 text-center">
          At the heart of our dairy business is a simple belief: great food
          should do good—for your health, for the planet, and for the people who
          help produce it.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Locally Sourced Milk, Always
            </h3>
            <p className="text-gray-700 mb-2">
              All our milk comes from cows raised on farms across the UK. This
              means:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Fewer food miles: No long-haul transport or imported ingredients
              </li>
              <li>Fresher product: From farm to facility within hours</li>
              <li>
                Stronger local economy: We pay fair rates to UK dairy farmers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Long Supply Chains. No Artificial Shortcuts.
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Made in the UK, reducing refrigeration needs and packaging waste
              </li>
              <li>Delivered fresh, not deep-frozen</li>
              <li>
                Produced in specially curated batches, lowering energy use and
                preventing excess inventory
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ethical Production, Minimal Waste
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Whey from paneer-making is reused, not discarded</li>
              <li>Water and energy usage is optimised through batch control</li>
              <li>
                Packaging is recyclable, exploring fully compostable options
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Responsible Today, Ambitious Tomorrow
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Introduce plant-based compostable packaging</li>
              <li>Collaborate with low-emission logistics partners</li>
              <li>
                Build a direct farmer-network model to improve traceability
              </li>
              <li>
                Support educational campaigns about real, traditional dairy vs.
                ultra-processed products
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 text-lg font-medium">
              We don’t claim to be a climate solution—but we are committed to
              being a better food business. By working with local farmers,
              producing mindfully, and reducing food miles, we’re building
              something sustainable—not just for the environment, but for the
              people and traditions behind every product.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Content Section */}
      <section className="space-y-24 max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-16">
        {/* Section 1 - Production */}
        <div className="relative flex flex-col md:flex-row items-center md:gap-16 gap-y-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Production Process
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Fresh milk from local UK farms is crafted in small batches.
                Traditional recipes meet modern standards for authentic flavor.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                {["Fresh Milk", "Small Batches", "High Quality"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="bg-green-50 text-green-800 p-2 sm:p-3 rounded-xl shadow hover:shadow-lg transition text-sm sm:text-base"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <CustomButton
                text="Learn More"
                link="/recipes"
                className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white hover:bg-green-600"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="/about/01.jfif"
              alt="Production"
              className="rounded-3xl shadow-2xl transform md:-rotate-3 w-full max-w-full"
            />
          </div>
        </div>

        {/* Section 2 - Ethics */}
        <div className="relative flex flex-col md:flex-row items-center md:gap-16 gap-y-10 bg-gray-50 p-6 sm:p-10 rounded-3xl">
          <div className="md:w-1/2">
            <img
              src="/about/02.jfif"
              alt="Ethics"
              className="rounded-3xl shadow-xl transform md:rotate-3 w-full max-w-full"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ethical & Sustainable
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Supporting local farmers and sustainable production while
              maintaining high ethical standards.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              {[
                "Local Farmers",
                "Ethical Sourcing",
                "Sustainability",
                "Quality",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg text-gray-700 text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
            <CustomButton
              text="Contact Us"
              link="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white hover:bg-green-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
