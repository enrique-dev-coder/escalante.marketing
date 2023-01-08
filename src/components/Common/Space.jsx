import React from "react";

const Space = ({ children, spaceBetween }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 ${
        spaceBetween && "justify-between"
      }`}
    >
      {children}
    </div>
  );
};

export default Space;
