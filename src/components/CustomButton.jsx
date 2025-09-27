import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable Button Component
 * Props:
 * - text: Button ke andar ka text (string)
 * - link: Button ka redirect path (string)
 * - type: "button" ya "link" (default: "link")
 */
const CustomButton = ({ text, link = "#", type = "link" }) => {
  const baseClasses =
    "mt-8 px-12 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 btn btn-primary hover:bg-green-500";

  if (type === "button") {
    return <button className={baseClasses}>{text}</button>;
  }

  return (
    <Link to={link} className={`inline-block ${baseClasses}`}>
      {text}
    </Link>
  );
};

export default CustomButton;
