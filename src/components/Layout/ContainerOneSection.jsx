import React from "react";

const ContainerOneSection = ({ centered, bgColor, Section, addedClasses }) => {
  return (
    <div className=" w-full ">
      <div
        className={`w-4/5 flex lg:flex-col max-w-[1536px] mx-auto ${
          centered && "justify-center"
        } ${bgColor} ${addedClasses}`}
      >
        <div>{Section}</div>
      </div>
    </div>
  );
};

export default ContainerOneSection;
