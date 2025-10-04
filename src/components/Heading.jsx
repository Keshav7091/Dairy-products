import React from "react";

const Heading = ({
  title,
  subtitle,
  align = "left",
  size = "3xl", // default desktop size
  underline = false,
  className = "",
}) => {
  // Alignment
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  // Responsive sizes (mobile: sm, tablet: md, desktop: lg)
  const sizeClasses = {
    "3xl": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    "4xl": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    "5xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    "6xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  };

  return (
    <div className={`mb-6 ${className} ${alignment}`}>
      <h2
        className={`font-bold font-sans ${sizeClasses[size] || sizeClasses["5xl"]} text-primary mb-2 ${
          underline ? "border-b-4 border-primary inline-block pb-1" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
