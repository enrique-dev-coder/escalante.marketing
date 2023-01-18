import React from "react";
import { ContainerTwoSections, ContainerOneSection } from "../../Layout";

const FirstBlock = () => {
  return (
    <article className=" h-[85vh] gradient_bg ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col ">
        <h2 className="leading-none text-white text-[40px] lg:text-[60px] pt-4 font-black w-[80%] lg:w-[60%]">
          Were specialized in Maximizing{" "}
          <span className=" text-bright_yellow">ROI</span> and{" "}
          <span className=" text-bright_yellow">PROFIT</span>
        </h2>
        <div className="flex justify-between relative">
          <h2 className=" text-center bg-black/40 rounded-lg absolute  top-[50%] lef-0  lg:left-[35%] leading-none text-white text-[40px] lg:text-[60px] pt-4 font-black lg:w-[25%] ">
            In less than <span className=" text-bright_yellow">90 days</span>
          </h2>
          <div className="flex  items-end">
            <img src="/img/ivan_1.png" alt="ivan escalante" />
          </div>
          <div className="flex  items-end">
            <img src="/img/first_block_1.png" alt="marketing" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FirstBlock;
