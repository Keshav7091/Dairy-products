import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const Recipes = () => {
  const recipeCategories = [
    {
      title: "Paneer Recipes – High Protein, Versatile, Comforting",
      description:
        "Paneer is one of the most beloved ingredients in Indian cuisine. It adapts beautifully to curries, grills, and stir-fries, offering both substance and softness without overpowering flavours. Here are some timeless favourites:",
      items: [
        {
          name: "Palak Paneer (Spinach & Paneer Curry)",
          detail:
            "A smooth, vibrant green curry made with blanched spinach, fresh paneer cubes, garlic, ginger, and mild spices. Light on the stomach and rich in iron and protein, this is a perfect winter warmer or everyday dinner option.",
          recommended: "Paneer – Full Fat",
        },
        {
          name: "Grilled Tandoori Paneer Skewers",
          detail:
            "Perfect for summer BBQs or starters, this recipe involves marinating paneer chunks in thick yoghurt, ginger-garlic paste, and tandoori masala, then grilling until charred. Serve with lemon wedges and mint chutney.",
          recommended: "Paneer – Plain",
        },
        {
          name: "Paneer Bhurji (Indian Cottage Cheese Scramble)",
          detail:
            "A quick, nutritious scramble of crumbled paneer sautéed with tomatoes, onions, turmeric, and coriander. Great for breakfast with toast or rolled into a wrap for lunch.",
          recommended: "Malai Paneer",
        },
        {
          name: "Methi Paneer Paratha",
          detail:
            "Add finely chopped methi (fenugreek) and spiced paneer to whole wheat dough, roll, and pan-cook. Top with white butter for a soul-satisfying meal.",
          recommended: "Paneer – Fresh",
        },
      ],
    },
    {
      title: "Khoya-Based Sweet Recipes – Festive, Indulgent, Timeless",
      description:
        "Khoya (or mawa) is a dense, milk-based ingredient used in Indian sweets. Ours is made the traditional way: slow-cooked, creamy, and preservative-free.",
      items: [
        {
          name: "Khoya Gulab Jamun",
          detail:
            "Soft, deep-fried dumplings made from khoya, soaked in warm cardamom-saffron sugar syrup. Rich, festive, and endlessly loved.",
          recommended: "Khoya – Smooth texture",
        },
        {
          name: "Khoya Barfi",
          detail:
            "A classic sweet made by simmering khoya with sugar and ghee until it thickens into a fudge-like consistency. Garnish with slivered pistachios and a pinch of saffron.",
          recommended: "Khoya – Granular for texture",
        },
        {
          name: "Kalakand",
          detail:
            "Quick and delicious, made with khoya, condensed milk, and a hint of rosewater or cardamom. Soft and slightly crumbly, ideal for gifting or celebrations.",
          recommended: "Khoya – Granular",
        },
        {
          name: "Gujiya Filling",
          detail:
            "Combine crumbled khoya with nuts, sugar, and raisins to make the perfect sweet filling for Holi-time gujiyas.",
          recommended: "Khoya – Any",
        },
      ],
    },
    {
      title: "White Butter & Whey – Understated Stars of the Kitchen",
      description:
        "From parathas to protein shakes, butter & whey bring natural richness and nutrition.",
      items: [
        {
          name: "White Butter with Parathas",
          detail:
            "Spread our hand-churned, unsalted butter over aloo or gobhi parathas. Its natural sweetness and creamy finish elevate the simplest meal.",
          recommended: "White Butter",
        },
        {
          name: "Desi Butter Daal Tadka",
          detail:
            "Top your slow-cooked toor or masoor daal with a dollop of white butter and fried cumin-garlic for that comforting 'maa ke haath ka khana' finish.",
          recommended: "White Butter",
        },
        {
          name: "Whey Protein Smoothie",
          detail:
            "Blend our filtered whey with banana, peanut butter, oats, and a pinch of cinnamon. A natural, vegetarian protein shake without additives or artificial flavours.",
          recommended: "Whey",
        },
        {
          name: "Soups, Dough & More",
          detail:
            "Whey is not just for shakes—use it to cook lentils, knead roti dough, or add body to broths. It's nutritious, flavourful, and sustainable.",
          recommended: "Whey",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800 pt-15">
      <PageBanner title="Recipes" />

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-light/80 to-light/90 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Traditional favourites. Modern kitchens. Ingredients you trust.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At the heart of Indian cooking lies a deep connection to home,
          heritage, and nourishment. With our fresh products, you can now
          recreate the authentic taste of Indian meals — without compromise, and
          without relying on frozen imports or powdered substitutes.
          <br />
          <br />
          Whether you’re preparing a weekday dinner, hosting friends for a
          festival, or simply missing a dish your grandmother used to make — we
          ’re here to help bring that moment back to your table.
        </p>
      </section>

      {/* Recipe Sections */}
      {recipeCategories.map((cat, i) => (
        <section
          key={i}
          className={`py-20 px-6 md:px-16 ${
            i % 2 === 1 ? "bg-light/50" : "bg-white"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {cat.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{cat.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.items.map((item, j) => (
              <div
                key={j}
                className="group p-6 rounded-2xl bg-white/70 border border-secondary/20 shadow-md backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#c62828] transition-colors duration-300">
                  {j + 1}. {item.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {item.detail}
                </p>
                <span className="inline-block text-xs font-medium text-secondary bg-secondary/20 px-3 py-1 rounded-full">
                  Recommended: {item.recommended}
                </span>
              </div>
            ))}
          </div>

          {/* Show paneer videos only for Paneer category */}
          {/* {cat.title.includes("Paneer") && (
            <div className="mt-12 grid md:grid-cols-2 gap-8 justify-center">
              <video
                src="/recipes/01.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl shadow-lg"
              ></video>
              <video
                src="/recipes/02.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl shadow-lg"
              ></video>
            </div>
          )} */}
        </section>
      ))}
    </div>
  );
};

export default Recipes;
