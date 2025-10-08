import React from "react";
import CustomButton from "../CustomButton";
import Heading from "../Heading";

// 🔄 Auto Image Switch Component (only used for Low Oil Pickles)
const AutoImageSwitch = ({ images, name }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // switch every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-2xl">
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
      "Our Malai Paneer is soft, rich, and indulgent—perfect for special curries like shahi paneer, malai kofta, or paneer butter masala.",
  },
  {
    name: "Paneer",
    extraLine: "Indian Cottage Cheese",
    subtitle: "Low Fat (High Protein)",
    image: "/products/01.jpg",
    description:
      "This is the versatile, everyday paneer used in households and professional kitchens alike.",
  },
  {
    name: "Desi Ghee",
    subtitle: "(Clarified Butter)",
    image: "/products/08.jpg",
    description:
      "Firm enough for grilling or frying, yet tender enough for bhurji, paratha stuffing, or salads.",
  },
  {
    name: "Low Oil Pickles",
    subtitle: "(Fermented Goodness with Indian Spices )",
    images: ["/products/10.jpg", "/products/11.jpg"],
    description:
      "Firm enough for grilling or frying, yet tender enough for bhurji, paratha stuffing, or salads.",
  },
  {
    name: "Khoya",
    extraLine: "Granular & Smooth",
    subtitle: "(Mawa)",
    image: "/products/03.png",
    description:
      "Khoya is slow-cooked from fresh milk—never reconstituted—giving it a rich, caramelised texture.",
  },
  {
    name: "White Butter",
    subtitle: "(Unsalted, Cow’s Milk)",
    image: "/products/09.jfif",
    description:
      "Hand-churned from fresh cream, this unsalted white butter is inspired by the traditional Indian ‘makhan’.",
  },
  {
    name: "Whey Protein",
    image: "/products/05.jfif",
    description:
      "Extracted naturally during the paneer-making process, our whey protein is a clean, vegetarian source of nutrition.",
  },
];

// Single Product Component (Compact Version)
const ProductItem = ({ product, reverse }) => (
  <div
    className={`flex flex-col lg:flex-row gap-6 items-center mb-12 ${
      reverse ? "lg:flex-row-reverse" : ""
    }`}
  >
    {/* Image */}
    <div className="lg:w-2/6 w-full overflow-hidden rounded-2xl group">
      {product.images ? (
        // 👉 Only Low Oil Pickles auto switch karega
        <AutoImageSwitch images={product.images} name={product.name} />
      ) : (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition transform duration-300"
        />
      )}
    </div>

    {/* Content */}
    <div className="lg:w-4/6 w-full flex flex-col justify-center text-center lg:text-left p-2">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">
        {product.name}
        {product.extraLine && (
          <>
            <br />
            <span className="text-[#6d4c41] font-semibold">
              {product.extraLine}
            </span>
          </>
        )}
        {product.subtitle && (
          <>
            <br />
            <span className="text-gray-600 text-md">{product.subtitle}</span>
          </>
        )}
      </h2>

      <p className="text-gray-700 mb-3 text-sm">{product.description}</p>

      <CustomButton
        text="Order Now"
        className="w-full sm:w-1/2 md:w-1/3 lg:w-[25%] whitespace-nowrap"
        link="/contact"
      />
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="py-2">
      <div className="container pt-10">
        <Heading
          title={"Our Products"}
          subtitle={"We Provided the Best Products"}
          align="center"
          underline
          className="mb-10"
        />

        {/* All Products */}
        {products.map((product, idx) => (
          <ProductItem key={idx} product={product} reverse={idx % 2 === 1} />
        ))}

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <CustomButton
            text="View All Products"
            link="/products"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
