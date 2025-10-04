import React from "react";
import { GiBullseye } from "react-icons/gi"; // Mission Icon
import { FaLeaf } from "react-icons/fa"; // Health/Nature Icon
import { AiOutlineArrowRight } from "react-icons/ai"; // Discover Icon
import { Link } from "react-router-dom";
import Heading from "../Heading";

const OurGoal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        {/* Heading */}
        <Heading 
          title="Our Goal"
          subtitle="We set out to make food that ensures your health and nutrition"
          align="center"
          underline={true}
          className="mb-12"
        />

        {/* Goal Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <FaLeaf className="text-secondary text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Health & Nutrition</h3>
            <p className="text-gray-600">
              We ensure every product supports your health and well-being with
              the best ingredients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <GiBullseye className="text-secondary text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Build a bridge between Indian tradition and British quality, local
              farms and modern kitchens.
            </p>
          </div>

          {/* Card 3 (Clickable) */}
          <Link 
            to="/about"
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 hover:bg-[#fb8c00]/10"
          >
            <AiOutlineArrowRight className="text-secondary text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Discover Our Story</h3>
            <p className="text-gray-600">
              Learn how we bring together tradition, quality, and sustainability
              in every product.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
