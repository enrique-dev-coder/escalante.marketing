import React from "react";

const ButtonPrimary = ({ text, full }) => {
  return (
    <button
      className={`${
        full && "w-full"
      } secondary_font text-lg  bg-primary_button_color hover:bg-hover_button_color  shadow-md  transition-all py-2 px-6 rounded-md`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
