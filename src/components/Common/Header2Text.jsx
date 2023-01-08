import React from "react";

const Header2Text = ({
  text,
  color = "text-secondary_headers",
  addedClasses,
}) => {
  return (
    <h2
      className={`primary_font  font-bold text-2xl mb-3 ${color} ${addedClasses}`}
    >
      {text}
    </h2>
  );
};

export default Header2Text;
