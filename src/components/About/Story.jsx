import React from "react";
import CustomButton from "../CustomButton";

const Story = () => {
  const sections = [
    {
      title: "Our Goal",
      text: [
        "To bring real Indian dairy to every kitchen — honestly made, locally sourced, and deeply nourishing.",
        "We didn’t set out to be a factory. We set out to make food that feels like home.",
        "Our goal is not just to manufacture paneer or sell khoya. It’s to bring back the trust, taste, and tradition we grew up with — accessible to all without compromise.",
      ],
      icon: "🎯",
      color: "bg-green-100",
    },
    {
      title: "Why We Started",
      text: [
        "We know the struggle of searching store shelves for paneer that’s not rubbery or khoya that doesn’t taste chalky.",
        "We missed the real thing—the kind our mothers made, the kind you look forward to on a festival morning.",
        "And we believe we’re not the only ones.",
      ],
      icon: "🚀",
      color: "bg-yellow-100",
    },
    {
      title: "What We Believe",
      text: [
        "Good food starts with good intent.",
        "Local milk, treated with care, can taste like it came straight from your grandmother’s kitchen.",
        "A short supply chain is a strong supply chain.",
        "Support farmers, respect recipes, feed families something we’d be proud to serve our own.",
      ],
      icon: "🌱",
      color: "bg-blue-100",
    },
    {
      title: "What We’re Building",
      text: [
        "A bridge between cultures — where Indian traditions meet British quality.",
        "A community of trust — for consumers who want honest ingredients.",
        "A platform for growth — for local farmers, small retailers, and chefs seeking authenticity.",
        "This isn’t about scaling fast. It’s about growing right.",
      ],
      icon: "🏗️",
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="container py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Story
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Locally made. Honestly crafted. Always real.
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((sec, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full text-4xl shadow-lg ${sec.color}`}
            >
              {sec.icon}
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {sec.title}
              </h3>
              {sec.text.map((p, idx) => (
                <p key={idx} className="text-gray-700 mb-2">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <CustomButton text="Explore Our Products" link="/products" />
      </div>
    </section>
  );
};

export default Story;
