import React from "react";

const ButtonOutlined = ({ text }) => {
  return (
    <button className="secondary_font text-hover_button_color text-lg border  border-hover_button_color  bg-white hover:bg-hover_button_color hover:text-white shadow-md  transition-all py-2 px-6 rounded-md">
      {text}
    </button>
  );
};

export default ButtonOutlined;
