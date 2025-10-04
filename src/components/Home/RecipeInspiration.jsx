import React from "react";
import { FaHeart } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "../CustomButton";
import Heading from "../Heading";

const RecipeInspiration = () => {
  const recipes = [
    { name: "Palak Paneer", image: "/products/04.jpg" },
    { name: "Gulab Jamun", image: "/products/02.jpg" },
    { name: "Paneer Tikka Wrap", image: "/products/07.avif" },
  ];

  return (
    <section className="py-24 bg-image">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        {/* --- Quick Recipe Inspiration --- */}
        <div className="mb-24 text-center">
          <Heading
            title="Quick Recipe Inspiration"
            subtitle="Delicious ideas to make your meals exciting"
            align="center"
            underline={true}
            className="mb-12"
          />

          <div className="flex justify-center flex-wrap gap-6">
            {recipes.map((recipe, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64 md:w-72 p-6 flex flex-col items-center"
              >
                <div className="overflow-hidden rounded-2xl w-full h-40">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {recipe.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CustomButton text="View All Recipes" link="/recipes" />
          </div>
        </div>

        {/* --- Health, Tradition & Sustainability --- */}
        <div className="text-center mb-12">
          <Heading
            title="Health, Tradition & Sustainability"
            subtitle="Our food is more than just flavour. It’s rooted in:"
            align="center"
            underline={true}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 justify-items-center">
            {/* Nutritional Balance */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <FaHeart className="text-secondary text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Nutritional Balance</h3>
              <p className="text-gray-600">
                Protein, calcium & probiotics included for healthy meals.
              </p>
            </div>

            {/* Generational Knowledge */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <GiCookingPot className="text-secondary text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Generational Knowledge
              </h3>
              <p className="text-gray-600">
                Authentic recipes inspired by Indian family kitchens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeInspiration;
