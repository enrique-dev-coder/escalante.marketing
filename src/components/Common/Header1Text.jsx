import React from "react";

const Header1Text = ({
  text,
  isItPageTitle,
  text_color,
  text_size,
  mb = "mb-8",
}) => {
  return (
    <>
      {isItPageTitle ? (
        <h1 className="primary_font text-primary_headers_purple font-bold text-5xl mb-8">
          {text}
        </h1>
      ) : (
        <h2
          className={`primary_font ${text_color} ${text_size} font-bold  ${mb} text-center`}
        >
          {text}
        </h2>
      )}
    </>
  );
};

export default Header1Text;
