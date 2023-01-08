import React from "react";

const ContainerTwoSections = ({ Section1, Section2, addedClasses }) => {
  return (
    <div className=" w-full ">
      <div
        className={`w-4/5 flex lg:flex-row lg:items-center max-w-[1536px] mx-auto ${addedClasses}`}
      >
        <div className="lg:w-1/2">{Section1}</div>
        <div className="lg:w-1/2">{Section2}</div>
      </div>
    </div>
  );
};

export default ContainerTwoSections;
