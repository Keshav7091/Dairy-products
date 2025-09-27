import React from "react";
import PageBanner from "../components/PageBanner";

const Recipes = () => {
  const recipeCategories = [
    {
      title: "Paneer Recipes – High Protein, Versatile, Comforting",
      description:
        "Paneer adapts beautifully to curries, grills, and stir-fries, offering both substance and softness.",
      items: [
        {
          name: "Palak Paneer (Spinach & Paneer Curry)",
          detail:
            "Smooth curry made with spinach, paneer cubes, garlic, ginger & mild spices. Rich in iron & protein.",
          recommended: "Paneer – Full Fat",
        },
        {
          name: "Grilled Tandoori Paneer Skewers",
          detail:
            "Marinate paneer chunks in yogurt, ginger-garlic & spices, then grill until charred. Serve with chutney.",
          recommended: "Paneer – Plain",
        },
        {
          name: "Paneer Bhurji (Indian Cottage Cheese Scramble)",
          detail:
            "Quick scramble of crumbled paneer with onions, tomatoes & spices. Perfect breakfast or wrap filling.",
          recommended: "Malai Paneer",
        },
        {
          name: "Methi Paneer Paratha",
          detail:
            "Stuff wheat dough with paneer & fenugreek, pan-cook & top with white butter. Soul-satisfying!",
          recommended: "Paneer – Fresh",
        },
      ],
    },
    {
      title: "Khoya-Based Sweet Recipes – Festive, Indulgent, Timeless",
      description:
        "Traditional sweets made creamy & authentic with slow-cooked khoya, preservative-free.",
      items: [
        {
          name: "Khoya Gulab Jamun",
          detail: "Deep-fried dumplings soaked in saffron-cardamom syrup.",
          recommended: "Khoya – Smooth",
        },
        {
          name: "Khoya Barfi",
          detail: "Thickened khoya with sugar & ghee, topped with nuts.",
          recommended: "Khoya – Granular",
        },
        {
          name: "Kalakand",
          detail: "Quick dessert with khoya, condensed milk & rosewater.",
          recommended: "Khoya – Granular",
        },
        {
          name: "Gujiya Filling",
          detail: "Sweet filling with khoya, nuts, sugar & raisins.",
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
          detail: "Spread on hot parathas for a creamy, natural sweetness.",
          recommended: "White Butter",
        },
        {
          name: "Desi Butter Daal Tadka",
          detail: "Top daal with white butter & cumin-garlic tempering.",
          recommended: "White Butter",
        },
        {
          name: "Whey Protein Smoothie",
          detail:
            "Blend whey with banana, peanut butter, oats & cinnamon. A natural protein shake.",
          recommended: "Whey",
        },
        {
          name: "Soups, Dough & More",
          detail: "Use whey in soups, curries, or kneading dough.",
          recommended: "Whey",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800 py-15">
      <PageBanner title="Recipes" />

      {/* Hero */}
      {/* <section
        className="text-center py-24 px-6 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #c8f0a5, #d0f5b1, #d8f9bd, #e0feca, #e8ffd6)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          🍴 Recipes
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          Traditional favourites. Modern kitchens. Ingredients you trust.
        </p>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          With our fresh, UK-made dairy products, you can recreate authentic
          Indian taste — without compromise.
        </p>
      </section> */}

      {/* Recipe Sections */}
      {recipeCategories.map((cat, i) => (
        <section
          key={i}
          className={`py-20 px-6 md:px-16 ${
            i % 2 === 1 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {cat.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{cat.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.items.map((item, j) => (
              <div
                key={j}
                className="p-6 rounded-2xl bg-white/70 border shadow-md backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {j + 1}. {item.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {item.detail}
                </p>
                <span className="inline-block text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Recommended: {item.recommended}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Shrikhand Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-green-50 to-green-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Shrikhand Ideas – Creamy, Cool & Naturally Sweet
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Experiment with saffron, mango, or cardamom flavours — our shrikhand
          makes a refreshing dessert for every season.
        </p>
      </section>

      {/* Closing */}
      <section className="text-center py-24 px-6 md:px-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          More Recipes Coming Soon 🚀
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed">
          Want a favourite recipe featured? Or have one to share from your
          family kitchen? Email us or tag us on Instagram — we’d love to share
          your story with our community.
        </p>
        <a
          href="mailto:info@dairybrand.com"
          className="inline-block bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-semibold text-white shadow-lg transition transform hover:-translate-y-1"
        >
          ✨ Share Your Recipe
        </a>
      </section>
    </div>
  );
};

export default Recipes;
