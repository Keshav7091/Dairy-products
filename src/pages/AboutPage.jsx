import React from "react";
import PageBanner from "../components/PageBanner";
import Story from "../components/About/Story"; // Your existing component
import HowWereDifferent from "../components/About/HowDIffUS"; // Your existing component
import CustomButton from "../components/CustomButton";
import OurValues from "../components/About/OurValues";
import Heading from "../components/Heading";

const sustainabilitySections = [
  {
    title: "Locally Sourced Milk, Always",
    text: "All our milk comes from cows raised on farms across the Europe and UK. This means:",
    list: [
      "Fewer food miles: No long-haul transport or imported ingredients",
      "Fresher product: From farm to facility within hours",
      "Stronger local economy: We pay fair rates to UK dairy farmers",
    ],
  },
  {
    title: "No Long Supply Chains. No Artificial Shortcuts.",
    list: [
      "Made in the UK, Reducing refrigeration needs and packaging waste",
      "Delivered fresh, not deep-frozen",
      "Produced in specially curated batches, lowering energy use and preventing excess inventory",
    ],
  },
  {
    title: "Ethical Production, Minimal Waste",
    list: [
      "Whey from paneer-making is reused, not discarded",
      "Water and energy usage is optimised through batch control",
      "Packaging is recyclable, exploring fully compostable options",
    ],
  },
  {
    title: "Responsible Today, Ambitious Tomorrow",
    list: [
      "Introduce plant-based compostable packaging",
      "Collaborate with low-emission logistics partners",
      "Build a direct farmer-network model to improve traceability",
      "Support educational campaigns about real, traditional dairy vs. ultra-processed products",
    ],
  },
  {
    text: "We don’t claim to be a climate solution—but we are committed to being a better food business. By working with local farmers, producing mindfully, and reducing food miles, we’re building something sustainable—not just for the environment, but for the people and traditions behind every product.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50 pt-15">
      {/* Page Banner */}
      <PageBanner title="About Us" />

      {/* Hero Section */}
      <section className="py-10 md:py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-16 relative">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <h3
              className="text-2xl sm:text-3xl md:text-5xl leading-snug mb-6 text-left md:text-left whitespace-nowrap font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Welcome to{" "}
              <span className="text-secondary font-extrabold">Cows Choice</span>
            </h3>

            <p className="text-lg mb-4">
              We’re a UK-based dairy brand bringing authentic Indian flavours to
              your table. Our products are made in carefully curated batches
              using fresh milk from local UK cows.
            </p>
            <p className="text-lg mb-4">
              From paneer that cooks like homemade to khoya that makes mithais
              unforgettable, we honour tradition while upholding British quality
              standards.
            </p>
            <p className="text-lg mb-4">
              Our dairy products are crafted with care to ensure freshness,
              taste, and nutritional value, reflecting both Indian culinary
              heritage and modern production practices.
            </p>
            <p className="text-lg mb-4">
              Whether you’re cooking for family, celebrating with friends, or
              simply missing a taste of home, we’re here to make real food,
              simply and honestly.
            </p>
            <p className="text-lg">
              By combining hand-crafted recipes, local sourcing, and modern
              hygiene standards, every batch of our products represents quality,
              authenticity, and care for our customers.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex flex-col">
            {/* Image */}
            <img
              src="/home/06.jpg"
              alt="Welcome to Our Gowala Dairy Farm"
              className="w-full h-[85vh] rounded-lg shadow-2xl mb-8"
            />
          </div>
        </div>
      </section>

      <Story />
      <OurValues />
      <HowWereDifferent />

      {/* Sustainability Section */}
      <div className="max-w-6xl container p-8 md:p-16 rounded-3xl ">
        <Heading
          title="Sustainability"
          subtitle="Supporting local farms. Reducing our footprint. Honouring real food."
          align="center"
          underline={true}
          className="mb-10"
        />
        <p className="text-gray-700 mb-6 text-center">
          At the heart of our dairy business is a simple belief: great food
          should do good—for your health, for the planet, and for the people who
          help produce it.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {sustainabilitySections.map((sec, i) => (
            <div key={i}>
              {sec.title && (
                <h3 className="text-xl font-semibold mb-2">
                  {sec.title}
                </h3>
              )}

              {sec.text && (
                <p className="text-gray-700 mb-2 text-lg font-medium">
                  {sec.text}
                </p>
              )}

              {sec.list && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {sec.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Content Section */}
      <section className="space-y-24 max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-16">
        {/* Section 1 - Production */}
        <div className="relative flex flex-col md:flex-row items-center md:gap-16 gap-y-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Our Production Process
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Fresh milk from local UK farms is crafted in small batches.
                Traditional recipes meet modern standards for authentic flavor.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                {["Fresh Milk", "Small Batches", "High Quality"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="bg-light text-secondary p-2 sm:p-3 rounded-xl shadow hover:shadow-lg transition text-sm sm:text-base"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              {/* Button */}
              <CustomButton
                text="Learn More"
                link="/recipes"
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
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Ethical & Sustainable
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Supporting local farmers and sustainable production while
              maintaining high ethical standards.
            </p>

            {/* Grid Tags */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              {[
                "Local Farmers",
                "Ethical Sourcing",
                "Sustainability",
                "Quality",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg text-secondary text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Button */}
            <CustomButton
              text="Contact Us"
              link="/contact"
              
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
