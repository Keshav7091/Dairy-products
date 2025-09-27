import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "Freshness & Quality",
      icon: "🥛",
      color: "bg-green-100",
    },
    {
      title: "Ethical Sourcing",
      icon: "🌱",
      color: "bg-yellow-100",
    },
    {
      title: "Tradition Meets Modernity",
      icon: "🏛️",
      color: "bg-blue-100",
    },
    {
      title: "Supporting Local Farmers",
      icon: "🚜",
      color: "bg-pink-100",
    },
    {
      title: "Sustainability",
      icon: "♻️",
      color: "bg-purple-100",
    },
  ];

  return (
    <section className="container py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Values
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          The core principles that guide everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((val, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-6 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white`}
          >
            <div
              className={`flex items-center justify-center w-20 h-20 text-4xl mb-4 rounded-full ${val.color}`}
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
