import React from "react";

// SectionHeading component takes the children prop and displays it as an h2 element.
const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
