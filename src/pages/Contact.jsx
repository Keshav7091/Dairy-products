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
        "https://api.cowschoice.com/api/form/send",
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
      <section className="py-20 bg-gradient-to-b from-light via-gray-50 to-light relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug capitalize">
            <span className="text-cow-gradient">
              Let’s Bring Real Indian dairy
            </span>
            <br />
            to more tables — together.
          </h2>

          <p className="text-gray-700 mb-10 leading-relaxed text-lg md:text-xl">
            Whether you’re a retailer, restaurant, distributor, or an
            independent business looking for high-quality, milk and
            milk-based products — we’d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Ethnic and mainstream grocery retailers",
              "Restaurants and food service partners",
              "Caterers and dessert brands",
              "Local markets and wholesalers",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-light rounded-2xl p-6 border border-secondary/30 hover:border-secondary shadow-md hover:shadow-xl transition-all flex items-center justify-center text-center"
              >
                <p className="text-primary font-semibold text-lg md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg md:text-xl">
            Our products are trusted for their{" "}
            <span className="text-secondary font-semibold">
              quality, freshness, and consistency
            </span>
            . We’re always open to discussing custom orders, bulk pricing, and
            B2B logistics.
          </p>

          <CustomButton text="Partner with Us" link="/contact" />
        </div>

        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 opacity-30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Form + Info */}
      <div className="bg-image py-10 md:py-20">
        <section className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div className="backdrop-blur-lg border border-secondary/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-3xl font-bold mb-6 text-secondary">
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
                className="w-full px-4 py-4 rounded-md focus:outline-none border border-secondary text-black text-lg"
              />
              <input
                type="text"
                name="company"
                placeholder="Business / Company Name"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-black text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-black text-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-black text-lg"
              />
              <input
                type="text"
                name="city"
                placeholder="City / Region"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-black text-lg"
              />

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-black text-lg"
              >
                <option value="">Select Business Type</option>
                <option>Retailer</option>
                <option>Restaurant</option>
                <option>Distributor</option>
                <option>Other</option>
              </select>

              <div>
                <p className="mb-2 font-semibold text-secondary text-lg">
                  Products of Interest:
                </p>
                <div className="grid grid-cols-2 gap-3 text-base md:text-lg">
                  {["Paneer","Khoya","White Butter","Shrikhand","Whey","Other"].map((product) => (
                    <label key={product} className="flex items-center gap-2">
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
                className="w-full px-4 py-4 rounded-md border border-secondary text-lg"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message / Additional Requirements"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-md border border-secondary text-lg resize-none"
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

          {/* Right: Contact Info */}
          <div className="backdrop-blur-lg border border-secondary/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all max-h-full">
            <h3 className="text-3xl font-bold mb-6 text-secondary">
              Prefer Email?
            </h3>
            <p className="mb-6">
              You can also reach us directly — we’re happy to send you a
              catalogue, samples, or pricing info upon request.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MdOutlineMail className="text-secondary text-2xl" />
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <a
                    href="mailto:info@dairycompany.com"
                    className="hover:text-[#fb8c00]"
                  >
                    cowschoice@cowschoice.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdOutlinePhone className="text-secondary text-2xl" />
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <a href="tel:+44xxxxxx" className="hover:text-[#fb8c00]">
                    +44 xxxx xxxxxx
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdOutlineLocationOn className="text-secondary text-2xl" />
                <div>
                  <h4 className="font-semibold text-primary">Registered Office</h4>
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
