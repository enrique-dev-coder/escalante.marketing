import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <button className="secondary_font text-white text-lg  bg-primary_button_color hover:bg-hover_button_color  shadow-md  transition-all py-2 px-6 rounded-md">
      {text}
    </button>
  );
};

export default ButtonPrimary;
