import React from "react";
import PageBanner from "../components/PageBanner";
import { FiCheck } from "react-icons/fi";
import CustomButton from "../components/CustomButton";

const products = [
  {
    name: "Paneer – Malai (Creamy Style)",
    image: "/products/04.jpg",
    sizes: ["200g", "500g", "1000g vacuum-sealed blocks"],
    description:
      "Our Malai Paneer is soft, rich, and indulgent—perfect for special curries like shahi paneer, malai kofta, or paneer butter masala. Made with full-fat milk and minimal processing, it holds shape during cooking but melts in the mouth when eaten.",
    features: [
      "Ideal for slow-cooked gravies and festive dishes",
      "No added preservatives",
      "Delivers a creamy texture without added cream",
    ],
  },
  {
    name: "Paneer – Low Fat (High Protein)",
    image: "/products/06.jpg",
    sizes: ["200g", "500g", "1000g vacuum-sealed blocks"],
    description:
      "This is the versatile, everyday paneer used in households and professional kitchens alike. Firm enough for grilling or frying, yet tender enough for bhurji, paratha stuffing, or salads. Fits the bill for calorie conscious consumers.",
    features: [
      "Low-fat, cow’s milk",
      "Clean taste with balanced firmness",
      "Cooks evenly and absorbs spices beautifully",
    ],
  },
  {
    name: "Khoya (Mawa)",
    image: "/products/03.png",
    sizes: ["200g", "500g blocks (granular or smooth)"],
    description:
      "Khoya is slow-cooked from fresh milk—never reconstituted—giving it a rich, caramelised texture perfect for gulab jamun, barfi, pedas, and halwa.",
    features: [
      "Freshly made, not powdered",
      "Traditional flavour and consistency",
      "Ideal for festive and professional sweet making",
    ],
  },
  {
    name: "Whey Protein",
    image: "/products/05.jpg",
    sizes: ["500ml bottle", "1L pouch"],
    price: "£3.75 (500ml) | £6.50 (1L)",
    description:
      "Extracted naturally during the paneer-making process, our whey protein is a clean, vegetarian source of nutrition. Rich in amino acids, easy to digest, and completely free from additives.",
    features: [
      "Ideal for smoothies, fitness meals, and baking",
      "Pasteurised and ready to use",
      "Light, refreshing taste with nutritional depth",
    ],
  },
  {
    name: "White Butter (Unsalted, Cow’s Milk)",
    image: "/products/01.jpg",
    sizes: ["200g", "500g tubs"],
    description:
      "Hand-churned from fresh cream, this unsalted white butter is inspired by the traditional Indian ‘makhan’.",
    features: [
      "No salt or preservatives",
      "Soft, melt-in-mouth consistency",
      "Made in specially curated batches for a superior taste",
    ],
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50 py-15">
      <PageBanner title="Products" />

      <div className="container pt-10">

      {/* Products Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans text-center">
          Our Product
        </h2>
        <h3
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          We Provided the Best Product
        </h3>
        <p className="text-gray-700 text-lg md:text-xl">
          Authentic Indian dairy made fresh in the UK.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-green-50 p-6 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-transparent hover:border-green-300 group"
          >
            {/* Product Image */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-green-700">
              {product.name}
            </h2>

            {/* Price */}
            {product.price && (
              <p className="text-green-700 font-semibold mb-2">
                {product.price}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Pack Sizes */}
            <p className="font-medium text-gray-900 mb-3">
              Pack Size: {product.sizes.join(" , ")}
            </p>

            {/* Features with icons */}
            <ul className="space-y-2 mb-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <FiCheck className="text-green-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <CustomButton text="Order Now" link="/contact" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Products;
