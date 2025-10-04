import React from "react";
import Heading from "../Heading";
import { FaLeaf, FaRecycle } from "react-icons/fa";
import { GiFactory, GiFarmer } from "react-icons/gi";
import { FaGlassWater } from "react-icons/fa6";

const OurValues = () => {
  const values = [
    {
      title: "Freshness & Quality",
      icon: <FaGlassWater className="text-4xl text-primary" />,
      color: "bg-primary/20",
    },
    {
      title: "Ethical Sourcing",
      icon: <FaLeaf className="text-4xl text-accent" />,
      color: "bg-accent/20",
    },
    {
      title: "Tradition Meets Modernity",
      icon: <GiFactory className="text-4xl text-secondary" />,
      color: "bg-secondary/20",
    },
    {
      title: "Supporting Local Farmers",
      icon: <GiFarmer className="text-4xl text-highlight" />,
      color: "bg-highlight/20",
    },
    {
      title: "Sustainability",
      icon: <FaRecycle className="text-4xl text-green-600" />,
      color: "bg-green-100",
    },
  ];

  return (
    <section className="container py-20 px-6 md:px-16">
      <Heading
        title="Our Values"
        subtitle="The core principles that guide everything we do."
        align="center"
        underline={true}
        className="mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((val, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-6 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white`}
          >
            <div
              className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full ${val.color}`}
            >
              {val.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {val.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
