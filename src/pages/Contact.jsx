import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import PageBanner from "../components/PageBanner";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
    products: [],
    volume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        products: checked
          ? [...prev.products, value]
          : prev.products.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Submitting your enquiry...");
    try {
      await axios.post(
        "https://peswani-pixels-mailer.onrender.com/send-mail",
        formData
      );
      toast.dismiss();
      toast.success("Enquiry sent successfully!");
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        city: "",
        businessType: "",
        products: [],
        volume: "",
        message: "",
      });
    } catch {
      toast.dismiss();
      toast.error("Failed to send enquiry ❌");
    }
  };

  return (
    <div className="pt-15">
      <PageBanner title="Contact Us" />

      <Toaster position="top-right" reverseOrder={false} />

      {/* Intro */}
      {/* Intro */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
              Let’s bring real Indian dairy
            </span>
            <br />
            to more tables — together.
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 mb-10 leading-relaxed text-lg md:text-xl">
            Whether you’re a retailer, restaurant, distributor, or an
            independent business looking for high-quality, UK-made paneer and
            milk-based products — we’d love to hear from you.
          </p>

          {/* Partner Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Ethnic and mainstream grocery retailers",
              "Restaurants and food service partners",
              "Caterers and dessert brands",
              "Local markets and wholesalers",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 shadow-md hover:shadow-xl transition-all flex items-center justify-center text-center"
              >
                <p className="text-gray-800 font-semibold text-lg md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Extra Info */}
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg md:text-xl">
            Our products are trusted for their{" "}
            <span className="text-green-600 font-semibold">
              quality, freshness, and consistency
            </span>
            . We’re always open to discussing custom orders, bulk pricing, and
            B2B logistics.
          </p>

          {/* CTA */}
          <CustomButton text="Partner with Us" link="/contact" />
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-200 opacity-30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Form + Info */}
      {/* Form + Info */}
      <div className="bg-image">
        <section className="py-20 container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="backdrop-blur-lg border border-green-400/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-3xl font-bold mb-6 text-green-400">
              Trade Enquiry Form
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md focus:outline-none border border-gray-700 text-black text-lg"
              />
              <input
                type="text"
                name="company"
                placeholder="Business / Company Name"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-black text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-black text-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-black text-lg"
              />
              <input
                type="text"
                name="city"
                placeholder="City / Region"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-black text-lg"
              />

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-black text-lg"
              >
                <option value="">Select Business Type</option>
                <option>Retailer</option>
                <option>Restaurant</option>
                <option>Distributor</option>
                <option>Other</option>
              </select>

              {/* Products of Interest */}
              <div>
                <p className="mb-2 font-semibold text-green-400 text-lg">
                  Products of Interest:
                </p>
                <div className="grid grid-cols-2 gap-3 text-base md:text-lg">
                  {[
                    "Paneer",
                    "Khoya",
                    "White Butter",
                    "Shrikhand",
                    "Whey",
                    "Other",
                  ].map((product) => (
                    <label
                      key={product}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        value={product}
                        checked={formData.products.includes(product)}
                        onChange={handleChange}
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="text"
                name="volume"
                placeholder="Expected Monthly Volume (optional)"
                value={formData.volume}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-lg"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message / Additional Requirements"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-gray-700 text-lg resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-md font-semibold btn btn-primary text-lg transition-all duration-300 cursor-pointer"
              >
                <FiSend size={20} />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-lg border border-green-400/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-lg">
            <h3 className="text-3xl font-bold mb-6 text-green-400">
              Prefer Email?
            </h3>
            <p className="mb-6">
              You can also reach us directly — we’re happy to send you a
              catalogue, samples, or pricing info upon request.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MdOutlineMail className="text-green-400 text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:info@dairycompany.com"
                    className="hover:text-green-400"
                  >
                    info@dairycompany.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdOutlinePhone className="text-green-400 text-2xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+44xxxxxx" className="hover:text-green-400">
                    +44 xxxx xxxxxx
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdOutlineLocationOn className="text-green-400 text-2xl" />
                <div>
                  <h4 className="font-semibold">Registered Office</h4>
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-lg">
              <h4 className="font-semibold mb-2 text-green-400">
                Customer Relations & Sales
              </h4>
              <p>
                If you're interested in visiting our facility, becoming a
                stockist, or discussing exclusive partnerships, we’re ready when
                you are.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
