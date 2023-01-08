import React from "react";

const Header2Text = ({
  text,
  color = "text-secondary_headers",
  fontSize = "text-xl",
  addedClasses,
}) => {
  return (
    <h2
      className={`primary_font  font-bold ${fontSize} lg:text-2xl mb-3 ${color} ${addedClasses}`}
    >
      {text}
    </h2>
  );
};

export default Header2Text;
