import React from "react";
import PageBanner from "../components/PageBanner";
import { FiCheck } from "react-icons/fi";
import CustomButton from "../components/CustomButton";
import Heading from "../components/Heading";

// 🪄 Auto Image Switch Component
const AutoImageSwitch = ({ images, name }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="relative w-full mb-4 rounded-2xl overflow-hidden"
      style={{ paddingTop: "75%" }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={name}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const products = [
  {
    name: "Paneer",
    extraLine: "Indian Cottage Cheese",
    subtitle: "Malai (Creamy Style)",
    image: "/products/07.jpg",
    description:
      "Our Malai Paneer is soft, rich, and indulgent—perfect for special curries like shahi paneer, malai kofta, or paneer butter masala. Made with full-fat milk and minimal processing, it holds shape during cooking but melts in the mouth when eaten.",
    features: [
      "Ideal for slow-cooked gravies and festive dishes",
      "No added preservatives",
      "Delivers a creamy texture without added cream",
    ],
  },
  {
    name: "Paneer",
    extraLine: "Indian Cottage Cheese",
    subtitle: "Low Fat (High Protein)",
    image: "/products/01.jpg",
    description:
      "This is the versatile, everyday paneer used in households and professional kitchens alike. Firm enough for grilling or frying, yet tender enough for bhurji, paratha stuffing, or salads. Fits the bill for calorie conscious consumers.",
    features: [
      "Low-fat, cow’s milk",
      "Clean taste with balanced firmness",
      "Cooks evenly and absorbs spices beautifully",
    ],
  },
  {
    name: "Desi Ghee",
    subtitle: "(Clarified Butter)",
    image: "/products/08.jpg",
    description:
      "This pure desi ghee is made from fresh cream, slow-cooked to retain its rich aroma and granular texture. Perfect for daily cooking, sweets, and traditional recipes.",
    features: [
      "Made from cow’s milk cream",
      "Rich aroma and golden texture",
      "Ideal for sweets and festive dishes",
    ],
  },
  {
    name: "Low Oil Pickles",
    subtitle: "(Fermented Goodness with Indian Spices)",
    images: ["/products/10.jpg", "/products/11.jpg"],
    description:
      "Our Low Oil Pickles bring authentic Indian taste with a healthy twist. Naturally fermented, spiced perfectly, and prepared using minimal oil to retain nutrition and freshness.",
    features: [
      "Low in oil, high in flavor",
      "Naturally fermented with traditional spices",
      "Handcrafted in small batches for authentic taste",
    ],
  },
  {
    name: "Khoya",
    extraLine: "Granular & Smooth",
    subtitle: "(Mawa)",
    image: "/products/03.png",
    description:
      "Khoya is slow-cooked from fresh milk—never reconstituted—giving it a rich, caramelised texture perfect for gulab jamun, barfi, pedas, and halwa.",
    features: [
      "Freshly made, not powdered",
      "Traditional flavour and consistency",
      "Ideal for festive and professional sweet making",
    ],
  },
  {
    name: "White Butter",
    subtitle: "(Unsalted, Cow’s Milk)",
    image: "/products/09.jfif",
    description:
      "Hand-churned from fresh cream, this unsalted white butter is inspired by the traditional Indian ‘makhan’.",
    features: [
      "No salt or preservatives",
      "Soft, melt-in-mouth consistency",
      "Made in specially curated batches for a superior taste",
    ],
  },
  {
    name: "Whey Protein",
    image: "/products/05.jfif",
    description:
      "Extracted naturally during the paneer-making process, our whey protein is a clean, vegetarian source of nutrition. Rich in amino acids, easy to digest, and completely free from additives.",
    features: [
      "Ideal for smoothies, fitness meals, and baking",
      "Pasteurised and ready to use",
      "Light, refreshing taste with nutritional depth",
    ],
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50 py-15">
      <PageBanner title="Products" />

      <div className="container pt-10">
        <Heading
          title={"Our Products"}
          subtitle={"We Provided the Best Products"}
          align="center"
          underline
          className="mb-12"
        />

        {/* Hero-style First Product */}
        {products[0] && (
          <div className="flex flex-col lg:flex-row bg-[#fb8c00]/10 p-8 rounded-3xl shadow-md mb-16 gap-8">
            {/* Image Left */}
            <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden rounded-2xl">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Right */}
            <div className="lg:w-3/4 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  {products[0].name}
                  {products[0].extraLine && (
                    <>
                      <br />
                      <span className="text-[#6d4c41] font-xl">
                        {products[0].extraLine}
                      </span>
                    </>
                  )}
                  {products[0].subtitle && (
                    <>
                      <br />
                      <span className="text-gray-600 text-lg">
                        {products[0].subtitle}
                      </span>
                    </>
                  )}
                </h2>

                <p className="text-gray-700 mb-4">{products[0].description}</p>

                <ul className="space-y-2 mb-4">
                  {products[0].features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <FiCheck className="text-secondary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CustomButton text="Order Now" link="/contact" />
            </div>
          </div>
        )}

        {/* Remaining Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {products.slice(1).map((product, i) => (
            <div
              key={i}
              className="bg-[#fb8c00]/10 p-6 rounded-3xl shadow-md hover:shadow-2xl 
              hover:scale-101 transition transform duration-300 border border-transparent hover:border-[#fb8c00] group"
            >
              {/* Image Section */}
              {product.images ? (
                // 🥒 Low Oil Pickles: Auto Image Switch
                <AutoImageSwitch images={product.images} name={product.name} />
              ) : (
                <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Product Name */}
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#fb8c00]">
                {product.name}
                {product.extraLine && (
                  <>
                    <br />
                    <span className="text-[#6d4c41] font-xl">
                      {product.extraLine}
                    </span>
                  </>
                )}
                {product.subtitle && (
                  <>
                    <br />
                    <span className="text-gray-600 text-lg">
                      {product.subtitle}
                    </span>
                  </>
                )}
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-4">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <FiCheck className="text-secondary mt-1" />
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
