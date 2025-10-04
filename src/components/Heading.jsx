import React from "react";

const Heading = ({
  title,
  subtitle,
  align = "left",
  size = "5xl",
  underline = false,
  className = "",
}) => {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={`mb-6 ${className} ${alignment}`}>
      <h2
        className={`font-bold font-sans text-${size} text-primary mb-2 ${
          underline ? "border-b-4 border-primary inline-block pb-1" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 text-base md:text-lg`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
