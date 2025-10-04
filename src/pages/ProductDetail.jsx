import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Star } from "lucide-react"; // reuse your rating component


const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center text-yellow-400">
    {[...Array(totalStars)].map((_, i) => (
      <Star
        key={i}
        size={18}
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "currentColor" : "gray"}
        className="mr-0.5"
      />
    ))}
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h2>
          
        <StarRating rating={product.rating} />
          <span className="text-gray-500 mb-4">
            ({product.reviews} Reviews)
          </span>
          {/* <p className="text-2xl font-extrabold text-green-700 mb-6">
            ${product.price.toFixed(2)}
          </p> */}
          <p className="text-gray-600 mb-6">
            Lorem ipsum description for {product.name}. Here you can add product
            details, benefits, and features.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
