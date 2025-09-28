import React from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Utensils,
  Truck,
  Package,
  Snowflake,
  Leaf,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <ShoppingCart className="w-10 h-10 text-green-600" />,
    title: "Retail Supply",
    description:
      "Supplying supermarkets & local stores with authentic paneer, milk, and ghee.",
  },
  {
    id: 2,
    icon: <Utensils className="w-10 h-10 text-green-600" />,
    title: "Restaurant & Catering",
    description:
      "Bulk supply for restaurants, caterers, and event kitchens with consistent quality.",
  },
  {
    id: 3,
    icon: <Truck className="w-10 h-10 text-green-600" />,
    title: "Distributor Partnerships",
    description:
      "Seamless B2B distribution model with strong demand and easy logistics.",
  },
  {
    id: 4,
    icon: <Package className="w-10 h-10 text-green-600" />,
    title: "Custom Orders",
    description:
      "Tailored pack sizes, special bulk pricing, and private label opportunities.",
  },
  {
    id: 5,
    icon: <Snowflake className="w-10 h-10 text-green-600" />,
    title: "Logistics & Cold Chain",
    description:
      "Reliable farm-to-fork cold chain ensuring freshness & quality.",
  },
  {
    id: 6,
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Sustainability Promise",
    description:
      "Eco-friendly packaging, supporting local farmers, and ethical sourcing.",
  },
];

const whyChooseUs = [
  {
    id: 1,
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    title: "Authentic & Fresh",
    description: "Traditional Indian recipes with UK-sourced milk.",
  },
  {
    id: 2,
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    title: "Trusted by Chefs",
    description: "Supplying restaurants, retailers, and caterers nationwide.",
  },
  {
    id: 3,
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    title: "Sustainability Focused",
    description: "Local farms, recyclable packaging, zero waste approach.",
  },
];

const Services = () => {
  return (
    <div className="py-15">
      <PageBanner title="Services" />

      <section className="py-16 bg-gray-50" id="services">
        <div className="container px-6 lg:px-20">
          {/* Services Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering authentic Indian dairy with modern supply solutions.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 
              hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-gray-800 mb-3 text-center 
                transition-colors duration-300 group-hover:text-green-600"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We’re not just another dairy supplier—we’re partners in quality,
              trust, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 
              hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 text-center 
                transition-colors duration-300 group-hover:text-green-600"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Trade Enquiry CTA */}
          <div
            className="text-white rounded-2xl p-10 text-center shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to right,#64a019,#6ca821,#73b128,#7bb92f,#83c236)",
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Trade Enquiries Welcome</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Looking to stock our products or partner with us? Get in touch
              today for wholesale pricing, bulk orders, and distributor
              opportunities.
            </p>
            <Link
              to="/contact" // 'href' attribute 'to' mein badal gaya
              className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
